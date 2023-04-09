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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const connectGoogleBigQuery_1 = __importDefault(require("./connectGoogleBigQuery"));
// Tạo một client BigQuery
function addUser(data) {
    // Thêm dữ liệu vào bảng
    const bigquery = (0, connectGoogleBigQuery_1.default)();
    function insertData(data) {
        return __awaiter(this, void 0, void 0, function* () {
            const [apiResponse] = yield bigquery.dataset('usershop').table('detail').insert(data);
            console.log(apiResponse);
        });
    }
    insertData(data);
}
const rows = [
    { address: '0xsadaysgwyr6fghdsad', name: 'Hảo', lat: 10.762622, lon: 106.660172, type: 'chicken' },
    { address: '0xsadaysgwyrfff6fghdsad', name: 'Hảo', lat: 10.762622, lon: 106.660172, type: 'dog' },
];
addUser(rows);
exports.default = addUser;
