import { Bitcoin } from '@/components/icons/bitcoin';
import { Ethereum } from '@/components/icons/ethereum';
import { Tether } from '@/components/icons/tether';
import { Bnb } from '@/components/icons/bnb';
import { Usdc } from '@/components/icons/usdc';
import { Cardano } from '@/components/icons/cardano';
import { Doge } from '@/components/icons/doge';

export type CoinList =
  | 'Peter'
  | 'Ronaldo'
  | 'Chinh'
  | 'Hoang'
  | 'Messi'
  | 'Natalya'
  | 'DOGE';
const coinIcons: Record<CoinList, JSX.Element> = {
  Peter: <Bitcoin />,
  Ronaldo: <Ethereum />,
  Chinh: <Tether />,
  Hoang: <Bnb />,
  Messi: <Usdc />,
  Natalya: <Cardano />,
  DOGE: <Doge />,
};

interface CurrencySwapIconsProps {
  from: CoinList;
  to: CoinList;
}

export default function CurrencySwapIcons({
  from,
  to,
}: CurrencySwapIconsProps) {
  return (
    <div className="flex items-center">
      <div className="flex items-center">
        <div className="relative">{coinIcons[from]}</div>
        {/* <div className="ltr:-ml-1.5 rtl:-mr-1.5">{coinIcons[to]}</div> */}
      </div>
      <div className="whitespace-nowrap text-sm font-medium uppercase text-black ltr:ml-3 rtl:mr-3 dark:text-white">
        {from}
      </div>
    </div>
  );
}
