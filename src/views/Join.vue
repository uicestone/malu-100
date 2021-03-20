<template lang="pug">
.main
  img.content-title(src="/images/2-content-title.png")
  p.tips 我是一名
  .select(@click="toggleDropDown")
    .text.ellipsis
      | {{ selectedUnit }}
  h1.tip1 党员
  img.tipsImg(src="/images/2-attend-text.png")
  .selectList(v-if="showDropDown")
    .list
      .options(v-for="o in orgs")
        .title {{ o.catName }}
        ul.optionList(v-for="u in o.units")
          li(@click="selectedUnit = u; toggleDropDown()") {{ u }}
  .btn.flexCenter(@click="submit") 确认
</template>

<script>
import { getOption, updateUser } from "@/helpers/resource";

export default {
  data: () => {
    return {
      showDropDown: false,
      selectedUnit: "",
      orgs: [],
    };
  },
  methods: {
    toggleDropDown() {
      this.showDropDown = !this.showDropDown;
    },
    async submit() {
      if (!this.selectedUnit) return;
      await updateUser(this.$openid, { organization: this.selectedUnit });
      this.$router.push("/countdown");
    },
  },
  async created() {
    this.orgs = await getOption("malu_organizations");
  },
};
</script>

<style scoped>
.main {
  width: 100%;
  height: 21.15rem;
  background: url(/images/2-content-bg.png) no-repeat;
  background-size: 12.19rem 21.65rem;
  background-position: center center;
  position: relative;
  padding-top: 6.3rem;
}
.content-title {
  width: 4rem;
  position: absolute;
  left: 50%;
  margin-left: -2rem;
  top: 1.2rem;
}
.tips {
  width: 100%;
  text-align: center;
  color: #fff;
  font-size: 0.8rem;
  line-height: 0.8rem;
}
.select {
  width: 7.14rem;
  height: 1.31rem;
  background: url(/images/2-content-select.png) no-repeat;
  background-size: 100% 100%;
  margin: auto;
  position: relative;
  margin-top: 0.4rem;
}
.text {
  width: 6.24rem;
  height: 1.18rem;
  position: absolute;
  left: 0;
  top: 0.04rem;
  font-size: 0.6rem;
  line-height: 1.18rem;
  padding: 0 0.5rem;
  color: #b18147;
}
.selectList {
  width: 7.14rem;
  height: 5.93rem;
  background: url(/images/2-content-select-container.png) no-repeat;
  background-size: 100% 100%;
  position: absolute;
  left: 50%;
  margin-left: -3.57rem;
  top: 9.1rem;
  padding: 0.5rem 0.3rem;
}
.list {
  width: 100%;
  height: 100%;
  overflow: auto;
}
.tip1 {
  width: 100%;
  font-size: 0.7rem;
  line-height: 0.7rem;
  text-align: center;
  margin-top: 0.6rem;
  color: #fff;
}
.tipsImg {
  width: 9.07rem;
  height: 4.82rem;
  margin: auto;
  margin-top: 1.2rem;
}
.btn {
  width: 4.8rem;
  height: 1.34rem;
  background: url(/images/6-btn-submit-bg.png) no-repeat;
  background-size: 100% 100%;
  margin: auto;
  font-size: 0.8rem;
  font-weight: bold;
  color: #614c3f;
  margin-top: 1.6rem;
}
.options {
  width: 100%;
  height: auto;
  margin-bottom: 0.6rem;
}
.title {
  width: 100%;
  font-size: 0.7rem;
  font-weight: bold;
  line-height: 0.7rem;
  text-align: center;
  color: #804e21;
  overflow: hidden;
  margin-bottom: 0.4rem;
}
.optionList {
  width: 100%;
}
.optionList li {
  width: 100%;
  height: 0.75rem;
  text-align: center;
  font-size: 0.5rem;
  line-height: 0.75rem;
  color: #b18147;
  overflow: hidden;
  margin-top: 0.2rem;
}
.optionList .current {
  color: #fff;
  background: -webkit-linear-gradient(to bottom, #c89f62, #9f6d3c);
  background: linear-gradient(to bottom, #c89f62, #9f6d3c);
  border-radius: 500px;
}
</style>