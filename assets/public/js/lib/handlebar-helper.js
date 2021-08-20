define(function(require) {
    var moment = require('moment');
    var Handlebars = require('handlebars');
    var lang = require('lang');
    Handlebars.registerHelper('isCordova', function(options) {
        return typeof cordova !== 'undefined' ? options.inverse() : options.fn(this)
    });
    Handlebars.registerHelper('ifeq', function(arg1, arg2, options) {
        return (arg1 == arg2) ? options.fn(this) : options.inverse(this);
    });
    Handlebars.registerHelper('ifneq', function(arg1, arg2, options) {
        return (arg1 != arg2) ? options.fn(this) : options.inverse(this);
    });
    Handlebars.registerHelper('ifgt', function(arg1, arg2, options) {
        return (arg1 > arg2) ? options.fn(this) : options.inverse(this);
    });
    Handlebars.registerHelper('ifgteq', function(arg1, arg2, options) {
        return (arg1 >= arg2) ? options.fn(this) : options.inverse(this);
    });
    Handlebars.registerHelper('iflt', function(arg1, arg2, options) {
        return (arg1 < arg2) ? options.fn(this) : options.inverse(this);
    });
    Handlebars.registerHelper('iflteq', function(arg1, arg2, options) {
        return (arg1 <= arg2) ? options.fn(this) : options.inverse(this);
    });
    Handlebars.registerHelper('isAdminFeeExcluded', function(options) {
        var adminFeePlan = !isEmpty(cart.get_defaults()) ? cart.get_defaults().admin_fee : null;
        if (adminFeePlan) {
            return adminFeePlan.per === "order_excluded" ? options.fn(this) : options.inverse()
        } else {
            return options.inverse()
        }
    });
    Handlebars.registerHelper('isSuperadmin', function(options) {
        return user().role === "superadmin" ? options.fn(this) : options.inverse()
    });

    Handlebars.registerHelper('isOwner', function(options) {
        return user().role === "owner" ? options.fn(this) : options.inverse()
    });
    Handlebars.registerHelper('isAdmin', function(options) {
        return user().role === "admin" ? options.fn(this) : options.inverse()
    });
    Handlebars.registerHelper('isSalesman', function(options) {
        return user().role === "salesman" ? options.fn(this) : options.inverse()
    });
    Handlebars.registerHelper('isChef', function(options) {
        return user().role === "chef" ? options.fn(this) : options.inverse()
    });
    Handlebars.registerHelper('isSuperadminOrAdmin', function(options) {
        return user().role === "superadmin" || user().role === "admin" ? options.fn(this) : options.inverse()
    });
    Handlebars.registerHelper('isSuperadminOrOwner', function(options) {
        return user().role === "superadmin" || user().role === "owner" ? options.fn(this) : options.inverse()
    });
    Handlebars.registerHelper('isSuperadminOrAdminOrOwner', function(options) {
        return user().role === "superadmin" || user().role === "admin" || user().role === "owner" ? options.fn(this) : options.inverse()
    });
    Handlebars.registerHelper('dateTime', function(timestamps) {
        var key = config('lang') ? config('lang') : 'en';
        var time = new Date(Number(timestamps));
        var locale = window.navigator.userLanguage || window.navigator.language;
        return locale ? time.toLocaleDateString(key + '-BD') + ' ' + time.toLocaleTimeString(key + '-BD') : moment(Number(timestamps)).format('DD/MM/YYYY hh:mm:ss a');
    });
    Handlebars.registerHelper('dateOnly', function(timestamps) {
        var formatIn = arguments[1];
        if (_.isNil(formatIn) || isEmpty(formatIn)) {
            return moment(Number(timestamps)).format('DD/MM/YYYY');
        } else {
            return moment(Number(timestamps)).format('YYYY-MM-DD' === formatIn ? 'YYYY-MM-DD' : 'DD/MM/YYYY');
        }
    });
    Handlebars.registerHelper('timeOnly', function(timestamps) {
        var time = moment(timestamps, 'x').format('hh:mm a');
        return convert(time);
    });
    Handlebars.registerHelper('displayDate', function(timestamps) {
        return moment(Number(timestamps)).format('DD/MM/YYYY');
    });
    Handlebars.registerHelper('checked', function(value, test) {
        if (value === undefined)
            return '';
        return value === test ? 'checked' : '';
    });
    Handlebars.registerHelper('selected', function(value, test) {
        if (value === undefined)
            return '';
        return value === test ? 'selected' : '';
    });
    Handlebars.registerHelper('selectedOptionItem', function(option, item, test) {
        var value = option + "_" + item;
        if (value === undefined)
            return '';
        return value === test ? 'selected' : '';
    });
    Handlebars.registerHelper('select', function(div, value, options) {
        var $el = $('#' + div).html(options.fn(this));
        $el.find('[value="' + value + '"]').attr({ 'selected': 'selected' });
        return $el.html();
    });
    Handlebars.registerHelper('lang', function(obj) {
        var key = config('lang') ? config('lang') : 'en';
        if (obj) {
            return obj[key] ? obj[key] : obj['en'];
        } else {
            return 'Some Text'
        }
    });
    Handlebars.registerHelper('langof', function(value) {
        var key = config('lang') ? config('lang') : 'en';
        return lang[value][key]
    });
    Handlebars.registerHelper('currency', function(amount) {
        return currency(amount);
    });
    Handlebars.registerHelper('amount', function(value) {
        return amount(value);
    });
    Handlebars.registerHelper('number', function(value) {
        return number(value)
    });
    Handlebars.registerHelper('datebn', function(timestamps) {
        var key = config('lang') ? config('lang') : 'en';
        var time = new Date(timestamps);
        var locale = window.navigator.userLanguage || window.navigator.language;
        return locale ? time.toLocaleDateString(key + '-BD') + ' ' + time.toLocaleTimeString(key + '-BD') : moment(Number(timestamps)).format('DD/MM/YYYY hh:mm:ss a');
    });
    Handlebars.registerHelper('date', function(timestamps) {
        var key = config('lang') ? config('lang') : 'en';
        var time = new Date(timestamps);
        var locale = window.navigator.userLanguage || window.navigator.language;
        return locale ? time.toLocaleDateString(key + '-BD') : moment(Number(timestamps)).format('DD/MM/YYYY');
    });
    Handlebars.registerHelper('percent', function(number, func) {
        var key = config('lang') ? config('lang') : 'en';
        var locale = window.navigator.userLanguage || window.navigator.language;
        var result = locale ? Number(number).toLocaleString(key + "-BD") : Number(number);
        return func == 'percent' ? result + ' %' : result;
    });
    Handlebars.registerHelper('convert', function(number) {
        var key = config('lang') ? config('lang') : 'en';
        return key === "bn" ? number.getBengali() : number.getEnglish();
    });
    Handlebars.registerHelper('isRestaurant', function(options) {
        var key = config('shop_type') ? config('shop_type') : 'restaurant';
        return key === "restaurant" || key === "takeaway" ? options.fn(this) : options.inverse();
    });
    Handlebars.registerHelper('isBangla', function(options) {
        var key = config('lang') ? config('lang') : 'en';
        return key === "bn" ? options.fn(this) : options.inverse();
    });
    Handlebars.registerHelper('hasBangla', function(options) {
        var key = config('lang') ? config('lang') : 'en';
        return key === "bn" ? options.fn(this) : options.inverse();
    });
    Handlebars.registerHelper('itemIsNormal', function(type, options) {
        return type === "normal" ? options.fn(this) : options.inverse();
    });
    Handlebars.registerHelper('itemIsCustomSet', function(type, options) {
        return type === "custom_set" ? options.fn(this) : options.inverse();
    });
    Handlebars.registerHelper('itemIsFixedSet', function(type, options) {
        return type === "fixed_set" ? options.fn(this) : options.inverse();
    });
    Handlebars.registerHelper('isWithOption', function(option_id, options) {
        return option_id && Number(option_id) > 0 ? options.fn(this) : options.inverse();
    });
    Handlebars.registerHelper('langSwitcher', function() {
        var key = config('lang') ? config('lang') : 'en';
        var myLang = localStorage.getItem('myLang');
        key = !isEmpty(myLang) ? myLang : key;
        return key === "bn" ? lang.english[key] : lang.bangla[key];
    });
    Handlebars.registerHelper('chooseLangOf', function(langEn, langBn) {
        var key = config('lang') ? config('lang') : 'en';
        return key === "bn" ? langBn : langEn;
    });
    Handlebars.registerHelper('substring', function(str, length) {
        return str.substring(0, length)
    });
    Handlebars.registerHelper('objSubstring', function(obj, length) {
        return obj[config('lang')].substring(0, length)
    });
    Handlebars.registerHelper('isPaid', function(amount, paid) {
        if (paid) {
            return lang.paid[config('lang')]
        } else {
            var key = config('lang') ? config('lang') : 'en';
            var amountIn = amount ? amount : 0;
            var number = amountIn.toFixed(2);
            return key === "bn" ? number.getBengali() : number.getEnglish();
        }
    });
    Handlebars.registerHelper('time12', function(timestamps) {
        return convert(moment(timestamps, 'x').format('hh:mm a'));
    });
    Handlebars.registerHelper('time12hformat', function(time) {
        var split = time.split(':');
        var hh = Number(split[0]);
        var mm = split[1];
        var ampm = "AM"
        if (hh > 12) {
            hh -= 12;
            hh = '0' + hh.toString();
            ampm = "PM"
        }
        if (hh === 12) {
            ampm = "PM"
        }
        if (hh <= 0) {
            hh = 12;
            ampm = "AM"
        }
        return convert(hh + ':' + mm + ' ' + ampm);
    });
    Handlebars.registerHelper('isLocked', function(lock, device_code, options) {
        var userDeviceCode = localStorage.getItem('deviceTrackingCode');
        var keepLocked = true;
        if (Number(userDeviceCode) === Number(device_code)) {
            keepLocked = false;
        } else {
            if (Number(lock) === 1) {
                keepLocked = true;
            } else {
                keepLocked = false;
            }
        }
        return keepLocked ? options.fn(this) : options.inverse();
    });
    Handlebars.registerHelper('isDeliveryService', function(options) {
        return cart.get_service_plans().value === 'delivery' ? options.fn(this) : options.inverse();
    });
    Handlebars.registerHelper('CheckDelivery', function(options) {
        if (cart.get_invoice()) {
            var service = cart.get_service_plans();
            if (service.value === "delivery") {
                var plan = cart.is_delivery_satisfied();
                if (typeof(plan) === "object") {
                    var subtotal = cart.get_subtotal();
                    var rem = plan.base - subtotal;
                    var key = config('lang') ? config('lang') : 'en';
                    var locale = window.navigator.userLanguage || window.navigator.language;
                    var remainder = locale ? Number(rem).toLocaleString(key + "-BD") : Number(rem);
                    var text = lang.delivery_con_msg[key];
                    var textRes = text.replace("%", remainder);
                    var result = "<div class='c12 cart-item-row text-center red-bg'>" + Handlebars.escapeExpression(textRes) + "</div>";
                    return new Handlebars.SafeString(result);
                } else {
                    return options.inverse();
                }
            }
        } else {
            return options.inverse();
        }
    });
    Handlebars.registerHelper('isUnit', function(options) {
        var key = config('show_unit');
        return key === "yes" ? options.fn(this) : options.inverse();
    });
    Handlebars.registerHelper('isLevelWithMulSets', function(length, options) {
        return length > 1 ? options.fn(this) : options.inverse();
    });
    Handlebars.registerHelper('if_min', function(min, options) {
        return Number(min) <= 0 ? options.fn(this) : options.inverse();
    });
    Handlebars.registerHelper('displaySet', function(level, options) {
        return Number(level) <= 1 ? 'block' : 'none';
    });
    Handlebars.registerHelper('json', function(context) {
        return JSON.stringify(context);
    });

});