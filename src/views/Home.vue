<template>
  <div class="home">
    <h1>首页</h1>
	<h3 @click="goAbout">跳到about页面</h3>
  </div>
</template>

<script>

export default {
  methods:{
	  goAbout(){
		  this.$router.push({
			  path:'/about'
		  })
	  }
  }
}
</script>
