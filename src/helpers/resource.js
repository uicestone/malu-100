import Axios from "axios";

export const http = Axios.create({
  baseURL: "http://pbpark.hbird.com.cn/wp-json/v1/pbpark",
});

export async function getPosts(params) {
  const res = await http.get("posts", { params });
  return res.data;
}

export async function getPostDetail(id) {
  const res = await http.get("posts/" + id);
  return res.data;
}

export async function getTerm(name) {
  const res = await http.get("terms/" + name);
  return res.data;
}

export async function getOption(key) {
  const res = await http.get("option/" + key);
  return res.data;
}
