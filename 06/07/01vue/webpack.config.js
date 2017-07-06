module.exports = {
    //   start   entry 
    entry: {
        main: "./index.js"
    },
    output: {
        filename: "./bulid.js"
    },
    // module
    module: {
        loaders: [{
                test: /.css$/, //只有以.css结尾的文件我才操作
                loader: 'style-loader!css-loader!autoprefixer-loader'

            }, {
                test: /.less$/, //只有以.css结尾的文件我才操作
                loader: 'style-loader!css-loader!autoprefixer-loader!less-loader'

            }, {
                test: /.jpg$/,
                loader: 'url-loader?limit=4096'
            },
            {
                test: /.(ttf|jpg|png|svg)$/,
                loader: 'url-loader?limit=4096'
            }

        ]
    }

}