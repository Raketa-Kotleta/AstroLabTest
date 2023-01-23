import Vue from 'vue'
import VueRouter from 'vue-router'
import EnterScreen from "@/views/EnterScreen"
import SigninPage from '@/views/SigninPage'
import SignupPage from '@/views/SignupPage'
import MainPage from '@/views/MainPage'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: EnterScreen,
  },
  {
    path: '/signin',
    name: 'signin',
    component: SigninPage,
  },
  {
    path: '/signup',
    name: 'signup',
    component: SignupPage,
  },
  {
    path: '/home',
    name: 'enter',
    component: MainPage,
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
