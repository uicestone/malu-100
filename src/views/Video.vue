<template lang="pug">
.main
  img.title(src="/images/6-video-title.png")
  video.preview(
    src="",
    preload="auto",
    autoplay="true",
    v-show="selectedVideo",
    @click="playPause",
    ref="video"
  )
  .box(v-show="!selectedVideo")
    img.img(src="/images/6-video-btn.png")
    input#upload(
      type="file",
      name="file",
      accept="video/*",
      value="",
      ref="file-input",
      @change="onFileChange"
    )
  .tips
    | {{ day.requirement }}
  .btn.flexCenter(
    @click="submit",
    :class="{ disabled: !selectedVideo || submitting }",
    v-if="!success"
  )
    span(v-if="submitting") 提交中…
    span(v-else-if="uploading") 上传中 {{ (uploadProgress * 100).toFixed() }}% …
    span(v-else) 提交
  answer-success(v-if="success")
</template>

<script>
import AnswerSuccess from "../components/AnswerSuccess";
import { get100Day, saveAnswer, http } from "@/helpers/resource";

export default {
  components: { AnswerSuccess },
  data: () => {
    return {
      day: {},
      videoUrl: "",
      selectedVideo: false,
      preview: "",
      success: false,
      uploading: false,
      submitting: false,
      uploadProgress: 0,
    };
  },
  methods: {
    async submit() {
      if (!this.videoUrl) return;
      this.submitting = true;
      await saveAnswer(this.$openid, this.day.id, { answer: this.videoUrl });
      this.submitting = false;
      this.success = true;
    },
    onFileChange(e) {
      let files = e.target.files || e.dataTransfer.files;
      if (!files.length) return;
      this.createVideo(files[0]);
    },
    createVideo(file) {
      const video = this.$refs["video"];
      video.src = URL.createObjectURL(file);
      this.selectedVideo = true;
      // let reader = new FileReader();
      // let vm = this;

      // reader.onload = (e) => {
      //   vm.preview = e.target.result;
      // };
      // reader.readAsDataURL(file);
      this.uploadImage(file);
    },
    async uploadImage(file) {
      const formData = new FormData();
      formData.append("photo", file);
      this.uploading = true;
      const fileObject = (
        await http.post("pbpark/photo", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
          onUploadProgress: (progressEvent) =>
            (this.uploadProgress = progressEvent.loaded / progressEvent.total),
        })
      ).data;
      this.uploading = false;
      this.videoUrl = fileObject.url;
    },
    removeVideo() {
      if (!confirm("确定删除图片重新上传？")) return;
      this.preview = "";
      this.videoUrl = "";
      this.$emit("input", null);
      this.$refs["file-input"].value = "";
    },
    playPause() {
      const video = this.$refs["video"];
      if (video.paused) {
        video.play();
      } else {
        video.pause();
      }
    },
  },
  async created() {
    const dayId = this.$route.query.dayId;
    this.day = await get100Day(dayId);
  },
};
</script>

<style scoped>
.main {
  width: 100%;
  /* height: 21.16rem; */
  background: url(/images/3-bg.png) no-repeat;
  background-size: cover;
  background-position: center center;
  padding-top: 2.2rem;
  position: relative;
}
.title {
  width: 100%;
}
.box {
  width: 3.5rem;
  height: 3.5rem;
  position: relative;
  margin: auto;
  margin-top: 1.7rem;
}
video {
  width: 100%;
  object-fit: cover;
  display: block;
  margin: 1rem auto 0;
  padding: 0 0.4rem;
  position: absolute;
  min-height: 56.25vw;
  object-position: center;
  z-index: 10;
}
.box img {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
}
.tips {
  width: 100%;
  margin-top: 2.6rem;
  padding: 0 1.3rem;
  font-size: 0.4rem;
  line-height: 0.8rem;
  text-indent: 2em;
  color: #fff;
}
.btn {
  width: 4.7rem;
  height: 1.3rem;
  background: url(/images/6-btn-submit-bg.png) no-repeat;
  background-size: 100% 100%;
  position: absolute;
  left: 50%;
  margin-left: -2.35rem;
  bottom: 1rem;
  font-size: 0.6rem;
  font-weight: bold;
  color: #956134;
  z-index: 20;
}
.btn.disabled {
  opacity: 0.5;
}
#upload {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 2;
  opacity: 0;
}
</style>