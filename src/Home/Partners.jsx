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
               <div className='partner'>
                           <img className='cartner' src={cartner} alt="" />
                           <img className='facebook' src={facebook} alt="" />
                           <img className='chanel' src={chanel} alt="" />
                           <img className='microsoft' src={microsoft} alt="" />
                           <img className='hermes' src={hermes} alt="" />
                           <img className='dg' src={dg} alt="" />
               </div>
               </>
  );
}

export default Partners;
