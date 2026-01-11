import React from 'react';
import CarSection from '../Cars/CarSection';
import CarCard from '../Cars/CarCard';
import PopularSearches from '../MobilesComponent/PopularSearches';
import MotorCycleSideBar from './MotorCycleSideBar';

const MotorCycle = () => {
    return (
        <>
            <div style={{ display: 'flex', gap: '20px', padding: '20px' }}>
                <MotorCycleSideBar />
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

export default MotorCycle;
