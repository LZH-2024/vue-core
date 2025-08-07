<script>
export default {
  name: 'XiangQing',
  data() {
    return {
      id: null,
      article: null
    }
  },
  created () {
    this.id = this.$route.params.id
    const articles = [
      {
        id: 1,
        creatorAvatar: 'https://i.pravatar.cc/150?img=3',
        creatorName: '张三',
        createdAt: '2025-08-01',
        stem: 'Vue 3 的响应式原理揭秘',
        content: 'Vue 3 使用 Proxy 实现响应式系统，极大提升了性能和灵活性……',
        likeCount: 120,
        views: 1024,
      },
      {
        id: 2,
        creatorAvatar: 'https://i.pravatar.cc/150?img=5',
        creatorName: '李四',
        createdAt: '2025-08-02',
        stem: 'JavaScript 闭包彻底解析',
        content: '闭包是 JS 中一个重要概念，它允许函数访问其词法作用域之外的变量……',
        likeCount: 95,
        views: 876,
      },
      {
        id: 3,
        creatorAvatar: 'https://i.pravatar.cc/150?img=7',
        creatorName: '王五',
        createdAt: '2025-08-03',
        stem: '前端性能优化的 10 个关键点',
        content: '优化前端性能不仅提升用户体验，也能减少服务器压力，这里列举了 10 个常见优化技巧……',
        likeCount: 150,
        views: 1432,
      },
      {
        id: 4,
        creatorAvatar: 'https://i.pravatar.cc/150?img=9',
        creatorName: '赵六',
        createdAt: '2025-08-04',
        stem: 'TypeScript 入门到实战',
        content: 'TypeScript 提供了类型系统，使大型项目开发更安全、可维护……',
        likeCount: 87,
        views: 653,
      },
      {
        id: 5,
        creatorAvatar: 'https://i.pravatar.cc/150?img=11',
        creatorName: '钱七',
        createdAt: '2025-08-05',
        stem: '浏览器渲染机制全解析',
        content: '了解浏览器如何从 HTML 到绘制页面，是掌握性能优化的基础……',
        likeCount: 110,
        views: 982,
      },
      {
        id: 6,
        creatorAvatar: 'https://i.pravatar.cc/150?img=13',
        creatorName: '孙八',
        createdAt: '2025-08-06',
        stem: '手把手实现一个虚拟 DOM',
        content: '通过构建自己的虚拟 DOM，可以更深入理解 Vue 和 React 的核心逻辑……',
        likeCount: 132,
        views: 1201,
      },
      {
        id: 7,
        creatorAvatar: 'https://i.pravatar.cc/150?img=15',
        creatorName: '周九',
        createdAt: '2025-08-07',
        stem: '深入理解 Event Loop',
        content: 'JavaScript 的事件循环机制决定了异步任务的执行顺序……',
        likeCount: 105,
        views: 890,
      },
      {
        id: 8,
        creatorAvatar: 'https://i.pravatar.cc/150?img=17',
        creatorName: '吴十',
        createdAt: '2025-08-08',
        stem: '手写 Promise 实现',
        content: 'Promise 是 JS 异步编程的核心之一，手写实现能帮你吃透它的机制……',
        likeCount: 99,
        views: 755,
      },
      {
        id: 9,
        creatorAvatar: 'https://i.pravatar.cc/150?img=19',
        creatorName: '郑十一',
        createdAt: '2025-08-09',
        stem: '前端测试从入门到实践',
        content: '前端测试包括单元测试、集成测试、E2E 测试等，是保障代码质量的重要手段……',
        likeCount: 78,
        views: 634,
      },
      {
        id: 10,
        creatorAvatar: 'https://i.pravatar.cc/150?img=21',
        creatorName: '王十二',
        createdAt: '2025-08-10',
        stem: 'Webpack 打包优化指南',
        content: '通过分析依赖树、代码分割、压缩等手段，可以显著提升 Web 应用加载速度……',
        likeCount: 141,
        views: 1123,
      }
    ];
    this.article = articles.find(item => item.id===Number(this.id))
  }
}
</script>

<template>
<div class="main" v-if="this.article.id">
  <div class="header">
    <a @click="$router.back()">&lt;</a>
    <span>面经详情</span>
  </div>
  <div class="title">{{ this.article.stem }}</div>
  <div class="data">
    <span class="date">{{ this.article.createdAt }}</span>&nbsp;|
    <span class="view">{{ this.article.views }}浏览量</span>&nbsp;|
    <span class="like">{{ this.article.likeCount }}点赞数</span>
  </div>
  <div class="user">
    <img :src="this.article.creatorAvatar" alt="">
    <span>{{ this.article.creatorName }}</span>
  </div>
  <div class="content">
    {{ this.article.content }}
  </div>
</div>
</template>

<style scoped lang="less">

.main {
  background-color: #f1eeee;
  min-height: 100vh;
}
.header {
  position: relative;
  font-size: 20px;
  height: 40px;
  line-height: 40px;
  text-align: center;
  border-bottom: 1px solid #ccc;

  a {
    position: absolute;
    left: 0;
    text-decoration: none;
    margin-left: 15px;
  }
}

.title {
  font-size: 35px;
  font-weight: bold;
  margin: 30px 15px;
}

.data {
  margin: 0 0 30px 15px;
  color: #9ca1a6;
}

.user {
  margin: 0 0 30px 15px;
  color: #9ca1a6;
  height: 50px;
  line-height: 50px;

  img {
    width: 50px;
    border-radius: 50%;
    margin-right: 10px;
    vertical-align: middle;
  }
}

.content {
  margin: 0 15px 30px 15px;
}
</style>
