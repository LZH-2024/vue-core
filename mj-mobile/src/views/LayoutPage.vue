<script>
export default {
  name: 'LayoutPage'
}
</script>

<template>
<div>
  <div>
    <router-view></router-view>
  </div>
  <!--  底部二级路由导航栏-->
  <van-tabbar route>
    <van-tabbar-item to="/layout/article" icon="fire-o">面经</van-tabbar-item>
    <van-tabbar-item to="/layout/collect" icon="star-o">收藏</van-tabbar-item>
    <van-tabbar-item to="/layout/like" icon="like-o">喜欢</van-tabbar-item>
    <van-tabbar-item to="/layout/user" icon="user-o">我的</van-tabbar-item>
  </van-tabbar>
</div>
</template>

<style scoped lang="less">

</style>
