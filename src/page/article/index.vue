<template>
  <div class="article-list-box">
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
    <!--    新闻列表-->
    <el-timeline>
      <el-timeline-item v-for="(item, index) in newsList" :key="index" :timestamp="item.updateTime" placement="top">
        <router-link :to="`article/${item.id}`">
          <el-card style="height: 100px">
            <h4 style="margin-bottom: 18px">{{ item.articleTitle }}</h4>
            <p>{{ item.articleContent }}</p>
          </el-card>
        </router-link>
      </el-timeline-item>
      <el-timeline-item timestamp="2018/4/3" placement="top">
        <el-card>
          <h4>更新 Github 模板</h4>
          <p>王小虎 提交于 2018/4/3 20:46</p>
        </el-card>
      </el-timeline-item>
      <el-timeline-item timestamp="2018/4/2" placement="top">
        <el-card>
          <h4>更新 Github 模板</h4>
          <p>王小虎 提交于 2018/4/2 20:46</p>
        </el-card>
      </el-timeline-item>
    </el-timeline>
  </div>
</template>

<script>
import {newsListMock} from "@/utils/Constants";
import {listAllArticles} from "@/api/api";
import {formatDate} from "@/utils/date";

export default {
  name: "index",
  data() {
    return {
      listPics: [],
      newsList: []
    }
  },
  methods: {
    getAllArticles() {
      listAllArticles().then(res => {
        console.log("article res ==>", res)
        if (res.data.code === 2000) {
          this.newsList = res.data.data
          // this.newsList = this.newsList.slice(0, 5)
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
    this.listPics = newsListMock
    this.getAllArticles()
  }
}
</script>

<style scoped>
.el-carousel__item h3 {
  color: #475669;
  font-size: 18px;
  opacity: 0.75;
  line-height: 300px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n+1) {
  background-color: #d3dce6;
}
</style>
