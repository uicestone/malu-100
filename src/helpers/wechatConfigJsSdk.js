import { http } from "./resource";

export default async function wechatConfigJsSdk(url) {
  const args = (await http.get("/wx/jsapi-args?url=" + encodeURIComponent(url)))
    .data;
  global.wx.config({
    debug: window.location.search.includes("debug"),
    ...args,
    jsApiList: [
      "startRecord",
      "stopRecord",
      "onVoiceRecordEnd",
      "playVoice",
      "pauseVoice",
      "stopVoice",
      "onVoicePlayEnd",
      "uploadVoice",
    ],
  });
}
