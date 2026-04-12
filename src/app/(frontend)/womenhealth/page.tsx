import React from 'react';
import Link from 'next/link';

const WomenhealthPage = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="text-center p-8 rounded-lg shadow-md bg-gray-950">
        <h1 className="text-3xl font-bold text-white mb-4">
          Women Health Feature - Coming Soon!
        </h1>
        <p className="text-lg font-bold text-white mb-6">
          We are working hard to bring you this feature. Stay tuned for updates!
        </p>
        <p className="text-sm font-bold text-white mb-4">
          In the meantime, explore other features like our PCOS test and wellness resources.
        </p>
        <Link href="http://127.0.0.1:5000/" passHref>
          <button className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-400">
            Take the PCOS Test
          </button>
        </Link>
      </div>
    </div>
  );
};

export default WomenhealthPage;
