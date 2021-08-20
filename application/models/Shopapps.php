
<?php

class Shopapps extends MY_Model
{

    function __construct()
    {
        parent::__construct();
        $this->_table_name = 'shopapps';
        $this->_primary_key = 'id';
        $this->_order_by = 'id';
        $this->_default = '';
        $this->_created_at = 'created_at';
        $this->_updated_at = 'updated_at';
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
    public function total($shop_id = 0)
    {
        $total_apps = 0;
        $shopApp = $this->get_by(['shop_id' => $shop_id], TRUE);
        if (!empty($shopApp)) {
            $total_apps += (int) $shopApp->android;
            $total_apps += (int) $shopApp->apple;
            $total_apps += (int) $shopApp->driver;
            $total_apps += (int) $shopApp->handler;
            $total_apps += (int) $shopApp->owner;
            $total_apps += (int) $shopApp->website;
            $total_apps += (int) $shopApp->epos;
        }
        return $total_apps;
    }
}
