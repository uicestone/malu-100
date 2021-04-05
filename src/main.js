import Vue from "vue";
import App from "./App.vue";
import wechatRedirect from "./helpers/wechatRedirect";
import router from "./router";
import globalVars from "./plugins/globalVars";

Vue.config.productionTip = false;
Vue.use(globalVars);

(async () => {
  const result = await wechatRedirect(true);
  result &&
    new Vue({
      router,
      render: (h) => h(App),
    }).$mount("#app");
})();
