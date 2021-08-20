function isSuperadmin() {
    return user().role === "superadmin"
}

function isAdmin() {
    return user().role === "admin"
}

function isOwner() {
    return user().role === "owner"
}

function isSalesman() {
    return user().role === "salesman"
}

function isChef() {
    return user().role === "chef"
}

function isSuperadminOrAdmin() {
    return user().role === "admin" || user().role === "superadmin";
}

function isSuperadminOrOwner() {
    return user().role === "owner" || user().role === "superadmin";
}

function isAdminFeeExcluded() {
    var adminFeePlan = !isEmpty(cart.get_defaults()) ? cart.get_defaults().admin_fee : null;
    if (adminFeePlan) {
        return adminFeePlan.per === "order_excluded" ? true : false
    } else {
        return false
    }
}

function numpad(input, value) {
    if (value === "DEL") {
        if ($("#" + input).val().length > 0) {
            var currentInputValue = $("#" + input).val();
            $("#" + input).val(
                currentInputValue.substring(0, currentInputValue.length - 1)
            );
        }
    } else if (value === "CLR") {
        $("#" + input).val("");
    } else {
        $("#" + input).val($("#" + input).val() + value);
    }
    $("#" + input).trigger("input");
}

function setKeypad(obj) {
    $(".numpad").hide();
    $("#" + obj).show();
    $(".numpad-alt-block").hide();
}

function isLoggedIn() {
    return !_.isEmpty(JSON.parse(localStorage.getItem("user")));
}

function hasDeviceTrackingCode() {
    return !_.isEmpty(localStorage.getItem("deviceTrackingCode"));
}

function user() {
    return JSON.parse(localStorage.getItem("user"))
}

function design() {
    if (localStorage.getItem("design")) {
        return JSON.parse(localStorage.getItem("design"))
    } else {
        return {};
    }

}

function userRole() {
    var user = JSON.parse(localStorage.getItem("user"))
    return user.role;
}

function sleep(time) {
    return new Promise((resolve) => setTimeout(resolve, time));
}

function isEmpty(val) {
    if (val === undefined)
        return true;
    if (typeof(val) == 'function' || typeof(val) == 'number' || typeof(val) == 'boolean' || Object.prototype.toString.call(val) === '[object Date]')
        return false;
    if (val == null || val.length === 0) // null or 0 length array
        return true;
    if (typeof(val) == "object") {
        var r = true;
        for (var f in val)
            r = false;
        return r;
    }
    return false;
}

function pasrseDateTime(data, dataFormat, dataReturnFormat) {
    return moment(data, dataFormat).format(dataReturnFormat)
}

function activityLog(issue, activity) {
    if (isLoggedIn()) {
        var userInfo = user();
        var data = {
            issue: issue,
            activity: activity,
            created_at: _.now(),
            user_id: userInfo.id,
        }
        DB.user_activities.add(data)
    }
}

function nextPage(total, limit, offset) {
    var pages = Math.ceil(total / limit);
    var current = Math.ceil(offset / limit) + 1;
    if (offset >= 0 && (offset + limit) < total) {
        offset += limit;
        current = current + 1
    }
    return { total: total, pages: pages, current: current, offset: offset }
}

function prevPage(total, limit, offset) {
    var pages = Math.ceil(total / limit);
    var current = Math.ceil(offset / limit) + 1;
    if (offset > 0) {
        offset -= limit;
        current -= 1;
    } else {
        offset = 0;
        current = 1;
    }
    return { total: total, pages: pages, current: current, offset: offset }
}

function reset_config() {
    DB.transaction("rw", DB.config, DB.user_activities, function() {
        return DB.config.orderBy('key').toArray().then(function(allOptions) {
            var data = {};
            if (allOptions.length > 0) {
                allOptions.forEach(function(item) {
                    data[item.key] = item.value;
                });
            }
            return data;
        }).then(function(data) {
            setConfigData(data);
        });
    });

}

function setConfigData(data) {
    localStorage.setItem("configData", JSON.stringify(data));
}

function getConfigData() {
    return JSON.parse(localStorage.getItem('configData'));
}

