<template lang="pug">
.pop.pop2
  .tips(style="padding-top: 0.5rem;")
    h1(style="line-height: 1rem;")
      .section-close-text(v-if="isSectionClose") 恭喜你完成百日倒计时《{{ $sectionNames[section - 1] }}》主题地图，你已打卡{{ answeredDays.length }}天。希望你再接再厉！
      div(v-else) 恭喜你打卡成功
        br
        | 获得主题徽章一枚
    img.icon2(:src="`/images/badge-${section}.png`")
    .flexBetween(style="width: 100%;padding: 0 0.5rem;margin-top: 0.5rem;")
      .btn.btn1.flexCenter(@click="$router.replace('/')") 返回首页
      .btn.btn3.flexCenter(@click="$router.replace('/my')") 我的徽章
</template>

<script>
import { getAuthUser } from "@/helpers/resource";

export default {
  name: "AnswerSuccess",
  props: {
    day: { type: Number, required: true },
  },
  data() {
    return { answeredDays: this.$user.answered_days };
  },
  async mounted() {
    if (!this.answeredDays.includes(this.day)) {
      this.answeredDays.push(this.day);
    }
    const user = await getAuthUser(this.$openid);
    this.$user = user;
  },
  computed: {
    section() {
      return Math.floor((this.day - 1) / 20) + 1;
    },
    isSectionClose() {
      const start = (this.section - 1) * 20;
      const end = start + 20;
      const answeredDaysInSection = this.answeredDays.filter(
        (d) => d > start && d <= end
      ).length;
      console.log(
        answeredDaysInSection,
        "days answered in section",
        this.section
      );
      return answeredDaysInSection === 20;
    },
  },
};
</script>

<style scoped>
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
  min-height: 6.7rem;
  position: absolute;
  left: 0;
  right: 0;
  top: 30vh;
  /* bottom: 0; */
  margin: auto;
  background: rgba(68, 57, 48, 0.8);
  border-radius: 8px;
  padding-top: 1rem;
  padding-bottom: 0.5rem;
}
.tips h1 {
  font-size: 0.7rem;
  text-align: center;
  line-height: 0.7rem;
  color: #fff;
}
.section-close-text {
  line-height: 1.5;
  font-size: 0.57rem;
  padding: 0 0.3rem;
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
  width: auto;
  height: 2.44rem;
  margin: auto;
  margin-top: 0rem;
}
</style>