<template>
    <class-table
        :list = "list"
        :field_getter_list = "field_getter_list"
        :operation_header  = "operation_header"
        :operation_buttons = "operation_buttons"
        :operation_methods = "operation_methods"
    ></class-table>
</template>

<style>
</style>

<script>
    import Table from './table';

    import json from './json';

    export default {
        data () {
            return {
                list: json,
                field_getter_list: [
                    [{name: "中文名称", width: "10%"}, x => x.cnname],
                    [{name: "英文名称", width: "10%"}, x => x.enname],
                    [{name: "开始日期", width: "10%"}, x => x.startDate],
                    [{name: "结束日期", width: "10%"}, x => x.endDate],
                    [{name: "最大人数", width: "10%"}, x => x.maxNum],
                    [{name: "最小人数", width: "10%"}, x => x.minNum],
                    [{name: "开始时间", width: "10%"}, x => x.startTime],
                    [{name: "结束时间", width: "10%"}, x => x.endTime],
                    [{name: "授课教师", width: "10%"}, x => x.teacher],
                    [{name: "地点", width: "10%"}, x => x.place]
                ],
                operation_header: "操作",
                operation_buttons: (item, i, list) => {
                    if(item.signup === true) {
                        return `<button class=\"btn btn-sm btn-warning\" @click=\"pick('${list}')\">退选</button>`
                    } else {
                        return "<button class=\"btn btn-sm btn-primary\">选课</button>"
                    }
                },
                operation_methods: {
                    pick: function (idx) {
                        console.log(typeof idx);
                        for(let i = 0; i < idx.length; i++) {
                            console.log(idx[i]);
                        }
                        alert(idx);
                    }
                }
            };
        },
        components: {
            'class-table': Table
        }
    };
</script>
