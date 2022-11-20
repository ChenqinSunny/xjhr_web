<template>
  <div class="hello">
   <div class="backgrand_video">
    <div class="header_bar">aa</div>
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
.hello{
  height: 3000px;
}
.header_bar{
  backdrop-filter: blur(20px); /* 背景虚化 */
	background: rgba(241, 241, 241, 0.5); /* 0.5=不透明度 */
	position:fixed
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
	top: 0%;
	left: 0%;
}

</style>
