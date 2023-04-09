import type { NextPageWithLayout } from '@/types';
import { NextSeo } from 'next-seo';
import RootLayout from '@/layouts/_root-layout';
import addUser from '@/db/add.use';

import { ROLE, User } from '@/db/User';

const TestDB: NextPageWithLayout = () => {
  function addUserToDB() {
    var users: User[] = [
      {
        address_wallet: '00xabcvuitunggio',
        fullname: 'HoangLaTao',
        avatar: 'https://i.pinimg.co',
        followers: ['ooxasafasf', '00xasafasf'],
        following: ['following1', 'following2'],
        bio: 'dang test',
        role: ROLE.USER,
      },
    ];
    addUser(users);
  }

  return (
    <>
      <NextSeo title="Test DB" description="Tao Thu Big Query Test" />
      {/* input data for User */}
      <div className="form">
        <label htmlFor="address">address</label>
        <input type="text" id="address" />
        <br />
        <label htmlFor="name">Name</label>
        <input type="text" id="name" />
        <br />
        <label htmlFor="name">Name</label>
        <input type="text" id="name" />
        <br />
        <button className="bg-gray-500" onClick={addUserToDB}>
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
