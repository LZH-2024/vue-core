<script>
export default {
  name: 'NoteBook',
  data: function () {
    return {
      todoName: '',
      todoList: [
        { id: 1, name: '吃饭饭' },
        { id: 2, name: '睡觉觉' }
      ]
    }
  },
  computed: {
    todoTotal: {
      get: function () {
        return this.todoList.length
      }
    }
  },
  methods: {
    insert () {
      if (this.todoName.trim() === '') {
        return
      }
      this.todoList.unshift({
        id: +new Date(),
        name: this.todoName
      })
      this.todoName = ''
    },
    del (id) {
      this.todoList = this.todoList.filter(item => item.id !== id)
    },
    clear () {
      this.todoList = []
    }
  }
}
</script>

<template>
  <div id="notebook">
    <!--头部：标题、输入框-->
    <header>
      <h1>小黑记事本</h1>
      <input placeholder="请输入任务" v-model="todoName" @keydown.enter="insert"/>
      <button @click="insert">添加任务</button>
    </header>
    <!--主体：列表-->
    <section>
      <ul>
        <li v-for="(item, index) in todoList" :key="item.id">
          <span>{{index + 1}}.</span>
          {{ item.name }}
          <button class="destroy" @click="del(item.id)"></button>
        </li>
      </ul>
    </section>
    <footer v-if="todoList.length !== 0">
      <span>合计：{{todoTotal}}</span>
      <a href="#" @click="clear">清空任务</a>
    </footer>
  </div>
</template>

<style scoped>
#notebook {
  background: #fff;
  margin: 180px 0 40px 0;
  position: relative;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 25px 50px 0 rgba(0, 0, 0, 0.1);
  padding: 15px;
  width: 100%;
}

header {
  width: 100%;
}

header h1 {
  font-size: 55px;
  color: rgba(175, 47, 47, 0.8);
  font-weight: 100;
  position: absolute;
  top: -120px;
  left: 50%;
  transform: translateX(-50%);
}

header input {
  border: 2px solid rgba(175, 47, 47, 0.8);
  border-radius: 10px;
  width: 100%;
  padding: 0 156px 0 16px;
  height: 55px;
  line-height: normal;
  color: #4d4d4d;
  font-size: 24px;
  font-weight: 100;
}

header input::placeholder {
  font-size: 24px;
  color: #e6e6e6;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
}

header input:focus {
  outline: none;
}

header button {
  position: absolute;
  width: 140px;
  height: 55px;
  border-radius: 0 10px 10px 0;
  font-size: 18px;
  background-color: rgba(175, 47, 47, 0.8);
  right: 16px;
  border: 0;
  color: #fff;
  cursor: pointer;
}

section ul {
  margin: 0;
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
