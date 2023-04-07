"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var bigquery_1 = require("@google-cloud/bigquery");
function connectGoogleBigQuery() {
    // Tạo một client BigQuery
    var bigquery = new bigquery_1.BigQuery({
        projectId: '	agriblock-382802',
        keyFilename: '../key.json',
    });
    return bigquery;
}
exports.default = connectGoogleBigQuery;
