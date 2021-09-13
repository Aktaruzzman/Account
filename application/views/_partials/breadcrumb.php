<section id="breadcurmb" class="w3-theme-l3 w3-small">
    <div class="w3-content">
        <div class="w3-container">
            <div class="breadcurmb w3-small">
                <div class="w3-left w3-row-padding">
                    <?php $breadcrumbCounter = 1; ?>
                    <?php foreach ($breadcrumb as $link => $title) : ?>
                        <a href="<?php echo $link ?>" class=""><?php echo $title ?></a>
                        <?php if ($breadcrumbCounter !== count($breadcrumb)) : ?>
                            <i class="fa fa-angle-right w3-padding-small">&nbsp;</i>
                            <?php $breadcrumbCounter++; ?>
                        <?php endif; ?>
                    <?php endforeach; ?>
                </div>
            </div>
        </div>
    </div>
</section>