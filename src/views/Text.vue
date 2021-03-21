<template lang="pug">
.main
  img.title(src="/images/6-text-title.png")
  textarea.textarea(placeholder="输入文字", v-model="text")
  .tips
    | {{ day.requirement }}
  .btn.flexCenter(@click="submit", :class="{ disabled: !text }") 提交
  answer-success(v-if="success")
</template>

<script>
import AnswerSuccess from "../components/AnswerSuccess";
import { get100Day, saveAnswer } from "@/helpers/resource";

export default {
  components: { AnswerSuccess },
  data: () => {
    return {
      day: {},
      text: "",
      success: false,
    };
  },
  methods: {
    async submit() {
      if (!this.text) return;
      await saveAnswer(this.$openid, this.day.id, { answer: this.text });
      this.success = true;
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
}
.title {
  width: 100%;
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
}
.btn.disabled {
  opacity: 0.5;
}
.textarea {
  width: 7.4rem;
  height: 3.3rem;
  background: none;
  border: none;
  background: #fff;
  display: block;
  border: 1px solid #804e21;
  resize: none;
  margin: auto;
  padding: 0.15rem;
  font-size: 0.4rem;
  margin-top: 1.6rem;
}
</style>