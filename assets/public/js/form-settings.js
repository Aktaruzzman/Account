var Formsetting = {
    apiDomainForm: {
        rules: {
            domain: { required: true },
        },
        messages: {
            domain: { required: lang.domain[lang_option] + ' ' + lang.name[lang_option] + ' ?' },
        }
    },
    loginForm: {
        rules: {
            username: { required: true },
            password: { required: true },
        },
        messages: {
            username: { required: lang.username[lang_option] + ' ?' },
            password: { required: lang.password[lang_option] + ' ?' },
        }
    },
    devicetrackerForm: {
        rules: {
            code: { required: true },
            pass: { required: true },
        },
        messages: {
            code: { required: lang.code[lang_option] + ' ?' },
            pass: { required: lang.password[lang_option] + ' ?' },
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
            shop_name: { required: lang.name[lang_option] + ' ?', alphaonly: lang.alphaonly[lang_option] },
            shop_phone: { required: lang.phone[lang_option] + ' ?', phone: lang.invalid_phone_msg[lang_option] },
            shop_email: { email: lang.invalid_email_msg[lang_option] },
            auth_code: {
                required: lang.auth_code[lang_option] + ' ?',
                number: lang.invalid_digit_msg[lang_option]
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
            addcity_en: { required: lang.city[lang_option] + ' ?' },
            addarea_en: { required: lang.area[lang_option] + ' ?' },
            addzip_en: { required: lang.zip[lang_option] + ' ?' },
            addstreet_en: { required: lang.street_address[lang_option] + ' ?' },
            addhouse_en: { required: lang.house_number[lang_option] + ' ?' },
            addcity_bn: { required: lang.city[lang_option] + ' ?' },
            addarea_bn: { required: lang.area[lang_option] + ' ?' },
            addzip_bn: { required: lang.zip[lang_option] + ' ?' },
            addstreet_bn: { required: lang.street_address[lang_option] + ' ?' },
            addhouse_bn: { required: lang.house_number[lang_option] + ' ?' },
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
                required: lang.pagi_report[lang_option] + ' ?',
                number: lang.invalid_digit_msg[lang_option],
                min: lang.minimum[lang_option] + ' ' + lang.digit_1[lang_option],
                max: lang.maximum[lang_option] + ' ' + lang.digit_5[lang_option] + lang.digit_0[lang_option] + lang.digit_0[lang_option]
            },
            pagi_category: {
                required: lang.pagi_category[lang_option] + ' ?',
                number: lang.invalid_digit_msg[lang_option],
                min: lang.minimum[lang_option] + ' ' + lang.digit_2[lang_option],
                max: lang.maximum[lang_option] + ' ' + lang.digit_2[lang_option] + lang.digit_2[lang_option]
            },
            pagi_item: {
                required: lang.pagi_category[lang_option] + ' ?',
                number: lang.invalid_digit_msg[lang_option],
                min: lang.minimum[lang_option] + ' ' + lang.digit_3[lang_option],
                max: lang.maximum[lang_option] + ' ' + lang.digit_3[lang_option] + lang.digit_0[lang_option]
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
            shop_api_id: { required: lang.shop_api_id[lang_option] + ' ?' },
            shop_type: { required: lang.shop_type[lang_option] + ' ?' },
            software_type: { required: lang.software_type[lang_option] + ' ?' },
            shop_api_connect: { required: lang.shop_api_connect[lang_option] + ' ?' },
            shop_api_key: { required: lang.shop_api_key[lang_option] + ' ?' },
            shop_api_user: { required: lang.shop_api_user[lang_option] + ' ?' },
            shop_api_password: { required: lang.shop_api_password[lang_option] + ' ?' },
            late_night_delay: {
                required: lang.late_night_delay[lang_option] + ' ?',
                number: lang.late_night_delay[lang_option] + ' ?'
            },
            precesion: {
                required: lang.rounding[lang_option] + ' ?',
                number: lang.rounding[lang_option] + ' ?',
                min: lang.rounding[lang_option] + ' ?',
                max: lang.rounding[lang_option] + ' ?'
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
                required: lang.auth_code[lang_option] + ' ?',
                number: lang.invalid_digit_msg[lang_option]
            },
            late_night_delay: {
                required: lang.late_night_delay[lang_option] + ' ?',
                number: lang.late_night_delay[lang_option] + ' ?'
            },
            precesion: {
                required: lang.rounding[lang_option] + ' ?',
                number: lang.rounding[lang_option] + ' ?',
                min: lang.rounding[lang_option] + ' ?',
                max: lang.rounding[lang_option] + ' ?'
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
            print_chef_service: { required: lang.print_chef_service[lang_option] + ' ?' },
            print_chef_station: { required: lang.print_chef_station[lang_option] + ' ?' },
            print_chef_base: { required: lang.print_chef_base[lang_option] + ' ?' },
            print_chef_seq: { required: lang.print_chef_seq[lang_option] + ' ?' },
            print_bill_on_pay: { required: lang.print_bill_on_pay[lang_option] + ' ?' },
            print_chef_font: { required: lang.print_chef_font[lang_option] + ' ?' },
            print_bill_font: { required: lang.print_bill_font[lang_option] + ' ?' },
            print_chef_ip: { required: lang.print_chef_ip[lang_option] + ' ?' },
            print_bill_ip: { required: lang.print_bill_ip[lang_option] + ' ?' },
            print_length: { required: lang.print_length[lang_option] + ' ?' },
            print_bill_msg: { required: lang.print_bill_msg[lang_option] + ' ?' },
            print_bill_lang: { required: lang.print_bill_lang[lang_option] + ' ?' },
            print_chef_lang: { required: lang.print_chef_lang[lang_option] + ' ?' },
            print_bill_adaptor: { required: lang.print_bill_adaptor[lang_option] + ' ?' },
            print_chef_adaptor: { required: lang.print_chef_adaptor[lang_option] + ' ?' }
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
            print_chef_service: { required: lang.print_chef_service[lang_option] + ' ?' },
            print_chef_station: { required: lang.print_chef_station[lang_option] + ' ?' },
            print_chef_base: { required: lang.print_chef_base[lang_option] + ' ?' },
            print_chef_seq: { required: lang.print_chef_seq[lang_option] + ' ?' },
            print_bill_on_pay: { required: lang.print_bill_on_pay[lang_option] + ' ?' },
            print_chef_font: { required: lang.print_chef_font[lang_option] + ' ?' },
            print_bill_font: { required: lang.print_bill_font[lang_option] + ' ?' },
            print_chef_ip: { required: lang.print_chef_ip[lang_option] + ' ?' },
            print_bill_ip: { required: lang.print_bill_ip[lang_option] + ' ?' },
            print_length: { required: lang.print_length[lang_option] + ' ?' },
            print_bill_msg: { required: lang.print_bill_msg[lang_option] + ' ?' },
            print_bill_lang: { required: lang.print_bill_lang[lang_option] + ' ?' },
            print_chef_lang: { required: lang.print_chef_lang[lang_option] + ' ?' },
            print_bill_adaptor: { required: lang.print_bill_adaptor[lang_option] + ' ?' },
            print_chef_adaptor: { required: lang.print_chef_adaptor[lang_option] + ' ?' }
        },
    },

    cfgunitForm: {
        rules: {
            name_en: { required: true },
            name_bn: { required: true },
            short_en: { required: true },
            short_bn: { required: true },
            value: { required: true },
            order: { required: true, min: 1 }
        },
        messages: {
            name_en: { required: lang.english[lang_option] + ' ' + lang.name[lang_option] + ' ?' },
            name_bn: { required: lang.bangla[lang_option] + ' ' + lang.name[lang_option] + ' ?' },
            short_en: { required: lang.english[lang_option] + ' ' + lang.short_name[lang_option] + ' ?' },
            short_bn: { required: lang.bangla[lang_option] + ' ' + lang.short_name[lang_option] + ' ?' },
            value: { required: lang.unit_value[lang_option] + ' ?' },
            order: { required: lang.order[lang_option] + ' ?', min: lang.minimum[lang_option] + ' ' + lang.digit_1[lang_option] }
        },
    },
    cfgtaxForm: {
        rules: {
            value: { required: true, number: true, min: 0 },
            order: { required: true, min: 1 }
        },
        messages: {
            value: { required: lang.unit_value[lang_option] + ' ?', number: lang.unit_value[lang_option] + ' ?', min: lang.unit_value[lang_option] + ' ?' },
            order: { required: lang.order[lang_option] + ' ?', min: lang.minimum[lang_option] + ' ' + lang.digit_1[lang_option] }
        },
    },
    cfgdiscountForm: {
        rules: {
            value: { required: true, number: true, min: 0 },
            func: { required: true },
            order: { required: true, min: 1 }
        },
        messages: {
            value: { required: lang.unit_value[lang_option] + ' ?', number: lang.unit_value[lang_option] + ' ?', min: lang.unit_value[lang_option] + ' ?' },
            func: { required: lang.func[lang_option] + ' ?', },
            order: { required: lang.order[lang_option] + ' ?', min: lang.minimum[lang_option] + ' ' + lang.digit_1[lang_option] }
        },
    },
    cfgserviceForm: {
        rules: {
            name_en: { required: true },
            name_bn: { required: true },
            charge: { required: true },
            order: { required: true, min: 1 }
        },
        messages: {
            name_en: { required: lang.english[lang_option] + ' ' + lang.name[lang_option] + ' ?' },
            name_bn: { required: lang.bangla[lang_option] + ' ' + lang.name[lang_option] + ' ?' },
            value: { required: lang.unit_value[lang_option] + ' ?' },
            order: { required: lang.order[lang_option] + ' ?', min: lang.minimum[lang_option] + ' ' + lang.digit_1[lang_option] }
        },
    },
    paymentForm: {
        rules: {
            name_en: { required: true },
            name_bn: { required: true },
            fee: { required: true, min: 0 },
            order: { required: true, min: 1 }
        },
        messages: {
            name_en: { required: lang.english[lang_option] + ' ' + lang.name[lang_option] + ' ?' },
            name_bn: { required: lang.bangla[lang_option] + ' ' + lang.name[lang_option] + ' ?' },
            fee: { required: lang.fee[lang_option] + ' ?' },
            order: { required: lang.order[lang_option] + ' ?', min: lang.minimum[lang_option] + ' ' + lang.digit_1[lang_option] }
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
            code: { required: lang.code[lang_option] + ' ?' },
            amount: { required: lang.amount[lang_option] + ' ?', number: lang.amount[lang_option] + ' ?' },
            payment: { required: lang.payment[lang_option] + ' ?' },
            source: { required: lang.cash_destination_source[lang_option] + ' ?' },
            name: { required: lang.name[lang_option] + ' ?' },
            phone: { required: lang.phone[lang_option] + ' ?', phone: lang.phone[lang_option] + ' ?' },
            start: { required: lang.validity_start_date[lang_option] + ' ?' },
            end: { required: lang.validity_end_date[lang_option] + ' ?' },
        },
    },
    addcountryForm: {
        rules: {
            name_en: { required: true },
            name_bn: { required: true },
            order: { required: true, min: 1 }
        },
        messages: {
            name_en: { required: lang.english[lang_option] + ' ' + lang.name[lang_option] + ' ?' },
            name_bn: { required: lang.bangla[lang_option] + ' ' + lang.name[lang_option] + ' ?' },
            order: { required: lang.order[lang_option] + ' ?', min: lang.minimum[lang_option] + ' ' + lang.digit_1[lang_option] }
        },
    },
    addregionForm: {
        rules: {
            name_en: { required: true },
            name_bn: { required: true },
            order: { required: true, min: 1 }

        },
        messages: {
            name_en: { required: lang.english[lang_option] + ' ' + lang.name[lang_option] + ' ?' },
            name_bn: { required: lang.bangla[lang_option] + ' ' + lang.name[lang_option] + ' ?' },
            order: { required: lang.order[lang_option] + ' ?', min: lang.minimum[lang_option] + ' ' + lang.digit_1[lang_option] }
        },
    },
    addcityForm: {
        rules: {
            name_en: { required: true },
            name_bn: { required: true },
            order: { required: true, min: 1 }
        },
        messages: {
            name_en: { required: lang.english[lang_option] + ' ' + lang.name[lang_option] + ' ?' },
            name_bn: { required: lang.bangla[lang_option] + ' ' + lang.name[lang_option] + ' ?' },
            order: { required: lang.order[lang_option] + ' ?', min: lang.minimum[lang_option] + ' ' + lang.digit_1[lang_option] }
        },
    },
    addareaForm: {
        rules: {
            name_en: { required: true },
            name_bn: { required: true },
            order: { required: true, min: 1 }
        },
        messages: {
            name_en: { required: lang.english[lang_option] + ' ' + lang.name[lang_option] + ' ?' },
            name_bn: { required: lang.bangla[lang_option] + ' ' + lang.name[lang_option] + ' ?' },
            order: { required: lang.order[lang_option] + ' ?', min: lang.minimum[lang_option] + ' ' + lang.digit_1[lang_option] }
        },
    },
    addzipForm: {
        rules: {
            name_en: { required: true },
            name_bn: { required: true },
            order: { required: true, min: 1 }
        },
        messages: {
            name_en: { required: lang.english[lang_option] + ' ' + lang.name[lang_option] + ' ?' },
            name_bn: { required: lang.bangla[lang_option] + ' ' + lang.name[lang_option] + ' ?' },
            order: { required: lang.order[lang_option] + ' ?', min: lang.minimum[lang_option] + ' ' + lang.digit_1[lang_option] }
        },
    },
    addstreetForm: {
        rules: {
            name_en: { required: true },
            name_bn: { required: true },
            order: { required: true, min: 1 }
        },
        messages: {
            name_en: { required: lang.english[lang_option] + ' ' + lang.name[lang_option] + ' ?' },
            name_bn: { required: lang.bangla[lang_option] + ' ' + lang.name[lang_option] + ' ?' },
            order: { required: lang.order[lang_option] + ' ?', min: lang.minimum[lang_option] + ' ' + lang.digit_1[lang_option] }
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
            city_id: { required: lang.city[lang_option] + ' ?' },
            area_id: { required: lang.area[lang_option] + ' ?' },
            zip_id: { required: lang.zip[lang_option] + ' ?' },
            base: { required: lang.minimum_order[lang_option] + ' ?' },
            charge: { required: lang.charge[lang_option] + ' ?' }
        },
    },
    cfgdelplanDefaultChargeForm: {
        rules: { delivery_charge: { required: true, number: true, min: 0 } },
        messages: { delivery_charge: { required: lang.default_delivery_charge[lang_option] + ' ?', min: lang.minimum[lang_option] + ' ' + lang.digit_0[lang_option] } }
    },
    prodbaseForm: {
        rules: {
            name_en: { required: true },
            name_bn: { required: true },
            order: { required: true, min: 1 },
            ip: { is_valid_ip: true }
        },
        messages: {
            name_en: { required: lang.english[lang_option] + ' ' + lang.name[lang_option] + ' ?' },
            name_bn: { required: lang.bangla[lang_option] + ' ' + lang.name[lang_option] + ' ?' },
            order: { required: lang.order[lang_option] + ' ?', min: lang.minimum[lang_option] + ' ' + lang.digit_1[lang_option] },
            ip: { is_valid_ip: lang.ip[lang_option] + ' ?' },
        },
    },
    prodcatForm: {
        rules: {
            name_en: { required: true },
            name_bn: { required: true },
            order: { required: true, min: 1 },
            base_id: { required: true },
            tax_id: { required: true },
            discount_id: { required: true },
        },
        messages: {
            name_en: { required: lang.english[lang_option] + ' ' + lang.name[lang_option] + ' ?' },
            name_bn: { required: lang.bangla[lang_option] + ' ' + lang.name[lang_option] + ' ?' },
            order: { required: lang.order[lang_option] + ' ?', min: lang.minimum[lang_option] + ' ' + lang.digit_1[lang_option] },
            base_id: { required: lang.base[lang_option] + ' ?' },
            tax_id: { required: lang.tax[lang_option] + ' ?' },
            discount_id: { required: lang.discount[lang_option] + ' ?' },
        },
    },
    prodcourseForm: {
        rules: {
            name_en: { required: true },
            name_bn: { required: true },
            order: { required: true, min: 1 },

        },
        messages: {
            name_en: { required: lang.english[lang_option] + ' ' + lang.name[lang_option] + ' ?' },
            name_bn: { required: lang.bangla[lang_option] + ' ' + lang.name[lang_option] + ' ?' },
            order: { required: lang.order[lang_option] + ' ?', min: lang.minimum[lang_option] + ' ' + lang.digit_1[lang_option] },
        },
    },
    prodtimingForm: {
        rules: {
            name_en: { required: true },
            name_bn: { required: true },
            order: { required: true, min: 1 },
            time_start: { required: true },
            time_end: { required: true },
        },
        messages: {
            name_en: { required: lang.english[lang_option] + ' ' + lang.name[lang_option] + ' ?' },
            name_bn: { required: lang.bangla[lang_option] + ' ' + lang.name[lang_option] + ' ?' },
            order: { required: lang.order[lang_option] + ' ?', min: lang.minimum[lang_option] + ' ' + lang.digit_1[lang_option] },
            time_start: { required: lang.time_start[lang_option] + ' ?' },
            time_end: { required: lang.time_end[lang_option] + ' ?' },
        },
    },
    proditemForm: {
        rules: {
            supplier_id: { required: true },
            name_en: { required: true },
            name_bn: { required: true },
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
            supplier_id: { required: lang.select[lang_option] + ' ' + lang.supplier[lang_option] },
            name_en: { required: lang.english[lang_option] + ' ' + lang.name[lang_option] + ' ?' },
            name_bn: { required: lang.bangla[lang_option] + ' ' + lang.name[lang_option] + ' ?' },
            order: { required: lang.order[lang_option] + ' ?', min: lang.minimum[lang_option] + ' ' + lang.digit_1[lang_option] },
            base_price: { required: lang.base[lang_option] + ' ' + lang.price[lang_option] + ' ?', number: lang.only_number_allowed[lang_option], min: lang.minimum[lang_option] + ' ' + lang.digit_0[lang_option] },
            in_price: { number: lang.only_number_allowed[lang_option], min: lang.minimum[lang_option] + ' ' + lang.digit_0[lang_option] },
            out_price: { number: lang.only_number_allowed[lang_option], min: lang.minimum[lang_option] + ' ' + lang.digit_0[lang_option] },
            unit_id: { required: lang.scale_unit[lang_option] },
            unit_id: { required: lang.scale_unit[lang_option] },
            tax_id: { required: lang.scale_unit[lang_option] + " ?" },
            tax_by: { required: lang.tax_by[lang_option] + " ?" },
            discount_id: { required: lang.discount[lang_option] + " ?" },
            discount_by: { required: lang.discount_by[lang_option] + " ?" },
            role: { required: lang.role[lang_option] + " ?" },
            has_top: { required: lang.offer_topping[lang_option] + " ?" },
        },
    },
    prodoptionForm: {
        rules: {
            supplier_id: { required: true },
            name_en: { required: true },
            name_bn: { required: true },
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
            supplier_id: { required: lang.select[lang_option] + ' ' + lang.supplier[lang_option] },
            name_en: { required: lang.english[lang_option] + ' ' + lang.name[lang_option] + ' ?' },
            name_bn: { required: lang.bangla[lang_option] + ' ' + lang.name[lang_option] + ' ?' },
            order: { required: lang.order[lang_option] + ' ?', min: lang.minimum[lang_option] + ' ' + lang.digit_1[lang_option] },
            base_price: { required: lang.base[lang_option] + ' ' + lang.price[lang_option] + ' ?', number: lang.only_number_allowed[lang_option], min: lang.minimum[lang_option] + ' ' + lang.digit_0[lang_option] },
            in_price: { number: lang.only_number_allowed[lang_option], min: lang.minimum[lang_option] + ' ' + lang.digit_0[lang_option] },
            out_price: { number: lang.only_number_allowed[lang_option], min: lang.minimum[lang_option] + ' ' + lang.digit_0[lang_option] },
            unit_id: { required: lang.scale_unit[lang_option] },
            tax_id: { required: lang.scale_unit[lang_option] + " ?" },
            tax_by: { required: lang.tax_by[lang_option] + " ?" },
            discount_id: { required: lang.discount[lang_option] + " ?" },
            discount_by: { required: lang.discount_by[lang_option] + " ?" },
            role: { required: lang.role[lang_option] + " ?" },
            has_top: { required: lang.offer_topping[lang_option] + " ?" },
        },
    },
    prodtopForm: {
        rules: {
            name_en: { required: true },
            name_bn: { required: true },
            unit_id: { required: true },
            order: { required: true, min: 1 },
            base_price: { required: true, min: 0, number: true },
            in_price: { min: 0, number: true },
            out_price: { min: 0, number: true },
        },
        messages: {
            name_en: { required: lang.english[lang_option] + ' ' + lang.name[lang_option] + ' ?' },
            name_bn: { required: lang.bangla[lang_option] + ' ' + lang.name[lang_option] + ' ?' },
            unit_id: { required: lang.scale_unit[lang_option] },
            order: { required: lang.order[lang_option] + ' ?', min: lang.minimum[lang_option] + ' ' + lang.digit_1[lang_option] },
            base_price: { required: lang.base[lang_option] + ' ' + lang.price[lang_option] + ' ?', number: lang.only_number_allowed[lang_option], min: lang.minimum[lang_option] + ' ' + lang.digit_0[lang_option] },
            in_price: { number: lang.only_number_allowed[lang_option], min: lang.minimum[lang_option] + ' ' + lang.digit_0[lang_option] },
            out_price: { number: lang.only_number_allowed[lang_option], min: lang.minimum[lang_option] + ' ' + lang.digit_0[lang_option] },
        },
    },
    prodmodForm: {
        rules: {
            name_en: { required: true },
            name_bn: { required: true },
            order: { required: true, min: 1 },
            base_price: { required: true, min: 0, number: true },
        },
        messages: {
            name_en: { required: lang.english[lang_option] + ' ' + lang.name[lang_option] + ' ?' },
            name_bn: { required: lang.bangla[lang_option] + ' ' + lang.name[lang_option] + ' ?' },
            order: { required: lang.order[lang_option] + ' ?', min: lang.minimum[lang_option] + ' ' + lang.digit_1[lang_option] },
            base_price: { required: lang.base[lang_option] + ' ' + lang.price[lang_option] + ' ?', number: lang.only_number_allowed[lang_option], min: lang.minimum[lang_option] + ' ' + lang.digit_0[lang_option] },
        },
    },

    prodcustsetForm: {
        rules: {
            name_en: { required: true },
            name_bn: { required: true },
            level: { required: true, min: 1, max: 9 },
            source: { required: true },
            min: { required: true, min: 0 },
            max: { required: true, min: 0 },
        },
        messages: {
            name_en: { required: lang.set[lang_option] + ' ' + lang.english[lang_option] + ' ' + lang.name[lang_option] + ' ?' },
            name_bn: { required: lang.set[lang_option] + ' ' + lang.bangla[lang_option] + ' ' + lang.name[lang_option] + ' ?' },
            level: { required: lang.level[lang_option] + ' ?', min: lang.minimum[lang_option] + ' ' + lang.digit_1[lang_option], max: lang.maximum[lang_option] + ' ' + lang.digit_9[lang_option] },
            source: { required: lang.source[lang_option] + ' ?' },
            min: { required: lang.minimum[lang_option] + ' ' + lang.number[lang_option] + ' ?', min: lang.minimum[lang_option] + ' ' + lang.digit_0[lang_option] },
            max: { required: lang.maximum[lang_option] + ' ' + lang.number[lang_option] + ' ?', min: lang.minimum[lang_option] + ' ' + lang.digit_0[lang_option] },
        },
    },

    quickeditshortcodeForm: {
        rules: { shortcode: { required: true, number: true, min: 1 } },
        messages: { shortcode: { required: lang.shortcode[lang_option] + ' ?', number: lang.number[lang_option] + ' ?', min: lang.digit_1[lang_option] + ' ?' } },
    },
    quickeditbarcodeForm: {
        rules: { barcode: { required: true } },
        messages: { barcode: { required: lang.barcode[lang_option] + ' ?' } },
    },
    quickedittaxForm: {
        rules: { tax_id: { required: true }, tax_by: { required: true }, },
        messages: { tax_id: { required: lang.tax[lang_option] + ' ?' }, tax_by: { required: lang.tax_by[lang_option] + ' ?' } },
    },
    quickeditdiscountForm: {
        rules: { discount_id: { required: true }, discount_by: { required: true }, },
        messages: { discount_id: { required: lang.discount[lang_option] + ' ?' }, discount_by: { required: lang.discount_by[lang_option] + ' ?' } },
    },
    stocklocationForm: {
        rules: { name_en: { required: true }, name_bn: { required: true } },
        messages: { name_en: { required: lang.location[lang_option] + ' ' + lang.english[lang_option] + ' ' + lang.name[lang_option] + ' ?' }, name_bn: { required: lang.location[lang_option] + ' ' + lang.bangla[lang_option] + ' ' + lang.name[lang_option] + ' ?' }, },
    },
    stockentryForm: {
        rules: { quantity: { required: true, min: 0.1, number: true } },
        messages: { quantity: { required: lang.quantity[lang_option] + ' ?', number: lang.only_number_allowed[lang_option] } }
    },
    stockmanageForm: {
        rules: {
            maintain_stock: { required: true },
            warn_below_qty: { required: true, number: true },
            stop_sale_qty: { required: true, number: true }
        },
        messages: {
            maintain_stock: { required: lang.manage[lang_option] + ' ?' },
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
            min_order: { required: lang.amount[lang_option] + ' ?', number: lang.amount[lang_option] + ' ?' },
            discount_id: { required: lang.discount[lang_option] + ' ?' },
            date_start: { required: lang.validity_start_date[lang_option] + ' ?' },
            date_end: { required: lang.validity_end_date[lang_option] + ' ?' },
            time_start: { required: lang.time_start[lang_option] + ' ?' },
            time_end: { required: lang.time_end[lang_option] + ' ?' },
            order: { required: lang.order[lang_option] + ' ?', min: lang.minimum[lang_option] + ' ' + lang.digit_1[lang_option] }
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
            promo_code: { required: lang.code[lang_option] + ' ?' },
            min_order: { required: lang.amount[lang_option] + ' ?', number: lang.amount[lang_option] + ' ?' },
            discount_id: { required: lang.discount[lang_option] + ' ?' },
            date_start: { required: lang.validity_start_date[lang_option] + ' ?' },
            date_end: { required: lang.validity_end_date[lang_option] + ' ?' },
            time_start: { required: lang.time_start[lang_option] + ' ?' },
            time_end: { required: lang.time_end[lang_option] + ' ?' },
            order: { required: lang.order[lang_option] + ' ?', min: lang.minimum[lang_option] + ' ' + lang.digit_1[lang_option] },
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
            name_id: { required: lang.name[lang_option] + ' ?' },
            buy: { required: lang.buy[lang_option] + ' ?', number: lang.amount[lang_option] + ' ?' },
            get: { required: lang.get[lang_option] + ' ?' },
            date_start: { required: lang.validity_start_date[lang_option] + ' ?' },
            date_end: { required: lang.validity_end_date[lang_option] + ' ?' },
            time_start: { required: lang.time_start[lang_option] + ' ?' },
            time_end: { required: lang.time_end[lang_option] + ' ?' },
            order: { required: lang.order[lang_option] + ' ?', min: lang.minimum[lang_option] + ' ' + lang.digit_1[lang_option] }
        },
    },
    prodfreeplanForm: {
        rules: {
            name_en: { required: true },
            name_bn: { required: true },
            min_order: { required: true, number: true, min: 1 },
            quantity: { required: true, number: true, min: 0 },
            date_start: { required: true },
            date_end: { required: true },
            time_start: { required: true },
            time_end: { required: true },
            order: { required: true, number: true, min: 1 }
        },
        messages: {
            name_en: { required: lang.plan[lang_option] + ' ' + lang.english[lang_option] + ' ' + lang.name[lang_option] + ' ?' },
            name_bn: { required: lang.plan[lang_option] + ' ' + lang.bangla[lang_option] + ' ' + lang.name[lang_option] + ' ?' },
            min_order: { required: lang.amount[lang_option] + ' ?', number: lang.only_number_allowed[lang_option], min: lang.minimum[lang_option] + ' ' + lang.digit_1[lang_option] },
            quantity: { required: lang.number[lang_option] + ' ?', number: lang.only_number_allowed[lang_option], min: lang.minimum[lang_option] + ' ' + lang.digit_1[lang_option] },
            date_start: { required: lang.validity_start_date[lang_option] + ' ?' },
            date_end: { required: lang.validity_end_date[lang_option] + ' ?' },
            time_start: { required: lang.time_start[lang_option] + ' ?' },
            time_end: { required: lang.time_end[lang_option] + ' ?' },
            order: { required: lang.order[lang_option] + ' ?', min: lang.minimum[lang_option] + ' ' + lang.digit_1[lang_option] },
        },
    },
    userhubForm: {
        rules: {
            name_en: { required: true },
            name_bn: { required: true },
            order: { required: true, number: true, min: 1 }
        },
        messages: {
            name_en: { required: lang.english[lang_option] + ' ' + lang.name[lang_option] + ' ?' },
            name_bn: { required: lang.bangla[lang_option] + ' ' + lang.name[lang_option] + ' ?' },
            order: { required: lang.order[lang_option] + ' ?', min: lang.minimum[lang_option] + ' ' + lang.digit_1[lang_option] },
        },
    },
    userForm: {
        rules: {
            name_en: { required: true },
            name_bn: { required: true },
            phone: { required: true, phone: true },
            email: { required: true },
            hub_id: { required: true },
            role: { required: true },
            username: { required: true },
            password: { required: function() { return $('#userInEdit').length > 0 ? false : true } },
            order: { required: true, number: true, min: 1 }
        },
        messages: {
            name_en: { required: lang.english[lang_option] + ' ' + lang.name[lang_option] + ' ?' },
            name_bn: { required: lang.bangla[lang_option] + ' ' + lang.name[lang_option] + ' ?' },
            phone: { required: lang.phone[lang_option] + ' ?' },
            email: { required: lang.email[lang_option] + ' ?' },
            hub_id: { required: lang.hub[lang_option] + ' ?' },
            role: { required: lang.role[lang_option] + ' ?' },
            username: { required: lang.username[lang_option] + ' ?' },
            password: { required: lang.password[lang_option] + ' ?' },
            order: { required: lang.order[lang_option] + ' ?', min: lang.minimum[lang_option] + ' ' + lang.digit_1[lang_option] },
        },
    },

    customerForm: {
        rules: {
            name_en: { required: true },
            phone: { required: true, phone: true },
            email: { email: true }
        },
        messages: {
            name_en: { required: lang.name[lang_option] + ' ?' },
            phone: { required: lang.phone[lang_option] + ' ?', phone: lang.phone[lang_option] + ' ?' },
            email: { email: lang.email[lang_option] + ' ?' }
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
            city_id: { required: lang.city[lang_option] + ' ?' },
            area_id: { required: lang.area[lang_option] + ' ?' },
            zip_id: { required: lang.zip[lang_option] + ' ?' },
            street_id: { required: lang.street_address[lang_option] + ' ?' },
            house_en: { required: lang.english[lang_option] + ' ' + lang.house_number[lang_option] + ' ?' },
            house_bn: { required: lang.bangla[lang_option] + ' ' + lang.house_number[lang_option] + ' ?' },
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
            customer_id: { required: lang.customer[lang_option] + ' ?' },
            amount: { required: lang.amount[lang_option] + ' ?', min: lang.amount[lang_option] + ' ?', number: lang.salary[lang_option] + ' ?' },
            closed_on: { required: lang.date[lang_option] + ' ?' },
            date_from: { required: lang.date_from[lang_option] + ' ?' },
            date_end: { required: lang.date_to[lang_option] + ' ?' },
            payment: { required: lang.payment[lang_option] + ' ' + lang.type[lang_option] + ' ?', valueNotEquals: lang.payment[lang_option] + ' ' + lang.type[lang_option] + ' ?' },
            source: { required: lang.source[lang_option] + ' ?', valueNotEquals: lang.source[lang_option] + ' ?' }
        },
    },
    reportcustomerdueFilterForm: {
        rules: {
            customer_id: { required: true },
            date_from: { required: true },
            date_to: { required: true }
        },
        messages: {
            customer_id: { required: lang.customer[lang_option] + ' ?' },
            date_from: { required: lang.date_from[lang_option] + ' ?' },
            date_to: { required: lang.date_to[lang_option] + ' ?' }
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
            name_en: { required: lang.english[lang_option] + ' ' + lang.name[lang_option] + ' ?' },
            address_en: { required: lang.english[lang_option] + ' ' + lang.address[lang_option] + ' ?' },
            phone: { required: lang.phone[lang_option] + ' ?', phone: lang.phone[lang_option] + ' ?' },
            email: { email: lang.email[lang_option] + ' ?' }
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
            supplier_id: { required: lang.customer[lang_option] + ' ?' },
            amount: { required: lang.amount[lang_option] + ' ?', min: lang.amount[lang_option] + ' ?', number: lang.salary[lang_option] + ' ?' },
            closed_on: { required: lang.date[lang_option] + ' ?' },
            date_from: { required: lang.date_from[lang_option] + ' ?' },
            date_end: { required: lang.date_to[lang_option] + ' ?' },
            payment: { required: lang.payment[lang_option] + ' ' + lang.type[lang_option] + ' ?', valueNotEquals: lang.payment[lang_option] + ' ' + lang.type[lang_option] + ' ?' },
            source: { required: lang.source[lang_option] + ' ?', valueNotEquals: lang.source[lang_option] + ' ?' }
        },
    },
    reportsupplierdueFilterForm: {
        rules: {
            supplier_id: { required: true },
            date_from: { required: true },
            date_to: { required: true }
        },
        messages: {
            supplier_id: { required: lang.supplier[lang_option] + ' ?' },
            date_from: { required: lang.date_from[lang_option] + ' ?' },
            date_to: { required: lang.date_to[lang_option] + ' ?' }
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
            name_en: { required: lang.english[lang_option] + ' ' + lang.name[lang_option] + ' ?' },
            address_en: { required: lang.english[lang_option] + ' ' + lang.address[lang_option] + ' ?' },
            phone: { required: lang.phone[lang_option] + ' ?', phone: lang.phone[lang_option] + ' ?' },
            email: { email: lang.email[lang_option] + ' ?' },
            post: { required: lang.post[lang_option] + ' ?' },
            salary: { required: lang.salary[lang_option] + ' ?', min: lang.salary[lang_option] + ' ?', number: lang.amount[lang_option] + ' ?' }
        },
    },
    empattendanceForm: {
        rules: {
            emp_id: { required: true },
            date: { required: true },
            in_time: { required: true }
        },
        messages: {
            emp_id: { required: lang.employee[lang_option] + ' ?' },
            date: { required: lang.date[lang_option] + ' ?' },
            in_time: { required: lang.in_time[lang_option] + ' ?' }
        },
    },
    attendanceFilterForm: {
        rules: {
            date_from: { required: true },
            date_to: { required: true }
        },
        messages: {
            date_from: { required: lang.date_from[lang_option] + ' ?' },
            date_to: { required: lang.date_to[lang_option] + ' ?' }
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
            emp_id: { required: lang.employee[lang_option] + ' ?' },
            salary: { required: lang.salary[lang_option] + ' ?', min: lang.salary[lang_option] + ' ?', number: lang.salary[lang_option] + ' ?' },
            closed_on: { required: lang.date[lang_option] + ' ?' },
            date_from: { required: lang.date_from[lang_option] + ' ?' },
            date_end: { required: lang.date_to[lang_option] + ' ?' },
            payment: { required: lang.payment[lang_option] + ' ' + lang.type[lang_option] + ' ?', valueNotEquals: lang.payment[lang_option] + ' ' + lang.type[lang_option] + ' ?' },
            source: { required: lang.source[lang_option] + ' ?', valueNotEquals: lang.source[lang_option] + ' ?' }
        },
    },
    empsalaryFilterForm: {
        rules: {
            employee_id: { required: true },
            date_from: { required: true },
            date_to: { required: true },
        },
        messages: {
            employee_id: { required: lang.employee[lang_option] + ' ?' },
            date_from: { required: lang.date_from[lang_option] + ' ?' },
            date_to: { required: lang.date_to[lang_option] + ' ?' },
        },
    },

    reportFilterForm: {
        rules: {
            date_from: { required: true },
            date_to: { required: true },
        },
        messages: {
            date_from: { required: lang.date_from[lang_option] + ' ?' },
            date_to: { required: lang.date_to[lang_option] + ' ?' },
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
            sector_id: { required: lang.sector[lang_option] + ' ?' },
            amount: { required: lang.amount[lang_option] + ' ?', min: lang.amount[lang_option] + ' ?', number: lang.amount[lang_option] + ' ?' },
            closed_on: { required: lang.date[lang_option] + ' ?' },
            payment: { required: lang.payment[lang_option] + ' ' + lang.type[lang_option] + ' ?', valueNotEquals: lang.payment[lang_option] + ' ' + lang.type[lang_option] + ' ?' },
            source: { required: lang.source[lang_option] + ' ?', valueNotEquals: lang.source[lang_option] + ' ?' }
        },
    },
    reportincomeFilterForm: {
        rules: {
            date_from: { required: true },
            date_to: { required: true },
        },
        messages: {
            date_from: { required: lang.date_from[lang_option] + ' ?' },
            date_to: { required: lang.date_to[lang_option] + ' ?' },
        },
    },
    reportincomesectorForm: {
        rules: {
            name_en: { required: true },
            name_bn: { required: true },
            order: { required: true, number: true, min: 1 }
        },
        messages: {
            name_en: { required: lang.english[lang_option] + ' ' + lang.name[lang_option] + ' ?' },
            name_bn: { required: lang.bangla[lang_option] + ' ' + lang.name[lang_option] + ' ?' },
            order: { required: lang.order[lang_option] + ' ?', min: lang.minimum[lang_option] + ' ' + lang.digit_1[lang_option] },
        },
    },
    reportincomesectorFilterForm: {
        rules: {
            date_from: { required: true },
            date_to: { required: true },
        },
        messages: {
            date_from: { required: lang.date_from[lang_option] + ' ?' },
            date_to: { required: lang.date_to[lang_option] + ' ?' },
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
            sector_id: { required: lang.sector[lang_option] + ' ?' },
            amount: { required: lang.amount[lang_option] + ' ?', min: lang.amount[lang_option] + ' ?', number: lang.amount[lang_option] + ' ?' },
            closed_on: { required: lang.date[lang_option] + ' ?' },
            payment: { required: lang.payment[lang_option] + ' ' + lang.type[lang_option] + ' ?', valueNotEquals: lang.payment[lang_option] + ' ' + lang.type[lang_option] + ' ?' },
            source: { required: lang.source[lang_option] + ' ?', valueNotEquals: lang.source[lang_option] + ' ?' }
        },
    },
    reportexpenseFilterForm: {
        rules: {
            date_from: { required: true },
            date_to: { required: true },
        },
        messages: {
            date_from: { required: lang.date_from[lang_option] + ' ?' },
            date_to: { required: lang.date_to[lang_option] + ' ?' },
        },
    },
    reportexpensesectorForm: {
        rules: {
            name_en: { required: true },
            name_bn: { required: true },
            order: { required: true, number: true, min: 1 }
        },
        messages: {
            name_en: { required: lang.english[lang_option] + ' ' + lang.name[lang_option] + ' ?' },
            name_bn: { required: lang.bangla[lang_option] + ' ' + lang.name[lang_option] + ' ?' },
            order: { required: lang.order[lang_option] + ' ?', min: lang.minimum[lang_option] + ' ' + lang.digit_1[lang_option] },
        },
    },
    reportexpensesectorFilterForm: {
        rules: {
            date_from: { required: true },
            date_to: { required: true },
        },
        messages: {
            date_from: { required: lang.date_from[lang_option] + ' ?' },
            date_to: { required: lang.date_to[lang_option] + ' ?' },
        },
    },

    phoneseachForm: {
        rules: { phone: { required: true, phone: true } },
        messages: { phone: { required: lang.phone[lang_option] + ' ?', phone: lang.phone[lang_option] + ' ?' } }
    },
    tableForm: {
        rules: {
            name: { required: true },
            guest: { required: true, number: true, min: 1 }
        },
        messages: {
            name: { required: lang.table[lang_option] + ' ' + lang.Number[lang_option] + ' ?' },
            guest: {
                required: lang.guest[lang_option] + ' ' + lang.number[lang_option] + ' ?',
                number: lang.guest[lang_option] + ' ' + lang.number[lang_option] + ' ?',
                min: lang.guest[lang_option] + ' ' + lang.number[lang_option] + ' ?',
            },
        }
    },
    waitingForm: {
        rules: {
            name: { required: true },
            phone: { phone: true }
        },
        messages: {
            name: { required: lang.customer[lang_option] + ' ' + lang.name[lang_option] + ' ?' },
            phone: { phone: lang.phone[lang_option] + ' ?' }
        }
    },
    collectionForm: {
        rules: {
            name: { required: true },
            phone: { phone: true }
        },
        messages: {
            name: { required: lang.customer[lang_option] + ' ' + lang.name[lang_option] + ' ?' },
            phone: { phone: lang.phone[lang_option] + ' ?' }
        }
    },
    barForm: {
        rules: {
            name: { required: true },
            phone: { phone: true }
        },
        messages: {
            name: { required: lang.customer[lang_option] + ' ' + lang.name[lang_option] + ' ?' },
            phone: { phone: lang.phone[lang_option] + ' ?' }
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
            name: { required: lang.customer[lang_option] + ' ' + lang.name[lang_option] + ' ?' },
            phone: { required: lang.phone[lang_option] + ' ?', phone: lang.phone[lang_option] + ' ?' },
            area: { required: lang.area[lang_option] + ' ?' },
            zip: { required: lang.block[lang_option] + ' ?' },
            street: { required: lang.road[lang_option] + ' ?' },
            house: { required: lang.house_number[lang_option] + ' ?' },
            delivery_time: { required: lang.delay[lang_option] + ' ?' }
        }
    },
    saleCustomItemForm: {
        rules: {
            name: { required: true },
            base_price: { required: true, min: 0, number: true },
            qty: { required: true, min: 0, number: true },
        },
        messages: {
            name: { required: lang.name[lang_option] + ' ?' },
            base_price: { required: lang.price[lang_option] + ' ?', number: lang.only_number_allowed[lang_option], min: lang.minimum[lang_option] + ' ' + lang.digit_0[lang_option] },
            qty: { required: lang.quantity[lang_option] + ' ?', number: lang.only_number_allowed[lang_option], min: lang.minimum[lang_option] + ' ' + lang.digit_1[lang_option] },
        }
    },
    saleHelperForm: {
        rules: {
            value: { required: true, number: true, min: 0 },
            func: { required: true },
            auth_code: { required: true }
        },
        messages: {
            value: { required: lang.value[lang_option] + ' ?', number: lang.value[lang_option] + ' ?', min: lang.value[lang_option] + ' ?', },
            func: { required: lang.func[lang_option] + ' ?' },
            auth_code: { required: lang.auth_code[lang_option] + ' ?' },
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
            actionHeight: { required: lang.value[lang_option] + ' ?', number: lang.value[lang_option] + ' ?', min: lang.value[lang_option] + ' ?' },
            actionPadding: { required: lang.value[lang_option] + ' ?', number: lang.value[lang_option] + ' ?', min: lang.value[lang_option] + ' ?' },
            categoryHeight: { required: lang.value[lang_option] + ' ?', number: lang.value[lang_option] + ' ?', min: lang.value[lang_option] + ' ?' },
            categoryPadding: { required: lang.value[lang_option] + ' ?', number: lang.value[lang_option] + ' ?', min: lang.value[lang_option] + ' ?' },
            cartheight: { required: lang.value[lang_option] + ' ?', number: lang.value[lang_option] + ' ?', min: lang.value[lang_option] + ' ?' },
            itemHeight: { required: lang.value[lang_option] + ' ?', number: lang.value[lang_option] + ' ?', min: lang.value[lang_option] + ' ?' },
            itemPadding: { required: lang.value[lang_option] + ' ?', number: lang.value[lang_option] + ' ?', min: lang.value[lang_option] + ' ?' },
            defaultCartHeight: { required: lang.value[lang_option] + ' ?', number: lang.value[lang_option] + ' ?', min: lang.value[lang_option] + ' ?' },
            optionalCartHeight: { required: lang.value[lang_option] + ' ?', number: lang.value[lang_option] + ' ?', min: lang.value[lang_option] + ' ?' },
            calculationHeight: { required: lang.value[lang_option] + ' ?', number: lang.value[lang_option] + ' ?', min: lang.value[lang_option] + ' ?' },
            fontsize: { required: lang.value[lang_option] + ' ?', number: lang.value[lang_option] + ' ?', min: lang.value[lang_option] + ' ?' },
            pagi_category: { required: lang.value[lang_option] + ' ?', number: lang.value[lang_option] + ' ?', min: lang.value[lang_option] + ' ?' },
            pagi_item: { required: lang.value[lang_option] + ' ?', number: lang.value[lang_option] + ' ?', min: lang.value[lang_option] + ' ?' },
            cartSide: { required: lang.cart[lang_option] + ' ' + lang.position[lang_option] + ' ?' },
        }
    },
    kitchentext: {
        rules: { value: { required: true }, },
        messages: { value: { required: lang.kitchen[lang_option] + ' ' + lang.text[lang_option] + ' ?' }, }
    },
    payandcloseForm: {
        rules: { phone: { required: true, phone: true }, code: { required: true }, },
        messages: { phone: { required: lang.customer[lang_option] + ' ' + lang.phone[lang_option] + ' ?', phone: lang.phone[lang_option] + ' ?' }, code: { required: lang.code[lang_option] + ' ?' }, }
    },
    commonNumpadPopupForm: {
        rules: { popupField: { required: true, number: true, min: 0 } },
        messages: { popupField: { required: lang.value[lang_option] + ' ?', number: lang.value[lang_option], min: lang.value[lang_option] } }
    },
    purchaseSupplierForm: {
        rules: { supplier_id: { required: true }, },
        messages: { supplier_id: { required: lang.select[lang_option] + ' ' + lang.supplier[lang_option] } }
    },
    bluetoothPrinter: {
        rules: {
            bill_printer: { required: true },
            sent_printer: { required: true },
        },
        messages: {
            value: { required: lang.bill[lang_option] + ' ' + lang.printer[lang_option] + ' ?' },
            value: { required: lang.kitchen[lang_option] + ' ' + lang.printer[lang_option] + ' ?' },
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
            title_en: { required: lang.title[lang_option] + ' ?' },
            subtitle_en: { required: lang.subtitle[lang_option] + ' ?' },
            desc_en: { required: lang.description[lang_option] + ' ?' },
            meta_keys_en: { required: lang.meta_key[lang_option] + ' ?' },
            meta_desc_en: { required: lang.meta_desc[lang_option] + ' ?' },
            title_bn: { required: lang.title[lang_option] + ' ?' },
            subtitle_bn: { required: lang.subtitle[lang_option] + ' ?' },
            desc_bn: { required: lang.description[lang_option] + ' ?' },
            meta_keys_bn: { required: lang.meta_key[lang_option] + ' ?' },
            meta_desc_bn: { required: lang.meta_desc[lang_option] + ' ?' },
        },
    },
    webOpeningsForm: {
        rules: {
            start: { required: true },
            end: { required: true },
        },
        messages: {
            start: { required: lang.time_start[lang_option] + ' ?' },
            end: { required: lang.time_end[lang_option] + ' ?' },
        },
    },
    subscribersForm: {
        rules: {
            type: { required: true },
            message: { required: true },
        },
        messages: {
            type: { required: lang.type[lang_option] + ' ?' },
            message: { required: lang.message[lang_option] + ' ?' },
        },
    },
    applinkForm: {},
    sociallinkForm: {},
}