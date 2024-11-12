import { createRouter, createWebHistory } from 'vue-router';
import DashboardView from '../views/DashboardView.vue';
import HistoryView from '../views/HistoryView.vue';
import AlertView from '../views/AlertView.vue';

const routes = [
  {
    path: '/',
    name: 'Dashboard',
    component: DashboardView,
  },
  {
    path: '/history',
    name: 'History',
    component: HistoryView,
  },
  {
    path: '/alerts',
    name: 'Alerts',
    component: AlertView,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
