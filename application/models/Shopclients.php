
<?php

class Shopclients extends MY_Model
{

    function __construct()
    {
        parent::__construct();
        $this->_table_name = 'shopclients';
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
        $phoneUnique = "|is_unique[shopclients.phone]";
        $emailUnique = "|is_unique[shopclients.email]";
        $appUnique = "|is_unique[shopclients.app_id]";
        if ($this->input->post('id')) {
            $existing = $this->get($this->input->post('id'), TRUE);
            $phoneUnique = strtolower($existing->phone) === strtolower($this->input->post('phone')) ? '' : $phoneUnique;
            $emailUnique = $existing->email === $this->input->post('email') ? '' : $emailUnique;
            $appUnique = $existing->app_id === $this->input->post('app_id') ? '' : $appUnique;
        }
        $this->form_validation->set_rules('name', lang('client') . ' ' . lang('name'), 'required|min_length[2]|max_length[50]');
        $this->form_validation->set_rules('phone', lang('phone'), 'required|min_length[11]|max_length[17]' . $phoneUnique);
        $this->form_validation->set_rules('email', lang('email'), 'required|valid_email' . $emailUnique);
        $this->form_validation->set_rules('app_id', lang('app') . ' ' . lang('id'), 'required' . $appUnique);
        return $this->form_validation->run();
    }
}
