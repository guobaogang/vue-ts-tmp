const path = require("path");
const VueLoaderPlugin = require("vue-loader/lib/plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
    mode: "development",
    entry: "./src/main.ts",
    output: {
        filename: "bundle.[chunkhash].js",
        path: path.join(__dirname, "dist"),
    },
    resolve: {
        alias: {
            vue$: "vue/dist/vue.esm.js",
            "@": path.join(__dirname, "..", "src"),
        },
        extensions: [".vue", ".ts", ".tsx", ".js"],
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: ["babel-loader"],
                exclude: /node_modules/,
            },
            {
                test: /\.(ts|tsx)$/,
                loader: "ts-loader",
                exclude: /node_modules/,
                options: {
                    appendTsSuffixTo: [/\.vue$/],
                },
            },
            {
                test: /\.vue$/,
                use: ["vue-loader"],
            },
            {
                test: /\.(ts|vue)$/,
                loader: "eslint-loader",
                enforce: "pre",
                //指定检查的目录
                include: [path.resolve(__dirname, 'src')]
            },
            {
                test: /\.less$/,
                loader: 'style-loader!css-loader!less-loader'
            },
        ],
    },
    plugins: [
        new CleanWebpackPlugin(),
        new VueLoaderPlugin(),
        new HtmlWebpackPlugin({
            template: "htmlTmp/index.html",
        }),
    ],
    devServer: {
        contentBase: path.join(__dirname, "dist"), // dist目录开启服务器
        compress: true, // 是否使用gzip压缩
        port: 9000, // 端口号
        open: true, // 自动打开网页
    },
};
