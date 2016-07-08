<template>
    <div class='app-header'>
        <span class='app-header-title'>Class Selector</span>
        <div class='app-greet pull-right mr20'>
            <span>Welcome, {{user.username || "Student"}} {{time}} <span class="logout" @click="logout">退出</span></span>
        </div>
    </div>
</template>

<style lang="less" rel="stylesheet/less">
    .app-header {
        width: 100%;
        height: 50px;
        border-bottom: 1px solid #ccc;
        border-bottom: 1px solid #e5e5e5;
        background-color: rgba(43,44,46,0.95);
        color: #FAFAFA;

        .app-header-title {
            font-size: 16px;
            line-height: 50px;
            margin-left: 45px;
        }

        .app-greet {
            line-height: 50px;
            .logout {
                margin-left: 10px;
                cursor: pointer;
            }
        }
    }
</style>

<script>
    import request from '../utils/ajax';
    import * as u from '../utils/utils';

    var getTime = () => {
        let date = new Date(),
            h = date.getHours(),
            m = date.getMinutes()
        return (h < 10 ? ('0' + h) : h) + ':' + (m < 10 ? ('0' + m) : m);
    };

    export default {
        props: ['user'],
        data () {
            return {
                time: getTime()
            };
        },
        methods: {
            logout () {
                u.set_cookie('class_selector_userid', null);
                this.$route.router.go('login');
            }
        },
        ready () {
            let self = this
            setInterval(() => {
                self.time = getTime()
            }, 60000)
        }
    };

</script>
