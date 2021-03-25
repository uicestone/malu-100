<template lang="pug">
.main
  .content-title
    .icon-100
      img(src="/images/2-content-icon.png")
    .split
    .icon-malu
      img(src="/images/2-content-title.png")
  h1
    | 距离中国共产党成立
    br
    | 100周年华诞
  .time.flexBetween
    span {{ days | format }}
    i :
    span {{ hours | format }}
    i :
    span {{ minutes | format }}
    i :
    span {{ seconds | format }}
  .links
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
const target = new Date("2021/07/01 00:00:00").valueOf() / 1000;
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
  /* height: 21.15rem; */
  background: url(/images/2-content-bg.png) no-repeat;
  background-size: 12.19rem 21.65rem;
  background-position: center center;
  position: relative;
  padding-top: 5.7rem;
  display: flex;
  flex-direction: column;
}
.content-title {
  position: absolute;
  top: 1.4rem;
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
}
.content-title .icon-100 {
  width: 4rem;
}
.content-title .split {
  height: 2.4rem;
  border-left: 1px solid white;
  margin: 0 0.3rem;
}
.content-title .icon-malu {
  width: 2.6rem;
}
.content-title img {
  max-width: 100%;
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
  margin: 0 auto;
  margin-top: 0.7rem;
  font-size: 0.9rem;
  font-weight: bold;
  color: #fff;
  padding-top: 0.5rem;
  font-family: Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif;
  padding: 0.5rem 0.6rem 0 1rem;
}
/*.time span{
			margin: 0 0.3rem;
		}*/
.time i {
  font-style: none;
}
.time span {
  width: 1rem;
}
.links {
  /* margin-bottom: 1.5rem; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex: 1;
}
.tag {
  width: 6.7rem;
  height: 2.24rem;
  background: url(/images/2-content-item-bg.png) no-repeat;
  background-size: 100% 100%;
  margin: 0 auto;
  position: relative;
  font-size: 0.7rem;
  line-height: 0.8rem;
  font-weight: bold;
  color: #d3b485;
  padding-right: 1.2rem;
  letter-spacing: 0.1rem;
}
.tag span {
  margin-bottom: 0.1rem;
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
  margin-top: 0.5rem;
}
.tag2,
.tag3 {
  margin-top: 0.5rem;
}
</style>