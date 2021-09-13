<div class="content-area top-mutual" id="contentArea">
    <?php $this->load->view('partials/breadcrumb'); ?>
    <div class="w3-content w3-container">
        <div class="apiPage  w3-section"></div>
        <script id="apiPage" type="text/x-handlebars-template">

            <div class="w3-row-padding">
                <div class="w3-col w3-third w3-margin-bottom w3-hide-small">
                    <form class="w3-theme-l3" id="apiForm" action="<?php echo site_url('api_v1/oauthclient/') ?>">
                        <div class="w3-row">
                            <div class="w3-col w3-block w3-theme-d1">
                                <div class="w3-center w3-text-bold w3-padding">Create New Api</div>
                            </div>
                            <div class="w3-col w3-block form-group w3-padding">
                                <div class="form-group">
                                    <label>username</label>
                                    <input name="client_id" type="text" class="w3-input w3-border w3-border-theme w3-round"/>
                                </div>
                                 <div class="form-group w3-section-small">
                                     <button type="submit" class="w3-button w3-round w3-block w3-border w3-border-theme w3-text-bold w3-theme-d1 w3-hover-theme submit-btn" data-id="0" data-form="apiForm" data-validation="apiForm" data-view="apiPage">{{lang lang.save}}</button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
                <div class="w3-col w3-twothird">
                    <div class="w3-col w3-block">
                        <div class="w3-responsive">
                            <table class="w3-table-all w3-border-0" id="clientTable">
                                <caption class="w3-padding w3-text-bold w3-theme-d1">Api List</caption>
                                <thead class="w3-text-bold w3-theme-light">
                                     <tr class="w3-border-theme">
                                        <td colspan="20" style="padding:0!important">
                                            <input type="search" id="search" name="search" value="{{filter.search}}" placeholder="{{lang lang.search}}" class="w3-input" oninput="w3.filterHTML('#clientTable', '.report-line',this.value)">
                                        </td>
                                    </tr>
                                    <tr class="w3-theme-light w3-text-bold">
                                        <th class="w3-padding-small w3-text-capitalize">Username</th>
                                        <th class="w3-padding-small w3-text-capitalize w3-center">Password</th>
                                        <th class="w3-padding-small w3-text-capitalize w3-center">Api key</th>
                                        <th class="w3-padding-small w3-text-capitalize w3-center w3-hide-small w3-hide-medium">Started From</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {{#each list}}
                                    <tr class="report-line">
                                        <td class="w3-padding-small">{{client_id}}</td>
                                        <td class="w3-padding-small w3-center">{{client_secret}}</td>
                                        <td class="w3-padding-small w3-center"><a class="w3-border-bottom w3-border-theme" href="<?php echo site_url('api/token/{{client_id}}') ?>"><i class="fa fa-code w3-text-theme w3-text-bold">&nbsp; Key</i></a></td>
                                        <td class="w3-padding-small w3-center w3-hide-small w3-hide-medium">{{created_at}}</td>
                                    </tr>
                                    {{/each}}
                                </tbody>
                                <tfoot>
                                    <tr class="w3-theme-light w3-text-bold">
                                        <td colspan="8" class="w3-padding-small">
                                            Total Apis: {{total}}
                                        </td>
                                    </tr>
                                </tfoot>
                            </table>
                        </div>
                  </div>
                </div>
            </div>
        </script>
    </div>
</div>
<script type="text/javascript">
    //params= [$deleted/$limit/$offset]
    $(function() {
        App.get({
            api: '<?php echo site_url('api_v1/oauthclient/') ?>',
            id: 0,
            params: 0,
            view: 'apiPage',
        });
    })
</script>