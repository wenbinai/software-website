<template>
  <div>
    <div class="base-container">
      <!--      header-->
      <div class="header">
        <TopHeader></TopHeader>
      </div>
      <!--      main 内容区-->
      <div class="main">
        <router-view></router-view>
      </div>
      <!--      footer-->
<!--      <div class="footer">-->
      <!--          <span>@东北林业大学</span>-->
      <!--      </div>-->
    </div>
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

/*footer*/
/*.footer-container {*/
/*  position: absolute;*/
/*  bottom: 10px;*/
/*  width: 100%;*/
/*  text-align: center;*/
/*}*/
.footer {
  position: absolute;
  bottom: 10px;
  left: 50%;
  transform: translateX(-50%);
}
/*.footer-container {*/
/*  position: absolute;*/
/*  bottom: 10px;*/
/*  width: auto;*/
/*  text-align: center;*/
/*}*/

</style>
