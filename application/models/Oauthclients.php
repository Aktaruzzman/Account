
<?php

class Oauthclients extends MY_Model
{

    function __construct()
    {
        parent::__construct();
        $this->_table_name = 'oauth_clients';
        $this->_primary_key = 'client_id';
        $this->_order_by = 'created_at';
        $this->_default = '';
        $this->_created_at = 'created_at';
        $this->_updated_at = 'updated_at';
        $this->_deleted_at = 'deleted_at';
        $this->_soft_deleted = TRUE;
        $this->_timestamps = TRUE;
        $this->_allowable_fileds = array('client_id', 'client_secret', 'redirect_uri', 'created_at', 'updated_at');
        $this->_rules = array();
    }
    public function validate()
    {
        $clientIdUnique = "|is_unique[oauth_clients.client_id]";
        $this->form_validation->set_rules('client_id', lang('client') . ' ' . lang('id'), 'required|min_length[6]|max_length[80]' . $clientIdUnique);
        $this->form_validation->set_rules('redirect_uri', lang('client') . ' ' . lang('domain'), 'valid_url');
        return $this->form_validation->run();
    }
}
