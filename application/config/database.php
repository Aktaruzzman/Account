<?php
defined('BASEPATH') or exit('No direct script access allowed');
$active_group = 'default';
$query_builder = TRUE;
$db['default'] = array(
    'dsn' => (ENVIRONMENT == 'production') ? 'mysql:dbname=hilibaza_accounts;host=localhost' : 'mysql:dbname=accounts;host=localhost',
    'hostname' => 'localhost',
    'username' => (ENVIRONMENT == 'production') ? 'hilibaza_production' : 'root',
    'password' => (ENVIRONMENT == 'production') ? '}&Xx2Ohu@+7C' : 'root',
    'database' => (ENVIRONMENT == 'production') ? 'hilibaza_accounts' : 'accounts',
    'dbdriver' => 'mysqli',
    'dbprefix' => '',
    'pconnect' => FALSE,
    'db_debug' => (ENVIRONMENT !== 'production'),
    'cache_on' => FALSE,
    'cachedir' => '',
    'char_set' => 'utf8',
    'dbcollat' => 'utf8_general_ci',
    'swap_pre' => '',
    'encrypt' => FALSE,
    'compress' => FALSE,
    'stricton' => FALSE,
    'failover' => array(),
    'save_queries' => TRUE
);
