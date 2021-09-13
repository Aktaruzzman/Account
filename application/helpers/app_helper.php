<?php
if (!function_exists('lang_option')) {
    function lang_option()
    {
        $CI = &get_instance();
        $CI->load->model('Cookie_Model');
        return $CI->Cookie_Model->get_lang();
    }
}
if (!function_exists('currency')) {
    function currency($amount)
    {
        return lang_option() === "bn" ? to_bengali(number_format($amount, 2)) . config_item('currency_bn') : config_item('currency_en') . ' ' . number_format($amount, 2);
    }
}
if (!function_exists('amount')) {
    function amount($amount)
    {
        return lang_option() === "bn" ? to_bengali(number_format($amount, 2)) : number_format($amount, 2);
    }
}
if (!function_exists('number')) {
    function number($number)
    {
        return lang_option() === "bn" ? to_bengali($number) : $number;
    }
}
if (!function_exists('rounding')) {
    function rounding($val)
    {
        return round($val, config_item('precesion'), PHP_ROUND_HALF_UP);
    }
}
if (!function_exists('to_bengali')) {

    function to_bengali($bn_number, $lang = null)
    {
        $lang = $lang ? $lang : lang_option();
        if ($lang === "bn") {
            $bn_digits = array("১", "২", "৩", "৪", "৫", "৬", "৭", "৮", "৯", "০");
            $en_digits = array("1", "2", "3", "4", "5", "6", "7", "8", "9", "০");
            $output = str_replace($en_digits, $bn_digits, $bn_number);
            return $output;
        } else return $bn_number;
    }
}
if (!function_exists('is_english')) {
    function is_english($str)
    {
        return strlen($str) != strlen(utf8_decode($str)) ? false : true;
    }
}
if (!function_exists('verify_date')) {
    function verify_date($format = "m/d/Y", $date)
    {
        return (DateTime::createFromFormat($format, $date) !== false);
    }
}
if (!function_exists('add_time')) {

    function add_time($pattern = '1H1M1S', $format = false)
    {
        $date = new DateTime();
        $date->add(new DateInterval('PT' . $pattern));
        if ($format) {
            return $date->format('Y-m-d H:i:s');
        } else {
            $tenDigitTime = strtotime($date->format('Y-m-d H:i:s'));
            return $tenDigitTime * 1000;
        }
    }
}
if (!function_exists('sub_time')) {

    function sub_time($pattern = '1H1M1S', $format = false)
    {
        $date = new DateTime();
        $date->sub(new DateInterval('PT' . $pattern));
        if ($format)
            return $date->format('Y-m-d H:i:s');
        else {
            $tenDigitTime = strtotime($date->format('Y-m-d H:i:s'));
            return $tenDigitTime * 1000;
        }
    }
}


