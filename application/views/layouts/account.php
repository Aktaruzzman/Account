<!DOCTYPE html>
<html lang="<?php echo lang_option() ?>">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="Cache-Control" content="no-cache, no-store, must-revalidate" />
    <meta http-equiv="Pragma" content="no-cache" />
    <meta http-equiv="Expires" content="0" />
    <?php echo $template['metadata'] ?>
    <title><?php echo $template['title'] ?></title>
    <link rel="shortcut icon" href="<?php echo base_url() ?>/favicon.ico" />
    <link rel="shortcut icon" href="./favicon.ico" type="image/x-icon">
    <link rel="icon" href="<?php echo base_url() ?>/favicon.ico" type="image/x-icon">
    <link rel="stylesheet" href="<?php echo ASSET_PATH ?>plugins/font-awesome-4.7.0/css/font-awesome.min.css">
    <link rel="stylesheet" href="<?php echo ASSET_PATH ?>css/w3.css" />
    <link rel="stylesheet" href="<?php echo ASSET_PATH ?>css/style.css" />
    <link rel="stylesheet" href="<?php echo ASSET_PATH ?>css/media.css" />
    <link rel="stylesheet" href="<?php echo ASSET_PATH ?>css/themes/w3-theme-<?php !empty(config_item('office_theme')) ? print config_item('office_theme') : print 'light-blue' ?>.css" onerror="this.href='<?php echo ASSET_PATH ?>css/themes/w3-theme-white.css'" />
    <script>
        var _Currency_ = "<?php echo config_item('currency_' . lang_option()) ?>";
        var _Lang_ = "<?php echo lang_option() ?>"
        var _BASE_URL_ = "<?php echo base_url() ?>"
    </script>
    <script src="<?php echo ASSET_PATH ?>js/lib/jquery.min.js"></script>
    <script src="<?php echo ASSET_PATH ?>js/lib/w3.js"></script>
    <script src="<?php echo ASSET_PATH ?>js/lib/lang.js"></script>
    <script src="<?php echo ASSET_PATH ?>js/lib/jquery.validate.min.js"></script>
    <script src="<?php echo ASSET_PATH ?>js/lib/form-settings.js"></script>
    <script src="<?php echo ASSET_PATH ?>js/lib/axios.min.js"></script>
    <script src="<?php echo ASSET_PATH ?>js/lib/handlebars.min-v4.7.3.js"></script>
    <script src="<?php echo ASSET_PATH ?>js/lib/lodash.min.js"></script>
    <script src="<?php echo ASSET_PATH ?>js/lib/moment.min.js"></script>
    <script src="<?php echo ASSET_PATH ?>js/lib/jquery.sticky-kit.min.js"></script>
    <script src="<?php echo ASSET_PATH ?>js/lib/utility.js"></script>
    <script src="<?php echo ASSET_PATH ?>js/App.js"></script>
    <script src="<?php echo ASSET_PATH ?>js/Api.js"></script>
    <script src="<?php echo ASSET_PATH ?>js/index.js"></script>
</head>

<body class="w3-white <?php echo $body_class ?>">
    <?php echo $template['partials']['header'] ?>
    <?php echo $template['body'] ?>
    <?php echo $template['partials']['footer'] ?>
</body>

</html>