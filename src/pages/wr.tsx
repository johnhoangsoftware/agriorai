import type { NextPageWithLayout } from '@/types';
import RootLayout from '@/layouts/_root-layout';
import axios from 'axios';
import { withdraw } from '@/lib/wallet/withdraw';

const TestDB: NextPageWithLayout = () => {
  async function handleSubmit() {
    withdraw('orai1jnvk05q8uvpck86256v3kue3g0tffrr0raea97', '1000000');
  }

  return (
    <>
      {/* input data for User */}
      <div>
        <button className="bg-gray-500" onClick={handleSubmit}>
          Add User
        </button>
      </div>
    </>
  );
};

TestDB.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export default TestDB;
