<template>
  <div  >
    <div style="background:black;height:150px;width:100%;position:fixed;top:0;left:0;z-index:6666">
      <van-image width="100" height="50" src="//static2.cnodejs.org/public/images/cnodejs_light.svg" />
      <van-search   placeholder="请输入搜索关键词" shape="round" background="black" />
      <ul>
        <li>首页</li>
        <li>新手入门</li>
        <li>API</li>
        <li>关于</li>
        <li>注册</li>
        <li>登录</li>
      </ul>
    </div>
    <cnode  style="margin-top:150px;"></cnode>
		<!-- <i class="iconfont icon-fanhuidingbu" style="position:absolute;bottom:30px;right:10px;font-size:45px" @click="scrollTop"></i> -->

  </div>
</template>

<script>
import cnode from '../components/cnode.vue'
export default {
  components:{
    cnode,
  },
  methods: {
    // scrollTop(){
		// 		content.scrollIntoView();
		// 	}
  },
}
</script>

<style scoped lang="scss">
  ul{
    margin-top: 10px;
    list-style: none;
    display: flex;
    justify-content: space-around;
    align-items: center;
    font-size: 12px;
    color:grey;
  }
</style>