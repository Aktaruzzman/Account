<div class="content-area top-mutual" id="contentArea">
    <div class="w3-content w3-section">
        <div class="row w3-container">
            <div class="w3-block w3-xlarge Oswald w3-container w3-margin-top w3-text-capitalize">
                <i class="fa fa-windows">&nbsp;</i><?php echo $page_title ?>
            </div>
            <div class="w3-row-padding w3-section">
                <div class="w3-col l2 m4 s6 w3-section-half">
                    <a href="<?php echo site_url('office/api') ?>">
                        <div class="w3-theme-light w3-border w3-border-theme w3-round-large w3-center w3-padding">
                            <div class="w3-padding w3-text-theme"><i class="fa fa-gears fa-3x"></i></div>
                            <div class="w3-text-bold w3-padding-8"><?php echo lang('api') ?></div>
                        </div>
                    </a>
                </div>
                <div class="w3-col l2 m4 s6 w3-section-half">
                    <a href="<?php echo site_url('office/client') ?>">
                        <div class="w3-theme-light w3-border w3-border-theme w3-round-large w3-center w3-padding">
                            <div class="w3-padding w3-text-theme"><i class="fa fa-users fa-3x"></i></div>
                            <div class="w3-text-bold w3-padding-8"><?php echo lang('client') ?></div>
                        </div>
                    </a>
                </div>
                <div class="w3-col l2 m4 s6 w3-section-half">
                    <a href="<?php echo site_url('office/shop') ?>">
                        <div class="w3-theme-light w3-border w3-border-theme w3-round-large w3-center w3-padding">
                            <div class="w3-padding w3-text-theme"><i class="fa fa-university fa-3x"></i></div>
                            <div class="w3-text-bold w3-padding-8"><?php echo lang('shop') ?></div>
                        </div>
                    </a>
                </div>
                <div class="w3-col l2 m4 s6 w3-section-half">
                    <?php
                    $lang_url = ($lang === "en") ? site_url('app/bengali') : site_url('app/english');
                    $lang_text = ($lang === "en") ? lang('bangla') : lang('english');
                    ?>
                    <a href="<?php echo $lang_url ?>">
                        <div class="w3-theme-light w3-border w3-border-theme w3-round-large w3-center w3-padding">
                            <div class="w3-padding w3-text-theme"><i class="fa fa-language fa-3x"></i></div>
                            <div class="w3-text-bold w3-padding-8"><?php echo $lang_text ?></div>
                        </div>
                    </a>
                </div>
                <div class="w3-col l2 m4 s6 w3-section-half">
                    <a href="<?php echo site_url('office/logout') ?>">
                        <div class="w3-theme-light w3-border w3-border-theme w3-round-large w3-center w3-padding">
                            <div class="w3-padding w3-text-theme"><i class="fa fa-sign-out fa-3x"></i></div>
                            <div class="w3-text-bold w3-padding-8"><?php echo lang('logout') ?></div>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    </div>
</div>