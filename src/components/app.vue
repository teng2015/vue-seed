<template>
    <div class="app-wrapper">
        <app-header></app-header>
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
    // import * as acts from '../vuex/actions';
    import * as u from '../utils/utils';
    import store from '../vuex/store';

    export default {
        store,
        data () {
            return {
                user: this.user
            };
        },
        components: {
            'app-header': require('./header'),
            'app-main': require('./index')
        }
    };

    // var App = Vue.extend({
    //     data () {
    //         return {
    //             user: this.user
    //         };
    //     },
    //     components: {
    //         'app-header': require('../header'),
    //         'app-main': require('../main')
    //     },
        // replace: true,
        // vuex: {
        //     getters: {
        //         user: state => state.user
        //     },
        //     actions: {
        //
        //     }
        // },
        // vuex: {
        //     getters: {
        //         user: state => state.user
        //     },
        //     actions: {
        //         updateUser: acts.updateUser
        //     }
        // },
        // creaded () {
        //
        //     let self = this;
        //     request.get(`/getUser/${u.get_cookie('app_username')}`)
        //     .then(ret => {
        //
        //         if (ret.result) {
        //             self.updateUser(ret.data);
        //             // u.set_cookie('app_username', ret.data.id);
        //         } else {
        //             alert(ret.msg);
        //         }
        //
        //     });
        // }
    // });


</script>
