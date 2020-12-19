<template>
  <div class="nav">
    <el-menu
        :default-active="activeIndex2"
        class="el-menu-demo"
        mode="horizontal"
        @select="handleSelect"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b">
      <el-menu-item index="1">首页</el-menu-item>
      <el-submenu index="2">
        <template slot="title">专业</template>
        <el-menu-item index="2-1">专业介绍</el-menu-item>
        <el-menu-item index="2-2">专业简介</el-menu-item>
        <el-menu-item index="2-3">方向简介</el-menu-item>
      </el-submenu>
      <el-submenu index="4">
        <template slot="title">教师</template>
        <el-menu-item index="4-1">教授</el-menu-item>
        <el-menu-item index="4-2">副教授</el-menu-item>
        <el-menu-item index="4-3">讲师</el-menu-item>
      </el-submenu>
      <el-submenu index="5">
        <template slot="title">实验</template>
        <el-menu-item index="5-1">实验教学</el-menu-item>
        <el-menu-item index="5-2">实验教室</el-menu-item>
      </el-submenu>
      <el-menu-item index="6">新闻</el-menu-item>
      <el-menu-item index="3"><a href="https://www.ele.me" target="_blank">后台管理系统入口</a></el-menu-item>
    </el-menu>
  </div>
</template>

<script>
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
  }
}
</script>

<style scoped>

</style>
