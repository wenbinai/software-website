<template>
  <div>
    <div class="title" style="text-align: center; margin-bottom: 20px">
      <h1>讲师列表</h1>
    </div>
    <div class="lecture-list-container">
      <div class="lecture-item" v-for="(item, index) in lectures" :key="index"
           style="margin-right: 45px; margin-bottom: 80px">
        <div class="lecture-pics" style="margin-bottom: 10px">
          <img :src="item.pic" alt="教师图片" style="width: 100%; height: auto">
        </div>
        <div class="name" style="text-align: center; margin-bottom: 10px">
          {{ item.name }}
        </div>
        <div class="more" style="text-align: center;">
          <el-button type="primary" @click="$router.push(`/teacher/${item.id}`)">了解更多</el-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {lectureListMock} from "@/utils/Constants";

export default {
  data() {
    return {
      lectures: []
    }
  },
  mounted() {
    this.lectures = lectureListMock
  }
}
</script>

<style scoped>
.lecture-list-container {
  width: 80%;
  margin: auto;
  display: flex;
  flex-wrap: wrap;

}

.lecture-item {
  width: 200px;
  height: 350px;
}
</style>
