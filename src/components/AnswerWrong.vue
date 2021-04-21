<template lang="pug">
.pop.pop1
  .tips
    h1 很遗憾,回答错误
    img.icon1(src="/images/6-qa-wrong.png")
    .flexBetween(style="width: 100%;padding: 0 0.5rem;margin-top: 1rem;")
      .btn.btn1.flexCenter(@click="$router.replace('/')") 返回首页
      .btn.btn2.flexCenter(@click="$emit('retry')") 再来一次
</template>

<script>
export default {
  name: "AnswerWrong",
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