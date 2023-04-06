require("dotenv").config()
const webpack = require("webpack")

module.exports = function override(config, env) {
    config.plugins.push(
        new webpack.ProvidePlugin({
            RPC_URL: JSON.stringify(process.env.RPC_URL || "https://testnet-rpc.orai.io"),
        }),
        new webpack.EnvironmentPlugin(["RPC_URL"]),
    )
    config.resolve.fallback = {
        buffer: false,
        crypto: false,
        events: false,
        path: false,
        stream: false,
        string_decoder: false,
    }
    return config
}
