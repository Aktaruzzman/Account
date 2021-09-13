<?php
defined('BASEPATH') or exit('No direct script access allowed');
class Api extends Layout_Account
{
    function __construct()
    {
        parent::__construct();
        if (!$this->My_Model->isOfficerIn()) {
            redirect(site_url('login'));
        }
    }
    public function index()
    {
        set_last_page('api');
        $data['lang'] =  lang_option();
        $data['isLoggedin'] = $this->isLoggedin;
        $data['page_title'] = $this->page_title = lang('api');
        $data['header_nav'] = '';
        $data['sidebar_nav'] = '';
        $data['breadcrumb'][site_url('home')] = lang('home');
        $data['breadcrumb'][site_url('api')] = $this->page_title;
        $this->render('api/api', $data);
    }
    public function token($ouath_client_id = 0)
    {
        if (!empty($ouath_client_id)) {
            set_last_page('api/token');
            $data['ouath_client_id'] = $ouath_client_id;
            $data['lang'] =  lang_option();
            $data['isLoggedin'] = $this->isLoggedin;
            $data['page_title'] = $this->page_title = lang('token');
            $data['header_nav'] = '';
            $data['sidebar_nav'] = '';
            $data['breadcrumb'][site_url('home')] = lang('home');
            $data['breadcrumb'][site_url('api')] = lang('api');
            $data['breadcrumb'][site_url('api/token')] = $this->page_title;
            $this->render('api/token', $data);
        } else {
            redirect(site_url('api'));
        }
    }
}
