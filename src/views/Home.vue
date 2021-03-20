<template lang="pug">
.main
  img.img(src="/images/1-home-img.png")
  router-link.link(to="/join")
</template>

<style scoped>
.main {
  width: 100%;
  height: 21.15rem;
  background: url(/images/1-home-bg.png) no-repeat;
  background-size: cover;
  background-position: center center;
  padding-top: 16.47rem;
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