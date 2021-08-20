<?php

defined('BASEPATH') or exit('No direct script access allowed');
require APPPATH . '/libraries/REST_Controller.php';

use Restserver\Libraries\REST_Controller;

class Geodistrict extends REST_Controller
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

    public function index_get($id = NULL, $edit = NULL, $base = NULL, $deleted = NULL, $limit = NULL, $offset = NULL)
    {
        $results['base'] = $base ? $this->Geodivisions->get($base, TRUE) : NULL;
        if ($results['base']) $results['base']->name = json_decode($results['base']->name);
        if (!empty($id) && empty($edit)) {
            $results['entity'] = $this->Geodistricts->get($id, TRUE, $deleted);
            if ($results['entity']) $results['entity']->name = json_decode($results['entity']->name);
        } else {
            $results['list'] = !empty($base) ? $this->Geodistricts->get_by(['division_id' => $base], FALSE, $deleted, $limit, $offset) : $this->Geodistricts->get_by(NULL, FALSE, $deleted, $limit, $offset);
            foreach ($results['list'] as $index => $obj) {
                $results['list'][$index]->name = json_decode($obj->name);
                if ($id == $obj->id) {
                    $results['entity'] =  $results['list'][$index];
                }
            }
            $results['total'] = !empty($base) ? $this->Geodistricts->count_rows(['division_id' => $base], $deleted) : $this->Geodistricts->count_rows(NULL, $deleted);
        }
        return $this->response($results);
    }

    public function search_post()
    {
        $results['criteria'] = $this->post();
        $base = !empty($this->post('base')) ? trim($this->post('base')) : NULL;
        $results['base'] = !empty($base) ? $this->Geodivisions->get($base, TRUE) : NULL;
        if ($results['base']) $results['base']->name = json_decode($results['base']->name);
        $results['list'] = !empty($base) ? $this->Geodistricts->get_by(['division_id' => $base], FALSE, TRUE, NULL, NULL, trim($this->post('search')), ['name_en', 'name_bn', 'status']) : $this->Geodistricts->get_by(NULL, FALSE, TRUE, NULL, NULL, trim($this->post('search')),  ['name_en', 'name_bn', 'status']);
        foreach ($results['list'] as $index => $obj) {
            $results['list'][$index]->name = json_decode($obj->name);
        }
        $results['total']  = count($results['list']);
        return $this->response($results);
    }
    public function filter_post()
    {
        $results['criteria'] = $criteria = $this->Geodistricts->entity($this->post());
        $results['list'] = $this->Geodistricts->get_by($criteria, FALSE, TRUE, NULL, NULL);
        foreach ($results['list'] as $index => $obj) {
            $results['list'][$index]->name = json_decode($obj->name);
        }
        $results['total']  = count($results['list']);
        return $this->response($results);
    }

    public function index_post()
    {
        if ($this->Geodistricts->validate()) {
            $this->db->trans_start();
            $entity = $this->Geodistricts->entity($this->post());
            if (array_key_exists('name_en', $entity) || array_key_exists('name_bn', $entity)) {
                $entity['name_en'] = strtolower($entity['name_en']);
                $entity['name'] = json_encode(array('en' => $entity['name_en'], 'bn' => $entity['name_bn']), JSON_UNESCAPED_UNICODE);
            }
            $order_by = $this->Geodistricts->orderBy();
            if (!empty($entity['id'])) {
                if (!empty($entity[$order_by]) && $order_by === 'order') {
                    $old_order = $this->Geodistricts->get($entity['id'], TRUE)->order;
                    if (intval($old_order) !== $entity[$order_by]) {
                        $this->Geodistricts->sort($entity['id'], $old_order, $entity[$order_by]);
                    }
                    unset($entity[$order_by]);
                }
                $results['status'] = $this->Geodistricts->save($entity, $entity['id']);
            } else {
                if (!empty($entity[$order_by]) && $order_by === 'order') {
                    $entity[$order_by] = $this->Geodistricts->get_max($this->Geodistricts->orderBy()) + 1;
                }
                $results['status'] = $this->Geodistricts->save($entity);
            }
            $this->db->trans_complete();
            $results['status'] = $this->db->trans_status() && $results['status'];
            $results['message'] = $results['status'] ? sprintf(lang('saved_success_msg'), lang('district') . ' ' . lang('info')) : sprintf(lang('saved_failed_msg'), lang('district') . ' ' . lang('info'));
            return $this->response($results);
        }
        return  $this->response(['status' => FALSE, 'entity' => $this->post(), 'message' => $this->form_validation->error_array()]);
    }
    public function index_put($id = NULL)
    {
        if (!empty($id)) {
            $this->db->trans_start();
            $entity = $this->Geodistricts->entity($this->put());
            if (array_key_exists('name_en', $entity) || array_key_exists('name_bn', $entity)) {
                $entity['name_en'] = strtolower($entity['name_en']);
                $entity['name'] = json_encode(array('en' => $entity['name_en'], 'bn' => $entity['name_bn']), JSON_UNESCAPED_UNICODE);
            }
            $order_by = $this->Geodistricts->orderBy();
            if (!empty($entity[$order_by]) && $order_by === "order") {
                $old_order = $this->Geodistricts->get($id, TRUE)->order;
                if (intval($old_order) !== $entity[$order_by]) {
                    $this->Geodistricts->sort($id, $old_order, $entity[$order_by]);
                }
                unset($entity[$order_by]);
            }
            $results['status'] = $this->Geodistricts->save($entity, $id);
            $this->db->trans_complete();
            $results['status'] = $this->db->trans_status() &&  $results['status'];
            $results['message'] = $results['status'] ? sprintf(lang('update_success_msg'), lang('district') . ' ' . lang('info')) : sprintf(lang('update_failed_msg'), lang('district') . ' ' . lang('info'));
            return $this->response($results);
        }
        return $this->response(['status' => FALSE, 'message' => 'invalid request'], REST_Controller::HTTP_BAD_REQUEST);
    }
    public function default_put($id = NULL)
    {
        if (!empty($id) && !empty($this->Geodistricts->defaultBy())) {
            $this->db->trans_start();
            $obj = (array)$this->Geodistricts->get($id, TRUE);
            if (!empty($obj) && !$obj[$this->Geodistricts->defaultBy()]) {
                $this->Geodistricts->unset_default(['division_id' => $obj['division_id']]);
                $results['status'] = $this->Geodistricts->set_default(['id' => $obj['id']]);
            }
            $this->db->trans_complete();
            $results['status'] = $this->db->trans_status() &&  $results['status'];
            $results['message'] = $results['status'] ? sprintf(lang('update_success_msg'), lang('district')) : sprintf(lang('update_failed_msg'), lang('district'));
            return $this->response($results);
        }
        return $this->response(['status' => FALSE, 'message' => 'invalid request'], REST_Controller::HTTP_BAD_REQUEST);
    }

    public function index_delete($id = NULL)
    {
        if (!empty($id)) {
            $this->db->trans_start();
            $upazillas = $this->Geoupazillas->get_by(['district_id' => $id], FALSE, TRUE);
            foreach ($upazillas as $obj) {
                $this->Geoareas->delete_by(['upazilla_id' => $obj->id]);
                $this->Geounions->delete_by(['upazilla_id' => $obj->id]);
            }
            $this->Geoupazillas->delete_by(['district_id' => $id]);
            $this->Geodistricts->delete($id);
            $this->db->trans_complete();
            $results['status'] = $this->db->trans_status();
            $results['message'] = $results['status'] ? sprintf(lang('delete_success_msg'), lang('district')) : sprintf(lang('delete_failed_msg'), lang('district'));
            return $this->response($results);
        } else {
            return $this->response(['status' => FALSE, 'message' => 'invalid request'], REST_Controller::HTTP_BAD_REQUEST);
        }
    }
    public function undo_put($id = NULL)
    {
        if (!empty($id)) {
            $this->db->trans_start();
            $upazillas = $this->Geoupazillas->get_by(['district_id' => $id], FALSE, TRUE);
            foreach ($upazillas as $obj) {
                $this->Geounions->save_by([$this->Geounions->deletedAt() => FALSE, 'status' => 'inactive'], ['upazilla_id' => $obj->id]);
                $this->Geoareas->save_by([$this->Geoareas->deletedAt() => FALSE, 'status' => 'inactive'], ['upazilla_id' => $obj->id]);
            }
            $this->Geoupazillas->save_by([$this->Geoupazillas->deletedAt() => FALSE, 'status' => 'inactive'], ['district_id' => $id]);
            $this->Geodistricts->save([$this->Geodistricts->deletedAt() => FALSE, 'status' => 'inactive'], $id);
            $this->db->trans_complete();
            $results['status'] = $this->db->trans_status();
            $results['message'] = $results['status'] ? sprintf(lang('update_success_msg'), lang('district')) : sprintf(lang('update_failed_msg'), lang('district'));
            return $this->response($results);
        } else {
            return $this->response(['status' => FALSE, 'message' => 'invalid request'], REST_Controller::HTTP_BAD_REQUEST);
        }
    }
    public function trash_delete($id = NULL)
    {
        if (!empty($id)) {
            $this->db->trans_start();
            $upazillas = $this->Geoupazillas->get_by(['district_id' => $id], FALSE, TRUE);
            foreach ($upazillas as $obj) {
                $this->Geoareas->delete_by(['upazilla_id' => $obj->id], TRUE);
                $this->Geounions->delete_by(['upazilla_id' => $obj->id], TRUE);
            }
            $this->Geoupazillas->delete_by(['district_id' => $id], TRUE);
            $this->Geodistricts->delete($id, TRUE);
            $this->db->trans_complete();
            $results['status'] = $this->db->trans_status();
            $results['message'] = $results['status'] ? sprintf(lang('delete_success_msg'), lang('district')) : sprintf(lang('delete_failed_msg'), lang('district'));
            return $this->response($results);
        } else {
            return $this->response(['status' => FALSE, 'message' => 'invalid request'], REST_Controller::HTTP_BAD_REQUEST);
        }
    }
}
