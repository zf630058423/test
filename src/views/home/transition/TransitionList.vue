<template>
  <div class="container">
    <button @click="addNumber">add number</button>
    <button @click="delNumber">del number</button>
    <button @click="shuffle">随机排序</button>
    <transition-group tag="ul" name="nums">
      <li v-for="item in nums" :key="item">{{item}}</li>
    </transition-group>
  </div>
</template>

<script>
export default { 
   data(){
    return{
      nums:[1,2,3,4,5,6],
      next:7
    }
   },
   methods:{
     getRandomIndex(){
      return Math.floor(Math.random() * this.nums.length);
     },
     addNumber(){
      let index = this.getRandomIndex();
      this.nums.splice(index, 0, this.next);
      this.next++;
     },
     delNumber(){
      let index = this.getRandomIndex();
      this.nums.splice(index, 1);
      this.next--;
     },
     shuffle(){
      this.nums.sort(() => Math.random() - 0.5);
     },
   }
}
</script>

<style lang="scss" scoped>
.container {
  position: relative;
  }
.nums-enter, .nums-leave-to{
  opacity: 0;
  transform: translateX(100px);
}
.nums-enter-active, .nums-leave-active{
  transition:0.5s;
}
.nums-move{
  transition: .5s;
}

.nums-leave-active{
  position: absolute;
}
</style>