import { createRouter, createWebHistory } from 'vue-router';
import LoginView from '@/views/LoginView.vue';
import RegisterView from '@/views/RegisterView.vue';
import DashboardView from '@/views/DashboardView.vue';

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
    path: '/albania',
    name: 'AlbaniaDetails',
    component: () => import('@/views/AlbaniaDetails.vue')
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

// Mbrojtja e rrugëve që kërkojnë autentikim
router.beforeEach((to, from, next) => {
  const isAuthenticated = localStorage.getItem('authToken');
  if (to.meta.requiresAuth && !isAuthenticated) {
    next('/login');
  } else {
    next();
  }
});

export default router;
