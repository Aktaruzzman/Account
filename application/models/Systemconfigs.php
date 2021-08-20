<?php

defined('BASEPATH') or exit('No direct script access allowed');

class Systemconfigs extends CI_Model
{

    function exists($key)
    {
        $this->db->from('systemconfigs');
        $this->db->where('systemconfigs.key', $key);
        $query = $this->db->get();
        return ($query->num_rows() == 1);
    }
    function get_all()
    {
        $this->db->from('systemconfigs');
        $this->db->order_by("key", "asc");
        $result = $this->db->get()->result();
        $config = array();
        foreach ($result as $obj) {
            if ($obj->key === 'vendor_name' || $obj->key === 'vendor_address') {
                $config[$obj->key] = json_decode($obj->value);
            } else {
                $config[$obj->key] = $obj->value;
            }
        }
        return $config;
    }
    function get($key)
    {
        $query = $this->db->get_where('systemconfigs', array('key' => $key), 1);
        if ($query->num_rows() == 1) {
            return $query->row()->value;
        }
        return "";
    }
    function save($key, $value)
    {
        $systemconfigs_data = array(
            'key' => $key,
            'value' => $value
        );
        if (!$this->exists($key)) {
            return $this->db->insert('systemconfigs', $systemconfigs_data);
        }
        $this->db->where('key', $key);
        return $this->db->update('systemconfigs', $systemconfigs_data);
    }
    function batch_save($data)
    {
        $success = true;
        $this->db->trans_start();
        foreach ($data as $key => $value) {
            if (!$this->save($key, $value)) {
                $success = false;
                break;
            }
        }
        $this->db->trans_complete();
        return $success;
    }
}
