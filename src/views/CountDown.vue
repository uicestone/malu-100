<template lang="pug">
.main
  img.content-title(src="/images/2-content-title.png")
  h1
    | 距离中国共产党成立
    br
    | 100周年华诞
  .time.flexStart
    span(style="margin-left: 0.9rem;") {{ days | format }}
    i(style="margin-left: 0.5rem;") :
    span(style="margin-left: 0.65rem;") {{ hours | format }}
    i(style="margin-left: 0.4rem;") :
    span(style="margin-left: 0.3rem;") {{ minutes | format }}
    i(style="margin-left: 0.4rem;") :
    span(style="margin-left: 0.4rem;") {{ seconds | format }}
  router-link.tag.tag1.flexEnd(to="rule")
    img.icon1(src="/images/2-content-item-icon-1.png")
    span 打卡须知
  router-link.tag.tag2.flexEnd(to="map")
    img.icon2(src="/images/2-content-item-icon-2.png")
    span 百日打卡
  router-link.tag.tag3.flexEnd(to="my")
    img.icon3(src="/images/2-content-item-icon-3.png")
    span 我的徽章
</template>

<script>
const target = new Date("2021-07-01 00:00:00").valueOf() / 1000;
export default {
  data: () => {
    return { interval: null, now: Date.now() / 1000 };
  },
  created() {
    this.interval = setInterval(() => {
      this.now = Date.now() / 1000;
    }, 100);
  },
  computed: {
    diff() {
      return target - this.now;
    },
    days() {
      return Math.floor(this.diff / 86400);
    },
    hours() {
      return Math.floor((this.diff % 86400) / 3600);
    },
    minutes() {
      return Math.floor((this.diff % 3600) / 60);
    },
    seconds() {
      return Math.floor(this.diff % 60);
    },
  },
  filters: {
    format(s) {
      return s.toString().padStart(2, "0").substr(-2);
    },
  },
};
</script>

<style scoped>
.main {
  width: 100%;
  height: 21.15rem;
  background: url(/images/2-content-bg.png) no-repeat;
  background-size: 12.19rem 21.65rem;
  background-position: center center;
  position: relative;
  padding-top: 5.7rem;
}
.content-title {
  width: 4rem;
  position: absolute;
  left: 50%;
  margin-left: -2rem;
  top: 1.2rem;
}
h1 {
  font-size: 0.8rem;
  color: #fff;
  text-align: center;
  line-height: 1rem;
}
.time {
  width: 9.14rem;
  height: 1.82rem;
  background: url(/images/2-content-countdown-bg.png) no-repeat;
  background-size: 100% 100%;
  margin: auto;
  margin-top: 0.7rem;
  font-size: 0.9rem;
  font-weight: bold;
  color: #fff;
  padding-top: 0.5rem;
}
/*.time span{
			margin: 0 0.3rem;
		}*/
.time i {
  font-style: none;
}
.tag {
  width: 6.7rem;
  height: 2.24rem;
  background: url(/images/2-content-item-bg.png) no-repeat;
  background-size: 100% 100%;
  margin: auto;
  position: relative;
  font-size: 0.8rem;
  line-height: 0.8rem;
  font-weight: bold;
  color: #d3b485;
  padding-right: 1rem;
  letter-spacing: 0.1rem;
}
.icon1 {
  width: 0.9rem;
  position: absolute;
  left: 0.6rem;
  top: 0.5rem;
}
.icon2 {
  width: 1.62rem;
  position: absolute;
  left: 0.2rem;
  top: 0.5rem;
}
.icon3 {
  width: 0.99rem;
  position: absolute;
  left: 0.55rem;
  top: 0.5rem;
}
.tag1 {
  margin-top: 1.5rem;
}
.tag2,
.tag3 {
  margin-top: 0.5rem;
}
</style>