"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.oraiConfig = void 0;
// data from https://github.com/cosmos/chain-registry/tree/master/testnets
var stargate_1 = require("@cosmjs/stargate");
var math_1 = require("@cosmjs/math");
exports.oraiConfig = {
    chainId: "Oraichain-testnet",
    rpcEndpoint: "testnet.rpc.orai.io",
    prefix: "orai",
    gasPrice: new stargate_1.GasPrice(math_1.Decimal.fromUserInput('1', 6), "orai"),
    feeToken: "orai",
};
