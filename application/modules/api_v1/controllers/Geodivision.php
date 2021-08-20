<?php

defined('BASEPATH') or exit('No direct script access allowed');
require APPPATH . '/libraries/REST_Controller.php';

use Restserver\Libraries\REST_Controller;

class Geodivision extends REST_Controller
{
    function __construct($config = 'rest')
    {
        parent::__construct($config);
        if ($this->server->require_scope()) {
            $this->load->model('Geodivisions');
            $this->load->model('Geodistricts');
            $this->load->model('Geoupazillas');
            $this->load->model('Geounions');
            $this->load->model('Geoareas');
        }
    }
    public function index_get($id = NULL, $edit = NULL, $deleted = NULL, $limit = NULL, $offset = NULL)
    {
        if (!empty($id) && empty($edit)) {
            $results['entity'] = $this->Geodivisions->get($id, TRUE, $deleted);
            if ($results['entity']) $results['entity']->name = json_decode($results['entity']->name);
        } else {
            $results['list'] = $this->Geodivisions->get_by(NULL, FALSE, $deleted, $limit, $offset);
            foreach ($results['list'] as $index => $obj) {
                $results['list'][$index]->name = json_decode($obj->name);
                if ($id == $obj->id) {
                    $results['entity'] =  $results['list'][$index];
                }
            }
            $results['total'] = $this->Geodivisions->count_rows(NULL, $deleted);
        }
        return $this->response($results);
    }
    public function search_post()
    {
        $results['criteria'] = $this->post();
        $results['list'] = $this->Geodivisions->get_by(NULL, FALSE, TRUE, NULL, NULL, trim($this->post('search')), ['name', 'value', 'status']);
        foreach ($results['list'] as $index => $obj) {
            $results['list'][$index]->name = json_decode($obj->name);
        }
        $results['total']  = count($results['list']);
        return $this->response($results);
    }
    public function filter_post()
    {
        $results['criteria'] = $criteria = $this->Geodivisions->entity($this->post());
        $results['list'] = $this->Geodivisions->get_by($criteria, FALSE, TRUE, NULL, NULL);
        foreach ($results['list'] as $index => $obj) {
            $results['list'][$index]->name = json_decode($obj->name);
        }
        $results['total']  = count($results['list']);
        return $this->response($results);
    }
    public function index_post()
    {
        if ($this->Geodivisions->validate()) {
            $this->db->trans_start();
            $entity = $this->Geodivisions->entity($this->post());
            if (array_key_exists('name_en', $entity) || array_key_exists('name_bn', $entity)) {
                $entity['name_en'] = strtolower($entity['name_en']);
                $entity['name'] = json_encode(array('en' => $entity['name_en'], 'bn' => $entity['name_bn']), JSON_UNESCAPED_UNICODE);
            }
            $order_by = $this->Geodivisions->orderBy();
            if (!empty($entity['id'])) {
                if (!empty($entity[$order_by]) && $order_by === 'order') {
                    $old_order = $this->Geodivisions->get($entity['id'], TRUE)->order;
                    if (intval($old_order) !== $entity[$order_by]) {
                        $this->Geodivisions->sort($entity['id'], $old_order, $entity[$order_by]);
                    }
                    unset($entity[$order_by]);
                }
                $results['status'] = $this->Geodivisions->save($entity, $entity['id']);
            } else {
                if (!empty($entity[$order_by]) && $order_by === 'order') {
                    $entity[$order_by] = $this->Geodivisions->get_max($this->Geodivisions->orderBy()) + 1;
                }
                $results['status'] = $this->Geodivisions->save($entity);
            }
            $this->db->trans_complete();
            $results['status'] = $this->db->trans_status() && $results['status'];
            $results['message'] = $results['status'] ? sprintf(lang('saved_success_msg'), lang('division') . ' ' . lang('info')) : sprintf(lang('saved_failed_msg'), lang('division') . ' ' . lang('info'));
            return $this->response($results);
        }
        return  $this->response(['status' => FALSE, 'entity' => $this->post(), 'message' => $this->form_validation->error_array()]);
    }
    public function index_put($id = NULL)
    {
        if (!empty($id)) {
            $this->db->trans_start();
            $entity = $this->Geodivisions->entity($this->put());
            if (array_key_exists('name_en', $entity) || array_key_exists('name_bn', $entity)) {
                $entity['name_en'] = strtolower($entity['name_en']);
                $entity['value'] = strtolower($entity['value']);
                $entity['name'] = json_encode(array('en' => $entity['name_en'], 'bn' => $entity['name_bn']), JSON_UNESCAPED_UNICODE);
            }
            $order_by = $this->Geodivisions->orderBy();
            if (!empty($entity[$order_by]) && $order_by === "order") {
                $old_order = $this->Geodivisions->get($id, TRUE)->order;
                if (intval($old_order) !== $entity[$order_by]) {
                    $this->Geodivisions->sort($id, $old_order, $entity[$order_by]);
                }
                unset($entity[$order_by]);
            }
            $results['status'] = $this->Geodivisions->save($entity, $id);
            $this->db->trans_complete();
            $results['status'] = $this->db->trans_status() &&  $results['status'];
            $results['message'] = $results['status'] ? sprintf(lang('update_success_msg'), lang('division') . ' ' . lang('info')) : sprintf(lang('update_failed_msg'), lang('division') . ' ' . lang('info'));
            return $this->response($results);
        }
        return $this->response(['status' => FALSE, 'message' => 'invalid request'], REST_Controller::HTTP_BAD_REQUEST);
    }
    public function default_put($id = NULL)
    {
        if (!empty($id) && !empty($this->Geodivisions->defaultBy())) {
            $this->db->trans_start();
            $obj = (array) $this->Geodivisions->get($id, TRUE);
            if (!empty($obj) && !$obj[$this->Geodivisions->defaultBy()]) {
                $this->Geodivisions->unset_default(NULL);
                $results['status'] = $this->Geodivisions->set_default(['id' => $obj['id']]);
            }
            $this->db->trans_complete();
            $results['status'] = $this->db->trans_status();
            $results['message'] = $results['status'] ? sprintf(lang('update_success_msg'), lang('district')) : sprintf(lang('update_failed_msg'), lang('district'));
            return $this->response($results);
        } else {
            return $this->response(['status' => FALSE, 'message' => 'invalid request'], REST_Controller::HTTP_BAD_REQUEST);
        }
    }

