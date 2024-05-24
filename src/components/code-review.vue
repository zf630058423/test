<template>
  <div class="copy-code-container">
    <div class="copy-container flex-row">
      <el-tooltip content="复制代码" placement="top-start">
        <i class="el-icon-copy-document" @click="handleCopy(code, $event)"></i>
      </el-tooltip>

      <el-tooltip :content="showCodeContent" placement="top-start">
        <i @click="handeShowCode" class="el-icon-arrow-right"></i>
      </el-tooltip>
    </div>
    <div class="code-palce-container" :class="{ 'show-code': showCode }">
      <div class="code-box" v-highlight>
        <pre>
          <code class="javascirpt lang-javascript" >{{ code }}</code>
        </pre>
      </div>
    </div>
  </div>
</template>

<script>
import clip from "@/utils/clipboard"; // use clipboard directly

export default {
  name: "codeReview",
  data() {
    return {
      showCode: false,
    };
  },
  props: {
    code: {
      type: String,
      default: "",
    },
  },
  computed: {
    showCodeContent() {
      return !this.showCode === true ? "显示代码" : "隐藏代码";
    },
  },
  methods: {
    handeShowCode() {
      this.showCode = !this.showCode;
    },
    handleCopy(text, event) {
      clip(text, event);
    },
  },
};
</script>

<style lang="scss" scoped>
.copy-code-container {
  width: 100%;
  text-align: left;

  .copy-container {
    width: 100%;
    height: 50px;
    justify-content: right;
    align-items: center;
    position: relative;
    display: flex;

    .ant-btn {
      width: 58px;
      height: 38px;
      margin: 0;
      border: none;
      box-shadow: none;
      background-color: transparent;
      padding: 0;
    }

    i {
      cursor: pointer;
      font-size: 18px;
      padding: 10px 20px;
    }
  }

  .code-palce-container {
    width: 100%;
    height: 0;
    overflow: hidden;
    transition: all linear 0.1s;

    &.show-code {
      height: 100%;
    }
  }
}

::v-deep .hljs {
  padding: 0 20px;
  line-height: 25px;
}
::v-deep .hljs-tag {
  color: #3182bd;
}
::v-deep .hljs-tag .hljs-name,
.hljs-tag .hljs-attr {
  color: #3182bd;
}
</style>