function config(key) {
    if (key === "lang" && localStorage.getItem('myLang')) {
        return localStorage.getItem('myLang');
    } else {
        var data = getConfigData();
        if (_.isEmpty(data)) {
            return null;
        }
        return data[key];
    }
}

function getRandomCode() {
    var code = new Array(7).join().replace(/(.|$)/g, function() {
        return ((Math.random() * 36) | 0).toString(36)[Math.random() < .5 ? "toString" : "toUpperCase"]();
    });
    return code.toUpperCase();
}

function pad(n, width, z) {
    z = z || '0';
    n = n + '';
    return n.length >= width ? n : new Array(width - n.length + 1).join(z) + n;
}

function pad_left(n, width, z) {
    z = z || '0';
    n = n + '';
    return n.length >= width ? n : n + new Array(width - n.length + 1).join(z);
}

function get_quantity() {
    return Number($('#quantityHolder').text());
}

function reset_quantity() {
    $('#quantityHolder').text(1)
}

function choose_set_menu(level, group) {
    jQuery('#level-' + level + ' .option-parent').hide();
    jQuery('#relLevelOption-' + level + '-' + group).show();
}

function next_set_menu() {
    if ($("#eposCartItemBundleData .eposCartItemBundleDataLabel:visible").next().length !== 0) {
        $("#bundleDataSelectedCartButtonToProcess").hide();
        $("#eposCartItemBundleData .eposCartItemBundleDataLabel:visible").next().show().prev().hide();
    } else {
        $("#eposCartItemBundleData .eposCartItemBundleDataLabel:visible").hide();
        $('.bundleDataNavigatorBlock').hide();
        $("#bundleDataSelectedCartButtonToProcess").show();
    }
};

function prev_set_menu() {
    if ($("#eposCartItemBundleData .eposCartItemBundleDataLabel:visible").prev().length !== 0) {
        $("#eposCartItemBundleData .eposCartItemBundleDataLabel:visible").prev().show().next().hide();
    } else {
        $("#eposCartItemBundleData .eposCartItemBundleDataLabel:visible").hide();
        $("#eposCartItemBundleData .eposCartItemBundleDataLabel:last").show();
    }
    return false;
};

function get_closing_time() {
    var hour = new Date().getHours();
    var minutes = new Date().getMinutes();
    if (hour >= 0 && hour < 3) {
        return Number(moment(Date.now()).subtract({ hours: hour, minutes: minutes + 1 }).format('x'));
    } else {
        return Number(moment(Date.now()).format('x'))
    }
}

function get_closing_date() {
    var hour = new Date().getHours();
    var minutes = new Date().getMinutes();
    if (hour >= 0 && hour < 3) {
        return moment(Date.now()).subtract({ hours: hour, minutes: minutes + 1 }).format('YYYY-MM-DD');
    } else {
        return moment(Date.now()).format('YYYY-MM-DD')
    }
}

function select_payment(val) {
    if (val === 'Cash') {
        $("#sourceBlock").show();
    } else {
        $("#sourceBlock").hide();
    }
}

function is_valid_ip(ipAddress) {
    const octet = "(?:25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9][0-9]|[0-9])";
    const ip = "(?:" + octet + "\\.){3}" + octet;
    const quad = "(?:\\[" + ip + "\\])|(?:" + ip + ")";
    const ipRE = new RegExp("(" + quad + ")");
    if (ipRE.test(ipAddress)) {
        return true;
    } else {
        return false;
    }
}

function print_line(first, second) {
    var first_length = Number(first.length);
    var second_length = Number(second.length);
    var print_length = Number(get_printer('print_length'))
    var string_length = first_length + second_length;
    var pad = 0;
    var padStr = "";
    if (print_length >= string_length) {
        pad = print_length - string_length;
    } else {
        if (first_length > print_length) {
            var firstRemainder = first_length % print_length;
            var remSec = firstRemainder + second_length;
            if (remSec <= print_length) {
                pad = print_length - remSec;
            } else {
                pad = print_length - second_length;
            }
        } else {
            pad = string_length;
        }
    }
    for (var i = 0; i < pad; i++) {
        padStr += " ";
    }
    return first + padStr + second;
}

