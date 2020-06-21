<template>
	<div class="self">
		 <nav-title></nav-title>
		<h2>我是self页面</h2>
		<h3 @click="goHome">我要跳转到首页</h3>
		<h3 @click="goAbout">我要跳转到首页里面的about页面</h3>
	</div>
</template>

<script>
	export default{
		methods:{
			goHome(){
				this.$store.commit('setActiveTab',0)
				this.$router.push({
					path:'/'
				})
			},
			goAbout(){
				this.$router.push({
					path:'/about'
				})
			}
		}
	}
</script>

<style>
	.self{
		padding-top: 45px;
	}
</style>
