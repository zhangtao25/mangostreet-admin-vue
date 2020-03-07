import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'

import BasicLayout from './../layouts/BasicLayout'
import PageView from './../layouts/PageView'

Vue.use(VueRouter)

const routes = [

  {
    path: '/',
    name: 'index',
    component: BasicLayout,
    redirect: '/note/list',
    children: [
      {
        path: '/note',
        name: 'note',
        component: PageView,
        redirect: '/note/list',
        meta: { title: '笔记', icon: 'table'},
        children: [
          {
            path: '/note/list',
            name: 'table-list',
            component: () => import('../views/note/list/index.vue'),
            meta: { title: '笔记列表'}
          },
          {
            path: '/note/detail',
            name: 'tttttt',
            component: () => import('../views/note/list/tttt.vue'),
            meta: { title: '笔记详情'}
          },
        ]
      },
      {
        path: '/user',
        component: PageView,
        redirect: '/user/list',
        meta: { title: '用户', icon: 'table', permission: [ 'table' ] },
        children: [
          {
            path: '/user/list',
            component: () => import('../views/user/index.vue'),
            meta: { title: '用户列表'}
          },
          {
            path: '/user/detail',
            component: () => import('../views/user/tttt.vue'),
            meta: { title: '用户详情'}
          },
        ]
      },
    ]
  },

  {
    path:'/user/login',
    component:() => import('./../views/user/List')
  },
  // {
  //   path: '*', redirect: '/404', hidden: true
  // }
]

const router = new VueRouter({
  routes
})

export default router
