import connectGoogleBigQuery from './connectGoogleBigQuery';

// Tạo một client BigQuery



function addUser(data: Array<any>) {
// Thêm dữ liệu vào bảng
const bigquery = connectGoogleBigQuery();
async function insertData(data) {
  const [apiResponse] = await bigquery.dataset('usershop').table('detail').insert(data);
   console.log(apiResponse);
}
insertData(data);
}

const rows = [
   { address: '0xsadaysgwyr6fghdsad', name: 'Hảo',lat: 10.762622, lon: 106.660172, type: 'chicken'},
   { address: '0xsadaysgwyrfff6fghdsad', name: 'Hảo',lat: 10.762622, lon: 106.660172, type: 'dog'},
 ];
addUser(rows);


export default addUser;