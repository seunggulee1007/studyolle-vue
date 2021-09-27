<template>
    <v-container>
        <v-card-title>패스워드 변경</v-card-title>
        <v-card>
            <v-container>
                <v-form ref="form" v-model="valid" lazy-validation>
                    <v-text-field
                        type="password"
                        v-model="password"
                        :rules="passwordRules"
                        label="새 패스워드"
                        maxlength="12"
                    ></v-text-field>
                    <v-text-field
                        type="password"
                        v-model="confirmPassword"
                        :rules="confirmPasswordRules"
                        label="새 패스워드 확인"
                    ></v-text-field>
                    <v-btn color="primary" :disabled="!valid" @click="validate">패스워드 변경하기</v-btn>
                </v-form>
            </v-container>
            <v-alert type="success" v-model="alert" dense outlined dismissible>{{ message }}</v-alert>
            <v-btn v-if="!alert" color="deep-purple accent-4" dark @click="alert = true"> Reset </v-btn>
        </v-card>
    </v-container>
</template>

<script>
export default {
    data() {
        return {
            alert: true,
            valid: false,
            password: '',
            confirmPassword: '',
            message: 'asdf',
            passwordRules: [
                v => !!v || '비밀번호를 입력해 주세요.',
                v => /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,12}$/.test(v) || '숫자와 영문자, 특수 문자 조합으로 8~12자리를 사용해야 합니다.', /* eslint-disable-line */
            ],
            confirmPasswordRules: [v => !!v || '비밀번호를 입력해 주세요.', v => v === this.password || '비밀번호가 일치하지 않습니다.'],
        };
    },
    methods: {
        async validate() {
            await this.$refs.form.validate();
            if (this.valid) {
                alert('변경이 가능하구나?');
            }
        },
    },
};
</script>

<style></style>
