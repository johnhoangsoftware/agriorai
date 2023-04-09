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
import Info from '../topic/info-post';
import Content from '../topic/content';
import Imagetopic from '../topic/image-topic';
//images
import AuthorImage from '@/assets/images/author.jpg';
import Feeds from '../search/feeds';

export default function ModernScreen() {
  return (
    <>
      <NextSeo
        title="Agriblock"
        description="Criptic - React Next Web3 NFT Crypto Dashboard Template"
      />
      <div className="flex flex-wrap">
        <div className="sm:w-4/4 mb-8 w-full sm:mb-0 sm:ltr:pr-6 sm:rtl:pl-6 md:w-[calc(100%-256px)] lg:w-[calc(100%-288px)] 2xl:w-[calc(100%-320px)] 3xl:w-[calc(100%-358px)]">
          Best saler:
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
              $10,86
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

      {/* <div className="my-8 sm:my-10">
        <TopCurrencyTable />
      </div> */}

      <div className="flex flex-wrap">
        <div
          className={cn(
            'w-full lg:w-[calc(100%-288px)] ltr:lg:pr-6 rtl:lg:pl-6 2xl:w-[calc(100%-320px)] 3xl:w-[calc(100%-358px)]'
          )}
        >
          {/* top pic 1 */}
          <div className="mb-4 rounded-lg bg-white p-4 shadow-md dark:bg-light-dark">
            <Info />
            <div className="text-align ml-5 mt-4 max-w-2xl text-black dark:text-white">
              <Content />
              <Imagetopic />
            </div>
          </div>
          {/* top pic 2 */}
          <div className="mb-4 rounded-lg bg-white p-4 shadow-md dark:bg-light-dark">
            <div className="ml-4 flex items-start">
              <img
                src="https://www.kindpng.com/picc/m/78-786207_user-avatar-png-user-avatar-icon-png-transparent.png"
                alt="Avatar"
                className="mr-3 h-10 w-10 rounded-full"
              />
              <div>
                <a
                  href="#"
                  className="font-semibold text-black text-gray-900 hover:text-blue-600 dark:text-white"
                >
                  Ronaldo
                </a>
                <a
                  href="#"
                  className="font-semi text-black text-gray-400 hover:text-blue-600 dark:text-white"
                >
                  {' '}
                  checked-in at Corn Farm
                </a>
                <div className="text-sm text-black text-gray-600 dark:text-white">
                  April 6 at 8:45 AM
                </div>
              </div>
            </div>
            <div className="text-align ml-5 mt-4 max-w-2xl text-black dark:text-white">
              <div className="text-align ml-5 mt-4 max-w-2xl">
                <p className="text-black text-gray-800 dark:text-white">
                  The corn farm is big and wide, the corn trees are big and
                  clean!
                </p>
              </div>
              <div className="flex items-center justify-center">
                <img
                  src="https://media.istockphoto.com/id/1221688781/photo/classic-red-barn-in-a-corn-field.jpg?s=612x612&w=0&k=20&c=DTN1UF_fiDQ8hnbtFttHPOU8pWUwDg0BUWIa8jc7WzM="
                  alt="Post image"
                  className="mt-4 w-4/5 rounded-md"
                />
              </div>
            </div>
          </div>
          {/* top pic 3 */}
          <div className="mb-4 rounded-lg bg-white p-4 shadow-md dark:bg-light-dark">
            <div className="ml-4 flex items-start">
              <img
                src="https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png?rev=2540745"
                alt="Avatar"
                className="mr-3 h-10 w-10 rounded-full"
              />
              <div>
                <a
                  href="#"
                  className="font-semibold text-black text-gray-900 hover:text-blue-600 dark:text-white"
                >
                  Nguyen Tien Chinh
                </a>
                <a
                  href="#"
                  className="font-semi text-black text-gray-400 hover:text-blue-600 dark:text-white"
                >
                  {' '}
                  bought at Apple Farm
                </a>
                <div className="text-sm text-black text-gray-600 dark:text-white">
                  April 5 at 10:45 AM
                </div>
              </div>
            </div>
            <div className="text-align ml-5 mt-4 max-w-2xl text-black dark:text-white">
              <div className="text-align ml-5 mt-4 max-w-2xl">
                <p className="text-black text-gray-800 dark:text-white">
                  Apples are very delicious and clean, the production process is
                  guaranteed and the information is clear and accurate
                </p>
              </div>
              <div className="flex items-center justify-center">
                <img
                  src="https://traicayxanh.vn/wp-content/uploads/2020/08/gi%E1%BB%8F_t%C3%A1o_xinh_t%C6%B0%C6%A1i.jpg"
                  alt="Post image"
                  className="mt-4 w-4/5 rounded-md"
                />
              </div>
            </div>
          </div>
          {/* top pic 4 */}
          <div className="mb-4 rounded-lg bg-white p-4 shadow-md dark:bg-light-dark">
            <div className="ml-4 flex items-start">
              <img
                src="https://static.vecteezy.com/system/resources/previews/002/002/403/original/man-with-beard-avatar-character-isolated-icon-free-vector.jpg"
                alt="Avatar"
                className="mr-3 h-10 w-10 rounded-full"
              />
              <div>
                <a
                  href="#"
                  className="font-semibold text-black text-gray-900 hover:text-blue-600 dark:text-white"
                >
                  Viet Hoang
                </a>
                <a
                  href="#"
                  className="font-semi text-black text-gray-400 hover:text-blue-600 dark:text-white"
                >
                  {' '}
                  bought at Strawberry Farm
                </a>
                <div className="text-sm text-black text-gray-600 dark:text-white">
                  April 1 at 3:45 PM
                </div>
              </div>
            </div>
            <div className="text-align ml-5 mt-4 max-w-2xl text-black dark:text-white">
              <div className="text-align ml-5 mt-4 max-w-2xl">
                <p className="text-black text-gray-800 dark:text-white">
                  Strawberries are big, delicious, very fragrant and clean!
                </p>
              </div>
              <div className="flex items-center justify-center">
                <img
                  src="https://suckhoehangngay.mediacdn.vn/zoom/680_425/154880486097817600/2021/4/26/6-158409353053372402041-1584324285914470297725-318-0-768-720-crop-1584324296838227336406-1619427966442483917689.jpg"
                  alt="Post image"
                  className="mt-4 w-4/5 rounded-md"
                />
              </div>
            </div>
          </div>
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
