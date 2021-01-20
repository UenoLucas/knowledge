import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '@/components/home/Home'
import AdminPages from '@/components/admin/AdminPages'

//registrando vuerouter dentro de vue
Vue.use(VueRouter)

//criar rotas para registrarmos no vuerouter

const routes = [{
    name:'home',
    path:'/',
    component: Home
},
{
    name: 'adminPages',
    path: '/admin',
    component: AdminPages
}]

const router = new VueRouter({
    mode: 'history',
    routes: routes
})

export default router