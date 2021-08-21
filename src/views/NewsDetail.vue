<template>
	<div>
		<div class="list-item">
			{{news.top_comments_content || news.text}}
		</div>
	</div>
</template>

<script>
	export default {
		name: 'NewsDetail',
		data() {
			return {
				news: {}
			}
		},
		created() {
			// console.log(this.$route.query.id)
			this.getData(this.$route.query.id)
		},
		methods: {
			getData(id) {
				this.$axios.get(`https://api.apiopen.top/getSingleJoke?sid=${id}`).then(res => {
					this.news = res.data.result
					console.log(res)
				})
			},
		}
	}
</script>

<style scoped>
	.list-item {
		font-size: 20px;
	}
</style>
