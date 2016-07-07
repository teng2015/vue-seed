import Vue from 'vue';
// import Vuex from 'vuex';
import VueRouter from 'vue-router';

import * as u from './utils/utils';
import store from './vuex/store';

/* define components */
import LoginComponent from './components/login';
import AppComponent from './components/app';

require('../public/css/base.less');

// Vue.use(Vuex);
Vue.use(VueRouter);
Vue.config.debug = true;

var App    = Vue.extend({ store });
var router = new VueRouter();

var routersMap = {
    '/': {
        component: function (resolve) {
            if (!u.get_cookie('app_username')) {
                router.go('login');
                return;
            } else {
                router.go('app');
            }
        }
    },
    '/login': {
        name: 'login',
		component: LoginComponent
	},
    '/app': {
        name: 'index',
        component: AppComponent
    }
};

router.redirect({//定义全局的重定向规则。全局的重定向会在匹配当前路径之前执行。
    '*': "/"//重定向任意未匹配路径到/index
});

router.map(routersMap);
router.start(App, '#App');
