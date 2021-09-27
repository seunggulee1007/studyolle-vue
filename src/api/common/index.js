import store from '@/store';
import router from '@/router';
let isTokenRefreshing = false;
let refreshSubscribers = [];
const onTokenRefreshed = accessToken => {
    refreshSubscribers.map(callback => callback(accessToken));
    refreshSubscribers = [];
};
const addRefreshSubscriber = callback => {
    refreshSubscribers.push(callback);
};
function setInterceptors(instance) {
    // Add a request interceptor
    instance.interceptors.request.use(
        function (config) {
            // Do something before request is sent
            // test comment
            config.headers['X-AUTH-TOKEN'] = store.getters.getToken;
            return config;
        },
        function (error) {
            // Do something with request error
            return Promise.reject(error);
        },
    );
    // Add a response interceptor
    instance.interceptors.response.use(
        function (response) {
            // Any status code that lie within the range of 2xx cause this function to trigger
            // Do something with response data
            return response.data;
        },
        async function (error) {
            // Any status codes that falls outside the range of 2xx cause this function to trigger
            // Do something with response error
            console.log(error);
            console.log(error.response);
            const {
                config,
                response: { status },
            } = error;
            if (status === 401) {
                const originalRequest = config;
                if (error.response.data.code == 401) {
                    store.commit('clearLoginInfo');
                    store.commit('clearMenuList');
                    store._vm.$cookie.delete(process.env.VUE_APP_AUTH_TOKEN);
                    store._vm.$cookie.delete(process.env.VUE_APP_USER_ID);
                    store._vm.$cookie.delete(process.env.VUE_APP_AUTH_REFRESH_TOKEN);
                    router.push('/login');
                }
                // token이 재발급 되는 동안의 요청은 refreshSubscribers에 저장
                const retryOriginalRequest = new Promise(resolve => {
                    addRefreshSubscriber(accessToken => {
                        originalRequest.headers['X-AUTH-TOKEN'] = accessToken;
                        resolve(instance(originalRequest));
                    });
                });
                if (!isTokenRefreshing) {
                    isTokenRefreshing = true;
                    const refreshToken = store.getters.getRefreshToken;
                    await instance.get(`${process.env.VUE_APP_API_URL}/api/sign/refreshToken/${refreshToken}`).then(({ data }) => {
                        const { accessToken: newAccessToken, refreshToken: newRefreshToken } = data;
                        store.commit('setToken', newAccessToken);
                        store.commit('setRefreshToken', newRefreshToken);
                        store._vm.$cookie.set(process.env.VUE_APP_AUTH_TOKEN, newAccessToken);
                        store._vm.$cookie.set(process.env.VUE_APP_AUTH_REFRESH_TOKEN, newRefreshToken);
                        isTokenRefreshing = false;
                        instance.defaults.headers['X-AUTH-TOKEN'] = newAccessToken;
                        onTokenRefreshed(newAccessToken);
                    });
                }
                return retryOriginalRequest;
            }
            return Promise.reject(error);
        },
    );
    return instance;
}
export { setInterceptors };
