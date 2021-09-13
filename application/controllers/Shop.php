<?php
defined('BASEPATH') or exit('No direct script access allowed');
class Shop extends Layout_Account
{
    function __construct()
    {
        parent::__construct();
        if (!$this->My_Model->isOfficerIn()) {
            redirect(site_url('login'));
        }
    }
    public function index($client = 0)
    {
        set_last_page('shop');
        $data['client'] = $client;
        $data['lang'] =  lang_option();
        $data['isLoggedin'] = $this->isLoggedin;
        $data['page_title'] = $this->page_title = lang('shop');
        $data['header_nav'] = '';
        $data['sidebar_nav'] = '';
        $data['breadcrumb'][site_url('home')] =  lang('home');
        $data['breadcrumb'][site_url('client')] = lang('client');
        if (!empty($client) && intval($client) > 0) {
            $data['breadcrumb'][site_url('shop/index/' . $client)] = $this->page_title;
        } else {
            $data['breadcrumb'][site_url('shop')] = $this->page_title;
        }
        $this->render('shop/shop', $data);
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
        $data['breadcrumb'][site_url('client')] = lang('client');
        if (!empty($client) && intval($client) > 0) {
            $data['breadcrumb'][site_url('shop/index/' . $client)] = lang('shop');
        } else {
            $data['breadcrumb'][site_url('shop')] = lang('shop');
        }
        $data['breadcrumb'][site_url('shop/service/' . $shop)] = $this->page_title;
        $this->render('shop/service', $data);
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
        $data['breadcrumb'][site_url('client')] = lang('client');
        if (!empty($client) && intval($client) > 0) {
            $data['breadcrumb'][site_url('shop/index/' . $client)] = lang('shop');
        } else {
            $data['breadcrumb'][site_url('shop')] = lang('shop');
        }
        $data['breadcrumb'][site_url('shop/app/' . $shop)] = $this->page_title;
        $this->render('shop/app', $data);
    }
}
