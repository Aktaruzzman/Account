<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office">

<head>
    <!--[if gte mso 9]>
        <xml>
            <o:OfficeDocumentSettings>
            <o:AllowPNG/>
            <o:PixelsPerInch>96</o:PixelsPerInch>
            </o:OfficeDocumentSettings>
        </xml>
    <![endif]-->
    <meta http-equiv="Content-type" content="text/html; charset=utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="format-detection" content="date=no" />
    <meta name="format-detection" content="address=no" />
    <meta name="format-detection" content="telephone=no" />
    <meta name="x-apple-disable-message-reformatting" />
    <!--[if !mso]><!-->
    <link href="https://fonts.googleapis.com/css?family=Hind+Vadodara|Stint+Ultra+Condensed" rel="stylesheet" />
    <!--<![endif]-->
    <title><?php echo $this->lang->line('email_verification_code') . ' | ' . $this->lang->line('site_title') ?></title>
    <!--[if gte mso 9]>
        <style type="text/css" media="all">
                sup { font-size: 100% !important; }
        </style>
    <![endif]-->

    <style type="text/css" media="screen">
        body {
            padding: 0 !important;
            margin: 0 !important;
            display: block !important;
            min-width: 100% !important;
            width: 100% !important;
            background: #fbfbfb;
            -webkit-text-size-adjust: none;
            font-family: 'Hind Vadodara', 'Verdana', "Helvetica Neue", Helvetica, sans-serif;
            font-size: 14px;
            line-height: 1.4
        }
        a {
            text-decoration: none;
            font-weight: bold;
        }
    </style>
</head>

<body class="body" style="padding:0 !important; margin:0 !important; display:block !important; min-width:100% !important; width:100% !important; background:#fbfbfb; -webkit-text-size-adjust:none;">
    <table width="100%" border="0" cellspacing="0" cellpadding="0" bgcolor="#fbfbfb">
        <tr>
            <td align="center" valign="top">
                <table width="650" border="0" cellspacing="0" cellpadding="0" class="mobile-shell" style="margin-top: 40px">
                    <tr>
                        <td class="td" style="width:650px; min-width:650px; font-size:20pt;">
                            <table width="100%" border="0" cellspacing="0" cellpadding="0">
                                <tr>
                                    <td bgcolor="#eeeeee" class="p30-15 img-center" style="padding: 15px; font-size:0pt; line-height:0pt; text-align:center;">
                                        <a href="<?php echo site_url() ?>" target="_blank">
                                            <img src="<?php echo ASSET_PATH ?>img/logo.png" width="250" height="75" border="0" alt="<?php echo get_domain() ?>" style="margin-bottom: 20px" class="fluid-img" /><br />
                                            <span style="color:#000000; font-size:15pt; line-height:15pt; text-align:center; padding:30px 0px;"><?php echo config_item('shop_name_' . lang_option()) ?></span><br />
                                            <span style="color:#000000; font-size:12pt; line-height:12pt; text-align:center; padding:30px 0px;">
                                                <?php echo get_shop_address() ?><br />
                                                <?php echo config_item('shop_phone') ?>
                                            </span>
                                        </a>
                                    </td>
                                </tr>
                            </table>
                            <table width="100%" border="0" cellspacing="0" cellpadding="0" bgcolor="#ffffff">
                                <tr>
                                    <td class="p30-15-0" style="padding:20px" bgcolor="#ffffff">
                                        <table width="100%" border="0" cellspacing="0" cellpadding="0">
                                            <tr>
                                                <td class="h5-center" style="text-transform: capitalize; font-size:130%"><?php echo  $recipent ?>, </td>
                                            </tr>
                                            <tr>
                                                <td class="text-center"><?php echo $text ?></td>
                                            </tr>
                                        </table>
                                    </td>
                                </tr>
                            </table>
                            <?php if ($recipent_type != "admin") : ?>
                                <table width="100%" border="0" cellspacing="0" cellpadding="0" bgcolor="#ffffff">
                                    <tr>
                                        <td class="p30-15-0" style="padding:0px 20px" bgcolor="#ffffff">
                                            <table width="100%" border="0" cellspacing="0" cellpadding="0">
                                                <tr>
                                                    <td class="text-left">
                                                        <?php echo $this->lang->line('sincerely_yours') ?>,<br />
                                                        <?php echo $this->lang->line('account_team') ?>
                                                    </td>
                                                </tr>
                                            </table>
                                        </td>
                                    </tr>
                                </table>
                            <?php endif; ?>
                            <table width="100%" border="0" cellspacing="0" cellpadding="0">
                                <tr>
                                    <td class="p30-15-0" bgcolor="#dddddd" style="padding: 10px;">
                                        <table width="100%" border="0" cellspacing="0" cellpadding="0">
                                            <tr>
                                                <td align="center" class="p30-15" style="font-size: 12px; color: #000000;">
                                                    Copyright&nbsp;&copy;&nbsp;<?php echo date('Y') ?>&nbsp;<a style="color: #000000" href="<?php echo site_url() ?>"><?php echo get_domain() ?></a>
                                                </td>
                                            </tr>
                                        </table>
                                    </td>
                                </tr>
                            </table>
                        </td>
                    </tr>
                </table>
            </td>
        </tr>
    </table>
</body>
</html>