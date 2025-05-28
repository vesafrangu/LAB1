import { createRouter, createWebHistory } from 'vue-router';
import LoginView from '@/views/LoginView.vue';
import RegisterView from '@/views/RegisterView.vue';
import DashboardView from '@/views/DashboardView.vue';
import ContactForm from '@/views/ContactForm.vue'; 
import AboutUs from '@/views/AboutUs.vue'
import OurServices from '@/views/OurServices.vue';  

const routes = [
  { path: '/', redirect: '/login' },
  { path: '/login', component: LoginView },
  { path: '/register', component: RegisterView },
  {
    path: '/dashboard',
    component: DashboardView,
    meta: { requiresAuth: true },
  },
  {
    path: '/contact',
    component: ContactForm 
  },
  {
    path: '/albania',
    name: 'AlbaniaDetails',
    component: () => import('@/views/AlbaniaDetails.vue')
  },
  {
    path: '/about',
    name: 'AboutUs',
    component: AboutUs
  },
  {
    path: '/services',
    name: 'OurServices', 
    component: OurServices  
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  const isAuthenticated = localStorage.getItem('authToken');
  if (to.meta.requiresAuth && !isAuthenticated) {
    next('/login');
  } else {
    next();
  }
});

export default router;