if (!function_exists('get_domain')) {

    function get_domain()
    {
        $CI = &get_instance();
        return preg_replace("/^[\w]{2,6}:\/\/([\w\d\.\-]+).*$/", "$1", $CI->config->slash_item('base_url'));
    }
}
if (!function_exists('sms')) {
    function sms($phone, $message)
    {
        if (config_item('sms_service') === "yes") {
            //API URL (GET & POST) : https://esms.mimsms.com/smsapi?api_key=(APIKEY)&type=text&contacts=(NUMBER)&senderid=(Approved Sender ID)&msg=(Message Content)
            $content = 'api_key=' . rawurlencode('C20061625e936d00a4c2c0.96874058') . '&type=' . rawurlencode('text') . '&contacts=' . rawurlencode($phone) . '&senderid=' . rawurlencode('8809601000100') . '&msg=' . rawurlencode($message);
            $ch = curl_init('https://esms.mimsms.com/smsapi');
            curl_setopt($ch, CURLOPT_POST, true);
            curl_setopt($ch, CURLOPT_POSTFIELDS, $content);
            curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
            $output = curl_exec($ch);
            curl_close($ch);
            return $output;
        }
    }
}
if (!function_exists('email')) {
    function email($data, $template = "common")
    {
        if (config_item('email_service') === "yes") {
            $CI = &get_instance();
            $CI->load->library('email');
            $config['mailtype'] = 'html';
            $config['charset'] = 'utf-8';
            $config['priority'] = 1;
            $config['protocol'] = 'sendmail';
            $CI->email->initialize($config);
            $CI->email->from($data['from'], $data['from_title']);
            $CI->email->to($data['to']);
            $CI->email->subject($data['subject']);
            return $CI->load->view('email/' . $template, $data, true);
            $CI->email->message($CI->load->view('email/' . $template, $data, true));
            $CI->email->reply_to($data['from'], $data['from_title']);
            return $CI->email->send();
        } else return  true;
    }
}
if (!function_exists('get_rows')) {

    function get_rows($table, $condition = null, $columns = '*', $order = null, $order_type = "ASC")
    {
        $CI = &get_instance();
        if ($columns) $CI->db->select($columns);
        if ($condition)  $CI->db->where($condition);
        if ($order) $CI->db->order_by($order, $order_type);
        return $CI->db->get($table)->result();
    }
}
if (!function_exists('get_row')) {

    function get_row($table, $condition = null, $columns = '*')
    {
        $CI = &get_instance();
        $CI->db->select($columns);
        if ($condition) {
            $CI->db->where($condition);
        }
        return $CI->db->get($table)->row();
    }
}
if (!function_exists('count_rows')) {

    function count_rows($table, $condition = null)
    {
        $CI = &get_instance();
        if ($condition) {
            $CI->db->where($condition);
        }
        $CI->db->from($table);
        return $CI->db->count_all_results();
    }
}
if (!function_exists('get_name')) {

    function get_name($table, $condition, $lang = null)
    {
        $record = get_row($table, $condition);
        return json_decode($record->name, true)[!empty($lang) ? $lang : lang_option()];
    }
}
if (!function_exists('is_active_page')) {

    function is_active_page($slug)
    {
        $obj = get_row('pages', array('slug' => $slug, 'status' => 'active'));
        return !empty($obj) ? true : false;
    }
}
if (!function_exists('pagination')) {

    function pagination($base_url, $total_rows, $per_page = 10, $first_url = "review")
    {
        $CI = &get_instance();
        $CI->load->library('pagination');
        $config['base_url'] = $base_url;
        $config['total_rows'] = $total_rows;
        $config['per_page'] = $per_page;
        $config['full_tag_open'] = "<div class='w3-bar pagination'>";
        $config['full_tag_close'] = "</div>";
        $config['first_url'] = site_url($first_url);
        $config['attributes'] = array('class' => 'w3-button w3-theme-d1 w3-hover-theme w3-round', 'style' => 'margin:0 1px');
        $config['cur_tag_open'] = "<a class='w3-button w3-theme-l1 w3-hover-theme w3-round'>";
        $config['cur_tag_close'] = "</a>";
        $CI->pagination->initialize($config);
        return $CI->pagination->create_links();
    }
}
if (!function_exists('get_avg')) {
    function get_avg($table, $field, $condition = null)
    {
        $CI = &get_instance();
        $CI->db->select_avg($field);
        $CI->db->from($table);
        if ($condition) {
            $CI->db->where($condition);
        }
        return $CI->db->get()->row();
    }
}

