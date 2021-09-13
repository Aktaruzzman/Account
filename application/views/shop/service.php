<div class="content-area top-mutual" id="contentArea">
    <?php $this->load->view('partials/breadcrumb'); ?>
    <div class="w3-content w3-section w3-container">
        <div class="shopAppPage"></div>
        <script id="shopAppPage" type="text/x-handlebars-template">
            <div  class="w3-padding-small w3-theme-d1 w3-large w3-text-capitalize w3-center">
                {{shop.name}} {{lang lang.service}}
            </div>
            <form class="w3-responsive w3-theme-l3" id="shopServiceForm" method="POST" action="<?php echo site_url('api_v1/shopservice/') ?>">
                <div class="w3-row-padding">
                    <div class="w3-col w3-quarter form-group w3-section-tiny">
                        <label>{{lang lang.table}}</label>
                        <select name="table" class="w3-input w3-border-theme w3-border w3-border-theme w3-border w3-round">
                            <option value="0" {{selected 0 entity.table}}>{{lang lang.no}}</option>
                            <option value="1"  {{selected 1 entity.table}}>{{lang lang.yes}}</option>
                        </select>
                    </div>
                    <div class="w3-col w3-quarter form-group w3-section-tiny">
                        <label>{{lang lang.waiting}}</label>
                        <select name="waiting" class="w3-input w3-border-theme w3-border w3-border-theme w3-border w3-round">
                            <option value="0" {{selected 0 entity.waiting}}>{{lang lang.no}}</option>
                            <option value="1"  {{selected 1 entity.waiting}}>{{lang lang.yes}}</option>
                        </select>
                    </div>
                    <div class="w3-col w3-quarter form-group w3-section-tiny">
                        <label>{{lang lang.delivery}}</label>
                        <select name="delivery" class="w3-input w3-border-theme w3-border w3-border-theme w3-border w3-round">
                            <option value="0" {{selected 0 entity.delivery}}>{{lang lang.no}}</option>
                            <option value="1"  {{selected 1 entity.delivery}}>{{lang lang.yes}}</option>
                        </select>
                    </div>
                    <div class="w3-col w3-quarter form-group w3-section-tiny">
                        <label>{{lang lang.collection}}</label>
                        <select name="collection" class="w3-input w3-border-theme w3-border w3-border-theme w3-border w3-round">
                            <option value="0" {{selected 0 entity.collection}}>{{lang lang.no}}</option>
                            <option value="1"  {{selected 1 entity.collection}}>{{lang lang.yes}}</option>
                        </select>
                    </div>
                    <div class="w3-col w3-quarter form-group w3-section-tiny">
                        <label>{{lang lang.bar}}</label>
                        <select name="bar" class="w3-input w3-border-theme w3-border w3-border-theme w3-border w3-round">
                            <option value="0" {{selected 0 entity.bar}}>{{lang lang.no}}</option>
                            <option value="1" {{selected 1 entity.bar}}>{{lang lang.yes}}</option>
                        </select>
                    </div>
                     <div class="w3-col w3-quarter form-group w3-section-tiny">
                        <label>Express</label>
                        <select name="express" class="w3-input w3-border-theme w3-border w3-border-theme w3-border w3-round">
                            <option value="0" {{selected 0 entity.express}}>{{lang lang.no}}</option>
                            <option value="1" {{selected 1 entity.express}}>{{lang lang.yes}}</option>
                        </select>
                    </div>
                    <div class="w3-col w3-quarter form-group w3-section-tiny">
                        <label>{{lang lang.booking}}</label>
                        <select name="booking" class="w3-input w3-border-theme w3-border w3-border-theme w3-border w3-round">
                            <option value="0" {{selected 0 entity.booking}}>{{lang lang.no}}</option>
                            <option value="1" {{selected 1 entity.booking}}>{{lang lang.yes}}</option>
                        </select>
                    </div>
                    <div class="w3-col w3-quarter form-group w3-section-tiny">
                        <label>{{lang lang.packer}}</label>
                        <select name="packer" class="w3-input w3-border-theme w3-border w3-border-theme w3-border w3-round">
                            <option value="0" {{selected 0 entity.packer}}>{{lang lang.no}}</option>
                            <option value="1" {{selected 1 entity.packer}}>{{lang lang.yes}}</option>
                        </select>
                    </div>
                    <div class="w3-col w3-quarter form-group w3-section-tiny">
                        <label>{{lang lang.caller}}</label>
                        <select name="caller" class="w3-input w3-border-theme w3-border w3-border-theme w3-border w3-round">
                            <option value="0" {{selected 0 entity.caller}}>{{lang lang.no}}</option>
                            <option value="1" {{selected 1 entity.caller}}>{{lang lang.yes}}</option>
                        </select>
                    </div>

                    <div class="w3-col w3-quarter form-group w3-section-tiny">
                        <label>{{lang lang.online}} {{lang lang.store}}</label>
                        <select name="online" class="w3-input w3-border-theme w3-border w3-border-theme w3-border w3-round">
                            <option value="0" {{selected 0 entity.online}}>{{lang lang.no}}</option>
                            <option value="1" {{selected 1 entity.online}}>{{lang lang.yes}}</option>
                        </select>
                    </div>
                    <div class="w3-col w3-quarter form-group w3-section-tiny">
                        <label>{{lang lang.marketing}}</label>
                        <select name="marketing" class="w3-input w3-border-theme w3-border w3-border-theme w3-border w3-round">
                            <option value="0" {{selected 0 entity.marketing}}>{{lang lang.no}}</option>
                            <option value="1" {{selected 1 entity.marketing}}>{{lang lang.yes}}</option>
                        </select>
                    </div>
                    <div class="w3-col w3-block w3-section">
                        <input type="hidden" name="shop_id" value="<?php echo $shop ?>">
                        {{#if entity}}<input type="hidden" name="id" value="{{entity.id}}">{{/if}}
                        <button type="submit" class="w3-button w3-theme-d1 w3-hover-theme w3-block app-submit-btn w3-round w3-border w3-border-theme w3-large w3-text-bold" data-id="0" data-form="shopServiceForm" data-validation="shopForm" data-view="shopAppPage">{{lang lang.save}}</button>
                    </div>
                </div>
            </form>
            <div class="w3-center">
                <span class="success-msg w3-text-green" style="display:none"><i class="fa fa-bell">&nbsp;</i><?php echo sprintf(lang('saved_success_msg'), $page_title) ?></span>
                <span class="error-msg w3-text-red" style="display:none"><i class="fa fa-bell">&nbsp;</i><?php echo sprintf(lang('saved_failed_msg'), $page_title) ?></span>
            </div>
        </script>
    </div>
</div>

<script type="text/javascript">
    //params= [$client/$deleted/$limit/$offset]
    $(function() {
        App.get({
            api: '<?php echo site_url('api_v1/shopservice/') ?>',
            id: '<?php echo $shop ?>',
            view: 'shopAppPage',
        });
        $(document).on("click", ".app-submit-btn", function(event) {
            var dataset = $(this)[0].dataset;
            dataset.api = $("#" + dataset.form).attr('action');
            $("#" + dataset.form).validate({
                submitHandler: function() {
                    var myForm = document.getElementById(dataset.form);
                    var formData = new FormData(myForm);
                    $('.spinning').show();
                    axios.post(dataset.api, formData, {
                        params: {},
                        headers: Api.headers(),
                        proxy: {}
                    }).then(function(response) {
                        dataset.saved = !empty(response) && response.status ? 'success' : 'error';
                        App.get({
                            api: '<?php echo site_url('api_v1/shopservice/') ?>',
                            id: '<?php echo $shop ?>',
                            view: 'shopAppPage',
                            saved: dataset.saved
                        });
                    }).catch(function(error) {
                        console.log(error.stack || error);
                    });
                },
                errorClass: "has-error",
                highlight: function(e) {
                    $(e).closest(".form-group").addClass("has-error");
                },
                unhighlight: function(e) {
                    $(e).closest(".form-group").removeClass("has-error");
                },
                rules: Formsetting[dataset.validation].rules,
                messages: Formsetting[dataset.validation].messages,
                errorPlacement: function(error, element) {
                    errorPlacement(error, element);
                }
            });

        });
    })
</script>