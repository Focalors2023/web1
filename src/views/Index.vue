<template>
   <!-- <div><el-button type="primary">主要按钮</el-button></div>
    <el-icon>
        <Aim />
    </el-icon>
-->
<div class="frame">
  <br/><br/>
  <div class="carousel">
    <el-carousel :interval="4000" type="card" height="285px">
      <el-carousel-item v-for="item in 6" :key="item">
      <!-- <h3 text="2xl" justify="center">{{ item }}</h3>  -->
      </el-carousel-item>
    </el-carousel>
  </div>
    <div class="main">
     <!--主体-->
     <div>
      <h1 style="font-family: yuanshen">新 闻 资 讯</h1>
    </div>
      <div class="news">
        <el-card class="box-card">
          <template #header>
            <div class="card-header">
              <span>「振晶的复核实验」活动：联结振晶挑战</span>
            </div>
          </template>
          <div class="text item">〓活动时间〓

            2023/03/14 10:00 ~ 2023/03/27 03:59
            <el-image v-for="url in urls" :key="url" :src="url" lazy />
          </div>
        </el-card>
      </div>
    </div>
  <br/><br/>
  <span >
    <div></div>
  </span>
  <br/><br/>
  <!---<div class="info">
    <h4>官方资讯</h4>
      <el-scrollbar height="400px">
      <p v-for="item in 10" :key="item" class="scrollbar-demo-item">{{ item }}</p>
    </el-scrollbar>
  </div>
 -->  <br/><br/><br/>
</div> 
</template>
  
<script setup>

</script>
  
<style scoped>
/*div {
    color: aquamarine;
}*/
 
/*主体部分*/
.main {
  background-color:#eef6ff;
  position: absolute;
  margin-top: 150px;
  margin-left:100px;
  height: 1500px;
  width:1000px;
}
.news {
  position: absolute;
  margin-left:50px;
}
.carouse {
  margin-top: 500px;
}
.frame {
  background-image: linear-gradient(to top, rgba(255, 255, 255, 1), rgba(255, 255, 255, 0)),url(https://ecmb.bdimg.com/tam-ogel/-2035912203_363764029_4000_1214.jpg?x-bce-process=image/format,f_auto,/quality,q_80); 
  background-size: 100%;
  background-repeat: no-repeat;
  position: relative;
}
h1 {
  text-align: center;
  font-size: 40px;
}
.el-carousel__item h3 {
  color: #475669;
  opacity: 0.75;
  line-height: 245px;
  margin: 0;
  text-align: center;
}

.el-carousel__item:nth-child(n) {
  background-image: url("https://upload-bbs.miyoushe.com/upload/2023/03/02/75379477/64f70c027b4190fd8544b805843a87e7_8452368312883517876.png?x-oss-process=image//resize,s_600/quality,q_80/auto-orient,0/interlace,1/format,png");
  background-color: #99a9bf;
  background-repeat: no-repeat;
  background-position: right top;
  background-size: 100%;
}
.el-carousel__item:nth-child(7) {
  background-image: url("https://upload-bbs.miyoushe.com/upload/2023/02/28/75379477/473f2624a2c09867984574a3c738c36f_2876626391548211409.png?x-oss-process=image//resize,s_600/quality,q_80/auto-orient,0/interlace,1/format,png");    
   background-repeat: no-repeat;
  background-position: right top;  
  background-color: #d3dce6;
  background-size: 100%;
}
.el-carousel__item:nth-child(3) {
  background-image: url("https://upload-bbs.miyoushe.com/upload/2023/03/01/76387920/a9a50efa2f02c76de7addc94bad6399d_22664983093311640.png?x-oss-process=image//resize,s_600/quality,q_80/auto-orient,0/interlace,1/format,png");    
   background-repeat: no-repeat;
  background-position: right top;  
  background-color: #d3dce6;
  background-size: 100%;
}
.el-carousel__item:nth-child(4) {
    background-image: url("https://upload-bbs.miyoushe.com/upload/2023/03/10/e2ae337db87e9d9250ebf25f5d649c73_2291003758163171498.png");    
   background-repeat: no-repeat;
  background-position: right top;  
  background-color: #d3dce6;
  background-size: 100%;
}
.el-carousel__item:nth-child(5) {
    background-image: url("https://upload-bbs.miyoushe.com/upload/2023/03/09/37a1753084d5f4f8c7f8aab0bda2f0e7_5393074540839485536.jpg");    
   background-repeat: no-repeat;
  background-position: right top;  
  background-color: #d3dce6;
  background-size: 100%;
}
.el-carousel__item:nth-child(6) {
  background-image: url("https://upload-bbs.miyoushe.com/upload/2023/03/07/3d5343cc1031dc8aa53fd58d7f12d5b4_4284667790999497593.jpg");    
   background-repeat: no-repeat;
  background-position: right top;  
  background-color: #d3dce6;
  background-size: 100%;
}
.scrollbar-demo-item {
  width: 480px;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 200px;
  margin: 10px;
  text-align: center;
  border-radius: 4px;
  background: var(--el-color-primary-light-9);
  color: var(--el-color-primary);
}
.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.text {
  font-size: 14px;
}

.item {
  margin-bottom: 18px;
}

.box-card {
  width: 480px;
}
/*
.info {
  background-color: #d3dce6;
  width: 500px;
}
*/
</style>