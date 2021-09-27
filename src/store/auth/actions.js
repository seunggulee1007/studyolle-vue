import { loginUser } from '@/api/auth';
export default {
    async LOGIN({ commit }, params) {
        let res = await loginUser(params);
        if (!res.code) {
            commit('setLoginInfo', res);
        }

        return res;
    },
};
