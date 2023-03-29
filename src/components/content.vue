<template>
<div>
    <el-button type="primary" plain v-on:click="showLatest()" class="button" size="">&nbsp;&nbsp;最新&nbsp;&nbsp;</el-button>
    <el-button type="primary" plain v-on:click="showNews()" class="button">&nbsp;&nbsp;新闻&nbsp;&nbsp;</el-button>
    <el-button type="primary" plain v-on:click="showAnnouncement()" class="button">&nbsp;&nbsp;公告&nbsp;&nbsp;</el-button>
    <el-button type="primary" plain v-on:click="showActivity()" class="button">&nbsp;&nbsp;活动&nbsp;&nbsp;</el-button>
    <!--
    <button v-on:click="showLatest()">最新</button>
    <button v-on:click="showNews()">新闻</button>
    <button v-on:click="showAnnouncement()">公告</button>
    <button v-on:click="showActivity()">活动</button>
    -->
    <div v-if="latest">    
      <h2>最新消息</h2>
      <p>这里是最新消息。</p>
      <div class="content-news">
        <a href="https://ys.mihoyo.com/main/news/detail/26848">
            <img class="content-img" src="https://webstatic.mihoyo.com/upload/contentweb/2023/03/21/96bd645e1cb056962a2288cd99d4c8c5_4268726383485374988.jpg">
            <div class="content-news-text">
                <h3>《原神》「灵蕈棋阵」玩法小贴士</h3>
                <h4>2023/03/22</h4>
                <p>新闻</p>
            </div>
        </a>
      </div>
      <div class="content-news">
        <a href="https://ys.mihoyo.com/main/news/detail/26840">
            <img class="content-img" src="https://webstatic.mihoyo.com/upload/contentweb/2023/03/21/9406607c3e949c848ace24a97b0d16f7_1969240611093881357.jpg">
            <div class="content-news-text">
                <h3>《《原神》拾枝杂谈-「米卡：银星之伴」</h3>
                <h4>2023/03/21</h4>
                <p>新闻</p>
            </div>
        </a>
      </div>
      <div class="content-news">
        <a href="https://ys.mihoyo.com/main/news/detail/26777">
            <img class="content-img" src="https://webstatic.mihoyo.com/upload/contentweb/2023/03/20/3bcd4f6a81d3174c2ca952ecb928e92e_4555663524749007853.jpg">
            <div class="content-news-text">
                <h3>《原神》EP - 春露漫散之虹</h3>
                <h4>2023/03/20</h4>
                <p>新闻</p>
            </div>
        </a>
      </div>
      <div class="content-news">
        <a href="https://ys.mihoyo.com/main/news/detail/26848">
            <img class="content-img" src="https://webstatic.mihoyo.com/upload/contentweb/2023/03/21/96bd645e1cb056962a2288cd99d4c8c5_4268726383485374988.jpg">
            <div class="content-news-text">
                <h3>《原神》「灵蕈棋阵」玩法小贴士</h3>
                <h4>2023/03/22</h4>
                <p>新闻</p>
            </div>
        </a>
      </div>
    </div>
    <div v-if="news" class="news-area">
    <h2>新闻</h2>
    <p>这里是新闻。</p>
      <div class="content-news">
        <a href="https://ys.mihoyo.com/main/news/detail/26845">
        <img class="content-img" src="https://webstatic.mihoyo.com/upload/contentweb/2023/03/21/bd1ff97b99d8995ff1a6a586c71f402a_142852266146853187.jpg">
        <div class="content-news-text">
            <h3>诺艾尔生日快乐｜不知道你是喜欢先吃松饼，还是先吃水果呢？</h3>
            <h4 id="news-date">2023/03/21</h4>     
        </div>
        </a>
      </div>
      <div class="content-news">
        <a href="https://ys.mihoyo.com/main/news/detail/26777">
        <img class="content-img" src="https://webstatic.mihoyo.com/upload/contentweb/2023/03/20/3bcd4f6a81d3174c2ca952ecb928e92e_4555663524749007853.jpg">
        <div class="content-news-text">
            <h3>《原神》EP - 春露漫散之虹</h3>
            <h4 id="news-date">2023/03/20</h4>     
        </div>
        </a>
      </div>
      <div class="content-news">
        <a href="https://ys.mihoyo.com/main/news/detail/26765">
        <img class="content-img" src="https://webstatic.mihoyo.com/upload/contentweb/2023/03/16/d2004c029c037a7d3b0bcddde2c95e10_2339923388801205929.png">
        <div class="content-news-text">
            <h3>「我…我来为队伍探路！」——「晴霜的标绘」·米卡</h3>
            <h4 id="news-date">2023/03/17</h4>     
        </div>
        </a>
      </div>
      <div class="content-news">
        <a href="https://ys.mihoyo.com/main/news/detail/26684">
        <img class="content-img" src="https://webstatic.mihoyo.com/upload/static-resource/2023/03/16/b5115675e68613d065132fbcbbeb0978_7810362180278676657.png">
        <div class="content-news-text">
            <h3>《原神》3.5版本「风花的呼吸」活动速递第二期</h3>
            <h4 id="news-date">2023/03/16</h4>     
        </div>
        </a>
      </div>
    </div>

    <div v-if="announcement">
    <h2>公告</h2>
    <p>这里是公告。</p>
        <div class="content-news">
            <a href="https://ys.mihoyo.com/main/news/public">
            <img class="content-img" src="https://uploadstatic.mihoyo.com/contentweb/20201009/2020100912021670098.png">
            <div class="content-news-text">
            <h3>《原神》祈愿概率公示</h3>
            <h4 id="news-date"></h4>     
        </div>
        </a>
      </div>
      <div class="content-news">
            <a href="https://ys.mihoyo.com/main/news/detail/26400">
            <img class="content-img" src="https://webstatic.mihoyo.com/upload/contentweb/2023/02/28/c9ce9c6451451fa554ab74c2342d2c19_7924384204652977964.png">
            <div class="content-news-text">
            <h3>《原神》3.5版本「风花的呼吸」更新说明</h3>
            <h4 id="news-date">2023/03/01</h4>     
        </div>
        </a>
      </div>
      <div class="content-news">
            <a href="https://ys.mihoyo.com/main/news/detail/26400">
            <img class="content-img" src="https://webstatic.mihoyo.com/upload/contentweb/2023/02/28/c9ce9c6451451fa554ab74c2342d2c19_7924384204652977964.png">
            <div class="content-news-text">
            <h3>《原神》3.5版本「风花的呼吸」更新说明</h3>
            <h4 id="news-date">2023/03/01</h4>     
        </div>
        </a>
      </div>
      <div class="content-news">
            <a href="https://ys.mihoyo.com/main/news/detail/26400">
            <img class="content-img" src="https://webstatic.mihoyo.com/upload/contentweb/2023/02/28/c9ce9c6451451fa554ab74c2342d2c19_7924384204652977964.png">
            <div class="content-news-text">
            <h3>《原神》3.5版本「风花的呼吸」更新说明</h3>
            <h4 id="news-date">2023/03/01</h4>     
        </div>
        </a>
      </div>
    </div>

    <div v-if="activity">
    <h2>活动</h2>
    <p>这里是活动。</p>
    <div class="content-news">
            <a href="https://ys.mihoyo.com/main/news/detail/20307">
            <img class="content-img" src="https://webstatic.mihoyo.com/upload/contentweb/2022/02/28/ccf9369b857554c25d1c8aa25b24bff5_1145480204036642487.jpg">
            <div class="content-news-text">
            <h3>《原神》「神工天巧」活动即将开启</h3>
            <h4 id="news-date">2023/02/28</h4>     
        </div>
        </a>
      </div>
      <div class="content-news">
            <a href="https://ys.mihoyo.com/main/news/detail/20307">
            <img class="content-img" src="https://webstatic.mihoyo.com/upload/contentweb/2022/02/28/ccf9369b857554c25d1c8aa25b24bff5_1145480204036642487.jpg">
            <div class="content-news-text">
            <h3>《原神》「神工天巧」活动即将开启</h3>
            <h4 id="news-date">2023/02/26</h4>     
        </div>
        </a>
      </div>
      <div class="content-news">
            <a href="https://ys.mihoyo.com/main/news/detail/20307">
            <img class="content-img" src="https://webstatic.mihoyo.com/upload/contentweb/2022/02/28/ccf9369b857554c25d1c8aa25b24bff5_1145480204036642487.jpg">
            <div class="content-news-text">
            <h3>《原神》「神工天巧」活动即将开启</h3>
            <h4 id="news-date">2023/02/25</h4>     
        </div>
        </a>
      </div>
      <div class="content-news">
            <a href="https://ys.mihoyo.com/main/news/detail/20307">
            <img class="content-img" src="https://webstatic.mihoyo.com/upload/contentweb/2022/02/28/ccf9369b857554c25d1c8aa25b24bff5_1145480204036642487.jpg">
            <div class="content-news-text">
            <h3>《原神》「神工天巧」活动即将开启</h3>
            <h4 id="news-date">2023/02/20</h4>     
        </div>
        </a>
      </div>
    </div>
