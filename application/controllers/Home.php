<?php
defined('BASEPATH') or exit('No direct script access allowed');
class Home extends Layout
{
    function __construct()
    {
        parent::__construct();

        $this->session->set_userdata('lastAccessUrl', base_url(uri_string()));
    }
    public function index()
    {
        $page = $this->db->where('slug', 'home')->get('pages')->row();
        $lang = lang_option();
        $this->body_class = ["page-home"];
        $data['lang'] = $lang;
        $data['isLoggedin'] = $this->isLoggedin;
        $data['page_title'] = $this->page_title = json_decode($page->title, TRUE)[$lang];
        $data['page_subtitle'] = $this->page_subtitle = json_decode($page->subtitle, TRUE)[$lang];
        $data['page_meta_keywords'] = $this->page_meta_keywords = json_decode($page->meta_keys, TRUE)[$lang];
        $data['page_meta_description'] = $this->page_meta_description = json_decode($page->meta_desc, TRUE)[$lang];
        $data['header_nav'] = 'home';
        $data['sidebar_nav'] = '';
        $data['page'] = ['title' => $this->page_title, 'subtitle' =>  $this->page_subtitle, 'description' => json_decode($page->description, TRUE)[$lang]];
        $data['breadcrumb'][site_url()] = $this->page_title;
        $this->render('home', $data);
    }
}
