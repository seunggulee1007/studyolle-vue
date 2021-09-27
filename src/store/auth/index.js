import { getCookie } from '@/utils/cookies';
import actions from './actions';
import mutations from './mutations';
import getters from './getters';

let Auth = {
    state: () => ({
        userId: getCookie(process.env.VUE_APP_USER_ID) || '',
        token: getCookie(process.env.VUE_APP_AUTH_TOKEN) || '',
        refreshToken: getCookie(process.env.VUE_APP_AUTH_REFRESH_TOKEN) || '',
        userName: '',
    }),
    getters,
    mutations,
    actions,
};

export default Auth;
