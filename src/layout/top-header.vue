<template>
  <div class="header-container">
    <div class="nav">
      <div class="icon" style="height: 100px">
        <img src="../assets/logo/nefu-icon.png" alt="logo">
      </div>
      <el-menu
          style="height: 100px"
          :default-active="activeIndex2"
          class="el-menu-demo"
          mode="horizontal"
          @select="handleSelect"
          background-color="#00785a"
          text-color="#fff"
          active-text-color="#ffd04b">
        <el-menu-item index="1" @click="$router.push('/')">首页</el-menu-item>
        <el-submenu index="2">
          <template slot="title" style="font-size: 20px ! important;">专业</template>
          <el-menu-item index="2-1" style="font-size: 14px" @click="$router.push('/major-intro')">专业介绍</el-menu-item>
          <el-menu-item index="2-3" class="medium-foot-size" @click="$router.push('/dire-intro')">方向简介</el-menu-item>
        </el-submenu>
        <el-submenu index="4">
          <template slot="title">教师</template>
          <el-menu-item index="4-1" @click="$router.push('/teacher-professor')" class="medium-foot-size">教授
          </el-menu-item>
          <el-menu-item index="4-2" class="medium-foot-size" @click="$router.push('/teacher-associate-professor')">副教授
          </el-menu-item>
          <el-menu-item index="4-3" class="medium-foot-size" @click="$router.push('/teacher-lecture')">讲师</el-menu-item>
        </el-submenu>
        <el-submenu index="5">
          <template slot="title">实验</template>
          <el-menu-item index="5-1" class="medium-foot-size" @click="$router.push('/lab-tech')">实验教学</el-menu-item>
          <el-menu-item index="5-2" class="medium-foot-size" @click="$router.push('/lab-room')">实验教室</el-menu-item>
        </el-submenu>
        <el-menu-item index="6" @click="$router.push('/article')">新闻</el-menu-item>
        <el-menu-item index="3"><a href="http://122.9.36.233:8080/#/login" target="_blank">后台管理系统入口</a></el-menu-item>
      </el-menu>
    </div>

  </div>
</template>

<script>
import {newsListMock} from "@/utils/Constants";

export default {
  name: "top-header",
  data() {
    return {
      activeIndex: '1',
      activeIndex2: '1'
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    }
  },
  mounted() {
    this.listPics = newsListMock
  }
}
</script>

<style scoped>
.el-menu-demo li {
  font-size: 20px;
}

.medium-foot-size {
  font-size: 14px !important;
}

.el-menu-item {
  font-size: 18px;
}

.nav {
  background-color: #00785a;
  display: flex;
  justify-content: center;
}

.icon {
  margin-right: auto;
  display: flex;
  justify-content: center;
  align-items: center;
}

.el-menu-demo {
  background-color: #00785a !important;
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
}


</style>
