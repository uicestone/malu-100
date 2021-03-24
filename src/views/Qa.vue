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
  .pop.pop1(v-if="wrong")
    .tips
      h1 很遗憾,回答错误
      img.icon1(src="/images/6-qa-wrong.png")
      .flexBetween(style="width: 100%;padding: 0 0.5rem;margin-top: 1rem;")
        .btn.btn1.flexCenter(@click="$router.replace('/')") 返回首页
        .btn.btn2.flexCenter(@click="wrong = false; selectedOption = null") 再来一次
  answer-success(v-if="success")
</template>

<script>
import Swiper from "swiper";
import "swiper/css/swiper.css";
import AnswerSuccess from "../components/AnswerSuccess";
import { get100Day, saveAnswer } from "@/helpers/resource";

export default {
  components: { AnswerSuccess },
  data: () => {
    return {
      swiper: null,
      day: {},
      success: false,
      wrong: false,
      submitting: false,
      selectedOption: null,
    };
  },
  methods: {
    next(question) {
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
      if (!this.next(question)) return;
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
.pop {
  width: 100%;
  height: 100%;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 999;
}
.tips {
  width: 8.2rem;
  height: 6.7rem;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  margin: auto;
  background: rgba(68, 57, 48, 0.8);
  border-radius: 8px;
  padding-top: 1rem;
}
.tips h1 {
  font-size: 0.7rem;
  text-align: center;
  line-height: 0.7rem;
  color: #fff;
}
.btn {
  width: 3.2rem;
  height: 0.9rem;
  background: url(/images/6-btn-submit-bg.png) no-repeat;
  background-size: 100% 100%;
  color: #b18147;
  font-weight: bold;
  font-size: 0.5rem;
}
.icon1 {
  width: 1.58rem;
  height: 1.58rem;
  margin: auto;
  margin-top: 1rem;
}
.icon2 {
  width: 2.21rem;
  height: 2.44rem;
  margin: auto;
  margin-top: 0rem;
}
</style>