if (!function_exists('get_sum')) {
    function get_sum($table, $field, $condition = null)
    {
        $CI = &get_instance();
        $CI->db->select_sum($field);
        $CI->db->from($table);
        if ($condition) {
            $CI->db->where($condition);
        }
        return $CI->db->get()->row();
    }
}
if (!function_exists('get_avatar')) {
    function get_avatar($id, $field = "photo", $table = "customers", $directory = 'customer')
    {
        $CI = &get_instance();
        $photo = $CI->db->where('id', $id)->get($table)->row_array()[$field];
        if (!empty($photo)) return checkfile("./uploads/" . $directory . "/", $photo) ? UPLOAD_PATH . $directory . '/' . $photo : false;
        else return false;
    }
}
if (!function_exists('get_themes')) {
    function get_themes()
    {
        $themes = array();
        $themes['amber'] = 'amber';
        $themes['black'] = 'black';
        $themes['blue'] = 'blue';
        $themes['light-blue'] = 'light-blue';
        $themes['blue-grey'] = 'blue-grey';
        $themes['brown'] = 'brown';
        $themes['cyan'] = 'cyan';
        $themes['green'] = 'green';
        $themes['light-green'] = 'light-green';
        $themes['grey'] = 'grey';
        $themes['dark-grey'] = 'dark-grey';
        $themes['orange'] = 'orange';
        $themes['deep-orange'] = 'deep-orange';
        $themes['purple'] = 'purple';
        $themes['deep-purple'] = 'deep-purple';
        $themes['indigo'] = 'indigo';
        $themes['khaki'] = 'khaki';
        $themes['lime'] = 'lime';
        $themes['pink'] = 'pink';
        $themes['red'] = 'red';
        $themes['teal'] = 'teal';
        $themes['leaf'] = 'leaf';
        $themes['yellow'] = 'yellow';
        $themes['white'] = 'white';
        return $themes;
    }
}
if (!function_exists('add_activity')) {
    function add_activity($issue = null, $activity = null)
    {
        $CI = &get_instance();
        $CI->load->model('Userlogs');
        $CI->load->model('Useractivities');
        $headers = getallheaders();
        if (!empty($headers['log_id'])) {
            $logger = $CI->Userlogs->get($headers['log_id']);
            $CI->Useractivities->save(array('user_id' => $logger->user_id, 'hub_id' => $headers['hub_id'], 'device_id' => $logger->device_code, 'issue' => $issue, 'activity' => $activity));
        }
    }
}

if (!function_exists('objectToArray')) {

    function objectToArray($d)
    {
        if (is_object($d)) $d = get_object_vars($d);
        if (is_array($d)) return array_map(__FUNCTION__, $d);
        else return $d;
    }
}
if (!function_exists('unique_multidim_array')) {
    function unique_multidim_array($array, $key)
    {
        $temp_array = array();
        $i = 0;
        $key_array = array();
        foreach ($array as $val) {
            if (!in_array($val[$key], $key_array)) {
                $key_array[$i] = $val[$key];
                $temp_array[$i] = $val;
            }
            $i++;
        }
        return $temp_array;
    }
}
if (!function_exists('checkfile')) {
    function checkfile($path = '', $file = '')
    {
        return file_exists($path . $file) ? true : false;
    }
}

if (!function_exists('set_last_page')) {
    function set_last_page($slug = '')
    {
        $CI = &get_instance();
        $CI->session->set_userdata('lastAccessUrl', site_url($slug));
    }
}
if (!function_exists('get_last_page')) {
    function get_last_page()
    {
        $CI = &get_instance();
        return $CI->session->userdata('lastAccessUrl');
    }
}
if (!function_exists('set_page_slug')) {
    function set_page_slug($slug = '')
    {
        $CI = &get_instance();
        $CI->session->set_userdata('page_slug', $slug);
    }
}
if (!function_exists('get_page_slug')) {
    function get_page_slug()
    {
        $CI = &get_instance();
        return $CI->session->userdata('page_slug');
    }
}

if (!function_exists('order_status_css')) {
    function order_status_css($key, $type = 'bg')
    {
        $text = ['pending' => 'w3-text-orange', 'confirmed' => 'w3-text-green', 'paid' => 'w3-text-green', 'rejected' => 'w3-text-red', 'canceled' => 'w3-text-red', 'unpaid' => 'w3-text-red'];
        $bg = ['pending' => 'w3-orange', 'confirmed' => 'w3-green', 'paid' => 'w3-green', 'rejected' => 'w3-red', 'canceled' => 'w3-red', 'unpaid' => 'w3-red',];
        return $type === 'bg' ? $bg[$key] : $text[$key];
    }
}

if (!function_exists('debugPrint')) {
    function debugPrint($object, $title = "", $isMarkup = false)
    {
        echo '<font color="red">Debug <<< START';
        if (!empty($title)) {
            echo "$title: ";
        }
        if (false == $isMarkup) {
            echo "<pre>";
            print_r($object);
            echo "</pre>";
        } else {
            echo htmlspecialchars($object);
        }
        echo 'END >>></font>';
    }
}
