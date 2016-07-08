import * as types from '../mutation-types';

var state = {
    user: {}
};

const mutations = {
    SET_USER (state, user) {
        state.user = user;
    }
};

export default {
    state,
    mutations
};
