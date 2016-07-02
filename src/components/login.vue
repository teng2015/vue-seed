<template>
    <div class="panel panel-primary app-login">
        <div class="panel-heading">用户登录</div>
        <div class="panel-body">
            <form>
                <div class='form-group'>
                    <label>用户名</label>
                    <input type='text' ref='username' class='form-control' v-model="username"/>
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
    import request from '../utils/ajax';
    import * as u from '../utils/utils';

    export default {
        data () {
            return {
                username: '',
                password: ''
            };
        },
        methods: {
            onSubmit: function() {

                let self = this,
                    {username, password} = this;

                request.post('/login', {
                    data: {
                        username,
                        password
                    }
                }).then(ret => {

                    if (ret.result) {
                        u.set_cookie('app_username', ret.data.id);

                        request.get(`/getUser/${ret.data.id}`)
                        .then(ret => {
                            console.log(ret);
                            self.$route.router.go('app');
                        });
                        
                    } else {
                        alert(ret.msg);
                    }

                });

            }
        }
    };

</script>
