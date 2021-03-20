<template lang="pug">
.main
  img.title(src="/images/6-video-title.png")
  .box
    input#filepicker.uploadVideo_input(type="file", accept="video/mp4")
    video(
      src="",
      poster="images/6-video-btn.png",
      webkit-playsinline="true",
      playsinline="true",
      x-webkit-airplay="allow",
      x5-video-player-type="h5"
    )
  .tips
    | 视频视频视频视频视频视频视频视频视频视频视频视频视频视频视频视频视频视频
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
  position: relative;
}
.title {
  width: 100%;
}
.box {
  width: 3.5rem;
  height: 3.5rem;
  position: relative;
  margin: auto;
  margin-top: 1.7rem;
}
video {
  width: 100%;
  height: 100%;
  object-fit: fill;
  display: block;
  position: absolute;
  left: 0;
  top: 0;
}
.box img {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
}
.tips {
  width: 100%;
  margin-top: 2.6rem;
  padding: 0 1.3rem;
  font-size: 0.4rem;
  line-height: 0.8rem;
  text-indent: 2em;
  color: #fff;
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
.uploadVideo_input {
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  opacity: 0;
  z-index: 2;
}
</style>