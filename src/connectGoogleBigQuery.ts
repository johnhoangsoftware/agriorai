import { BigQuery } from '@google-cloud/bigquery';

function connectGoogleBigQuery() {
// Tạo một client BigQuery
const bigquery = new BigQuery({
  projectId: '	agriblock-382802',
  keyFilename: '../key.json',
});
  return bigquery;
}

export default connectGoogleBigQuery;
