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
  },
};

export default globalVars;
