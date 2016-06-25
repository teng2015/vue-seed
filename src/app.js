import Vue from 'vue';
require('./app.styl');

var app = new Vue({
    el: '#app',
    data: {},
    components: {
        'app-header': (resolve) => {
            require(['./views/header'], resolve);
        },
        'app-main': (resolve) => {
            require(['./views/main'], resolve);
        }
    }
});


let route = () => {
    app.view = window.location.hash.slice(1) || 'page-a';
};

window.addEventListener('hashchange', route);
window.addEventListener('load', route);
