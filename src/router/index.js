import Vue from "vue";
import Router from "vue-router";
Vue.use(Router);

const routes = [
  {
    path: "/",
    redirect: "/home",
  },
  {
    path: "/home",
    name: "home",
    component: () => import("../views/home/index.vue"),
    children: [
      {
        path: "/home",
        name: "home",
        component: () => import("../views/home/main/index.vue"),
      },
      {
        path: "/guide",
        name: "guide",
        component: () => import("../views/home/guide/index.vue"),
        children: [
          {
            path: "/guide/description",
            name: "index",
            component: () =>
              import("../views/home/guide/description/index.vue"),
          }, //项目说明
          {
            path: "/guide/toolLibrary",
            name: "toolLibrary",
            component: () =>
              import("../views/home/guide/toolLibrary/index.vue"),
          }, //工具库合集
        ],
      },
      {
        path: "/common", //常用组件
        name: "common",
        component: () => import("../views/home/common/index.vue"),
        children: [
          {
            path: "/common/textInput", //文本框组件
            name: "textInput",
            component: () => import("../views/home/common/text/textInput.vue"),
          },
          {
            path: "/common/upload", //文件上传组件
            name: "upload",
            component: () => import("../views/home/common/upload/index.vue"),
          },
        ],
      },
      {
        path: "/advanced", //高级组件
        name: "advanced",
        component: () => import("../views/home/advanced/index.vue"),
        children: [
          {
            path: "/advanced/rowLay",
            name: "rowLay",
            component: () => import("../views/home/advanced/rowLay/index.vue"),
          },
          {
            path: "/advanced/formLay",
            name: "formLay",
            component: () => import("../views/home/advanced/formLay/index.vue"),
          },
        ],
      },
      {
        path: "/modern", //现代css
        name: "modern",
        component: () => import("../views/home/modern/index.vue"),
        children: [
          {
            path: "/modern/border",
            name: "border",
            component: () => import("../views/home/modern/border/index.vue"),
          },
          {
            path: "/modern/boxShadow",
            name: "boxShadow",
            component: () => import("../views/home/modern/boxShadow/index.vue"),
          },
          {
            path: "/modern/gradient",
            name: "gradient",
            component: () => import("../views/home/modern/gradient/index.vue"),
          },
        ],
      },
      {
        path: "/lib", //类库
        name: "lib",
        component: () => import("../views/home/lib/index.vue"),
      },
      {
        path: "/fun", //函数
        name: "fun",
        component: () => import("../views/home/fun/index.vue"),
        children: [
          {
            path: "/fun/decimalCalcu",
            name: "decimalCalcu",
            component: () => import("../views/home/fun/decimalCalcu/index.vue"),
          },
          {
            path: "/fun/ordinary", //普通函数
            name: "ordinary",
            component: () => import("../views/home/fun/ordinary/index.vue"),
          },
          {
            path: "/fun/sortAlgorithm", //排序算法
            name: "sortAlgorithm",
            component: () =>
              import("../views/home/fun/sortAlgorithm/index.vue"),
          },
          {
            path: "/fun/designPatterns", //设计模式
            name: "designPatterns",
            component: () =>
              import("../views/home/fun/designPatterns/index.vue"),
          },
        ],
      },
      {
        path: "/asyncSlot",
        name: "asyncSlot",
        component: () => import("../views/home/slot/AsyncSlot.vue"),
      },
      {
        path: "/transition",
        name: "transition",
        component: () => import("../views/home/transition/index.vue"),
      },
    ],
  },
];

const createRouter = () =>
  new Router({
    model: "history",
    base: "/",
    routes: routes,
  });

const router = createRouter();

export default router;
