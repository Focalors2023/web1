<template>
  <div class="layout">
    <el-container v-if="state.showMenu" class="container">
      <el-aside class="aside">
        <!--系统名称+logo-->
        <div class="head">
          <div>
            <img
              src="https://upload-bbs.miyoushe.com/upload/2023/03/01/75276550/93c78d3129fa4a7a9373661f2a4286a1_3051677053170841950.png"
              alt="logo">
          </div>
        </div>
        <span class="title">标题</span>
        <!--一条为了美观的线条-->
        <div class="line" />
        <el-menu background-color="#222832" text-color="#fff" 
          :router="true" :default-openeds="defaultOpen"
          :default-active='currentPath'>
          <!--一级栏目-->
          <el-sub-menu index="1">
            <template #title>
              <span>原神社区</span>
            </template>
            <!--二级栏目-->
            <el-menu-item-group>
              <el-menu-item index="/"><el-icon>
                  <DataLine />
                </el-icon>首页</el-menu-item>
              <el-menu-item index="/add"><el-icon>
                  <DataLine />
                </el-icon>版本更新</el-menu-item>
            </el-menu-item-group>
          </el-sub-menu>
          <el-sub-menu index="2">
            <template #title>
              <span>首页配置</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="/swiper"><el-icon><Picture /></el-icon>轮播图配置</el-menu-item>
              <el-menu-item index="/hot"><el-icon><StarFilled /></el-icon>热销商品配置</el-menu-item>
              <el-menu-item index="/new"><el-icon><Sell /></el-icon>新品上线配置</el-menu-item>
              <el-menu-item index="/recommend"><el-icon><ShoppingCart /></el-icon>为你推荐配置</el-menu-item>
            </el-menu-item-group>
          </el-sub-menu>
        </el-menu>
      </el-aside>
      <!--右边内容布局-->
      <el-container class="content">
        <Header />
        <div class="main">
          <router-view />
        </div>
        <Footer />
      </el-container>
    </el-container>
    <el-container v-else class="container">
      <router-view />
    </el-container>
  </div>

</template>

<script setup>
import { reactive } from 'vue'
import { useRouter } from 'vue-router'
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import { localGet, pathMap } from '@/utils'
// 不需要菜单的路径数组
const noMenu = ['/login']
const router = useRouter()
const state = reactive({
    showMenu: true,
    defaultOpen: ['1', '2'],
    currentPath: '/',
  })
  /*
// 监听路由的变化
router.beforeEach((to) => {
  state.showMenu = !noMenu.includes(to.path)
})*/
router.beforeEach((to, from, next) => {
  if (to.path == '/login') {
    // 如果路径是 /login 则正常执行
    next()
  } else {
    // 如果不是 /login，判断是否有 token
    if (!localGet('token')) {
      // 如果没有，则跳至登录页面
      next({ path: '/login' })
    } else {
      // 否则继续执行
      next()
    }
  }
  state.showMenu = !noMenu.includes(to.path)
  state.currentPath = to.path
  document.title = pathMap[to.name]
})
</script>
<style scoped>
.layout {
  min-height: 100vh;
  background-color: #ffffff;
}

.container {
  height: 100vh;
}

.aside {
  width: 200px !important;
  background-color: #222832;
}

.head {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 150px;
}

.head>div {
  display: flex;
  align-items: center;
}

.head img {
  width: 200px;
  height: 100px;
  margin-right: 10px;
}

.head span {
  font-size: 20px;
  color: #ffffff;
}

.line {
  border-top: 1px solid hsla(0, 0%, 100%, .05);
  border-bottom: 1px solid rgba(0, 0, 0, .2);
}

.content {
  display: flex;
  flex-direction: column;
  max-height: 100vh;
  overflow: hidden;
}

.main {
  height: 100vh;
  overflow: auto;
  padding: 10px;
}

.title {
  color: aquamarine;
}
</style>
<style>
body {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
</style>