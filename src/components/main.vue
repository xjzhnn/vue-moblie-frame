<template>
	<div class="main">
		<div class="content">
			 <router-view> </router-view>
		</div>
		<div class="footer">
			<Tabbar></Tabbar>
		</div>
	</div>
</template>

<script>
	import Tabbar from '@/components/tabbar.vue';
	export default {
		name: "Tabber",
		components:{
			Tabbar
		}
	};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.main{
	width:100%;
	height: 100vh;
	display: flex;
	flex-direction: column;
	.content{
		flex: 1;
	}
	.footer{
		height: 50px;
	}
}
</style>
