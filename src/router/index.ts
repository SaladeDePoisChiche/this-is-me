import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import isMobile from '../utils/detect-mobile'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      beforeEnter: (to, from, next) => {
        mobileRedirection(next);
      }
    },
    {
      path: '/resume',
      name: 'resume',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/ResumeView.vue')
    },
    {
      path: '/personal',
      name: 'personal',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/PersonalView.vue')
    },
    {
      path: '/m', 
      name: 'mobile-home',
      component:() => import('../views/HomeViewMobile.vue'),
    }
  ]
})

export default router;

function mobileRedirection(next): void {
  if (isMobile())
    next('/m')
  else
    next();
}