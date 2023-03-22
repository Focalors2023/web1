<template>
    <div class="tab">
        <el-card class="box-card">
          <div class="container">
    <div v-for="(item, index) in items" :key="index" class="item" :style="{color: item.color}" @click="goTo(item.url)">
      {{ item.text }}
    </div>
  </div>
          <div>
            <span style="font-family: yuanshen">「风物之歌」交流平台限时开启，一起来交流和分享美妙音乐吧</span>
            <br/><br/>
            <span style="font-family: yuanshen">【有奖活动】「风花的呼吸」3.5版本攻略征集活动开启！</span>
            <br/><br/>
            <span style="font-family: yuanshen">【有奖活动】3.5版本第一期话题活动开启！发帖赢原石~</span>
            <br/>
          </div>
    </el-card>
    </div>
</template>
<script>
import { onMounted, reactive } from 'vue'
export default {
  setup() {
    // 定义状态变量
    const items = reactive([
      { text: '这是第一行', color: 'black', url: 'https://www.baidu.com' },
      { text: '这是第二行', color: 'black', url: 'https://www.google.com' },
      { text: '这是第三行', color: 'black', url: 'https://www.bing.com' }
    ])

    // 定义跳转方法
    const goTo = (url) => {
      window.location.href = url
    }

    // 添加鼠标悬浮事件监听器
    onMounted(() => {
      const container = document.querySelector('.container')
      container.addEventListener('mouseover', (e) => {
        if (e.target.classList.contains('item')) {
          e.target.style.color = 'red'
        }
      })
      container.addEventListener('mouseout', (e) => {
        if (e.target.classList.contains('item')) {
          e.target.style.color = 'black'
        }
      })
    })

    // 返回给模板使用
    return {
      items,
      goTo
    }
  }
}
</script>
  

<style>
span {
  font-size: 20px;
}
.card-header {
display: flex;
justify-content: space-between;
align-items: center;
height: 30px;
}

.text {
font-size: 14px;
}

.item {
margin-bottom: 18px;
}

.box-card {
width: 450px;
height: 240px;
}
</style>