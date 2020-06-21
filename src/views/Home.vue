<template>
  <div class="home">
    <h1>首页</h1>
	<h3 @click="goAbout">跳到about页面</h3>
	<div class="border-b border-t box">我是测试1px</div>
	<div class="box1"></div>
	<div class="box2 border-all"></div>
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
	.box1{
		width: 100px;
		height: 100px;
		border:1px solid #000;
		margin-top: 50px ;
	}
	.border-all:after{
		border-radius: 10px;
	}
	.box2{
		width:80%;
		height: 45px;
		margin:20px auto;
	}
</style>