function print_dotted_line(width) {
    var length = width ? Number(width) : Number(config('print_length'));
    var dotted = '';
    for (var i = 1; i <= length; i++) {
        dotted += '-';
    }
    return dotted;
}

function get_print_width() {
    var arr = _.split(config('chef_font_style'), ',');
    return Number(arr[0]);

}

function get_print_height() {
    var arr = _.split(config('chef_font_style'), ',');
    return Number(arr[1]);
}

function get_bill_print_width() {
    var arr = _.split(config('bill_font_style'), ',');
    return Number(arr[0]);

}

function get_bill_print_height() {
    var arr = _.split(config('bill_font_style'), ',');
    return Number(arr[1]);
}

function reload() {
    window.location.reload();
}

function exit_app() {
    if (typeof cordova !== 'undefined') {
        if (navigator.app) {
            navigator.app.exitApp();
        } else if (navigator.device) {
            navigator.device.exitApp();
        }
    } else {
        window.close();
        self.showCloseMessage = true; //since the browser can't be closed (otherwise this line would never run), ask the user to close the window
        warning('Close', 'Please close the browser/browser tab by yourself', 'Ok')
    }
}

function show_loader() {
    $('.loader').show();
}

function hide_loader() {
    $('.loader').hide();
}

/** Form Validation */
jQuery.validator.addMethod(
    "alphaonly",
    function(value, element) {
        return this.optional(element) || /^[a-z\s]+$/i.test(value);
    },
    "Only alphabetical characters,please "
);
jQuery.validator.addMethod(
    "alphanumeric",
    function(value, element) {
        return this.optional(element) || /^[\w\-\s]+$/i.test(value);
    },
    "Letters, numbers, and underscores only please"
);
jQuery.validator.addMethod(
    "nowhitespace",
    function(value, element) {
        return this.optional(element) || /^\S+$/i.test(value);
    },
    "No white space please"
);
jQuery.validator.addMethod(
    "phone",
    function(value, element) {
        return (
            this.optional(element) ||
            (value.length > 9 &&
                value.match(
                    /^(1[ \-\+]{0,3}|\+1[ -\+]{0,3}|\+1|\+)?((\(\+?1-[2-9][0-9]{1,2}\))|(\(\+?[2-8][0-9][0-9]\))|(\(\+?[1-9][0-9]\))|(\(\+?[17]\))|(\([2-9][2-9]\))|([ \-\.]{0,3}[0-9]{2,4}))?([ \-\.][0-9])?([ \-\.]{0,3}[0-9]{2,4}){2,3}$/
                ))
        );
    },
    "Please specify a valid phone number"
);
jQuery.validator.addMethod(
    "postcodeUK",
    function(value, element) {
        return (
            this.optional(element) ||
            /^((([A-PR-UWYZ][0-9])|([A-PR-UWYZ][0-9][0-9])|([A-PR-UWYZ][A-HK-Y][0-9])|([A-PR-UWYZ][A-HK-Y][0-9][0-9])|([A-PR-UWYZ][0-9][A-HJKSTUW])|([A-PR-UWYZ][A-HK-Y][0-9][ABEHMNPRVWXY]))\s?([0-9][ABD-HJLNP-UW-Z]{2})|(GIR)\s?(0AA))$/i.test(
                value
            )
        );
    },
    "Please specify a valid UK postcode"
);
jQuery.validator.addMethod(
    "username",
    function(value, element) {
        return this.optional(element) || /^[A-Za-z][a-z0-9\-\s]+$/i.test(value);
    },
    "Username must contain only letters, numbers, or dashes."
);
jQuery.validator.addMethod(
    "email",
    function(value, element) {
        return (
            this.optional(element) ||
            /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
                value
            )
        );
    },
    "Please specify valid email addresss"
);
jQuery.validator.addMethod(
    "website",
    function(value, element) {
        return (this.optional(element) || /((http|https):\/\/)?([a-zA-Z0-9_][-_a-zA-Z0-9]{0,62}\.)+([a-zA-Z0-9]{1,10})$/.test(value));
    },
    "Valid website address only"
);
jQuery.validator.addMethod(
    "valueNotEquals",
    function(value, element, arg) {
        return arg !== value;
    },
    "please select"
);
jQuery.validator.addMethod(
    "eposValidTime",
    function(value, element) {
        return (
            this.optional(element) ||
            /((1[0-2]|0?[1-9]):([0-5][0-9]) ?([AaPp][Mm]))/gim.test(value)
        );
    },
    "Valid time please"
);
jQuery.validator.addMethod('validIP', function(value, element) {
    return (this.optional(element) || is_valid_ip(value));
}, 'Invalid IP Address');
$.validator.addMethod('is_valid_ip', function(value, element) {
    var ip = /^(\d|[1-9]\d|1\d\d|2([0-4]\d|5[0-5]))\.(\d|[1-9]\d|1\d\d|2([0-4]\d|5[0-5]))\.(\d|[1-9]\d|1\d\d|2([0-4]\d|5[0-5]))\.(\d|[1-9]\d|1\d\d|2([0-4]\d|5[0-5]))$/;
    return this.optional(element) || ip.test(value);
}, 'Invalid IP address');

