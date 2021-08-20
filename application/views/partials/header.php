<header class="header w3-top w3-theme-d1 w3-border-bottom w3-border-light-gray w3-card" id="header">
    <div class="w3-content w3-container">
        <div class="w3-bar">
            <div class="w3-left logo-container">
                <a class="w3-bar-item" style="padding-left: 0px;" href="<?php echo site_url('office'); ?>">
                    <?php if (!empty(config_item('shop_logo')) && checkfile(APPPATH . '../uploads/', config_item('shop_logo'))) : ?>
                        <img src="<?php echo UPLOAD_PATH ?><?php echo config_item('shop_logo') ?>" alt="<?php echo config_item('shop_logo') ?>" class="w3-image  w3-padding-16" />
                    <?php else : ?>
                        <img src="<?php echo ASSET_PATH ?>public/img/logo.png" alt="<?php echo config_item('shop_logo') ?>" class="w3-image w3-paddings-16" />
                    <?php endif ?>
                </a>
            </div>
            <div class="w3-right nav-container">
                <?php if ($lang === "en") : ?>
                    <a href="<?php echo site_url('app/bengali'); ?>" class="w3-bar-item w3-hover-white  w3-bar-item-custom"><i class="fa fa-language" aria-hidden="true"></i><br /><span><?php echo lang('bangla') ?></span></a>
                <?php else : ?>
                    <a href="<?php echo site_url('app/english'); ?>" class="w3-bar-item w3-hover-white  w3-bar-item-custom"><i class="fa fa-language" aria-hidden="true"></i><br /><span><?php echo lang('english') ?></span></a>
                <?php endif; ?>
            </div>
        </div>
    </div>
</header>