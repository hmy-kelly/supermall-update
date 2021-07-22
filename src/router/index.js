import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);

const Home = () => import('../views/home/home');
const Category = () => import('../views/category/category');
const Cart = () => import('../views/cart/cart');
const Profile = () => import('../views/profile/profile');
const Detail = () => import('../views/detail/Detail');

const routes = [
    {
        path: '',
        redirect: '/home',
    },
    {
        path: '/home',
        component: Home,
    },
    {
        path: '/category',
        component: Category,
    },
    {
        path: '/cart',
        component: Cart,
    },
    {
        path: '/profile',
        component: Profile,
    },
    {
        path: '/detail/:id',
        component: Detail,
    }
];

const router = new Router({
    routes,
    mode: 'history',
})

export default router