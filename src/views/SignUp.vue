<template>
    <div>
        <form>
            <input type="text" v-model="nickname" placeholder="닉네임을 입력해 주세요." />
            <input type="text" v-model="email" placeholder="이메일을 입력해 주세요." />
            <input type="password" v-model="password" placeholder="비밀번호를 입력해 주세요." />
            <button type="submit" @click="doLogin">로그인</button>
        </form>
    </div>
</template>

<script>
export default {
    name: 'SignUp',
    data() {
        return {
            nickname: '',
            email: '',
            password: '',
        };
    },
    methods: {
        doLogin() {},
    },
};
</script>

<style scoped></style>
