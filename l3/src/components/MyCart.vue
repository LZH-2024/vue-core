<script>

const defaultFruitList = [
  {
    id: 1,
    img: require("@/assets/img/榴莲.png"),
    price: 30,
    num: 0,
    subtotal: 0,
    select: false
  },
  {
    id: 2,
    img: require("@/assets/img/火龙果.png"),
    price: 10,
    num: 0,
    subtotal: 0,
    select: false
  },
  {
    id: 3,
    img: require("@/assets/img/樱桃.png"),
    price: 20,
    num: 0,
    subtotal: 0,
    select: false
  },
]

export default {
  name: "MyCart",
  data () {
    return {
      allSelected: false,
      fruitList: JSON.parse(localStorage.getItem("fruitList")) || defaultFruitList
    }
  },
  methods: {
    addNum (item) {
      item.num += 1
      this.subtotal(item)
    },
    minusNum (e,item) {
      if (item.num > 0) {
        item.num -= 1
      }else {
        e.target.classList.add('disabled')
      }
      this.subtotal(item)
    },
    validNum(item) {
      if (item.num < 0) {
        item.num = 0;
      }
      this.subtotal(item)
    },
    subtotal(item) {
      item.subtotal = item.price * item.num
    },
    select(item) {
      item.select = !item.select
    },
    selectAll() {
      this.allSelected = !this.allSelected
      this.fruitList.forEach(item => {
        item.select = this.allSelected
      })
    },
    delItem(d) {
      this.fruitList = this.fruitList.filter(item => item.id !== d.id)
    }
  },
  computed: {
    totalPrice () {
      return this.fruitList.reduce((acc, cur) => {
        if (cur.select) {
          return acc + cur.subtotal
        }else {
          return acc
        }
      },0)
    },
    totalNum() {
      return this.fruitList.reduce((acc, cur) => {
        if (cur.select) {
          return acc + cur.num
        }else {
          return acc
        }
      }, 0)
    }
  },
  watch: {
    fruitList: {
      deep: true,
      handler (val) {
        localStorage.setItem('fruitList', JSON.stringify(val))
      }
    }
  }
}
</script>

<template>
<div id="MyCart">
  <div class="banner">
    <img src="@/assets/img/fruit.jpg" alt="">
  </div>
  <div class="breadcrumb">
    <span>🏠</span>
    /
    <span>购物车</span>
  </div>
  <div class="main">
    <table>
      <thead>
      <tr>
        <th>选中</th>
        <th>图片</th>
        <th>单价</th>
        <th>个数</th>
        <th>小计</th>
        <th>操作</th>
      </tr>
      </thead>
      <tbody>
      <tr @click="select(item)" :class="{selected: item.select}" v-for="(item, index) in fruitList" :key="index">
        <td>
          <input :checked="item.select" type="checkbox">
        </td>
        <td>
          <img :src="item.img" alt="">
        </td>
        <td>{{ item.price }}</td>
        <td>
          <div class="input-number">
            <button :class="{disabled: item.num <= 0}" @click.stop="(e) => minusNum(e,item)">-</button>
            <input @click.stop @keydown.enter="(e) => e.target.blur()" type="text" v-model.number="item.num" @blur="validNum(item)" />
            <button @click.stop="addNum(item)">+</button>
          </div>
        </td>
        <td>{{ item.subtotal }}</td>
        <td>
          <button @click="delItem(item)" class="del-button">删除</button>
        </td>
      </tr>
      </tbody>
    </table>
  </div>
  <div class="bottom">
    <div class="left" @click="selectAll">
      <input :checked="allSelected" type="checkbox">全选
    </div>
    <div class="right">
      总价：￥ <span>{{ totalPrice }}</span>
      <button>结算({{ totalNum }})</button>
    </div>
  </div>
</div>
</template>

<style scoped lang="less">
#MyCart {
  border: 1px solid #f0f0f0;
  margin: 0 auto;
  width: 800px;

  .banner {
    width: 100%;
    height: 120px;
    overflow: clip;

    img {
      width: 100%;
    }
  }

  .breadcrumb {
    font-size: 16px;
    color: gray;
  }

  .main {
    table {
      width: 100%;
      border-collapse: collapse;
      text-align: center;

      thead {
        border-bottom: 1px solid #ebeef5;

        th {
          padding: 16px 16px;
          color: rgba(0, 0, 0, 0.85);
          font-weight: 500;
          background: #fafafa;
        }
      }

      tbody {
        img {
          width: 100px;
          height: 100px;
        }

        tr {
          border-bottom: 1px solid #ebeef5;
          cursor: pointer;

          &.selected {
            background-color: #f5f7fa;
          }

          td {
            .input-number {
              display: flex;
              justify-content: center;

              button {
                height: 40px;
                padding: 4px 15px;
                border: 1px solid #dcdfe6;
                background-color: #f5f7fa;

                &.disabled {
                  cursor: not-allowed;
                }
              }

              input {
                width: 50px;
                height: 40px;
                border: none;
                border-top: 1px solid #dcdfe6;
                border-bottom: 1px solid #dcdfe6;
                text-align: center;
                color: #606266;
                line-height: 40px;
              }
            }

            .del-button {
              color: #fff;
              background: #d9363e;
              border: 1px solid transparent;
              font-weight: 400;
              cursor: pointer;
              height: 32px;
              padding: 4px 15px;
              font-size: 14px;
              border-radius: 2px;
            }
          }

          &.active {
            background-color: #f5f7fa;
          }
        }
      }
    }
  }

  .bottom {
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding: 10px 0;
    align-items: center;

    .left {
      cursor: pointer;

      input {
        margin-left: 30px;
        margin-right:5px;
      }
    }

    .right{
      margin-right: 10px;

      span {
        color: hotpink;
        font-size: 30px;
        font-weight: 700;
      }

      button {
        margin: 0 15px;
        background-color: #3f85ed;
        color: #fff;
        font-weight: 400;
        border: 1px solid transparent;
        padding: 4px 15px;
        font-size: 16px;
      }
    }
  }
}
</style>
