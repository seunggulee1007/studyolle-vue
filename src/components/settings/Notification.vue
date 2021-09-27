<template>
    <v-container>
        <v-card flat>
            <v-card-title>알림 설정</v-card-title>
            <v-container fluid>
                <v-form>
                    <v-row>
                        <v-col cols="12" md="12">
                            <v-card-text>
                                <span style="color: dodgerblue">주요 활동 지역</span>에
                                <span style="color: dodgerblue">관심있는 주제</span>의 스터디가 만들어졌을 때 알림을 받을 방법을 설정하세요.
                            </v-card-text>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col cols="4">
                            <v-switch v-model="notifications.studyCreatedByEmail" label="이메일로 받기" color="primary" inset></v-switch>
                        </v-col>
                        <v-col cols="4">
                            <v-switch v-model="notifications.studyCreatedByWeb" label="웹으로 받기" color="primary" inset></v-switch>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col cols="12" md="12">
                            <v-card-text> 스터디 모임 참가 신청 결과 알림을 받을 방법을 설정하세요. </v-card-text>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col cols="4">
                            <v-switch
                                v-model="notifications.studyEnrollmentResultByEmail"
                                label="이메일로 받기"
                                color="primary"
                                inset
                            ></v-switch>
                        </v-col>
                        <v-col cols="4">
                            <v-switch
                                v-model="notifications.studyEnrollmentResultByWeb"
                                label="웹으로 받기"
                                color="primary"
                                inset
                            ></v-switch>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col cols="12" md="12">
                            <v-card-text> 참여중인 스터디에 대한 알림을 받을 방법을 설정하세요. </v-card-text>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col cols="4">
                            <v-switch v-model="notifications.studyUpdatedByEmail" label="이메일로 받기" color="primary" inset></v-switch>
                        </v-col>
                        <v-col cols="4">
                            <v-switch v-model="notifications.studyUpdatedByWeb" label="웹으로 받기" color="primary" inset></v-switch>
                        </v-col>
                    </v-row>
                </v-form>
            </v-container>
        </v-card>
    </v-container>
</template>

<script>
export default {
    data() {
        return {
            notifications: {},
        };
    },
};
</script>

<style></style>
