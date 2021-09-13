<div class="content-area top-mutual" id="contentArea">
    <?php $this->load->view('partials/breadcrumb'); ?>
    <div class="w3-content w3-container">
        <div class="apiPage"></div>
        <script id="apiPage" type="text/x-handlebars-template">
            <table class="w3-table-all w3-border-0 w3-section" id="clientTable">
                <caption class="w3-padding w3-text-capitalize w3-theme-d1 w3-text-bold">{{app.client_id}} token</caption>
               {{#if list}}
                <thead class="w3-text-bold w3-theme-light">
                    <tr class="w3-theme-l4 w3-text-bold">
                        <th class="w3-text-capitalize ">{{lang lang.app}} {{lang lang.ID}}</th>
                        <th class="w3-text-capitalize ">{{lang lang.api}} {{lang lang.token}}</th>
                        <th class="w3-text-capitalize ">{{lang lang.validity}}</th>
                        <th class="w3-text-capitalize ">{{lang lang.extend_validity}}</th>
                    </tr>
                </thead>
                {{/if}}
                <tbody>
                    {{#if list}}
                        {{#each list}}
                            <tr class="report-line">
                                <td class=""><input type="text" readonly="readonly" class="w3-input w3-border w3-border-theme w3-round" value="{{client_id}}"></td>
                                <td class=""><input type="text" readonly="readonly" class="w3-input w3-border w3-border-theme w3-round" value="{{access_token}}"></td>
                                <td class=""><input type="text" readonly="readonly" class="w3-input w3-border w3-border-theme w3-round" value="{{expires}}"></td>
                                <td class="">
                                    <select class="extend-api-validity w3-input w3-border w3-border-theme w3-round">
                                        <option value="">{{lang ../lang.select}} {{lang ../lang.period}}</option>
                                        <option value="3600_{{access_token}}">01 hour</option>
                                        <option value="7200_{{access_token}}">02 hour</option>
                                        <option value="10800_{{access_token}}">03 hour</option>
                                        <option value="86400_{{access_token}}">01 Day</option>
                                        <option value="259200_{{access_token}}">03 Days</option>
                                        <option value="604800_{{access_token}}">07 Days</option>
                                        <option value="1296000_{{access_token}}">15 Days</option>
                                        <option value="2628000_{{access_token}}">01 month</option>
                                        <option value="5256000_{{access_token}}">02 months</option>
                                        <option value="7884000_{{access_token}}">03 months</option>
                                        <option value="10512000_{{access_token}}">04 months</option>
                                        <option value="13140000_{{access_token}}">05 months</option>
                                        <option value="15768000_{{access_token}}">06 months</option>
                                        <option value="18396000_{{access_token}}">07 months</option>
                                        <option value="21024000_{{access_token}}">08 months</option>
                                        <option value="23652000_{{access_token}}">09 months</option>
                                        <option value="26280000_{{access_token}}">10 months</option>
                                        <option value="28908000_{{access_token}}">11 months</option>
                                        <option value="31536000_{{access_token}}">01 year</option>
                                    </select>
                                </td>
                            </tr>
                        {{/each}}
                        <!----->
                        {{else}}
                        <tr class="report-line w3-border-0">
                            <td class="w3-padding w3-row" colspan="5">
                                <form id="generateApiForm" class="w3-quarter" method="POST" action="<?php echo site_url('server/client') ?>">
                                    <input type="hidden" name="client_id" value="{{app.client_id}}">
                                    <input type="hidden" name="client_secret" value="{{app.client_secret}}">
                                    <input type="hidden" name="grant_type" value="client_credentials">
                                    <div class="form-group w3-section-small">
                                        <label>{{lang lang.certification}} {{lang lang.period}}</label>
                                        <select name="access_lifetime" class="w3-input w3-border w3-border-theme w3-round w3-border w3-round">
                                           <option value="3600">01 hour</option>
                                           <option value="7200">02 hour</option>
                                           <option value="10800">03 hour</option>
                                           <option value="86400">01 Day</option>
                                           <option value="259200">03 Days</option>
                                           <option value="604800">07 Days</option>
                                           <option value="1296000">15 Days</option>
                                           <option value="2628000" selected="selected">01 month</option>
                                           <option value="5256000">02 months</option>
                                           <option value="7884000">03 months</option>
                                           <option value="10512000">04 months</option>
                                           <option value="13140000">05 months</option>
                                           <option value="15768000">06 months</option>
                                           <option value="18396000">07 months</option>
                                           <option value="21024000">08 months</option>
                                           <option value="23652000">09 months</option>
                                           <option value="26280000">10 months</option>
                                           <option value="28908000">11 months</option>
                                           <option value="31536000">01 year</option>
                                           <option value="63072000">02 year</option>
                                           <option value="94608000">03 year</option>
                                        </select>
                                    </div>
                                    <button type="submit" class="w3-button w3-block w3-theme-d1 w3-round w3-hover-theme w3-large generate-api" data-form="generateApiForm" data-url="<?php echo current_url() ?>">{{lang lang.add}}</button>
                                </form>
                            </td>
                        </tr>
                    {{/if}}
                </tbody>
            </table>
        </script>
    </div>
</div>
<script type="text/javascript">
    //params= [$oauth_client_id/$deleted/$limit/$offset]
    $(function() {
        App.get({
            api: '<?php echo site_url('api_v1/oauthaccesstoken/') ?>',
            id: 0,
            params: '<?php echo $ouath_client_id ?>',
            view: 'apiPage',
        });

        $(document).on("click", ".generate-api", function(event) {
            var dataset = $(this)[0].dataset;
            $("#" + dataset.form).validate({
                submitHandler: function() {
                    var myForm = document.getElementById(dataset.form);
                    var formData = new FormData(myForm);
                    $('.spinning').show();
                    axios.post($("#" + dataset.form).attr('action'), formData, {
                        auth: {
                            username: formData.get('client_id'),
                            password: formData.get('client_secret')
                        },
                    }).then(function(response) {
                        console.log(response);
                        location.reload();
                    }).catch(function(error) {
                        console.log(error.stack || error);
                    });
                },
            });
        });
        $(document).on("change", ".extend-api-validity", function(event) {
            var validity = this.value;
            if (!_.isEmpty(validity)) {
                $.confirm({
                    title: lang.warning[_Lang_],
                    message: lang.extend_validity_warning[_Lang_],
                    buttons: {
                        Yes: {
                            action: function() {
                                axios.put(_BASE_URL_ + 'server/extendapivalidity/' + validity, {}, {
                                    params: {},
                                    headers: Api.headers(),
                                    proxy: {}
                                }).then(function(response) {
                                    $('.spinning').hide();
                                    console.log(response.data);
                                    location.reload();
                                }).catch(function(error) {
                                    $('.spinning').hide();
                                    console.log(error.stack || error);
                                });
                            }
                        },
                        No: {
                            action: function() {}
                        },
                    }
                });
            }
        });
    })
</script>