/***************End******************/

function errorPlacement(error, element) {
    var placement = $(element).data('error');
    if (placement) {
        $(placement).append(error);
    } else {
        error.insertAfter(element);
    }
}
//JQuery Confirm Plugins
/*
(function($) {
    $.confirm = function(params) {
        if ($("#confirmOverlay").length) {
            return false;
        }
        var buttonHTML = '<div class="w3-section w3-center w3-container">';
        $.each(params.buttons, function(name, obj) {
            buttonHTML +=
                '<a href="#" class="confirm-button w3-margin ' +
                obj["class"] +
                '">' +
                lang[name][config('lang')] +
                "<span></span></a>";
            if (!obj.action) {
                obj.action = function() {};
            }
        });
        buttonHTML += "</div>";
        var markup = [
            '<div id="confirmOverlay">',
            '<div id="confirmBox" class="w3-theme-light">',
            "<h1 class='w3-theme w3-xlarge w3-padding-small'>",
            params.title,
            "</h1>",
            "<p class='w3-medium w3-container'>",
            params.message,
            "</p>",
            '<div id="confirmButtons">',
            buttonHTML,
            "</div></div></div>"
        ].join("");
        $(markup)
            .hide()
            .appendTo("body")
            .fadeIn();
        var buttons = $("#confirmBox .confirm-button "),
            i = 0;
        $.each(params.buttons, function(name, obj) {
            buttons.eq(i++).click(function() {
                obj.action();
                $.confirm.hide();
                return false;
            });
        });
    };
    $.confirm.hide = function() {
        $("#confirmOverlay").fadeOut(function() {
            $(this).remove();
        });
    };
})(jQuery);
function confirm() {
    $.confirm({
        title: "Title",
        message: "Message",
        buttons: {
            Yes: {
                action: function() {}
            },
            No: { action: function() {} },
            Cancel: { action: function() {} }
        }
    });
}
*/
function isOnline() {
    if (config('shop_api_connect') === "localhost" || is_valid_ip(config('shop_api_connect'))) {
        return true;
    } else {
        if (window.navigator) {
            if (typeof(navigator.connection) !== 'undefined' && !isEmpty(navigator.connection.type)) {
                var networkState = navigator.connection.type;
                return networkState !== Connection.NONE ? true : false
            } else {
                return navigator.onLine ? true : false
            }
        } else {
            return true;
        }
    }
}

var englishBangal = { '0': '০', '1': '১', '2': '২', '3': '৩', '4': '৪', '5': '৫', '6': '৬', '7': '৭', '8': '৮', '9': '৯' };
String.prototype.getBengali = function() {
    var returnStr = this;
    for (var x in englishBangal) {
        returnStr = returnStr.replace(new RegExp(x, 'g'), englishBangal[x]);
    }
    return returnStr;
};


