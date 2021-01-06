<template>
  <div>
    <!--    新闻轮播图-->
    <div class="list-pics">
      <template>
        <el-carousel indicator-position="outside" autoplay>
          <el-carousel-item v-for="(item, index) in listPics" :key="index">
            <img :src="item.link" alt="轮播图">
          </el-carousel-item>
        </el-carousel>
      </template>
    </div>
    <el-main>
      <!--      响应式布局-->
      <el-row :gutter="10">
        <el-col :xs="12" :sm="12" :md="16" :lg="16" :xl="16">
          <!--      主要内容区-->
          <div class="main-container">
            <!--      通知-->
            <el-card class="notice medium-margin-bottom">
              <div slot="header">
                <span>公告</span>
              </div>
              <div class="notices-list" v-for="(item, index) in noticeList" :key="index">
                <div class="notice-item little-margin-bottom border-bottom-line" style="height: 50px; overflow:hidden;">
                  <div class="pics medium-margin-right">
                    <img :src="item.noticePics" alt="通知图片" style="width: 100%; height: 80%">
                  </div>
                  <div class="title">
                    <router-link :to="`/notice/${item.id}`">
                      {{ item.noticeTitle }}
                    </router-link>
                  </div>
                  <div class="time">{{ item.noticeTime }}</div>
                </div>
              </div>
            </el-card>
            <!--      新闻-->
            <el-card class="news">
              <div slot="header" class="news-header-container">
                <div>新闻</div>
                <div class="flex-right-item" style="color: #00785a" @click="$router.push('/article')">更多...</div>
              </div>
              <div class="news-list" v-for="(item,index) in newsList" :key="index">
                <router-link :to="`/article/${item.id}`" style="color: black;">
                  <div class="news-item medium-margin-bottom border-bottom-line">
                    <div class="title">
                      <div style="color: rgb(0,0,0) !important;">
                        {{ item.articleTitle }}
                      </div>
                    </div>
                    <div class="content">{{ item.articleContent }}</div>
                    <div class="time">{{ item.updateTime }}</div>
                  </div>
                </router-link>
              </div>
            </el-card>
          </div>
        </el-col>
        <el-col :xs="12" :sm="12" :md="8" :lg="8" :xl="8">
          <!--侧边通知区-->
          <div class="aside-container">
            <!--      友情连接-->
            <el-card class="friend-box medium-margin-bottom">
              <div slot="header">
                <span>友情链接</span>
              </div>
              <div class="friend-link-list" v-for="(item, index) in connectList" :key="index">
                <div class="friend-link-item">
                  <div class="icon medium-margin-right">
                    <i :class="item.linkIcon"></i>
                  </div>
                  <div class="desc">
                    <a :href="item.link" class="a-green">
                      <span>{{ item.linkDesc }}</span>
                    </a>
                  </div>
                </div>
              </div>
            </el-card>
            <!--      联系我们-->
            <el-card class="link-box">
              <div slot="header">
                <span>联系我们</span>
              </div>
              <div class="link-list" v-for="(item, key) in linkList" :key="key">
                <div class="link-item border-bottom-line little-margin-bottom">
                  <div class="link-icon little-margin-right">
                    <i :class="item.icon"></i>
                  </div>
                  <div class="link-desc little-margin-right">
                    <span>{{ item.desc }}</span>
                  </div>
                  <div class="link-a little-margin-right">
                    <a :href="item.link" target="_blank" class="a-green">{{ item.linkDesc }}</a>
                  </div>
                </div>
              </div>
            </el-card>
          </div>
        </el-col>
      </el-row>

    </el-main>
  </div>
</template>

<script>
import {connectListMock, linkListMock, newsListMock, noticeListMock} from "@/utils/Constants";
import {listAllArticles} from "@/api/api";
import {formatDate} from "@/utils/date";

export default {
  name: "index",
  data() {
    return {
      listPics: [],
      // 联系
      email: '',
      weibo: '',
      phone: '',
      weixin: '',
      connectList: [],
      // 快捷入口
      linkList: [],
      // 新闻列表
      newsList: [],
      // 公告列表
      noticeList: []
    }
  },
  methods: {
    getAllArticles() {
      listAllArticles().then(res => {
        console.log("article res ==>", res)
        if (res.data.code === 2000) {
          this.newsList = res.data.data
          this.newsList = this.newsList.slice(0, 5)
          this.newsList.forEach(news => {
            let tmpDate = new Date(news.updateTime)
            news.updateTime = formatDate(tmpDate, 'yyyy-MM-dd')
            console.log('news ==>', news)
          })
        }
      })
    }
  },
  mounted() {
    this.linkList = connectListMock
    this.connectList = linkListMock
    this.noticeList = noticeListMock
    this.listPics = newsListMock
    this.getAllArticles()
  },
  watch: {}
}
</script>

<style scoped>
.news-header-container {
  display: flex;
}

.flex-right-item {
  margin-left: auto;
}

.notice-item {
  display: flex;

}

.notice-item .pics {
  flex: 1;
}

.notice-item .title {
  flex: 10;
}

.notice-item .time {
  flex: 1;
  margin-left: auto;
}

.border-bottom-line {
  border-bottom: 1px solid rgb(192, 192, 192);
}

.little-margin-bottom {
  margin-bottom: 10px;
}

.medium-margin-bottom {
  margin-bottom: 20px;
}

.little-margin-right {
  margin-right: 10px;
}

.medium-margin-right {
  margin-right: 20px;

}

.link-item {
  display: flex;
  flex-direction: row;
}

.news-item {
  display: flex;
  flex-direction: row;
}

.news-item .title {
  flex: 1;
  font-weight: 800;
  color: white !important;
}

.news-item .content {
  flex: 10;
  overflow: hidden;

  text-overflow: ellipsis;

  display: -webkit-box;

  -webkit-box-orient: vertical;

  -webkit-line-clamp: 1;
}

.news-item .time {
  margin-left: auto;
  flex: 1;
  font-size: 14px;
}

.friend-link-item {
  display: flex;
  flex-direction: row;
}

.a-green {
  color: #00785a;
}
</style>
