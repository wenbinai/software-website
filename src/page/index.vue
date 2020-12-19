<template>
  <div>
    <el-main>
      <!--      响应式布局-->
      <el-row :gutter="10">
        <el-col :xs="12" :sm="12" :md="16" :lg="16" :xl="16">
          <!--      主要内容区-->
          <div class="main-container">
            <!--      通知-->
            <el-card class="notice">
              <div slot="header">
                <span>公告</span>
              </div>
              <div class="notices-list">
                <div class="title">标题</div>
                <div class="tag">摘要</div>
                <div class="time">日期</div>
              </div>
            </el-card>
            <!--      新闻-->
            <el-card class="news">
              <div slot="header">
                <span>新闻</span>
              </div>
              <div class="news-list">
                <div class="title">标题</div>
                <div class="tag">摘要</div>
                <div class="time">日期</div>
              </div>
            </el-card>
          </div>
        </el-col>
        <el-col :xs="12" :sm="12" :md="8" :lg="8" :xl="8">
          <!--侧边通知区-->
          <div class="aside-container">
            <!--      友情连接-->
            <el-card class="friend-link">
              <div slot="header">
                <span>友情链接</span>
              </div>
              <div class="friend-link-list">
                <div class="icon">图标</div>
                <div class="desc">描述</div>
              </div>
            </el-card>
            <!--      联系我们-->
            <el-card class="link">
              <div slot="header">
                <span>联系我们</span>
              </div>
              <div class="link-list">
                <div class="weibo">
                  <span>微博</span>
                </div>
                <div class="weixin">
                  <span>微博</span>
                </div>
                <div class="phone">
                  <span>电话</span>
                </div>
                <div class="email">
                  <span>邮箱</span>
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
export default {
  name: "index"
}
</script>

<style scoped>

</style>
