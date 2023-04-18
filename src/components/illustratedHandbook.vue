<template>
<div>
    <input type="text" v-model="inputName">
    <button @click="filterByName = inputName"> 搜索 </button>
    <br>
    属性: <input type="radio" value="" name="gender" v-model="filterByGender"> 全部
    <input type="radio" value="水" name="gender" v-model="filterByGender"> 水
    <input type="radio" value="火" name="gender" v-model="filterByGender"> 火
    <input type="radio" value="风" name="gender" v-model="filterByGender"> 风
    <input type="radio" value="岩" name="gender" v-model="filterByGender"> 岩
    <input type="radio" value="草" name="gender" v-model="filterByGender"> 草
    <input type="radio" value="冰" name="gender" v-model="filterByGender"> 冰
    <input type="radio" value="雷" name="gender" v-model="filterByGender"> 雷
    <br>
    <br>
    <!-- 使用el-row和el-col标签来实现横向和纵向排列的效果 -->
    <!-- 设置el-row的gutter属性为20，表示栅格间隔为20px -->
    <!-- 设置el-col的span属性为4，表示每个栅格占用4列 -->
    <!-- 设置el-col的max-width属性为1000px，表示当排列宽度超过1000px时开始纵向排列 -->
    <el-row :gutter="20">
      <el-col v-for="item in filterUsers" :key="item.id" :span="3" :max-width="1000">
        <!-- 使用flex布局来调整图片和文字的位置 -->
        <!-- 添加class名为user-card -->
        <div class="user-card" style="display: flex; flex-direction: column; align-items: center; border: 5px solid white;">
        <!-- 使用el-image标签来显示图片 -->
        <!-- 绑定item.img到src属性 -->

        <el-image class="user-img" style="width: 100px; height: 100px ;border-radius: 5px;"  :src="item.img" fit=""></el-image>
        <!-- 将名字写在图片的正下方 -->

        <div class="user-name">{{item.name}}</div>
        </div>
      </el-col>
    </el-row>
</div>
</template>

