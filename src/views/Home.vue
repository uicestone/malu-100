<template lang="pug">
.main
  .start
    img.img(src="/images/1-home-img.png")
    a.link(@click="start")
</template>

<script>
export default {
  methods: {
    start() {
      if (this.$user.organization) {
        this.$router.push("countdown");
      } else {
        this.$router.push("join");
      }
    },
  },
};
</script>

<style scoped>
.main {
  width: 100%;
  /* height: 21.15rem; */
  background: url(/images/1-home-bg.png) no-repeat;
  background-size: cover;
  background-position: center center;
  /* padding-top: 16.47rem; */
  position: relative;
}
.start {
  position: absolute;
  bottom: 3rem;
  margin-bottom: -1.64rem;
  left: 0;
  right: 0;
}
.img {
  width: 6.1rem;
  height: 2.23rem;
  margin: auto;
}
.link {
  width: 6.11rem;
  height: 0.96rem;
  display: block;
  background: url(/images/1-home-btn.png) no-repeat;
  background-size: 100% 100%;
  margin: auto;
  margin-top: 0.5rem;
}
</style>