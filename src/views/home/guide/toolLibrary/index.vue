<template>
  <div class="tollibary-com">
    <h2>前端 JavaScript 必会工具库合集</h2>
    <div class="container">
      <div class="container_item" v-for="item in toolList" :key="item.id">
        <div class="container_item_title">{{ item.title }}</div>
        <div class="container_item_website" v-if="item.officialWebsite">
          <span class="container_item_website_text">官网：</span>
          <a :href="item.officialWebsite" target="_blank">{{
            item.officialWebsite
          }}</a>
        </div>
        <div class="container_item_china" v-if="item.chinaWebsite">
          <span class="container_item_china_text">中文网：</span>
          <a :href="item.officialWebsite" target="_blank">{{
            item.chinaWebsite
          }}</a>
        </div>
        <div class="container_item_mark" v-if="item.mark">
          <span class="container_item_mark_text">{{ item.mark }}</span>
        </div>
        <div class="container_item_address" v-if="item.address">
          <span class="container_item_address_text">下载地址：</span>
          <a :href="item.address" target="_blank">{{ item.address }}</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "tollibaryCom",
  data() {
    return {
      toolList: [
        {
          id: 1,
          title: "jQuery: 让操作DOM变得更容易",
          officialWebsite: "https://jquery.com/",
          chinaWebsite: "https://jquery.cuishifeng.cn/",
        },
        {
          id: 2,
          title: "Lodash: 你能想到的工具函数它都帮你写了",
          officialWebsite: "https://lodash.com/docs",
          chinaWebsite: "https://www.lodashjs.com/",
        },
        {
          id: 3,
          title: "Animate.css: 常见的CSS动画效果都帮你写好了",
          officialWebsite: "https://animate.style/",
          chinaWebsite: "",
        },
        {
          id: 4,
          title: "Axios：让网络请求变得更简单",
          officialWebsite: "https://axios-http.com/zh/",
          chinaWebsite: "",
        },
        {
          id: 5,
          title: "MockJS：ajax拦截和模拟数据生成",
          officialWebsite: "http://mockjs.com/",
          chinaWebsite: "",
        },
        {
          id: 6,
          title: "Moment：让日期处理更容易",
          officialWebsite: "https://momentjs.com/",
          chinaWebsite: "http://momentjs.cn/",
        },
        {
          id: 7,
          title: "ECharts：搞定所有你能想到的图表",
          officialWebsite: "https://echarts.apache.org/zh",
          chinaWebsite: "",
        },
        {
          id: 8,
          title: "animejs：简单好用的JS动画库",
          officialWebsite: "https://animejs.com/",
          chinaWebsite: "",
        },
        {
          id: 9,
          title: "editormd：markdown编辑器",
          officialWebsite: "https://pandao.github.io/editor.md",
          chinaWebsite: "",
        },
        {
          id: 10,
          title: "validate：简单好用的JS对象验证库",
          officialWebsite: "http://validatejs.org/",
          chinaWebsite: "",
        },
        {
          id: 11,
          title: "date-fns：功能和Moment几乎相同",
          officialWebsite: "https://date-fns.org/",
          chinaWebsite: "",
          mark: "支持tree shaking",
        },
        {
          id: 12,
          title: "zepto：功能和jQuery几乎相同",
          officialWebsite: "https://zeptojs.com/",
          chinaWebsite: "",
          mark: "对移动端支持更好，包体积更小",
        },
        {
          id: 13,
          title: "nprogress：简单好用的进度条插件YouTube就使用的是它",
          officialWebsite: "https://github.com/rstacruz/nprogress",
          chinaWebsite: "",
        },
        {
          id: 14,
          title: "qs：一个用于解析url的小工具",
          officialWebsite: "https://github.com/ljharb/qs",
          chinaWebsite: "",
        },
        {
          id: 15,
          title: "nodeJS：一个用于开发的JavaScript运行环境",
          officialWebsite: "https://nodejs.org/",
          chinaWebsite: "https://www.nodejs.com.cn/",
          address: "https://nodejs.org/en/download/",
        },
        {
          id: 16,
          title: "npmJS：npm包管理工具",
          officialWebsite: "https://www.npmjs.com/",
          chinaWebsite: "",
        },
        {
          id: 17,
          title: "nvm：node版本管理工具",
          officialWebsite: "https://nvmusa.org/",
          chinaWebsite: "",
          address: "https://github.com/coreybutler/nvm-windows/releases",
        },
        {
          id: 18,
          title: "yarn：yarn包管理工具",
          officialWebsite: "https://yarnpkg.com/",
          chinaWebsite: "",
        },
        {
          id: 19,
          title: "typeScript：typeScript是javascript超集",
          officialWebsite: "https://www.typescriptlang.org/",
          chinaWebsite: "https://www.typescriptlang.org/zh/",
        },
        {
          id: 20,
          title: "Sass：预编译",
          officialWebsite: "",
          chinaWebsite: "https://www.sass.hk/",
        },
        {
          id: 21,
          title: "Less：预编译",
          officialWebsite: "",
          chinaWebsite: "https://lesscss.cn/",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
$topBottomInterval: 16px; //上下间隔
$fontSize16: 16px; //字体大小

//混合 调用(传参数)公共样式
@mixin tbMargin($tbMargin: 8px, $lrMargin: 0) {
  margin: $tbMargin $lrMargin;
}

.tollibary-com {
  .tollibary-title {
    text-align: center;
  }

  .container {
    text-align: left;
    margin: 8px;

    &_item {
      @include tbMargin(24px, 8px);

      &_title {
        font-size: 20px;
        font-weight: bold;
        @include tbMargin;
      }

      &_website {
        @include tbMargin;
      }

      &_china {
        @include tbMargin;
      }

      &_mark {
        @include tbMargin;
      }

      &_address {
        @include tbMargin;
      }
    }
  }
}
</style>
