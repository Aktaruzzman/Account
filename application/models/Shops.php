
<?php

class Shops extends MY_Model
{

    function __construct()
    {
        parent::__construct();
        $this->_table_name = 'shops';
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
        $is_name_unique = $this->check_unique('name', $this->input->post('name'), ['client_id' => $this->input->post('client_id')]) ? "|is_unique[shops.name]" : "";
        $is_phone_unique = "|is_unique[shops.phone]";
        $is_email_unique = "|is_unique[shops.email]";
        $is_base_url_unique = "|is_unique[shops.base_url]";
        if ($this->input->post('id')) {
            $existing = $this->get($this->input->post('id'), TRUE);
            $is_name_unique =  $existing->name === $this->input->post('name') ? '' : $is_name_unique;
            $is_phone_unique = $existing->phone === $this->input->post('phone') ? '' : $is_phone_unique;
            $is_email_unique = $existing->email === $this->input->post('email') ? '' : $is_email_unique;
            $is_base_url_unique = $existing->base_url === $this->input->post('base_url') ? '' : $is_base_url_unique;
        }
        $this->form_validation->set_rules('name', lang('shop') . ' ' . lang('name'), 'trim|required|min_length[2]|max_length[50]' . $is_name_unique);
        $this->form_validation->set_rules('phone', lang('phone'), 'trim|required|min_length[11]|max_length[17]' . $is_phone_unique);
        $this->form_validation->set_rules('base_url', lang('base_url'), 'trim|required|valid_url|prep_url' . $is_base_url_unique);
        $this->form_validation->set_rules('email', lang('email'), 'trim|required|valid_email' . $is_email_unique);
        $this->form_validation->set_rules('client_id', lang('client') . ' ' . lang('id'), 'trim|required');
        return $this->form_validation->run();
    }
}
