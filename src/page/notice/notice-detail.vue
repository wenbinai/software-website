<template>
  <div class="notice-container">
    <div class="notice-title" style="margin-bottom: 10px; text-align: center">
      <h1>{{ notice.noticeTitle }}</h1>
      <div class="notice-time">{{ notice.noticeTime }}</div>
    </div>
    <div class="notice-images" style="margin-bottom: 10px; width: 100%; text-align: center">
      <img :src="notice.noticePics" alt="通知图片" style="width: 80%; height: auto">
    </div>
    <div class="notice-content" style="text-indent: 2em; line-height: 2em;margin-bottom: 100px;">
      {{ notice.noticeContent }}
    </div>
  </div>
</template>

<script>
import {noticeListMock} from "@/utils/Constants";

export default {
  name: "notice-detail",
  data() {
    return {
      notice: ''
    }
  },
  mounted() {
    let id = this.$route.params.id
    let notices = noticeListMock.filter(item => {
      return item.id == id
    })
    this.notice = notices[0]
  }
}
</script>

<style scoped>

</style>
