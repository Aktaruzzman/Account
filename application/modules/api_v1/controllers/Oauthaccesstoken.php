<?php

defined('BASEPATH') or exit('No direct script access allowed');
require APPPATH . '/libraries/REST_Controller.php';

use Restserver\Libraries\REST_Controller;

class Oauthaccesstoken extends REST_Controller
{
    function __construct($config = 'rest')
    {
        parent::__construct($config);
        if ($this->server->require_scope()) {
            $this->load->model('Oauthclients');
            $this->load->model('Oauthaccesstokens');
        }
    }
    public function index_get($id = NULL, $base = NULL, $deleted = NULL, $limit = NULL, $offset = NULL)
    {
        $results = [];
        if (!empty($id)) {
            $results = ['id' => $id];
            $results['entity'] = $this->Oauthaccesstokens->get($id, TRUE, $deleted);
        } else {
            $results = ['deleted' => $deleted, 'limit' => $limit, 'offset' => $offset];
            if (!empty($base)) {
                $results['list'] = $this->Oauthaccesstokens->get_by(['client_id' => $base], FALSE, $deleted, $limit, $offset);
                $results['total']  = $this->Oauthaccesstokens->count_rows(['client_id' => $base], $deleted);
            } else {
                $results['list'] = $this->Oauthaccesstokens->get_by(NULL, FALSE, $deleted, $limit, $offset);
                $results['total']  = $this->Oauthaccesstokens->count_rows(NULL, $deleted);
            }
            if (empty($results['list']) && !empty($base)) {
                $results['app'] = $this->Oauthclients->get_by(['client_id' => $base], TRUE);
            }
        }
        return $this->response($results);
    }
    public function index_put($id = NULL)
    {
        if (!empty($id)) {
            $this->db->trans_start();
            $entity = $this->Oauthaccesstokens->entity($this->put());
            $this->Oauthaccesstokens->save($entity, $id);
            $this->db->trans_complete();
            $results['status'] = $this->db->trans_status();
            $results['message'] = $results['status'] ? sprintf(lang('update_success_msg'), lang('client')) : sprintf(lang('update_failed_msg'), lang('client'));
            return $this->response($results);
        } else {
            return $this->response(['status' => FALSE, 'message' => 'invalid request'], REST_Controller::HTTP_BAD_REQUEST);
        }
    }
}
