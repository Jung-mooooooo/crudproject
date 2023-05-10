const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,

  //npm run build target dir (backend)
  outputDir: "C:/Users/hjm01/git/crudbbb/src/main/resources/static",

  //npm run serve 프록시 설정
  //target : backend port
  //changeOrigin -> true => cros 문제 방지
  devServer: {
    proxy: {
      "/": {
        target: "http://localhost:5958",
        changeOrigin: true,
      },
    },
  },
});
