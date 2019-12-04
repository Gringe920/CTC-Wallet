let appState = process.argv[4] === 'app';
process.env.appState = appState;
global.APP_STATE = appState;
const path = require('path');

module.exports = {
    publicPath: appState ? './static/' : '/',
    outputDir: appState ? 'D:\\rcpApp\\rcpApp\\static' : path.resolve(__dirname, "./dist"),
    assetsDir: appState ? "./" : "static",
    productionSourceMap: process.env.NODE_ENV === 'production' ? false : true,
    devServer: {
        proxy: {
            '/api': {
                target: 'http://47.52.229.139:9001/',
                secure: false,
                changeOrigin: true,
                pathRewrite: {}
            },
            '/service': {
                target: 'http://47.52.229.139:9001/',
                secure: false,
                changeOrigin: true,
                pathRewrite: {}
            },
        }
    },
    css: {
        loaderOptions: {
            sass: {
                prependData: `@import "~@/assets/css/config.scss";`
            },
        }
    },
    chainWebpack: config => {
        // config.plugin('html').tap(args => {
        //     // args[0].filename = "test.html";
        //     return args;
        // });
        if (appState) {
            config.plugin('html').tap(args => {
                args[0].filename = "D:\\rcpApp\\rcpApp\\index.html";
                return args;
            });

            config.plugin('copy').tap(args => {
                args[0][0].ignore.push('app/*');
                args[0][0].ignore.push('pdf/*');
                return args;
            });
        }
    }
}