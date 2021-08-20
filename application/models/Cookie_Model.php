<?php

class Cookie_Model extends MY_Model
{

    function __construct()
    {
        parent::__construct();
        $this->load->library('encryption');
    }

    /**
     * @set customer id  in the cookie
     */
    function set_foodie()
    {
        $expire = 365 * 50 * 3600 * 24;
        set_cookie("__foodie", $this->encryption->encrypt($this->session->userdata('customerId')), $expire);
    }

    /**
     * @get customer id  from the cookie
     */
    function get_foodie()
    {
        return $this->encryption->decrypt(get_cookie('__foodie'));
    }

    /**
     * @clear customer id  from the cookie
     */
    function clear_foodie()
    {
        delete_cookie("__foodie");
    }

    function set_lang($language)
    {
        $expire = 365 * 50 * 3600 * 24;
        set_cookie("__lang", $this->encryption->encrypt($language), $expire);
    }
    function get_lang()
    {
        if (!empty($this->encryption->decrypt(get_cookie('__lang')))) {
            return $this->encryption->decrypt(get_cookie('__lang'));
        } else {
            $this->set_lang('en');
            return 'en';
        }
    }
    function clear_lang()
    {
        delete_cookie("__lang");
    }
}
