module.exports = {
  publicPath: process.env.PUBLIC_PATH,
  devServer: {
    // host: "malu100.com",
    // port: "80",
  },
  chainWebpack: (config) => {
    config.plugin("define").tap((args) => {
      let v = JSON.stringify(require("./package.json").version);
      args[0]["process.env"]["VERSION"] = v;
      return args;
    });
  },
};
