import Axios from "axios";

export const http = Axios.create({
  baseURL: "http://pbpark.hbird.com.cn/wp-json/v1",
});

export async function getPosts(params) {
  const res = await http.get("pbpark/posts", { params });
  return res.data;
}

export async function getPostDetail(id) {
  const res = await http.get("pbpark/posts/" + id);
  return res.data;
}

export async function getTerm(name) {
  const res = await http.get("pbpark/terms/" + name);
  return res.data;
}

export async function getOption(key) {
  const res = await http.get("pbpark/option/" + key);
  return res.data;
}

export async function wechatLogin(code) {
  const res = await http.get("wx/auth", { params: { code } });
  return res.data;
}

export async function getAuthUser(openid) {
  const res = await http.get("wx/auth/user", { params: { openid } });
  return res.data;
}

export async function updateUser(openid, set) {
  const res = await http.post("pbpark/user", set, { params: { openid } });
  return res.data;
}

export async function get100Days() {
  const res = await http.get("pbpark/100d");
  return res.data;
}
