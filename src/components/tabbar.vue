<template>
	<div class="tabbar">
		<div class="tabbar-item" v-for="(item, index) in bars" :key="index" @click="onChange(index, item.to)">
			<img v-if="index == activeTab" class="tabbar-item-icon" :src="item.active" />
			<img v-else class="tabbar-item-icon" :src="item.normal" />
			<span class="tabbar-item-title">{{item.title}}</span>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				bars: [{
						title: '首页',
						to: '/',
						normal: require('@/assets/images/tabbar/home.png'),
						active: require('@/assets/images/tabbar/home_a.png')
					},
					{
						title: '我的',
						to: '/me',
						normal: require('@/assets/images/tabbar/me.png'),
						active: require('@/assets/images/tabbar/me_a.png')
					}
				]
			}
		},
		computed:{
			activeTab:{
				get(){
					return this.$store.state.activeTab
				},
				set(val){
					console.log("进来了")
				}
				
			}
		},
		methods:{
			onChange(index,path){
				
				this.$store.commit('setActiveTab',index);
				this.activeTab=index;
				this.$router.replace({
				    path: path
				});
			}
		}
	}
</script>

<style lang="less" scoped>
	.tabbar {
		position: fixed;
		bottom: 0;
		right: 0;
		left: 0;
		height: 50px;
		z-index: 999;
		display: flex;
		flex-direction: row;
		border-top: 1px solid rgba(238, 238, 238, 1);
		background-color: #ffffff;

		// background-image: url(../assets/images/组15.png);
		// background-size: cover;
		&-item {
			flex: 1;
			display: flex;
			flex-direction: column;
			align-items: center;
			padding-top: 8px;
			padding-bottom: 6px;
			justify-content: space-between;

			&-title {
				font-size: 10px;
				color: #242C6A;
			}

			&-icon {
				height: 22px;
				width: 22px;
			}
		}
	}

	@media only screen and (device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 3) {
		.tabbar {
			padding-bottom: 15px;
		}
	}

	//iphone Xs Max
	@media only screen and (device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio:3) {
		.tabbar {
			padding-bottom: 15px;
		}
	}

	//iphone XR
	@media only screen and (device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio:2) {
		.tabbar {
			padding-bottom: 15px;
		}
	}
</style>
