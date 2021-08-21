<template>
	<div class="home">

		<h1>首页</h1>
		<el-button @click="handleJump('About')">about页面</el-button>
		<el-button @click="handleJump('News')">news页面</el-button>
	</div>
</template>

<script>
	export default {
		methods: {
			handleJump(name) {
				this.$router.push({
					name: name
				})
			}
		}
	}
</script>
<style lang="less" scoped>
</style>
