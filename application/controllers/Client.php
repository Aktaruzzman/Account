<?php
defined('BASEPATH') or exit('No direct script access allowed');
class Client extends Layout_Account
{
    function __construct()
    {
        parent::__construct();
        if (!$this->My_Model->isOfficerIn()) {
            redirect(site_url('login'));
        }
        $this->session->set_userdata('lastAccessUrl', base_url(uri_string()));
    }
    public function index()
    {
        set_last_page('client');
        $data['lang'] =  lang_option();
        $data['isLoggedin'] = $this->isLoggedin;
        $data['page_title'] = $this->page_title = lang('client');
        $data['header_nav'] = '';
        $data['sidebar_nav'] = '';
        $data['breadcrumb'][site_url('home')] =  lang('home');
        $data['breadcrumb'][site_url('client')] = $this->page_title;
        $this->render('client/client', $data);
    }
}