<script>
export default {
data() {
    return {
    filterByName: '',
    filterByGender: '',
    inputName: '',
    users: [
        { id: 1, name: '迪卢克', gender: '火', img: 'https://uploadstatic.mihoyo.com/ys-obc/2022/08/15/75379475/67e36568afdf20f4ab81693b1bbd81a8_6265806245227306904.png?x-oss-process=image/quality,q_75/resize,s_120' },
        { id: 2, name: '琴', gender: '风', img: 'https://uploadstatic.mihoyo.com/ys-obc/2022/08/15/75379475/a7608c6a588467440f7685a22ab6547c_9054467724670292212.png?x-oss-process=image/quality,q_75/resize,s_120' },
        { id: 3, name: '夜兰', gender: '水', img: 'https://uploadstatic.mihoyo.com/ys-obc/2022/08/15/75379475/79396e8f1225b66e201036e086dd2d8a_1377270106888079991.png?x-oss-process=image/quality,q_75/resize,s_120' },
        { id: 4, name: '七七', gender: '冰', img: 'https://uploadstatic.mihoyo.com/ys-obc/2022/08/15/75379475/7aa3ac9a40ad50d0e90a2b87a6d7c6d9_2689374362470113415.png?x-oss-process=image/quality,q_75/resize,s_120' },
        { id: 5, name: '莫娜', gender: '水', img: 'https://uploadstatic.mihoyo.com/ys-obc/2022/08/15/75379475/d7d8e4a15f70e31a16edaa6d7389437f_2621682045856446660.png?x-oss-process=image/quality,q_75/resize,s_120' },
        { id: 6, name: '刻晴', gender: '雷', img: 'https://uploadstatic.mihoyo.com/ys-obc/2022/08/15/75379475/4a7b16d7954d5b005d3eee8f53d1f7f6_3928029705430572343.png?x-oss-process=image/quality,q_75/resize,s_120' },
        { id: 7, name: '温迪', gender: '风', img: 'https://uploadstatic.mihoyo.com/ys-obc/2022/08/15/75379475/5dfaf4f048e29df066ae95358888a3f0_494294381245295170.png?x-oss-process=image/quality,q_75/resize,s_120' },
        { id: 8, name: '可莉', gender: '火', img: 'https://uploadstatic.mihoyo.com/ys-obc/2022/08/15/75379475/6ae8ad7f384c24a35e091159536a438c_6213472890650459940.png?x-oss-process=image/quality,q_75/resize,s_120' },
        { id: 9, name: '钟离', gender: '岩', img: 'https://uploadstatic.mihoyo.com/ys-obc/2022/08/15/75379475/4e3ff986e180510478cf35927f1009fe_6686816528751678233.png?x-oss-process=image/quality,q_75/resize,s_120' },
        { id: 10, name: '甘雨', gender: '冰', img: 'https://uploadstatic.mihoyo.com/ys-obc/2022/08/15/75379475/e5411d80d0cd1b20d32e65565fed4b88_417824432506361738.png?x-oss-process=image/quality,q_75/resize,s_120' },
        { id: 11, name: '枫原万叶', gender: '风', img: 'https://uploadstatic.mihoyo.com/ys-obc/2022/08/15/75379475/36b5afeda1cc299ed0307b14399e6909_6018399472726457376.png?x-oss-process=image/quality,q_75/resize,s_120' },
        { id: 12, name: '宵宫', gender: '火', img: 'https://uploadstatic.mihoyo.com/ys-obc/2022/08/15/75379475/9afdd357dffff37637b32a24c617b54f_8781889780041590703.png?x-oss-process=image/quality,q_75/resize,s_120' },
        { id: 13, name: '珊瑚宫心海', gender: '水', img: 'https://uploadstatic.mihoyo.com/ys-obc/2022/08/15/75379475/5f6f5d0c81155aea5c939ba08249e5d5_8361164934610616218.png?x-oss-process=image/quality,q_75/resize,s_120' },
        { id: 14, name: '神里绫华', gender: '冰', img: 'https://uploadstatic.mihoyo.com/ys-obc/2022/08/15/75379475/74d14ff2bfdb9961758d0b83097ab64c_6898495248687804760.png?x-oss-process=image/quality,q_75/resize,s_120' },
        { id: 15, name: '神里绫人', gender: '水', img: 'https://uploadstatic.mihoyo.com/ys-obc/2022/08/15/75379475/d16fbf95d62771daa65ab5d04f6abbd5_5682396699474055.png?x-oss-process=image/quality,q_75/resize,s_120' },
        { id: 16, name: '达达利亚', gender: '水', img: 'https://uploadstatic.mihoyo.com/ys-obc/2022/08/15/75379475/7f58bde0ac3fde59a9ebdef71b813165_3128687126656430063.png?x-oss-process=image/quality,q_75/resize,s_120' },
        { id: 16, name: '胡桃', gender: '火', img: 'https://uploadstatic.mihoyo.com/ys-obc/2022/08/15/75379475/c972cf842ee3c4914fd61e347a64cd7a_5160992946606096106.png?x-oss-process=image/quality,q_75/resize,s_120' },
        { id: 17, name: '申鹤', gender: '冰', img: 'https://uploadstatic.mihoyo.com/ys-obc/2022/08/15/75379475/e2dfeee83654c0a6a7436b7c120c105a_6795155790527755000.png?x-oss-process=image/quality,q_75/resize,s_120' },
        { id: 18, name: '雷电将军', gender: '雷', img: 'https://uploadstatic.mihoyo.com/ys-obc/2022/08/15/75379475/4f2125e44d2b9e15611877eda1794ec7_971228898754945838.png?x-oss-process=image/quality,q_75/resize,s_120' },
        { id: 19, name: '荒泷一斗', gender: '岩', img: 'https://uploadstatic.mihoyo.com/ys-obc/2022/08/15/75379475/baf328a93ae579848391513c40df1ee0_8021041769727469540.png?x-oss-process=image/quality,q_75/resize,s_120' },
        { id: 20, name: '阿贝多', gender: '岩', img: 'https://uploadstatic.mihoyo.com/ys-obc/2022/08/15/75379475/213bb493f9b6c433b8cba3a6f738b9f6_475021720007877747.png?x-oss-process=image/quality,q_75/resize,s_120' },
        { id: 21, name: '魈', gender: '风', img: 'https://uploadstatic.mihoyo.com/ys-obc/2022/08/15/75379475/05c5e6dda23259bb49cb6a57c792d284_5237559879224948621.png?x-oss-process=image/quality,q_75/resize,s_120' },
        { id: 22, name: '八重神子', gender: '雷', img: 'https://uploadstatic.mihoyo.com/ys-obc/2022/02/15/6276411/2a54cd4008e8bc398f3f8bdc08225048_2883595654384922672.jpg?x-oss-process=image/quality,q_75/resize,s_120' },
        { id: 22, name: '提纳里', gender: '草', img: 'https://uploadstatic.mihoyo.com/ys-obc/2022/08/23/75379475/6953568084aaa02bc7a774430f1f3b56_9172357402103659910.png?x-oss-process=image/quality,q_75/resize,s_120' },
        { id: 1, name: '凯亚', gender: '冰', img: 'https://uploadstatic.mihoyo.com/ys-obc/2022/08/15/75379475/4f7aa2dc46f21a8b8a3cd5255de5c7e2_7269620473027920302.png?x-oss-process=image/quality,q_75/resize,s_120' },
        { id: 2, name: '丽莎', gender: '雷', img: 'https://uploadstatic.mihoyo.com/ys-obc/2022/08/15/75379475/b561d6285fafd646a40e6143800de1ee_6243992974764126334.png?x-oss-process=image/quality,q_75/resize,s_120' },
        { id: 4, name: '安伯', gender: '火', img: 'https://uploadstatic.mihoyo.com/ys-obc/2022/08/15/75379475/138132721f21bf60c53a8935a8fb0107_2815437205031866763.png?x-oss-process=image/quality,q_75/resize,s_120' },
 
    ]
    };
},
computed: {
    filterUsers() {
    return this.users.filter(
        u => u.name.includes(this.filterByName) && u.gender.includes(this.filterByGender)
    );
    }
}
};
</script>

<style scoped>
/* 使用css样式来隐藏id和性别 */
th:nth-child(1), td:nth-child(1), th:nth-child(3), td:nth-child(3) {
display:none;
}

/* 设置图片和名字的圆角 */
.user-card {
border-radius: 10px;
}

/* 设置鼠标移入时显示白色边框 */
.user-card:hover {
border: 5px solid white;
}

</style>