<template>
    <v-app>
        <v-main>
            <app-header></app-header>
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
import AppHeader from '@/components/AppHeader.vue';

export default {
    name: 'App',
    components: {
        AppHeader,
    },
    data: () => ({}),
};
</script>
