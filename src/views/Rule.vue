<template lang="pug">
.main
  .header.flexCenter
    img(src="/images/2-content-item-icon-1.png")
    span 打卡须知
  .rule
    ul.rule_ul
      li
        i 1
        font 打卡须知打卡须知打卡须知打卡须知打卡须知打卡须知打卡须知打卡须知打卡须知打卡须知打卡须知打卡须知打卡须知打卡须知
      li
        i 2
        font 打卡须知打卡须知打卡须知打卡须知打卡须知打卡须知打卡须知打卡须知打卡须知打卡须知打卡须知打卡须知打卡须知打卡须知
      li
        i 3
        font 打卡须知打卡须知打卡须知打卡须知打卡须知打卡须知打卡须知打卡须知打卡须知打卡须知打卡须知打卡须知打卡须知打卡须知
      li
        i 4
        font 打卡须知打卡须知打卡须知打卡须知打卡须知打卡须知打卡须知打卡须知打卡须知打卡须知打卡须知打卡须知打卡须知打卡须知
      li
        i 5
        font 打卡须知打卡须知打卡须知打卡须知打卡须知打卡须知打卡须知打卡须知打卡须知打卡须知打卡须知打卡须知打卡须知打卡须知
  router-link.btn.flexCenter(to="map") 进入地图
</template>

<style scoped>
.main {
  width: 100%;
  height: 21.15rem;
  background: url(/images/3-bg.png) no-repeat;
  background-size: 12.08rem 21.14rem;
  background-position: center center;
}
.header {
  width: 100%;
  height: 1.62rem;
  background: #c51923;
}
.header img {
  width: 0.9rem;
  height: 0.93rem;
}
.header span {
  font-size: 0.6rem;
  color: #fff;
  font-weight: bold;
  margin-left: 0.2rem;
}
.rule {
  width: 8.64rem;
  height: 14.8rem;
  background: url(/images/4-rule-border.png) #fff no-repeat;
  background-size: 100% 100%;
  margin: auto;
  margin-top: 1.3rem;
  padding: 0.8rem;
}
.rule li {
  width: 100%;
  height: auto;
  position: relative;
  padding: 0.4rem 0 0.4rem 0.9rem;
  border-bottom: 1px dashed #c9bc9c;
}
.rule li:last-child {
  border: none;
}
.rule i {
  width: 0.7rem;
  height: 0.7rem;
  display: flex;
  display: -webkit-flex;
  justify-content: center;
  align-items: center;
  font-style: none;
  font-size: 0.4rem;
  color: #fff;
  position: absolute;
  top: 50%;
  margin-top: -0.35rem;
  border-radius: 50%;
  background: #614c3f;
  left: 0;
}
.rule_ul {
  width: 100%;
  height: 100%;
  overflow: auto;
}
.rule_ul font {
  display: block;
  font-size: 0.4rem;
  line-height: 0.5rem;
  color: #614c3f;
}
.btn {
  width: 4.8rem;
  height: 1.34rem;
  background: url(/images/6-btn-submit-bg.png) no-repeat;
  background-size: 100% 100%;
  margin: auto;
  font-size: 0.7rem;
  font-weight: bold;
  color: #614c3f;
  margin-top: 1rem;
}
</style>