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
      rules: [
        // {
        //   test: /\.(png|jpg|jpe|gif|svg)(\?.*)?$/,
        //   loader: 'url-loader',
        //   options: {
        //     limit: 10000, // 限制转化成base64的图片大小
        //     fallback: 'file-loader', // 超过10000byte，还要用 file-loader 做一次处理
        //     name: 'img/[name].[hash:8].[ext]', // 打包后的图片名称，8位hash值
        //   }
        // },
        // {
        //   test: /\.(png|jpe?g|gif)$/i,
        //   use: [
        //     'file-loader',
        //     {
        //       loader: 'url-loader',
        //       options: {
        //         limit: 8192, // 设定大于该值时才会生成单独的文件
        //         fallback: require.resolve('file-loader'), // 当超过限制时使用fallback指定的loader处理
        //         name: 'images/[name].[hash:7].[ext]' // 输出路径及文件名格式
        //       }
        //     },
        //   ]
        // },
        // ...其它加载器配置。比如 style-loader 和 css-loader。
      ]
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