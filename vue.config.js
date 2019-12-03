module.exports = {
    baseUrl: '/',
    assetsDir: "static",
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
        config.plugin('html').tap(args => {
            // args[0].filename = "test.html";
            return args;
        });
    }
}