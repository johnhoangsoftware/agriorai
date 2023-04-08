/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState, createContext, ReactNode } from 'react';
import Web3Modal from 'web3modal';
import { SigningCosmWasmClient } from '@cosmjs/cosmwasm-stargate';
import { StargateClient } from '@cosmjs/stargate';
import { Keplr } from '@keplr-wallet/types';
import { List } from 'lodash';

const web3modalStorageKey = 'WEB3_CONNECT_CACHED_PROVIDER';
const chainId = 'Oraichain-testnet';
const token = 'orai';

export const WalletContext = createContext<any>({});

export const WalletProvider = ({ children }: { children: ReactNode }) => {
  const [address, setAddress] = useState<string | undefined>(undefined);
  const [balance, setBalance] = useState<string | undefined>(undefined);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  // const web3Modal =
  //   typeof window !== 'undefined' && new Web3Modal({ cacheProvider: true });
  //(window as any).getKeplr();
  /* This effect will fetch wallet address if user has already connected his/her wallet */
  useEffect(() => {
    const keplr = (window as any).keplr;
    async function checkConnection() {
      try {
        if (window && keplr) {
          // Check if web3modal wallet connection is available on storage
          if (localStorage.getItem(web3modalStorageKey)) {
            await connectToWallet();
          }
        } else {
          console.log('window or window.keplr is not available');
        }
      } catch (error) {
        console.log(error, 'Catch error Account is not connected');
      }
    }
    checkConnection();
    console.log('Connect success' + address + ' ' + balance);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const setWalletAddress = async (keplrProvider: any) => {
    try {
      const keplrAccounts = await keplrProvider.getAccounts();
      if (keplrAccounts.length > 0) {
        const web3Address = keplrAccounts[0].address;
        setAddress(web3Address);
        getBalance(keplrProvider, web3Address);
        console.log('Account connected address: ', web3Address);
      }
    } catch (error) {
      console.log(
        'Account not connected; logged from setWalletAddress function'
      );
    }
  };

  const getBalance = async (keplrProvider: any, walletAddress: string) => {
    const client = await SigningCosmWasmClient.connectWithSigner(
      'https://testnet-rpc.orai.io',
      keplrProvider
    );
    const walletBalance = await client.getBalance(walletAddress, token);
    const balance = (parseInt(walletBalance.amount) * 1) / 1e6;
    setBalance(balance.toString());
    console.log('Balance: ', balance);
  };

  const disconnectWallet = () => {
    setAddress(undefined);

    window.keplr?.disable();
    // web3Modal && web3Modal.clearCachedProvider();
  };

  const checkIfExtensionIsAvailable = () => {
    if (window && window.keplr === undefined) {
      setError(true);
      // web3Modal && web3Modal.toggleModal();
      window.open(
        'https://chrome.google.com/webstore/detail/keplr/dmkamcknogkgcdfhhbddcghachkejeap',
        '_target'
      );
      throw new Error('Please install Keplr Extensions');
    }
  };

  const connectToWallet = async () => {
    try {
      setLoading(true);
      checkIfExtensionIsAvailable();
      // console.log(window.keplr?.getChainInfosWithoutEndpoints());
      try {
        await (window as any).keplr.enable(chainId);
      } catch (e) {
        suggestChain();
        await (window as any).keplr.enable(chainId);
      }

      const keplrProvider = await (window as any).getOfflineSigner(chainId);

      await subscribeProvider(keplrProvider);
      localStorage.setItem(web3modalStorageKey, '"injected"');
      setWalletAddress(keplrProvider);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(
        error,
        'got this error on connectToWallet catch block while connecting the wallet'
      );
    }
  };

  const subscribeProvider = async (keplrProvider: any) => {
    //   (window as any).keplr.on('close', () => {
    //     disconnectWallet();
    //   });
    //   (window as any).keplr.on('accountsChanged', async (accounts: string[]) => {
    //     const accounts = keplrProvider.getAccounts();
    //     if (accounts?.length) {
    //       setAddress(accounts[0]);
    //       getBalance(keplrProvider, accounts[0]);
    //     } else {
    //       disconnectWallet();
    //     }
    //  });
  };

  const suggestChain = async () => {
    if (!(window as any).keplr) {
      alert('Please install owallet extension');
    } else {
      if ((window as any).keplr.experimentalSuggestChain) {
        try {
          // Keplr v0.6.4 introduces an experimental feature that supports the feature to suggests the chain from a webpage.
          // cosmoshub-3 is integrated to Keplr so the code should return without errors.
          // The code below is not needed for cosmoshub-3, but may be helpful if you’re adding a custom chain.
          // If the user approves, the chain will be added to the user's Keplr extension.
          // If the user rejects it or the suggested chain information doesn't include the required fields, it will throw an error.
          // If the same chain id is already registered, it will resolve and not require the user interactions.
          await (window as any).keplr.experimentalSuggestChain({
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
    await (window as any).keplr.enable(chainId);
    const contractAddress =
      'orai1mw36z7jewael538x5vw7lku39ly7w44t5nzf26qxrhmtq2g90klq3yzc2r';
    //await window.keplr.enable(chainId);
    await (window as any).keplr.suggestToken(chainId, contractAddress);
  };

  return (
    <WalletContext.Provider
      value={{
        address,
        balance,
        loading,
        error,
        connectToWallet,
        disconnectWallet,
      }}
    >
      {children}
    </WalletContext.Provider>
  );
};
