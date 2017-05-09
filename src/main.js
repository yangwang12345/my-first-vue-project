// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import router from './router'
//  node_modules取
import App from './App'
// var app=require('./App')
// 省略的是.vue

new Vue({
  el: '#app',
  components: { App },
  router,
  render: h => h(App)
})
// ES5  
// (function (h) {  
//   return h(App);  
// });  
  
// ES6  
// h => h(App); 

// 全局自定义指令
// 全局路由配置 导航钩子
// router.beforeEach((to, from, next) => {
//   if (to.matched.some(record => record.meta.requiresAuth)) {
//     // this route requires auth, check if logged in
//     // if not, redirect to login page.
//     if (!auth.loggedIn()) {
//       next({
//         path: '/login',
//         query: { redirect: to.fullPath }
//       })
//     } else {
//       next()
//     }
//   } else {
//     next() // 确保一定要调用 next()
//   }
// })


