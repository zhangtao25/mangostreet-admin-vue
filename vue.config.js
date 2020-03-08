module.exports = {
  devServer: {
    port:8081,
    proxy: {
      "/api": {
        target: 'http://http://192.168.1.14/:8001',
        changeOrigin: true, // 是否改变域名
        ws: true,
        pathRewrite: {
          // 路径重写
          "/api": "/" // 这个意思就是以api开头的，定向到哪里, 如果你的后边还有路径的话， 会自动拼接上
        }
      }
    }
  }
};