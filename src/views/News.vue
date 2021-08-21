<template>
	<div>
		<div class="list-item" v-for="item in list" :key="item.sid" @click="goDetail(item.sid)">
			{{item.text}}
		</div>
	</div>
</template>

<script>
	export default {
		name: 'News',
		data() {
			return {
				list: []
			}
		},
		created() {
			this.getData()
		},
		methods: {
			getData() {
				this.$axios.get("https://api.apiopen.top/getJoke?page=1&count=2&type=video").then(res => {
					this.list = res.data.result
					console.log(res)
				})
			},
			goDetail(id){
				this.$router.push({name:'NewsDetail',query:{id:id}})
			}
		}
	}
</script>

<style>
	.list-item {
		height: 40px;
		line-height: 40px;
		font-size: 18px;
	}

	.list-item:nth-child(even) {
		background: #eee;
	}
</style>
