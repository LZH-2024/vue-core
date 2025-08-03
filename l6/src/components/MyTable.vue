<script>

export default {
  name: "MyTable",
  components: {
  },
  props: {
    data: Array,
  }
}
</script>

<template>
<div>
  <table>
    <thead>
    <tr>
      <slot name="head"></slot>
    </tr>
    </thead>
    <tbody>
    <tr v-for="item in data" :key="item.id">
      <slot name="body" :item="item"></slot>
    </tr>
    </tbody>
  </table>
</div>
</template>

<style scoped lang="less">
table {
  width: 100%;
  text-align: center;
  border-collapse: collapse;

  thead {
    background-color: #dddada;
    border-bottom: 2px solid dodgerblue;
    font-size: 18px;
    line-height: 40px;
  }

  tbody {
    tr {
      padding: 10px;
      height: 120px;
      border-bottom: 2px solid #ddd;

      img {
        width: 100px;
        vertical-align: middle;
      }
    }
  }
}
</style>
