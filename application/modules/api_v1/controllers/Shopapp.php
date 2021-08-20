<?php

defined('BASEPATH') or exit('No direct script access allowed');
require APPPATH . '/libraries/REST_Controller.php';

use Restserver\Libraries\REST_Controller;

class Shopapp extends REST_Controller
{
    function __construct($config = 'rest')
    {
        parent::__construct($config);
        if ($this->server->require_scope()) {
            $this->load->model('Shops');
            $this->load->model('Shopapps');
            $this->load->model('Shopservices');
        }
    }
    public function index_get($shop_id = 0, $deleted = NULL)
    {
        $results = ['shop_id' => $shop_id];
        if (!empty($shop_id)) {
            $results['shop'] = $this->Shops->get($shop_id, TRUE);
            $results['entity'] = $this->Shopapps->get_by(['shop_id' => $shop_id], TRUE, $deleted);
        }
        return $this->response($results);
    }
    public function index_post()
    {
        if ($this->Shopapps->validate()) {
            $this->db->trans_start();
            $entity = $this->Shopapps->entity($this->post());
            (!empty($entity['id'])) ? $this->Shopapps->save($entity, $entity['id']) : $this->Shopapps->save($entity);
            $this->db->trans_complete();
            $results['status'] = $this->db->trans_status();
            $results['message'] = $results['status'] ? sprintf(lang('saved_success_msg'), lang('client')) : sprintf(lang('saved_failed_msg'), lang('client'));
            return $this->response($results);
        }
        return  $this->response(['status' => FALSE, 'message' => $this->form_validation->error_array()]);
    }
}
