import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../pages/Home/Home'
import Search from '../pages/Search/Search'
import Order from '../pages/Order/Order'
import Profile from '../pages/Profile/Profile'
import Login from '../pages/Login/Login'

Vue.use(VueRouter)

export default new VueRouter({
    mode: 'history',
    routes: [
        {
            path:'/',
            redirect:'/home'
        },
        {
            path:'/order',
            component: Order,
            meta: {   //加一个判定值
                isShowFooter: true
            }
        },
        {
            path:'/search',
            component:Search,
            meta: {   //加一个判定值
                isShowFooter: true
            }
        },
        {
            path:'/profile',
            component: Profile,
            meta: {   //加一个判定值
                isShowFooter: true
            }
        },
        {
            path:'/home',
            component: Home,
            meta: {   //加一个判定值
                isShowFooter:true
            }
        },
        {
            path:'/login',
            component:Login,
        }
    ]
})