<template>
    <div>
        <v-app-bar color="blue darken-1" dense dark class="pd-10">
            <v-app-bar-nav-icon></v-app-bar-nav-icon>

            <v-toolbar-title>Page title</v-toolbar-title>

            <v-spacer></v-spacer>
            <v-toolbar-items>
                <v-text-field label="검색" hide-details prepend-icon="mdi-magnify"></v-text-field>
                <v-btn icon v-html="identicon"></v-btn>
                <v-btn text><div>로그인</div></v-btn>
                <v-btn text><div>가입</div></v-btn>
            </v-toolbar-items>
        </v-app-bar>
    </div>
</template>

<script>
import { toSvg } from 'jdenticon';
export default {
    data: () => ({
        drawer: false,
        group: null,
        textInput: 'seunggu',
    }),
    computed: {
        identicon() {
            return toSvg(this.textInput, 30);
        },
    },
    watch: {
        group() {
            this.drawer = false;
        },
    },
};
</script>

<style></style>
