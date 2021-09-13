<div class="content-area top-mutual" id="contentArea">
    <?php $this->load->view('partials/breadcrumb'); ?>
    <div class="w3-content w3-container">
        <div class="clientPage w3-section"></div>
        <script id="clientPage" type="text/x-handlebars-template">
            <div class="w3-row-padding">
                <div class="w3-col w3-third w3-margin-bottom w3-hide-small">
                    <form class="w3-theme-l3" method="POST" action="<?php echo site_url('api_v1/shopclient/') ?>" id="clientForm">
                         <div class="w3-col w3-block w3-theme-d1">
                            <div class="w3-center w3-text-bold w3-padding">Add New Client</div>
                        </div>
                        <div class="w3-row w3-padding">
                            <div class="w3-col w3-block">
                                <div class="form-group w3-section-tiny">
                                    <label>{{lang lang.name}}</label>
                                    <input type="text" name="name" value="{{entity.name}}" class="w3-input w3-border w3-border-theme w3-round"/>
                                </div>
                            </div>
                            <div class="w3-col w3-block">
                                <div class="form-group w3-section-tiny">
                                    <label>{{lang lang.phone}}</label>
                                    <input type="text" name="phone" value="{{entity.phone}}" class="w3-input w3-border w3-border-theme w3-round"/>
                                </div>
                            </div>
                            <div class="w3-col w3-block">
                                <div class="form-group w3-section-tiny">
                                    <label>{{lang lang.email}}</label>
                                    <input type="email" name="email" value="{{entity.email}}" class="w3-input w3-border w3-border-theme w3-round"/>
                                </div>
                            </div>
                            {{#unless entity}}
                            <div class="w3-col w3-block">
                                <div class="form-group w3-section-tiny">
                                    <label>{{lang lang.api}}</label>
                                    <select name="app_id" class="w3-input w3-border w3-border-theme w3-round">
                                        <option value="">{{lang lang.select}}</option>
                                        {{#each apps}}
                                            <option value="{{client_id}}">{{client_id}}</option>
                                        {{/each}}
                                    </select>
                                </div>
                            </div>
                            {{else}}
                            <div class="w3-col w3-block">
                                <div class="form-group w3-section-tiny">
                                   <label>{{lang lang.api}}</label>
                                    <input type="text" name="app_id" value="{{entity.app_id}}" readonly="readonly" class="w3-input w3-border w3-border-theme w3-round"/>
                                </div>
                            </div>
                            {{/unless}}

                            <div class="w3-col w3-block">
                                <div class="form-group w3-section-tiny">
                                    {{#if entity}}<input type="hidden" name="id" value="{{entity.id}}">{{/if}}
                                    <button type="submit" class="w3-button w3-round w3-block w3-border w3-border-theme w3-text-bold w3-theme-d1 w3-hover-theme submit-btn" data-id="0" data-form="clientForm" data-validation="clientForm" data-view="clientPage">{{lang lang.save}}</button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
                <div class="w3-col w3-twothird">
                       <div class="w3-responsive">
                            <table class="w3-table-all w3-border-0" id="clientTable">
                                <caption class="w3-padding w3-text-bold w3-theme-d1">Client List</caption>
                                <thead class="w3-text-bold w3-theme-light">
                                    <tr>
                                        <th colspan="10" style="padding:0!important">
                                            <input type="search" id="search" name="search" value="{{filter.search}}" placeholder="{{lang lang.search}}" class="w3-input" oninput="w3.filterHTML('#clientTable', '.report-line',this.value)">
                                        </th>
                                    </tr>
                                    <tr class="w3-theme-l4 w3-text-bold">
                                        <th class="w3-padding-small">{{lang lang.client}}</th>
                                        <th class="w3-padding-small">{{lang lang.api}}</th>
                                        <th class="w3-padding-small">{{lang lang.phone}}</th>
                                        <th class="w3-padding-small">{{lang lang.email}}</th>
                                        <th class="w3-padding-small w3-center">{{lang lang.shop}}</th>
                                        <th class="w3-padding-small w3-center w3-hide">{{lang lang.billing}}</th>
                                        <th class="w3-padding-small w3-center">{{lang lang.status}}</th>
                                        <th class="w3-padding-small w3-center w3-cursor-pointer">{{lang lang.edit}}</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {{#each list}}
                                    <tr class="report-line {{#if deleted_at}}w3-red{{/if}}">
                                        <td class="w3-padding-small w3-text-capitalize">{{name}}</td>
                                        <td class="w3-padding-small w3-cursor-pointer"><a href="<?php echo site_url('api/token/{{app_id}}') ?>">{{app_id}}</a></td>
                                        <td class="w3-padding-small w3-center">{{phone}}</td>
                                        <td class="w3-padding-small">{{email}}</td>
                                        <td class="w3-padding-small w3-center"><a href="<?php echo site_url('shop/index/{{id}}') ?>"><i class="fa fa-university w3-text-theme"></i></a></td>
                                        <td class="w3-padding-small w3-right w3-hide">{{currency billing}} / {{lang ../lang.month}}</td>
                                        <td class="w3-padding-small w3-text-capitalize w3-center">
                                            {{#if deleted_at}}
                                                <span data-api="<?php echo site_url('api_v1/shopclient/') ?>" data-id="undo/{{id}}" data-view="clientPage" class="w3-padding w3-text-white w3-cursor-pointer put">{{langof 'deleted'}}</span>
                                            {{else}}
                                                {{#ifeq status 'active'}}<span data-api="<?php echo site_url('api_v1/shopclient/') ?>" data-id="{{id}}"  data-view="clientPage" data-status="inactive" class="w3-padding w3-text-green w3-cursor-pointer put">{{langof status}}</span>{{/ifeq}}
                                                {{#ifeq status 'inactive'}}<span data-api="<?php echo site_url('api_v1/shopclient/') ?>" data-id="{{id}}"  data-view="clientPage" data-status="active" class="w3-padding w3-text-red w3-cursor-pointer put">{{langof status}}</span>{{/ifeq}}
                                            {{/if}}
                                        </td>
                                        <td class="w3-padding-small w3-center w3-cursor-pointer get" data-api="<?php echo site_url('api_v1/shopclient/') ?>" data-id="{{id}}" data-view="clientPage"><i class="fa fa-edit" aria-hidden="true"></i></td>
                                    </tr>
                                    {{/each}}
                                </tbody>
                                <tfoot>
                                    <tr class="w3-theme-l4 w3-text-bold">
                                        <td colspan="5" class="w3-padding-small">
                                            {{lang lang.total}} {{lang lang.client}}: {{total}}
                                        </td>
                                        <td class="w3-right w3-padding-small w3-hide">{{currency total_billing}} / {{lang lang.month}}</td>
                                        <td colspan="3" class="w3-padding-small">&nbsp;</td>
                                    </tr>
                                </tfoot>
                            </table>
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
            api: '<?php echo site_url('api_v1/shopclient/') ?>',
            id: 0,
            params: 0,
            view: 'clientPage',
        });
    })
</script>