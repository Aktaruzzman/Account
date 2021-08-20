<?php

defined('BASEPATH') or exit('No direct script access allowed');
require APPPATH . '/libraries/REST_Controller.php';

use Restserver\Libraries\REST_Controller;

class Oauthclient extends REST_Controller
{
    function __construct($config = 'rest')
    {
        parent::__construct($config);
        if ($this->server->require_scope()) {
            $this->load->model('Oauthclients');
        }
    }
    public function index_get($id = NULL, $deleted = NULL, $limit = NULL, $offset = NULL)
    {
        $results = [];
        if (!empty($id)) {
            $results = ['id' => $id];
            $results['entity'] = $this->Oauthclients->get($id, TRUE, $deleted);
        } else {
            $results = ['deleted' => $deleted, 'limit' => $limit, 'offset' => $offset];
            $results['list'] = $this->Oauthclients->get_by(NULL, FALSE, $deleted, $limit, $offset);
            $results['total']  = $this->Oauthclients->count_rows(NULL, $deleted);
        }
        return $this->response($results);
    }

    public function edit_get($id = NULL)
    {
        if (!empty($id)) {
            $results['entity']  = $this->Oauthclients->get($id, TRUE);
            return $this->response($results);
        }
        return $this->response(['status' => FALSE, 'message' => 'invalid request'], REST_Controller::HTTP_BAD_REQUEST);
    }
    public function index_post()
    {
        if ($this->Oauthclients->validate()) {
            $this->db->trans_start();
            $entity = $this->Oauthclients->entity($this->post());
            if (empty($entity['client_secret'])) {
                $entity['client_secret'] = random_string();
            }
            $this->Oauthclients->save($entity);
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
            $entity = $this->Oauthclients->entity($this->put());
            $this->Oauthclients->save($entity, $id);
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
            $this->Oauthaccesstokens->delete_by(['client_id' => $id]);
            $this->Oauthclients->delete_by(['client_id' => $id]);
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
            $this->Oauthaccesstokens->save_by([$this->Oauthaccesstokens->deletedAt() => FALSE], ['client_id' => $id]);
            $this->Oauthclients->save_by([$this->Oauthclients->deletedAt() => FALSE], ['client_id' => $id]);
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
            $this->Oauthaccesstokens->delete_by(['client_id' => $id], TRUE);
            $this->Oauthclients->delete_by(['client_id' => $id], TRUE);
            $this->db->trans_complete();
            $results['status'] = $this->db->trans_status();
            $results['message'] = $results['status'] ? sprintf(lang('delete_success_msg'), lang('client')) : sprintf(lang('delete_failed_msg'), lang('client'));
            return $this->response($results);
        } else {
            return $this->response(['status' => FALSE, 'message' => 'invalid request'], REST_Controller::HTTP_BAD_REQUEST);
        }
    }
}
