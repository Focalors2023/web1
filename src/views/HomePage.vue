<script setup>
const handleClickMini = () => {
  AMessage.info('hello isboyjc, click mini AButton!')
};

</script>
<template>
  <div>hello isboyjc, This is toolsdog home page!</div>
  <a-space>
    <a-button type="primary" size="mini" @click="handleClickMini">Mini</a-button>
    <a-button type="primary" size="small">Small</a-button>
    <a-button type="primary">Medium</a-button>
    <a-button type="primary" size="large">Large</a-button>
  </a-space>

    <!-- 这里 -->
    <HelloWorld />
  <!-- Icon -->
  <div>
    <icon-ep-alarm-clock class="" />
    <icon-home-copy class="" />
    <icon-home-download class="" />
  </div>

<!--验证框部分-->
  <div class="Validation-OuterBorder">
    <div>请开始验证</div>
    <div class="check">
      <div class="check-child"></div>
    </div> 
  </div>


</template>
<style>
.Validation-OuterBorder{
  width: 310px;
  height: 340px;
  position: relative;
  background-color: rgba(237, 233, 220, 0.858);

}
.check{
  width:300px;
  height:200px;
  position: absolute;
  background:no-repeat;
  top:20px;
  background-size: 100%,100%;
  background-image: url(https://webstatic.mihoyo.com/upload/static-resource/2023/02/17/a1d7df3b532e4bbfd201e9676f72744e_108955191867354771.jpg);

}
.check::before{
  content: ''; 
  width: 50px;
  height: 50px;
  background: rgba(60, 60, 60, 0.722);
  border: 1px solid #fff;
  position: absolute;
  top: 80px;
  left: 230px;
    }



</style>

<style scoped lang="scss">
</style>