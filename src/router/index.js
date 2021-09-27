import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        redirect: '/account/signUp',
    },
    {
        path: '/account/signUp',
        name: '로그인 페이지',
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

export default router;
