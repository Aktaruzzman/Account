<?php

defined('BASEPATH') OR exit('No direct script access allowed');

class Appconfig extends CI_Model {

    function exists($key) {
        $this->db->from('systemconfigs');
        $this->db->where('systemconfigs.key', $key);
        $query = $this->db->get();
        return ($query->num_rows() == 1);
    }

    function get_all() {
        $this->db->from('systemconfigs');
        $this->db->order_by("key", "asc");
        return $this->db->get();
    }

    function get($key) {
        $query = $this->db->get_where('systemconfigs', array('key' => $key), 1);

        if ($query->num_rows() == 1) {
            return $query->row()->value;
        }
        return "";
    }

    function save($key, $value) {
        $config_data = array(
            'key' => $key,
            'value' => $value
        );
        if (!$this->exists($key)) {
            return $this->db->insert('systemconfigs', $config_data);
        }

        $this->db->where('key', $key);
        return $this->db->update('systemconfigs', $config_data);
    }

    function batch_save($data) {
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

    function delete($key) {
        return $this->db->delete('systemconfigs', array('key' => $key));
    }

    function delete_all() {
        return $this->db->empty_table('systemconfigs');
    }

}
