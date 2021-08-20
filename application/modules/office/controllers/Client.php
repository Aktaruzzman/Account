<?php
defined('BASEPATH') or exit('No direct script access allowed');
class Client extends Office_Layout
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
        $data['page_title'] = $this->page_title = lang('client');
        $data['header_nav'] = '';
        $data['sidebar_nav'] = '';
        $data['breadcrumb'][site_url('office')] =  lang('home');
        $data['breadcrumb'][site_url('office/client')] = $this->page_title;
        $this->render('office/client/client', $data);
    }
}
