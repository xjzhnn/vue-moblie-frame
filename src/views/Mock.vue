<template>
	<div>测试mock</div>
</template>

<script>
	export default {
		created() {
			this.$axios.post("/login").then(res => {
				console.log(res)
			})
		}
	}
</script>

<style>
</style>
