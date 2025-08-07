<script setup>

</script>

<template>
<div class="main">
  <div class="container">
    <router-view></router-view>
  </div>
  <div class="footer">
    <RouterLink to="/article">面经</RouterLink>
    <RouterLink to="/collect">收藏</RouterLink>
    <RouterLink to="/like">喜欢</RouterLink>
    <RouterLink to="/user">我的</RouterLink>
  </div>
</div>
</template>

<style scoped lang="less">
.main {
  height: 100%;
}

.container {
  min-height: 100vh;
  margin-bottom: 20px;
}

.footer {
  width: 100%;
  display: flex;
  justify-content: space-around;
  border-top: 1px solid darkgrey;
  background-color: #f1eeee;
  position: fixed;
  bottom: 0;

  a {
    flex: 1;
    text-align: center;
    text-decoration: none;
    height: 60px;
    line-height: 60px;
    color: #2c3e50;
    font-size: 18px;
    font-weight: 700;

    &.router-link-active {
      background-color: #9cb4df;
    }
  }
}
</style>
