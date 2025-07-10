<script>
export default {
  name: "TodoHeader",
  data () {
    return {
      todoName: ''
    }
  },
  methods: {
    insert () {
      this.$emit('insert', this.todoName)
      this.todoName = ''
    }
  }
}
</script>

<template>
  <!--头部：标题、输入框-->
  <header>
    <h1>小黑记事本</h1>
    <input placeholder="请输入任务" v-model="todoName" @keydown.enter="insert"/>
    <button @click="insert">添加任务</button>
  </header>
</template>

<style scoped lang="less">
  header {
    margin: 0 auto;
    position: relative;
    text-align: center;

    h1 {
      font-size: 55px;
      color: rgba(175, 47, 47, 0.8);
      font-weight: 100;
      position: absolute;
      top: -120px;
      left: 50%;
      transform: translateX(-50%);
    }

    input {
      border: 2px solid rgba(175, 47, 47, 0.8);
      border-radius: 10px;
      width: 100%;
      height: 55px;
      line-height: normal;
      color: #4d4d4d;
      font-size: 24px;
      font-weight: 100;
      padding-left: 10px;

      &::placeholder {
        font-size: 24px;
        color: #e6e6e6;
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
      }

      &:focus {
        outline: none;
      }
    }

      button {
        position: absolute;
        width: 140px;
        height: 59px;
        border-radius: 0 10px 10px 0;
        font-size: 18px;
        background-color: rgba(175, 47, 47, 0.8);
        right: -16px;
        top: 0;
        border: 0;
        color: #fff;
        cursor: pointer;
      }
  }
</style>
