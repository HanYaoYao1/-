<template>
	<div>
        
		<el-row>
			<el-col :span="6">
				<el-row>
					<el-col :span="18" :offset="6">
                        <h2 style="color:rgb(44,236,195);">YOUR LOGO</h2>
                        <hr style="border:1px solid rgb(44,236,195)">
                    <el-menu
                        class="el-menu-vertical-demo"
                        background-color="#fff"
                        text-color="grey"
                        active-text-color="#ffd04b"
                        :router="true"
                        :default-active="defaultActive"
                        >    
				    <el-menu-item >
                    <i class="el-icon-s-custom" style="" ></i>
                    <span slot="title" style="margin-left:10px;font-size:12px">我的病人</span>
                    </el-menu-item>
                    <el-menu-item >
                    <i class="el-icon-s-order" style=""></i>
                    <span slot="title" style="margin-left:10px;font-size:12px">电子病例</span>
                    </el-menu-item>
                    <el-menu-item >
                    <i class="el-icon-s-ticket" style=""></i>
                    <span slot="title" style="margin-left:10px;font-size:12px">住院管理</span>
                    </el-menu-item>
                    <el-menu-item >
                    <i class="el-icon-document" style=""></i>
                    <span slot="title" style="margin-left:10px;font-size:12px">报告查询</span>
                    </el-menu-item>
                    <el-menu-item >
                    <i class="el-icon-document" style=""></i>
                    <span slot="title" style="margin-left:10px;font-size:12px">出院管理</span>
                    </el-menu-item>
                     <el-menu-item index="/hospital/doctor">
                    <i class="el-icon-edit-outline" style=""></i>
                    <span slot="title" style="margin-left:10px;font-size:12px">处方管理</span>
                    </el-menu-item>
                     <el-menu-item >
                    <i class="el-icon-question" style=""></i>
                    <span slot="title" style="margin-left:10px;font-size:12px">就诊咨询</span>
                    </el-menu-item>
                     <el-menu-item index="/hospital/person">
                    <i class="el-icon-user-solid" style="" ></i>
                    <span slot="title" style="margin-left:10px;font-size:12px">个人信息</span>
                    </el-menu-item>
                    </el-menu>
					<div class="user">
              <!-- <div> -->
              <el-avatar
                src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
              ></el-avatar>
              <em>张医生</em>
              <!-- </div> -->
            </div>
					</el-col>
				</el-row>
			</el-col>
			<el-col :span="18">
				<router-view></router-view>
				
			</el-col>
		</el-row>



		<!-- <el-tabs tab-position="left" style="height:500px;width:170px;text-align:center">
			<el-tab-pane>
				<div
					slot="label"
					style="color:rgb(44,236,195);height:45px;border-bottom:2px solid rgb(44,236,195)"
				>
					<h2>YOUR LOGO</h2>
				</div>
			</el-tab-pane>
			<el-tab-pane label="我的病人">我的病人</el-tab-pane>
			<el-tab-pane label="配置管理">电子病例</el-tab-pane>
			<el-tab-pane label="住院管理">住院管理</el-tab-pane>
			<el-tab-pane label="报告查询">报告查询</el-tab-pane>
			<el-tab-pane label="出院管理">出院管理</el-tab-pane>
			<el-tab-pane label="处方管理">处方管理</el-tab-pane>
			<el-tab-pane label="就诊咨询">就诊咨询</el-tab-pane>
			<el-tab-pane label="个人信息">个人信息</el-tab-pane>
		</el-tabs> -->
	</div>
</template>

<script>
	export default {
		data() {
			return {
                defaultActive:'',
            };
		},
	};
</script>

<style scoped lang="scss">
	.el-tabs__nav div {
		text-align: center;
	}
	// .el-tabs .el-tab-pane{
	//     width:150px !important;
	//     text-align: center !important;
	// }
	.el-tabs__item {
		width: 170px;
		text-align: center;
	}
</style>