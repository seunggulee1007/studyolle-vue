export default {
    isLogin(state) {
        return state.token !== '';
    },
    getToken(state) {
        return state.token;
    },
    getRefreshToken(state) {
        return state.refreshToken;
    },
    getUserId(state) {
        return state.userId;
    },
    getNickname(state) {
        return state.userName;
    },
};
