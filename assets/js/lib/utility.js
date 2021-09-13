function sleep(time) {
    return new Promise((resolve) => setTimeout(resolve, time));
}

function initalert(txt) {
    d = document;
    if (d.getElementById("modalContainer"))
        return;
    mObj = d.getElementsByTagName("body")[0].appendChild(d.createElement("div"));
    mObj.id = "modalContainer";
    mObj.style.height = d.documentElement.scrollHeight + "px";
    alertObj = mObj.appendChild(d.createElement("div"));
    alertObj.id = "alertBox";
    alertObj.style.top = "30%";
    alertObj.style.left = (d.documentElement.scrollWidth - alertObj.offsetWidth) / 2 + "px";
    alertObj.style.visiblity = "visible";
    alertObj.className = "w3-theme-light"
    h1 = alertObj.appendChild(d.createElement("h1"));
    h1.className = "w3-theme w3-container w3-large w3-padding-small";
    h1.appendChild(d.createTextNode(ALERT_TITLE));
    msg = alertObj.appendChild(d.createElement("p"));
    msg.className = "w3-theme-light w3-container w3-medium";
    msg.innerHTML = txt;
    btn = alertObj.appendChild(d.createElement("a"));
    btn.id = "closeBtn";
    btn.className = "w3-margin w3-right w3-border w3-border-theme w3-button w3-small w3-padding-small w3-round w3-hover-theme";
    btn.appendChild(d.createTextNode(ALERT_BUTTON_TEXT));
    btn.href = "#";
    btn.focus();
    btn.onclick = function() {
        destroyalert();
        return false;
    };
    alertObj.style.display = "block";
}

function destroyalert() {
    document
        .getElementsByTagName("body")[0]
        .removeChild(document.getElementById("modalContainer"));
}

function warning(title, message, btnTxt) {
    ALERT_TITLE = title;
    ALERT_BUTTON_TEXT = btnTxt;
    alert(message);
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

function errorPlacement(error, element) {
    var placement = $(element).data('error');
    if (placement) {
        $(placement).append(error);
    } else {
        error.insertAfter(element);
    }
}
//JQuery Confirm Plugins
(function($) {
    $.confirm = function(params) {
        if ($("#confirmOverlay").length) {
            return false;
        }
        var buttonHTML = '<div class="w3-section w3-right-align w3-container">';
        $.each(params.buttons, function(name, obj) {
            buttonHTML +=
                '<a href="#" class="confirm-button w3-button w3-border w3-round w3-border w3-margin-left w3-small ' +
                obj["class"] +
                '">' +
                lang[name][_Lang_] +
                "<span></span></a>";
            if (!obj.action) {
                obj.action = function() {};
            }
        });
        buttonHTML += "</div>";
        var markup = [
            '<div id="confirmOverlay">',
            '<div id="confirmBox" class="w3-theme-light">',
            "<h1 class='w3-theme w3-large w3-padding'>",
            params.title,
            "</h1>",
            "<p class='w3-theme-light w3-container'>",
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

function isOnline() {
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
    if (_Lang_ === "bn") {
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
    var info = { en: 'Tk', bn: "টা" }
    return _Lang_ == "en" ? info.en + ' ' + Number(amount ? amount : 0).toFixed(2) : info.bn + ' ' + Number(amount ? amount : 0).toFixed(2).getBengali();


    return amount;
}

function currency_en(amount) {
    var info = { en: 'Tk', bn: "টা" }
    return info.en + ' ' + Number(amount ? amount : 0).toFixed(2);
}

function amount(value) {
    var number = Number(value ? value : 0).toFixed(2);
    return _Lang_ === "bn" ? number.getBengali() : number.getEnglish();
}

function amount_en(value) {
    return Number(value ? value : 0).toFixed(2);
}

function number(value) {
    var key = _Lang_
    var digits = Number(value ? value : 0).toString();
    return key === "bn" ? digits.getBengali() : digits.getEnglish();
}

function set_product_entry_dorpdown(id) {
    localStorage.setItem("product-entry-dorpdown", Number(id));
    return get_product_entry_dorpdown();
}

function get_product_entry_dorpdown() {
    var supplier = localStorage.getItem("product-entry-dorpdown");
    return !_.isEmpty(supplier) ? Number(supplier) : 1;
}

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
            scrollTop: parseInt($(position).offset().top - 115)
        }, 1000);
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

function reset(formId) {
    jQuery('#' + formId).clearForm();
}