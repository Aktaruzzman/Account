<div class="content-area top-mutual" id="contentArea">
    <?php $this->load->view('partials/slider') ?>
    <div class="w3-content w3-container">
        <div class="w3-section"><?php $this->load->view('partials/how-it-works') ?></div>
        <div class="w3-row-padding w3-white w3-round w3-section">
            <h1 class="w3-xlarge w3-text-bold w3-text-upper w3-center"><?php echo $page['subtitle'] ?></h1>
            <div class="w3-half">
                <article class="w3-medium"><?php echo $page['description'] ?></article>
            </div>
            <div class="w3-half">
                <div class="w3-display-container">
                    <img src="<?php echo ASSET_PATH ?>public/img/grocery.jpg" alt="Lights" class="w3-image w3-border-white w3-border w3-round" />
                    <div class="w3-xlarge w3-display-bottommiddle w3-padding-tiny w3-opacity w3-theme-light w3-cursor-pointer w3-block w3-center"><?php echo config_item('shop_name_' . $lang) ?></div>
                </div>
            </div>
            <div class="w3-center w3-white">
                <?php $this->load->view('partials/order-buttons') ?>
            </div>
        </div>
        <div class="w3-section"><?php //$this->load->view('partials/ad') ?></div>
    </div>
</div>