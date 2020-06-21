<template>
    <div :class="{'header-com': true, 'border-b': border}">
        <div class="left" @click="goBack">
            <img class="back" src="@/assets/images/left.png"/>
        </div>
        
        <div class="title ellipsis--l1">{{title}}</div>
    </div>
</template>

<script>
export default {
    name: 'navTitle',
    props: {
        title: String, 
        border: Boolean
    },
    methods: {
        goBack() {
			
			if(this.$route.name=='order'){
				this.$router.push({path:'/my'})
			}else{
				 this.$router.go(-1);
			}
           
        }
    }
}
</script>

<style lang="less" scoped>
    .border {
        border-bottom: 1px solid #f4f4f4;
    }
    .header-com {
        height: 45px;
        z-index: 999;
        background-color: #ffffff;
        box-sizing: border-box;
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        z-index: 999;
        .left {
            position: absolute;
            height: 45px;
            padding-left: 10px;
            line-height: 45px;
            .back {
                height: 24px;
                width: 24px;
                vertical-align: middle;
            }
        }
        .title {
            text-align: center;
            line-height: 45px;
            font-size: 16px;
            padding: 0 35px;
        }
    }
</style>


