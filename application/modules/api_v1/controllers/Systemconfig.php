<?php

defined('BASEPATH') or exit('No direct script access allowed');
require APPPATH . '/libraries/REST_Controller.php';

use Restserver\Libraries\REST_Controller;

class Systemconfig extends REST_Controller
{

    function __construct($config = 'rest')
    {
        parent::__construct($config);
        if ($this->server->require_scope()) {
            $this->load->model('Systemconfigs');
            $this->load->model('Uploader');
        }
    }

    public function index_get($key = NULL)
    {
        if (!empty($key)) {
            $results[$key] = $this->Systemconfigs->get($key);
        } else {
            $results['config'] = $this->Systemconfigs->get_all($key);
        }
        $results['status'] = !empty($results['config']) ||  !empty($results[$key])  ? TRUE : FALSE;
        $this->response($results);
    }

    public function index_post()
    {
        $this->db->trans_start();
        $this->Systemconfigs->batch_save($this->post());
        $this->db->trans_complete();
        $results['status'] = $this->db->trans_status();
        $results['config'] = $this->Systemconfigs->get_all();
        $this->response($results);
    }
    public function logo_post()
    {
        $config = array('upload_path' => APPPATH . '../uploads', 'allowed_types' => 'gif|jpg|png|jpeg', 'file_ext_tolower' => true, 'file_name' => date('YmdHms') . '-' . rand(1, 999999));
        $results['status'] = $upload_status = $this->Uploader->upload_image($config, 'photo');
        $upload_data = $this->upload->results();
        $saving['photo'] = $upload_status ? $upload_data['file_name'] : 'no_image';
        if ($upload_status) {
            $this->Uploader->resize_image(APPPATH . '../uploads/' . $upload_data['file_name'], 150, false, 70);
            $hilibazaar_logo = $this->Systemconfigs->get('hilibazaar_logo');
            if (!empty($hilibazaar_logo)) {
                $this->Uploader->unlink_image(APPPATH . "../uploads/",  $hilibazaar_logo);
            }
            $this->Systemconfigs->save('hilibazaar_logo',  $saving['photo']);
        }
        $results['errors'] = $this->upload->display_errors();
        $results['file'] = $saving['photo'];
        $this->response($results);
    }
}
