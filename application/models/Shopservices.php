
<?php

class Shopservices extends MY_Model
{

    function __construct()
    {
        parent::__construct();
        $this->_table_name = 'shopservices';
        $this->_primary_key = 'id';
        $this->_order_by = '';
        $this->_default = '';
        $this->_created_at = '';
        $this->_updated_at = '';
        $this->_deleted_at = 'deleted_at';
        $this->_soft_deleted = TRUE;
        $this->_timestamps = TRUE;
        $this->_rules = array();
    }
    public function validate()
    {
        $this->form_validation->set_rules('shop_id', lang('shop'), 'required|integer', array('required' => lang('field_required_msg')));
        return $this->form_validation->run();
    }
}
