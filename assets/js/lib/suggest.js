define(['lang', 'utility'], function(lang) {
    $.fn.extend({
        suggest: function(options) {
            var suggestions = [];
            const input = this;
            var selectedIndex = -1;
            var inputValue = null;
            const fields = options || {
                cust_id: { id: "cust_id" },
                name: { id: "name" },
                phone: { id: "phone" },
                email: { id: "email" },
                house: { id: "house" },
                street: { id: "street" },
                area: { id: "area" },
                zip: { id: "zip" },
                city: { id: "city" }
            };
            $("<div class=\"suggestions-container\" id=\"suggestions-container\"></div>").insertAfter(input);
            for (var key in fields) {
                $("label[for = '" + fields[key].id + "']").html(fields[key].label);
            }
            $("label[for = '" + input.attr('id') + "']").html(fields.label);
            $(input).on("input", function(e) {
                inputValue = this.value;
                require(['app'], function(app) {
                    var type = isNaN(inputValue) ? 'name' : 'phone';
                    app.get(API_URL + 'sale/suggest/' + inputValue + '/' + type, {}).then(function(data) {
                        if (data.status) {
                            suggestions = extract(data.suggestions);
                            $(".suggestions-container").html(format(suggestions));
                            $(".suggestions-container").show();
                            $("div.suggestions-container-row").hover(function() {
                                selectedIndex = $(this).attr("data-index");
                                $(this).focus();
                            }).click(function() {
                                selectedIndex = $(this).attr("data-index");
                                fillFields(fields);
                                $(".suggestions-container").hide();
                                $(input).val('');
                            });
                        } else {
                            $(".suggestions-container").hide();
                        }
                    });
                });


            });

            function format(suggestions) {
                var htmlGlobal = "";
                suggestions.forEach(function(retResponse, index) {
                    var htmlCurrent = "";
                    htmlCurrent += "<div style=\"text-align:left;padding:5px;\" class=\"tab-item form-bg suggestions-container-row\" tabindex=\"" + index + "\" id=\"retResponse_" + index + "\" data-index=\"" + index + "\">";
                    htmlCurrent += retResponse.formatted.phone + '-' + retResponse.formatted.name[config('lang')];
                    htmlCurrent += "</div>";
                    htmlGlobal += htmlCurrent;
                });
                return htmlGlobal;
            }
            $(document).keydown(function(e) {
                if (e.which === 38) {
                    if (selectedIndex > 0) {
                        selectedIndex--;
                    }
                    if (suggestions.length >= 1) {
                        fillFields(fields);
                        $(input).val('');
                    }
                    $("#retResponse_" + selectedIndex).focus();
                } else if (e.which === 40) {
                    if (selectedIndex < suggestions.length - 1) {
                        selectedIndex++;
                    }
                    if (suggestions.length >= 1) {
                        fillFields(fields);
                        $(input).val('');
                    }
                    $("#retResponse_" + selectedIndex).focus();

                } else if (e.which === 13) {
                    fillFields(fields);
                    $(input).val('');
                    $(".suggestions-container").remove();
                } else if (e.which === 27) {
                    fillFields(fields);
                    $(".suggestions-container").remove();
                } else {
                    return;
                }
                e.preventDefault();
            });

            function fillFields(fields) {
                if (selectedIndex >= 0) {
                    var house = suggestions[selectedIndex].detail.house ? suggestions[selectedIndex].detail.house[config('lang')] : '';
                    var street = suggestions[selectedIndex].detail.street ? suggestions[selectedIndex].detail.house[config('lang')] : ''
                    var zip = suggestions[selectedIndex].detail.zip ? suggestions[selectedIndex].detail.zip[config('lang')] : '';
                    var area = suggestions[selectedIndex].detail.area ? suggestions[selectedIndex].detail.area[config('lang')] : '';
                    var city = suggestions[selectedIndex].detail.city ? suggestions[selectedIndex].detail.city[config('lang')] : '';
                    $("#" + fields.name.id).val(suggestions[selectedIndex].detail.name[config('lang')]);
                    $("#" + fields.phone.id).val(suggestions[selectedIndex].detail.phone);
                    $("#" + fields.email.id).val(suggestions[selectedIndex].detail.email)
                    $("#" + fields.house.id).val(house);
                    $("#" + fields.street.id).val(street);
                    $("#" + fields.zip.id).val(zip);
                    $("#" + fields.area.id).val(area)
                    $("#" + fields.city.id).val(city)
                    $("#" + fields.cust_id.id).val(suggestions[selectedIndex].detail.cust_id)
                }
            }

            function extract(responses) {
                var suggestions = [];
                responses.forEach(function(response) {
                    var retResponse = {};
                    retResponse.detail = {};
                    retResponse.detail.name = response.name;
                    retResponse.detail.phone = response.phone;
                    retResponse.detail.email = response.email;
                    retResponse.detail.house = response.house;
                    retResponse.detail.street = response.street;
                    retResponse.detail.zip = response.zip;
                    retResponse.detail.area = response.area;
                    retResponse.detail.city = response.city;
                    retResponse.detail.cust_id = response.id;
                    retResponse.formatted = { phone: response.phone, name: response.name }
                    suggestions.push(retResponse);
                });
                return suggestions;
            }
        }
    });
});