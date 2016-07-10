<template>
    <ol class="class-list">
        <template v-for="item in classes">
            <li @click="view(item.id)">
                {{item.cnname}}
            </li>
        </template>
    </ol>
    <dl class="dl-horizontal class-detail" v-if="classes.length !== 0">
        <dt>中文名称</dt>
        <dd>{{classDetail.cnname}}</dd>
        <dt>英文名称</dt>
        <dd>{{classDetail.enname}}</dd>
        <dt>授课教师</dt>
        <dd>{{classDetail.teacher}}</dd>
        <dt>开始日期</dt>
        <dd>{{classDetail.startDate}}</dd>
        <dt>结束日期</dt>
        <dd>{{classDetail.endDate}}</dd>
        <dt>开始时间</dt>
        <dd>{{classDetail.startTime}}</dd>
        <dt>结束时间</dt>
        <dd>{{classDetail.endTime}}</dd>
        <dt>最大人数</dt>
        <dd>{{classDetail.maxNum}}</dd>
        <dt>最小人数</dt>
        <dd>{{classDetail.minNum}}</dd>
        <dt>当前人数</dt>
        <dd>{{classDetail.number}}</dd>
        <dt>地点</dt>
        <dd>{{classDetail.place}}</dd>
    </dl>
</template>

<style lang="less" rel="stylesheet/less">
    .list-cur {
        font-weight: bold;
    }

    .class-list {
        width: 200px;
        display: block;
        float: left;
        line-height: 30px;
        & > li {
            cursor: pointer;
        }
        & > li:hover {
            font-weight: bold;
        }
    }

    .class-detail {
        width: 600px;
        display: block;
        float: left;
        & > dt {
            width: 100px;
        }
        & > dd {
            margin-left: 140px;
        }
        & > dt, & > dd {
            line-height: 2;
        }
    }
</style>

<script>
    import _ from 'lodash';
    import au from '../api/user';
    import ac from '../api/class';
    import * as u from '../utils/utils';
    // import au from '../api/user';

    export default {
        data () {
            return {
                classes: [],
                classDetail: {}
            };
        },
        methods: {
            view: function (id) {
                let idx = _.findIndex(this.classes, cur => {
                    return cur.id === id;
                });
                this.classDetail = this.classes[idx];
            }
        },
        ready () {
            let self = this;
            Promise.all([au.getUserClass(u.get_cookie('class_selector_userid'))])
            .then(([user_class]) => {
                console.log(user_class);
                let classes = [],
                    signup = user_class.data.signup;
                for (var o in signup) {
                    if (signup[o] === true) {
                        classes.push(o);
                    }
                }

                let classes_task = [];

                classes.map(classid => {
                    classes_task.push(ac.classDetail(classid));
                });

                Promise.all(classes_task)
                .then(ret => {
                    if(ret.length !== 0) {
                        for (var i = 0; i < ret.length; i++) {
                            self.classes.push(ret[i].data);
                        }
                        self.classDetail = ret[0].data;
                    }
                });

            });
        }
    };
</script>
