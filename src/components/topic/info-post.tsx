import React from 'react';

type Props = {};

const Info = (props: Props) => {
  return (
    <div className="ml-4 flex items-start">
      <img
        src="https://www.shareicon.net/data/512x512/2016/08/05/806962_user_512x512.png"
        alt="Avatar"
        className="mr-3 h-10 w-10 rounded-full"
      />
      <div>
        <a
          href="#"
          className="font-semibold text-black text-gray-900 hover:text-blue-600 dark:text-white"
        >
          Nguyen Van A
        </a>
        <a
          href="#"
          className="font-semi text-black text-gray-400 hover:text-blue-600 dark:text-white"
        >
          {' '}
          checked-in at Strawberry Farm
        </a>
        <div className="text-sm text-black text-gray-600 dark:text-white">
          April 7 at 10:30 AM
        </div>
      </div>
    </div>
  );
};

export default Info;
