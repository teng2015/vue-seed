export const updateUser = makeAction('UPDATE_USER');

function makeAction (type) {
    return ({ dispatch }, ...args) => dispatch(type, ...args);
};
