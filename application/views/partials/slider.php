<div class="tp-banner-container Oswald w3-card-4" id="heroBanner">
    <div class="tp-banner">
        <ul>
            <li class="revolution-mch-1 w3-center" data-transition="fade" data-slotamount="5" data-masterspeed="1000" data-title="Restaurant Food Item">
                <img src="<?php echo ASSET_PATH ?>public/img/sliders/9.jpg" alt="darkblurbg" data-bgfit="cover" data-bgposition="center center" data-bgrepeat="no-repeat">
                <div class="tp-caption revolution-ch1 sft start" data-x="center" data-hoffset="0" data-y="75" data-speed="1500" data-start="500" data-easing="Back.easeInOut" data-endeasing="Power1.easeIn" data-endspeed="100">
                    <?php echo sprintf($this->lang->line('welcome_at_shop'), config_item('shop_name_' . $lang)) ?>
                </div>
                <div class="tp-caption revolution-ch2 sft start" data-x="center" data-hoffset="0" data-y="180" data-speed="1500" data-start="500" data-easing="Back.easeInOut" data-endeasing="Power1.easeIn" data-endspeed="500">
                    <?php echo $this->lang->line('where_shoping_like_pleasure') ?><br />
                    <?php echo $this->lang->line('provide_home_delivery') ?>
                </div>
                <div class="tp-caption revolution-ch3 sft start" data-x="center" data-hoffset="0" data-y="250" data-speed="1500" data-start="500" data-easing="Back.easeInOut" data-endeasing="Power1.easeIn" data-endspeed="500">
                    <i class="fa fa-map-marker">&nbsp;</i><?php echo get_shop_address() ?><br />
                </div>
                <div class="tp-caption sft w3-text-upper w3-large" data-x="center" data-hoffset="0" data-y="330" data-speed="1600" data-start="1800" data-easing="Power4.easeOut" data-endeasing="Power1.easeIn" data-captionhidden="off" data-endspeed="600">
                    <?php $this->load->view('partials/order-buttons') ?>
                </div>
            </li>
        </ul>
        <div class="tp-bannertimer tp-bottom"></div>
    </div>
</div>
<script type="text/javascript">
    jQuery(document).ready(function() {
        RevolutionSlider.initRSfullWidth();
    });
</script>