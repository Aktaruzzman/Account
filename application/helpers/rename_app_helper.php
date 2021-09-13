<?php
if (!function_exists('debugPrint')) {

    function debugPrint($object, $title = "", $isMarkup = false)
    {
        echo '<font color="red">Debug <<< START';
        if (!empty($title)) {
            echo "$title: ";
        }
        if ($isMarkup == false) {
            echo "<pre>";
            print_r($object);
            echo "</pre>";
        } else {
            echo htmlspecialchars($object);
        }
        echo 'END >>></font>';
    }
}
if (!function_exists('checkfile')) {
    function checkfile($path = '', $file = '')
    {
        return file_exists($path . $file) ? TRUE : FALSE;
    }
}
if (!function_exists('lang_option')) {
    function lang_option()
    {
        $CI = &get_instance();
        $CI->load->model('Cookie_Model');
        return  $CI->Cookie_Model->get_lang();
    }
}
if (!function_exists('currency')) {
    function currency($amount)
    {
        return lang_option() === "bn" ? config_item('currency_bn') . ' ' . to_bengali(number_format($amount, 2)) : config_item('currency_en') . ' ' . number_format($amount, 2);
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
if (!function_exists('to_bengali')) {

    function to_bengali($english)
    {
        $english = (string) $english;
        $bengali = '';
        $length = strlen($english);
        for ($i = 0; $i < $length; $i++) {
            switch ($english[$i]) {
                case "0":
                    $bengali .= '&#2534;';
                    break;
                case "1":
                    $bengali .= '&#2535;';
                    break;
                case "2":
                    $bengali .= '&#2536;';
                    break;
                case "3":
                    $bengali .= '&#2537;';
                    break;
                case "4":
                    $bengali .= '&#2538;';
                    break;
                case "5":
                    $bengali .= '&#2539;';
                    break;
                case "6":
                    $bengali .= '&#2540;';
                    break;
                case "7":
                    $bengali .= '&#2541;';
                    break;
                case "8":
                    $bengali .= '&#2542;';
                    break;
                case "9":
                    $bengali .= '&#2543;';
                    break;
                default:
                    $bengali .= $english[$i];
                    break;
            }
        }
        return $bengali;
    }
}
if (!function_exists('is_english')) {
    function is_english($str)
    {
        if (strlen($str) != strlen(utf8_decode($str))) {
            return false;
        } else {
            return true;
        }
    }
}

if (!function_exists('add_time')) {

    function add_time($pattern = '1H1M1S')
    {
        $date = new DateTime();
        $date->add(new DateInterval('PT' . $pattern));
        $tenDigitTime = strtotime($date->format('Y-m-d H:i:s'));
        return $tenDigitTime * 1000;
    }
}
if (!function_exists('sub_time')) {

    function sub_time($pattern = '1H1M1S')
    {
        $date = new DateTime();
        $date->sub(new DateInterval('PT' . $pattern));
        $tenDigitTime = strtotime($date->format('Y-m-d H:i:s'));
        return $tenDigitTime * 1000;
    }
}

if (!function_exists('get_domain')) {

    function get_domain()
    {
        $CI = &get_instance();
        return preg_replace("/^[\w]{2,6}:\/\/([\w\d\.\-]+).*$/", "$1", $CI->config->slash_item('base_url'));
    }
}
if (!function_exists('sendSMS')) {
    function sendSMS($content)
    {
        $ch = curl_init('http://esms.mimsms.com/smsapi');
        curl_setopt($ch, CURLOPT_POST, true);
        curl_setopt($ch, CURLOPT_POSTFIELDS, $content);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
        $output = curl_exec($ch);
        curl_close($ch);
        return $output;
    }
}
if (!function_exists('sms')) {
    function sms($phone, $message)
    {
        $content = 'api_key=' . rawurlencode('C20061625e936d00a4c2c0.96874058') . '&type=' . rawurlencode('text') . '&contacts=' . rawurlencode($phone) . '&senderid=' . rawurlencode('8809601000100') . '&msg=' . rawurlencode($message);
        return  sendSMS($content);
    }
}
/* sms sending required part end */
if (!function_exists('get_record_list')) {

    function get_record_list($table, $condition = null, $columns = '*', $order = null)
    {
        $CI = &get_instance();
        $CI->db->select($columns);
        if ($order)
            $CI->db->order_by($order);
        if ($condition)
            $CI->db->where($condition);
        return $CI->db->get($table)->result();
    }
}
if (!function_exists('get_single_record')) {

    function get_single_record($table, $condition = null, $columns = '*', $order = null)
    {
        $CI = &get_instance();
        $CI->db->select($columns);
        if ($order)
            $CI->db->order_by($order);
        if ($condition)
            $CI->db->where($condition);
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
        $record = get_single_record($table, $condition);
        return json_decode($record->name, true)[!empty($lang) ? $lang  : lang_option()];
    }
}
if (!function_exists('get_shop_address')) {

    function get_shop_address()
    {
        $address = config_item('addhouse_' . lang_option());
        if (!empty(config_item('addstreet_' . lang_option()))) {
            $address .= ', ' . config_item('addstreet_' . lang_option());
        }
        if (!empty(config_item('addzip_' . lang_option()))) {
            $address .= ', ' . config_item('addzip_' . lang_option());
        }
        $address .= '<br/>' . config_item('addarea_' . lang_option()) . ' ,';
        $address .= config_item('addcity_' . lang_option());
        return $address;
    }
}
if (!function_exists('is_active_page')) {

    function is_active_page($slug)
    {
        $obj = get_single_record('pages', array('slug' => $slug));
        if (!empty($obj)) {
            return $obj->status === "active";
        } else {
            return true;
        }
    }
}
if (!function_exists('pagination')) {

    function pagination($base_url, $total_rows, $per_page = 10)
    {
        $CI = &get_instance();
        $CI->load->library('pagination');
        $config['base_url'] = $base_url;
        $config['total_rows'] = $total_rows;
        $config['per_page'] = $per_page;
        $config['full_tag_open'] = "<div class='w3-bar pagination w3-container'>";
        $config['full_tag_close'] = "</div>";
        $config['first_url'] = site_url('review');
        $config['attributes'] = array('class' => 'w3-button w3-theme-dark w3-hover-theme w3-round', 'style' => 'margin:0 1px');
        $config['cur_tag_open'] = "<a class='w3-button w3-theme w3-hover-theme w3-round'>";
        $config['cur_tag_close'] = "</a>";
        $CI->pagination->initialize($config);
        return $CI->pagination->create_links();
    }
}
if (!function_exists('orange_star')) {
    function orange_star($star)
    {
        $stars = '';
        for ($i = 1; $i <= $star; $i++) {
            $stars .= "<i class='fa fa-star w3-text-orange'></i>";
        }
        return $stars;
    }
}
if (!function_exists('gray_star')) {
    function gray_star($star)
    {
        $stars = '';
        for ($i = 1; $i <= $star; $i++) {
            $stars .= "<i class='fa fa-star w3-text-gray'></i>";
        }
        return $stars;
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
        if (!empty($photo)) {
            return checkfile("./uploads/" . $directory . "/",  $photo) ? UPLOAD_PATH . $directory . '/' . $photo : false;
        } else {
            return false;
        }
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
        return $themes;
    }
}
