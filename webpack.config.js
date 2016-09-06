module.exports = {
    entry: './entry.js', //Need to bundle files
    output: {
        path: __dirname, //Output path
        filename: "./output/bundle.js"
    },
    module: {
        loaders: [{
            test: /\.js$/,
            exclude: /(node_modules|bower_components)/,
            loader: 'babel', // 'babel-loader' is also a legal name to reference
            query: {
                presets: ['es2015']
            }
        }]
    },
    devtool: 'source-map'
}
