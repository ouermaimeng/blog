const { addDecoratorsLegacy, overrideDevServer, fixBabelImports, addWebpackAlias, override, adjustStyleLoaders } = require("customize-cra");
const path = require("path");

function resolve (dir) {
  return path.join(__dirname, dir);
}

const devServerConfig = () => config => ({
  ...config,
  port: 3000,
  proxy: {
    "/api": {
      target: "http://192.168.70.10:8080",
      pathRewrite: { "^/api": "" }
    }
  }
})

module.exports = {
  webpack: override(
    addDecoratorsLegacy(),
    fixBabelImports(["import", { libraryName: "antd", style: "css" }]),
    addWebpackAlias({
      ["@"]: resolve("src")
    }),
    // 重写部分module rule 支持css-modules-typescript-loader 
    adjustStyleLoaders((loader) => {
      // css modules reg
      const reg = /\.module\.(scss|sass)$/
      if (loader.test.toString() === reg.toString()) {
        loader.use = ['style-loader', 'css-modules-typescript-loader', {
          loader: 'css-loader',
          options: {
            modules: true,
            localsConvention: 'camelCaseOnly'
          }
        }, 'sass-loader']
      }
    })
  ),
  devServer: overrideDevServer(devServerConfig())
}
