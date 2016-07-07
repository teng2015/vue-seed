<template>
    <table class="table table-striped">
        <thead>
            <tr>
                <template v-for="field in fields">
                    <th :style="{width: field.width}">{{field.name}}</th>
                </template>
                <th>
                    <operation-header></operation-header>
                </th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="item in list">
                <td v-for="getter in getters">
                    {{getter(item)}}
                </td>
                <td>
                    <operation-buttons
                    :item = "item"
                    :list = "list"
                    :index = "$index"></operation-buttons>
                </td>
            </tr>
        </tbody>
    </table>
</template>

<style>
</style>

<script>
    import Vue from 'vue';
    import * as x from 'kit-utils';

    export default {
        props: ['list', 'field_getter_list', 'operation_header', 'operation_buttons', 'operation_methods'],
        data () {
            return {
                fields: x.pluck(0, this.field_getter_list),
                getters: x.pluck(1, this.field_getter_list)
            };
        },
        components: {
            'operation-header': function (resolve) {
                let self = this,
                    header = Vue.extend({
                        template: self.operation_header || '',
                        methods: self.operation_methods || {}
                    });

                resolve(header);
            },
            'operation-buttons': function (resolve) {
                let self = this,
                    buttons = Vue.extend({
                        props: ['item', 'list', 'index'],
                        methods: self.operation_methods || {},
                        created: function () {
                            this.$options.template = self.operation_buttons(this.item, this.index, this.list);
                        }
                    });

                resolve(buttons);
            }
        }
    };
</script>
