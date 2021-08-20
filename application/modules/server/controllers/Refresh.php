<?php
defined('BASEPATH') or exit('No direct script access allowed');

class Refresh extends MX_Controller
{
    function index()
    {
        $this->server->refresh_token();
    }
}
