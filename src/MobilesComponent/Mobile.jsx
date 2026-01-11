import React from 'react';
import MobileSidebar from './MobileSidebar';
import MobileSection from './MobileSection';
import MobileCard from './MobileCard';
import PopularSearches from './PopularSearches';

const Mobile = () => {
  return (
    <>
    <div style={{ display: 'flex', gap: '20px', padding: '20px' }}>
      <MobileSidebar />
      <div className='section'>
        <MobileSection />
        <MobileCard />

      </div>

    </div>
<PopularSearches />

    </>
  );
};

export default Mobile;
