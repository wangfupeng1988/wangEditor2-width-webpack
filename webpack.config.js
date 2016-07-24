module.exports = {
    entry: "./entry.js",
    output: {
        path: __dirname,
        filename: "bundle.js"
    },
    module: {
        loaders: [
            { 
                test: /\.(gif|jpg|png|woff|svg|eot|ttf)\??.*$/, 
                loader: 'url-loader?limit=50000&name=[path][name].[ext]'
            },
            { 
                test: /\.css$/, 
                loader: "style!css!"
            }
        ]
    }
};