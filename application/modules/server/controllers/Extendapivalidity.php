<?php

defined('BASEPATH') or exit('No direct script access allowed');
require APPPATH . '/libraries/REST_Controller.php';

use Restserver\Libraries\REST_Controller;

class Extendapivalidity extends REST_Controller
{
    function __construct($config = 'rest')
    {
        parent::__construct($config);
        if ($this->server->require_scope()) {
            $this->load->model('Oauthaccesstokens');
        }
    }

    public function index_put($id = NULL)
    {
        if (!empty($id)) {
            $exploded = explode('_', $id);
            $second = (int)$exploded[0];
            $access_token = $exploded[1];
            $obj = $this->Oauthaccesstokens->get($access_token, TRUE);
            $date = new DateTime($obj->expires);
            $date->add(new DateInterval('PT' .   $second . 'S'));
            $results['status'] = $this->Oauthaccesstokens->save(['expires' => $date->format('Y-m-d H:i:s')], $access_token);
            $results['message'] = $results['status'] ? sprintf(lang('update_success_msg'), lang('client')) : sprintf(lang('update_failed_msg'), lang('client'));
            return $this->response($results);
        } else {
            return $this->response(['status' => FALSE, 'message' => 'invalid request'], REST_Controller::HTTP_BAD_REQUEST);
        }
    }
}
