<template>
    <div class="app-main">
        <app-nav></app-nav>
        <app-content></app-content>
    </div>
</template>

<style lang="less" rel="stylesheet/less">
    .app-main {
        position: absolute;
        top: 50px;
        bottom: 0;
        width: 100%;
        background-color: #fff;
    }
</style>

<script>
    import request from '../utils/ajax';
    import * as acts from '../vuex/actions';
    import * as u from '../utils/utils';

    import Nav from './nav';
    import Content from './content';

    export default {
        components: {
            'app-nav': Nav,
            'app-content': Content
        }
    };
</script>
