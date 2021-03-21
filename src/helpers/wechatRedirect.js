import { getAuthUser, wechatLogin } from "./resource";

const appId = "wxccb5433a51ab1bb4";
const homeUrl = "http://100.malu.hbird.com.cn";
// const homeUrl = "http://malu100.com";

export default async function wechatRedirect(userInfo = false, state = "") {
  const query = window.location.search
    .substr(1)
    .split("&")
    .reduce((query, pair) => {
      const [k, v] = pair.split("=");
      query[k] = v;
      return query;
    }, {});
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
      homeUrl
    )}&response_type=code&scope=${
      userInfo ? "snsapi_userinfo" : "snsapi_base"
    }&state=${encodeURIComponent(state)}`;
    window.location.href = url;
    return false;
  }
  return true;
}
