import type {
  CryptoQueryOptions,
  NextPageWithLayout,
  SettingsQueryOptions,
} from '@/types';
import cn from 'classnames';
import RootLayout from '@/layouts/_root-layout';
import { GetStaticProps } from 'next';
import { dehydrate, QueryClient } from 'react-query';
import { API_ENDPOINTS } from '@/data/utils/endpoints';
import client from '@/data/utils';
import { useCoins } from '@/hooks/useCoin';
import { NextSeo } from 'next-seo';
import { useLayout } from '@/lib/hooks/use-layout';
import { LAYOUT_OPTIONS } from '@/lib/constants';
import Info from '@/components/topic/info-post';
import Content from '@/components/topic/content';
import Imagetopic from '@/components/topic/image-topic';
// import { createMapLocation, addMarker, addAllMarkers } from '@/components/topic/mapLocation';
import Map, { Marker } from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import mapboxgl from 'mapbox-gl';
import { useEffect, useRef, useState } from 'react';

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  const queryClient = new QueryClient();
  try {
    await Promise.all([
      queryClient.prefetchQuery(
        [API_ENDPOINTS.SETTINGS, { language: locale }],
        ({ queryKey }) =>
          client.settings.all(queryKey[1] as SettingsQueryOptions)
      ),
      queryClient.prefetchInfiniteQuery(
        [API_ENDPOINTS.PRICING, { language: locale }],
        ({ queryKey }) => client.coins.all(queryKey[1] as CryptoQueryOptions)
      ),
    ]);
    return {
      props: {
        dehydratedState: JSON.parse(JSON.stringify(dehydrate(queryClient))),
      },
      revalidate: 300, // In seconds
    };
  } catch (error) {
    //* if we get here, the product doesn't exist or something else went wrong
    return {
      notFound: true,
    };
  }
};

