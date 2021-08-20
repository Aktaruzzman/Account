<section class="w3-theme-light w3-center Oswald w3-card-4" style="background-image: linear-gradient(rgba(255,255,255,.5),rgba(255,255,255,.5)),url('<?php echo ASSET_PATH ?>public/img/banner-2.jpg'); background-position: center center;background-repeat: no-repeat;background-size: cover; ">
    <div class="w3-content w3-container" id="heroBanner">
        <h1 class="w3-xxlarge w3-text-bold w3-text-upper"><span class="w3-bottombar w3-border-theme Oswald"><?php echo $page_title ?></span></h1>
        <h2 class="w3-margin-bottom w3-xlarge Oswald w3-text-upper"><?php echo $page_subtitle ?></h2>
    </div>
    <div class="cart-hooker w3-hide-large w3-hide-medium">
        <?php if ($header_nav === "order") : ?>
            <a class="w3-padding cart-hooker-inner w3-theme-dark" href="javascript:void(0);" onclick="scrollToPosition('#menuPageRightSidebar')" id="cartHooker"><?php echo currency(0) ?>&nbsp;<span class="spinning" style="display: none"><img src="<?php echo ASSET_PATH . "public/img/ajax-loader.gif" ?>" class="w3-image w3-circle w3-green"></span></a>
        <?php else : ?>
            <a class="w3-padding cart-hooker-inner w3-theme-dark" href="<?php echo site_url('order') ?>" id="cartHooker"><?php echo currency(0) ?>&nbsp;<span class="spinning" style="display: none"><img src="<?php echo ASSET_PATH . "public/img/ajax-loader.gif" ?>" class="w3-image w3-circle"></span></a>
        <?php endif; ?>
    </div>
</section>