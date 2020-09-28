<template>
	<div>
		<el-container>
			<el-header>
	<el-input style="margin-left:0" placeholder="请输入用户姓名"></el-input>
  <el-dropdown>
  <el-button >
    选择住院状态<i class="el-icon-arrow-down el-icon--right"></i>
  </el-button>
  <el-input  placeholder="选择入床病号"></el-input>
  <i style="color:green" class="el-icon-search"></i>
</el-dropdown>
			</el-header>
			<el-main>
       
    <el-table
      :data="tableData"
      style="width: 960px">
       <el-table-column
        prop="num"
        label="住院号"
        width="80">
      </el-table-column>
      <el-table-column
        prop="name"
        label="姓名"
        width="100">
      </el-table-column>
      <el-table-column
        prop="year"
        label="年龄"
        width="80">
      </el-table-column>
      <el-table-column
        prop="nurse"
        label="护士"
        width="100">
      </el-table-column>
      <el-table-column
        prop="type"
        label="科室"
        width="80">
      </el-table-column>
      <el-table-column
        prop="date"
        label="日期"
        width="100">
      </el-table-column>
      <el-table-column
        prop="resolve"
        label="处方"
        width="180">
      </el-table-column>
      <el-table-column
        prop="address"
        label="地址">
      </el-table-column>
    </el-table>
  

      </el-main>
			<el-footer><el-button type="danger" icon="el-icon-delete" plain round>批量删除</el-button>
      <div style="display:inline-block">
    
    <el-pagination
      :current-page="currentPage4"
      :page-sizes="[100, 200, 300, 400]"
      :page-size="100"
      layout="total, sizes, prev, pager, next, jumper"
      :total="400">
    </el-pagination>
  </div></el-footer>
		</el-container>
	</div>
</template>

<script>
	export default {
    data(){
      return{
         tableData: [{
            num:1,
            year:50,
            date: '2016-05-02',
            nurse:"王护士",
            type:"外科",
            resolve:"葡萄糖注射液",
            name: '王小虎',
            address: '上海市普陀区金沙江路 1518 弄'
          }, {
             num:2,
            year:50,
             nurse:"王护士",
             type:"外科",
             resolve:"葡萄糖注射液",
            date: '2016-05-04',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1517 弄'
          }, {
             num:3,
            year:50,
             nurse:"王护士",
             type:"外科",
             resolve:"葡萄糖注射液",
            date: '2016-05-01',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1519 弄'
          }, {
            num:4,
            year:50,
             nurse:"王护士",
             type:"外科",
             resolve:"葡萄糖注射液",
            date: '2016-05-03',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1516 弄'
          }]
      }
      
    }
  };
</script>

<style scoped>
	.el-container {
		width: 960px;
		margin: 50px auto;
	}
	.el-header,
	.el-footer {
		background-color: #eee;
		text-align: center;
		line-height: 60px;
	}
	.el-main {
		background-color: #e9eef3;
		text-align: center;
		line-height: 60px;
	}
  .el-input{
    width:150px ;
    margin: 0 20px;
  }
</style>