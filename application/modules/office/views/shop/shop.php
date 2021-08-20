<div class="content-area top-mutual" id="contentArea">
    <?php $this->load->view('partials/breadcrumb'); ?>
    <div class="w3-content w3-section w3-container">
        <div class="shopPage"></div>
        <script id="shopPage" type="text/x-handlebars-template">
            <div class="w3-row-padding">
                <div class="w3-col w3-third">
                    <form class="w3-theme-light" method="POST" action="<?php echo site_url('api_v1/shop/') ?>" id="shopForm">
                         <div class="w3-col w3-block w3-theme-d1">
                            <div class="w3-center w3-text-bold w3-padding">Add new shop</div>
                        </div>
                        <div class="w3-row-padding w3-padding-16">
                            <div class="w3-col w3-block">
                                <div class="form-group w3-section-tiny">
                                    <label>{{lang lang.shop}} {{lang lang.name}}</label>
                                    <input type="text" name="name" value="{{entity.name}}" class="w3-input w3-border w3-round w3-border-theme"/>
                                </div>
                            </div>
                            <div class="w3-col w3-half">
                                <div class="form-group w3-section-tiny">
                                    <label>{{lang lang.phone}}</label>
                                    <input type="text" name="phone" value="{{entity.phone}}" class="w3-input w3-border w3-round w3-border-theme"/>
                                </div>
                            </div>
                            <div class="w3-col w3-half">
                                <div class="form-group w3-section-tiny">
                                    <label>{{lang lang.email}}</label>
                                    <input type="email" name="email" value="{{entity.email}}" class="w3-input w3-border w3-round w3-border-theme"/>
                                </div>
                            </div>
                            <div class="w3-col w3-block">
                                <div class="form-group w3-section-tiny">
                                    <label>{{lang lang.base_url}}</label>
                                    <input type="base_url" name="base_url" value="{{entity.base_url}}" class="w3-input w3-border w3-round w3-border-theme"/>
                                </div>
                            </div>

                             <div class="w3-col w3-block">
                                <div class="form-group w3-section-tiny">
                                    <label>{{lang lang.client}}</label>
                                    <select id="client_id" name="client_id" class="w3-input w3-border w3-border-theme w3-round">
                                      <option>Select</option>
                                      {{#each clients}}
                                         <option value="{{id}}" {{#if ../entity}}{{selected id ../entity.client_id}}{{else}}{{selected id ../base.id}}{{/if}}>{{name}}</option>
                                      {{/each}}
                                    </select>
                                </div>
                            </div>
                            
                            <div class="w3-col w3-block">
                                <div class="form-group w3-section-tiny">
                                    {{#if entity}}<input type="hidden" name="id" value="{{entity.id}}">{{/if}}
                                    <button type="submit" class="w3-button w3-theme-d1 w3-large w3-text-bold w3-round w3-hover-theme w3-block submit-btn" data-id="0" data-params="<?php echo $client ?>/0/0/0"  data-form="shopForm" data-validation="shopForm" data-view="shopPage">{{lang lang.save}}</button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
                <div class="w3-col w3-twothird">
                    <div class="w3-responsive">
                        <table class="w3-table-all w3-border-0" id="shopTable">
                            <caption class="w3-padding-small w3-large w3-theme w3-text-capitalize w3-text-bold">
                                {{#if base}}{{base.name}} {{lang lang.shop}}{{else}}{{lang lang.shop}} {{lang lang.list}}{{/if}}
                            </caption>
                            <thead class="w3-text-bold w3-theme-light">
                                <tr>
                                    <th colspan="10" style="padding:0!important">
                                        <input type="search" id="search" name="search" value="{{filter.search}}" placeholder="{{lang lang.search}}" class="w3-input" oninput="w3.filterHTML('#shopTable', '.report-line',this.value)">
                                    </th>
                                </tr>
                                <tr class="w3-theme-l4 w3-text-bold">
                                    <th class="w3-padding-small w3-center">{{lang lang.ID}}</th>
                                    <th class="w3-padding-small">{{lang lang.name}}</th>
                                    <th class="w3-padding-small w3-center">{{lang lang.phone}}</th>
                                    <th class="w3-padding-small">{{lang lang.email}}</th>
                                    <th class="w3-padding-small w3-center">{{lang lang.service}}</th>
                                    <th class="w3-padding-small w3-center">{{lang lang.software}}</th>
                                    <th class="w3-padding-small w3-center">{{lang lang.web}}</th>
                                    <th class="w3-padding-small w3-center">{{lang lang.admin}}</th>
                                    <th class="w3-padding-small w3-center">{{lang lang.client}}</th>
                                    <th class="w3-padding-small w3-center">{{lang lang.status}}</th>
                                    <th class="w3-padding-small w3-center w3-cursor-pointer">{{lang lang.edit}}</th>
                                </tr>
                            </thead>
                            <tbody>
                                {{#each list}}
                                <tr class="report-line">
                                    <td class="w3-padding-small w3-center">{{id}}</td>
                                    <td class="w3-padding-small w3-text-capitalize">{{name}}</td>
                                    <td class="w3-padding-small w3-center">{{phone}}</td>
                                    <td class="w3-padding-small">{{email}}</td>
                                    <td class="w3-padding-small w3-center"><a href="<?php echo site_url('office/shop/service/' . $client . '/{{id}}') ?>"><i class="fa fa-wrench"></i></a></td>
                                    <td class="w3-padding-small w3-center"><a href="<?php echo site_url('office/shop/app/' . $client . '/{{id}}') ?>"><i class="fa fa-windows"></i></a></td>
                                    <td class="w3-padding-small w3-center"><a href="{{base_url}}" target="_blank" title="{{base_url}}"><i class="fa fa-globe"></i></a></td>
                                      <td class="w3-padding-small w3-center"><a href="{{base_url}}admin" target="_blank" title="{{base_url}}admin"><i class="fa fa-dashboard"></i></a></td>
                                    <td class="w3-padding-small w3-center"><a href="<?php echo site_url('office/api/token/{{api}}') ?>">{{api}}</a></td>
                                    <td class="w3-padding-small w3-text-capitalize w3-center">
                                        {{#if deleted_at}}
                                            <span data-api="<?php echo site_url('api_v1/shop/') ?>" data-id="undo/{{id}}" data-view="shopPage" class="w3-padding w3-text-red w3-cursor-pointer put">{{langof 'deleted'}}</span>
                                        {{else}}
                                            {{#ifeq status 'active'}}<span data-api="<?php echo site_url('api_v1/shop/') ?>" data-id="{{id}}" data-params="<?php echo $client ?>" data-view="shopPage" data-status="inactive" class="w3-padding w3-text-green w3-cursor-pointer put">{{langof status}}</span>{{/ifeq}}
                                            {{#ifeq status 'inactive'}}<span data-api="<?php echo site_url('api_v1/shop/') ?>" data-id="{{id}}"  data-params="<?php echo $client ?>" data-view="shopPage" data-status="active" class="w3-padding w3-text-red w3-cursor-pointer put">{{langof status}}</span>{{/ifeq}}
                                        {{/if}}
                                    </td>
                                    <td class="w3-padding-small w3-center w3-cursor-pointer get" data-api="<?php echo site_url('api_v1/shop/') ?>" data-id="{{id}}" data-params="<?php echo $client ?>" data data-view="shopPage"><i class="fa fa-edit" aria-hidden="true"></i></td>
                                </tr>
                                {{/each}}
                            </tbody>
                            <tfoot>
                                <tr class="w3-theme-l4 w3-text-bold">
                                    <td colspan="20" class="w3-padding-small">
                                        {{lang lang.total}} {{lang lang.shop}} : {{total}}
                                    </td>
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
    //params= [$client/$deleted/$limit/$offset]
    $(function() {
        App.get({
            api: '<?php echo site_url('api_v1/shop/') ?>',
            id: 0,
            params: '<?php echo $client ?>',
            view: 'shopPage',
        });
    })
</script>