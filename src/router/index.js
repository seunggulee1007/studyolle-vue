import Vue from 'vue';
import VueRouter from 'vue-router';
import store from '@/store';
Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        redirect: '/account/signUp',
    },
    {
        path: '/account/signUp',
        name: '로그인 페이지',
        meta: { auth: true },
        component: () => import('@/views/SignUp.vue'),
    },
    {
        path: '/account/profile',
        name: '프로필',
        component: () => import('@/views/account/Profile.vue'),
    },
    {
        path: '/settings/profile',
        name: '프로필 수정',
        component: () => import('@/views/settings/Profile.vue'),
    },
];

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes,
});

router.beforeEach((to, from, next) => {
    if (!to.meta.auth && !store.getters.isLogin) {
        next('/account/signUp');
    }
    next();
});

export default router;
