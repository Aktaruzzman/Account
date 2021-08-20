var Formsetting = {
    loginForm: {
        rules: {
            username: { required: true, username: true },
            password: { required: true },
        },
        messages: {
            username: { required: lang.username[_Lang_] + ' ?' },
            password: { required: lang.password[_Lang_] + ' ?' },
        }
    },
    apiForm: {
        rules: {
            client_id: { required: true, username: true, nowhitespace: true },
        },
        messages: {
            client_id: { required: lang.client[_Lang_] + ' ' + lang.username[_Lang_] + ' ?' },
        }
    },
    clientForm: {
        rules: {
            name: { required: true },
            phone: { required: true, phone: true },
            email: { required: true, email: true },
            app_id: { required: true, username: true },
        },
        messages: {
            name: { required: lang.name[_Lang_] + ' ?' },
            phone: { required: lang.phone[_Lang_] + ' ?', phone: lang.phone[_Lang_] + ' ?' },
            email: { required: lang.email[_Lang_] + ' ?', email: lang.email[_Lang_] + ' ?' },
            app_id: { required: lang.app[_Lang_] + ' ?' },
        },
    },
    shopForm: {
        rules: {
            name: { required: true },
            phone: { required: true, phone: true },
            email: { required: true, email: true },
            base_url: { required: true },
            client_id: { required: true, number: true },
        },
        messages: {
            name: { required: lang.name[_Lang_] + ' ?' },
            phone: { required: lang.phone[_Lang_] + ' ?', phone: lang.phone[_Lang_] + ' ?' },
            email: { required: lang.email[_Lang_] + ' ?', email: lang.email[_Lang_] + ' ?' },
            base_url: { required: lang.base_url[_Lang_] + ' ?' },
            client_id: { required: lang.client[_Lang_] + ' ?', number: lang.client[_Lang_] + ' ?' },
        },
    },
    customerForm: {
        rules: {
            name_en: { required: true },
            phone: { required: true, phone: true },
            email: { email: true }
        },
        messages: {
            name_en: { required: lang.name[_Lang_] + ' ?' },
            phone: { required: lang.phone[_Lang_] + ' ?', phone: lang.phone[_Lang_] + ' ?' },
            email: { email: lang.email[_Lang_] + ' ?' }
        },
    },
    reportFilterForm: {
        rules: {
            date_from: { required: true },
            date_to: { required: true },
        },
        messages: {
            date_from: { required: lang.date_from[_Lang_] + ' ?' },
            date_to: { required: lang.date_to[_Lang_] + ' ?' },
        },
    },
}