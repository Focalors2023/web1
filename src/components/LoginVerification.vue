<template>
    <!--验证框部分-->
  <div class="Validation-OuterBorder">

    <div class="Validation-Title">请开始验证</div>
    <div class="check">
      <div class="check-child"></div>
    </div> 
    
    <!-- 拖动条 -->
    <div class="drag">
      <!-- 操作说明 -->
      <div class="drag-tips">
        <span>按住左边按钮向右拖动完成上方图像验证</span>
      </div>
      <!-- 可拖动的盒子 -->
      <div class="drag-child"></div>
    </div>
  </div>

</template>

<script setup>

</script>

<style lang="scss" scoped>
.Validation-OuterBorder{
  width: 320px;
  height: 280px;
  position: relative;

  background-color: rgba(237, 233, 220, 0.858);

}
.check{
  width:300px;
  height:200px;
  position: absolute;
  background-repeat:no-repeat;
  left:10px;
  top:30px;
  background-size: 100%,100%;
  background-image: url(https://img1.baidu.com/it/u=1229471883,3351187547&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=279);

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

.check-child{
  content:'';
  width:50px;
  height:50px;
  border:1px solid #fff;
  background-image: inherit;
  background-repeat: inherit;
  background-size:300px 200px;
  background-position:-230px -100px;
  position:absolute;
  top:80px;
  left:10px;
}

.drag{
  width: 300px;
  height: 50px;
  background-color: #e3e3e3;
  margin-top: 10px;
  left:10px;
  position: absolute;
  top:200px;
}


.drag-child{
  width: 50px;
  height: 50px;
  background-color: rgb(255, 144, 188);
  z-index: 10;
  position: absolute;
  top: 0;
  left: 0;
}

.drag-tips{
  display: flex;
  align-items: center;
  justify-content: end;
  width: 95%;
  height: 100%;
  margin: 0 auto;
  position: absolute;
  font-size: 12px;
  color: #625858;
}


</style>