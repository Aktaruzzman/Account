define(['axios', 'handlebars'], function(axios, Handlebars) {
    return {
        get: function(url, params) {
            $('.spinning').show();
            return axios.get(url, { params: params ? params : {}, headers: {}, proxy: {} }).then(function(response) {
                $('.spinning').hide();
                return response.data;
            }).catch(function(error) {
                console.log(error.stack || error);
                $('.spinning').hide();
                $('.error-msg').show();
                $('.error-msg').delay(5000).fadeOut('slow');
            });
        },
        post: function(url, data, params) {
            $('.spinning').show();
            return axios.post(url, data, { params: params ? params : {}, headers: {}, proxy: {} }).then(function(response) {
                $('.spinning').hide();
                return response.data;
            }).catch(function(error) {
                console.log(error.stack || error);
                $('.spinning').hide();
                $('.error-msg').show();
                $('.error-msg').delay(5000).fadeOut('slow');
            });
        },
        put: function(url, data, params) {
            $('.spinning').show();
            return axios.put(url, data ? data : {}, { params: params, headers: {}, proxy: {} }).then(function(response) {
                $('.spinning').hide();
                return response.data;
            }).catch(function(error) {
                $('.spinning').hide();
                console.log(error.stack || error);
                $('.error-msg').show();
                $('.error-msg').delay(5000).fadeOut('slow');
            });
        },
        patch: function(url, data, params) {
            $('.spinning').show();
            return axios.patch(url, data ? data : {}, { params: params ? params : {}, headers: {}, proxy: {} }).then(function(response) {
                $('.spinning').hide();
                return response.data;
            }).catch(function(error) {
                $('.spinning').hide();
                console.log(error.stack || error);
                $('.error-msg').show();
                $('.error-msg').delay(5000).fadeOut('slow');
            });
        },
        delete: function(url, params) {
            $('.spinning').show();
            return axios.delete(url, { params: params ? params : {}, headers: {}, proxy: {} }).then(function(response) {
                $('.spinning').hide();
                return response.data;
            }).catch(function(error) {
                $('.spinning').hide();
                console.log(error.stack || error);
                $('.error-msg').show();
                $('.error-msg').delay(5000).fadeOut('slow');
            });
        },
    };
});

define(['Api', 'lang'], function(Api, lang) {
    return {
        get(dataset) {
            dataset.deleted = dataset.deleted ? dataset.deleted : 0;
            Api.get(dataset.api + dataset.id + '/' + dataset.deleted, dataset.param ? dataset.param : {}).then(function(data) {
                var data = data ? data : {};
                data.lang = lang;
                Api.compile(dataset.view, data);
                if (dataset.saved) {
                    message(dataset.saved == "success" ? true : false);
                }
            });
        },

        post(dataset, formData) {
            Api.post(dataset.api + dataset.id, formData).then(function(response) {
                dataset.id = 0;
                dataset.saved = !empty(response) && response.status ? 'success' : 'error';
                response ? get(dataset) : warning(lang.error[lang_option], lang.data_saving_failed[lang_option] + '. ' + lang.failed_reasons[lang_option], lang.btn_close[lang_option]);
            });
        },

        put(dataset) {
            Api.put(dataset.api + dataset.id, {}).then(function(response) {
                dataset.id = 0;
                response ? get(dataset) : warning(lang.error[lang_option], lang.data_saving_failed[lang_option], lang.btn_close[lang_option]);
            });
        },

        patch(dataset) {
            Api.patch(dataset.api + dataset.id, {}).then(function(response) {
                dataset.id = 0;
                response ? get(dataset) : warning(lang.error[lang_option], lang.data_saving_failed[lang_option], lang.btn_close[lang_option]);
            });
        },

        delete(dataset) {
            Api.delete(dataset.api + dataset.id, {}).then(function(response) {
                dataset.id = 0;
                response ? get(dataset) : warning(lang.error[lang_option], lang.data_saving_failed[lang_option], lang.btn_close[lang_option]);
            });
        },
        compile: function(view, data) {
            var theTemplateScript = $('#' + view).html();
            var theTemplate = Handlebars.compile(theTemplateScript);
            var compiledTemplateHtml = theTemplate(data);
            $('.' + view).html(compiledTemplateHtml);
        },
    }
})