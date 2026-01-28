import React from 'react';
import cartner from '../Home/PartnerPic/cartner.png'
import facebook from '../Home/PartnerPic/facebook.png'
import microsoft from '../Home/PartnerPic/microsoft.png'
import chanel from '../Home/PartnerPic/chanel.png'
import hermes from '../Home/PartnerPic/hermes.png'
import dg from '../Home/PartnerPic/d&g.png'

const Partners = () => {
  return (
    <>
       <div className="view">
                       <h2>Our Partners</h2>
                       <h3>View More</h3>
                   </div>
               <div className='flex flex-row justify-evenly items-center max-sm:flex-wrap max-sm:gap-7 max-sm:justify-center max-sm:ml-27'>
                           <img className='w-[7vw] max-sm:w-[25vw]' src={cartner} alt="" />
                           <img className='w-[7vw] max-sm:w-[25vw]' src={facebook} alt="" />
                           <img className='w-[7vw] max-sm:w-[25vw]' src={chanel} alt="" />
                           <img className='w-[7vw] max-sm:w-[25vw]' src={microsoft} alt="" />
                           <img className='w-[7vw] max-sm:w-[25vw]' src={hermes} alt="" />
                           <img className='w-[7vw] max-sm:w-[25vw]' src={dg} alt="" />
               </div>
               </>
  );
}

export default Partners;
