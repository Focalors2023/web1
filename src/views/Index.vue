<template>
  <div class="frame">
    <div>
      <h1 style="font-family: yuanshen">新 闻 资 讯</h1>
    </div>
    <br/><br/>
    <div class="main">
      <!--主体-->
      <div class="carousel">
        <el-carousel indicator-position="outside">
          <el-carousel-item v-for="item in 4" :key="item">
          </el-carousel-item>
        </el-carousel>
      </div>
      <div class="demo">
        <div class="title">
          <DynamicComponent />
        </div>
      </div>
      <div class="news">
        <h4>最新新闻</h4>
        <a href="https://ys.mihoyo.com/main/news/detail/26765">
          <div class="new1">
            <div class="new-picture1">
              <img src="https://webstatic.mihoyo.com/upload/static-resource/2023/03/16/d2004c029c037a7d3b0bcddde2c95e10_4652844505751540441.png" />
            </div>
            <div style="font-family: yuanshen" class="new-title">「我…我来为队伍探路！」——「晴霜的标绘」·米卡</div> 
            <div class="new-date-num">2023/03/17</div>
            <div class="new-date-type">新闻</div>
          </div>
        </a>
        <a href="https://ys.mihoyo.com/main/news/detail/25804">
          <div class="new2">
            <div class="new-picture2">
              <img src="https://webstatic.mihoyo.com/upload/contentweb/2023/01/16/7ed362d946e752c5d4c82c7d5a4174e7_7311698904634466014.jpg" alt="">
            </div>
              <div style="font-family: yuanshen" class="new-title">翎羽如穗，绘摹殊境</div>
              <div class="new-date-num">2023/03/17</div>
              <div class="new-date-type">新闻</div>          
         </div>  
        </a>
        <a href="https://ys.mihoyo.com/main/news/detail/26768">
          <div class="new3">
            <div class="new-picture3">
              <img src="https://webstatic.mihoyo.com/upload/contentweb/2023/03/17/dba71c4b7796698d50d49efd7c46a7b3_2963100425049468016.jpg"/>
            </div>
            <div style="font-family: yuanshen" class="new-title">《原神》角色演示-「米卡：绘羽的领行」</div>
            <div class="new-date-num">2023/03/17</div>
            <div class="new-date-type">新闻</div>
          </div>
        </a>
      </div>
      <div class="content">
        <content />
      </div>
      <div class="illustratedHandbook">
        <illustratedHandbook />
      </div>
    </div>
  </div> 
</template>
  
<script>

import DynamicComponent from '../components/DynamicComponent.vue'
import content from '../components/content.vue'
import illustratedHandbook from '../components/illustratedHandbook.vue'

export default {
  components: {
    illustratedHandbook,
    DynamicComponent,
    content,
    
  },
  data() {
    return {
      currentTab: 'Home',
      tabs: ['activities', 'announcement', 'info']
    }
  }
}
</script>
  
<style scoped>
/*div {
    color: aquamarine;
}*/
 
/*主体部分*/
.illustratedHandbook {
  background-color: #c7ffef;
  width: 1000px;
  height: 700px;
  position: absolute;
  left: 90px;
}
.content {
  background-color: #e1e0ff;
  width: 1000px;
  height: 1000px;
  position: relative;
  margin-top:50px;
  margin-left:90px;
}
.new-title {
  margin-left:10px;
  margin-top:210px;
  position: absolute;
}
.new1 img {
  transition: transform .5s ease;
}

.new1:hover img {
  transform: scale(1.2);
}

.new2 img {
  transition: transform .5s ease;
}

.new2:hover img {
  transform: scale(1.2);
}
.new3 img {
  transition: transform .5s ease;
}

