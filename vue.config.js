const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    // 'auto' | 'all' [string] here
    allowedHosts: 'all',
    // proxy: 'https://sinisaja.borneo-indobara.com/'
    // proxy: 'https://dev-cms.ugems.id/'
  },
})
