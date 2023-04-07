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
var utils_1 = require("./helpers/utils");
var connect_1 = require("./helpers/connect");
var networks_1 = require("./networks");
var cw20_1 = require("./helpers/cw20");
function main() {
    return __awaiter(this, void 0, void 0, function () {
        var mnemonic, _a, client, address, amount;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    console.log("Excecuting contract...");
                    mnemonic = (0, utils_1.getMnemonic)();
                    return [4 /*yield*/, (0, connect_1.connect)(mnemonic, networks_1.oraiConfig)];
                case 1:
                    _a = _b.sent(), client = _a.client, address = _a.address;
                    return [4 /*yield*/, client.getBalance(address, networks_1.oraiConfig.feeToken)];
                case 2:
                    amount = (_b.sent()).amount;
                    console.log("balance of ".concat(address, " is ").concat(amount));
                    // excecute the contract
                    // TODO: you must change orai1wug8sewp6cedgkmrmvhl3lf3tulagm9hnvy8p0rppz9yjw0g4wtq9azdjy to your contract address
                    return [4 /*yield*/, (0, cw20_1.excecuteContract)(client, address, "orai19ljx6yuhrjahjpm254nhvxylnrxyyatsnk86dn33g593zslspsusm323xq", "100000000", "orai1zze9d5xk2xa2g44xdf7g9eltlzvn5hm2h7fctk")];
                case 3:
                    // excecute the contract
                    // TODO: you must change orai1wug8sewp6cedgkmrmvhl3lf3tulagm9hnvy8p0rppz9yjw0g4wtq9azdjy to your contract address
                    _b.sent();
                    return [2 /*return*/];
            }
        });
    });
}
main().then(function () {
    process.exit(0);
    "";
}, function (error) {
    console.error(error);
    process.exit(1);
});
