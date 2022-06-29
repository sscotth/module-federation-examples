const { defineConfig } = require('@vue/cli-service');
const webpack = require('webpack');

module.exports = defineConfig({
  pages: {
    index: {
      entry: './src/index.ts',
    },
  },
  publicPath: 'http://localhost:8085/',
  configureWebpack: {
    optimization: {
      splitChunks: false,
    },
    devServer: {
      headers: { 'Access-Control-Allow-Origin': '*' },
    },
    plugins: [
      new webpack.container.ModuleFederationPlugin({
        name: 'app_exposes',
        filename: 'remoteEntry.js',
        library: { type: 'umd', name: 'app_exposes' },
        exposes: {
          // For vue only imports
          './App.vue': './src/App.vue',
          './HelloWorld.vue': './src/components/HelloWorld.vue',
          './AboutView.vue': './src/views/AboutView.vue',
          './HomeView.vue': './src/views/HomeView.vue',
          './VueButton.vue': './src/components/VueButton.vue',

          // For react imports
          './App': './src/bootstrap/App.bootstrap.ts',
          './HelloWorld': './src/bootstrap/HelloWorld.bootstrap.ts',
          './AboutView': './src/bootstrap/AboutView.bootstrap.ts',
          './HomeView': './src/bootstrap/HomeView.bootstrap.ts',
          './VueButton': './src/bootstrap/VueButton.bootstrap.ts',
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
