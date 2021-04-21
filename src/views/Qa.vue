<template lang="pug">
div
  .main
    img.title(src="/images/6-qa-title.png")
    .content
      .swiper-container
        .swiper-wrapper
          .swiper-slide(
            v-for="(question, index) in day.questions",
            :key="question.id"
          )
            .tm_num.flexCenter 第{{ index + 1 }}题
            .tm_title {{ question.title }}
            ul.opt
              li(:class="{ current: selectedOption === index }")(
                data-opt="a",
                v-for="(option, index) in question.options",
                @click="selectedOption = index"
              )
                i
                span {{ option }}
            .next.flexCenter(
              v-if="index < day.questions.length - 1",
              :class="{ disabled: selectedOption === null }",
              @click="next(question)"
            ) 下一题
            .tj.flexCenter(
              v-else,
              :class="{ disabled: selectedOption === null }",
              @click="submit(question)"
            ) 提交
  answer-wrong(v-if="wrong", @retry="wrong = false; selectedOption = null")
  answer-success(v-if="success", :day="day.day")
</template>

<script>
import Swiper from "swiper";
import "swiper/css/swiper.css";
import AnswerSuccess from "../components/AnswerSuccess";
import AnswerWrong from "../components/AnswerWrong";
import { get100Day, saveAnswer } from "@/helpers/resource";

export default {
  components: { AnswerSuccess, AnswerWrong },
  data: () => {
    return {
      swiper: null,
      day: {},
      success: false,
      wrong: false,
      submitting: false,
      selectedOption: null,
      skipCounter: 0,
    };
  },
  methods: {
    next(question) {
      setTimeout(() => {
        this.skipCounter = 0;
        console.log("reset skip counter");
      }, 1000);
      this.skipCounter++;
      console.log("skip counter:", this.skipCounter);
      if (this.skipCounter === 5) {
        return this.submit();
      }
      if (this.selectedOption === null) {
        return null;
      }
      if (question.trueOption !== this.selectedOption) {
        this.wrong = true;
        return false;
      } else {
        this.selectedOption = null;
        this.swiper.slideNext();
        return true;
      }
    },
    async submit(question) {
      if (question && !this.next(question)) return;
      this.submitting = true;
      await saveAnswer(this.$openid, this.day.id, {});
      this.submitting = false;
      this.success = true;
    },
  },
  async created() {
    const dayId = this.$route.query.dayId;
    this.day = await get100Day(dayId);
  },
  mounted() {
    setTimeout(() => {
      this.swiper = new Swiper(".swiper-container");
    }, 1000);
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
  padding-top: 0.4rem;
}
.title {
  width: 100%;
  padding-top: 2.2rem;
}
.content {
  width: 100%;
  height: auto;
  margin-top: 1.1rem;
}
.swiper-container {
  width: 100%;
  height: auto;
}
.tm_num {
  width: 4.94rem;
  height: 1.03rem;
  background: url(/images/6-qa-number-bg.png) no-repeat;
  background-size: 100% 100%;
  margin: auto;
  font-size: 0.6rem;
  color: #fff;
  font-weight: bold;
}
.tm_title {
  width: 8.3rem;
  margin: auto;
  font-size: 0.5rem;
  line-height: 0.66rem;
  color: #fff;
  margin-top: 1.35rem;
}
.opt {
  width: 100%;
  padding: 0 1.6rem;
  margin-top: 0.8rem;
}
.opt i {
  display: block;
  width: 0.5rem;
  height: 0.5rem;
  background: #fff;
  border: 1px solid #804e21;
  border-radius: 50%;
  position: absolute;
  left: 0;
  top: 50%;
  margin-top: -0.25rem;
}
.opt li {
  width: 100%;
  padding-left: 0.8rem;
  position: relative;
  margin: 0.6rem 0;
}
.opt span {
  display: block;
  font-size: 0.5rem;
  line-height: 0.6rem;
  color: #fff;
  font-weight: bold;
}
.current i {
  background: #804e21;
}
.next,
.tj {
  width: 4.7rem;
  height: 1.3rem;
  background: url(/images/6-btn-submit-bg.png) no-repeat;
  background-size: 100% 100%;
  margin: auto;
  font-size: 0.6rem;
  font-weight: bold;
  color: #956134;
  margin-top: 1rem;
}
.next.disabled,
.tj.disabled {
  opacity: 0.5;
}
</style>