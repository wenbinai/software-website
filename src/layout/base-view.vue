<template>
  <div>
    <el-container>
      <!--      header-->
      <el-header>
        <TopHeader></TopHeader>
      </el-header>
      <!--      main 内容区-->
      <el-main>
        <router-view></router-view>
      </el-main>
      <!--      footer-->
      <el-footer>
        <div class="footer-container">
          <span>@东北林业大学</span>
        </div>
      </el-footer>
    </el-container>
  </div>
</template>

<script>
import TopHeader from "@/layout/top-header";

export default {
  name: "base-view",
  components: {TopHeader},
}
</script>

<style scoped>
/*el-header*/
.el-header {
  padding: 0 !important;
  box-sizing: border-box;
  flex-shrink: 0;
}

/*footer*/
.footer-container {
  position: absolute;
  bottom: 10px;
  width: 100%;
  text-align: center;
}

</style>
