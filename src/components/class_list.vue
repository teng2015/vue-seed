<template>
    <class-table class="class-table"
        :list = "list"
        :field_getter_list = "field_getter_list"
        :operation_header  = "operation_header"
        :operation_buttons = "operation_buttons"
        :operation_methods = "operation_methods"
    ></class-table>
</template>

<style lang="less" rel="stylesheet/less">
    .class-table {
    }
</style>

<script>
    import Table from './table';
    import ac from '../api/class';
    import au from '../api/user';
    import * as u from '../utils/utils';
    import {getUser} from '../vuex/getters';

    export default {
        data () {
            return {
                list: [],
                field_getter_list: [
                    [{name: "英文名称", width: "18%"}, x => x.enname],
                    [{name: "中文名称", width: "12%"}, x => x.cnname],
                    [{name: "授课教师", width: "8%"}, x => x.teacher],
                    [{name: "开始日期", width: "10%"}, x => x.startDate],
                    [{name: "结束日期", width: "10%"}, x => x.endDate],
                    [{name: "开始时间", width: "8%"}, x => x.startTime],
                    [{name: "结束时间", width: "8%"}, x => x.endTime],
                    [{name: "最大人数", width: "5%"}, x => x.maxNum],
                    [{name: "最小人数", width: "5%"}, x => x.minNum],
                    [{name: "当前人数", width: "5%"}, x => x.number],
                    [{name: "地点", width: "6%"}, x => x.place]
                ],
                operation_header: "操作",
                operation_buttons: (item, i, list) => {
                    if(item.signed === true) {
                        return `<button class=\"btn btn-sm btn-warning\">退选</button>`
                    } else {
                        return "<button class=\"btn btn-sm btn-primary\">选课</button>"
                    }
                },
                operation_methods: {},
                user: this.getUser
            };
        },
        vuex: {
            getters: { getUser }
        },
        ready () {
            let self = this;
            Promise.all([ac.classList(), au.getUserClass(u.get_cookie('class_selector_userid'))])
            .then(([class_data, user_data]) => {
                for (var i = 0; i < class_data.data.length; i++) {
                    if(user_data.data.signup[class_data.data[i].id] === true) {
                        class_data.data[i].signed = true;
                    }
                }
                self.list = class_data.data;
            });
        },
        components: {
            'class-table': Table
        }
    };
</script>
