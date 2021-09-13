var Api = {
    get_date: function() {
        return moment(Date.now()).format('YYYY-MM-DD');
    },
    timestamps: function(date, time) {
        return moment(date + ' ' + time, 'YYYY-MM-DD hh:mm:ss').format('x')
    },
    headers: function() {
        return { 'access-Control-Allow-Origin': '*', 'Authorization': 'Bearer 82654e4dd023a4eda6d5235d89193ba9dc9b8eca' }
    },
    get: function(url, params) {
        return axios.get(url, { params: params ? params : {}, headers: Api.headers(), proxy: {} }).then(function(response) {
            return response.data;
        }).catch(function(error) {
            console.log(error.stack || error);
            $('.error-msg').show();
            $('.error-msg').delay(5000).fadeOut('slow');
        });
    },
    post: function(url, data, params) {
        $('.spinning').show();
        return axios.post(url, data, { params: params ? params : {}, headers: Api.headers(), proxy: {} }).then(function(response) {
            return response.data;
        }).catch(function(error) {
            console.log(error.stack || error);
            $('.error-msg').show();
            $('.error-msg').delay(5000).fadeOut('slow');
        });
    },
    put: function(url, data, params) {
        var headers = Api.headers();
        headers['Content-type'] = "application/json";
        return axios.put(url, data, { params: params, headers: headers, proxy: {} }).then(function(response) {
            return response.data;
        }).catch(function(error) {
            console.log(error.stack || error);
            $('.error-msg').show();
            $('.error-msg').delay(5000).fadeOut('slow');
        });
    },
    delete: function(url, params) {
        return axios.delete(url, { params: params ? params : {}, headers: Api.headers(), proxy: {} }).then(function(response) {
            return response.data;
        }).catch(function(error) {
            console.log(error.stack || error);
            $('.error-msg').show();
            $('.error-msg').delay(5000).fadeOut('slow');
        });
    },
};