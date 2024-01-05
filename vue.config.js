// const { defineConfig } = require('@vue/cli-service')
const path = require('path')

// module.exports = defineConfig({
//   transpileDependencies: true,
//   runtimeCompiler: true,
//   chainWebpack: (config) => {
//     config.resolve.alias.set("vue$", "vue/dist/vue.esm.js");
//   },
// })

function resolve(dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  // runtimeCompiler: true,
  // publicPath: '/',
  outputDir: 'dist',
  chainWebpack: (config) => {
    config.resolve.alias.set("vue$", "vue/dist/vue.esm.js");
    config.module.rule('txt').test(/\.txt$/).use('raw-loader').end()
  },
  configureWebpack: {
    module: {
      unknownContextCritical: false,
      // rules: [
      //   {
      //     test: /\.vue$/,
      //     use: 'raw-loader',
      //   },
      // ],
    },
    resolve: {
      alias: {
        '@': resolve('src'),
        // '@': path.resolve('src'),
        // '@asssets': path.resolve('./src/assets')
      }
    },
  },
  // configureWebpack: () => {
  //   return {
  //     name: '',
  //     //new webpack.BannerPlugin('www.f2bpm.com 广州致博软件科技有限公司版权所有'),
  //     module: {
  //       unknownContextCritical:false,
  //     },
  //     resolve: {
  //       alias: {
  //         '@': resolve('./src'),
  //         '@asssets': resolve('./src/assets')
  //       }
  //     },
  //   }
  // }
}