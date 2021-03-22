<template lang="pug">
.pop.pop2
  .tips(style="padding-top: 0.5rem;")
    h1(style="line-height: 1rem;")
      | 恭喜你打卡成功
      br
      | 获得主题徽章一枚
    img.icon2(src="/images/6-qa-badge.png")
    .flexBetween(style="width: 100%;padding: 0 0.5rem;margin-top: 0.5rem;")
      .btn.btn1.flexCenter(@click="$router.replace('/')") 返回首页
      .btn.btn3.flexCenter(@click="$router.replace('/my')") 我的徽章
</template>

<script>
import { getAuthUser } from "@/helpers/resource";

export default {
  name: "AnswerSuccess",
  async mounted() {
    const user = await getAuthUser(this.$openid);
    this.$user = user;
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