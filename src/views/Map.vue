<template lang="pug">
div
  .main
    .img.flexBetween
      img.i1(src="images/5-map-tab-1a.png")
      img.i2(src="images/5-map-tab-2d.png")
      img.i3(src="images/5-map-tab-3d.png")
      img.i4(src="images/5-map-tab-4d.png")
      img.i5(src="images/5-map-tab-5d.png")
    img.title(src="images/5-map-title-1.png")
    .map(@click="mapClick")
      .m.bg1(
        @click.stop="openTip(n)",
        :class="{ bg2: answerable(n), bg3: answered(n) }",
        v-for="n in 20",
        :style="{ top: getY(currentMap, n) + 'rem', left: getX(currentMap, n) + 'rem' }"
      ) {{ n }}
  .tips(v-if="showTip")
    .flexBetween(style="width: 100%; height: 100%;padding: 0 0.5rem;")
      .btn.btn1.flexCenter(@click="goToTask") 打卡
      .btn.btn2.flexCenter(@click="toggleTip") 取消
</template>

<script>
import { get100Days } from "@/helpers/resource";

export default {
  data: () => {
    return {
      showTip: false,
      currentMap: 1,
      days: [],
      day: null,
    };
  },
  methods: {
    toggleTip() {
      this.showTip = !this.showTip;
    },
    openTip(n) {
      if (!this.answerable(n)) return;
      if (this.answered(n)) {
        return this.$router.push("/my");
      }
      this.showTip = true;
      const day = this.days.find((d) => d.day === n);
      if (!day) {
        return;
      }
      this.day = day;
    },
    goToTask() {
      if (!this.day) return;
      this.$router.push("/" + this.day.type + "?dayId=" + this.day.id);
    },
    mapClick(e) {
      const r = 34.7222222222;
      const y = e.layerY / r - 1.44 / 2;
      const x = e.layerX / r - 1.52 / 2;
      console.log(+x.toFixed(6), +y.toFixed(6));
    },
    getX(m, n) {
      return positions[m - 1][n - 1][0];
    },
    getY(m, n) {
      return positions[m - 1][n - 1][1];
    },
    answerable(n) {
      if (this.$route.query.test) return true;
      const day = this.days.find((d) => d.day === n);
      if (!day) {
        return false;
      }
      return day.available;
    },
    answered(n) {
      if (!this.$user || !this.$user.answered_days) return false;
      return this.$user.answered_days.includes(n);
    },
  },
  async created() {
    this.days = await get100Days();
  },
};
const positions = [
  [
    [1.2272, 20.016],
    [4.856, 19.2096],
    [8.2256, 18.7776],
    [7.5056, 16.992],
    [4.136, 16.8768],
    [0.968, 16.3872],
    [1.8896, 13.824],
    [5.0288, 12.8448],
    [8.1968, 12.528],
    [8.5136, 10.2528],
    [4.2512, 9.4752],
    [1.2272, 9.1872],
    [0.7088, 5.8464],
    [4.856, 6.4512],
    [8.024, 6.5952],
    [8.6, 4.2912],
    [5.2304, 3.4272],
    [1.3136, 2.88],
    [3.0704, 0.9216],
    [7.7648, 0.6912],
  ],
];
</script>

<style scoped>
.main {
  width: 100%;
  /* height: auto; */
  background: url(/images/5-map-bg.png) no-repeat;
  background-size: cover;
  background-position: center;
  padding: 0.4rem 0;
}
.img {
  width: 100%;
  padding: 0 0.4rem;
}
.img img {
  margin: 0 0.1rem;
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