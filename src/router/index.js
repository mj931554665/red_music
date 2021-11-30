import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  // 用来写路由规则
  {
    path:'/',
    redirect:'/home',
  },
  {
    path:'/home',component:()=>import('../views/Home.vue'),
    children:[
      {
        path:'',
        redirect:'recommend',
      },
      {
        path:'recommend', component: () => import('../views/Recommend.vue'),
        name:'Recommend'
      },
      {
        path:'rankingList', component: () => import('../views/RankingList.vue'),
        name:'RankingList'
      },
      {
        path:'songSheet', component: () => import('../views/SongSheet.vue'),
        name:'SongSheet'
      },
      {
        path:'singer', component: () => import('../views/Singer.vue'),
        name:'Singer'
      },
    ]
  },
  {
    path:'/myMusic',
    component:()=>import('../views/MyMusic.vue'),
  },
  {
    path:'/friend',
    component:()=>import('../views/Friend.vue'),
  },
  {
    path:'/song',
    component:()=>import('../views/Song.vue'),
  },
  {
    path:'/search',
    component:()=>import('../views/Search.vue'),
  }
]

const router = new VueRouter({
  routes
})
// router.beforeEach((to, from, next) => {
//   if(to.fullPath == '/myMusic'){
//     //未登录的情况
//     next()
//   }else{
//     next()
//   }
// })

export default router
