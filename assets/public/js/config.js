requirejs.config({
    baseUrl: 'js/lib',
    paths: {
        lang: 'lang',
        jquery: 'jquery.min',
        validate: 'jquery.validate.min',
        Formsetting: 'form-settings',
        colorbox: 'jquery.colorbox-min',
        axios: 'axios',
        handlebars: 'handlebars-v4.1.2',
        handlebars_helper: 'handlebar-helper',
        lodash: 'lodash',
        moment: 'moment',
        utility: 'utility',
        app: '../app',
    },
    shim: {
        colorbox: {
            deps: ['jquery'],
            exports: '$.colorbox'
        },
        validate: ['jquery'],
        handlebars: { exports: 'Handlebars' },
        utility: ['jquery', 'validate', 'lodash', 'moment'],
        handlebars_helper: ['handlebars', 'utility'],
        moment: { exports: 'moment' },
        Formsetting: ['jquery', 'validate', 'utility'],
        app: ['jquery', 'w3', 'validate', 'Formsetting', 'handlebars', 'lodash', 'moment', 'utility']
    }
});
requirejs(['jquery', 'validate', 'Formsetting', 'lang', 'app', 'colorbox', 'utility'], function($, validate, Formsetting, w3, lang, app) {

});