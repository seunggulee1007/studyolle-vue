import { doAxiosPost } from '../';

// 사용자 로그인
function loginUser(data) {
    return doAxiosPost('/login', data);
}

export { loginUser };
