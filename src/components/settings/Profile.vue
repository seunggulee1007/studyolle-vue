<template>
    <v-card>
        <v-row>
            <v-col cols="5">
                <v-card-text>
                    <v-card-title> 한줄 소개</v-card-title>
                    <v-text-field placeholder="간략한 소개를 부탁합니다."></v-text-field>
                    <div class="grey--text ms-4">길지 않게 35자 이내로 입력하세요.</div>
                </v-card-text>
                <v-card-text>
                    <v-card-title> 링크</v-card-title>
                    <v-text-field placeholder="http://studyolle.com"></v-text-field>
                    <div class="grey--text ms-4">
                        블로그,유튜브 또는 포트폴리오나 좋아하는 웹 사이트 등 본인을 표한할 수 있는 링크를 추가하세요.
                    </div>
                </v-card-text>
                <v-card-text>
                    <v-card-title> 직업</v-card-title>
                    <v-text-field placeholder="어떤 일을 하고 계신가요?"></v-text-field>
                    <div class="grey--text ms-4">개발자? 매니저? 취준생? 대표님?</div>
                </v-card-text>
                <v-card-text>
                    <v-card-title> 활동 지역</v-card-title>
                    <v-text-field placeholder="Redmond, WA, USA"></v-text-field>
                    <div class="grey--text ms-4">
                        주요 활동(사는 곳이나 직장을 다니는 곳 또는 놀러다니는 곳) 지역의 도시 이름을 알려 주세요.
                    </div>
                </v-card-text>
            </v-col>
            <v-col cols="5">
                <v-card v-if="imgSrc != ''">
                    <vue-cropper
                        ref="cropper"
                        :guides="true"
                        :view-mode="2"
                        drag-mode="crop"
                        :auto-crop-area="0.5"
                        :min-container-width="250"
                        :min-container-height="180"
                        :background="true"
                        :rotatable="false"
                        :src="imgSrc"
                        alt="Source Image"
                        :img-style="{ width: '400px', height: '300px' }"
                        :aspect-ratio="1"
                    ></vue-cropper>
                </v-card>
                <v-card v-else-if="profile.profileImage">
                    <v-img :src="profile.profileImage" width="100%"></v-img>
                </v-card>
                <v-card class="pa-2" v-else v-html="identicon"> </v-card>
                <v-card>
                    <v-file-input
                        :rules="rules"
                        accept="image/png, image/jpeg, image/bmp"
                        placeholder="Pick an avatar"
                        prepend-icon="mdi-camera"
                        label="Avatar"
                        @change="setImage"
                    ></v-file-input>
                </v-card>
                <v-card class="mt-5" v-if="imgSrc != ''">
                    <v-btn block @click="cropImage" color="error" class="mb-2"> 자르기 </v-btn>
                    <v-btn block @click="confirmImage" color="primary" class="mb-2">확인</v-btn>
                    <v-btn block @click="cancelImage" color="warning" class="mb-2">취소</v-btn>
                </v-card>
                <v-card class="mt-10">
                    <v-img :src="cropImg" v-if="cropImg" width="100%"></v-img>
                </v-card>
            </v-col>
        </v-row>
        <div class="text-center pb-5">
            <v-btn color="primary" depressed elevation="2" outlined rounded>수정하기</v-btn>
        </div>
    </v-card>
</template>

<script>
import VueCropper from 'vue-cropperjs';
import 'cropperjs/dist/cropper.css';
import { toSvg } from 'jdenticon';
export default {
    data() {
        return {
            imgSrc: '',
            cropImg: '',
            account: {},
            originImgSrc: '',
            profile: {},
            rules: [value => !value || value.size < 2000000 || 'Avatar size should be less than 2 MB!'],
        };
    },
    computed: {
        identicon() {
            return toSvg(this.account.nickname, 255);
        },
    },
    components: { VueCropper },
    methods: {
        setImage(file) {
            if (!file.type.includes('image/')) {
                alert('Please select an image file');
                return;
            }
            if (typeof FileReader === 'function') {
                const reader = new FileReader();
                reader.onload = event => {
                    this.imgSrc = event.target.result;
                    console.log(this.imgSrc);
                    // rebuild cropperjs with the updated source
                    this.$refs.cropper.replace(event.target.result);
                };
                reader.readAsDataURL(file);
            } else {
                alert('Sorry, FileReader API not supported');
            }
        },
        cropImage() {
            // get image data for post processing, e.g. upload or setting image src
            this.cropImg = this.$refs.cropper.getCroppedCanvas().toDataURL();
            console.log(this.cropImg);
        },
        rotate() {
            // guess what this does :)
            this.$refs.cropper.rotate(45);
        },
        confirmImage() {
            if (this.profile.profileImage) {
                this.originImgSrc = JSON.stringify(JSON.parse(this.profile.profileImage));
            }
            this.profile.profileImage = this.cropImg;
            console.log(this.profile);
            this.imgSrc = '';
            this.cropImg = '';
        },
        cancelImage() {},
    },
};
</script>

<style></style>
