var App = {
    get(dataset) {
        dataset.params = dataset.params ? dataset.params : 0;
        Api.get(dataset.api + dataset.id + '/' + dataset.params, {}).then(function(data) {
            var data = data ? data : {};
            data.lang = lang;
            App.compile(dataset.view, data);
            if (dataset.saved) {
                message(dataset.saved == "success" ? true : false);
            }
        });
    },
    post(dataset, formData) {
        Api.post(dataset.api, formData).then(function(response) {
            dataset.saved = !empty(response) && response.status ? 'success' : 'error';
            dataset.saved === "success" ? App.get(dataset) : warning(lang.error[_Lang_], lang.data_saving_failed[_Lang_] + '. ' + lang.failed_reasons[_Lang_], lang.btn_close[_Lang_]);
        });
    },
    put(dataset, updateData) {
        Api.put(dataset.api + dataset.id, updateData ? updateData : {}).then(function(response) {
            dataset.id = 0;
            dataset.saved = !empty(response) && response.status ? 'success' : 'error';
            response ? App.get(dataset) : warning(lang.error[_Lang_], lang.data_saving_failed[_Lang_], lang.btn_close[_Lang_]);
        });
    },
    patch(dataset, updateData) {
        Api.patch(dataset.api + dataset.id, updateData).then(function(response) {
            dataset.id = 0;
            dataset.saved = !empty(response) && response.status ? 'success' : 'error';
            response ? App.get(dataset) : warning(lang.error[_Lang_], lang.data_saving_failed[_Lang_], lang.btn_close[_Lang_]);
        });
    },

    delete(dataset) {
        Api.delete(dataset.api + dataset.id, {}).then(function(response) {
            dataset.id = 0;
            dataset.saved = !empty(response) && response.status ? 'success' : 'error';
            response ? App.get(dataset) : warning(lang.error[_Lang_], lang.data_saving_failed[_Lang_], lang.btn_close[_Lang_]);
        });
    },
    compile: function(view, data) {
        var theTemplateScript = $('#' + view).html();
        var theTemplate = Handlebars.compile(theTemplateScript);
        var compiledTemplateHtml = theTemplate(data);
        $('.' + view).html(compiledTemplateHtml);
    },
    filter(dataset, formData) {
        Api.post(dataset.api, formData).then(function(data) {
            var data = data ? data : {};
            data.lang = lang;
            App.compile(dataset.view, data);
        });
    }
}