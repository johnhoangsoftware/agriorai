import connectGoogleBigQuery from './connect';
import { User } from './User';

// Tạo một client BigQuery

function addUser(data: User[]) {
  // Thêm dữ liệu vào bảng
  var bigquery_aaaa = connectGoogleBigQuery();

  //   async function insertData(data: User[]) {
  //     const [apiResponse] = await bigquery
  //       .dataset('test')
  //       .table('user')
  //       .insert(data);
  //     console.log(apiResponse);
  //     alert(apiResponse);
  //   }
  //   insertData(data);
}

// const rows = [
//    { address: '0xsadaysgwyr6fghdsad', name: 'Hảo',lat: 10.762622, lon: 106.660172, type: 'chicken'},
//    { address: '0xsadaysgwyrfff6fghdsad', name: 'Hảo',lat: 10.762622, lon: 106.660172, type: 'dog'},
//  ];
// addUser(rows);

export default addUser;
