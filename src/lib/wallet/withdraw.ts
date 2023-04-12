import axios from 'axios';
const apiURL = process.env.API_CONSTRACTS;

export async function withdraw(address: string, amount: string) {
  let res = await axios.post('http://localhost:8080/api/v1/wallet/withdraw', {
    address: address,
    amount: amount,
  });
  console.log(res);
}
