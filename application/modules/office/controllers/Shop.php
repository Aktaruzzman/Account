<?php
defined('BASEPATH') or exit('No direct script access allowed');
class Shop extends Office_Layout
{
    function __construct()
    {
        parent::__construct();
        if (!$this->My_Model->isOfficerIn()) {
            redirect(site_url('office/login'));
        }
        $this->session->set_userdata('lastAccessUrl', base_url(uri_string()));
    }
    public function index($client = 0)
    {
        $data['client'] = $client;
        $data['lang'] =  lang_option();
        $data['isLoggedin'] = $this->isLoggedin;
        $data['page_title'] = $this->page_title =lang('shop');
        $data['header_nav'] = '';
        $data['sidebar_nav'] = '';
        $data['breadcrumb'][site_url('office')] =  lang('home');
        $data['breadcrumb'][site_url('office/client')] = lang('client');
        if (!empty($client) && intval($client) > 0) {
            $data['breadcrumb'][site_url('office/shop/index/' . $client)] = $this->page_title;
        } else {
            $data['breadcrumb'][site_url('office/shop')] = $this->page_title;
        }
        $this->render('office/shop/shop', $data);
    }
    public function service($client = 0, $shop = 0)
    {
        $data['shop'] = $shop;
        $data['lang'] =  lang_option();
        $data['isLoggedin'] = $this->isLoggedin;
        $data['page_title'] = $this->page_title = lang('service');
        $data['header_nav'] = '';
        $data['sidebar_nav'] = '';
        $data['breadcrumb'][site_url('office')] = lang('home');
        $data['breadcrumb'][site_url('office/client')] = lang('client');
        if (!empty($client) && intval($client) > 0) {
            $data['breadcrumb'][site_url('office/shop/index/' . $client)] = lang('shop');
        } else {
            $data['breadcrumb'][site_url('office/shop')] = lang('shop');
        }
        $data['breadcrumb'][site_url('office/shop/service/'.$shop)] = $this->page_title;
        $this->render('office/shop/service', $data);
    }
    public function app($client = 0, $shop = 0)
    {
        $data['shop'] = $shop;
        $data['lang'] =  lang_option();
        $data['isLoggedin'] = $this->isLoggedin;
        $data['page_title'] = $this->page_title = lang('software');
        $data['header_nav'] = '';
        $data['sidebar_nav'] = '';
        $data['breadcrumb'][site_url('office')] = lang('home');
        $data['breadcrumb'][site_url('office/client')] = lang('client');
        if (!empty($client) && intval($client) > 0) {
            $data['breadcrumb'][site_url('office/shop/index/' . $client)] =lang('shop');
        } else {
            $data['breadcrumb'][site_url('office/shop')] =lang('shop');
        }
        $data['breadcrumb'][site_url('office/shop/app/'. $shop)] = $this->page_title;
        $this->render('office/shop/app', $data);
    }
}
