<template>
    <div class="content">
        <router-view></router-view>
    </div>
</template>

<style lang="less" rel="stylesheet/less">
    .content {
        position: relative;
        overflow: scroll;
        height: 100%;
        background: #fff;
        padding: 10px;
    }
</style>

<script>
    import Vue from 'vue';
    import ClassList from './class_list';

    export default {
        data () {
            return {};
        }
    };
</script>
