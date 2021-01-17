<template>
	<view>
	      <!-- //通过vue-router全局组件router-view来挂载视图 -->
	      <router-view></router-view>   
	  </view>
</template>

<script>
	export default {
		created(){
		    console.log(this.$route)    //此时我们使用vue-router的api进行获取
		  },
	}
</script>

<style>
</style>