.new3:hover img {
  transform: scale(1.2);
}
.new1 {
  position: relative;
  left: 10px;
  border-radius: 8px;
  width: 380px;
  height: 390px;
  background-color: #5d5d5d8e;
}
.new2 {
  position: relative;
  left:410px;
  top:-390px;
  border-radius: 8px;
  width: 380px;
  height: 390px;
  background-color: #5d5d5d8e;
}
.new3 {
  position: relative;
  left:810px;
  top:-780px;
  border-radius: 8px;
  width: 380px;
  height: 390px;
  background-color: #5d5d5d8e;
}
.new-picture1 {
  overflow: hidden;
  position: absolute;
  background-size: 100% 100%;
  width: 360px;
  height: 180px;
  background-color: aqua;
  margin-top:20px;
  margin-left:10px;
}
.new-picture2 {
  overflow: hidden;
  position: absolute;
  background-size: 100% 100%;
  width: 360px;
  height: 180px;
  background-color: aqua;
  margin-top:20px;
  margin-left:10px;
}
.new-picture3 {
  overflow: hidden;
  position: absolute;
  background-size: 100% 100%;
  width: 360px;
  height: 180px;
  background-color: aqua;
  margin-top:20px;
  margin-left:10px;
}
img {
  position: relative;
  object-fit: fill;
  width: 100%;
  height: 100%;
}
.news {
  margin-top:500px;
  width:1200px;
  height:450px;
   background-color: #76a5e7;
}
.new-date-num {
  left: 10px;
  font-size: 15px;
  position: absolute;
  top: 360px;
  color: #a6a6a6;
}
.new-date-type {
  right: 10px;
  font-size: 15px;
  position: absolute;
  top: 360px;
  color: #c07a00;
}

.frame { 
  width: 100%;
  height: 100%;
  position: relative;
  background-size: 100%;
  background-image: url(https://webstatic.mihoyo.com/upload/static-resource/2023/03/03/0d2d7ccc537b94d57c9f8d5252689b43_1119529141036984099.png);
  background-repeat: no-repeat;
  background-color: rgba(255, 255, 255, 0.3)
}
.main {
  border: 3px solid black;
  background-color:#eef6ff;
  position: absolute;
  margin-top:-50px;
  left:100px;
  height: 2800px;
  width:1200px;
}
.carousel {
  height: 260px;
  width: 650px;
  background-color: #bcdf88;
  position: absolute;
  margin-left:30px;
}

.title {
  position: absolute;
  margin-left:720px;
  height: 300px;
  width: 450px;
  background-color: #e1e0ff;
}
.text {
  position: absolute;
  margin-left:720px;
  margin-top:110px;
  height: 240px;
  width: 450px;
  background-color: #817dff;
}
h1 {
  text-align: center;
  font-size: 40px;
}
.el-carousel__item h3 {
  display: flex;
  color: #475669;
  opacity: 0.75;
  line-height: 300px;
  margin: 0;
}

.el-carousel__item:nth-child(6) {
  background-color: #99a9bf;
  background-size: 100%;
  background-image: url(https://upload-bbs.miyoushe.com/upload/2023/03/09/37a1753084d5f4f8c7f8aab0bda2f0e7_5393074540839485536.jpg);
}

.el-carousel__item:nth-child(5) {
  background-color: #d3dce6;
  background-size: 100%;
  background-image: url(https://upload-bbs.miyoushe.com/upload/2023/03/07/3d5343cc1031dc8aa53fd58d7f12d5b4_4284667790999497593.jpg);
}
.el-carousel__item:nth-child(3) {
  background-color: #d3dce6;
  background-size: 100%;
  background-image: url(https://upload-bbs.miyoushe.com/upload/2023/02/28/75379477/473f2624a2c09867984574a3c738c36f_2876626391548211409.png?x-oss-process=image//resize,s_600/quality,q_80/auto-orient,0/interlace,1/format,png);
}
.el-carousel__item:nth-child(4) {
  background-color: #d3dce6;
  background-size: 100%;
  background-image: url(https://upload-bbs.miyoushe.com/upload/2023/03/03/e1f37aaaa715a7b7aa92ca60121262b5_6455383696466851594.jpg);
}

</style>