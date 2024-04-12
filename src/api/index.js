import axios from 'axios';
import { setInterceptors } from '@/api/common';

function createInstance() {
    const instance = axios.create({
        baseURL: `${process.env.VUE_APP_API_URL}/api`,
    });
    return setInterceptors(instance);
}

const instance = createInstance();

function doAxiosPost(url, param) {
    return instance.post(url, param).catch(errFunction);
}

function doAxiosPut(url, param) {
    return instance.put(url, param);
}

function doAxiosGet(url, param) {
    return instance.get(url, { data: param });
}

function doAxiosDelete(url, param) {
    return instance.delete(url, { data: param });
}

function doAxios(url, method, params, config) {
    return instance({
        url,
        method,
        params,
        config,
    });
}

function errFunction(error) {
    const {
        response: { data },
        response: { status },
    } = error;
    if (data && data.errors) {
        const res = data.errors;
        res.code = status;
        return data.errors[0];
    }
    return error.response.data;
}

export { createInstance, doAxios, doAxiosDelete, doAxiosGet, doAxiosPost, doAxiosPut };
