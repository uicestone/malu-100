<template lang="pug">
div
  .main
    .img.flexBetween
      img.i1(src="images/5-map-tab-1-primary.png")
      img.i2(src="images/5-map-tab-2-secondary.png")
      img.i3(src="images/5-map-tab-3-disabled.png")
      img.i4(src="images/5-map-tab-4-disabled.png")
      img.i5(src="images/5-map-tab-5-disabled.png")
    img.title(src="images/5-map-title-1.png")
    .map
      .m.m1.bg3(@click="toggleTip") 1
  .tips(v-if="showTip")
    .flexBetween(style="width: 100%; height: 100%;padding: 0 0.5rem;")
      .btn.btn1.flexCenter(@click="goToTask") 打卡
      .btn.btn2.flexCenter(@click="toggleTip") 取消
</template>

<script>
export default {
  data: () => {
    return {
      showTip: false,
    };
  },
  methods: {
    toggleTip() {
      this.showTip = !this.showTip;
    },
    goToTask() {
      this.$router.push("/text");
    },
  },
};
</script>

<style scoped>
.main {
  width: 100%;
  height: auto;
  background: url(/images/5-map-bg.png) no-repeat;
  background-size: cover;
  background-position: center center;
  padding: 0.4rem 0;
}
.img {
  width: 100%;
  padding: 0 0.4rem;
}
.i1 {
  width: 1.78rem;
  height: 3.36rem;
}
.i2 {
  width: 1.78rem;
  height: 3.36rem;
}
.i3 {
  width: 1.78rem;
  height: 3.36rem;
}
.i4 {
  width: 1.78rem;
  height: 3.36rem;
}
.i5 {
  width: 1.78rem;
  height: 3.36rem;
}
.map {
  width: 100%;
  height: 22.26rem;
  background: url(/images/5-map-1.png) no-repeat;
  background-size: 100% 100%;
  margin-top: 0.5rem;
  position: relative;
}
.m {
  width: 1.52rem;
  height: 1.44rem;
  color: #fff;
  text-align: center;
  line-height: 1.68rem;
  font-size: 0.36rem;
  font-weight: bold;
  padding-right: 0.05rem;
  position: absolute;
}
.bg1 {
  background: url(/images/5-map-star-disabled.png) no-repeat;
  background-size: 100% 100%;
}
.bg2 {
  background: url(/images/5-map-star-secondary.png) no-repeat;
  background-size: 100% 100%;
}
.bg3 {
  background: url(/images/5-map-star-primary.png) no-repeat;
  background-size: 100% 100%;
}
.m1 {
  left: 1.56rem;
  top: 3.37rem;
}
.m2 {
  left: 3.92rem;
  top: 3.48rem;
}
.m3 {
  left: 5.94rem;
  top: 3.42rem;
}
.m4 {
  left: 7.89rem;
  top: 3.93rem;
}
.m5 {
  left: 1.17rem;
  top: 5.64rem;
}
.m6 {
  left: 3.9rem;
  top: 5.38rem;
}
.m7 {
  left: 6rem;
  top: 5.59rem;
}
.m8 {
  left: 7.98rem;
  top: 6.12rem;
}
.m9 {
  left: 3.39rem;
  top: 7.74rem;
}
.m10 {
  left: 6.06rem;
  top: 8.38rem;
}
.m11 {
  left: 8.13rem;
  top: 8.86rem;
}
.m12 {
  left: 7.53rem;
  top: 10.89rem;
}
.m13 {
  left: 4.72rem;
  top: 10.44rem;
}
.m14 {
  left: 0.8rem;
  top: 11rem;
}
.m15 {
  left: 1.5rem;
  top: 13.12rem;
}
.m16 {
  left: 3.9rem;
  top: 12.97rem;
}
.m17 {
  left: 7.08rem;
  top: 13.68rem;
}
.m18 {
  left: 1.14rem;
  top: 15.6rem;
}
.m19 {
  left: 4.44rem;
  top: 15.6rem;
}
.m20 {
  left: 7.38rem;
  top: 15.6rem;
}
.tips {
  width: 8.3rem;
  height: 2.3rem;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  margin: auto;
  background: rgba(68, 57, 48, 0.8);
  border-radius: 8px;
  z-index: 3;
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
.title {
  width: 4.95rem;
  height: 1.16rem;
  margin: auto;
  margin-top: 1.7rem;
}
</style>