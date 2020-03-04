import { PageView } from '@/layouts'

export const arr = [
  // ss
  // 笔记
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
        component: () => import('@/views/note/list/TableList'),
        meta: { title: '笔记列表', permission: [ 'profile' ] }
      },
      {
        path: '/note/query-list',
        name: 'query-list',
        component: () => import('@/views/note/list/QueryList'),
        meta: { title: '笔记详情', permission: [ 'profile' ] }
      }
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
        meta: { title: 'q', permission: [ 'profile' ] }
      }
    ]
  },
]