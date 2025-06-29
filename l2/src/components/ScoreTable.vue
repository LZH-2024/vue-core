<script>
export default {
  name: "ScoreTable",
  data () {
    return {
      newSubject: '',
      newScore: null,
      scoreList: [
        {id: 1, subject: '语文', score: 62},
        {id: 2, subject: '数学', score: 89},
        {id: 3, subject: '英语', score: 70},
      ]
    }
  },
  computed: {
    totalScore () {
      return this.scoreList.reduce((acc, curr) => {
        return acc + curr.score
      },0)
    },
    averageScore () {
      if (this.scoreList.length < 1)
          return 0
      return (this.totalScore / this.scoreList.length).toFixed(2)
    }
  },
  methods: {
    del (id) {
      this.scoreList = this.scoreList.filter((item) => {
        return item.id !== id
      })
    },
    add () {
      try {
        let newScore = parseFloat(this.newScore)
        if (newScore === null || isNaN(newScore))
            return
        this.scoreList.unshift({
          id: new Date().getTime(),
          subject: this.newSubject,
          score: newScore,
        })
      }catch(err) {
        console.log(err)
      }
    }
  }
}
</script>

<template>
<div id="score-table">
  <div id="panel">
    <table>
      <thead>
      <tr>
        <th>编号</th>
        <th>科目</th>
        <th>成绩</th>
        <th>操作</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="(item, index) in scoreList" :key="item.id">
        <td>{{ index + 1 }}</td>
        <td>{{ item.subject }}</td>
        <td>{{ item.score }}</td>
        <td><a href="#" @click="del(item.id)">删除</a></td>
      </tr>
      </tbody>
      <tfoot>
      <tr>
        <td colspan="4">
          <span>总分：{{ totalScore }}</span>
          <span style="margin-left: 50px">平均分：{{ averageScore }}</span>
        </td>
      </tr>
      </tfoot>
    </table>
  </div>
  <div id="insert">
    <div id="input-subject">科目：<input type="text" placeholder="请输入科目" v-model="newSubject"></div>
    <div id="input-score">分数：<input type="text" placeholder="请输入分数" v-model="newScore"></div>
    <button id="add" @click="add">添加</button>
  </div>
</div>
</template>

<style scoped lang="less">
#score-table {
  display: flex;
  justify-content: center;

  #panel {
    table {
      border-collapse: collapse;
      table-layout: fixed;
      margin-right: 20px;

      th {
        border: 1px solid #ddd;
        padding: 10px;
        background-color: #f5f5f5;
        font-weight: bold;
        width: 170px;
      }

      td {
        border: 1px solid #ddd;
        padding: 8px;

        a {
          color: blue;
        }
      }
    }
  }

  #insert {
    padding: 10px;

    #input-subject {
      width: 100%;
      margin-bottom: 20px;

      input {
        border: 1px solid #ddd;
        padding: 10px;
        height: 45px;

        &::placeholder {
          color: #999;
        }
      }
    }

    #input-score {
      width: 100%;
      margin-bottom: 20px;

      input {
        border: 1px solid #ddd;
        padding: 10px;
        height: 45px;

        &::placeholder {
          color: #999;
        }
      }
    }
  }

  button {
    width: 60px;
    height: 30px;
    line-height: 30px;
    text-align: center;
    background-color: #006699;
    color: #fff;
    border-radius: 5px;
    border: none;
  }
}
</style>
