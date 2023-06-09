async function suggestWallet() {
  if (!window.keplr) {
    alert('Please install owallet extension');
  } else {
    if (window.keplr.experimentalSuggestChain) {
      try {
        // Keplr v0.6.4 introduces an experimental feature that supports the feature to suggests the chain from a webpage.
        // cosmoshub-3 is integrated to Keplr so the code should return without errors.
        // The code below is not needed for cosmoshub-3, but may be helpful if you’re adding a custom chain.
        // If the user approves, the chain will be added to the user's Keplr extension.
        // If the user rejects it or the suggested chain information doesn't include the required fields, it will throw an error.
        // If the same chain id is already registered, it will resolve and not require the user interactions.
        await window.keplr.experimentalSuggestChain({
          // Chain-id of the Osmosis chain.
          chainId: 'Oraichain-testnet',
          // The name of the chain to be displayed to the user.
          chainName: 'Oraichain testnet',
          // RPC endpoint of the chain. In this case we are using blockapsis, as it's accepts connections from any host currently. No Cors limitations.
          rpc: 'https://testnet-rpc.orai.io',
          // REST endpoint of the chain.
          rest: 'https://testnet.lcd.orai.io',
          // Staking coin information
          stakeCurrency: {
            // Coin denomination to be displayed to the user.
            coinDenom: 'ORAI',
            // Actual denom (i.e. uatom, uscrt) used by the blockchain.
            coinMinimalDenom: 'orai',
            // # of decimal points to convert minimal denomination to user-facing denomination.
            coinDecimals: 6,
            // (Optional) Keplr can show the fiat value of the coin if a coingecko id is provided.
            // You can get id from https://api.coingecko.com/api/v3/coins/list if it is listed.
            // coinGeckoId: ""
          },
          // (Optional) If you have a wallet webpage used to stake the coin then provide the url to the website in `walletUrlForStaking`.
          // The 'stake' button in Keplr extension will link to the webpage.
          // walletUrlForStaking: "",
          // The BIP44 path.
          bip44: {
            // You can only set the coin type of BIP44.
            // 'Purpose' is fixed to 44.
            coinType: 118,
          },
          // Bech32 configuration to show the address to user.
          // This field is the interface of
          // {
          //   bech32PrefixAccAddr: string;
          //   bech32PrefixAccPub: string;
          //   bech32PrefixValAddr: string;
          //   bech32PrefixValPub: string;
          //   bech32PrefixConsAddr: string;
          //   bech32PrefixConsPub: string;
          // }
          bech32Config: {
            bech32PrefixAccAddr: 'orai',
            bech32PrefixAccPub: 'oraipub',
            bech32PrefixValAddr: 'oraivaloper',
            bech32PrefixValPub: 'oraivaloperpub',
            bech32PrefixConsAddr: 'oraivalcons',
            bech32PrefixConsPub: 'oraivalconspub',
          },
          // List of all coin/tokens used in this chain.
          currencies: [
            {
              // Coin denomination to be displayed to the user.
              coinDenom: 'ORAI',
              // Actual denom (i.e. uatom, uscrt) used by the blockchain.
              coinMinimalDenom: 'orai',
              // # of decimal points to convert minimal denomination to user-facing denomination.
              coinDecimals: 6,
              coinGeckoId: 'oraichain-token',
              coinImageUrl:
                'https://s2.coinmarketcap.com/static/img/coins/64x64/7533.png',
              // (Optional) Keplr can show the fiat value of the coin if a coingecko id is provided.
              // You can get id from https://api.coingecko.com/api/v3/coins/list if it is listed.
              // coinGeckoId: ""
            },
          ],
          // List of coin/tokens used as a fee token in this chain.
          feeCurrencies: [
            {
              // Coin denomination to be displayed to the user.
              coinDenom: 'ORAI',
              // Actual denom (i.e. uosmo, uscrt) used by the blockchain.
              coinMinimalDenom: 'orai',
              // # of decimal points to convert minimal denomination to user-facing denomination.
              coinDecimals: 6,
              // (Optional) Keplr can show the fiat value of the coin if a coingecko id is provided.
              // You can get id from https://api.coingecko.com/api/v3/coins/list if it is listed.
              // coinGeckoId: ""
              coinGeckoId: 'oraichain-token',
              coinImageUrl:
                'https://s2.coinmarketcap.com/static/img/coins/64x64/7533.png',
            },
          ],
          // (Optional) The number of the coin type.
          // This field is only used to fetch the address from ENS.
          // Ideally, it is recommended to be the same with BIP44 path's coin type.
          // However, some early chains may choose to use the Cosmos Hub BIP44 path of '118'.
          // So, this is separated to support such chains.
          coinType: 118,
          // (Optional) This is used to set the fee of the transaction.
          // If this field is not provided, Keplr extension will set the default gas price as (low: 0.01, average: 0.025, high: 0.04).
          // Currently, Keplr doesn't support dynamic calculation of the gas prices based on on-chain data.
          // Make sure that the gas prices are higher than the minimum gas prices accepted by chain validators and RPC/REST endpoint.
          gasPriceStep: {
            low: 0,
            average: 0.000025,
            high: 0.00004,
          },
          walletUrlForStaking: 'https://testnet.scan.orai.io/validators',
          features: [
            'stargate',
            'no-legacy-stdTx',
            'ibc-transfer',
            'cosmwasm',
            'wasmd_0.24+',
          ],
          beta: true,
        });
      } catch {
        alert('Failed to suggest the chain');
      }
    } else {
      alert('Please use the recent version of keplr extension');
    }
  }
  const chainId = 'Oraichain-testnet';
  await window.keplr.enable(chainId);
  const contractAddress =
    'orai1mw36z7jewael538x5vw7lku39ly7w44t5nzf26qxrhmtq2g90klq3yzc2r';
  //await window.keplr.enable(chainId);
  await window.keplr.suggestToken(chainId, contractAddress);
}

const buttonHandlerKeplrConnect = async () => {
  if (window.keplr) {
    suggestWallet();
    // Unlock the wallet.
    await window.keplr.enable(chainId);

    // Use offlineSigner to get first wallet and public key.
    // Currently only first address is supported.
    const offlineSigner = await window.getOfflineSigner(chainId);
    const keplrAccounts = await offlineSigner.getAccounts();

    // Set state value as first address.
    setCosmosAddress(keplrAccounts[0].address);
    // Initialize the gaia api with the offline signer that is injected by Keplr extension.
    // const cosmJS = new SigningCosmosClient(
    //     "https://rpc-osmosis.blockapsis.com",
    //     accounts[0].address,
    //     offlineSigner,
    // );
    // const client = await SigningStargateClient.connectWithSigner(
    //     "https://testnet-rpc.orai.io",
    //     offlineSigner
    // )
  } else {
    alert('Keplr extension is not installed.');
  }
};

// Button handler button for handling a balance request for Cosmos SDK wallet as RPC.
const buttonHandlerKeplrBalance = async () => {
  // Use StargateClient and RPC because of its lightweight payloads and high performance.
  const client = await StargateClient.connect(rpcEndpoint);

  // Get balance as Coin.
  // Amount is the number of coins, while denom is the identifier of the coins.
  const balanceAsCoin = await client.getBalance(cosmosAddress, token);
  const balance = (parseInt(balanceAsCoin.amount) * 1) / exponent;

  // Set state values.
  setCosmosBalance(balance);
  setCosmosToken(tokenName);
};

export default suggestWallet;
