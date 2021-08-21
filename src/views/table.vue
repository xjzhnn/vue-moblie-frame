<template>
	<div class="hello">
		<div v-for="(item,columnsIndex) in columns" :key="columnsIndex" class="table">
			<div v-for="(item,outerRowsIndex) in outerRows" :key="outerRowsIndex" class="table-outer-td">
				<div v-for="(item,innerRowsIndex) in innerRows" :key="innerRowsIndex"
					@click="handleClick(columnsIndex,innerRowsIndex)" class="table-td">
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'HelloWorld',
		data() {
			return {
				columns: 3,
				outerRows: 6,
				innerRows: 3
			}
		},
		methods: {
			handleClick(columnsIndex, innerRowsIndex) {
				console.log(columnsIndex, innerRowsIndex)
			}
		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	.table {
		display: flex;
	}

	.table:first-child {
		border-top: 2px solid #ddd;
		margin-top: -2px;
	}
	.table:last-child {
		border-bottom: 2px solid #ddd;
	}

	.table-outer-td {
		flex: 1;
		height: 30px;
		border: 2px solid #ddd;
		display: flex;
		margin-left: -2px;
	}

	.table-td {
		flex: 1;
		border-left: 1px dotted #ddd;
		height: 30px;
	}
</style>
