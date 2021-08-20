<?php

defined('BASEPATH') or exit('No direct script access allowed');
require APPPATH . '/libraries/REST_Controller.php';

use Restserver\Libraries\REST_Controller;

class Shopclient extends REST_Controller
{
    function __construct($config = 'rest')
    {
        parent::__construct($config);
        if ($this->server->require_scope()) {
            $this->load->model('Oauthclients');
            $this->load->model('Oauthaccesstokens');
            $this->load->model('Shopclients');
            $this->load->model('Billing');
            $this->load->model('Shops');
            $this->load->model('Shopapps');
            $this->load->model('Shopservices');
        }
    }
    public function index_get($id = NULL, $deleted = NULL, $limit = NULL, $offset = NULL)
    {
        $results = [];
        $results = ['deleted' => $deleted, 'limit' => $limit, 'offset' => $offset];
        $results['list'] = $this->Shopclients->get_by(NULL, FALSE, $deleted, $limit, $offset);
        $results['total']  = $this->Shopclients->count_rows(NULL, $deleted);
        $results['total_billing'] = 0;
        foreach ($results['list'] as $index => $obj) {
            $results['total_billing'] += $results['list'][$index]->billing = $this->Billing->amount($obj->id);
            if ($id == $obj->id) $results['entity'] = $results['list'][$index];
        }
        $results['apps'] = $this->Oauthclients->get_by(['has_assigned' => FALSE], FALSE, $deleted, $limit, $offset);
        return $this->response($results);
    }
    public function filter_post()
    {
        $results['list'] = $this->Shopclients->get_by(NULL, FALSE, NULL, NULL, NULL, $this->post('search'), ['id', 'name', 'email', 'phone']);
        $results['total_billing'] = 0;
        foreach ($results['list'] as $index => $obj) {
            $results['total_billing'] += $results['list'][$index]->billing = $this->Billing->amount($obj->id);
        }
        $results['total']  = count($results['list']);
        return $this->response($results);
    }
    public function edit_get($id = NULL)
    {
        if (!empty($id)) {
            $results['entity']  = $this->Shopclients->get($id, TRUE);
            return $this->response($results);
        } else {
            return $this->response(['status' => FALSE, 'message' => 'invalid request'], REST_Controller::HTTP_BAD_REQUEST);
        }
    }
    public function index_post()
    {
        if ($this->Shopclients->validate()) {
            $this->db->trans_start();
            $entity = $this->Shopclients->entity($this->post());
            if (!empty($entity['id'])) {
                $this->Shopclients->save($entity, $entity['id']);
            } else {
                $entity['password'] = empty($entity['password']) ? random_string() : $entity['password'];
                $this->Shopclients->save($entity);
            }
            $this->Oauthclients->save_by(['has_assigned' => TRUE], ['client_id' => $entity['app_id']]);
            $this->db->trans_complete();
            $results['status'] = $this->db->trans_status();
            $results['message'] = $results['status'] ? sprintf(lang('saved_success_msg'), lang('client')) : sprintf(lang('saved_failed_msg'), lang('client'));
            return $this->response($results);
        }
        return  $this->response(['status' => FALSE, 'message' => $this->form_validation->error_array()]);
    }
    public function index_put($id = NULL)
    {
        if (!empty($id)) {
            $this->db->trans_start();
            $entity = $this->Shopclients->entity($this->put());
            $this->Shopclients->save($entity, $id);
            $this->db->trans_complete();
            $results['status'] = $this->db->trans_status();
            $results['message'] = $results['status'] ? sprintf(lang('update_success_msg'), lang('client')) : sprintf(lang('update_failed_msg'), lang('client'));
            return $this->response($results);
        } else {
            return $this->response(['status' => FALSE, 'message' => 'invalid request'], REST_Controller::HTTP_BAD_REQUEST);
        }
    }
    public function index_delete($id = NULL)
    {
        if (!empty($id)) {
            $this->db->trans_start();
            $shops = $this->Shops->get_by(['client_id' => $id], NULL, FALSE, NULL, NULL, NULL, ['id']);
            if (!empty($shops)) {
                foreach ($shops as $shop) {
                    $this->Shopapps->delete_by(['shop_id' => $shop->id]);
                    $this->Shopservices->delete_by(['shop_id' => $shop->id]);
                }
            }
            $this->Shops->delete_by(['client_id' => $id]);
            $app_id = $this->Shopclients->get($id, TRUE)->app_id;
            $this->Shopclients->delete($id);
            $this->Oauthaccesstokens->delete_by(['client_id' => $app_id]);
            $this->Oauthclients->delete_by(['client_id' => $app_id]);
            $this->db->trans_complete();
            $results['status'] = $this->db->trans_status();
            $results['message'] = $results['status'] ? sprintf(lang('delete_success_msg'), lang('client')) : sprintf(lang('delete_failed_msg'), lang('client'));
            return $this->response($results);
        } else {
            return $this->response(['status' => FALSE, 'message' => 'invalid request'], REST_Controller::HTTP_BAD_REQUEST);
        }
    }
    public function undo_put($id = NULL)
    {
        if (!empty($id)) {
            $this->db->trans_start();
            $shops = $this->Shops->get_by(['client_id' => $id], NULL, TRUE, NULL, NULL, NULL, ['id']);
            foreach ($shops as $shop) {
                $this->Shopapps->save_by([$this->Shopapps->deletedAt() => FALSE], ['shop_id' => $shop->id]);
                $this->Shopservices->save_by([$this->Shopservices->deletedAt() => FALSE], ['shop_id' => $shop->id]);
            }
            $this->Shops->save_by([$this->Shops->deletedAt() => FALSE], ['client_id' => $id]);
            $this->Shopclients->save([$this->Shopclients->deletedAt() => FALSE], $id);
            $this->db->trans_complete();
            $results['status'] = $this->db->trans_status();
            $results['message'] = $results['status'] ? sprintf(lang('update_success_msg'), lang('client')) : sprintf(lang('update_failed_msg'), lang('client'));
            return $this->response($results);
        } else {
            return $this->response(['status' => FALSE, 'message' => 'invalid request'], REST_Controller::HTTP_BAD_REQUEST);
        }
    }
    public function trash_delete($id = NULL)
    {
        if (!empty($id)) {
            $this->db->trans_start();
            $shops = $this->Shops->get_by(['client_id' => $id], NULL, TRUE, NULL, NULL, NULL, ['id']);
            if (!empty($shops)) {
                foreach ($shops as $shop) {
                    $this->Shopapps->delete_by(['shop_id' => $shop->id], TRUE);
                    $this->Shopservices->delete_by(['shop_id' => $shop->id], TRUE);
                }
            }
            $this->Shops->delete_by(['client_id' => $id], TRUE);
            $app_id = $this->Shopclients->get($id, TRUE)->app_id;
            $this->Shopclients->delete($id, TRUE);
            $this->Oauthaccesstokens->delete_by(['client_id' => $app_id], true);
            $this->Oauthclients->delete_by(['client_id' => $app_id], true);
            $this->db->trans_complete();
            $results['status'] = $this->db->trans_status();
            $results['message'] = $results['status'] ? sprintf(lang('delete_success_msg'), lang('client')) : sprintf(lang('delete_failed_msg'), lang('client'));
            return $this->response($results);
        } else {
            return $this->response(['status' => FALSE, 'message' => 'invalid request'], REST_Controller::HTTP_BAD_REQUEST);
        }
    }
}
