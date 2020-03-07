// eslint-disable-next-line
import { UserLayout, BasicLayout, RouteView, BlankLayout, PageView } from '@/layouts'
import { bxAnaalyse } from '@/core/icons'

export const asyncRouterMap = [
  {
    path: '/',
    name: 'index',
    component: BasicLayout,
    meta: { title: '首页' },
    redirect: '/note/table-list',
    children: [
      {
        path: '/note',
        name: 'note',
        component: PageView,
        redirect: '/note/table-list',
        meta: { title: '笔记', icon: 'table', permission: [ 'table' ] },
        children: [
          {
            path: '/note/table-list',
            name: 'table-list',
            component: () => import('@/views/note/list/index'),
            meta: { title: '笔记列表', permission: [ 'profile' ] }
          },
          {
            path: '/note/query-list',
            name: 'query-list',
            component: () => import('@/views/note/list/index'),
            meta: { title: '笔记详情', permission: [ 'profile' ] }
          },
          {
            path: '/note/add',
            name: 'add-note',
            component: () => import('@/views/note/add/BasicForm'),
            meta: { title: '添加笔记', keepAlive: true, permission: [ 'form' ] }
          },
        ]
      },
      // 用户
      {
        path: '/user',
        name: 'user',
        component: PageView,
        redirect: '/user/table-list',
        meta: { title: '用户', icon: 'table', permission: [ 'table' ] },
        children: [
          {
            path: '/user/table-list',
            name: 'table-list1',
            component: () => import('@/views/nuser/list/TableList'),
            meta: { title: '用户列表', permission: [ 'profile' ] }
          },
          {
            path: '/user/query-list',
            name: 'query-list2',
            component: () => import('@/views/nuser/list/QueryList'),
            meta: { title: '用户详情', permission: [ 'profile' ] }
          }
        ]
      },
      {
        path: '/public',
        name: 'public',
        component: PageView,
        redirect: '/public/build',
        meta: { title: '发布', icon: 'table', permission: [ 'table' ] },
        children: [
          {
            path: '/public/build',
            name: 'build',
            component: () => import('@/views/public/build/index'),
            meta: { title: '构建', permission: [ 'profile' ] }
          },
          {
            path: '/public/terminal',
            name: 'terminal',
            component: () => import('@/views/public/terminal/index'),
            meta: { title: '终端', permission: [ 'profile' ] }
          },
          {
            path: '/public/docker',
            name: 'docker',
            component: () => import('@/views/public/docker/index'),
            meta: { title: 'docker', permission: [ 'profile' ] }
          },
        ]
      },
    ]
  },
  {
    path: '*', redirect: '/404', hidden: true
  }
]

/**
 * 基础路由
 * @type { *[] }
 */
export const constantRouterMap = [
  ...asyncRouterMap,
  {
    path: '/user',
    component: UserLayout,
    redirect: '/user/login',
    hidden: true,
    children: [
      {
        path: 'login',
        name: 'login',
        component: () => import(/* webpackChunkName: "user" */ '@/views/user/Login')
      },
      {
        path: 'register',
        name: 'register',
        component: () => import(/* webpackChunkName: "user" */ '@/views/user/Register')
      },
      {
        path: 'register-result',
        name: 'registerResult',
        component: () => import(/* webpackChunkName: "user" */ '@/views/user/RegisterResult')
      },
      {
        path: 'recover',
        name: 'recover',
        component: undefined
      }
    ]
  },

  {
    path: '/test',
    component: BlankLayout,
    redirect: '/test/home',
    children: [
      {
        path: 'home',
        name: 'TestHome',
        component: () => import('@/views/Home')
      }
    ]
  },

  {
    path: '/404',
    component: () => import(/* webpackChunkName: "fail" */ '@/views/exception/404')
  }

]
