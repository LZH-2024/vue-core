<script>
export default {
  name: "TodoMain",
  props: {
    todoList: Array
  },
  methods: {
    del (index) {
      this.$emit('del', index)
    }
  }
}
</script>

<template>
  <section>
    <ul>
      <li v-for="(item, index) in todoList" :key="item.id">
        <span>{{ index + 1 }}.</span>
        {{ item.name }}
        <button class="destroy" @click="del(item.id)"></button>
      </li>
    </ul>
  </section>
</template>

<style scoped lang="less">
section ul {
  margin: 0 auto;
  padding: 16px 16px 0 16px;
  border-bottom: 1px solid #e6e6e6;
}

section ul li:first-child {
  margin-top: -15px;
}

section ul li {
  list-style: none;
  font-size: 24px;
  height: 60px;
  line-height: 60px;
  color: #4d4d4d;
  font-weight: 100;
  position: relative;
}

section ul li .destroy {
  position: absolute;
  top: 0;
  right: 10px;
  bottom: 0;
  border: none;
  background: none;
}

section ul li .destroy::after {
  content: "×";
  display: none;
}

section ul li:hover .destroy::after {
  display: block;
  color: #af5b5e;
  font-size: 30px;
  cursor: pointer;
}
</style>
