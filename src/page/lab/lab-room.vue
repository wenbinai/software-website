<template>
  <div class="content">
    <div class="subpage">
      <aside>
        <div class="sidebar">
          <div class="nav-title">
            <h2>实验室</h2>
          </div>
          <div class="nav-content">
            <ul>
              <li><a class="lab-923" @click="$router.push('/lab-room')">ACM创新实验室</a></li>
              <li><a class="lab-925" @click="$router.push('/lab-925')">925移动开发实验室</a></li>
            </ul>
          </div>
        </div>
      </aside>
      <article>
        <h2>ACM 创新实验室</h2>
        <h3>实验室简介</h3>
        <p>实验室名称：ACM实验室</p>
        <p>实验室主任：陈宇</p>
        <p>实验室主页：http://acm.nefu.edu.cn</p>
        <p>acm 算法程序设计, 蓝桥杯, 人工智能, 天梯赛...</p>
        <img src="../../assets/pics/img.png" alt="923">
        <h3>主要成果</h3>
        <p>
          2017年11月4日至5日，第42届ACM国际大学生程序设计竞赛亚洲区域赛（青岛）在中国石油大学（华东）体育馆举行。来自中国内地、中国香港
          地区和朝鲜的225所高校（国内所有985院校和211院校全部都参加）和1所中学的365支参赛队1095名参赛者共同争夺2018年世界总决赛出线资格
          ，参赛高校、参赛队伍和参赛人数均创ACM有史以来最高纪录。经过角逐，最终产生金牌36项，银牌72项，铜牌108项，我校代表队在本次亚洲赛
          中共荣获2枚银牌和1枚铜牌，这是我校在该项赛事中荣获的第3枚和第4枚银牌（2013年和2014年各获得一枚银牌），时隔2年后又延续了能在亚洲赛中摘银的佳绩。
        </p>
      </article>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
.sidebar {
  margin-top: 35px;
}

.lab-923 {
  position: relative;
  border-left: 6px solid #00785a;
  left: -6px;
  font-weight: bolder;
  color: #009e78 !important;
}

article img {
  width: 80%;
}

/*subpage布局*/
aside {
  grid-area: aside;
}

article {
  margin-top: 0;
  grid-area: article;
}

.subpage {
  margin: 0 80px;
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
  margin: 50px 80px 100px 0;
}

article h2 {
  width: 100%;
  text-align: center;
  color: #009e78;
  font-size: 1.8em;
  font-weight: bold;
  padding: 15px 0;
}

article h3 {
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

</style>
