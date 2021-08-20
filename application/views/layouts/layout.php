<!DOCTYPE html>
<html lang="<?php echo lang_option() ?>">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <?php if (ENVIRONMENT === "development") : ?>
        <meta http-equiv="Cache-Control" content="no-cache, no-store, must-revalidate" />
        <meta http-equiv="Pragma" content="no-cache" />
        <meta http-equiv="Expires" content="0" />
    <?php endif; ?>
    <meta http-equiv="refresh" content="9000" url="<?php echo site_url() ?>">
    <?php echo $template['metadata'] ?>
    <?php if (ENVIRONMENT === "production") : ?>
        <meta property="og:title" content="<?php echo $og_title ?>" />
        <meta property="og:description" content="<?php echo $og_desc ?>" />
        <meta property="og:image" content="<?php echo $og_img ?>" />
        <meta name="og:site_name" content="<?php echo $og_site_name ?>" />
        <meta name="og:email" content="<?php echo $og_email ?>" />
        <meta name="og:phone_number" content="<?php echo $og_phone_number ?>" />
        <meta name="og:latitude" content="24.8949" />
        <meta name="og:longitude" content="91.8687" />
        <meta name="og:street-address" content="<?php echo config_item('addstreet_' . lang_option()) ?>" />
        <meta name="og:locality" content="<?php echo config_item('addarea_' . lang_option()) ?>" />
        <meta name="og:region" content="<?php echo config_item('addcity_' . lang_option()) ?>" />
        <meta name="og:postal-code" content="<?php echo config_item('addzip_' . lang_option()) ?>" />
        <meta name="og:country-name" content="Bangladesh" />
    <?php endif; ?>
    <title><?php echo $template['title'] ?></title>
    <link rel="shortcut icon" href="<?php echo base_url() ?>/favicon.ico" />
    <link rel="shortcut icon" href="./favicon.ico" type="image/x-icon">
    <link rel="icon" href="<?php echo base_url() ?>/favicon.ico" type="image/x-icon">
    <link rel="stylesheet" href="<?php echo ASSET_PATH ?>public/plugins/font-awesome-4.7.0/css/font-awesome.min.css">
    <link rel="stylesheet" href="<?php echo ASSET_PATH ?>public/css/w3.css" />
    <link rel="stylesheet" type="text/css" href="<?php echo ASSET_PATH ?>public/plugins/rs-plugin/css/settings.css" media="screen" />
    <link rel="stylesheet" href=" https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css" />
    <link href="https://fonts.googleapis.com/css?family=Lato|Montserrat|Open+Sans|Oswald|Raleway|Roboto&display=swap" rel="stylesheet">

    <link rel="stylesheet" href="<?php echo ASSET_PATH ?>public/css/style.css" />
    <link rel="stylesheet" href="<?php echo ASSET_PATH ?>public/css/media.css" />
    <link rel="stylesheet" href="<?php echo ASSET_PATH ?>public/css/themes/w3-theme-light-blue.css" />
    <script type="text/javascript" src="<?php echo ASSET_PATH ?>public/js/jquery.min.js"></script>
    <script>
        if (typeof module === 'object') {
            window.module = module;
            module = undefined;
        }
    </script>
</head>

<body class="w3-theme-light <?php echo $body_class ?>">
    <?php echo $template['partials']['header'] ?>
    <?php echo $template['body'] ?>
    <?php echo $template['partials']['footer'] ?>
    <script type="text/javascript" src="<?php echo ASSET_PATH ?>public/plugins/rs-plugin/js/jquery.themepunch.tools.min.js"></script>
    <script type="text/javascript" src="<?php echo ASSET_PATH ?>public/plugins/rs-plugin/js/jquery.themepunch.revolution.min.js"></script>
    <script type="text/javascript" src="<?php echo ASSET_PATH ?>public/plugins/rs-plugin/js/revolution-slider.js"></script>
    <script type="text/javascript" src="<?php echo ASSET_PATH ?>public/js/jquery.validate.min.js"></script>
    <!--<script type="text/javascript" src="<?php echo ASSET_PATH ?>public/js/handlebars.min-v4.7.3.js"></script>-->
    <script type="text/javascript" src="<?php echo ASSET_PATH ?>public/js/jquery.sticky-kit.min.js"></script>
    <script type="text/javascript" src="<?php echo ASSET_PATH ?>public/js/app.js"></script>
    <script type="text/javascript">
        if (window.module) {
            module = window.module;
        }
    </script>
</body>

</html>