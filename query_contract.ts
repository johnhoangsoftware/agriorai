import { Contract, getMnemonic } from "./helpers/utils";
import { connect } from "./helpers/connect";
import { oraiConfig } from "./networks";
import { queryContract } from "./helpers/cw20";

async function main(): Promise<void> {

  console.log("Querying contract...");
  
  // get the mnemonic of the contract
  const mnemonic = getMnemonic();

  // get the signingclient
  const {client, address} = await connect(mnemonic, oraiConfig);

  // check if the given wallet has enough balance
  const address = "orai1lvjxm59tyldn0853lhxzhe7mwynnsgfdke8fs9"
  let {amount} = await client.getBalance(address, oraiConfig.feeToken);
  console.log(`balance of ${address} is ${amount}`);

  // query the contract
  // TODO: you must change orai1wug8sewp6cedgkmrmvhl3lf3tulagm9hnvy8p0rppz9yjw0g4wtq9azdjy to your contract address
  const res = await queryContract(client, "orai19ljx6yuhrjahjpm254nhvxylnrxyyatsnk86dn33g593zslspsusm323xq");

  
  

  // console.log(res);
}

main().then(
  () => {
    process.exit(0);
  },
  (error) => {
    console.error(error);
    process.exit(1);
  }
);
