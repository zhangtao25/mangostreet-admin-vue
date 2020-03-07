<template>
    <a-layout id="components-layout-demo-side" style="min-height: 100vh" >
        <a-layout-sider
                collapsible
                v-model="collapsed"
                :width="256"
                style="box-shadow: 2px 0 6px rgba(0,21,41,.35);"
        >
            <div class="logo-wrap">
                <img src="~@/assets/logo.svg" class="logo" alt="logo">
                <h1>mangostreet</h1>
            </div>
            <a-menu theme="dark"  :defaultSelectedKeys="defaultSelectedKeys" :openKeys.sync="openKeys" mode="inline" @click="onClickMenu">

                <a-sub-menu
                        key="/note">
                    <span slot="title"><a-icon type="team" /><span>笔记</span></span>
                    <a-menu-item key="/note/list">列表</a-menu-item>
                    <a-menu-item key="/note/detail">详情</a-menu-item>
                </a-sub-menu>

                <a-sub-menu
                        key="/user">
                    <span slot="title"><a-icon type="team" /><span>用户</span></span>
                    <a-menu-item key="/user/list">列表</a-menu-item>
                    <a-menu-item key="/user/detail">详情</a-menu-item>
                </a-sub-menu>



            </a-menu>
        </a-layout-sider>
        <a-layout>
            <a-layout-header style="background: #fff; padding: 0;box-shadow: 0 1px 4px rgba(0,21,41,.08);" />
            <a-layout-content style="margin: 0 16px">
                <a-breadcrumb style="margin: 16px 0">
                    <a-breadcrumb-item v-for="(item,index) of routeMatchs" :key="index" v-if="index !==0 ">
                        {{item['meta']['title']}}
                    </a-breadcrumb-item>
                </a-breadcrumb>
                <div style="border-radius: 2px" :style="{ padding: '24px', background: '#fff', minHeight: '360px' }">
                    <router-view/>
                </div>
            </a-layout-content>
            <a-layout-footer style="text-align: center">
                mangostreet ©2020 Created by zhangwenrou
            </a-layout-footer>
        </a-layout>
    </a-layout>
</template>
<script>
    export default {
        data() {
            return {
                collapsed: false,
                routeMatchs:[],
                openKeys:[''],
                defaultSelectedKeys:['']
            }
        },
        methods:{
            onClickMenu({ item, key, keyPath }){
                this.$router.push({path:key})
            },
            getRouteMeta(route){
                console.log(route)

                // 设置面包屑
                let routeMatchs = route.matched
                this.routeMatchs = []
                for (let i = 0; i < routeMatchs.length; i++) {
                    this.routeMatchs.push(routeMatchs[i])
                }

                // 设置展开一级菜单
                this.openKeys[0] = this.routeMatchs[1].path
                // 设置二级选中菜单
                this.defaultSelectedKeys[0] = this.routeMatchs[2].path
            }
        },
        mounted() {
            this.getRouteMeta(this.$route);
        },
        watch:{
            '$route':{
                deep:true,
                handler:function (newVal,oldVal) {
                    console.log(newVal,oldVal)
                    this.getRouteMeta(this.$route);
                }
            }
        }
    }
</script>

<style>

    .ant-layout-sider.ant-layout-sider-dark.ant-layout-sider-has-trigger{
        /*background-color: skyblue;*/
    }
    #components-layout-demo-side .logo-wrap {
        /*height: 32px;*/
        /*background: rgba(255,255,255,.2);*/
        background-color: rgb(4,33,62);
        padding: 16px;
        display: flex;
        align-items: center;
        /*justify-content: center;*/
    }


    #components-layout-demo-side .logo-wrap h1{
        color: #fff;
        font-size: 20px;
        margin: 0 0 0 12px;
        font-family: Avenir,Helvetica Neue,Arial,Helvetica,sans-serif;
        font-weight: 600;
        vertical-align: middle;
        /*line-height: 200px;*/
    }


    .logo{
        height: 32px;
        /*vertical-align: top;*/
        /*margin-right: 16px;*/
        border-style: none;
    }
</style>
