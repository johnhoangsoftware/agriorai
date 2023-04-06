import { BigQuery } from '@google-cloud/bigquery';




function connectGoogleBigQuery() {
// Tạo một client BigQuery
const bigquery = new BigQuery({
  projectId: '	agriblock-382802',
  keyFilename: '../key.json',
});

// Định nghĩa các thông tin về bảng và dữ liệu cần thêm vào
const tableId = 'agriblock-382802.usershop.detail';
const rows = [
  { address: '0xsadaysgwyr6fghdsad', name: 'Hảo',lat: 10.762622, lon: 106.660172, type: 'chicken'},
  { address: '0xsadaysgwyrfff6fghdsad', name: 'Hảo',lat: 10.762622, lon: 106.660172, type: 'dog'},
];
// Thêm dữ liệu vào bảng
async function insertData() {
  const [apiResponse] = await bigquery.dataset('usershop').table('detail').insert(rows);
}
insertData();
}

connectGoogleBigQuery();
