import { getAuthUser, wechatLogin } from "./resource";

const appId = "wx37d297409de16479";
const currentUrl = location.href;
// const currentUrl = "http://malu100.com";
const query = window.location.search
  .substr(1)
  .split("&")
  .reduce((query, pair) => {
    const [k, v] = pair.split("=");
    query[k] = v;
    return query;
  }, {});

export default async function wechatRedirect(userInfo = false, state = "") {
  if (query.clear) {
    window.localStorage.clear();
  }
  if (query.openid) {
    window.localStorage.setItem("openid", query.openid);
  }
  if (window.localStorage.getItem("openid")) {
    window.localStorage.removeItem("user");
    if (!window.localStorage.getItem("user")) {
      const user = await getAuthUser(window.localStorage.getItem("openid"));
      window.localStorage.setItem("user", JSON.stringify(user));
    }
    return true;
  }
  if (query.code) {
    const { openid, user } = await wechatLogin(query.code);
    window.localStorage.setItem("openid", openid);
    window.localStorage.setItem("user", JSON.stringify(user));
  } else {
    let url = `https://open.weixin.qq.com/connect/oauth2/authorize?appid=${appId}&redirect_uri=${encodeURIComponent(
      currentUrl
    )}&response_type=code&scope=${
      userInfo ? "snsapi_userinfo" : "snsapi_base"
    }&state=${encodeURIComponent(state)}`;
    window.location.href = url;
    return false;
  }
  return true;
}
