import Vue from 'vue';
import Router from 'vue-router';
Vue.use(Router);

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'home',
    component: () => import('../views/home/index.vue'),
    children: [
      {
        path: '/home',
        name: 'home',
        component: () => import('../views/home/main/index.vue'),
      },
      {
        path: '/guide',
        name: 'guide',
        component: () => import('../views/home/guide/index.vue'),
        children: [
          {
            path: '/guide/description',
            name: 'index',
            component: () => import('../views/home/guide/description/index.vue')
          },  //项目说明
          {
            path: '/guide/toolLibrary',
            name: 'toolLibrary',
            component: () => import('../views/home/guide/toolLibrary/index.vue')
          }  //工具库合集
        ]
      },
      {
        path: '/common',  //常用组件
        name: 'common',
        component: () => import('../views/home/common/index.vue'),
        children: [
          {
            path: '/common/textInput',  //常用组件
            name: 'textInput',
            component: () => import('../views/home/common/textInput.vue'),
          }
        ]
      },
      {
        path: '/advanced',  //高级组件
        name: 'advanced',
        component: () => import('../views/home/advanced/index.vue')
      },
      {
        path: '/modern',  //现代css
        name: 'modern',
        component: () => import('../views/home/modern/index.vue'),
        children: [
          {
            path: '/modern/border',
            name: 'border',
            component: () => import('../views/home/modern/border/index.vue'),
          },
          {
            path: '/modern/background',
            name: 'background',
            component: () => import('../views/home/modern/background/index.vue'),
          },
          {
            path: '/modern/gradient',
            name: 'gradient',
            component: () => import('../views/home/modern/gradient/index.vue'),
          },
        ]
      },
      {
        path: '/lib',  //类库
        name: 'lib',
        component: () => import('../views/home/lib/index.vue'),
      },
      {
        path: '/fun',  //函数
        name: 'fun',
        component: () => import('../views/home/fun/index.vue'),
        children: [
          {
            path: '/fun/decimalCalcu',
            name: 'decimalCalcu',
            component: () => import('../views/home/fun/decimalCalcu/index.vue')
          },
          {
            path: '/fun/ordinary', //普通函数
            name: 'ordinary',
            component: () => import('../views/home/fun/ordinary/index.vue')
          },
          {
            path: '/fun/other',
            name: 'other',
            component: () => import('../views/home/fun/other/index.vue')
          },
        ],
      },
      {
        path: '/asyncSlot',
        name: 'asyncSlot',
        component: () => import('../views/home/slot/AsyncSlot.vue')
      },
      {
        path: '/transition',
        name: 'transition',
        component: () => import('../views/home/transition/index.vue'),
        children: [
          {
            path: '/transition/transitionTest',
            name: 'transitionTest',
            component: () => import('../views/home/transition/TransitionTest.vue')
          },
          {
            path: '/transition/transitionList',
            name: 'transitionList',
            component: () => import('../views/home/transition/TransitionList.vue')
          },
          {
            path: '/transition/transitionList2',
            name: 'transitionList2',
            component: () => import('../views/home/transition/TransitionList2.vue')
          },
        ]
      },

    ]
  }

]

const createRouter = () => new Router({
  model: 'history',
  base: '/',
  routes: routes
})

const router = createRouter();

export default router;