import Vue from 'vue'
import VueRouter from 'vue-router'

const MSite = () =>import('../pages/Msite/Msite')
const Order = () =>import('../pages/Order/Order')
const Profile = () =>import('../pages/Profile/Profile')
const Search = () =>import('../pages/Search/Search')

// import MSite from '../pages/Msite/Msite'
// import Order from '../pages/Order/Order'
// import Profile from '../pages/Profile/Profile'
// import Search from '../pages/Search/Search'

import Login from '../pages/Login/Login'
import Shop from '../pages/Shop/Shop'
import ShopGoods from '../pages/Shop/ShopGoods/ShopGoods'
import ShopInfo from '../pages/Shop/ShopInfo/ShopInfo'
import ShopRatings from '../pages/Shop/ShopRatings/ShopRatings'

Vue.use(VueRouter)

export default new VueRouter({
    routes:[
        {
            path:'/',
            redirect:'/msite'
        },
        {
            path:'/msite',
            component:MSite,    //返回路由组件的函数，只有执行此函数才会加载此路由组件，
                                // 在请求对应的路由路径时才会执行
            meta:{
                showFooter:true
            }
        },
        {
            path:'/order',
            component:Order,
            meta:{
                showFooter:true
            }
        },
        {
            path:'/profile',
            component:Profile,
            meta:{
                showFooter:true
            }
        },
        {
            path:'/search',
            component:Search,
            meta:{
                showFooter:true
            }
        },
        {
            path:'/login',
            component:Login
        },
        {
            path:'/shop',
            component:Shop,
            children:[
                {
                    path:'/shop/goods',
                    component:ShopGoods
                },
                {
                    path:'/shop/info',
                    component:ShopInfo
                },
                {
                    path:'/shop/ratings',
                    component:ShopRatings
                },
                {
                    path:'',
                    redirect:'/shop/goods'
                }
            ]
        },
    ]
})