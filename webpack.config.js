var path = require("path");
var webpack = require("webpack");

module.exports = {
    context: path.resolve(__dirname, "app"),
    entry: [
        "babel-polyfill",
        "./index.html"
    ],
    output: {
        pathinfo: true,
        path: path.resolve(__dirname, "dist"),
        publicPath: "./dist/",
        filename: "bundle.js"
    },
    devtool: "source-map",
    module: {
        loaders: [
            {
                test: /\.js$/,
                include: path.join(__dirname, "app"),
                loader: "babel-loader",
                query: {
                    presets: ["es2015"]
                }
            },
            {
                test: /\.html$/,
                loader: "file?name=[name].[ext]"
            }
        ]
    },
    debug: true
};