function CoinPrices() {
  const { layout } = useLayout();
  const [location, setLocation] = useState('');
  const [doneLoadUseEf, setDoneLoadUseEf] = useState(false);
  useEffect(() => {
    navigator.geolocation.getCurrentPosition((pos) => {
      // alert(pos.coords.latitude + ',' + pos.coords.longitude)
      setLocation(pos.coords.latitude + '/' + pos.coords.longitude);
    });
    setDoneLoadUseEf(true);
  });
  if (!doneLoadUseEf) {
    return <div>Loading...</div>;
  }

  // const { isLoading, error } = useCoins();

  // if (isLoading) {
  //   return <CryptoCurrencyPricingSkeleton />;
  // }

  // if (error) {
  //   return <div>Error: {error.message}</div>;
  // }

  if (layout === LAYOUT_OPTIONS.RETRO) {
    return (
      <>
        <NextSeo
          title="Check-in"
          description="Check-in - React Next Web3 NFT Crypto Dashboard Template"
        />
        <iframe
          height="700"
          width="750"
          src={'http://34.136.250.194:8000/' + location}
        ></iframe>
        {/* <LivePricingSliderRetro limits={3} />
        <CryptocurrencyPricingRetroTable />
         */}
      </>
    );
  }

  return (
    <>
      <NextSeo
        title="Check-in"
        description="Check-in - React Next Web3 NFT Crypto Dashboard Template"
      />

      <iframe
        className="h-1000px w-full rounded-lg"
        height={500}
        src={'http://34.136.250.194:8000/' + location}
        allowFullScreen
      ></iframe>

      <div className="flex flex-wrap p-4">
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
                src="https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436178.jpg"
                alt="Avatar"
                className="mr-3 h-10 w-10 rounded-full"
              />
              <div>
                <a
                  href="#"
                  className="font-semibold text-black text-gray-900 hover:text-blue-600 dark:text-white"
                >
                  Natalya
                </a>
                <a
                  href="#"
                  className="font-semi text-black text-gray-400 hover:text-blue-600 dark:text-white"
                >
                  {' '}
                  checked-in at COW Farm
                </a>
                <div className="text-sm text-black text-gray-600 dark:text-white">
                  April 5 at 11:45 AM
                </div>
              </div>
            </div>
            <div className="text-align ml-5 mt-4 max-w-2xl text-black dark:text-white">
              <div className="text-align ml-5 mt-4 max-w-2xl">
                <p className="text-black text-gray-800 dark:text-white">
                  The farm is beautiful, clean, the cows are well taken care of,
                  everyone should visit
                </p>
              </div>
              <div className="flex items-center justify-center">
                <img
                  src="https://www.timeforkids.com/wp-content/uploads/2019/02/farmcover.jpg"
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
                src="https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg"
                alt="Avatar"
                className="mr-3 h-10 w-10 rounded-full"
              />
              <div>
                <a
                  href="#"
                  className="font-semibold text-black text-gray-900 hover:text-blue-600 dark:text-white"
                >
                  Peter
                </a>
                <a
                  href="#"
                  className="font-semi text-black text-gray-400 hover:text-blue-600 dark:text-white"
                >
                  {' '}
                  checked-in at Sheep Farm
                </a>
                <div className="text-sm text-black text-gray-600 dark:text-white">
                  April 5 at 11:45 AM
                </div>
              </div>
            </div>
            <div className="text-align ml-5 mt-4 max-w-2xl text-black dark:text-white">
              <div className="text-align ml-5 mt-4 max-w-2xl">
                <p className="text-black text-gray-800 dark:text-white">
                  The farm is beautiful, clean, the cows are well taken care of,
                  everyone should visit
                </p>
              </div>
              <div className="flex items-center justify-center">
                <img
                  src="https://images.squarespace-cdn.com/content/v1/56953bfc69492e50b0bd67d1/1452714724168-AO421VG6TRWCBOZEWPHD/North+Star+Sheep+Farm-108.jpg?format=1000w"
                  alt="Post image"
                  className="mt-4 w-4/5 rounded-md"
                />
              </div>
            </div>
          </div>
          {/* top pic 5 */}
          <div className="mb-4 rounded-lg bg-white p-4 shadow-md dark:bg-light-dark">
            <div className="ml-4 flex items-start">
              <img
                src="https://cdn.dribbble.com/users/1040983/screenshots/5630845/media/e95768b82810699dfd54512ff570954a.png?compress=1&resize=400x300&vertical=top"
                alt="Avatar"
                className="mr-3 h-10 w-10 rounded-full"
              />
              <div>
                <a
                  href="#"
                  className="font-semibold text-black text-gray-900 hover:text-blue-600 dark:text-white"
                >
                  Peter
                </a>
                <a
                  href="#"
                  className="font-semi text-black text-gray-400 hover:text-blue-600 dark:text-white"
                >
                  {' '}
                  checked-in at Chicken Farm
                </a>
                <div className="text-sm text-black text-gray-600 dark:text-white">
                  April 2 at 11:45 AM
                </div>
              </div>
            </div>
            <div className="text-align ml-5 mt-4 max-w-2xl text-black dark:text-white">
              <div className="text-align ml-5 mt-4 max-w-2xl">
                <p className="text-black text-gray-800 dark:text-white">
                  The farm is beautiful, clean, the cows are well taken care of,
                  everyone should visit
                </p>
              </div>
              <div className="flex items-center justify-center">
                <img
                  src="https://www.farm2fork.co.uk/wp-content/uploads/2022/10/pasture-raised-chicken-tractors_1000px.jpg"
                  alt="Post image"
                  className="mt-4 w-4/5 rounded-md"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <LivePricingSlider limits={4} />

      <CryptocurrencyPricingTable /> */}
    </>
  );
}

const LiveDemo: NextPageWithLayout = () => {
  return <CoinPrices />;
};

LiveDemo.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export default LiveDemo;
