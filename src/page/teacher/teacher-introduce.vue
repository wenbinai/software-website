<template>
  <div class="teacher-container">
    <div class="teacher-intro">
      <div class="teacher-name" style="text-align: center;
        margin:100px 0  50px 0; border-bottom: 1px solid #99a9bf">
        <h1>{{ item.name }}</h1>
      </div>
      <div class="teacher-image" style="width: 80%; margin: auto;text-align: center; margin-bottom: 50px">
        <img :src="item.pic" alt="教师照片" style="width: 30%; height: 100%">
      </div>
      <div class="teacher-intro" style="text-align: center">
        <p>{{ item.desc1 }}</p>
        <p>{{ item.desc2 }}</p>
        <p>{{ item.desc3 }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import {lectureListMock} from "@/utils/Constants";

export default {
  name: "teacher-introduce",
  data() {
    return {
      item: ''
    }
  },
  mounted() {
    console.log('id 值==>', this.$route.params.id)
    let id = this.$route.params.id
    let items = lectureListMock.filter(item => {
      console.log('item==>', item)
      return item.id == id
    })
    this.item = items[0]
    console.log('this.item==>', this.item)
  }
}
</script>

<style scoped>
.teacher-container {
  width: 80%;
  margin: auto;
}


</style>
