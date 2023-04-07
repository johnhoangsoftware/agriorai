"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.queryContract = exports.excecuteContract = exports.instantiateContract = void 0;
var amino_1 = require("@cosmjs/amino");
function instantiateContract(client, address, code) {
    return __awaiter(this, void 0, void 0, function () {
        var initMsg, info;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    initMsg = {
                        decimals: 6,
                        initial_balances: [{
                                address: address,
                                amount: "1000000",
                            },],
                        name: "foo coin",
                        symbol: "foo"
                    };
                    return [4 /*yield*/, client.instantiate(address, code, 
                        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                        // @ts-ignore
                        initMsg, "cw20 contract", 100, {
                            admin: address,
                        })];
                case 1:
                    info = _a.sent();
                    return [2 /*return*/, info.contractAddress];
            }
        });
    });
}
exports.instantiateContract = instantiateContract;
function excecuteContract(client, senderAddress, contractAddress, amount, recipient) {
    return __awaiter(this, void 0, void 0, function () {
        var transfer, res;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    transfer = {
                        transfer: {
                            amount: amount,
                            recipient: recipient
                        },
                    };
                    return [4 /*yield*/, client.execute(senderAddress, contractAddress, transfer, 'auto', 'Send 300 orai to orai1zze9d5xk2xa2g44xdf7g9eltlzvn5hm2h7fctk', [(0, amino_1.coin)(300, "orai")])];
                case 1:
                    res = _a.sent();
                    console.log("transfer token res:");
                    console.log(res);
                    return [2 /*return*/];
            }
        });
    });
}
exports.excecuteContract = excecuteContract;
function queryContract(client, contractAddress) {
    return __awaiter(this, void 0, void 0, function () {
        var queryToken, query_token_res;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    queryToken = {
                        token_info: {}
                    };
                    return [4 /*yield*/, client.queryContractSmart(contractAddress, queryToken)];
                case 1:
                    query_token_res = _a.sent();
                    console.log('token: ', query_token_res);
                    return [2 /*return*/];
            }
        });
    });
}
exports.queryContract = queryContract;
