const path = require('path')

const {
    override,
    fixBabelImports,
    addLessLoader,
    addWebpackAlias,
    addWebpackModuleRule,
    addWebpackPlugin,
    addBabelPlugins,
    useBabelRc
} = require('customize-cra')

module.exports = override(

    addWebpackAlias({
        '@': path.resolve(__dirname, 'src'),
        'components': path.resolve(__dirname, 'src/components'),
        'utils': path.resolve(__dirname, 'src/utils'),
        'views': path.resolve(__dirname, 'src/views'),
        'img': path.resolve(__dirname, 'src/img')
    }),
    useBabelRc(),
    // addWebpackPlugin()

)

