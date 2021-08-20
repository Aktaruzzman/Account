
<?php

class Oauthaccesstokens extends MY_Model
{

    function __construct()
    {
        parent::__construct();
        $this->_table_name = 'oauth_access_tokens';
        $this->_primary_key = 'access_token';
        $this->_order_by = '';
        $this->_default = '';
        $this->_created_at = '';
        $this->_updated_at = '';
        $this->_deleted_at = 'deleted_at';
        $this->_soft_deleted = TRUE;
        $this->_timestamps = FALSE;
        $this->_rules = array();
    }
}
