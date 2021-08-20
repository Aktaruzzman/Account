<?php

defined('BASEPATH') or exit('No direct script access allowed');

class Password extends MX_Controller
{
    function index()
    {
        $this->server->password_credentials();
    }
}
