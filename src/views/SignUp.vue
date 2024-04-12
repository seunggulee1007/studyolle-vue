<template>
    <v-container>
        <v-card>
            <v-container class="d-flex justify-center mb-6">
                <v-form ref="form" v-model="valid" lazy-validation>
                    <v-text-field type="text" v-model="nickname" :rules="nameRules" placeholder="닉네임을 입력해 주세요."></v-text-field>
                    <!-- <v-text-field type="text" :rules="emailRules" v-model="email" placeholder="이메일을 입력해 주세요."></v-text-field> -->
                    <v-text-field type="password" v-model="password" placeholder="비밀번호를 입력해 주세요." />
                    <v-btn :disabled="!valid" color="success" class="mr-4" @click="validate">로그인</v-btn>
                    <v-btn><router-link to="/accounts/signIn">회원가입</router-link></v-btn>
                </v-form>
            </v-container>
        </v-card>
    </v-container>
</template>

<script>
import { mapActions } from 'vuex';
export default {
    name: 'SignUp',
    data: () => ({
        nickname: '',
        email: '',
        password: '',
        valid: true,
        emailRules: [v => !!v || 'E-mail is required', v => /.+@.+\..+/.test(v) || 'E-mail must be valid'],
        nameRules: [v => !!v || 'Name is required', v => (v && v.length <= 10) || 'Name must be less than 10 characters'],
    }),
    methods: {
        ...mapActions(['LOGIN']),
        async validate() {
            if (this.$refs.form.validate()) {
                const param = {
                    nickname: this.nickname,
                    password: this.password,
                };
                let res = await this.LOGIN(param);
                console.log(res);
            }
        },
    },
};
</script>

<style scoped>
a {
    display: inline-block;
    text-decoration: none;
    color: inherit;
}
</style>
