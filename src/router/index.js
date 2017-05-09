import Vue from 'vue'
import Router from 'vue-router'
import About from '@/components/About.vue'
import Index from '@/components/Index.vue'
import User from '@/components/User.vue'

Vue.use(Router)
const UserProfile = {
  template: '<div>UserProfile</div>'
}
const UserPosts = {
  template: '<div>UserPosts</div>'
}
const UserHome = {
    template: '<div></div>'
  }
  // const Foo = {
  //   template: '<div>foo</div>'
  // }
  // const Bar = {
  // template: '<div>Bar</div>',
  // beforeRouteEnter (to, from, next) {
  // 在渲染该组件的对应路由被 confirm 前调用
  // 不！能！获取组件实例 `this`
  // 因为当钩子执行前，组件实例还没被创建
  // },
  // beforeRouteUpdate (to, from, next) {
  // 在当前路由改变，但是该组件被复用时调用
  // 举例来说，对于一个带有动态参数的路径 /foo/:id，在 /foo/1 和 /foo/2 之间跳转的时候，
  // 由于会渲染同样的 Foo 组件，因此组件实例会被复用。而这个钩子就会在这个情况下被调用。
  // 可以访问组件实例 `this`
  // },
  // beforeRouteLeave (to, from, next) {
  // 导航离开该组件的对应路由时调用
  // 可以访问组件实例 `this`
  // }
  // beforeRouteEnter (to, from, next) {
  //   next(vm => {
  // 通过 `vm` 访问组件实例
  //   })
  // }
  // }
  // const Baz = {
  //   template: '<div>Baz</div>'
  // }
export default new Router({
  routes: [{
      path: '/about',
      name: 'about',
      component: About,
      meta: {
        requiresAuth: true
      }
    }, {
      path: '/index',
      name: 'index',
      component: Index
    }, {
      path: '/user/:id',
      component: User,
      children: [{
          // 当 /user/:id/profile 匹配成功，
          // UserProfile 会被渲染在 User 的 <router-view> 中
          path: 'profile',
          component: UserProfile
        }, {
          // 当 /user/:id/posts 匹配成功
          // UserPosts 会被渲染在 User 的 <router-view> 中
          path: 'posts',
          component: UserPosts
        }, {
          path: '',
          component: UserHome,
          beforeEnter: (to, from, next) => {
            // ...
          }
        }
        // {
        //   path: '/',
        //   components: {
        //     default: Foo,
        //     a: Bar,
        //     b: Baz
        //   },
        //   { path: '*', component: NotFoundComponent }404
      ]
  }]
})