define(['lang', 'utility'], function(lang) {
    function syslang() {
        return config('lang');
    };
    return {
        apiDomainForm: {
            rules: {
                domain: { required: true },
            },
            messages: {
                domain: { required: lang.domain[config('lang')] + ' ' + lang.name[config('lang')] + ' ?' },
            }
        },
        loginForm: {
            rules: {
                username: { required: true },
                password: { required: true },
            },
            messages: {
                username: { required: lang.username[config('lang')] + ' ?' },
                password: { required: lang.password[config('lang')] + ' ?' },
            }
        },
        devicetrackerForm: {
            rules: {
                code: { required: true },
                pass: { required: true },
            },
            messages: {
                code: { required: lang.code[config('lang')] + ' ?' },
                pass: { required: lang.password[config('lang')] + ' ?' },
            }
        },
        cfginfoForm: {
            rules: {
                shop_name: { required: true, alphaonly: true },
                shop_phone: { required: true, phone: true },
                shop_email: { email: true },
                auth_code: { required: true, number: true },
            },
            messages: {
                shop_name: { required: lang.name[config('lang')] + ' ?', alphaonly: lang.alphaonly[config('lang')] },
                shop_phone: { required: lang.phone[config('lang')] + ' ?', phone: lang.invalid_phone_msg[config('lang')] },
                shop_email: { email: lang.invalid_email_msg[config('lang')] },
                auth_code: {
                    required: lang.auth_code[config('lang')] + ' ?',
                    number: lang.invalid_digit_msg[config('lang')]
                },
            },
        },
        cfgshopaddressForm: {
            rules: {
                addcity_en: { required: true },
                addarea_en: { required: true },
                addzip_en: { required: true },
                addstreet_en: { required: true },
                addhouse_en: { required: true },
                addcity_bn: { required: true },
                addarea_bn: { required: true },
                addzip_bn: { required: true },
                addstreet_bn: { required: true },
                addhouse_bn: { required: true },
            },
            messages: {
                addcity_en: { required: lang.city[config('lang')] + ' ?' },
                addarea_en: { required: lang.area[config('lang')] + ' ?' },
                addzip_en: { required: lang.zip[config('lang')] + ' ?' },
                addstreet_en: { required: lang.street_address[config('lang')] + ' ?' },
                addhouse_en: { required: lang.house_number[config('lang')] + ' ?' },
                addcity_bn: { required: lang.city[config('lang')] + ' ?' },
                addarea_bn: { required: lang.area[config('lang')] + ' ?' },
                addzip_bn: { required: lang.zip[config('lang')] + ' ?' },
                addstreet_bn: { required: lang.street_address[config('lang')] + ' ?' },
                addhouse_bn: { required: lang.house_number[config('lang')] + ' ?' },
            },
        },
        cfgpaginationForm: {
            rules: {
                pagi_report: { required: true, number: true, min: 1, max: 500 },
                pagi_category: { required: true, number: true, min: 2, max: 22 },
                pagi_item: { required: true, number: true, min: 3, max: 30 }
            },
            messages: {
                pagi_report: {
                    required: lang.pagi_report[config('lang')] + ' ?',
                    number: lang.invalid_digit_msg[config('lang')],
                    min: lang.minimum[config('lang')] + ' ' + lang.digit_1[config('lang')],
                    max: lang.maximum[config('lang')] + ' ' + lang.digit_5[config('lang')] + lang.digit_0[config('lang')] + lang.digit_0[config('lang')]
                },
                pagi_category: {
                    required: lang.pagi_category[config('lang')] + ' ?',
                    number: lang.invalid_digit_msg[config('lang')],
                    min: lang.minimum[config('lang')] + ' ' + lang.digit_2[config('lang')],
                    max: lang.maximum[config('lang')] + ' ' + lang.digit_2[config('lang')] + lang.digit_2[config('lang')]
                },
                pagi_item: {
                    required: lang.pagi_category[config('lang')] + ' ?',
                    number: lang.invalid_digit_msg[config('lang')],
                    min: lang.minimum[config('lang')] + ' ' + lang.digit_3[config('lang')],
                    max: lang.maximum[config('lang')] + ' ' + lang.digit_3[config('lang')] + lang.digit_0[config('lang')]
                }
            },
        },
        cfgapisetupForm: {
            rules: {
                shop_api_id: { required: true },
                shop_type: { required: true },
                software_type: { required: true },
                shop_api_connect: { required: true },
                shop_api_key: { required: true },
                shop_api_user: { required: true },
                shop_api_password: { required: true },
                late_night_delay: { required: true, number: true },
                precesion: { required: true, number: true, min: 0, max: 3 }
            },
            messages: {
                shop_api_id: { required: lang.shop_api_id[config('lang')] + ' ?' },
                shop_type: { required: lang.shop_type[config('lang')] + ' ?' },
                software_type: { required: lang.software_type[config('lang')] + ' ?' },
                shop_api_connect: { required: lang.shop_api_connect[config('lang')] + ' ?' },
                shop_api_key: { required: lang.shop_api_key[config('lang')] + ' ?' },
                shop_api_user: { required: lang.shop_api_user[config('lang')] + ' ?' },
                shop_api_password: { required: lang.shop_api_password[config('lang')] + ' ?' },
                late_night_delay: {
                    required: lang.late_night_delay[config('lang')] + ' ?',
                    number: lang.late_night_delay[config('lang')] + ' ?'
                },
                precesion: {
                    required: lang.rounding[config('lang')] + ' ?',
                    number: lang.rounding[config('lang')] + ' ?',
                    min: lang.rounding[config('lang')] + ' ?',
                    max: lang.rounding[config('lang')] + ' ?'
                }
            },
        },
        cfgbasicForm: {
            rules: {
                lang: { required: true },
                late_night_delay: { required: true, number: true },
                auth_code: { required: true, number: true },
                auto_focus: { required: true },
                show_line_discount: { required: true },
                show_line_tax: { required: true },
                precesion: { required: true, number: true, min: 0, max: 3 },
            },
            messages: {
                auth_code: {
                    required: lang.auth_code[config('lang')] + ' ?',
                    number: lang.invalid_digit_msg[config('lang')]
                },
                late_night_delay: {
                    required: lang.late_night_delay[config('lang')] + ' ?',
                    number: lang.late_night_delay[config('lang')] + ' ?'
                },
                precesion: {
                    required: lang.rounding[config('lang')] + ' ?',
                    number: lang.rounding[config('lang')] + ' ?',
                    min: lang.rounding[config('lang')] + ' ?',
                    max: lang.rounding[config('lang')] + ' ?'
                }
            },
        },
        cfgprinterForm: {
            rules: {
                print_chef_service: { required: true },
                print_chef_station: { required: true },
                print_chef_base: { required: true },
                print_chef_seq: { required: true },
                print_bill_on_pay: { required: true },
                print_chef_font: { required: true },
                print_bill_font: { required: true },
                print_chef_ip: { required: true },
                print_bill_ip: { required: true },
                print_length: { required: true },
                print_bill_msg: { required: true },
                print_bill_lang: { required: true },
                print_chef_lang: { required: true },
                print_bill_adaptor: { required: true },
                print_chef_adaptor: { required: true }
            },
            messages: {
                print_chef_service: { required: lang.print_chef_service[config('lang')] + ' ?' },
                print_chef_station: { required: lang.print_chef_station[config('lang')] + ' ?' },
                print_chef_base: { required: lang.print_chef_base[config('lang')] + ' ?' },
                print_chef_seq: { required: lang.print_chef_seq[config('lang')] + ' ?' },
                print_bill_on_pay: { required: lang.print_bill_on_pay[config('lang')] + ' ?' },
                print_chef_font: { required: lang.print_chef_font[config('lang')] + ' ?' },
                print_bill_font: { required: lang.print_bill_font[config('lang')] + ' ?' },
                print_chef_ip: { required: lang.print_chef_ip[config('lang')] + ' ?' },
                print_bill_ip: { required: lang.print_bill_ip[config('lang')] + ' ?' },
                print_length: { required: lang.print_length[config('lang')] + ' ?' },
                print_bill_msg: { required: lang.print_bill_msg[config('lang')] + ' ?' },
                print_bill_lang: { required: lang.print_bill_lang[config('lang')] + ' ?' },
                print_chef_lang: { required: lang.print_chef_lang[config('lang')] + ' ?' },
                print_bill_adaptor: { required: lang.print_bill_adaptor[config('lang')] + ' ?' },
                print_chef_adaptor: { required: lang.print_chef_adaptor[config('lang')] + ' ?' }
            },
        },

        cfgchefForm: {
            rules: {
                print_chef_service: { required: true },
                print_chef_station: { required: true },
                print_chef_base: { required: true },
                print_chef_seq: { required: true },
                print_bill_on_pay: { required: true },
                print_chef_font: { required: true },
                print_bill_font: { required: true },
                print_chef_ip: { required: true },
                print_bill_ip: { required: true },
                print_length: { required: true },
                print_bill_msg: { required: true },
                print_bill_lang: { required: true },
                print_chef_lang: { required: true },
                print_bill_adaptor: { required: true },
                print_chef_adaptor: { required: true }
            },
            messages: {
                print_chef_service: { required: lang.print_chef_service[config('lang')] + ' ?' },
                print_chef_station: { required: lang.print_chef_station[config('lang')] + ' ?' },
                print_chef_base: { required: lang.print_chef_base[config('lang')] + ' ?' },
                print_chef_seq: { required: lang.print_chef_seq[config('lang')] + ' ?' },
                print_bill_on_pay: { required: lang.print_bill_on_pay[config('lang')] + ' ?' },
                print_chef_font: { required: lang.print_chef_font[config('lang')] + ' ?' },
                print_bill_font: { required: lang.print_bill_font[config('lang')] + ' ?' },
                print_chef_ip: { required: lang.print_chef_ip[config('lang')] + ' ?' },
                print_bill_ip: { required: lang.print_bill_ip[config('lang')] + ' ?' },
                print_length: { required: lang.print_length[config('lang')] + ' ?' },
                print_bill_msg: { required: lang.print_bill_msg[config('lang')] + ' ?' },
                print_bill_lang: { required: lang.print_bill_lang[config('lang')] + ' ?' },
                print_chef_lang: { required: lang.print_chef_lang[config('lang')] + ' ?' },
                print_bill_adaptor: { required: lang.print_bill_adaptor[config('lang')] + ' ?' },
                print_chef_adaptor: { required: lang.print_chef_adaptor[config('lang')] + ' ?' }
            },
        },

        cfgunitForm: {
            rules: {
                name_en: { required: true },
                name_bn: { required: function() { return syslang() === "bn" } },
                short_en: { required: true },
                short_bn: { required: true },
                value: { required: true },
                order: { required: true, min: 1 }
            },
            messages: {
                name_en: { required: lang.english[config('lang')] + ' ' + lang.name[config('lang')] + ' ?' },
                name_bn: { required: lang.bangla[config('lang')] + ' ' + lang.name[config('lang')] + ' ?' },
                short_en: { required: lang.english[config('lang')] + ' ' + lang.short_name[config('lang')] + ' ?' },
                short_bn: { required: lang.bangla[config('lang')] + ' ' + lang.short_name[config('lang')] + ' ?' },
                value: { required: lang.unit_value[config('lang')] + ' ?' },
                order: { required: lang.order[config('lang')] + ' ?', min: lang.minimum[config('lang')] + ' ' + lang.digit_1[config('lang')] }
            },
        },
        cfgtaxForm: {
            rules: {
                value: { required: true, number: true, min: 0 },
                order: { required: true, min: 1 }
            },
            messages: {
                value: { required: lang.unit_value[config('lang')] + ' ?', number: lang.unit_value[config('lang')] + ' ?', min: lang.unit_value[config('lang')] + ' ?' },
                order: { required: lang.order[config('lang')] + ' ?', min: lang.minimum[config('lang')] + ' ' + lang.digit_1[config('lang')] }
            },
        },
        cfgdiscountForm: {
            rules: {
                value: { required: true, number: true, min: 0 },
                func: { required: true },
                order: { required: true, min: 1 }
            },
            messages: {
                value: { required: lang.unit_value[config('lang')] + ' ?', number: lang.unit_value[config('lang')] + ' ?', min: lang.unit_value[config('lang')] + ' ?' },
                func: { required: lang.func[config('lang')] + ' ?', },
                order: { required: lang.order[config('lang')] + ' ?', min: lang.minimum[config('lang')] + ' ' + lang.digit_1[config('lang')] }
            },
        },
        cfgserviceForm: {
            rules: {
                name_en: { required: true },
                name_bn: { required: function() { return syslang() === "bn" } },
                charge: { required: true },
                order: { required: true, min: 1 }
            },
            messages: {
                name_en: { required: lang.english[config('lang')] + ' ' + lang.name[config('lang')] + ' ?' },
                name_bn: { required: lang.bangla[config('lang')] + ' ' + lang.name[config('lang')] + ' ?' },
                value: { required: lang.unit_value[config('lang')] + ' ?' },
                order: { required: lang.order[config('lang')] + ' ?', min: lang.minimum[config('lang')] + ' ' + lang.digit_1[config('lang')] }
            },
        },
        paymentForm: {
            rules: {
                name_en: { required: true },
                name_bn: { required: function() { return syslang() === "bn" } },
                fee: { required: true, min: 0 },
                order: { required: true, min: 1 }
            },
            messages: {
                name_en: { required: lang.english[config('lang')] + ' ' + lang.name[config('lang')] + ' ?' },
                name_bn: { required: lang.bangla[config('lang')] + ' ' + lang.name[config('lang')] + ' ?' },
                fee: { required: lang.fee[config('lang')] + ' ?' },
                order: { required: lang.order[config('lang')] + ' ?', min: lang.minimum[config('lang')] + ' ' + lang.digit_1[config('lang')] }
            },
        },
        cfgvoucherForm: {
            rules: {
                code: { required: true },
                amount: { required: true, number: true },
                payment: { required: true },
                source: { required: true },
                name: { required: true },
                phone: { required: true, phone: true },
                start: { required: true },
                end: { required: true },

            },
            messages: {
                code: { required: lang.code[config('lang')] + ' ?' },
                amount: { required: lang.amount[config('lang')] + ' ?', number: lang.amount[config('lang')] + ' ?' },
                payment: { required: lang.payment[config('lang')] + ' ?' },
                source: { required: lang.cash_destination_source[config('lang')] + ' ?' },
                name: { required: lang.name[config('lang')] + ' ?' },
                phone: { required: lang.phone[config('lang')] + ' ?', phone: lang.phone[config('lang')] + ' ?' },
                start: { required: lang.validity_start_date[config('lang')] + ' ?' },
                end: { required: lang.validity_end_date[config('lang')] + ' ?' },
            },
        },
        addcountryForm: {
            rules: {
                name_en: { required: true },
                name_bn: { required: function() { return syslang() === "bn" } },
                order: { required: true, min: 1 }
            },
            messages: {
                name_en: { required: lang.english[config('lang')] + ' ' + lang.name[config('lang')] + ' ?' },
                name_bn: { required: lang.bangla[config('lang')] + ' ' + lang.name[config('lang')] + ' ?' },
                order: { required: lang.order[config('lang')] + ' ?', min: lang.minimum[config('lang')] + ' ' + lang.digit_1[config('lang')] }
            },
        },
        addregionForm: {
            rules: {
                name_en: { required: true },
                name_bn: { required: function() { return syslang() === "bn" } },
                order: { required: true, min: 1 }

            },
            messages: {
                name_en: { required: lang.english[config('lang')] + ' ' + lang.name[config('lang')] + ' ?' },
                name_bn: { required: lang.bangla[config('lang')] + ' ' + lang.name[config('lang')] + ' ?' },
                order: { required: lang.order[config('lang')] + ' ?', min: lang.minimum[config('lang')] + ' ' + lang.digit_1[config('lang')] }
            },
        },
        addcityForm: {
            rules: {
                name_en: { required: true },
                name_bn: { required: function() { return syslang() === "bn" } },
                order: { required: true, min: 1 }
            },
            messages: {
                name_en: { required: lang.english[config('lang')] + ' ' + lang.name[config('lang')] + ' ?' },
                name_bn: { required: lang.bangla[config('lang')] + ' ' + lang.name[config('lang')] + ' ?' },
                order: { required: lang.order[config('lang')] + ' ?', min: lang.minimum[config('lang')] + ' ' + lang.digit_1[config('lang')] }
            },
        },
        addareaForm: {
            rules: {
                name_en: { required: true },
                name_bn: { required: function() { return syslang() === "bn" } },
                order: { required: true, min: 1 }
            },
            messages: {
                name_en: { required: lang.english[config('lang')] + ' ' + lang.name[config('lang')] + ' ?' },
                name_bn: { required: lang.bangla[config('lang')] + ' ' + lang.name[config('lang')] + ' ?' },
                order: { required: lang.order[config('lang')] + ' ?', min: lang.minimum[config('lang')] + ' ' + lang.digit_1[config('lang')] }
            },
        },
        addzipForm: {
            rules: {
                name_en: { required: true },
                name_bn: { required: function() { return syslang() === "bn" } },
                order: { required: true, min: 1 }
            },
            messages: {
                name_en: { required: lang.english[config('lang')] + ' ' + lang.name[config('lang')] + ' ?' },
                name_bn: { required: lang.bangla[config('lang')] + ' ' + lang.name[config('lang')] + ' ?' },
                order: { required: lang.order[config('lang')] + ' ?', min: lang.minimum[config('lang')] + ' ' + lang.digit_1[config('lang')] }
            },
        },
        addstreetForm: {
            rules: {
                name_en: { required: true },
                name_bn: { required: function() { return syslang() === "bn" } },
                order: { required: true, min: 1 }
            },
            messages: {
                name_en: { required: lang.english[config('lang')] + ' ' + lang.name[config('lang')] + ' ?' },
                name_bn: { required: lang.bangla[config('lang')] + ' ' + lang.name[config('lang')] + ' ?' },
                order: { required: lang.order[config('lang')] + ' ?', min: lang.minimum[config('lang')] + ' ' + lang.digit_1[config('lang')] }
            },
        },
        cfgdelplanForm: {
            rules: {
                city_id: { required: true },
                area_id: { required: true },
                zip_id: { required: true, number: true, min: 1 },
                base: { required: true, number: true, min: 1 },
                charge: { required: true, number: true, min: 1 },
            },
            messages: {
                city_id: { required: lang.city[config('lang')] + ' ?' },
                area_id: { required: lang.area[config('lang')] + ' ?' },
                zip_id: { required: lang.zip[config('lang')] + ' ?' },
                base: { required: lang.minimum_order[config('lang')] + ' ?' },
                charge: { required: lang.charge[config('lang')] + ' ?' }
            },
        },
        cfgdelplanDefaultChargeForm: {
            rules: { delivery_charge: { required: true, number: true, min: 0 } },
            messages: { delivery_charge: { required: lang.default_delivery_charge[config('lang')] + ' ?', min: lang.minimum[config('lang')] + ' ' + lang.digit_0[config('lang')] } }
        },
        prodbaseForm: {
            rules: {
                name_en: { required: true },
                name_bn: { required: function() { return syslang() === "bn" } },
                order: { required: true, min: 1 },
                ip: { is_valid_ip: true }
            },
            messages: {
                name_en: { required: lang.english[config('lang')] + ' ' + lang.name[config('lang')] + ' ?' },
                name_bn: { required: lang.bangla[config('lang')] + ' ' + lang.name[config('lang')] + ' ?' },
                order: { required: lang.order[config('lang')] + ' ?', min: lang.minimum[config('lang')] + ' ' + lang.digit_1[config('lang')] },
                ip: { is_valid_ip: lang.ip[config('lang')] + ' ?' },
            },
        },
        prodcatForm: {
            rules: {
                name_en: { required: true },
                name_bn: { required: function() { return syslang() === "bn" } },
                order: { required: true, min: 1 },
                base_id: { required: true },
                tax_id: { required: true },
                discount_id: { required: true },
            },
            messages: {
                name_en: { required: lang.english[config('lang')] + ' ' + lang.name[config('lang')] + ' ?' },
                name_bn: { required: lang.bangla[config('lang')] + ' ' + lang.name[config('lang')] + ' ?' },
                order: { required: lang.order[config('lang')] + ' ?', min: lang.minimum[config('lang')] + ' ' + lang.digit_1[config('lang')] },
                base_id: { required: lang.base[config('lang')] + ' ?' },
                tax_id: { required: lang.tax[config('lang')] + ' ?' },
                discount_id: { required: lang.discount[config('lang')] + ' ?' },
            },
        },
        prodcourseForm: {
            rules: {
                name_en: { required: true },
                name_bn: { required: function() { return syslang() === "bn" } },
                order: { required: true, min: 1 },

            },
            messages: {
                name_en: { required: lang.english[config('lang')] + ' ' + lang.name[config('lang')] + ' ?' },
                name_bn: { required: lang.bangla[config('lang')] + ' ' + lang.name[config('lang')] + ' ?' },
                order: { required: lang.order[config('lang')] + ' ?', min: lang.minimum[config('lang')] + ' ' + lang.digit_1[config('lang')] },
            },
        },
        prodtimingForm: {
            rules: {
                name_en: { required: true },
                name_bn: { required: function() { return syslang() === "bn" } },
                order: { required: true, min: 1 },
                time_start: { required: true },
                time_end: { required: true },
            },
            messages: {
                name_en: { required: lang.english[config('lang')] + ' ' + lang.name[config('lang')] + ' ?' },
                name_bn: { required: lang.bangla[config('lang')] + ' ' + lang.name[config('lang')] + ' ?' },
                order: { required: lang.order[config('lang')] + ' ?', min: lang.minimum[config('lang')] + ' ' + lang.digit_1[config('lang')] },
                time_start: { required: lang.time_start[config('lang')] + ' ?' },
                time_end: { required: lang.time_end[config('lang')] + ' ?' },
            },
        },
        proditemForm: {
            rules: {
                supplier_id: { required: true },
                name_en: { required: true },
                name_bn: { required: function() { return syslang() === "bn" } },
                order: { required: true, min: 1 },
                base_price: { required: true, min: 0, number: true },
                in_price: { min: 0, number: true },
                out_price: { min: 0, number: true },
                unit_id: { required: true },
                tax_id: { required: true },
                tax_by: { required: true },
                discount_id: { required: true },
                discount_by: { required: true },
                role: { required: true },
                has_top: { required: true },
            },
            messages: {
                supplier_id: { required: lang.select[config('lang')] + ' ' + lang.supplier[config('lang')] },
                name_en: { required: lang.english[config('lang')] + ' ' + lang.name[config('lang')] + ' ?' },
                name_bn: { required: lang.bangla[config('lang')] + ' ' + lang.name[config('lang')] + ' ?' },
                order: { required: lang.order[config('lang')] + ' ?', min: lang.minimum[config('lang')] + ' ' + lang.digit_1[config('lang')] },
                base_price: { required: lang.base[config('lang')] + ' ' + lang.price[config('lang')] + ' ?', number: lang.only_number_allowed[config('lang')], min: lang.minimum[config('lang')] + ' ' + lang.digit_0[config('lang')] },
                in_price: { number: lang.only_number_allowed[config('lang')], min: lang.minimum[config('lang')] + ' ' + lang.digit_0[config('lang')] },
                out_price: { number: lang.only_number_allowed[config('lang')], min: lang.minimum[config('lang')] + ' ' + lang.digit_0[config('lang')] },
                unit_id: { required: lang.scale_unit[config('lang')] },
                unit_id: { required: lang.scale_unit[config('lang')] },
                tax_id: { required: lang.scale_unit[config('lang')] + " ?" },
                tax_by: { required: lang.tax_by[config('lang')] + " ?" },
                discount_id: { required: lang.discount[config('lang')] + " ?" },
                discount_by: { required: lang.discount_by[config('lang')] + " ?" },
                role: { required: lang.role[config('lang')] + " ?" },
                has_top: { required: lang.offer_topping[config('lang')] + " ?" },
            },
        },
        prodoptionForm: {
            rules: {
                supplier_id: { required: true },
                name_en: { required: true },
                name_bn: { required: function() { return syslang() === "bn" } },
                order: { required: true, min: 1 },
                base_price: { required: true, min: 0, number: true },
                in_price: { min: 0, number: true },
                out_price: { min: 0, number: true },
                unit_id: { required: true },
                tax_id: { required: true },
                tax_by: { required: true },
                discount_id: { required: true },
                discount_by: { required: true },
                role: { required: true },
                has_top: { required: true },
            },
            messages: {
                supplier_id: { required: lang.select[config('lang')] + ' ' + lang.supplier[config('lang')] },
                name_en: { required: lang.english[config('lang')] + ' ' + lang.name[config('lang')] + ' ?' },
                name_bn: { required: lang.bangla[config('lang')] + ' ' + lang.name[config('lang')] + ' ?' },
                order: { required: lang.order[config('lang')] + ' ?', min: lang.minimum[config('lang')] + ' ' + lang.digit_1[config('lang')] },
                base_price: { required: lang.base[config('lang')] + ' ' + lang.price[config('lang')] + ' ?', number: lang.only_number_allowed[config('lang')], min: lang.minimum[config('lang')] + ' ' + lang.digit_0[config('lang')] },
                in_price: { number: lang.only_number_allowed[config('lang')], min: lang.minimum[config('lang')] + ' ' + lang.digit_0[config('lang')] },
                out_price: { number: lang.only_number_allowed[config('lang')], min: lang.minimum[config('lang')] + ' ' + lang.digit_0[config('lang')] },
                unit_id: { required: lang.scale_unit[config('lang')] },
                tax_id: { required: lang.scale_unit[config('lang')] + " ?" },
                tax_by: { required: lang.tax_by[config('lang')] + " ?" },
                discount_id: { required: lang.discount[config('lang')] + " ?" },
                discount_by: { required: lang.discount_by[config('lang')] + " ?" },
                role: { required: lang.role[config('lang')] + " ?" },
                has_top: { required: lang.offer_topping[config('lang')] + " ?" },
            },
        },
        prodtopForm: {
            rules: {
                name_en: { required: true },
                name_bn: { required: function() { return syslang() === "bn" } },
                unit_id: { required: true },
                order: { required: true, min: 1 },
                base_price: { required: true, min: 0, number: true },
                in_price: { min: 0, number: true },
                out_price: { min: 0, number: true },
            },
            messages: {
                name_en: { required: lang.english[config('lang')] + ' ' + lang.name[config('lang')] + ' ?' },
                name_bn: { required: lang.bangla[config('lang')] + ' ' + lang.name[config('lang')] + ' ?' },
                unit_id: { required: lang.scale_unit[config('lang')] },
                order: { required: lang.order[config('lang')] + ' ?', min: lang.minimum[config('lang')] + ' ' + lang.digit_1[config('lang')] },
                base_price: { required: lang.base[config('lang')] + ' ' + lang.price[config('lang')] + ' ?', number: lang.only_number_allowed[config('lang')], min: lang.minimum[config('lang')] + ' ' + lang.digit_0[config('lang')] },
                in_price: { number: lang.only_number_allowed[config('lang')], min: lang.minimum[config('lang')] + ' ' + lang.digit_0[config('lang')] },
                out_price: { number: lang.only_number_allowed[config('lang')], min: lang.minimum[config('lang')] + ' ' + lang.digit_0[config('lang')] },
            },
        },
        prodmodForm: {
            rules: {
                name_en: { required: true },
                name_bn: { required: function() { return syslang() === "bn" } },
                order: { required: true, min: 1 },
                base_price: { required: true, min: 0, number: true },
            },
            messages: {
                name_en: { required: lang.english[config('lang')] + ' ' + lang.name[config('lang')] + ' ?' },
                name_bn: { required: lang.bangla[config('lang')] + ' ' + lang.name[config('lang')] + ' ?' },
                order: { required: lang.order[config('lang')] + ' ?', min: lang.minimum[config('lang')] + ' ' + lang.digit_1[config('lang')] },
                base_price: { required: lang.base[config('lang')] + ' ' + lang.price[config('lang')] + ' ?', number: lang.only_number_allowed[config('lang')], min: lang.minimum[config('lang')] + ' ' + lang.digit_0[config('lang')] },
            },
        },

        prodcustsetForm: {
            rules: {
                name_en: { required: true },
                name_bn: { required: function() { return syslang() === "bn" } },
                level: { required: true, min: 1, max: 9 },
                source: { required: true },
                min: { required: true, min: 0 },
                max: { required: true, min: 0 },
            },
            messages: {
                name_en: { required: lang.set[config('lang')] + ' ' + lang.english[config('lang')] + ' ' + lang.name[config('lang')] + ' ?' },
                name_bn: { required: lang.set[config('lang')] + ' ' + lang.bangla[config('lang')] + ' ' + lang.name[config('lang')] + ' ?' },
                level: { required: lang.level[config('lang')] + ' ?', min: lang.minimum[config('lang')] + ' ' + lang.digit_1[config('lang')], max: lang.maximum[config('lang')] + ' ' + lang.digit_9[config('lang')] },
                source: { required: lang.source[config('lang')] + ' ?' },
                min: { required: lang.minimum[config('lang')] + ' ' + lang.number[config('lang')] + ' ?', min: lang.minimum[config('lang')] + ' ' + lang.digit_0[config('lang')] },
                max: { required: lang.maximum[config('lang')] + ' ' + lang.number[config('lang')] + ' ?', min: lang.minimum[config('lang')] + ' ' + lang.digit_0[config('lang')] },
            },
        },

        quickeditshortcodeForm: {
            rules: { shortcode: { required: true, number: true, min: 1 } },
            messages: { shortcode: { required: lang.shortcode[config('lang')] + ' ?', number: lang.number[config('lang')] + ' ?', min: lang.digit_1[config('lang')] + ' ?' } },
        },
        quickeditbarcodeForm: {
            rules: { barcode: { required: true } },
            messages: { barcode: { required: lang.barcode[config('lang')] + ' ?' } },
        },
        quickedittaxForm: {
            rules: { tax_id: { required: true }, tax_by: { required: true }, },
            messages: { tax_id: { required: lang.tax[config('lang')] + ' ?' }, tax_by: { required: lang.tax_by[config('lang')] + ' ?' } },
        },
        quickeditdiscountForm: {
            rules: { discount_id: { required: true }, discount_by: { required: true }, },
            messages: { discount_id: { required: lang.discount[config('lang')] + ' ?' }, discount_by: { required: lang.discount_by[config('lang')] + ' ?' } },
        },
        stocklocationForm: {
            rules: { name_en: { required: true }, name_bn: { required: function() { return syslang() === "bn" } } },
            messages: { name_en: { required: lang.location[config('lang')] + ' ' + lang.english[config('lang')] + ' ' + lang.name[config('lang')] + ' ?' }, name_bn: { required: lang.location[config('lang')] + ' ' + lang.bangla[config('lang')] + ' ' + lang.name[config('lang')] + ' ?' }, },
        },
        stockentryForm: {
            rules: { quantity: { required: true, min: 0.1, number: true } },
            messages: { quantity: { required: lang.quantity[config('lang')] + ' ?', number: lang.only_number_allowed[config('lang')] } }
        },
        stockmanageForm: {
            rules: {
                maintain_stock: { required: true },
                warn_below_qty: { required: true, number: true },
                stop_sale_qty: { required: true, number: true }
            },
            messages: {
                maintain_stock: { required: lang.manage[config('lang')] + ' ?' },
            }
        },

        discountplanForm: {
            rules: {
                min_order: { required: true, number: true },
                discount_id: { required: true },
                date_start: { required: true },
                date_end: { required: true },
                time_start: { required: true },
                time_end: { required: true },
                order: { required: true, number: true, min: 1 },
            },
            messages: {
                min_order: { required: lang.amount[config('lang')] + ' ?', number: lang.amount[config('lang')] + ' ?' },
                discount_id: { required: lang.discount[config('lang')] + ' ?' },
                date_start: { required: lang.validity_start_date[config('lang')] + ' ?' },
                date_end: { required: lang.validity_end_date[config('lang')] + ' ?' },
                time_start: { required: lang.time_start[config('lang')] + ' ?' },
                time_end: { required: lang.time_end[config('lang')] + ' ?' },
                order: { required: lang.order[config('lang')] + ' ?', min: lang.minimum[config('lang')] + ' ' + lang.digit_1[config('lang')] }
            },
        },
        discountpromoForm: {
            rules: {
                promo_code: { required: true },
                min_order: { required: true, number: true },
                discount_id: { required: true },
                date_start: { required: true },
                date_end: { required: true },
                time_start: { required: true },
                time_end: { required: true },
                order: { required: true, number: true, min: 1 },
            },
            messages: {
                promo_code: { required: lang.code[config('lang')] + ' ?' },
                min_order: { required: lang.amount[config('lang')] + ' ?', number: lang.amount[config('lang')] + ' ?' },
                discount_id: { required: lang.discount[config('lang')] + ' ?' },
                date_start: { required: lang.validity_start_date[config('lang')] + ' ?' },
                date_end: { required: lang.validity_end_date[config('lang')] + ' ?' },
                time_start: { required: lang.time_start[config('lang')] + ' ?' },
                time_end: { required: lang.time_end[config('lang')] + ' ?' },
                order: { required: lang.order[config('lang')] + ' ?', min: lang.minimum[config('lang')] + ' ' + lang.digit_1[config('lang')] },
            },
        },
        discountmultiForm: {
            rules: {
                name_id: { required: true },
                buy: { required: true, number: true },
                get: { required: true },
                date_start: { required: true },
                date_end: { required: true },
                time_start: { required: true },
                time_end: { required: true },
                order: { required: true, number: true, min: 1 },
            },
            messages: {
                name_id: { required: lang.name[config('lang')] + ' ?' },
                buy: { required: lang.buy[config('lang')] + ' ?', number: lang.amount[config('lang')] + ' ?' },
                get: { required: lang.get[config('lang')] + ' ?' },
                date_start: { required: lang.validity_start_date[config('lang')] + ' ?' },
                date_end: { required: lang.validity_end_date[config('lang')] + ' ?' },
                time_start: { required: lang.time_start[config('lang')] + ' ?' },
                time_end: { required: lang.time_end[config('lang')] + ' ?' },
                order: { required: lang.order[config('lang')] + ' ?', min: lang.minimum[config('lang')] + ' ' + lang.digit_1[config('lang')] }
            },
        },
        prodfreeplanForm: {
            rules: {
                name_en: { required: true },
                name_bn: { required: function() { return syslang() === "bn" } },
                min_order: { required: true, number: true, min: 1 },
                quantity: { required: true, number: true, min: 0 },
                date_start: { required: true },
                date_end: { required: true },
                time_start: { required: true },
                time_end: { required: true },
                order: { required: true, number: true, min: 1 }
            },
            messages: {
                name_en: { required: lang.plan[config('lang')] + ' ' + lang.english[config('lang')] + ' ' + lang.name[config('lang')] + ' ?' },
                name_bn: { required: lang.plan[config('lang')] + ' ' + lang.bangla[config('lang')] + ' ' + lang.name[config('lang')] + ' ?' },
                min_order: { required: lang.amount[config('lang')] + ' ?', number: lang.only_number_allowed[config('lang')], min: lang.minimum[config('lang')] + ' ' + lang.digit_1[config('lang')] },
                quantity: { required: lang.number[config('lang')] + ' ?', number: lang.only_number_allowed[config('lang')], min: lang.minimum[config('lang')] + ' ' + lang.digit_1[config('lang')] },
                date_start: { required: lang.validity_start_date[config('lang')] + ' ?' },
                date_end: { required: lang.validity_end_date[config('lang')] + ' ?' },
                time_start: { required: lang.time_start[config('lang')] + ' ?' },
                time_end: { required: lang.time_end[config('lang')] + ' ?' },
                order: { required: lang.order[config('lang')] + ' ?', min: lang.minimum[config('lang')] + ' ' + lang.digit_1[config('lang')] },
            },
        },
        userhubForm: {
            rules: {
                name_en: { required: true },
                name_bn: { required: function() { return syslang() === "bn" } },
                order: { required: true, number: true, min: 1 }
            },
            messages: {
                name_en: { required: lang.english[config('lang')] + ' ' + lang.name[config('lang')] + ' ?' },
                name_bn: { required: lang.bangla[config('lang')] + ' ' + lang.name[config('lang')] + ' ?' },
                order: { required: lang.order[config('lang')] + ' ?', min: lang.minimum[config('lang')] + ' ' + lang.digit_1[config('lang')] },
            },
        },
        userForm: {
            rules: {
                name_en: { required: true },
                name_bn: { required: function() { return syslang() === "bn" } },
                phone: { required: true, phone: true },
                email: { required: true },
                hub_id: { required: true },
                role: { required: true },
                username: { required: true },
                password: { required: function() { return $('#userInEdit').length > 0 ? false : true } },
                order: { required: true, number: true, min: 1 }
            },
            messages: {
                name_en: { required: lang.english[config('lang')] + ' ' + lang.name[config('lang')] + ' ?' },
                name_bn: { required: lang.bangla[config('lang')] + ' ' + lang.name[config('lang')] + ' ?' },
                phone: { required: lang.phone[config('lang')] + ' ?' },
                email: { required: lang.email[config('lang')] + ' ?' },
                hub_id: { required: lang.hub[config('lang')] + ' ?' },
                role: { required: lang.role[config('lang')] + ' ?' },
                username: { required: lang.username[config('lang')] + ' ?' },
                password: { required: lang.password[config('lang')] + ' ?' },
                order: { required: lang.order[config('lang')] + ' ?', min: lang.minimum[config('lang')] + ' ' + lang.digit_1[config('lang')] },
            },
        },

        customerForm: {
            rules: {
                name_en: { required: true },
                phone: { required: true, phone: true },
                email: { email: true }
            },
            messages: {
                name_en: { required: lang.name[config('lang')] + ' ?' },
                phone: { required: lang.phone[config('lang')] + ' ?', phone: lang.phone[config('lang')] + ' ?' },
                email: { email: lang.email[config('lang')] + ' ?' }
            },
        },
        customeraddressForm: {
            rules: {
                city_id: { required: true },
                area_id: { required: true },
                zip_id: { required: true },
                street_id: { required: true },
                house_en: { required: true },
                house_bn: { required: true },
            },
            messages: {
                city_id: { required: lang.city[config('lang')] + ' ?' },
                area_id: { required: lang.area[config('lang')] + ' ?' },
                zip_id: { required: lang.zip[config('lang')] + ' ?' },
                street_id: { required: lang.street_address[config('lang')] + ' ?' },
                house_en: { required: lang.english[config('lang')] + ' ' + lang.house_number[config('lang')] + ' ?' },
                house_bn: { required: lang.bangla[config('lang')] + ' ' + lang.house_number[config('lang')] + ' ?' },
            },
        },
        reportcustomerdueForm: {
            rules: {
                customer_id: { required: true },
                amount: { required: true, min: 0, number: true },
                closed_on: { required: true },
                date_from: { required: true },
                date_end: { required: true },
                payment: { required: true },
                source: { required: true },
            },
            messages: {
                customer_id: { required: lang.customer[config('lang')] + ' ?' },
                amount: { required: lang.amount[config('lang')] + ' ?', min: lang.amount[config('lang')] + ' ?', number: lang.salary[config('lang')] + ' ?' },
                closed_on: { required: lang.date[config('lang')] + ' ?' },
                date_from: { required: lang.date_from[config('lang')] + ' ?' },
                date_end: { required: lang.date_to[config('lang')] + ' ?' },
                payment: { required: lang.payment[config('lang')] + ' ' + lang.type[config('lang')] + ' ?', valueNotEquals: lang.payment[config('lang')] + ' ' + lang.type[config('lang')] + ' ?' },
                source: { required: lang.source[config('lang')] + ' ?', valueNotEquals: lang.source[config('lang')] + ' ?' }
            },
        },
        reportcustomerdueFilterForm: {
            rules: {
                customer_id: { required: true },
                date_from: { required: true },
                date_to: { required: true }
            },
            messages: {
                customer_id: { required: lang.customer[config('lang')] + ' ?' },
                date_from: { required: lang.date_from[config('lang')] + ' ?' },
                date_to: { required: lang.date_to[config('lang')] + ' ?' }
            },
        },

        supplierForm: {
            rules: {
                name_en: { required: true },
                address_en: { required: true },
                phone: { required: true, phone: true },
                email: { email: true }
            },
            messages: {
                name_en: { required: lang.english[config('lang')] + ' ' + lang.name[config('lang')] + ' ?' },
                address_en: { required: lang.english[config('lang')] + ' ' + lang.address[config('lang')] + ' ?' },
                phone: { required: lang.phone[config('lang')] + ' ?', phone: lang.phone[config('lang')] + ' ?' },
                email: { email: lang.email[config('lang')] + ' ?' }
            },
        },

        reportsupplierdueForm: {
            rules: {
                supplier_id: { required: true },
                amount: { required: true, min: 0, number: true },
                closed_on: { required: true },
                date_from: { required: true },
                date_end: { required: true },
                payment: { required: true },
                source: { required: true },
            },
            messages: {
                supplier_id: { required: lang.customer[config('lang')] + ' ?' },
                amount: { required: lang.amount[config('lang')] + ' ?', min: lang.amount[config('lang')] + ' ?', number: lang.salary[config('lang')] + ' ?' },
                closed_on: { required: lang.date[config('lang')] + ' ?' },
                date_from: { required: lang.date_from[config('lang')] + ' ?' },
                date_end: { required: lang.date_to[config('lang')] + ' ?' },
                payment: { required: lang.payment[config('lang')] + ' ' + lang.type[config('lang')] + ' ?', valueNotEquals: lang.payment[config('lang')] + ' ' + lang.type[config('lang')] + ' ?' },
                source: { required: lang.source[config('lang')] + ' ?', valueNotEquals: lang.source[config('lang')] + ' ?' }
            },
        },
        reportsupplierdueFilterForm: {
            rules: {
                supplier_id: { required: true },
                date_from: { required: true },
                date_to: { required: true }
            },
            messages: {
                supplier_id: { required: lang.supplier[config('lang')] + ' ?' },
                date_from: { required: lang.date_from[config('lang')] + ' ?' },
                date_to: { required: lang.date_to[config('lang')] + ' ?' }
            },
        },


        employeeForm: {
            rules: {
                name_en: { required: true },
                address_en: { required: true },
                phone: { required: true, phone: true },
                email: { email: true },
                post: { required: true },
                salary: { required: true, min: 0, number: true },
            },
            messages: {
                name_en: { required: lang.english[config('lang')] + ' ' + lang.name[config('lang')] + ' ?' },
                address_en: { required: lang.english[config('lang')] + ' ' + lang.address[config('lang')] + ' ?' },
                phone: { required: lang.phone[config('lang')] + ' ?', phone: lang.phone[config('lang')] + ' ?' },
                email: { email: lang.email[config('lang')] + ' ?' },
                post: { required: lang.post[config('lang')] + ' ?' },
                salary: { required: lang.salary[config('lang')] + ' ?', min: lang.salary[config('lang')] + ' ?', number: lang.amount[config('lang')] + ' ?' }
            },
        },
        empattendanceForm: {
            rules: {
                emp_id: { required: true },
                date: { required: true },
                in_time: { required: true }
            },
            messages: {
                emp_id: { required: lang.employee[config('lang')] + ' ?' },
                date: { required: lang.date[config('lang')] + ' ?' },
                in_time: { required: lang.in_time[config('lang')] + ' ?' }
            },
        },
        attendanceFilterForm: {
            rules: {
                date_from: { required: true },
                date_to: { required: true }
            },
            messages: {
                date_from: { required: lang.date_from[config('lang')] + ' ?' },
                date_to: { required: lang.date_to[config('lang')] + ' ?' }
            },
        },
        empsalaryForm: {
            rules: {
                emp_id: { required: true },
                salary: { required: true, min: 0, number: true },
                closed_on: { required: true },
                date_from: { required: true },
                date_end: { required: true },
                payment: { required: true },
                source: { required: true },
            },
            messages: {
                emp_id: { required: lang.employee[config('lang')] + ' ?' },
                salary: { required: lang.salary[config('lang')] + ' ?', min: lang.salary[config('lang')] + ' ?', number: lang.salary[config('lang')] + ' ?' },
                closed_on: { required: lang.date[config('lang')] + ' ?' },
                date_from: { required: lang.date_from[config('lang')] + ' ?' },
                date_end: { required: lang.date_to[config('lang')] + ' ?' },
                payment: { required: lang.payment[config('lang')] + ' ' + lang.type[config('lang')] + ' ?', valueNotEquals: lang.payment[config('lang')] + ' ' + lang.type[config('lang')] + ' ?' },
                source: { required: lang.source[config('lang')] + ' ?', valueNotEquals: lang.source[config('lang')] + ' ?' }
            },
        },
        empsalaryFilterForm: {
            rules: {
                employee_id: { required: true },
                date_from: { required: true },
                date_to: { required: true },
            },
            messages: {
                employee_id: { required: lang.employee[config('lang')] + ' ?' },
                date_from: { required: lang.date_from[config('lang')] + ' ?' },
                date_to: { required: lang.date_to[config('lang')] + ' ?' },
            },
        },

        reportFilterForm: {
            rules: {
                date_from: { required: true },
                date_to: { required: true },
            },
            messages: {
                date_from: { required: lang.date_from[config('lang')] + ' ?' },
                date_to: { required: lang.date_to[config('lang')] + ' ?' },
            },
        },

        reportincomeForm: {
            rules: {
                sector_id: { required: true },
                amount: { required: true, min: 0, number: true },
                closed_on: { required: true },
                payment: { required: true },
                source: { required: true },
            },
            messages: {
                sector_id: { required: lang.sector[config('lang')] + ' ?' },
                amount: { required: lang.amount[config('lang')] + ' ?', min: lang.amount[config('lang')] + ' ?', number: lang.amount[config('lang')] + ' ?' },
                closed_on: { required: lang.date[config('lang')] + ' ?' },
                payment: { required: lang.payment[config('lang')] + ' ' + lang.type[config('lang')] + ' ?', valueNotEquals: lang.payment[config('lang')] + ' ' + lang.type[config('lang')] + ' ?' },
                source: { required: lang.source[config('lang')] + ' ?', valueNotEquals: lang.source[config('lang')] + ' ?' }
            },
        },
        reportincomeFilterForm: {
            rules: {
                date_from: { required: true },
                date_to: { required: true },
            },
            messages: {
                date_from: { required: lang.date_from[config('lang')] + ' ?' },
                date_to: { required: lang.date_to[config('lang')] + ' ?' },
            },
        },
        reportincomesectorForm: {
            rules: {
                name_en: { required: true },
                name_bn: { required: function() { return syslang() === "bn" } },
                order: { required: true, number: true, min: 1 }
            },
            messages: {
                name_en: { required: lang.english[config('lang')] + ' ' + lang.name[config('lang')] + ' ?' },
                name_bn: { required: lang.bangla[config('lang')] + ' ' + lang.name[config('lang')] + ' ?' },
                order: { required: lang.order[config('lang')] + ' ?', min: lang.minimum[config('lang')] + ' ' + lang.digit_1[config('lang')] },
            },
        },
        reportincomesectorFilterForm: {
            rules: {
                date_from: { required: true },
                date_to: { required: true },
            },
            messages: {
                date_from: { required: lang.date_from[config('lang')] + ' ?' },
                date_to: { required: lang.date_to[config('lang')] + ' ?' },
            },
        },
        reportexpenseForm: {
            rules: {
                sector_id: { required: true },
                amount: { required: true, min: 0, number: true },
                closed_on: { required: true },
                payment: { required: true },
                source: { required: true },
            },
            messages: {
                sector_id: { required: lang.sector[config('lang')] + ' ?' },
                amount: { required: lang.amount[config('lang')] + ' ?', min: lang.amount[config('lang')] + ' ?', number: lang.amount[config('lang')] + ' ?' },
                closed_on: { required: lang.date[config('lang')] + ' ?' },
                payment: { required: lang.payment[config('lang')] + ' ' + lang.type[config('lang')] + ' ?', valueNotEquals: lang.payment[config('lang')] + ' ' + lang.type[config('lang')] + ' ?' },
                source: { required: lang.source[config('lang')] + ' ?', valueNotEquals: lang.source[config('lang')] + ' ?' }
            },
        },
        reportexpenseFilterForm: {
            rules: {
                date_from: { required: true },
                date_to: { required: true },
            },
            messages: {
                date_from: { required: lang.date_from[config('lang')] + ' ?' },
                date_to: { required: lang.date_to[config('lang')] + ' ?' },
            },
        },
        reportexpensesectorForm: {
            rules: {
                name_en: { required: true },
                name_bn: { required: function() { return syslang() === "bn" } },
                order: { required: true, number: true, min: 1 }
            },
            messages: {
                name_en: { required: lang.english[config('lang')] + ' ' + lang.name[config('lang')] + ' ?' },
                name_bn: { required: lang.bangla[config('lang')] + ' ' + lang.name[config('lang')] + ' ?' },
                order: { required: lang.order[config('lang')] + ' ?', min: lang.minimum[config('lang')] + ' ' + lang.digit_1[config('lang')] },
            },
        },
        reportexpensesectorFilterForm: {
            rules: {
                date_from: { required: true },
                date_to: { required: true },
            },
            messages: {
                date_from: { required: lang.date_from[config('lang')] + ' ?' },
                date_to: { required: lang.date_to[config('lang')] + ' ?' },
            },
        },

        phoneseachForm: {
            rules: { phone: { required: true, phone: true } },
            messages: { phone: { required: lang.phone[config('lang')] + ' ?', phone: lang.phone[config('lang')] + ' ?' } }
        },
        tableForm: {
            rules: {
                name: { required: true },
                guest: { required: true, number: true, min: 1 }
            },
            messages: {
                name: { required: lang.table[config('lang')] + ' ' + lang.Number[config('lang')] + ' ?' },
                guest: {
                    required: lang.guest[config('lang')] + ' ' + lang.number[config('lang')] + ' ?',
                    number: lang.guest[config('lang')] + ' ' + lang.number[config('lang')] + ' ?',
                    min: lang.guest[config('lang')] + ' ' + lang.number[config('lang')] + ' ?',
                },
            }
        },
        waitingForm: {
            rules: {
                name: { required: true },
                phone: { phone: true }
            },
            messages: {
                name: { required: lang.customer[config('lang')] + ' ' + lang.name[config('lang')] + ' ?' },
                phone: { phone: lang.phone[config('lang')] + ' ?' }
            }
        },
        collectionForm: {
            rules: {
                name: { required: true },
                phone: { phone: true }
            },
            messages: {
                name: { required: lang.customer[config('lang')] + ' ' + lang.name[config('lang')] + ' ?' },
                phone: { phone: lang.phone[config('lang')] + ' ?' }
            }
        },
        barForm: {
            rules: {
                name: { required: true },
                phone: { phone: true }
            },
            messages: {
                name: { required: lang.customer[config('lang')] + ' ' + lang.name[config('lang')] + ' ?' },
                phone: { phone: lang.phone[config('lang')] + ' ?' }
            }
        },
        deliveryForm: {
            rules: {
                name: { required: true },
                phone: { required: true, phone: true },
                area: { required: true },
                zip: { required: true },
                street: { required: true },
                house: { required: true },
                delivery_time: { required: true },
            },
            messages: {
                name: { required: lang.customer[config('lang')] + ' ' + lang.name[config('lang')] + ' ?' },
                phone: { required: lang.phone[config('lang')] + ' ?', phone: lang.phone[config('lang')] + ' ?' },
                area: { required: lang.area[config('lang')] + ' ?' },
                zip: { required: lang.block[config('lang')] + ' ?' },
                street: { required: lang.road[config('lang')] + ' ?' },
                house: { required: lang.house_number[config('lang')] + ' ?' },
                delivery_time: { required: lang.delay[config('lang')] + ' ?' }
            }
        },
        saleCustomItemForm: {
            rules: {
                name: { required: true },
                base_price: { required: true, min: 0, number: true },
                qty: { required: true, min: 0, number: true },
            },
            messages: {
                name: { required: lang.name[config('lang')] + ' ?' },
                base_price: { required: lang.price[config('lang')] + ' ?', number: lang.only_number_allowed[config('lang')], min: lang.minimum[config('lang')] + ' ' + lang.digit_0[config('lang')] },
                qty: { required: lang.quantity[config('lang')] + ' ?', number: lang.only_number_allowed[config('lang')], min: lang.minimum[config('lang')] + ' ' + lang.digit_1[config('lang')] },
            }
        },
        saleHelperForm: {
            rules: {
                value: { required: true, number: true, min: 0 },
                func: { required: true },
                auth_code: { required: true }
            },
            messages: {
                value: { required: lang.value[config('lang')] + ' ?', number: lang.value[config('lang')] + ' ?', min: lang.value[config('lang')] + ' ?', },
                func: { required: lang.func[config('lang')] + ' ?' },
                auth_code: { required: lang.auth_code[config('lang')] + ' ?' },
            }
        },
        design: {
            rules: {
                actionHeight: { required: true, number: true, min: 0 },
                actionPadding: { required: true, number: true, min: 0 },
                categoryHeight: { required: true, number: true, min: 0 },
                categoryPadding: { required: true, number: true, min: 0 },
                itemHeight: { required: true, number: true, min: 0 },
                itemPadding: { required: true, number: true, min: 0 },
                focusHeight: { required: true, number: true, min: 0 },
                defaultCartHeight: { required: true, number: true, min: 0 },
                optionalCartHeight: { required: true, number: true, min: 0 },
                calculationHeight: { required: true, number: true, min: 0 },
                fontsize: { required: true, number: true, min: 0 },
                pagi_category: { required: true, number: true, min: 0 },
                pagi_category: { required: true, number: true, min: 0 },
                cartSide: { required: true },
            },
            messages: {
                actionHeight: { required: lang.value[config('lang')] + ' ?', number: lang.value[config('lang')] + ' ?', min: lang.value[config('lang')] + ' ?' },
                actionPadding: { required: lang.value[config('lang')] + ' ?', number: lang.value[config('lang')] + ' ?', min: lang.value[config('lang')] + ' ?' },
                categoryHeight: { required: lang.value[config('lang')] + ' ?', number: lang.value[config('lang')] + ' ?', min: lang.value[config('lang')] + ' ?' },
                categoryPadding: { required: lang.value[config('lang')] + ' ?', number: lang.value[config('lang')] + ' ?', min: lang.value[config('lang')] + ' ?' },
                cartheight: { required: lang.value[config('lang')] + ' ?', number: lang.value[config('lang')] + ' ?', min: lang.value[config('lang')] + ' ?' },
                itemHeight: { required: lang.value[config('lang')] + ' ?', number: lang.value[config('lang')] + ' ?', min: lang.value[config('lang')] + ' ?' },
                itemPadding: { required: lang.value[config('lang')] + ' ?', number: lang.value[config('lang')] + ' ?', min: lang.value[config('lang')] + ' ?' },
                defaultCartHeight: { required: lang.value[config('lang')] + ' ?', number: lang.value[config('lang')] + ' ?', min: lang.value[config('lang')] + ' ?' },
                optionalCartHeight: { required: lang.value[config('lang')] + ' ?', number: lang.value[config('lang')] + ' ?', min: lang.value[config('lang')] + ' ?' },
                calculationHeight: { required: lang.value[config('lang')] + ' ?', number: lang.value[config('lang')] + ' ?', min: lang.value[config('lang')] + ' ?' },
                fontsize: { required: lang.value[config('lang')] + ' ?', number: lang.value[config('lang')] + ' ?', min: lang.value[config('lang')] + ' ?' },
                pagi_category: { required: lang.value[config('lang')] + ' ?', number: lang.value[config('lang')] + ' ?', min: lang.value[config('lang')] + ' ?' },
                pagi_item: { required: lang.value[config('lang')] + ' ?', number: lang.value[config('lang')] + ' ?', min: lang.value[config('lang')] + ' ?' },
                cartSide: { required: lang.cart[config('lang')] + ' ' + lang.position[config('lang')] + ' ?' },
            }
        },
        kitchentext: {
            rules: { value: { required: true }, },
            messages: { value: { required: lang.kitchen[config('lang')] + ' ' + lang.text[config('lang')] + ' ?' }, }
        },
        payandcloseForm: {
            rules: { phone: { required: true, phone: true }, code: { required: true }, },
            messages: { phone: { required: lang.customer[config('lang')] + ' ' + lang.phone[config('lang')] + ' ?', phone: lang.phone[config('lang')] + ' ?' }, code: { required: lang.code[config('lang')] + ' ?' }, }
        },
        commonNumpadPopupForm: {
            rules: { popupField: { required: true, number: true, min: 0 } },
            messages: { popupField: { required: lang.value[config('lang')] + ' ?', number: lang.value[config('lang')], min: lang.value[config('lang')] } }
        },
        purchaseSupplierForm: {
            rules: { supplier_id: { required: true }, },
            messages: { supplier_id: { required: lang.select[config('lang')] + ' ' + lang.supplier[config('lang')] } }
        },
        bluetoothPrinter: {
            rules: {
                bill_printer: { required: true },
                sent_printer: { required: true },
            },
            messages: {
                value: { required: lang.bill[config('lang')] + ' ' + lang.printer[config('lang')] + ' ?' },
                value: { required: lang.kitchen[config('lang')] + ' ' + lang.printer[config('lang')] + ' ?' },
            }
        },

        //Web end newly added
        webpageForm: {
            rules: {
                title_en: { required: true },
                subtitle_en: { required: true },
                desc_en: { required: true },
                meta_keys_en: { required: true },
                meta_desc_en: { required: true },
                title_bn: { required: true },
                subtitle_bn: { required: true },
                desc_bn: { required: true },
                meta_keys_bn: { required: true },
                meta_desc_bn: { required: true },
            },
            messages: {
                title_en: { required: lang.title[config('lang')] + ' ?' },
                subtitle_en: { required: lang.subtitle[config('lang')] + ' ?' },
                desc_en: { required: lang.description[config('lang')] + ' ?' },
                meta_keys_en: { required: lang.meta_key[config('lang')] + ' ?' },
                meta_desc_en: { required: lang.meta_desc[config('lang')] + ' ?' },
                title_bn: { required: lang.title[config('lang')] + ' ?' },
                subtitle_bn: { required: lang.subtitle[config('lang')] + ' ?' },
                desc_bn: { required: lang.description[config('lang')] + ' ?' },
                meta_keys_bn: { required: lang.meta_key[config('lang')] + ' ?' },
                meta_desc_bn: { required: lang.meta_desc[config('lang')] + ' ?' },
            },
        },
        webOpeningsForm: {
            rules: {
                start: { required: true },
                end: { required: true },
            },
            messages: {
                start: { required: lang.time_start[config('lang')] + ' ?' },
                end: { required: lang.time_end[config('lang')] + ' ?' },
            },
        },
        subscribersForm: {
            rules: {
                type: { required: true },
                message: { required: true },
            },
            messages: {
                type: { required: lang.type[config('lang')] + ' ?' },
                message: { required: lang.message[config('lang')] + ' ?' },
            },
        },
        applinkForm: {},
        sociallinkForm: {},
    }
});