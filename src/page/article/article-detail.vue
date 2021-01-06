<template>
  <div class="article-detail-container">
    <div class="article-header">
      <div class="articlee-title" style="text-align: center; margin-top: 15px;">
        <h1>{{ article.articleTitle }}</h1>
        <div class="article-time" style="text-align: right; margin-right: 150px;margin-bottom: 20px;">
          {{ article.updateTime | formateDate }}
        </div>
      </div>

    </div>
    <!--    <div class="article-content">-->
    <!--      <p v-html="article.articleContent"></p>-->
    <!--      {{ article.articleContent }}-->
    <!--    </div>-->

    <mavon-editor
        v-model="article.articleContent"
        :subfield="false"
        :boxShadow="false"
        defaultOpen="preview"
        :toolbarsFlag="false"
    />
  </div>
</template>

<script>
import {getArticle} from "@/api/api";

export default {
  name: "article-detail",
  data() {
    return {
      article: {}
    }
  },

  mounted() {
    console.log('id 值==>', this.$route.params.id)
    let id = this.$route.params.id
    getArticle(id)
        .then(res => {
          console.log('res ==>', res)
          if (res.data.code === 2000) {
            console.log('res.data.data ==>', res.data.data)
            this.article = res.data.data
          } else {
            this.$message.error('文章不存在')
          }
        })
  }
}
</script>

<style scoped>

</style>
