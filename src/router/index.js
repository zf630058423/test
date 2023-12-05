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
        path: '/main',
        name: 'main',
        component: () => import('../views/home/main/index.vue'),
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