export default {
    /**
     * 로그인 이후 state에  데이터 저장
     * @param {*} state
     * @param {*} data
     */
    setLoginInfo(state, data) {
        state.email = data.email;
        state.token = data.tokenDto.accessToken;
        state.refreshToken = data.tokenDto.refreshToken;
        state.nickname = data.nickname;
        console.log(this._vm.$cookie);
        this._vm.$cookie.set(process.env.VUE_APP_AUTH_TOKEN, state.token);
        this._vm.$cookie.set(process.env.VUE_APP_USER_ID, state.email);
        this._vm.$cookie.set(process.env.VUE_APP_AUTH_REFRESH_TOKEN, state.refreshToken);
    },
    /**
     * 로그 아웃 이후 state에 내용 빈값으로 초기화
     * @param {*} state
     */
    clearLoginInfo(state) {
        this._vm.$cookie.delete(process.env.VUE_APP_AUTH_TOKEN);
        this._vm.$cookie.delete(process.env.VUE_APP_USER_ID);
        this._vm.$cookie.delete(process.env.VUE_APP_AUTH_REFRESH_TOKEN);
        state.userId = '';
        state.token = '';
        state.refreshToken = '';
        state.userName = '';
    },
    setToken(state, token) {
        state.token = token;
    },
    setRefreshToken(state, refreshToken) {
        state.refreshToken = refreshToken;
    },
};
