import React from 'react';
import './Cars.css';
import CarSideBar from './CarSideBar';
import CarSection from './CarSection';
import CarCard from './CarCard';
import PopularSearches from '../MobilesComponent/PopularSearches';  

const Car = () => {
  return (
    <>
    <div style={{ display: 'flex', gap: '20px', padding: '20px' }}>
    <CarSideBar />
   
    <div className='section'>
      <CarSection />
      <CarCard />
    </div>
    </div>
    <div className="popular">
    <PopularSearches />

    </div>
    
    </>
  );
}

export default Car;
