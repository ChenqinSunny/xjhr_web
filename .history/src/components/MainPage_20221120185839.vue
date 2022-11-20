<template>
  <div class="hello">
   <div class="backgrand_video">
    <div class="header_bar">
      <div class="header_bar_buttons">
        <router-link to="/Login"><el-button round id="login_button">
				   <!-- 路由跳转到Login页面 -->
				   登陆
				   </el-button></router-link>
			   <router-link to="Regist"><el-button round id="regist_button">
				   注册
			   </el-button></router-link>
      </div>

    </div>
   </div>


  </div>
</template>

<script>
export default {
  name: 'MainPage',
  props: {
    msg: String
  }
}
</script>
<style>
/* #header_bar_buttons{
		position: absolute;
		right: 0%;
		top: 25%;
	} */
  #regist_button{
		background-color:transparent;   /* 背景透明 */
    position: absolute;
		right: 10%;
    top: 15%;
	}
#login_button{
		background-color:transparent;   /* 背景透明 */
    position: absolute;
		right: 15%;
    top: 25%;
	}
.hello{
  height: 3000px;
}
.header_bar{
  backdrop-filter: blur(20px); /* 背景虚化 */
	background: rgba(241, 241, 241, 0.5); /* 0.5=不透明度 */
	position:fixed;
	top: 0px ;
	left: 0px;
	height: 70px;
	width: 100%;
	/* background-color: aquamarine; */
	border: 2px;
}
.backgrand_video{
  background-image: url("https://ts4.cn.mm.bing.net/th?id=OIP-C.OzPkRRK9tF8MKHU52DN2XQHaEL&w=332&h=187&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2");
	border: 2px;
  height: 600px;
	/* height: 500px; */
	width: 100%;
	position: absolute;
	top: 70px;
	left: 0%;
}

</style>
