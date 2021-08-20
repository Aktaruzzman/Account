
<?php

class Billing extends MY_Model
{

    function __construct()
    {
        parent::__construct();
        $this->load->model('Shops');
        $this->load->model('Shopapps');
    }
    public function amount($client_id)
    {
        $amount = 0;
        $shops = $this->Shops->get_by(['client_id' => $client_id], NULL, FALSE, NULL, NULL, NULL, ['id']);
        if (!empty($shops)) {
            foreach ($shops as $key => $shop) {
                $shopApp = $this->Shopapps->get_by(['shop_id' => $shop->id], TRUE);
                if (!empty($shopApp)) {
                    $amount += (float) config_item('bill_per_android_app') *   (float) $shopApp->android;
                    $amount += (float) config_item('bill_per_apple_app') *   (float) $shopApp->apple;
                    $amount += (float) config_item('bill_per_driver_app') *   (float) $shopApp->driver;
                    $amount += (float) config_item('bill_per_handler_app') *   (float) $shopApp->handler;
                    $amount += (float) config_item('bill_per_owner_app') *   (float) $shopApp->owner;
                    $amount += (float) config_item('bill_per_website_app') *   (float) $shopApp->website;
                    $amount += (float) config_item('bill_per_epos_app') *   (float) $shopApp->epos;
                }
            }
        }
        return $amount;
    }
}
