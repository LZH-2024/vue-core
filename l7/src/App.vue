<template>
  <div id="app">
    <keep-alive :exclude="['XiangQing']">
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {
  }
}
</script>

<style lang="less">
*, body, html {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

#app,body,html {
  min-height: 100vh;
}
</style>
