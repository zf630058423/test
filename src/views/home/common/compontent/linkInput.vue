<template>
  <div class="link-input">
    <el-input
      ref="input"
      v-on="$listeners"
      v-bind="$attrs"
      v-model="currentValue"
      @blur="blur"
      :style="style"
    >
    </el-input>
    <div
      class="link"
      v-if="currentValue && linkStatus"
      @click="linkCancel"
      :style="linkStyle"
    >
      <el-tooltip
        class="item"
        effect="dark"
        :content="$attrs.tip || '连接'"
        placement="bottom-start"
      >
        <span class="link-span" @click.stop="toLink">{{ currentValue }}</span>
      </el-tooltip>
    </div>
  </div>
</template>
<script>
/**
 * 文本框组件包含连接文字或数字
 * value： 默认值
 */
export default {
  name: "linkInput",
  props: {
    value: {
      type: [String, Number],
      default: "",
    },
    linkUrl: {
      type: String,
      default: "http://www.baidu.com",
    },
    height: {
      type: Number,
      default: 32,
    },
    width: {
      type: Number,
      default: 200,
    },
    size: {
      type: Number,
      default: 14,
    },
  },
  data() {
    return {
      linkStatus: false,
      currentValue: "",
    };
  },
  watch: {
    value: {
      handler(value) {
        this.currentValue = value;
      },
      immediate: true,
    },
  },
  computed: {
    style() {
      return {
        width: this.width + "px",
        height: this.height + "px",
      };
    },
    linkStyle() {
      return {
        height: this.height - 3 + "px",
        width: this.width - 19 + "px",
        lineHeight: this.height - 3 + "px",
        fontSize: this.size + "px",
      };
    },
  },
  mounted() {
    let _this = this;
    _this.$nextTick(() => {
      _this.$refs.input.$refs.input.style.height = this.height + "px";
    });
  },
  methods: {
    blur() {
      this.linkStatus = true;
    },
    linkCancel() {
      if (this.$attrs.disabled) return;
      this.linkStatus = !this.linkStatus;
      this.$refs.input.focus();
    },
    toLink() {
      window.location.href = this.linkUrl;
      // this.$emit('linkChange', this.currentValue);
    },
  },
};
</script>
<style scoped lang="scss">
.link-input {
  position: relative;

  .link {
    position: absolute;
    z-index: 1000;
    top: 2px;
    background: #f5f7fa;
    left: 1px;
    width: 99%;
    margin-right: 50px;
    border-radius: 4px;
    padding: 0 8px;

    &-span {
      display: inline-block;
      height: 30px;
      line-height: 30px;

      &:hover {
        cursor: pointer;
        color: #006eff;
        text-decoration-line: underline;
      }
    }
  }
}
</style>
