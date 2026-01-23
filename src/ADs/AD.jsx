import React from 'react';
import { Routes, Route} from 'react-router-dom';
import Favourites from './Favourites';
import MyAds from './MyAds';
import Ads from './Ads';

const AD = () => {
  return (
   <>

<Ads/>
<Routes>
<Route path='myads' element={<MyAds/>} />
<Route path='favourites' element={<Favourites/>} />
</Routes>

   </>
  );
}

export default AD;
