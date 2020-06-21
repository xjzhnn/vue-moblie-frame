<template>
	<div>
		<h1>我的</h1>
		<h3 @click="goSelf">跳转到个人信息页面</h3>
	</div>
</template>

<script>
	export default{
		methods:{
			goSelf(){
				this.$router.push({
					path:'/me/self'
				})
			}
		}
	}
</script>

<style>
</style>
