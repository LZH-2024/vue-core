<script>
import { register } from '@/api/user'
import { Toast } from 'vant'

export default {
  name: 'RegisterPage',
  data () {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    // 监听表单提交事件，传入输入框中输入的值
    // value eg: {username: 'lzh', password: '12345'}
    async onSubmit (value) {
      // 发送注册请求
      try {
        await register(value)
        Toast.success('注册成功')
        this.$router.push('/login')
      } catch (e) {
        Toast.fail('注册失败')
      }
    }
  }
}
</script>

<template>
  <div class="register-page">
    <!--注册头部-->
    <van-nav-bar title="注册"/>

    <!-- 表单内容 -->
    <van-form @submit="onSubmit">
      <!--用户名输入框-->
      <van-field
        v-model="username"
        name="username"
        label="用户名"
        placeholder="请输入用户名"
        :rules="[
          { required: true, message: '请填写用户名' },
          { pattern: /^\w{5,}$/, message: '用户名至少包含5个字符'}
        ]"
      />
      <!--密码输入框-->
      <van-field
        v-model="password"
        type="password"
        name="password"
        label="密码"
        placeholder="请输入密码"
        :rules="[
          { required: true, message: '请填写密码' },
          { pattern: /^\w{6,}$/, message: '密码至少包含6个字符' }
        ]"
      />
      <!--提交按钮-->
      <div style="margin: 16px;">
        <van-button block type="primary" native-type="submit">提交</van-button>
      </div>
    </van-form>

    <!--注册链接-->
    <router-link class="link" to="/register">有账号，去登录</router-link>
  </div>
</template>

<style scoped lang="less">
.link {
  color: #069;
  font-size: 12px;
  padding-right: 20px;
  float: right;
}
</style>
