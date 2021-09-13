<?php
defined('BASEPATH') or exit('No direct script access allowed');
class Login extends Layout_Public
{
    function __construct()
    {
        parent::__construct();
        if ($this->My_Model->isOfficerIn()) {
            redirect(site_url());
        }
    }
    public function index()
    {
        set_last_page('login');
        $this->robots = "noindex,nofollow";
        $page = $this->db->where('slug', 'home')->get('pages')->row();
        $this->body_class = ["page-home"];
        $data['lang'] = lang_option();
        $data['isLoggedin'] = $this->isLoggedin;
        $data['page_title'] = $this->page_title = lang('admin');
        $data['page_subtitle'] = $this->page_subtitle = lang('ignore_admin_link');
        $data['header_nav'] = '';
        $data['sidebar_nav'] = '';
        $data['page'] = ['title' => $this->page_title, 'subtitle' =>  $this->page_subtitle, 'description' => json_decode($page->description, TRUE)[lang_option()]];
        $data['breadcrumb'][site_url()] = $this->page_title;
        if ($this->input->post()) {
            $this->__process();
        }
        $this->render('login', $data);
    }
    private function __process()
    {
        if ($this->_has_valid_data()) {
            $user = $this->_log_officer($this->preparePostedData());
            if (!empty($user)) $this->session->set_userdata('officer_id', $user->id);
            redirect(current_url());
        }
    }
    private function _has_valid_data()
    {
        $this->form_validation->set_rules('username', lang('username'), 'trim|required', array('required' => lang('field_required_msg')));
        $this->form_validation->set_rules('password', lang('password'), 'required', array('required' => lang('field_required_msg')));
        return $this->form_validation->run();
    }
    private function _log_officer($data)
    {
        $user = $this->db->where('email', $data['username'])->or_where('phone', $data['username'])->or_where('username', $data['username'])->get('systemusers')->row();
        if (!empty($user) && $user->password === md5($data['password']) && $user->status == "active") {
            return $user;
        } else {
            $this->session->set_flashdata(array('warning_msg' => lang('invalid_email_password'), 'username' => $data['username']));
            return false;
        }
    }
}
