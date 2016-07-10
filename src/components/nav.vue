<template>
    <div class="left-nav">
        <ul class="item-list mt10">
            <li class="list-item" @click="go('hall')">
                <a><i class="fa fa-dashboard mr5"></i>选课大厅</a>
            </li>
            <li class="list-item" @click="go('manage')">
                <a><i class="fa fa-bookmark mr5"></i>已选课程</a>
            </li>
        </ul>
    </div>
</template>

<style lang="less" rel="stylesheet/less">
    .left-nav {
        width: 200px;
        height: 100%;
        float: left;
        overflow: hidden;
        background-color: #F5F5F5;
        .item-list {
            list-style: none;
            padding: 0;
            .list-item {
                height: 45px;
                line-height: 45px;
                text-align: center;
                & > a {
                    display: block;
                    width: 100%;
                    color: #333;
                    cursor: pointer;
                    text-decoration: none;
                    &:hover {
                        background-color: #ccc;
                    }
                }
            }
        }
    }
</style>

<script>
    export default {
        data () {
            return {}
        },
        methods: {
            go: function (route) {
                this.$route.router.go('/app/' + route);
            }
        }
    };
</script>
