import Vue from 'vue'
import App from './App.vue'
import router from '@/router/index'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import mavonEditor from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'
import {formatDate} from "@/utils/date";

Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.use(mavonEditor)

new Vue({
    router,
    render: h => h(App),
}).$mount('#app')

Vue.filter('formateDate', function (val) {
    return formatDate(new Date(val), 'yyyy-MM-dd')
})
