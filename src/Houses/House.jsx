import React from 'react';
import './Houses.css';
import HouseSideBar from './HouseSideBar';
import HouseSection from './HouseSection';
import HouseCard from './HouseCard';
import PopularSearches from '../MobilesComponent/PopularSearches';
const House = () => {
  return (
      <>
    <div style={{ display: 'flex', gap: '20px', padding: '20px' }}>
<HouseSideBar />
   
    <div className='section'>
    <HouseSection />
     <HouseCard />
    </div>
    </div>
    <div className="popular">
  <PopularSearches />

    </div>
    
    </>
  );
}

export default House;
