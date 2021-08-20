<?php

defined('BASEPATH') or exit('No direct script access allowed');
require APPPATH . '/libraries/REST_Controller.php';

use Restserver\Libraries\REST_Controller;

class Passport extends REST_Controller
{
    function __construct($config = 'rest')
    {
        parent::__construct($config);
        if ($this->server->require_scope()) {
            $this->load->model('Oauthclients');
            $this->load->model('Shopclients');
            $this->load->model('Oauthaccesstokens');
            $this->load->model('Shops');
            $this->load->model('Shopservices');
            $this->load->model('Shopdevices');
        }
    }
    public function index_get()
    {
        $secret = base64_decode(getallheaders()['secret']);
        $shop_id = base64_decode(getallheaders()['shop_id']);
        $shop = $this->Shops->get_by(['id' => $shop_id], TRUE, FALSE, NULL, NULL, NULL, ['id', 'client_id', 'name', 'phone', 'email', 'base_url']);
        $client =  $shop ? $this->Shopclients->get_by(['id' => $shop->client_id], TRUE, FALSE, NULL, NULL, NULL, ['name', 'phone', 'email', 'app_id', 'version']) : null;
        if (!empty($shop) && !empty($client) && $this->Oauthclients->get_by(['client_id' => $client->app_id, 'client_secret' => $secret])) {
            $results['client'] = $client;
            $results['client']->shop = $shop;
            $results['client']->token = $this->Oauthaccesstokens->get_by(['client_id' => $client->app_id], TRUE, FALSE, 1, 0, NULL, ['access_token', 'expires']);
            $results['client']->shop->service = $this->Shopservices->get_by(['shop_id' => $shop->id], TRUE, FALSE, NULL, NULL, NULL, ['table', 'waiting', 'delivery', 'collection', 'bar', 'caller', 'packer', 'online', 'booking', 'marketing']);
            $device_code = $this->Shopdevices->get_code('numeric', 4, $this->Shopdevices->getTable());
            $this->Shopdevices->save(['code' => $device_code, 'is_used' => true, 'shop_id' => $shop->id]);
            $results['client']->shop->device = $device_code;
            $results['status'] = !empty($results['client']->token) && !empty($results['client']->shop) && !empty($results['client']->shop->service) && !empty($results['client']->shop->device) ? TRUE : FALSE;
            return $this->response($results);
        }
        return $this->response(['status' => FALSE, 'message' => 'invalid request'], REST_Controller::HTTP_BAD_REQUEST);
    }
    public function latest_get($shop_id)
    {
        $shop = $this->Shops->get_by(['id' => $shop_id], TRUE, FALSE, NULL, NULL, NULL, ['id', 'client_id', 'name', 'phone', 'email', 'base_url']);
        $client =  $shop ? $this->Shopclients->get_by(['id' => $shop->client_id], TRUE, FALSE, NULL, NULL, NULL, ['name', 'phone', 'email', 'app_id', 'version']) : null;
        if (!empty($shop) && !empty($client)) {
            $results['client'] = $client;
            $results['client']->shop = $shop;
            $results['client']->token = $this->Oauthaccesstokens->get_by(['client_id' => $client->app_id], TRUE, FALSE, 1, 0, NULL, ['access_token', 'expires']);
            $results['client']->shop->service = $this->Shopservices->get_by(['shop_id' => $shop->id], TRUE, FALSE, NULL, NULL, NULL, ['table', 'waiting', 'delivery', 'collection', 'bar', 'caller', 'packer', 'online', 'booking', 'marketing', 'express']);
            $results['status'] = true;
            return $this->response($results);
        }
        return $this->response(['status' => FALSE, 'message' => 'invalid request'], REST_Controller::HTTP_BAD_REQUEST);
    }
    public function index_post()
    {
        $this->db->trans_start();
        $this->Shopdevices->save_by(['is_used' => TRUE], ['shop_id' =>  $this->post('shop_id'), 'code' => $this->post('code')]);
        $this->db->trans_complete();
        $results['status'] = $this->db->trans_status();
        $results['message'] = $results['status'] ? sprintf(lang('saved_success_msg'), lang('shop')) : sprintf(lang('saved_failed_msg'), lang('client'));
        return $this->response($results);
    }
}
