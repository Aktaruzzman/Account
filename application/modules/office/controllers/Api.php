<?php
defined('BASEPATH') or exit('No direct script access allowed');
class Api extends Office_Layout
{
    function __construct()
    {
        parent::__construct();
        if (!$this->My_Model->isOfficerIn()) {
            redirect(site_url('office/login'));
        }
        $this->session->set_userdata('lastAccessUrl', base_url(uri_string()));
    }
    public function index()
    {
        $data['lang'] =  lang_option();
        $data['isLoggedin'] = $this->isLoggedin;
        $data['page_title'] = $this->page_title = lang('api');
        $data['header_nav'] = '';
        $data['sidebar_nav'] = '';
        $data['breadcrumb'][site_url('office')] = lang('home');
        $data['breadcrumb'][site_url('office/api')] = $this->page_title;
        $this->render('office/api/api', $data);
    }
    public function token($ouath_client_id = 0)
    {
        if (!empty($ouath_client_id)) {
            $data['ouath_client_id'] = $ouath_client_id;
            $data['lang'] =  lang_option();
            $data['isLoggedin'] = $this->isLoggedin;
            $data['page_title'] = $this->page_title = lang('token');
            $data['header_nav'] = '';
            $data['sidebar_nav'] = '';
            $data['breadcrumb'][site_url('office')] = lang('home');
            $data['breadcrumb'][site_url('office/api')] = lang('api');
            $data['breadcrumb'][site_url('office/api/token')] = $this->page_title;
            $this->render('office/api/token', $data);
        } else {
            redirect(site_url('office/app'));
        }
    }
}
