const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer:{
    open:true,
    historyApiFallback: true,
    allowedHosts:"all",
    proxy:{
      '/api':{
        target:'http://www.davili.cn',
        changeOrigin:true,
        pathRewrite:{
          '/api':''
        }
      }
    }
  }
})
