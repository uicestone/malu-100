import Vue from "vue";
import App from "./App.vue";
import wechatRedirect from "./helpers/wechatRedirect";
import router from "./router";

Vue.config.productionTip = false;

(async () => {
  const result = await wechatRedirect();
  result &&
    new Vue({
      router,
      render: (h) => h(App),
    }).$mount("#app");
})();