    public function index_delete($id)
    {
        if (!empty($id)) {
            $this->db->trans_start();
            $districts = $this->Geodistricts->get_by(['division_id' => $id], FALSE, TRUE);
            foreach ($districts as $district) {
                $upazillas = $this->Geoupazillas->get_by(['district_id' => $district->id], FALSE, TRUE);
                foreach ($upazillas as $obj) {
                    $this->Geounions->delete_by(['upazilla_id' => $obj->id]);
                    $this->Geoareas->delete_by(['upazilla_id' => $obj->id]);
                }
                $this->Geoupazillas->delete_by(['district_id' => $district->id]);
            }
            $this->Geodistricts->delete_by(['division_id' => $id]);
            $this->Geodivisions->delete($id);
            $this->db->trans_complete();
            $results['status'] = $this->db->trans_status();
            $results['message'] = $results['status'] ? sprintf(lang('delete_success_msg'), lang('division')) : sprintf(lang('delete_failed_msg'), lang('division'));
            return $this->response($results);
        } else {
            return $this->response(['status' => FALSE, 'message' => 'invalid request'], REST_Controller::HTTP_BAD_REQUEST);
        }
    }
    public function undo_put($id = NULL)
    {
        if (!empty($id)) {
            $this->db->trans_start();
            $districts = $this->Geodistricts->get_by(['division_id' => $id], FALSE, TRUE);
            foreach ($districts as $district) {
                $upazillas = $this->Geoupazillas->get_by(['district_id' => $district->id], FALSE, TRUE);
                foreach ($upazillas as $obj) {
                    $this->Geounions->save_by([$this->Geounions->deletedAt() => FALSE, 'status' => 'inactive'], ['upazilla_id' => $obj->id]);
                    $this->Geounions->save_by([$this->Geoareas->deletedAt() => FALSE, 'status' => 'inactive'], ['upazilla_id' => $obj->id]);
                }
                $this->Geoupazillas->save_by([$this->Geoupazillas->deletedAt() => FALSE, 'status' => 'inactive'], ['district_id' => $district->id]);
            }
            $this->Geodistricts->save_by([$this->Geodistricts->deletedAt() => FALSE, 'status' => 'inactive'], ['division_id' => $id]);
            $this->Geodivisions->save([$this->Geodistricts->deletedAt() => FALSE, 'status' => 'inactive'], $id);
            $this->db->trans_complete();
            $results['status'] = $this->db->trans_status();
            $results['message'] = $results['status'] ? sprintf(lang('update_success_msg'), lang('division')) : sprintf(lang('update_failed_msg'), lang('division'));
            return $this->response($results);
        } else {
            return $this->response(['status' => FALSE, 'message' => 'invalid request'], REST_Controller::HTTP_BAD_REQUEST);
        }
    }
    public function trash_delete($id = NULL)
    {
        if (!empty($id)) {
            $this->db->trans_start();
            $districts = $this->Geodistricts->get_by(['division_id' => $id], FALSE, TRUE);
            foreach ($districts as $district) {
                $upazillas = $this->Geoupazillas->get_by(['district_id' => $district->id], FALSE, TRUE);
                foreach ($upazillas as $obj) {
                    $this->Geounions->delete_by(['upazilla_id' => $obj->id], TRUE);
                    $this->Geoareas->delete_by(['upazilla_id' => $obj->id], TRUE);
                }
                $this->Geoupazillas->delete_by(['district_id' => $district->id], TRUE);
            }
            $this->Geodistricts->delete_by(['division_id' => $id], TRUE);
            $this->Geodivisions->delete($id, TRUE);
            $this->db->trans_complete();
            $results['status'] = $this->db->trans_status();
            $results['message'] = $results['status'] ? sprintf(lang('delete_success_msg'), lang('division')) : sprintf(lang('delete_failed_msg'), lang('division'));
            return $this->response($results);
        } else {
            return $this->response(['status' => FALSE, 'message' => 'invalid request'], REST_Controller::HTTP_BAD_REQUEST);
        }
    }
}
