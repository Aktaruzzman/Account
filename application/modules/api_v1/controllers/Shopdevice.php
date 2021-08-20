<?php

defined('BASEPATH') or exit('No direct script access allowed');
require APPPATH . '/libraries/REST_Controller.php';

use Restserver\Libraries\REST_Controller;

class Shopdevice extends REST_Controller
{
    function __construct($config = 'rest')
    {
        parent::__construct($config);
        if ($this->server->require_scope()) {
            $this->load->model('Shops');
            $this->load->model('Shopdevices');
            $this->load->model('Shopapps');
        }
    }
    public function index_get($id = NULL, $base = NULL, $deleted = NULL, $limit = NULL, $offset = NULL)
    {
        $results = [];
        if (!empty($id)) {
            $results = ['id' => $id];
            $results['entity'] = $this->Shopdevices->get($id, TRUE, $deleted);
        } else {
            $results = ['base' => $base, 'deleted' => $deleted, 'limit' => $limit, 'offset' => $offset];
            if (!empty($base)) {
                $results['base'] = $this->Shops->get($base, TRUE);
                $results['list'] = $this->Shopdevices->get_by(['shop_id' => $base], FALSE, $deleted, $limit, $offset);
                $results['total']  = $this->Shopdevices->count_rows(['shop_id' => $base], $deleted);
            } else {
                $results['base'] = NULL;
                $results['list'] = $this->Shopdevices->get_by(NULL, FALSE, $deleted, $limit, $offset);
                $results['total']  = $this->Shopdevices->count_rows(NULL, $deleted);
            }
        }
        return $this->response($results);
    }
    public function index_post()
    {
        if ($this->Shopdevices->validate()) {
            $this->db->trans_start();
            $entity = $this->Shopdevices->entity($this->post());
            $total_apps = $this->Shopapps->total($entity['shop_id']);
            $used_apps = $this->Shopdevices->get_by(['shop_id' => $entity['shop_id']], FALSE, TRUE);
            $results['generate'] = $generate = (int)$total_apps - count($used_apps);
            for ($i = 0; $i < $generate; $i++) {
                $entity['code'] = $this->Shopdevices->get_code();
                $this->Shopdevices->save($entity);
            }
            $this->db->trans_complete();
            $results['status'] = $this->db->trans_status();
            $results['message'] = $results['status'] ? sprintf(lang('saved_success_msg'), lang('device')) : sprintf(lang('saved_failed_msg'), lang('device'));
            return $this->response($results);
        }
        return  $this->response(['status' => FALSE, 'message' => $this->form_validation->error_array()]);
    }
    public function index_put($id = NULL)
    {
        if (!empty($id)) {
            $this->db->trans_start();
            $entity = $this->Shopdevices->entity($this->put());
            $this->Shopdevices->save($entity, $id);
            $this->db->trans_complete();
            $results['status'] = $this->db->trans_status();
            $results['message'] = $results['status'] ? sprintf(lang('update_success_msg'), lang('area')) : sprintf(lang('update_failed_msg'), lang('area'));
            return $this->response($results);
        }
        return $this->response(['status' => FALSE, 'message' => 'invalid request'], REST_Controller::HTTP_BAD_REQUEST);
    }
    public function submit_put($code = NULL)
    {
        if (!empty($code)) {
            $this->db->trans_start();
            $used = $this->Shopdevices->get_by(['code' => $code], TRUE);
            if (!empty($used)) $this->Shopdevices->save_by(['is_used' => TRUE, $this->Shopdevices->deletedAt() => TRUE], ['code' => $code]);
            $this->db->trans_complete();
            $results['code'] = $code;
            $results['status'] = $this->db->trans_status() && !empty($used);
            $results['message'] = $results['status'] ? sprintf(lang('update_success_msg'), lang('code')) : sprintf(lang('update_failed_msg'), lang('code'));
            return $this->response($results);
        } else {
            return $this->response(['status' => FALSE, 'message' => 'invalid request'], REST_Controller::HTTP_BAD_REQUEST);
        }
    }
    public function index_delete($id = NULL)
    {
        if (!empty($id)) {
            $this->db->trans_start();
            $this->Shopdevices->delete($id);
            $this->db->trans_complete();
            $results['status'] = $this->db->trans_status();
            $results['message'] = $results['status'] ? sprintf(lang('delete_success_msg'), lang('area')) : sprintf(lang('delete_failed_msg'), lang('area'));
            return $this->response($results);
        } else {
            return $this->response(['status' => FALSE, 'message' => 'invalid request'], REST_Controller::HTTP_BAD_REQUEST);
        }
    }
    public function undo_put($id = NULL)
    {
        if (!empty($id)) {
            $this->db->trans_start();
            $this->Shopdevices->save([$this->Shopdevices->deletedAt() => FALSE], $id);
            $this->db->trans_complete();
            $results['status'] = $this->db->trans_status();
            $results['message'] = $results['status'] ? sprintf(lang('update_success_msg'), lang('area')) : sprintf(lang('update_failed_msg'), lang('area'));
            return $this->response($results);
        } else {
            return $this->response(['status' => FALSE, 'message' => 'invalid request'], REST_Controller::HTTP_BAD_REQUEST);
        }
    }
    public function trash_delete($id = NULL)
    {
        if (!empty($id)) {
            $this->db->trans_start();
            $this->Shopdevices->delete($id, TRUE);
            $this->db->trans_complete();
            $results['status'] = $this->db->trans_status();
            $results['message'] = $results['status'] ? sprintf(lang('delete_success_msg'), lang('area')) : sprintf(lang('delete_failed_msg'), lang('area'));
            return $this->response($results);
        } else {
            return $this->response(['status' => FALSE, 'message' => 'invalid request'], REST_Controller::HTTP_BAD_REQUEST);
        }
    }
}
