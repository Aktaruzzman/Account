<?php

defined('BASEPATH') or exit('No direct script access allowed');
require APPPATH . '/libraries/REST_Controller.php';

use Restserver\Libraries\REST_Controller;

class Shop extends REST_Controller
{
    function __construct($config = 'rest')
    {
        parent::__construct($config);
        if ($this->server->require_scope()) {
            $this->load->model('Shopclients');
            $this->load->model('Shops');
            $this->load->model('Shopapps');
            $this->load->model('Shopservices');
        }
    }

    public function index_get($id = NULL, $base = NULL, $deleted = NULL, $limit = NULL, $offset = NULL)
    {
        $results = [];

        $results = ['base' => $base, 'deleted' => $deleted, 'limit' => $limit, 'offset' => $offset];
        if (!empty($base)) {
            $results['base'] = $this->Shopclients->get($base, TRUE);
            $results['list'] = $this->Shops->get_by(['client_id' => $base], FALSE, $deleted, $limit, $offset);
            $results['total']  = $this->Shops->count_rows(['client_id' => $base], $deleted);
        } else {
            $results['base'] = NULL;
            $results['list'] = $this->Shops->get_by(NULL, FALSE, $deleted, $limit, $offset);
            $results['total']  = $this->Shops->count_rows(NULL, $deleted);
        }
        foreach ($results['list'] as $index => $value) {
            $results['list'][$index]->api = $this->Shopclients->get($value->client_id, TRUE)->app_id;
            if (!empty($id))  $results['entity'] =  $results['list'][$index];
        }
        $results['clients'] = $this->Shopclients->get(null, false, false, ['id', 'name']);
        return $this->response($results);
    }
    public function filter_post()
    {
        $base = !empty($this->post('base')) ? trim($this->post('base')) : NULL;
        if (!empty($base)) {
            $results['base'] = $this->Shopclients->get($base, TRUE);
            $results['list'] = $this->Shops->get_by(['client_id' => $base], FALSE, NULL, NULL, NULL, trim($this->post('search')), ['id', 'name', 'slug', 'email', 'phone']);
        } else {
            $results['list'] = $this->Shops->get_by(NULL, FALSE, NULL, NULL, NULL, trim($this->post('search')), ['id', 'name', 'slug', 'email', 'phone']);
        }
        $results['total']  = count($results['list']);
        foreach ($results['list'] as $index => $value) {
            $results['list'][$index]->api = $this->Shopclients->get($value->client_id, TRUE)->app_id;
        }
        return $this->response($results);
    }
    public function edit_get($id = NULL)
    {
        if (!empty($id)) {
            $results['entity']  = $this->Shops->get($id, TRUE);
            return $this->response($results);
        } else {
            return $this->response(['status' => FALSE, 'message' => 'invalid request'], REST_Controller::HTTP_BAD_REQUEST);
        }
    }
    public function index_post()
    {
        if ($this->Shops->validate()) {
            $this->db->trans_start();
            $entity = $this->Shops->entity($this->post());
            if (!empty($entity['id'])) {
                $this->Shops->save($entity, $entity['id']);
            } else {
                $entity['slug'] = $this->Shops->slug($entity['name']);
                $this->Shops->save($entity);
            }
            $this->db->trans_complete();
            $results['status'] = $this->db->trans_status();
            $results['message'] = $results['status'] ? sprintf(lang('saved_success_msg'), lang('shop')) : sprintf(lang('saved_failed_msg'), lang('shop'));
            return $this->response($results);
        }
        return  $this->response(['status' => FALSE, 'entity' => $this->post(), 'message' => $this->form_validation->error_array()]);
    }
    public function index_put($id = NULL)
    {
        if (!empty($id)) {
            $this->db->trans_start();
            $entity = $this->Shops->entity($this->put());
            $this->Shops->save($entity, $id);
            $this->db->trans_complete();
            $results['status'] = $this->db->trans_status();
            $results['message'] = $results['status'] ? sprintf(lang('update_success_msg'), lang('shop')) : sprintf(lang('update_failed_msg'), lang('shop'));
            return $this->response($results);
        } else {
            return $this->response(['status' => FALSE, 'message' => 'invalid request'], REST_Controller::HTTP_BAD_REQUEST);
        }
    }
    public function index_delete($id = NULL)
    {
        if (!empty($id)) {
            $this->db->trans_start();
            $this->Shopapps->delete_by(['shop_id' => $id]);
            $this->Shopservices->delete_by(['shop_id' => $id]);
            $this->Shops->delete($id);
            $this->db->trans_complete();
            $results['status'] = $this->db->trans_status();
            $results['message'] = $results['status'] ? sprintf(lang('delete_success_msg'), lang('shop')) : sprintf(lang('delete_failed_msg'), lang('shop'));
            return $this->response($results);
        } else {
            return $this->response(['status' => FALSE, 'message' => 'invalid request'], REST_Controller::HTTP_BAD_REQUEST);
        }
    }
    public function undo_put($id = NULL)
    {
        if (!empty($id)) {
            $this->db->trans_start();
            $this->Shopapps->save_by([$this->Shopapps->deletedAt() => FALSE], ['shop_id' => $id]);
            $this->Shopservices->save_by([$this->Shopservices->deletedAt() => FALSE], ['shop_id' => $id]);
            $this->Shops->save([$this->Shops->deletedAt() => FALSE], $id);
            $this->db->trans_complete();
            $results['status'] = $this->db->trans_status();
            $results['message'] = $results['status'] ? sprintf(lang('update_success_msg'), lang('shop')) : sprintf(lang('update_failed_msg'), lang('shop'));
            return $this->response($results);
        } else {
            return $this->response(['status' => FALSE, 'message' => 'invalid request'], REST_Controller::HTTP_BAD_REQUEST);
        }
    }
    public function trash_delete($id = NULL)
    {
        if (!empty($id)) {
            $this->db->trans_start();
            $this->Shopapps->delete_by(['shop_id' => $id], TRUE);
            $this->Shopservices->delete_by(['shop_id' => $id], TRUE);
            $this->Shops->delete($id, TRUE);
            $this->db->trans_complete();
            $results['status'] =  $this->db->trans_status();
            $results['message'] = $results['status'] ? sprintf(lang('delete_success_msg'), lang('shop')) : sprintf(lang('delete_failed_msg'), lang('shop'));
            return $this->response($results);
        } else {
            return $this->response(['status' => FALSE, 'message' => 'invalid request'], REST_Controller::HTTP_BAD_REQUEST);
        }
    }
}
