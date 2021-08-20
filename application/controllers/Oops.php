<?php
defined('BASEPATH') or exit('No direct script access allowed');
class Oops extends Layout
{
    function __construct()
    {
        parent::__construct();
        $this->session->set_userdata('lastAccessUrl', base_url(uri_string()));
    }
    public function index()
    {
        $page = $this->db->where('slug', 'gallery')->get('pages')->row();
        $lang = lang_option();
        $this->body_class = ["page-gallery"];
        $data['lang'] = $lang;
        $data['isLoggedin'] = $this->isLoggedin;
        $data['page_title'] = $this->page_title = 404;
        $data['page_subtitle'] = $this->page_subtitle = lang('not_found');
        $data['page_meta_keywords'] = $this->page_meta_keywords = json_decode($page->meta_keys, TRUE)[$lang];
        $data['page_meta_description'] = $this->page_meta_description = json_decode($page->meta_desc, TRUE)[$lang];
        $data['header_nav'] = '';
        $data['sidebar_nav'] = '';
        $data['page'] = ['title' => $this->page_title, 'subtitle' =>  $this->page_subtitle, 'description' => lang('not_found_desc')];
        $data['breadcrumb'][site_url('oops')] = $this->page_title;
        $this->render('oops', $data);
    }
}
