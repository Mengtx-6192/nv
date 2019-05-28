<template>
    <div class="app">
        <div class="router">
            <router-link class="link" to="/hello" tag="span">父子传值</router-link>
            <router-link class="link" to="/brother" tag="span">兄弟传值</router-link>
            <router-link class="link" to="/parent">祖孙传值</router-link>
        </div>
        <router-view />
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
    .router {
        background: #c3d2bd;
        height: 80px;
        line-height: 80px;
        display: flex;
        text-align: center;
    }
    .router .link {
        flex: 1;
        cursor: pointer;
    }
    .router-link-exact-active,
    .active {
        color: red
    }
</style>