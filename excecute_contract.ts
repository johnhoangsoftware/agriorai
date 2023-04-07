import { getMnemonic } from "./helpers/utils";
import { connect } from "./helpers/connect";
import { oraiConfig } from "./networks";
import { excecuteContract } from "./helpers/cw20";

async function main(): Promise<void> {

  console.log("Excecuting contract...");
  
  // get the mnemonic of the contract
  const mnemonic = getMnemonic();

  // get the signingclient
  const {client, address} = await connect(mnemonic, oraiConfig);

  // check if the given wallet has enough balance
  let {amount} = await client.getBalance(address, oraiConfig.feeToken);
  console.log(`balance of ${address} is ${amount}`);

  // excecute the contract
  // TODO: you must change orai1wug8sewp6cedgkmrmvhl3lf3tulagm9hnvy8p0rppz9yjw0g4wtq9azdjy to your contract address
  await excecuteContract(client, address, "orai19ljx6yuhrjahjpm254nhvxylnrxyyatsnk86dn33g593zslspsusm323xq", "100000000", "orai1zze9d5xk2xa2g44xdf7g9eltlzvn5hm2h7fctk");
}

main().then(
  () => {
    process.exit(0);``  },
  (error) => {
    console.error(error);
    process.exit(1);
  }
);
