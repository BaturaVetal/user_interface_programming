import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/components/Home.vue'
import About from '@/components/About.vue'
import AddPost from '@/components/AddPost.vue'
import Login from '@/components/Login.vue'
import Profile from '@/components/Profile.vue'
import Register from '@/components/Register.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About },
  { path: '/add-post', component: AddPost },
  { path: '/login', component: Login },
  { path: '/profile', component: Profile },
  { path: '/register', component: Register }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
