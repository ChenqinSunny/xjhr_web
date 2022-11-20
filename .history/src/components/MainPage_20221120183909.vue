<template>
  <div class="hello">
   <div class="backgrand_video">
    <div class="header_bar"></div>
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
#backgrand_video{
  position: absolute;
  top: 0px;
  height: 600px;
  weight: 100%;
  background-color: aqua;
}

</style>
