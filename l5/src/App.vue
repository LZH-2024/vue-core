<template>
  <div id="app">
    <TodoHeader @insert="handleInsert"></TodoHeader>
    <TodoMain :todoList="todoList" @del="handelDelete"></TodoMain>
    <TodoFooter :todoList="todoList" @clear="handelClear"></TodoFooter>
  </div>
</template>

<script>
import TodoHeader from "@/components/TodoHeader.vue";
import TodoMain from "@/components/TodoMain.vue";
import TodoFooter from "@/components/TodoFooter.vue";

export default {
  name: 'App',
  components: {
    TodoHeader,
    TodoMain,
    TodoFooter
  },
  data() {
    return {
      todoName: '',
      todoList: JSON.parse(localStorage.getItem('todoList')) ||
          [
            {id: 1, name: '吃饭饭'},
            {id: 2, name: '睡觉觉'}
          ]
    }
  },
  methods: {
    handleInsert(todoName) {
      this.todoList.unshift({
        id: new Date().getTime(),
        name: todoName
      })
    },
    handelDelete(index) {
      this.todoList = this.todoList.filter(item => item.id !== index)
    },
    handelClear() {
      this.todoList = []
    }
  },
  watch: {
    todoList: {
      deep: true,
      handler(newVal) {
        localStorage.setItem('todoList',JSON.stringify(newVal))
      }
    }
  }
}
</script>

<style scoped>
#app {
  background: #fff;
  width: 1000px;
  margin: 180px auto 40px auto;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 25px 50px 0 rgba(0, 0, 0, 0.1);
  padding: 10px 100px;
}
</style>
