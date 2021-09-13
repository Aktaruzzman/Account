var ALERT_TITLE = "Oops!";
var ALERT_BUTTON_TEXT = "Ok";
$(function() {
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
})
$(function() {

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

    Handlebars.registerHelper('select', function(div, value, options) {
        var $el = $('#' + div).html(options.fn(this));
        $el.find('[value="' + value + '"]').attr({ 'selected': 'selected' });
        return $el.html();
    });
    Handlebars.registerHelper('lang', function(obj) {
        var key = _Lang_ ? _Lang_ : 'en';
        if (obj) {
            return obj[key] ? obj[key] : obj['en'];
        } else {
            return 'Some Text'
        }
    });
    Handlebars.registerHelper('langof', function(value) {
        var key = _Lang_ ? _Lang_ : 'en';
        return lang[value][key]
    });

    Handlebars.registerHelper('convert', function(number) {
        var key = _Lang_ ? _Lang_ : 'en';
        return key === "bn" ? number.getBengali() : number.getEnglish();
    });
    Handlebars.registerHelper('chooseLangOf', function(langEn, langBn) {
        var key = _Lang_ ? _Lang_ : 'en';
        return key === "bn" ? langBn : langEn;
    });
    Handlebars.registerHelper('substring', function(str, length) {
        return str.substring(0, length)
    });
    Handlebars.registerHelper('objSubstring', function(obj, length) {
        return obj[_Lang_].substring(0, length)
    });
    Handlebars.registerHelper('date', function(timestamps) {
        var key = config('lang') ? config('lang') : 'en';
        var time = new Date(Number(timestamps));
        var locale = window.navigator.userLanguage || window.navigator.language;
        return locale ? time.toLocaleDateString(key + '-BD') : moment(Number(timestamps)).format('DD/MM/YYYY');
    });
    Handlebars.registerHelper('time', function(timestamps) {
        var time = moment(timestamps, 'x').format('hh:mm a');
        return convert(time);
    });
    Handlebars.registerHelper('dateTime', function(timestamps) {
        var key = config('lang') ? config('lang') : 'en';
        var time = new Date(Number(timestamps));
        var locale = window.navigator.userLanguage || window.navigator.language;
        return locale ? time.toLocaleDateString(key + '-BD') + ' ' + time.toLocaleTimeString(key + '-BD') : moment(Number(timestamps)).format('DD/MM/YYYY hh:mm:ss a');
    });
    Handlebars.registerHelper('ddmmyyyy', function(yyyymmdd) {
        var $result = moment(yyyymmdd, 'YYYY-MM-DD').format('DD/MM/YYYY');
        return convert($result);
    });
    Handlebars.registerHelper('timea', function(hhmmss) {
        return convert(moment(app.get_date() + ' ' + hhmmss, 'YYYY-MM-DD hh:mm:ss').format('hh:mm a'));
    });
    Handlebars.registerHelper('time12', function(timestamps) {
        return convert(moment(timestamps, 'x').format('hh:mm a'));
    });
    Handlebars.registerHelper('time12hformat', function(time) {
        return convert(moment(app.get_date() + ' ' + hhmmss, 'YYYY-MM-DD hh:mm:ss').format('hh:mm a'));
    });
    Handlebars.registerHelper('same', function(sameThing) {
        return convert(sameThing);
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
});
$(function() {
    if (document.getElementById) {
        alert = function(txt) {
            initalert(txt);
        };
    }
    var x = window.matchMedia("(min-width: 600px)");
    if (x.matches) {
        if (jQuery("#menuPageLeftSidebar").length > 0 && jQuery("#menuPageRightSidebar").length > 0) {
            $("#menuPageLeftSidebar, #menuPageRightSidebar").stick_in_parent();
        } else if (jQuery("#menuPageLeftSidebar").length > 0) {
            $("#menuPageLeftSidebar").stick_in_parent();
        } else if (jQuery("#menuPageRightSidebar").length > 0) {
            $("#menuPageRightSidebar").stick_in_parent();
        }
    }
    $(document).on("click", ".get", function() {
        var element = $(this);
        var dataset = element[0].dataset;
        App.get(dataset);
    });
    $(document).on("click", ".submit-btn", function(event) {
        var dataset = $(this)[0].dataset;
        dataset.api = $("#" + dataset.form).attr('action');
        $("#" + dataset.form).validate({
            submitHandler: function() {
                var myForm = document.getElementById(dataset.form);
                var formData = new FormData(myForm);
                App.post(dataset, formData);
            },
            errorClass: "has-error",
            highlight: function(e) {
                $(e).closest(".form-group").addClass("has-error");
            },
            unhighlight: function(e) {
                $(e).closest(".form-group").removeClass("has-error");
            },
            rules: Formsetting[dataset.validation].rules,
            messages: Formsetting[dataset.validation].messages,
            errorPlacement: function(error, element) {
                errorPlacement(error, element);
            }
        });

    });
    $(document).on("click", ".put", function() {
        var element = $(this);
        var dataset = element[0].dataset;
        $.confirm({
            title: lang.default_change_title[_Lang_],
            message: lang.default_change_msg[_Lang_],
            buttons: {
                Yes: {
                    action: function() {
                        var api = { api: dataset.api, id: dataset.id, params: dataset.params, view: dataset.view };
                        delete dataset.api;
                        delete dataset.id;
                        delete dataset.params;
                        delete dataset.view;
                        App.put(api, dataset);
                    }
                },
                No: { action: function() {} },
            }
        });
    });
    $(document).on("click", ".delete", function() {
        var element = $(this);
        var dataset = element[0].dataset;
        $.confirm({
            title: lang.delete_change_title[_Lang_],
            message: lang.delete_change_msg[_Lang_],
            buttons: {
                Yes: { action: function() { App.delete(dataset) } },
                No: { action: function() {} },
            }
        });
    });
    $(document).on("click", ".filter ", function(event) {
        var dataset = $(this)[0].dataset;
        $("#" + dataset.form).validate({
            submitHandler: function() {
                var myForm = document.getElementById(dataset.form);
                var formData = new FormData(myForm);
                App.filter(dataset, formData)
            },
        });
    });
});