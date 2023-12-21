import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    meta: {
      title: "Home"
    }
  },
  {
    path: '/breeds',
    name: 'breeds',
    component: () => import('@/views/BreedView.vue'),
    meta: {
      title: "Breeds"
    }
  },
  {
    path: '/contact',
    name: 'contact',
    component: () => import('@/views/ContactView.vue'),
    meta: {
      title: "Contact Us"
    } 
  },
  {
    path: '/404',
    name: 'name',
    component: () => import('@/views/404View.vue'),
    meta: {
      title: "Page Not Found"
    }
  },
  {
    path: "/:pathMatch(.*)*",
    redirect: "/404",
  },
  // {
  //   path: '/about',
  //   name: 'about',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  // }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to) => {
  document.title = `${to.meta.title} - Pet Shop`
})

export default router
