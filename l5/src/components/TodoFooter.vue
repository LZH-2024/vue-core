<script>
export default {
  name: "TodoFooter",
  props: {
    todoList: Array
  },
  computed: {
    todoTotal: {
      get: function () {
        return this.todoList.length
      }
    }
  },
  methods: {
    clear() {
      this.$emit('clear');
    }
  }
}
</script>

<template>
  <footer v-if="todoList.length !== 0">
    <span>合计：{{todoTotal}}</span>
    <a href="#" @click="clear">清空任务</a>
  </footer>
</template>

<style scoped>
footer {
  display: flex;
  justify-content: space-between;
  padding: 10px;
  font-weight: 300;
  margin-bottom: -10px;
  color: rgb(168, 163, 163);
}

footer:before {
  content: '';
  position: absolute;
  overflow: hidden;
  height: 20px;
  width: 100%;
  right: 0;
  bottom: 0;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.2), 0 8px 0 -3px #f6f6f6, 0 9px 1px -3px rgba(0, 0, 0, 0.2), 0 16px 0 -6px #f6f6f6, 0 17px 2px -6px rgba(0, 0, 0, 0.2);
}

footer span {
}

footer a {
  text-decoration: none;
  color: rgb(168, 163, 163)
}
</style>
