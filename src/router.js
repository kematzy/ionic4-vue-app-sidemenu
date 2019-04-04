import Vue from 'vue'
import { IonicVueRouter } from '@ionic/vue'
import Home from '@/views/Home.vue'

Vue.use(IonicVueRouter)

// route level code-splitting
// this generates a separate chunk (about.[hash].js) for this route
// which is lazy-loaded when the route is visited.
function loadView (view) {
  return () => import(/* webpackChunkName: "view-[request]" */ `@/views/${view}.vue`)
}

const router = new IonicVueRouter({
  mode: 'history',
  // base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      alias: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/list',
      name: 'list',
      component: loadView('List')
    }
  ]
})

// comment out to debug routes in the console
// router.beforeEach((to, from, next) =>{
//   console.log('router -> to: ', to.fullPath, ', from: ', from.fullPath)
//   next()
// })

export default router
