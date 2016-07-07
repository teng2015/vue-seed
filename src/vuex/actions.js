import * as types from './mutation-types';

export const setUser = ({ dispatch }, user) => {
    console.log(user);
    dispatch(types.SET_USER, user);
};

function makeAction (type) {
    return ({ dispatch }, ...args) => dispatch(type, ...args);
};
