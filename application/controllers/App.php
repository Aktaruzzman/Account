<?php
defined('BASEPATH') or exit('No direct script access allowed');
class App extends MX_Controller
{
    function __construct()
    {
        parent::__construct();
        $this->load->model('Cookie_Model');
    }
    public function english()
    {
        $this->Cookie_Model->set_lang('en');
        redirect(!empty($this->session->tempdata('temp_url')) ? $this->session->tempdata('temp_url') : get_last_page());
    }
    public function bengali()
    {
        $this->Cookie_Model->set_lang('bn');
        redirect(!empty($this->session->tempdata('temp_url')) ? $this->session->tempdata('temp_url') : get_last_page());
    }
}