</div>
</template>
<style>
#news-date {
    color: #c07a00;
    position: absolute;
    bottom: -20px;
    right: 0px;
}
.content-news-text {
    position: absolute;
    margin-top: 20px;
    margin-left: 315px;
    background-color: rgba(191, 255, 234, 0);
    width: 665px;
    height: 140px;

}
.content-news-text h3 {
    margin:0px;
    color: black;
}
.content-news-text h4 {
    color: #c07a00;
    position: absolute;
    right: 80px;
    bottom: -20px;
}
.content-news-text p {
    color: #c07a00;
    position: absolute;
    right: 0px;
    bottom: -15px;
}
.content-img {
    margin-top: 20px;
    margin-left: 20px;
    position: absolute;
    object-fit: fill;
    width: 265px;
    height: 140px;
}
.content-news {
    margin-bottom: 10px;
    border-radius:5px;
    position: relative;
    background-color:ghostwhite;
    width: 1000px;
    height: 185px;
}
.content-news:hover {
  border: 2px solid rgb(168, 168, 168);
  background-color: rgb(255, 255, 255);
}
.button {
margin-right: 40px;
}
</style>

<script>
export default {
data() {
    return {
    latest: true,
    news: false,
    announcement: false,
    activity: false
    };
},
methods: {
    showLatest() {
    this.latest = true;
    this.news = false;
    this.announcement = false;
    this.activity = false;
    },
    showNews() {
    this.latest = false;
    this.news = true;
    this.announcement = false;
    this.activity = false;
    },
    showAnnouncement() {
    this.latest = false;
    this.news = false;
    this.announcement = true;
    this.activity = false;
    },
    showActivity() {
    this.latest = false;
    this.news = false;
    this.announcement = false;
    this.activity = true;
    }
}
};
</script>
