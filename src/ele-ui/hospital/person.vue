<template>
  <div>
      <el-container>
  <el-header >

    <span>我的信息</span>
    <span style="margin-left:700px;color:red">
    <i class="el-icon-edit" ></i>修改信息</span>
    <hr>
  </el-header>
  <el-main>
    <el-row :gutter="21" style="height:500px">
  <el-col :span="8" style="border-right:1px solid grey">
    <span class="p1">医生名称</span><br>
        <input type="text" style="width:220px;height:40px" placeholder="张某某" /> <br>

        <span class="p2">性别</span><br>
        <input type="text" style="width:220px;height:40px" placeholder="男" /><br>

       
          <span class="demonstration">出生日期</span><br>
          <el-date-picker
            type="daterange"
            range-separator="至"
            start-placeholder="1988年"
            end-placeholder="9月"
            style="width:220px"
          ></el-date-picker>
        <br>
        <span class="p3">联系电话</span><br>
        <input type="text" style="width:220px;height:40px" placeholder="166 1777 8888"><br>
        <span class="p4">地址</span><br>
         <input type="text" style="width:220px;height:40px" placeholder="河南省郑州市中原区">
  </el-col>
  <el-col :span="8" style="border-right:1px solid grey">
          <span>就职医院</span><br>
          <input type="text" style="width:220px;height:40px" placeholder="河南省人民医院"><br>
          <span>医院级别</span><br>
          <input type="text" style="width:220px;height:40px" placeholder="三甲"><br>
           <span>医院地址</span><br>
          <el-date-picker
            type="daterange"
            range-separator="至"
            start-placeholder="河南"
            end-placeholder="郑州"
            style="width:220px"
          ></el-date-picker><br>
          <span>所属科室</span><br>
        <input type="text" style="width:220px;height:40px" placeholder="外科"><br>
        <span>医院地址</span><br>
         <input type="text" style="width:220px;height:40px" placeholder="河南省郑州市中原区"></el-col>
  <el-col :span="8"> <span>医生简介</span><br>
       <div class="m1">添加简介。。。</div>
        <span>工作经历</span><br>
       <div class="m2">添加简介。。。</div>
       <span>相关证明上传</span><br>
       <div class="m3">
           <i class="el-icon-upload"></i><br>
           <span>点击上传相关证明</span>
       </div></el-col>
</el-row></el-main>
</el-container>
  </div>
</template>

<script>
export default {

}
</script>

<style>
  .el-container {
		width: 960px;
    background-color: #eee;
		margin: 50px auto;
	}
  .el-header{
    width:900px;
    margin: 0 30px;
		background-color: #eee;
		text-align: center;
		line-height: 60px;
    border-bottom:1px solid grey;
	}
  .el-main {
		background-color: #e9eef3;
		text-align: center;
		line-height: 60px;
	}
  .m1,.m2,.m3{
    width: 220px;
    height: 110px;
    border:1px solid lightgray;
    margin-left: 40px;
}
</style>