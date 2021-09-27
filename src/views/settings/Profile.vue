<template>
    <v-container class="grey lighten-5 mb-6">
        <v-row align="center" class="mt-5">
            <v-col cols="2">
                <v-card class="pa-2" v-if="!account.profileImage" v-html="identicon"> </v-card>
                <v-card class="pa-2" v-else>
                    <img src="" alt="" />
                </v-card>
            </v-col>
            <v-col cols="10">
                <v-card class="pa-13">
                    <p class="lead" v-if="account.bio">{{ account.bio }}</p>
                    <p class="lead" v-else-if="!account.bio && isOnwer">한 줄 소개를 추가하세요.</p>
                </v-card>
            </v-col>
        </v-row>
        <v-row align="center" class="mt-3 justify-content-center">
            <v-col cols="12">
                <v-card>
                    <v-row>
                        <v-col cols="2">
                            <v-tabs vertical v-model="currentItem">
                                <v-tab v-for="item in tabs" :key="item.id" style="witdh: 50%" @click="viewItems = item.id">
                                    {{ item.name }}
                                </v-tab>
                            </v-tabs>
                        </v-col>
                        <v-col cols="10">
                            <v-tabs-items v-model="currentItem">
                                <v-tab-item>
                                    <profile v-if="viewItems == 1"></profile>
                                </v-tab-item>
                                <v-tab-item>
                                    <change-pwd v-if="viewItems == 2"></change-pwd>
                                </v-tab-item>
                                <v-tab-item>
                                    <notification v-if="viewItems == 3"></notification>
                                </v-tab-item>
                            </v-tabs-items>
                        </v-col>
                    </v-row>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import Profile from '@/components/settings/Profile.vue';
import ChangePwd from '@/components/settings/ChangePwd.vue';
import Notification from '@/components/settings/Notification.vue';
import { toSvg } from 'jdenticon';
export default {
    computed: {
        identicon() {
            return toSvg(this.account.nickname, 125);
        },
    },
    components: {
        Profile,
        ChangePwd,
        Notification,
    },
    data() {
        return {
            currentItem: 'tab-Web',
            viewItems: 1,
            account: {},
            isOnwer: true,
            tabs: [
                {
                    id: 1,
                    name: '프로필',
                },
                {
                    id: 2,
                    name: '패스워드',
                },
                {
                    id: 3,
                    name: '알림',
                },
                {
                    id: 4,
                    name: '관심주제',
                },
                {
                    id: 5,
                    name: '활동지역',
                },
                {
                    id: 6,
                    name: '계정',
                },
            ],
        };
    },
    methods: {
        changeTab(num) {
            this.currentItem = num;
        },
    },
};
</script>

<style></style>
