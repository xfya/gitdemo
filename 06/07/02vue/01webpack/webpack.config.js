module.exports = {
    entry: {
        main: "./js/index.js"
    },
    output: {
        path: __dirname + '/dist/',
        filename: 'build.js'
    },
    module: {
        loaders: [{
            test: /.css$/, //只有以.css结尾的文件我才操作
            loader: 'style-loader!css-loader!autoprefixer-loader'

        }, {
            test: /.(ttf|jpg|png|svg)$/,
            loader: 'url-loader?limit=4096'
        }],
        plugins: [

        ]
    }
}