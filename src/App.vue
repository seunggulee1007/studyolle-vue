<template>
    <v-app>
        <v-main>
            <app-header v-if="isLogin"></app-header>
            <v-row>
                <v-col cols="12" md="1"></v-col>
                <v-col cols="12" md="10">
                    <router-view />
                </v-col>
                <v-col cols="12" md="1"></v-col>
            </v-row>
        </v-main>
    </v-app>
</template>

<script>
import { mapGetters } from 'vuex';
import AppHeader from '@/components/AppHeader.vue';

export default {
    name: 'App',
    computed: {
        ...mapGetters(['isLogin']),
    },
    components: {
        AppHeader,
    },
    data: () => ({}),
};
</script>
