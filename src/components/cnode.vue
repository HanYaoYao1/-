<template>
	<div id="content">
		<!-- <ul>
          <li>全部</li>
          <li>精华</li>
          <li>问答</li>
          <li>招聘</li>
          <li></li>
		</ul>-->
		<van-tabs v-model="activeName">
			<van-tab name="all" title="全部"></van-tab>
			<!-- <van-tab name="good"  title="精华" ></van-tab> -->
			<van-tab name="share" title="分享"></van-tab>
			<van-tab name="ask" title="问答"></van-tab>
			<van-tab name="job" title="招聘"></van-tab>
		</van-tabs>
		
			<img v-if="isshow" src="../../public/0178805aa1ed28a801206d966e0298.gif" alt="">
		
		<ul v-if="!isshow">
			<li 
				v-for="(item,index) in list"
				:key="index"
				style="display:flex;flex-direction:row;align-items:center;height:70px;width:100%;text-align:top left;border-bottom:1px solid grey"
			>
				<img style="width:40px;height:40px" :src="item.author.avatar_url" alt />
				
				<van-tag color="grey" style="margin:0 5px">{{item.tab | filterTab}}</van-tag>
				<p style="font-size:12px;display:flex;flex-direction:column;">
					<span
						style="width:200px;overflow: hidden;text-overflow:ellipsis;
white-space: nowrap;"
					>{{item.title}}</span>
					<br />
					<span style="text-align:left">{{item.reply_count}}/{{item.visit_count}}</span>
				</p>
				<!-- <p>{{item.last_reply_at}}</p> -->
				<p style="margin-left:30px;font-size:12px">{{ item.last_reply_at | filterTime}}</p>
			</li>
		</ul>
		<a href="#content">
			<i
				class="iconfont icon-fanhuidingbu"
				style="position:fixed;bottom:30px;right:10px;font-size:45px"
				
			></i>
		</a>
		<!-- <div class="page-btn">
			<button @click="up" v-if="page>1">上一页</button>&nbsp;&nbsp;
			第{{page}}页&nbsp;&nbsp;
			<button @click="down">下一页</button>
		</div> -->
	</div>
</template>

<script>
	export default {
		data() {
			return {
				list: [],
				activeName: 0,
				page:1,
				isshow:false
			};
		},
		watch: {
			activeName(newVal, old) {
				console.log(newVal);
				this.$axios
					.get("https://cnodejs.org/api/v1/topics", {
						params: {
							page: 1,
							tab: newVal,
						},
					})
					.then((res) => {
						
						console.log(res.data.data);
						this.list = res.data.data;
						console.log(this.list);
						this.isshow=false
					});
			},
		},

		methods: {
			scrollTop() {
				content.scrollIntoView();
			},
			ajax(){
				this.$axios
					.get("https://cnodejs.org/api/v1/topics", {
						params: {
							page: this.page,
							tab:this.activeName ,
						},
					})
					.then((res) => {
						
						console.log(res.data.data);
						this.list = res.data.data;
						console.log(this.isshow);
						this.isshow=true
					});
			},
			loading(){
				this.list=[];
				this.isshow=true
			},
			// up(){
			// 	this.loading();
			// 	if(this.page==1){
			// 		return
			// 	}
			// 	this.page--;
			// 	this.ajax();
			// },
			// down(){
			// 	this.loading();
			// 	this.page++;
			// 	this.ajax();
			// }
		},
		filters: {
			filterTab(tab){
				if(tab=="share"){
					return "分享"
				}else if(tab=='ask'){
					return '问答'
				}else if(tab=='job'){
					return '招聘'
				}
			},
			filterTime(val) {
				var now = new Date();
				var to = new Date(val);
				var time = (now - to) / 1000;
				var str = "";
				if (time > 60 * 5 && time < 60 * 30) {
					str = "5分钟前";
				} else if (time > 60 * 30 && time < 60 * 60) {
					str = "30分钟前";
				} else if (time > 60 * 60 && time < 60 * 60 * 12) {
					str = "1小时前";
				} else if (time < 60 * 60 * 12 && time < 60 * 60 * 24) {
					str = "12小时前";
				} else if (time < 60 * 60 * 24 && time < 60 * 60 * 24 * 2) {
					str = "1天前";
				} else if (time < 60 * 60 * 24 * 2 && time < 60 * 60 * 24 * 5) {
					str = "2天前";
				} else if (time < 60 * 60 * 24 * 5 && time < 60 * 60 * 24 * 10) {
					str = "5天前";
				} else if (time < 60 * 60 * 24 * 10 && time < 60 * 60 * 24 * 15) {
					str = "10天前";
				} else if (time < 60 * 60 * 24 * 15 && time < 60 * 60 * 24 * 30) {
					str = "15天前";
				}
				return str;
			},
		},
	};
</script>

<style scoped lang="scss">
	ul {
		list-style: none;
	}
</style>