<template>
  <div class="container">
    <div class="list">
      <span>This is a list</span>
      <el-table
      :data="tableData"
      border
      style="width: 100%">
        <el-table-column
          prop="date"
          label="日期"
          width="180">
        </el-table-column>
        <el-table-column
          prop="name"
          label="姓名"
          width="180">
        </el-table-column>
        <el-table-column
          prop="address"
          label="地址">
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        tableData: [
          {
            date: '2018-05-12',
            name: '貂蝉',
            address: '上海市普陀区金沙江路 1518 弄'
          }, 
          {
            date: '2017-05-10',
            name: '大乔',
            address: '上海市普陀区金沙江路 1517 弄'
          }, 
          {
            date: '2016-05-01',
            name: '小乔',
            address: '上海市普陀区金沙江路 1519 弄'
          }, 
          {
            date: '2019-05-05',
            name: '诸葛亮',
            address: '上海市普陀区金沙江路 1516 弄'
          },
          {
            date: '2014-03-01',
            name: '周瑜',
            address: '上海市普陀区金沙江路 1519 弄'
          }, 
          {
            date: '2015-05-09',
            name: '孙策',
            address: '上海市普陀区金沙江路 1519 弄'
          }, 
        ]
      }
    }
  }
</script>