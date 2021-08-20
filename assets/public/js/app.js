function openPopup(id) {
    this.closePopup();
    jQuery('#' + id).show();
}

function closePopup() {
    jQuery('.w3-modal').hide();
};

function divToggleShow(hashId) {
    if (jQuery(hashId).length > 0) {
        if (jQuery(hashId + '-angle').length > 0 && jQuery(hashId + '-angle').hasClass('fa-angle-down')) {
            jQuery(hashId + '-angle').removeClass('fa-angle-down');
            jQuery(hashId + '-angle').addClass('fa-angle-up');
        } else {
            if (jQuery(hashId + '-angle').length > 0 && jQuery(hashId + '-angle').hasClass('fa-angle-up')) {
                jQuery(hashId + '-angle').removeClass('fa-angle-uo');
                jQuery(hashId + '-angle').addClass('fa-angle-down');
            }
        }
        jQuery(hashId).slideToggle();
    }
};

function scrollToPosition(position) {
    if (jQuery(position).length > 0) {
        $('html, body').animate({
            scrollTop: parseInt($(position).offset().top - 150)
        }, 1000);
    }
    if (arguments[1]) {
        $('.category').removeClass('w3-theme');
        $(arguments[1]).addClass('w3-theme');
    }
};

function dropdown(menu) {
    var x = document.getElementById(menu);
    if (x.className.indexOf("w3-show") === -1) {
        $('.dropdown-other').removeClass('w3-show');
        x.className += " w3-show";
    } else {
        x.className = x.className.replace(" w3-show", "");
    }
};

function message(status) {
    if (status) {
        $('.success-msg').show();
        $('.error-msg').hide();
        $('.success-msg').delay(3000).fadeOut('slow');
    } else {
        $('.success-msg').hide();
        $('.error-msg').show();
        $('.error-msg').delay(3000).fadeOut('slow');
    }
}

function empty(val) {
    if (val === undefined)
        return true;
    if (typeof(val) == 'function' || typeof(val) == 'number' || typeof(val) == 'boolean' || Object.prototype.toString.call(val) === '[object Date]')
        return false;
    if (val == null || val.length === 0)
        return true;
    if (typeof(val) == "object") {
        var r = true;
        for (var f in val)
            r = false;
        return r;
    }
    return false;
}

function sleep(time) {
    return new Promise((resolve) => setTimeout(resolve, time));
}

function errorPlacement(error, element) {
    var placement = $(element).data('error');
    if (placement) {
        $(placement).append(error);
    } else {
        error.insertAfter(element);
    }
}

function reset(formId) {
    jQuery('#' + formId).clearForm();
}
$(document).ready(function() {
    $('.flash-msg').delay(3000).fadeOut('slow');
    if (document.getElementById) {
        alert = function(txt) {
            initalert(txt);
        };
    }
    jQuery.validator.addMethod("alphaonly", function(value, element) {
        return this.optional(element) || /^[A-Za-z][A-Za-z\'\-]+([\ A-Za-z][A-Za-z\'\-]+)*/i.test(value);
    }, "Only alphabetical characters,please");
    $.validator.addMethod("alphanumeric", function(value, element) {
        return this.optional(element) || /^[\w\-\s]+$/i.test(value);
    }, "Letters, numbers, and underscores only please");
    $.validator.addMethod("nowhitespace", function(value, element) {
        return this.optional(element) || /^\S+$/i.test(value);
    }, "No white space please");
    jQuery.validator.addMethod('phone', function(value, element) {
        return this.optional(element) || value.length > 9 &&
            value.match(/^(1[ \-\+]{0,3}|\+1[ -\+]{0,3}|\+1|\+)?((\(\+?1-[2-9][0-9]{1,2}\))|(\(\+?[2-8][0-9][0-9]\))|(\(\+?[1-9][0-9]\))|(\(\+?[17]\))|(\([2-9][2-9]\))|([ \-\.]{0,3}[0-9]{2,4}))?([ \-\.][0-9])?([ \-\.]{0,3}[0-9]{2,4}){2,3}$/);
    }, 'Please specify a valid phone number');
    $.validator.addMethod("postcodeUK", function(value, element) {
        return this.optional(element) || /^((([A-PR-UWYZ][0-9])|([A-PR-UWYZ][0-9][0-9])|([A-PR-UWYZ][A-HK-Y][0-9])|([A-PR-UWYZ][A-HK-Y][0-9][0-9])|([A-PR-UWYZ][0-9][A-HJKSTUW])|([A-PR-UWYZ][A-HK-Y][0-9][ABEHMNPRVWXY]))\s?([0-9][ABD-HJLNP-UW-Z]{2})|(GIR)\s?(0AA))$/i.test(value);
    }, "Please specify a valid UK postcode");
    $.validator.addMethod("username", function(value, element) {
        return this.optional(element) || /^[A-Za-z][a-z0-9\-\s]+$/i.test(value);
    }, "Username must contain only letters, numbers, or dashes.");
    $.validator.addMethod("textareaText", function(value, element) {
        return this.optional(element) || /^[A-Za-z][a-z0-9\-\.\,\'\s]+$/i.test(value);
    }, "Text contain only letters, numbers, or dashes.");
    $.validator.addMethod("email", function(value, element) {
        return this.optional(element) || /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(value);
    }, "Please specify valid email addresss");
    $.validator.addMethod("website", function(value, element) {
        return this.optional(element) || /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/.test(value);
    }, "Valid website address only");
    $.validator.addMethod("valueNotEquals", function(value, element, arg) {
        return arg !== value;
    }, "please select");
    jQuery.validator.addMethod("eposValidTime", function(value, element) {
        return this.optional(element) || /((1[0-2]|0?[1-9]):([0-5][0-9]) ?([AaPp][Mm]))/igm.test(value);
    }, "Valid time please");
    jQuery.validator.addMethod("customeValidIpAddress", function(value, element) {
        return this.optional(element) || isValidIpAddress(value);
    }, "Invalid ip address");
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
    $(document).on("click", ".add-to-cart", function() {
        $(".spinning").show();
        var element = $(this);
        var obj = element[0].dataset;
        if (Number(obj.ms) > 0) {
            if (Number(obj.sb) >= 1) {
                console.log('proceed');
            } else {
                console.log('do not proceed');
            }
        } else {
            console.log('proceed');
        }
        if ($(".spinning").is(":visible")) {
            setTimeout(function() { $(".spinning").hide(); }, 1000);
        }
    });
});
(function($) {
    $.fn.getFormData = function() {
        var data = {};
        var dataArray = $(this).serializeArray();
        for (var i = 0; i < dataArray.length; i++) {
            data[dataArray[i].name] = dataArray[i].value;
        }
        return data;
    };
})(jQuery);
jQuery.fn.clearForm = function() {
    return this.each(function() {
        var type = this.type,
            tag = this.tagName.toLowerCase();
        if (tag === 'form') {
            return $(':input', this).clearForm();
        }
        if (type === 'text' || type === 'tel' || type === 'email' || type === 'number' || type === 'password' || tag === 'textarea') {
            this.value = '';
        } else if (type === 'hidden') {
            this.value = '';
        } else if (type === 'checkbox' || type === 'radio') {
            this.checked = false;
        } else if (tag === 'select') {
            this.selectedIndex = 0;
        }
    });
};