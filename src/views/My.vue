<template lang="pug">
.main
  .header.flexCenter
    img(src="/images/3-my-icon.png")
    span 我的徽章
  .title.flexCenter {{ $sectionNames[currentPage - 1] }}
  .content
    .swiper-container
      .swiper-wrapper
        .swiper-slide(v-for="page in 5")
          ul.list
            li(v-for="row in 5")
              a(v-for="cell in 4")
                img(
                  v-if="answered(page, row, cell)",
                  :src="`/images/badge-${page}.png`"
                )
                span {{ getDateText(page, row, cell) }}
      .swiper-pagination
    .swiper-button-prev
    .swiper-button-next
</template>

<script>
import Swiper from "swiper";
import "swiper/css/swiper.css";

export default {
  data: () => {
    return {
      currentPage: 1,
    };
  },
  methods: {
    getDayFromCell(page, row, cell) {
      return (page - 1) * 20 + (row - 1) * 4 + cell;
    },
    answered(page, row, cell) {
      const n = this.getDayFromCell(page, row, cell);
      if (!this.$user || !this.$user.answered_days) return false;
      return this.$user.answered_days.includes(n);
    },
    getDateText(page, row, cell) {
      const n = this.getDayFromCell(page, row, cell);
      const date = new Date("2021/07/01 00:00:00");
      date.setDate(date.getDate() - 100 + n - 1);
      const m = date.getMonth() + 1;
      const d = date.getDate();
      return `${m}月${d}日`;
    },
  },
  mounted() {
    if (this.$route.query.section) {
      this.currentPage = +this.$route.query.section;
    }
    const swiper = new Swiper(".swiper-container", {
      pagination: {
        el: ".swiper-pagination",
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      on: {
        slideChange: () => {
          this.currentPage = swiper.activeIndex + 1;
        },
      },
    });
    swiper.slideTo(this.currentPage - 1);
  },
};
</script>

<style scoped>
.main {
  width: 100%;
  /* height: 21.15rem; */
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
  width: 0.99rem;
  height: 1.02rem;
}
.header span {
  font-size: 0.6rem;
  color: #fff;
  font-weight: bold;
  margin-left: 0.2rem;
}
.title {
  width: 6.39rem;
  height: 1.15rem;
  background: url(/images/3-my-title.png) no-repeat;
  background-size: 100% 100%;
  font-size: 0.66rem;
  color: #fff;
  margin: auto;
  margin-top: 0.5rem;
}
.content {
  width: 9.6rem;
  height: 70vh;
  background: #fff;
  border: 2px solid #c51923;
  margin: auto;
  margin-top: 0.6rem;
  position: relative;
}
.swiper-container {
  width: 100%;
  height: 75vh;
}
.swiper-slide {
  width: 100%;
  height: 70rem;
}
.swiper-slide ul {
  width: 100%;
  padding: 0.1rem 0.3rem 0.3rem 0.3rem;
}
.swiper-slide ul li {
  width: 100%;
  height: 13.6vh;
  border-bottom: 1px dashed #c9bc9c;
}
.list li:last-child {
  border: none;
}
.list li {
  display: flex;
  display: -webkit-flex;
  align-items: center;
}
.list li a {
  width: 1.9rem;
  height: 1.9rem;
  border-radius: 10px;
  background: #e0d7c4;
  margin-left: 0.5rem;
  overflow: hidden;
  position: relative;
  display: flex;
}
.list li a img {
  width: 100%;
  max-height: 1.35rem;
  object-fit: contain;
  text-align: center;
  padding: 0 0.2rem;
}
.list li a span {
  width: 100%;
  height: 0.48rem;
  line-height: 0.48rem;
  font-size: 0.24rem;
  text-align: center;
  padding: 0 0.1rem;
  display: block;
  background: #614c3f;
  position: absolute;
  bottom: 0;
  left: 0;
  color: #fff;
}
.list li a:first-child {
  margin-left: 0;
}
.swiper-pagination-bullet-active {
  opacity: 1;
  background: red;
}
.swiper-button-prev,
.swiper-container-rtl .swiper-button-next {
  background: #c51923;
  width: 0.5rem;
  height: 0.5rem;
  top: 73.9vh;
  left: 3rem;
  background: url(/images/3-my-arrow-l.png) no-repeat;
  background-size: 100% 100%;
}
.swiper-button-next,
.swiper-container-rtl .swiper-button-prev {
  background: #c51923;
  width: 0.5rem;
  height: 0.5rem;
  background: url(/images/3-my-arrow-r.png) no-repeat;
  background-size: 100% 100%;
  top: 73.9vh;
  right: 3rem;
}
.swiper-button-prev:after,
.swiper-button-next:after {
  font-size: 0;
}
.swiper-container-horizontal > .swiper-pagination-bullets {
  bottom: 5px;
}
:root {
  --swiper-theme-color: #c61c22;
}
</style>