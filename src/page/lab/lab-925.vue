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
        <h2>925移动开发实验室</h2>
        <h3>实验室简介</h3>
        <p>实验室名称：925移动开发实验室</p>
        <p>实验室主任：王波</p>
        <p>实验室主页：http://acm.nefu.edu.cn</p>
        <p>安卓, 前端, 微信小程序, flutter, kotin, java ...</p>
        <img src="../../assets/pics/lab-923.jpg" alt="923">
        <h3>主要成果</h3>
       <p>
         移动开发也称为手机开发，或叫做移动互联网开发，移动应用开发等。是指以手机、PDA、UMPC等便携终端为基础，进行相应的开发工作，由于这些随身设
         备基本都采用无线上网的方式，因此，业内也称作为无线开发。移动应用包括早期的WM掌上助理设备，Web os设备、java设备、塞班设备，以及现在现在
         火热的安卓和苹果设备等移动应用的开发。移动应用的形成对移动设备的功能有了长足的拓展。设备可以不单单只靠自带的简陋功能，而是可以像计算机一
         样通过安装应用程序、游戏程序等进行扩展，使移动设备成为更能帮助人们解决事物的个人智能终端。
       </p>
      </article>
    </div>
  </div>
</template>

<script>
export default {
}
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
