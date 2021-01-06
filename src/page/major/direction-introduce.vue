<template>
  <div class="content">
    <div class="subpage">
      <aside>
        <div class="sidebar">
          <div class="nav-title">
            <h2>方向介绍</h2>
          </div>
          <div class="nav-content">
          </div>
        </div>
      </aside>
      <article>
        <h2>web前端</h2>
        <h3>培养方案</h3>
        <p>
          主要涉及页面的美化, 布局, 微信小程序相关技术, 需要掌握基本的html, css等技术
          软件工程专业以IT业需求为导向，培养具有良好综合素质和职业道德，掌握扎实的基础理论和专业知识，
          具有软件分析、设计、开发、测试与管理能力，具备较强工程实践能力、技术创新能力和团队精神，
          能快速适应软件工程新技术发展并具有国际视野和国际竞争力的高级软件工程师。
          专业实施灵活的“211”人才培养模式（其中,2年基础教育,1年面向企业的专业教育,1年企业顶岗实习），
          在教学上着力推动基于问题、基于项目和基于案例的学习，对于实践性强的课程，
          采取校企联合“双师制”培养，同时以大学生创新实践活动、科技大赛为补充，突出工程化培养。
        </p>
        <h2>web后端</h2>
        <h3>培养方案</h3>
        <p>
          软件工程专业以IT业需求为导向，培养具有良好综合素质和职业道德，掌握扎实的基础理论和专业知识，
          具有软件分析、设计、开发、测试与管理能力，具备较强工程实践能力、技术创新能力和团队精神，
          能快速适应软件工程新技术发展并具有国际视野和国际竞争力的高级软件工程师。
          专业实施灵活的“211”人才培养模式（其中,2年基础教育,1年面向企业的专业教育,1年企业顶岗实习），
          在教学上着力推动基于问题、基于项目和基于案例的学习，对于实践性强的课程，
          采取校企联合“双师制”培养，同时以大学生创新实践活动、科技大赛为补充，突出工程化培养。
        </p>
        <h2>安卓开发</h2>
        <h3>培养方案</h3>
        <p>
          软件工程专业以IT业需求为导向，培养具有良好综合素质和职业道德，掌握扎实的基础理论和专业知识，
          具有软件分析、设计、开发、测试与管理能力，具备较强工程实践能力、技术创新能力和团队精神，
          能快速适应软件工程新技术发展并具有国际视野和国际竞争力的高级软件工程师。
          专业实施灵活的“211”人才培养模式（其中,2年基础教育,1年面向企业的专业教育,1年企业顶岗实习），
          在教学上着力推动基于问题、基于项目和基于案例的学习，对于实践性强的课程，
          采取校企联合“双师制”培养，同时以大学生创新实践活动、科技大赛为补充，突出工程化培养。
        </p>
      </article>
    </div>
  </div>
</template>

<script>
export default {
  name: "direction-introduce"
}
</script>

<style scoped>
/*subpage布局*/
aside {
  grid-area: aside;
}

article {
  grid-area: article;
}

.subpage {
  margin: 10px 80px;
  display: grid;
  grid-template-columns: 1.3fr 4fr;
  grid-gap: 80px;
  grid-template-areas:"aside article";
}

/*布局完毕*/

/*侧边栏样式*/
aside {
  text-align: center;
}

aside .sidebar {
  border: 1.5px solid #009e78;
}

aside .nav-title {
  font-size: 20px;
  color: white;
  background-color: #009e78;
  padding: 40px 60px;
  transition-duration: 200ms;
}

aside .nav-title:hover {
  opacity: 80%;
}

.nav-content ul li {
  list-style-type: none;
}

.nav-content ul li a {
  display: block;
  text-decoration: none;
  color: black;
  padding: 15px;
  font-size: 20px;
  border-bottom: 1.5px solid #dddddd;
}

.nav-content ul li a:hover {
  font-weight: bolder;
  color: #009e78;
}

/*侧边栏样式完毕*/

/*文章样式*/
article {
  /*margin: 50px 80px 100px 0;*/
}

article h2 {
  width: 100%;
  text-align: center;
  color: #009e78;
  font-size: 1.8em;
  font-weight: bold;
  margin-top: 20px;
  padding: 15px 0;
}

article h3 {
  margin-top: 20px;
  padding: 0;
  outline: none;
  -webkit-font-smoothing: antialiased;
  font-size: 22px;
  font-family: 微软雅黑, Microsoft YaHei, serif;
  color: rgb(0, 112, 192);
}

article p {
  text-align: justify;
  margin-top: 15px;
  margin-bottom: 15px;
  padding: 0;
  outline: none;
  -webkit-font-smoothing: antialiased;
  color: rgb(102, 102, 102);
  font-family: "Microsoft YaHei", 微软雅黑, serif;
  font-size: 20px;
  white-space: normal;
  background-color: rgb(255, 255, 255);
  line-height: 2em;
}

/*文章样式结束*/

/*全局list不加样式*/
li {
  list-style: none;
}


/*.subpage {*/
/*  padding-bottom: 200px;*/
/*}*/
</style>
