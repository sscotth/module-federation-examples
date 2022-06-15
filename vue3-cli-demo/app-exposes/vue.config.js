const { defineConfig } = require('@vue/cli-service');
const webpack = require('webpack');

module.exports = defineConfig({
  pages: {
    index: {
      entry: './src/index.ts',
    },
  },
  publicPath: 'auto',
  configureWebpack: {
    optimization: {
      splitChunks: false,
    },
    plugins: [
      new webpack.container.ModuleFederationPlugin({
        name: 'app_exposes',
        filename: 'remoteEntry.js',
        exposes: {
          './App.vue': './src/App.vue',
          './HelloWorld.vue': './src/components/HelloWorld.vue',
          './AboutView.vue': './src/views/AboutView.vue',
          './HomeView.vue': './src/views/HomeView.vue',
        },
        shared: {
          vue: {
            singleton: true,
          },
        },
      }),
    ],
  },
  transpileDependencies: true,
});
