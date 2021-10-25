import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: "/RankingList",
    name: "RankingList",
    component: () => import("../views/RankingList.vue"),
    children: [
      {
        path: ""
      }
    ]
      
  }
]

const router = new VueRouter({
  routes
})

export default router
