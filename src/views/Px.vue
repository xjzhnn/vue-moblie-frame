<template>
	<div>
		<div class="border-b border-t box">我是测试1px</div>
		<div class="box1"></div>
		<div class="box2 border-all"></div>
	</div>
</template>

<script>
	export default {
		name: 'Px'
	}
</script>

<style lang="less" scoped>
	.box {
		height: 200px;
		width: 200px;
	}

	.box1 {
		width: 100px;
		height: 100px;
		border: 1px solid #000;
		margin-top: 50px;
	}

	.border-all:after {
		border-radius: 10px;
	}

	.box2 {
		width: 80%;
		height: 45px;
		margin: 20px auto;
	}
</style>
