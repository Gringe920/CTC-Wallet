module.exports = {
    baseUrl: '/',
    assetsDir: "static",
    productionSourceMap: process.env.NODE_ENV === 'production' ? false : true,
    devServer: {
        proxy: {
            '/api': {
                target: 'https://www.goaladdin.org/',
                secure: false,
                changeOrigin: true,
                pathRewrite: {}
            },
            '/service': {
                target: 'https://www.goaladdin.org/',
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