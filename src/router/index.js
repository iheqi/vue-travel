import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/Home'
/* @表示src文件夹 */
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    }
  ]
})
