<?php
defined('BASEPATH') or exit('No direct script access allowed');
class Office extends Office_Layout
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
        $data['page_title'] = $this->page_title = lang('dashboard');
        $data['header_nav'] = '';
        $data['sidebar_nav'] = '';
        $data['breadcrumb'][site_url()] = $this->page_title;
        $this->render('office/index', $data);
    }
    public function logout()
    {
        $this->My_Model->officerOut();
        if (!$this->My_Model->isOfficerIn()) {
            redirect(site_url('office/login'));
        }
    }
}
