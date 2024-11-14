import { createRouter, createWebHistory } from 'vue-router';
// Import the Home component
import HistoryView from '../views/HistoryView.vue';
import AlertView from '../views/AlertView.vue';
import HomePage from '../components/HomePage.vue';

const routes = [
  {
    path: '/',
    name: 'HomePage',
    component: HomePage,   // Set the Home component for the root path
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
