import { createMemoryHistory, createRouter } from 'vue-router'
import LoginPage from './pages/Auth/LoginPage.vue'
import RegisterPage from './pages/Auth/RegisterPage.vue'

const routes = [
    { path: '/login', component: LoginPage },
    { path: '/register', component: RegisterPage }
]

export const router = createRouter({
    history: createMemoryHistory,
    routes
});