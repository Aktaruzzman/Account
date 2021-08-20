<footer class="w3-theme-d3 w3-border-top w3-border-theme" style="position:fixed;bottom:0; width:100%;">
    <!--
    <div class="w3-center" style="margin-top:-10px" onclick="scrollToPosition('#heroBanner')"><i class="fa fa-angle-double-up fa-2x w3-padding w3-theme-d3" style="border-radius: 110% 110% 0 0"></i></div>
    <div class="footer-rest w3-footer">
        <div class="w3-content">
            <div class="w3-row-padding">
                <div class="w3-col m4">
                    <div class="w3-padding-tiny"><span class="w3-text-bold"><?php echo lang('customer') ?> <?php echo lang('service') ?></span></div>
                    <ul class="w3-ul">
                        <?php if (is_active_page('home')) : ?><li class="w3-border-theme w3-padding-tiny"><a href="<?php echo site_url() ?>"><?php echo lang('about') ?></a></li><?php endif; ?>
                        <?php if (is_active_page('review')) : ?><li class="w3-border-theme w3-padding-tiny"><a href="<?php echo site_url('review') ?>"><?php echo lang('review') ?></a></li><?php endif; ?>
                        <?php if (is_active_page('contact')) : ?><li class="w3-border-theme w3-padding-tiny"><a href="<?php echo site_url('contact') ?>"><?php echo lang('contact') ?></a></li><?php endif; ?>
                        <?php if (is_active_page('booking')) : ?><li class="w3-border-theme w3-padding-tiny"><a href="<?php echo site_url('booking') ?>"><?php echo lang('booking') ?></a></li><?php endif; ?>
                        <?php if (is_active_page('gallery')) : ?><li class="w3-border-theme w3-padding-tiny"><a href="<?php echo site_url('gallery') ?>"><?php echo lang('gallery') ?></a></li><?php endif; ?>
                        <?php if (is_active_page('privacypolicy')) : ?><li class="w3-border-theme w3-padding-tiny"><a href="<?php echo site_url('privacypolicy') ?>"><?php echo lang('privacy_policy') ?></a></li><?php endif; ?>
                        <?php if (is_active_page('termsofuse')) : ?><li class="w3-border-theme w3-padding-tiny"><a href="<?php echo site_url('termsofuse') ?>"><?php echo lang('terms_and_conditions') ?></a></li><?php endif; ?>
                    </ul>
                </div>
            </div>
        </div>
    </div>
    -->
    <div class="w3-row w3-theme-dark w3-border-top w3-border-theme">
        <div class="w3-content w3-small">
            <div class="w3-col l6 m6 s6">
                <div class="w3-padding w3-left w3-container">Copyright&nbsp;&copy;&nbsp;<?php echo date('Y') ?><a href="<?php echo site_url() ?>">&nbsp;<?php echo get_domain() ?></a></div>
            </div>
            <div class="w3-col l6 m6 s6">
                <div class="w3-padding w3-right w3-container">&nbsp;Powered by&nbsp;<a href="https://www.bazaar-soft.com" target="_blank">bazaar-soft.com</a></div>
            </div>
        </div>
    </div>
</footer>