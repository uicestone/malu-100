const globalVars = {
  install(Vue) {
    Object.defineProperty(Vue.prototype, "$user", {
      get() {
        const user = JSON.parse(window.localStorage.getItem("user"));
        return user;
      },
      set(v) {
        window.localStorage.setItem("user", JSON.stringify(v));
      },
    });
    Object.defineProperty(Vue.prototype, "$openid", {
      get() {
        const openid = window.localStorage.getItem("openid");
        return openid;
      },
      set(v) {
        window.localStorage.setItem("openid", v);
      },
    });
    Object.defineProperty(Vue.prototype, "$sectionNames", {
      get() {
        return ["南湖星火", "峥嵘岁月", "奋辑争先", "不负韶华", "赓续辉煌"];
      },
    });
  },
};

export default globalVars;
