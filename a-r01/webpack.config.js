const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const packageJsonDeps = require("./package.json").dependencies;
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

module.exports = {
    entry: "./src/index.tsx",
    output: {path: path.join(__dirname, "build"), filename: "index.bundle.js"},
    mode: process.env.NODE_ENV || "development",
    resolve: {
        extensions: [".tsx", ".ts", ".js"],
    },
    devServer: {
        static: {
            directory: path.join(__dirname, 'src'),
        }, port: 9000, compress: true,
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ["babel-loader"],
            },
            {
                test: /\.(ts|tsx)$/,
                exclude: /node_modules/,
                use: ["ts-loader"],
            },
            {
                test: /\.(css|scss)$/,
                use: ["style-loader", "css-loader"],
            },
            {
                test: /\.(jpg|jpeg|png|gif|mp3|svg)$/,
                use: ["file-loader"],
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(__dirname, "src", "index.html"),
        }),
        new ModuleFederationPlugin({

                // For remotes (please adjust)
                name: "r01",
                library: {type: "var", name: "r01"},
                filename: "remoteEntry.js",
                exposes: {
                    './render-form': './src/components/RenderForm.tsx',
                },

                shared: {
                    "react": {singleton: true, eager: true, requiredVersion: packageJsonDeps.react},
                    "react-dom": {singleton: true, eager: true, requiredVersion: packageJsonDeps["react-dom"]},
                }
            }
        ),
    ],
};
