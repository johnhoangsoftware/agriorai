import Image from '@/components/ui/image';
import { ArrowUp } from '@/components/icons/arrow-up';
import { Scrollbar, A11y, Autoplay, EffectCoverflow } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { StaticImageData } from 'next/image';
import cn from 'classnames';
import { NFTList } from '@/data/static/nft-list';
import NFTGrid from '@/components/ui/nft-card';
import { useGridSwitcher } from '@/lib/hooks/use-grid-switcher';

type CoinCardProps = {
  id: string;
  name: string;
  symbol: string;
  logo: StaticImageData;
  balance: string;
  usdBalance: string;
  change: string;
  isChangePositive: boolean;
  color?: string;
};

export function CoinCard({
  name,
  symbol,
  logo,
  balance,

  color = '#FDEDD4',
}: CoinCardProps) {
  return (
    <div
      className="relative rounded-lg p-6 xl:p-8"
      style={{ backgroundColor: color }}
    >
      <h4 className="mb-8 text-sm font-medium uppercase tracking-wider text-gray-900">
        {name}
      </h4>
      <div className="relative h-20 lg:h-24 xl:h-28 3xl:h-36">
        <Image src={logo} alt={name} height={112} priority />
      </div>
      <div className="mb-2 mt-8 text-sm font-medium tracking-wider text-gray-900 lg:text-lg 2xl:text-xl 3xl:text-2xl">
        {balance}
        <span className="uppercase"> {symbol}</span>
      </div>
    </div>
  );
}

interface CoinSliderProps {
  coins: CoinCardProps[];
}

export default function CoinSlider({ coins }: CoinSliderProps) {
  const sliderBreakPoints = {
    640: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    1024: {
      slidesPerView: 2,
      spaceBetween: 24,
    },
    1280: {
      slidesPerView: 3,
      spaceBetween: 24,
    },
    1536: {
      slidesPerView: 3,
      spaceBetween: 24,
    },
    1700: {
      slidesPerView: 3,
      spaceBetween: 24,
    },
    2200: {
      slidesPerView: 4,
      spaceBetween: 24,
    },
  };

  return (
    <div>
      <Swiper
        modules={[Scrollbar, Autoplay]}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        spaceBetween={24}
        slidesPerView={3}
        scrollbar={{ draggable: true }}
        breakpoints={sliderBreakPoints}
        observer={true}
        dir="ltr"
        className="dark:[&_.swiper-scrollbar_>_.swiper-scrollbar-drag]:bg-body/50"
      >
        {NFTList.map((nft) => (
          <SwiperSlide key={nft.id}>
            <NFTGrid
              key={nft.id}
              name={nft.name}
              image={nft.image}
              author={nft.author}
              authorImage={nft.authorImage}
              price={nft.price}
              collection={nft.collection}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
