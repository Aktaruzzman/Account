<?php

defined('BASEPATH') or exit('No direct script access allowed');

class Preloader
{

    private $CI;

    public function __construct()
    {
        $this->CI = &get_instance();
        $this->CI->load->model('Cookie_Model');
    }

    function load($language = 'english')
    {
        foreach ($this->CI->Appconfig->get_all()->result() as $app_config) {
            $this->CI->config->set_item($app_config->key, $app_config->value);
        }
        $language = $this->CI->Cookie_Model->get_lang() === "bn" ? 'bengali' : 'english';
        $map = directory_map(APPPATH . 'language/' . $language);
        foreach ($map as $file) {
            if (!is_array($file) && substr(strrchr($file, '.'), 1) == "php") {
                $this->CI->lang->load(str_replace('_lang.php', '', $file), $language);
            }
        }
        if ($this->CI->config->item('timezone')) {
            date_default_timezone_set($this->CI->config->item('timezone'));
        } else {
            date_default_timezone_set('Asia/Dhaka');
        }
        if (!$this->CI->session->userdata('customerId') && get_cookie('__foodie')) {
            $this->CI->session->set_userdata('customerId', $this->CI->Cookie_Model->get_foodie());
        }
    }
}
