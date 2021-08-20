<div class="content-area top-mutual" id="contentArea">
    <?php $this->load->view('partials/breadcrumb'); ?>
    <div class="w3-content w3-section w3-container">
        <div class="shopAppPage"></div>
        <script id="shopAppPage" type="text/x-handlebars-template">
            <div  class="w3-padding-small w3-theme-d1 w3-large w3-text-capitalize w3-center">
                {{shop.name}} {{lang lang.software}}
            </div>
            <form class="w3-responsive w3-theme-l3" id="shopAppForm" method="POST" action="<?php echo site_url('api_v1/shopapp/') ?>">
                <div class="w3-row-padding">
                    <div class="w3-col w3-quarter form-group w3-section-tiny">
                        <label>{{lang lang.number_of_hub}}</label>
                        <input name="hub" value="{{entity.hub}}" class="w3-input w3-border-theme w3-border w3-border-theme w3-border w3-round"/>
                    </div>
                    <div class="w3-col w3-quarter form-group w3-section-tiny">
                        <label>{{lang lang.number_of_pos}}</label>
                        <input name="epos" value="{{entity.epos}}" class="w3-input w3-border-theme w3-border w3-border-theme w3-border w3-round"/>
                    </div>
                    <div class="w3-col w3-quarter form-group w3-section-tiny">
                        <label>{{lang lang.number_of_handler}}</label>
                        <input name="handler" value="{{entity.handler}}" class="w3-input w3-border-theme w3-border w3-border-theme w3-border w3-round"/>
                    </div>
                    <div class="w3-col w3-quarter form-group w3-section-tiny">
                        <label>{{lang lang.number_of_packer}}</label>
                        <input name="packer" value="{{entity.packer}}" class="w3-input w3-border-theme w3-border w3-border-theme w3-border w3-round"/>
                    </div>
                    <div class="w3-col w3-quarter form-group w3-section-tiny">
                        <label>{{lang lang.number_of_driver}}</label>
                        <input name="driver" value="{{entity.driver}}" class="w3-input w3-border-theme w3-border w3-border-theme w3-border w3-round"/>
                    </div>
                    <div class="w3-col w3-quarter form-group w3-section-tiny">
                        <label>{{lang lang.number_of_owner_reporter}}</label>
                        <input name="owner" value="{{entity.owner}}" class="w3-input w3-border-theme w3-border w3-border-theme w3-border w3-round"/>
                    </div>
                    <div class="w3-col m2 form-group w3-section-tiny">
                        <label>{{lang lang.website}}</label>
                         <select name="website" class="w3-input w3-border-theme w3-border w3-border-theme w3-border w3-round">
                            <option value="0" {{selected 0 entity.website}}>{{lang lang.no}}</option>
                            <option value="1"  {{selected 1 entity.website}}>{{lang lang.yes}}</option>
                        </select>
                    </div>
                    <div class="w3-col m2 form-group w3-section-tiny">
                        <label>{{lang lang.android}}</label>
                         <select name="android" class="w3-input w3-border-theme w3-border w3-border-theme w3-border w3-round">
                            <option value="0" {{selected 0 entity.android}}>{{lang lang.no}}</option>
                            <option value="1"  {{selected 1 entity.android}}>{{lang lang.yes}}</option>
                        </select>
                    </div>
                    <div class="w3-col m2 form-group w3-section-tiny">
                        <label>{{lang lang.apple}}</label>
                        <select name="apple" class="w3-input w3-border-theme w3-border w3-border-theme w3-border w3-round">
                            <option value="0" {{selected 0 entity.android}}>{{lang lang.no}}</option>
                            <option value="1"  {{selected 1 entity.android}}>{{lang lang.yes}}</option>
                        </select>
                    </div>
                    <div class="w3-col w3-block w3-section">
                        <input type="hidden" name="shop_id" value="<?php echo $shop ?>">
                        {{#if entity}}<input type="hidden" name="id" value="{{entity.id}}">{{/if}}
                        <button type="submit" class="w3-button w3-theme-d1 w3-hover-theme w3-block app-submit-btn w3-round w3-border w3-border-theme w3-text-bold w3-large" data-id="0" data-form="shopAppForm" data-validation="shopForm" data-view="shopAppPage">{{lang lang.save}}</button>
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
            api: '<?php echo site_url('api_v1/shopapp/') ?>',
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
                            api: '<?php echo site_url('api_v1/shopapp/') ?>',
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