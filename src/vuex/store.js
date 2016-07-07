import Vue from 'vue';
import Vuex from 'vuex';

import user from './modules/user';

// 告诉 vue “使用” vuex
Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        user
    }
});
