import React from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Favourites from './Favourites';
import MyAds from './MyAds';


const Ads = () => {
const navigate = useNavigate();

  return (
  <>

  <div className="flex flex-col mt-24 mb-6 mx-29 p-7 max-sm:mt-6">
    <div className="flex flex-row gap-7">
<div className="flex flex-col ">
<button className='text-[#858997] hover:text-[#333333] hover:underline font-normal font-[Poppins] text-sm cursor-pointer' onClick={() => {
    navigate("myads");
}}>My Ads</button>
</div>
<div className="flex flex-row">
<button className='text-[#858997] hover:text-[#333333] hover:underline font-[Poppins] font-normal text-sm cursor-pointer' onClick={() => {
    navigate("favourites");
}}>Favourites</button>
</div>
</div>
  </div>
  </>
  );
}

export default Ads;
