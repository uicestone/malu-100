<template lang="pug">
.main
  .content-title
    .icon-100
      img(src="/images/2-content-icon.png")
    .split
    .icon-malu
      img(src="/images/2-content-title.png")
  //- .content
  img.screen.title(
    src="/images/achievement-title.png",
    :class="{ hide: showScreen !== 1 }"
  )
  img.screen.screen-2(
    src="/images/achievement-2.png",
    :class="{ hide: showScreen !== 2 }"
  )
  img.screen.screen-3(
    src="/images/achievement-3.png",
    :class="{ hide: showScreen !== 3 }"
  )
  .screen-4.screen(:class="{ hide: showScreen !== 4 }")
    img(src="/images/achievement-4.png")
    .username {{ $user.name }}
    a.btn.flexCenter(@click="showShareHint = true") 分享到朋友圈
  .share-hint(v-if="showShareHint", @click="showShareHint = false")
    p 请点击右上角
    p 发送给群和朋友
    p 或分享到朋友圈
    img(src="/images/share-arrow.png")
</template>

<script>
import sleep from "@/helpers/sleep";

export default {
  data() {
    return {
      showScreen: 1,
      showShareHint: false,
    };
  },
  async mounted() {
    await sleep(10000);
    this.showScreen = 2;
    await sleep(10000);
    this.showScreen = 3;
    await sleep(10000);
    this.showScreen = 4;
  },
};
</script>

<style scoped>
.main {
  width: 100%;
  background: url(/images/achievement-bg.png) no-repeat;
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
.screen {
  animation: fadeInAndOut 7s;
  opacity: 0;
}
img.screen,
.screen img {
  margin: 0 auto;
  max-width: 100%;
  width: 10rem;
}
.title {
  width: 9rem;
}
.hide {
  display: none;
}
.content {
  display: flex;
  width: 100%;
}
.screen-4 {
  position: relative;
  animation: fadeIn 1s;
  opacity: 1;
}
.username {
  position: absolute;
  top: 4.7rem;
  width: 100%;
  text-align: center;
  font-size: 0.9rem;
}
@keyframes fadeInAndOut {
  0%,
  100% {
    opacity: 0;
  }
  10%,
  90% {
    opacity: 1;
  }
}
@keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
.btn {
  width: 4.8rem;
  height: 1.34rem;
  background: url(/images/6-btn-submit-bg.png) no-repeat;
  background-size: 100% 100%;
  margin: auto;
  font-size: 0.6rem;
  font-weight: bold;
  color: #614c3f;
  margin-top: 1rem;
}
.share-hint {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.7);
  z-index: 20;
  text-align: right;
  padding-right: 3rem;
  padding-top: 4rem;
  font-weight: bold;
  color: white;
}
.share-hint img {
  position: absolute;
  right: 0.5rem;
  top: 0.5rem;
  width: 2rem;
}
.share-hint p {
  font-size: 0.7rem;
}
</style>