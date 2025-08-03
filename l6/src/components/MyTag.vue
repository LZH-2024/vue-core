<script>
export default {
  name: "MyTag",
  props: {
    value: String,
  },
  data () {
    return {
      isEdit: false
    }
  },
  methods: {
    handleDbclick() {
      this.isEdit = true
    },
    handleEnter(e) {
      if (e.target.value.trim() === '')
        return alert('标签不能为空')
      this.$emit('input', e.target.value)
      this.isEdit = false
    }
  }
}
</script>

<template>
  <div>
    <input
        v-if="isEdit"
        v-focus type="text"
        placeholder="输入标签"
        @blur="isEdit = false"
        :value="value"
        @keydown.enter="handleEnter"
    >
    <div class="label" v-else @dblclick="handleDbclick">{{ value }}</div>
  </div>
</template>

<style scoped lang="less">

input {
  width: 80px;
  height: 30px;
  text-align: center;
  outline: none;
  cursor: pointer;
  margin: 0 auto;
}

.label {
  width: 100px;
  height: 30px;
  text-align: center;
  margin: 0 auto;
}
</style>
