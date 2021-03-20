<template lang="pug">
.main
  img.title(src="/images/6-voice-title.png")
  .box
    video(
      src="",
      controls="controls",
      poster="images/cover.jpg",
      webkit-playsinline="true",
      playsinline="true",
      x-webkit-airplay="allow",
      x5-video-player-type="h5"
    )
  .btn_box.flexBetween
    img(src="/images/6-voice-record.png")
    img(src="/images/6-voice-play.png")
  .btn.flexCenter 提交
</template>

<style scoped>
.main {
  width: 100%;
  height: 21.16rem;
  background: url(/images/3-bg.png) no-repeat;
  background-size: cover;
  background-position: center center;
  padding-top: 2.2rem;
}
.title {
  width: 100%;
}
.box {
  width: 7.7rem;
  height: 5.1rem;
  margin: auto;
  margin-top: 1.7rem;
}
video {
  width: 100%;
  height: 100%;
  object-fit: fill;
  display: block;
}
.btn_box {
  width: 7.7rem;
  margin: auto;
  margin-top: 0.9rem;
  padding: 0 2rem;
}
.btn_box img {
  width: 1.44rem;
  height: 1.44rem;
}
.btn {
  width: 4.7rem;
  height: 1.3rem;
  background: url(/images/6-btn-submit-bg.png) no-repeat;
  background-size: 100% 100%;
  position: absolute;
  left: 50%;
  margin-left: -2.35rem;
  top: 18.3rem;
  font-size: 0.6rem;
  font-weight: bold;
  color: #956134;
}
</style>