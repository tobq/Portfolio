const path = require("path");

const config = {
    entry: "./resources/js/main.tsx",
    output: {
        path: path.resolve(__dirname, "public/js"),
        publicPath: "/public/",
        filename: "bundle.js",
    },
    module: {
        rules: [
            {
                resolve: {extensions: ['.tsx', '.ts', '.js']},
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/
            },
            {
                test: /\.s?css$/,
                use: ["style-loader", "css-loader", "sass-loader"]
            }
        ]
    },
};

module.exports = config;