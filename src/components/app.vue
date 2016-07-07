<template>
    <div class="app-wrapper">
        <app-header :user="user"></app-header>
        <app-main></app-main>
    </div>
</template>

<style lang="less" rel="stylesheet/less">
    .app-wrapper {
        position: fixed;
        width: 100%;
        top:    0;
        right:  0;
        bottom: 0;
        left:   0;
    }
</style>

<script>
    import request from '../utils/ajax';
    import * as u from '../utils/utils';
    import store from '../vuex/store';
    import au from '../api/user';
    import {setUser} from '../vuex/actions';

    export default {
        vuex: {
            actions: { setUser }
        },
        data: function () {
            return {
                user: {}
            };
        },
        components: {
            'app-header': require('./header'),
            'app-main': require('./index')
        },
        ready: function () {
            var self = this;
            au.getUser("qiao_yixuan")
            .then(ret => {
                self.setUser(ret.data);
                self.user = ret.data;
            });
        }
    };

</script>
