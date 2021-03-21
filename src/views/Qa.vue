<template lang="pug">
div
  .main
    img.title(src="/images/6-qa-title.png")
    .content
      .swiper-container
        .swiper-wrapper
          .swiper-slide.swiper-no-swiping
            .tm_num.flexCenter 第一题
            .tm_title ____南昌南昌起义南昌起义南昌起义南昌起义南昌起义南昌起义南昌起义南昌起义南昌起义南昌起义南昌起义南昌起义南昌起义南昌起义南昌起义南昌起义起义
            ul.opt
              li(data-opt="a")
                i
                span 南昌南昌南昌起义南昌南昌昌南昌起义南昌起义
              li(data-opt="b")
                i
                span 南义南昌起义
              li(data-opt="c")
                i
                span 南昌南昌南昌起义南昌南昌昌南昌起义南昌起义
              li(data-opt="d")
                i
                span 南昌南昌南昌起义南昌南昌昌南昌起义南昌起义
            .next.flexCenter 下一题
          .swiper-slide.swiper-no-swiping
            .tm_num.flexCenter 第二题
            .tm_title ____南昌南昌起义南昌起义南昌起义南昌起义南昌起义南昌起义南昌起义南昌起义南昌起义南昌起义南昌起义南昌起义南昌起义南昌起义南昌起义南昌起义起义
            ul.opt
              li(data-opt="a")
                i
                span 南昌南昌南昌起义南昌南昌昌南昌起义南昌起义
              li(data-opt="b")
                i
                span 南义南昌起义
              li(data-opt="c")
                i
                span 南昌南昌南昌起义南昌南昌昌南昌起义南昌起义
              li(data-opt="d")
                i
                span 南昌南昌南昌起义南昌南昌昌南昌起义南昌起义
            .next.flexCenter 下一题
          .swiper-slide.swiper-no-swiping
            .tm_num.flexCenter 第三题
            .tm_title ____南昌南昌起义南昌起义南昌起义南昌起义南昌起义南昌起义南昌起义南昌起义南昌起义南昌起义南昌起义南昌起义南昌起义南昌起义南昌起义南昌起义起义
            ul.opt
              li(data-opt="a")
                i
                span 南昌南昌南昌起义南昌南昌昌南昌起义南昌起义
              li(data-opt="b")
                i
                span 南义南昌起义
              li(data-opt="c")
                i
                span 南昌南昌南昌起义南昌南昌昌南昌起义南昌起义
              li(data-opt="d")
                i
                span 南昌南昌南昌起义南昌南昌昌南昌起义南昌起义
            .next.flexCenter 下一题
          .swiper-slide.swiper-no-swiping
            .tm_num.flexCenter 第四题
            .tm_title ____南昌南昌起义南昌起义南昌起义南昌起义南昌起义南昌起义南昌起义南昌起义南昌起义南昌起义南昌起义南昌起义南昌起义南昌起义南昌起义南昌起义起义
            ul.opt
              li(data-opt="a")
                i
                span 南昌南昌南昌起义南昌南昌昌南昌起义南昌起义
              li(data-opt="b")
                i
                span 南义南昌起义
              li(data-opt="c")
                i
                span 南昌南昌南昌起义南昌南昌昌南昌起义南昌起义
              li(data-opt="d")
                i
                span 南昌南昌南昌起义南昌南昌昌南昌起义南昌起义
            .next.flexCenter 下一题
          .swiper-slide.swiper-no-swiping
            .tm_num.flexCenter 第五题
            .tm_title ____南昌南昌起义南昌起义南昌起义南昌起义南昌起义南昌起义南昌起义南昌起义南昌起义南昌起义南昌起义南昌起义南昌起义南昌起义南昌起义南昌起义起义
            ul.opt
              li(data-opt="a")
                i
                span 南昌南昌南昌起义南昌南昌昌南昌起义南昌起义
              li(data-opt="b")
                i
                span 南义南昌起义
              li(data-opt="c")
                i
                span 南昌南昌南昌起义南昌南昌昌南昌起义南昌起义
              li(data-opt="d")
                i
                span 南昌南昌南昌起义南昌南昌昌南昌起义南昌起义
            .tj.flexCenter 提交
  .pop.pop1(style="display: none;")
    .tips
      h1 很遗憾,回答错误
      img.icon1(src="/images/6-qa-wrong.png")
      .flexBetween(style="width: 100%;padding: 0 0.5rem;margin-top: 1rem;")
        .btn.btn1.flexCenter 返回首页
        .btn.btn2.flexCenter 再来一次
  answer-success
</template>

<script>
import AnswerSuccess from "../components/AnswerSuccess";

export default {
  components: { AnswerSuccess },
};
</script>

<style scoped>
.main {
  width: 100%;
  height: 21.16rem;
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