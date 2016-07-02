module.exports = {
    entry: "./src/main.js",
    output: {
        path: "./public/js",
        publicPath: "/js/",
        filename: "bundle.js"
    },
    module: {
        loaders: [{
            test: /\.vue$/,
            loader: 'vue'
        }, {
            test: /\.json$/,
            loader: "json-loader"
        }, {
            test: /\.styl$/,
            loader: "style!css!stylus"
        }, {
            test: /\.html$/,
            loader: "html"
        }, {
            test: /\.less$/,
            loader: "style!css!less"
        }, {
            test: /\.js$/,
            loader: 'babel?presets[]=stage-0&presets[]=es2015&plugins[]=transform-object-assign',
            exclude: /node_modules/
        }]
    },
    babel: {
        presets: ['es2015'],
        plugins: ['transform-runtime']
    },
    resolve: {
        // require时省略的扩展名，如：require('module') 不需要module.js
        extensions: ['', '.js', '.vue'],
        // 别名，可以直接使用别名来代表设定的路径以及其他
        // alias: {
        //     filter: path.join(__dirname, './src/filters'),
        //     components: path.join(__dirname, './src/components')
        // }
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
    devtool: 'eval-source-map'
}
