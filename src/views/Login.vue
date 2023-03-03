<template>
    <div class="login-body">
        <!--登录框div-->
        <div class="login-container">
            <!--登录框头部logo部分-->
            <div class="head">
                <img class="logo" src="https://s.weituibao.com/1582958061265/mlogo.png" />
                <div class="name">
                    <div class="title">新蜂商城</div>
                    <div class="tips">Vue3.0 后台管理系统</div>
                </div>
            </div>
        </div>
    </div>
</template>
  
<script setup>
</script>
  
<style scoped>
.login-body {
    name: 'Login';
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    background-color: #fff;
}

.login-container {
    width: 420px;
    height: 500px;
    background-color: #fff;
    border-radius: 4px;
    box-shadow: 0px 21px 41px 0px rgba(0, 0, 0, 0.2);
}

.head {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 40px 0 20px 0;
}

.head img {
    width: 100px;
    height: 100px;
    margin-right: 20px;
}

.head .title {
    font-size: 28px;
    color: #1BAEAE;
    font-weight: bold;
}

.head .tips {
    font-size: 12px;
    color: #999;
}</style>