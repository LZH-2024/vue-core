<template>
  <div id="app">
    <div class="left">
      <input type="text" v-model.trim="newName" placeholder="消费名称">
      <input type="text" v-model.number="newPrice" placeholder="消费价格">
      <button @click="add">添加账单</button>
      <table>
        <thead>
        <tr>
          <th>编号</th>
          <th>消费名称</th>
          <th>消费价格</th>
          <th>操作</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="(item,index) in billList" :key="item.id">
          <td>{{ index + 1 }}</td>
          <td>{{ item.name }}</td>
          <td>{{ item.price }}</td>
          <td><a @click="deleteBill(item.id)" href="#">删除</a></td>
        </tr>
        </tbody>
      </table>
    </div>
    <div class="echarts-box" id="main"></div>
  </div>
</template>

<script>
import axios from "axios";
import * as echarts from 'echarts';

export default {
  name: 'App',
  components: {
  },
  data() {
    return {
      billList: [
      ],
      newName: null,
      newPrice: null,
    }
  },
  methods: {
    async add () {
      await axios.post('https://applet-base-api-t.itheima.net/bill', {
        creator: '小黑',
        name: this.newName,
        price: this.newPrice
      })
      // 重新渲染一次
      this.initBillList()

      this.newName = ''
      this.newPrice = ''
    },
    async deleteBill (id) {
      await axios.delete(`https://applet-base-api-t.itheima.net/bill/${id}`)
      // 重新渲染
      this.initBillList()
    },
    async initBillList () {
      const res = await axios.get('https://applet-base-api-t.itheima.net/bill',{
        params: {
          creator: '小黑'
        }
      })
      this.billList = res.data.data

      // 更新图表
      this.myChart.setOption({
        // 数据项
        series: [
          {
            // data: [
            //   { value: 1048, name: '球鞋' },
            //   { value: 735, name: '防晒霜' }
            // ]
            data: this.billList.map(item => ({ value: item.price, name: item.name}))
          }
        ]
      })
    }
  },
  created() {
    this.initBillList()
  },
  mounted() {
    this.myChart = echarts.init(document.querySelector('#main'))
    this.myChart.setOption({
      // 大标题
      title: {
        text: '消费账单列表',
        left: 'center'
      },
      // 提示框
      tooltip: {
        trigger: 'item'
      },
      // 图例
      legend: {
        orient: 'vertical',
        left: 'left'
      },
      // 数据项
      series: [
        {
          name: '消费账单',
          type: 'pie',
          radius: '50%', // 半径
          data: [
            // { value: 1048, name: '球鞋' },
            // { value: 735, name: '防晒霜' }
          ],
          emphasis: {
            itemStyle: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
          }
        }
      ]
    })
  }
}
</script>

<style lang="less" scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  display: flex;
  justify-content: space-around;
  padding: 20px;

  .left {
    input {
      padding: 5px;
      margin: 5px;
      font-size: 16px;
      line-height: 20px;
      vertical-align: middle;
    }

    button {
      width: 100px;
      color: #fff;
      background-color: #0d6efd;
      font-size: 18px;
      padding: 5px;
      border-radius: 3px;
      border: none;
      vertical-align: middle;
      margin-left: 10px;
    }

    table {
      width: 100%;
      border-collapse: collapse;
      margin-top: 10px;

      thead {
        text-align: center;
        font-size: 18px;
        font-weight: bold;
        border-bottom: 1px solid #6a6e71;

        th {
          padding: 5px;
        }
      }

      tbody {
        td {
          padding: 10px;
          border-bottom: 1px solid #6a6e71;

          a {
            text-decoration: none;
            color: dodgerblue;
          }
        }
      }
    }
  }

  .echarts-box {
    width: 600px;
    height: 400px;
    padding: 30px;
    border: 1px solid #ccc;
  }
}
</style>
