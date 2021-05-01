<template lang="pug">
.main
  img.title(src="/images/6-voice-title.png")
  .box
    video(
      ref="video",
      :src="day.video",
      :poster="day.poster",
      webkit-playsinline="true",
      playsinline="true",
      x5-playsinline,
      x-webkit-airplay="allow",
      x5-video-player-type="h5"
    )
    //- audio(ref="audio", :src="audioUrl", style="display:none")
  .btn_box.flexBetween
    img.blink(
      src="/images/6-voice-record.png",
      @click="stopRecording",
      v-if="recording"
    )
    img(
      src="/images/6-voice-record.png",
      @click="startRecording",
      v-else,
      :class="{ disabled: playing }"
    )
    img.blink(src="/images/6-voice-play.png", @click="stop", v-if="playing")
    img(src="/images/6-voice-play.png", @click="play", v-else)
  .btn.flexCenter(
    @click="submit",
    :class="{ disabled: !wxVoiceServerId || submitting }",
    v-if="!success"
  )
    span(v-if="submitting") 提交中…
    span(v-else-if="uploading") 上传中 {{ (uploadProgress * 100).toFixed() }}% …
    span(v-else) 提交
  answer-success(v-if="success", :day="day.day")
</template>

<script>
import AnswerSuccess from "../components/AnswerSuccess";
import { get100Day, saveAnswer } from "../helpers/resource";
import wechatConfigJsSdk from "../helpers/wechatConfigJsSdk";
import MicRecorder from "mic-recorder-to-mp3";

export default {
  components: { AnswerSuccess },
  data: () => {
    return {
      day: {},
      success: false,
      submitting: false,
      video: null,
      audio: null,
      recorder: new MicRecorder({
        bitRate: 128,
      }),
      playing: false,
      recording: false,
      // audioUrl: null,
      // audioFile: null,
      wxVoiceLocalId: null,
      wxVoiceServerId: null,
      uploading: false,
      uploadProgress: 0,
    };
  },
  methods: {
    async startRecording() {
      if (this.playing) {
        return;
      }

      console.log("Start recording...");

      // await this.recorder.start();
      await global.wx.startRecord();

      this.recording = true;
      this.video.currentTime = 0;
      // this.audioUrl = null;
      this.wxVoiceServerId = null;
      this.video.play();
    },
    async stopRecording() {
      console.log("Stop recording.");
      this.video.pause();
      // const [, blob] = await this.recorder.stop().getMp3();
      // console.log(blob);
      // this.audio.src = URL.createObjectURL(blob);
      // this.audioFile = new File([blob], `${Date.now()}.mp3`);
      // console.log("Audio file generated.");
      // await this.upload();
      global.wx.stopRecord({
        success: (res) => {
          this.wxVoiceLocalId = res.localId;
          this.upload();
        },
      });
      this.recording = false;
    },
    async play() {
      if (this.recording) {
        await this.stopRecording();
      }

      console.log("Play.");

      if (this.isRecord) return;

      this.video.currentTime = 0;
      this.video.play();

      if (this.wxVoiceLocalId) {
        console.log("Play wx voice", this.wxVoiceLocalId);
        // this.audio.currentTime = 0;
        // this.audio.play();
        global.wx.playVoice({
          localId: this.wxVoiceLocalId,
        });
      }

      this.playing = true;
    },
    stop() {
      console.log("Stop playing.");
      this.video.pause();
      // if (this.audioUrl) this.audio.pause();
      if (this.wxVoiceLocalId) {
        global.wx.pauseVoice({
          localId: this.wxVoiceLocalId,
        });
      }
      this.playing = false;
      return;
    },
    async upload() {
      // if (!this.audioFile) {
      //   return;
      // }
      if (!this.wxVoiceLocalId) {
        return;
      }
      this.uploading = true;
      // let formData = new FormData();
      // formData.append("photo", this.audioFile);

      // const file = (
      //   await http.post("pbpark/photo", formData, {
      //     headers: {
      //       "Content-Type": "multipart/form-data",
      //     },
      //     onUploadProgress: (progressEvent) =>
      //       (this.uploadProgress = progressEvent.loaded / progressEvent.total),
      //   })
      // ).data;
      // this.uploading = false;
      // this.audioUrl = file.url;
      global.wx.uploadVoice({
        localId: this.wxVoiceLocalId,
        isShowProgressTips: 1,
        success: (res) => {
          this.wxVoiceServerId = res.serverId;
          this.uploading = false;
        },
      });
    },
    async submit() {
      if (!this.wxVoiceServerId) return;
      this.submitting = true;
      await saveAnswer(this.$openid, this.day.id, {
        answer: this.wxVoiceServerId,
      });
      this.submitting = false;
      this.success = true;
    },
  },
  async created() {
    const dayId = this.$route.query.dayId;
    this.day = await get100Day(dayId);
  },
  mounted() {
    this.video = this.$refs.video;
    this.audio = this.$refs.audio;
    wechatConfigJsSdk();
    global.wx.ready(() => {
      global.wx.onVoiceRecordEnd({
        complete: (res) => {
          this.wxVoiceLocalId = res.localId;
        },
      });
    });
  },
};
</script>

<style scoped>
.main {
  width: 100%;
  background: url(/images/3-bg.png) no-repeat;
  background-size: cover;
  background-position: center center;
  padding-top: 2.2rem;
  min-height: 145vw;
  height: 100vh;
  position: relative;
}
.title {
  width: 100%;
}
.box {
  width: 9rem;
  height: 5.1rem;
  margin: auto;
  margin-top: 1.7rem;
}
video {
  width: 100%;
  height: 100%;
  object-fit: fill;
  display: block;
}
.btn_box {
  width: 7.7rem;
  margin: auto;
  margin-top: 0.9rem;
  padding: 0 2rem;
}
.btn_box img {
  width: 1.44rem;
  height: 1.44rem;
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
.blink {
  animation: blinker 1s linear infinite;
}
.disabled {
  opacity: 0.3;
}

@keyframes blinker {
  50% {
    opacity: 0.2;
  }
}
</style>