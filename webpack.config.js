module.exports = {
    entry: "./src/app.js",
    output: {
        path: "./public/javascripts",
        publicPath: "/javascripts/",
        filename: "build.js"
    },
    module: {
        loaders: [{
                test: /\.json$/,
                loader: "json-loader"
            }, {
                test: /\.styl$/,
                loader: "style!css!stylus"
            }, {
                test: /\.html$/,
                loader: "html"
            }, {
                test: /\.js[x]?$/,
                exclude: /node_modules/,
                loader: 'babel?presets[]=stage-0&presets[]=es2015&plugins[]=transform-object-assign'
            }
        ]
    },
    devServer: {
        proxy: {
            '/api/*': {
                target: 'http://localhost:3000/',
                // IMPORTANT! changeOrigin必须设置，否则转发的HTTP请求里不会使用目标URL的HOST
                changeOrigin: true
            }
        }
    },

    // node: {
    //     fs: 'empty',
    //     net: 'empty',
    //     tls: 'empty'
    // }


    // target: 'node'
}
