<?php


defined('BASEPATH') or exit('No direct script access allowed');

class Client extends MX_Controller
{
    function index()
    {
        $this->server->client_credentials();
    }
}
