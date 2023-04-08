import cn from 'classnames';
import { NextSeo } from 'next-seo';
import CoinSlider from '@/components/ui/coin-card';
import OverviewChart from '@/components/ui/chats/overview-chart';
import LiquidityChart from '@/components/ui/chats/liquidity-chart';
import VolumeChart from '@/components/ui/chats/volume-chart';
import TopPools from '@/components/ui/top-pools';
import TransactionTable from '@/components/transaction/transaction-table';
import TopCurrencyTable from '@/components/top-currency/currency-table';
import { coinSlideData } from '@/data/static/coin-slide-data';
import Avatar from '@/components/ui/avatar';
import TopupButton from '@/components/ui/topup-button';

//images
import AuthorImage from '@/assets/images/author.jpg';

export default function ModernScreen() {
  return (
    <>
      <NextSeo
        title="Criptic"
        description="Criptic - React Next Web3 NFT Crypto Dashboard Template"
      />
      <div className="flex flex-wrap">
        <div className="mb-8 w-full sm:mb-0 sm:w-4/4 sm:ltr:pr-6 sm:rtl:pl-6 md:w-[calc(100%-256px)] lg:w-[calc(100%-288px)] 2xl:w-[calc(100%-320px)] 3xl:w-[calc(100%-358px)]">
          <CoinSlider coins={coinSlideData} />
        </div>
        <div className="w-full sm:w-1/2 md:w-64 lg:w-72 2xl:w-80 3xl:w-[358px]">
          <div className="flex h-full flex-col justify-center rounded-lg bg-white p-6 shadow-card dark:bg-light-dark xl:p-8">
            <Avatar
              image={AuthorImage}
              alt="Author"
              className="mx-auto mb-6"
              size="lg"
            />
            <h3 className="mb-2 text-center text-sm uppercase tracking-wider text-gray-500 dark:text-gray-400 3xl:mb-3">
              My Balance
            </h3>
            <div className="mb-7 text-center font-medium tracking-tighter text-gray-900 dark:text-white xl:text-2xl 3xl:mb-8 3xl:text-[32px]">
              $10,86,0
            </div>
            <TopupButton />
          </div>
        </div>
      </div>

      {/* <div className="mt-8 grid gap-6 sm:my-10 md:grid-cols-2">
        <LiquidityChart />
        <VolumeChart />
      </div> */}
      <br />
      {/* div bài viết */}
    <div>
    <div className="rounded-lg shadow-md p-4 mb-4 ">
        <div className="flex items-start ml-4">
          <img src="https://via.placeholder.com/50" alt="Avatar" className="w-10 h-10 rounded-full mr-3" />
          <div>
            <a href="#" className="font-semibold text-gray-900 hover:text-blue-600">Nguyen Van A</a>
            <div className="text-gray-600 text-sm">April 7 at 10:30 AM</div>
          </div>
        </div>
        <div className="mt-4 max-w-2xl ml-5 text-align " >
          <p className="text-gray-800">Hello everyone, this is my first post on Facebook. I hope you all have a great day!</p>
          <img src="https://via.placeholder.com/500x250" alt="Post image" className="mt-4 w-70%" />
        </div>
        <div className="flex items-center justify-between mt-4 ml-5">
          <div className="flex items-center space-x-3">
            <a href="#" className="flex items-center text-gray-600 hover:text-blue-600">
              <i className="far fa-thumbs-up"></i>
              <span className="ml-1">Like</span>
            </a>
            <a href="#" className="flex items-center text-gray-600 hover:text-blue-600">
              <i className="far fa-comment-alt"></i>
              <span className="ml-1">Comment</span>
            </a>
            <a href="#" className="flex items-center text-gray-600 hover:text-blue-600">
              <i className="far fa-share-square"></i>
              <span className="ml-1">Share</span>
            </a>
          </div>
          <div className="flex items-center">
            <a href="#" className="text-gray-600 hover:text-blue-600">
              <i className="far fa-eye"></i>
              <span className="ml-1">15 views</span>
            </a>
          </div>
        </div>
      </div>
    </div>

      {/* <div className="my-8 sm:my-10">
        <TopCurrencyTable />
      </div> */}

      <div className="flex flex-wrap">
        <div
          className={cn(
            'w-full lg:w-[calc(100%-288px)] ltr:lg:pr-6 rtl:lg:pl-6 2xl:w-[calc(100%-320px)] 3xl:w-[calc(100%-358px)]'
          )}
        >
          <TransactionTable />
        </div>
        <div
          className={cn(
            'order-first mb-8 grid w-full grid-cols-1 gap-6 sm:mb-10 sm:grid-cols-2 lg:order-1 lg:mb-0 lg:flex lg:w-72 lg:flex-col 2xl:w-80 3xl:w-[358px]'
          )}
        >
          {/* <OverviewChart /> */}
          <TopPools />
        </div>
      </div>
    </>
  );
}
