import React from 'react';
import Banner from '../Home/Banner.png'

const BannerAd = () => {
  return (
    <>
    <div className='flex flex-col justify-center items-center mt-19'>
      <img className='w-[82%] flex justify-center items-center max-sm:ml-27 max-sm:w-[75%] ' src={Banner} alt="" />

    </div>

    </>
  );
}

export default BannerAd;
