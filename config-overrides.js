const { override, fixBabelImports,addWebpackAlias,addDecoratorsLegacy } = require('customize-cra')
const path = require('path')
  
  module.exports = override(
      fixBabelImports('import', {
        libraryName: 'antd-mobile',
        style: 'css',
      }),
      addWebpackAlias({
        assets: path.resolve(__dirname, './src/assets'),
        pages: path.resolve(__dirname, './src/pages'),
        components: path.resolve(__dirname, './src/components'),
        utils: path.resolve(__dirname, './src/utils'),
        store: path.resolve(__dirname, './src/store')
      }),
      addDecoratorsLegacy()    
  );