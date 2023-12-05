<template>
  <div class="container">
    <div class="input-row">
      <el-input
        type="text"
        @change="addTodo"
        v-model="newTodoContent"
        class="todo-content"
        placeholder="input todo"></el-input>

        <el-button class="shuffle" @click="shuffle">随机排序</el-button>
    </div>
    
    <transition-group tag="ul" name="todo" class="todo-container">
      <li v-for="item in todos" :key="item.id" class="todo">
        <span>{{ item.content }}</span>
        <button @click="finishTodo(item)">完成</button>
      </li>
    </transition-group>
  </div>
  
</template>

<script>
function randomId(){
  return Math.random().toString(16).substr(2,5);
}
export default {
  data(){
    return{
      todos:[
        {id: randomId(), content: '学习Vue'},
        {id: randomId(), content: '学习React'},
        {id: randomId(), content: '学习A凝固了'}
    ],
    newTodoContent:'',
    }
  },
  methods:{
    addTodo(){
      if(!this.newTodoContent){
        return;
      }
      this.todos.unshift({
        id: randomId(),
        content: this.newTodoContent
      })
      this.newTodoContent = '';
    },
    finishTodo(item){
      this.todos = this.todos.filter(it => it !== item)
    },
    shuffle(){
      this.todos.sort(() => Math.random() - 0.5);
    }
  }
}
</script>

<style lang="scss" scoped>
.container{
  width: 500px;

  .input-row{
    display: flex;
    justify-content: flex-start;
  }
  .todo-content{
    // width: 150px;
  }
  .todo{
    display: flex;
    justify-content:space-between;
    padding: 8px;
    border-bottom: 1px solid #ccc;
  }
}
.todo-enter{
  opacity: 0;
  transform: translateX(-100%);
}
.todo-enter-active,.todo-leave-active, .todo-move{
  transition: 0.5s;
}
.toto-leave-to{
  opacity: 0;
  transform: translateX(100%)
}

.todo-leave-active{
  position: absolute;
}
</style>