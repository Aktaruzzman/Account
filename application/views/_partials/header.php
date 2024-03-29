<header class="header w3-theme-d1 w3-top" id="header">
    <div class="w3-content w3-container">
        <div class="w3-bar">
            <div class="w3-left logo-container">
                <a class="w3-bar-item" style="padding-left: 0px;" href="<?php echo site_url(); ?>">
                    <?php if (!empty(config_item('logo')) && checkfile(APPPATH . '../uploads/', config_item('logo'))) : ?>
                        <img src="<?php echo UPLOAD_PATH ?><?php echo config_item('logo') ?>" alt="<?php echo config_item('logo') ?>" class="w3-image  w3-padding-16" />
                    <?php else : ?>
                        <img src="<?php echo ASSET_PATH ?>img/logo.png" alt="<?php echo config_item('logo') ?>" class="w3-image w3-paddings-16" />
                    <?php endif ?>
                </a>
            </div>
        </div>
    </div>
</header>