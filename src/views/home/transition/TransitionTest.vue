<template>
  <div class="container">
    <div class="btns">
      <el-button size="mini" @click="prev">上一张</el-button>
      <el-button size="mini" @click="next">下一张</el-button>
    </div>
    <transition :name="`${direction}-image`">
      <img class="image" :src="curImage" :key="curIndex" />
    </transition>
  </div>
</template>

<script>
import imgTest1 from "../../../assets/img/test1.jpg";
import imgTest2 from "../../../assets/img/test2.jpg";
import imgTest3 from "../../../assets/img/test3.jpg";
import imgTest4 from "../../../assets/img/test4.jpg";
import imgTest5 from "../../../assets/img/test5.jpg";
import imgTest6 from "../../../assets/img/test6.jpg";
import imgTest7 from "../../../assets/img/test7.jpg";
import imgTest8 from "../../../assets/img/test8.jpg";
/**
 * 备注：
 * 1.如果transition 上没有定义name,则类名微v-xxxx
 * 2.如果transition上定义了name, 则类名为${name}-xxxx
 * 3.如果指定了类名，直接使用指定的类名
 * enter-class
 * in-out:先进入再消失
 * out-in:先消失再进入
 */
export default {
  data() {
    return {
      // curImage:0,
      direction: "next",
      curIndex: 0,
      images: [
        imgTest1,
        imgTest2,
        imgTest3,
        imgTest4,
        imgTest5,
        imgTest6,
        imgTest7,
        imgTest8,
      ],
    };
  },
  computed: {
    curImage() {
      return this.images[this.curIndex];
    },
    maxIndex() {
      return this.images.length - 1;
    },
  },
  methods: {
    //上一张
    prev() {
      this.curIndex--;
      if (this.curIndex < 0) {
        this.curIndex = this.maxIndex;
      }
      this.direction = "prev";
    },
    next() {
      this.curIndex++;
      if (this.curIndex > this.maxIndex) {
        this.curIndex = 0;
      }
      this.direction = "next";
    },
  },
};
</script>

<style lang="scss" scoped>
.container {
  // text-align: center;
  position: relative;
  height: 290px;
  .btns button {
    margin: 1em 0.5em;
  }
}
.image {
  // top:100px;
  width: 200px;
  height: 200px;
  border-radius: 50%;
  position: absolute;
  margin-left: -100px;
  left: 50%;
}

.next-image-enter-active,
.next-image-leave-active,
.prev-image-enter-active,
.prev-image-leave-active {
  transition: 0.5s;
}

//离开最终的状态
.next-image-enter,
.next-image-leave-to,
.prev-image-enter,
.prev-image-leave-to {
  opacity: 0;
}
.next-image-enter,
.prev-image-leave-to {
  transform: translateX(200px);
}

.next-image-leave-to,
.prev-image-enter {
  transform: translateX(-200px);
}
</style>
