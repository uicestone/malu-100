import { http } from "./resource";

export default async function wechatConfigJsSdk() {
  const url = window.isIos ? window.entranceUrl : window.location.href;
  if (window.debug) {
    alert("Debug Mode, config on url:" + url);
  }
  const args = (await http.get("/wx/jsapi-args?url=" + encodeURIComponent(url)))
    .data;
  window.wx.config({
    debug: window.debug,
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
  window.wx.error((err) => {
    alert("微信配置错误：" + JSON.stringify(err));
  });
}
