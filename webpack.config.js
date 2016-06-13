var path = require("path");
var webpack = require("webpack");
var phaserModule = path.join(__dirname, '/node_modules/phaser/');
var phaser = path.join(phaserModule, 'build/custom/phaser-split.js');
var pixi = path.join(phaserModule, 'build/custom/pixi.js');
var p2 = path.join(phaserModule, 'build/custom/p2.js');

module.exports = {
    context: path.resolve(__dirname, "app"),
    entry: [
        "./index.html",
        "./main.js"
    ],
    output: {
        path: path.resolve(__dirname, "dist"),
        //publicPath: "dist",
        filename: "bundle.js"
    },
    devtool: "source-map",
    module: {
        loaders: [
            {
                test: /\.js$/,
                include: path.join(__dirname, "app"),
                loader: "babel",
                query: {
                    presets: ["es2015"]
                }
            },
            {
                test: /\.html$/,
                loader: "file?name=[name].[ext]"
            },
            {
                test: /\.png$/,
                loader: "file?name=[name].[ext]"
            },
            {
                test: /\.json$/,
                loader: "file"
            },
            { test: /pixi\.js/, loader: 'expose?PIXI' },
            { test: /phaser-split\.js$/, loader: 'expose?Phaser' },
            { test: /p2\.js/, loader: 'expose?p2' }
        ]
    },
    debug: true,
    resolve: {
        alias: {
            phaser: phaser,
            pixi: pixi,
            p2: p2
        },
        extensions: ["", ".js"],
        modules: [
            "node_modules"
        ]
    }
};