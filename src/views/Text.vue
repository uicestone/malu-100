<template lang="pug">
.main
  img.title(
    :src="`/images/6-text-title${day.poster ? '-poster-guess' : ''}.png`"
  )
  img.poster(v-if="day.poster", :src="day.poster")
  input.poster-answer(v-model="text", placeholder="输入文字", v-if="day.poster")
  textarea.textarea(placeholder="输入文字", v-model="text", v-else)
  .tips(:class="{ 'poster-tip': day.poster }")
    | {{ day.requirement }}
  .btn.flexCenter(
    @click="submit",
    :class="{ disabled: !text || submitting }",
    v-if="!success"
  )
    span(v-if="submitting") 提交中…
    span(v-else) 提交
  answer-wrong(v-if="wrong", @retry="text = ''; wrong = false")
  answer-success(v-if="success", :day="day.day")
</template>

<script>
import AnswerSuccess from "../components/AnswerSuccess";
import AnswerWrong from "../components/AnswerWrong";
import { get100Day, saveAnswer } from "@/helpers/resource";

export default {
  components: { AnswerSuccess, AnswerWrong },
  data: () => {
    return {
      day: {},
      text: "",
      wrong: false,
      success: false,
      submitting: false,
    };
  },
  methods: {
    async submit() {
      if (!this.text) return;
      if (this.day.answer) {
        if (this.day.answer !== this.text) {
          this.wrong = true;
          return;
        }
      }
      this.submitting = true;
      await saveAnswer(this.$openid, this.day.id, { answer: this.text });
      this.submitting = false;
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
.poster {
  width: 100%;
  padding: 5vw;
}
.poster-answer {
  padding: 10px;
  width: 60%;
  margin: 2rem auto 0;
  display: block;
  border-radius: 5px;
  border: 1.5px solid #804f22;
  font-size: 0.5rem;
  height: 1.4rem;
  text-align: center;
}
.poster-tip {
  margin-top: 0.5rem;
  text-align: center;
  text-indent: 0;
  font-size: 0.5rem;
}
</style>