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
          <button
            v-for="tab in tabs"
            :key="tab"
            :class="['tab-button', { active: currentTab === tab }]"
            @click="currentTab = tab"
          >
            {{ tab }}
          </button>
          <ul>  
            <span style="font-family: yuanshen">活动</span>
            <span style="font-family: yuanshen">公告</span>
            <span style="font-family: yuanshen">资讯</span>
          </ul>
        </div>
        <div class="text">
          <component :is="currentTab" class="tab"></component>
        </div>
      </div>
    </div>
  </div> 
</template>
  
<script>
import activities from '../components/activities.vue';
import announcement from '../components/announcement.vue';
import info from '../components/info.vue'

export default {
  components: {
    activities,
    announcement,
    info,
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
span {
  font-size: 25px;
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
  background-color:#eef6ff;
  position: absolute;
  margin-top:-50px;
  margin-left:30px;
  height: 400px;
  width:1200px;
}
.carousel {
  height: 260px;
  width: 650px;
  background-color: #bcdf88;
  position: absolute;
  margin-top:50px;
  margin-left:30px;
}

.title {
  position: absolute;
  margin-left:720px;
  margin-top:50px;
  height: 60px;
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