var banglaEnglish = { '০': '0', '১': '1', '২': '2', '৩': '3', '৪': '4', '৫': '5', '৬': '6', '৭': '7', '৮': '8', '৯': '9' };
String.prototype.getEnglish = function() {
    var returnStr = this;
    for (var x in banglaEnglish) {
        returnStr = returnStr.replace(new RegExp(x, 'g'), banglaEnglish[x]);
    }
    return returnStr;
};

function convert(digits) {
    if (config('lang') === "bn") {
        return digits.getBengali();
    } else {
        return digits.getEnglish();
    }
}

function form_data(formData) {
    var data = {};
    for (var pair of formData.entries()) {
        data[pair[0]] = pair[1];
    }
    return data;
}

function currency(amount) {
    var info = { en: config('currency_en') ? config('currency_en') : "Tk", bn: config('currency_bn') ? config('currency_bn') : "টা", side: config('currency_side') ? config('currency_side') : "left" };
    var key = config('lang') ? config('lang') : 'en';
    if (info.side == "left") {
        return key == "en" ? info.en + ' ' + Number(amount ? amount : 0).toFixed(2) : info.bn + ' ' + Number(amount ? amount : 0).toFixed(2).getBengali();
    } else {
        return key == "en" ? Number(amount ? amount : 0).toFixed(2) + ' ' + info.en : Number(amount ? amount : 0).toFixed(2).getBengali() + ' ' + info.bn;
    }
}

function currency_en(amount) {
    var info = { en: config('currency_en') ? config('currency_en') : "Tk", bn: config('currency_bn') ? config('currency_bn') : "টা", side: config('currency_side') ? config('currency_side') : "left" };
    var key = config('lang') ? config('lang') : 'en';
    return info.side == "left" ? info.en + ' ' + Number(amount ? amount : 0).toFixed(2) : Number(amount ? amount : 0).toFixed(2) + ' ' + info.en;
}

function amount(value) {
    var key = config('lang') ? config('lang') : 'en';
    var number = Number(value ? value : 0).toFixed(2);
    return key === "bn" ? number.getBengali() : number.getEnglish();
}

function amount_en(value) {
    return Number(value ? value : 0).toFixed(2);
}

function number(value) {
    var key = config('lang') ? config('lang') : 'en';
    var digits = Number(value ? value : 0).toString();
    return key === "bn" ? digits.getBengali() : digits.getEnglish();
}

function connectBluetoothPrinter(macAddress) {
    if (window.DatecsPrinter) {
        window.DatecsPrinter.connect(macAddress, function(success) {
            console.log(success);
        }, function(error) {
            console.log(error);
        });
    }
}


function set_pos_operation_mode(mode) {
    localStorage.setItem("pos-operation-mode", mode);
    return get_pos_operation_mode();
}

function get_pos_operation_mode() {
    var mode = localStorage.getItem("pos-operation-mode");
    return !_.isEmpty(mode) ? mode : 'sale';
}

function set_api_domain(domain) {
    localStorage.setItem("pos-api-domain", domain);
    return get_api_doamin();
}

function get_api_doamin() {
    var domain = localStorage.getItem("pos-api-domain");
    return !_.isEmpty(domain) ? domain : false;
}

function get_bill_printer() {
    return get_printer('print_bill_ip');
}

function get_sent_printer() {
    return get_printer('print_chef_ip');
}

function get_printer(key) {
    var data = localStorage.getItem('printerSettings') !== null ? JSON.parse(localStorage.getItem('printerSettings')) : getConfigData();
    if (_.isEmpty(data)) {
        return null;
    }
    return data[key];
}

function set_focus(id) {
    if ($('#' + id).length) {
        var searchInput = $('#' + id);
        var strLength = searchInput.val().length * 2;
        searchInput.focus();
        searchInput[0].setSelectionRange(strLength, strLength);
    }
}

function set_product_entry_dorpdown(id) {
    localStorage.setItem("product-entry-dorpdown", Number(id));
    return get_product_entry_dorpdown();
}

function get_product_entry_dorpdown() {
    var supplier = localStorage.getItem("product-entry-dorpdown");
    return !_.isEmpty(supplier) ? Number(supplier) : 1;
}