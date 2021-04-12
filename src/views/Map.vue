<template lang="pug">
div
  .main
    .stages.flexBetween
      img(
        v-for="s in 5",
        :key="s",
        :src="`images/5-map-tab-${s}${sectionEnabled(s) ? (sectionClosed(s) ? 'p' : 'a') : 'd'}.png`",
        @click="goToMap(s)"
      )
    img.title(:src="`images/5-map-title-${currentMap}.png`")
    .map(@click="mapClick")
      img.map-img(:src="`/images/5-map-${currentMap}.png`")
      .day-icon(
        @click.stop="openTip(n)",
        v-for="n in 20",
        :class="`section-${currentMap}`",
        :style="{ 'background-image': `url(/images/5-map-day-${currentMap}-${getDayStatusText(n)}.png)`, top: getY(currentMap, n) + 'rem', left: getX(currentMap, n) + 'rem' }"
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
        return this.$router.push("/my?section=" + this.currentMap);
      }
      this.showTip = true;
      const nthDay = (this.currentMap - 1) * 20 + n;
      const day = this.days.find((d) => d.day === nthDay);
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
      return positions?.[m - 1]?.[n - 1]?.[0];
    },
    getY(m, n) {
      return positions?.[m - 1]?.[n - 1]?.[1];
    },
    answerable(n) {
      const nthDay = (this.currentMap - 1) * 20 + n;
      if (this.$route.query.test) return true;
      const day = this.days.find((d) => d.day === nthDay);
      if (!day) {
        return false;
      }
      return day.available;
    },
    answered(n) {
      const nthDay = (this.currentMap - 1) * 20 + n;
      if (!this.$user || !this.$user.answered_days) return false;
      return this.$user.answered_days.includes(nthDay);
    },
    getDayStatusText(n) {
      if (this.answered(n)) {
        return "primary";
      }
      if (this.answerable(n)) {
        return "secondary";
      }
      return "disabled";
    },
    sectionEnabled(s) {
      if (this.$route.query.test) return true;
      const days = this.days.filter((d) => d.available).map((d) => d.day);
      days.sort((a, b) => b - a);
      console.log("latest day is ", days[0]);
      const latestSection = Math.floor((days[0] - 1) / 20) + 1;
      return s <= latestSection;
    },
    sectionClosed(s) {
      const answeredDays = this.$user.answered_days;
      const start = (s - 1) * 20;
      const end = start + 20;
      const answeredDaysInSection = answeredDays.filter(
        (d) => d > start && d <= end
      ).length;
      console.log(answeredDaysInSection, "days answered in section", s);
      return answeredDaysInSection === 20;
    },
    goToMap(s) {
      if (!this.sectionEnabled(s)) return;
      this.currentMap = s;
    },
  },
  async created() {
    if (!this.$user.organization) {
      this.$router.replace("/join");
    }

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
  [
    [4.2512, 23.3856],
    [1.3424, 21.6864],
    [4.6544, 20.9088],
    [7.1888, 19.5264],
    [1.0256, 17.6256],
    [3.8192, 16.1856],
    [7.88, 15.696],
    [5.6912, 13.9968],
    [0.8816, 13.1328],
    [4.1072, 11.3472],
    [7.592, 9.5328],
    [5.3744, 8.8992],
    [0.248, 9.2736],
    [2.8688, 7.8048],
    [7.5056, 4.7808],
    [4.9712, 5.5296],
    [1.6016, 3.6288],
    [5.432, 2.5344],
    [8.0816, 0.3168],
    [4.8272, 0.2016],
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
.stages {
  width: 100%;
  padding: 0 0.2rem;
  flex-wrap: nowrap;
  height: 3rem;
}
.stages img {
  margin: 0 0.25rem;
  min-width: 0;
  object-fit: contain;
}
.map {
  width: 100%;
  /* height: 22.26rem; */
  background-repeat: no-repeat;
  background-size: 100% 100%;
  margin-top: 0.5rem;
  position: relative;
}
.map-img {
  width: 100%;
}
.day-icon {
  width: 1.52rem;
  height: 1.44rem;
  color: #fff;
  text-align: center;
  line-height: 1.68rem;
  font-size: 0.36rem;
  font-weight: bold;
  padding-right: 0.05rem;
  position: absolute;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
}
.day-icon.section-2 {
  line-height: 0.85rem;
  font-size: 0.6rem;
  width: 2.1rem;
  height: 1.68rem;
  margin-top: 0.9rem;
  padding-left: 0.05rem;
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