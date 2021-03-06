const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: path.resolve(__dirname, './src/index.tsx'),
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, './build'),
    },
    resolve: {
        alias: {
            components: path.resolve(__dirname, 'src/components'),
            src: path.resolve(__dirname, 'src'),
        },
        extensions: ['.jsx', '.js', '.tsx', '.ts'],
    },
    devtool:
        process.env.NODE_ENV === 'production'
            ? 'hidden-source-map'
            : 'eval-source-map',
    devServer: {
        compress: true,
        port: 8000,
        client: {
            logging: 'info',
        },
        historyApiFallback: true,
    },
    module: {
        rules: [
            {
                test: /\.(j|t)sx?$/,
                exclude: /node_modules/,
                use: ['babel-loader'],
            },
            // {
            //     test: /\.css$/,
            //     use: [
            //         "style-loader",
            //         {
            //             loader: "css-loader",
            //             options: {
            //                 importLoaders: 1,
            //                 modules: true,
            //             },
            //         },
            //     ],
            //     include: /\.module\.css$/,
            // },
            // {
            //     test: /\.css$/,
            //     use: ["style-loader", "css-loader"],
            //     exclude: /\.module\.css$/,
            // },
            {
                test: /\.(le|c)ss$/i,
                exclude: /\.module\.(le|c)ss/i,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            modules: {
                                mode: 'icss',
                                localIdentName: '[name]___[hash:base64:5]'
                            },
                        },
                    },
                    'less-loader'
                ]
            },
            {
                test: /\.module\.(le|c)ss$/i,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            modules: {
                                mode: 'local',
                                localIdentName: '[name]___[hash:base64:5]',
                            },
                        },
                    },
                    'less-loader'
                ]
            },
            {
                test: /\.(png|jpe?g|gif)$/i,
                use: [
                    {
                        loader: 'file-loader',
                    },
                ],
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html',
        }),
    ]
}