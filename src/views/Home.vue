<template>
  <div class="home">
    <h1>首页</h1>
	<h3 @click="goAbout">跳到about页面</h3>
	<div class="border-b box">我是测试1px</div>
  </div>
</template>

<script>

export default {
  methods:{
	  goAbout(){
		  this.$router.push({
			  path:'/about'
		  })
	  }
  }
}
</script>
<style lang="less" scoped>
	.box{
		height: 200px;
		width: 200px;
	}
</style>
