<template>
    <div class="panel panel-primary app-login">
        <div class="panel-heading">用户登录</div>
        <div class="panel-body">
            <form>
                <div class='form-group'>
                    <label>用户账号</label>
                    <input type='text' ref='userid' class='form-control' v-model="userid"/>
                </div>
                <div class='form-group'>
                    <label>密码</label>
                    <input type='password' ref='password' class='form-control' v-model="password"/>
                </div>
                <input type='button' value='登录' v-on:click="onSubmit" class='btn btn-primary pull-right' />
            </form>
        </div>
    </div>
</template>

<style>
    .app-login {
        margin: 0 auto;
        margin-top: 100px;
        width: 400px;
    }
</style>

<script>
    import aa from '../api/auth';
    import * as u from '../utils/utils';

    export default {
        data () {
            return {
                userid: '',
                password: ''
            };
        },
        methods: {
            onSubmit: function() {

                let self = this,
                    {userid, password} = this;

                aa.login(userid, password).then(ret => {

                    if (ret.result) {
                        u.set_cookie('class_selector_userid', ret.data.id);

                        self.$route.router.go('app');

                    } else {
                        alert(ret.msg);
                    }

                });

            }
        }
    };

</script>
