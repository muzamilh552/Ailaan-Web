import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { BACKENDURL } from '../services/variables';
import { useCallback } from 'react';
import chat from '../MobilesComponent/MobileCardPic/chat.png'
import call from '../MobilesComponent/MobileCardPic/call.png'
import heart from '../MobilesComponent/MobileCardPic/heart.png'
import car1 from '../Cars/CarPicture/car1.png'
import car2 from '../Cars/CarPicture/car2.png'
import car3 from '../Cars/CarPicture/car3.png'
import car4 from '../Cars/CarPicture/car4.png'

const HouseCard = () => {
const [availableHouse, setAvailableHouse] = useState([])
const fetchHouses = useCallback(async () => {
    try {
  const response = await axios.get(BACKENDURL + "/products/view-all/houses")
setAvailableHouse(response?.data?.data)      
    } catch (error) {
        console.log(error)
    }

},[])

useEffect(() => {
fetchHouses()
},[fetchHouses])

  return (
    <>
 <div className='mobileCategory'>
                             {availableHouse?.map((product) => {
                                 return (
                                     <div className="card">
                                         <div className="phoneCard">
                                             <img className='mobile' src={product?.product_display_image} alt={product?.product_name} />
                                             <h3>{product?.product_name}</h3>
                                             <h4>{product?.product_location}</h4>
                                             <p>{product?.created_at}</p>
                                             <div className="Rs">
                                                 <h2>Rs. {product?.product_price}</h2>
                                                 <svg width="20" height="20" viewBox="0 0 23 20" fill={product?.product_favourite ? "red" : "none"} xmlns="http://www.w3.org/2000/svg">
                                                     <path d="M11.3376 19.0007L2.35745 9.75536C1.5682 8.9769 1.04729 7.97291 0.86858 6.88579C0.689874 5.79867 0.862451 4.68361 1.36183 3.69874V3.69874C1.7384 2.95553 2.28849 2.31128 2.96676 1.81906C3.64503 1.32685 4.43207 1.00077 5.26305 0.867687C6.09402 0.734603 6.94514 0.798327 7.74627 1.05361C8.5474 1.30889 9.27562 1.74842 9.87092 2.33598L11.3376 3.78288L12.8044 2.33598C13.3997 1.74842 14.1279 1.30889 14.929 1.05361C15.7302 0.798327 16.5813 0.734603 17.4123 0.867687C18.2432 1.00077 19.0303 1.32685 19.7085 1.81906C20.3868 2.31128 20.9369 2.95553 21.3135 3.69874C21.8122 4.68323 21.9845 5.79763 21.8059 6.88413C21.6274 7.97063 21.1071 8.97416 20.3188 9.75259L11.3376 19.0007Z" stroke="#333333" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                                                 </svg>
                                             </div>
                                             <div className="twoBtn">
                                                 <button className="callBtn"><img className='call' src={call} alt="" />
                                                     Call</button>
                                                 <button className="chatBtn"><img className='chat' src={chat} alt="" />
                                                     Chat</button>
                                             </div>
                                         </div>
                                     </div>
                                 )
             
                             })
                             }
                         </div>

                          <div className="load">
                               <button className='loadBtn'>Load More</button>
                           </div>
                               <h1 className='viewed'>Recently <span>Viewed</span></h1>
                           
                           <div className="mobileCategory">
                                            <div className="card">
                                               <div className="phoneCard">
                                                   <img className='mobile' src={car3} alt="" />
                                                   <h3>Samsung Galaxy Note 20 Ultra</h3>
                                                   <h4>DC Chowk, Rahim Yar Khan</h4>
                                                   <p>6 days ago</p>
                                                   <div className="Rs">
                                                       <h2>Rs. 1,80,000</h2>
                                                       <img className='heart' src={heart} alt="" />
                                                   </div>
                                                   <div className="twoBtn">
                                                       <button className="callBtn"><img className='call' src={call} alt="" />
                                                           Call</button>
                                                       <button className="chatBtn"><img className='chat' src={chat} alt="" />
                                                           Chat</button>
                                                   </div>
                                               </div>
                                           </div>
                           
                                        <div className="card">
                                               <div className="phoneCard">
                                                   <img className='mobile' src={car1} alt="" />
                                                   <h3>Samsung Galaxy Note 20 Ultra</h3>
                                                   <h4>DC Chowk, Rahim Yar Khan</h4>
                                                   <p>6 days ago</p>
                                                   <div className="Rs">
                                                       <h2>Rs. 1,80,000</h2>
                                                       <img className='heart' src={heart} alt="" />
                                                   </div>
                                                   <div className="twoBtn">
                                                       <button className="callBtn"><img className='call' src={call} alt="" />
                                                           Call</button>
                                                       <button className="chatBtn"><img className='chat' src={chat} alt="" />
                                                           Chat</button>
                                                   </div>
                                               </div>
                                           </div>
                           
                                               <div className="card">
                                               <div className="phoneCard">
                                                   <img className='mobile' src={car4} alt="" />
                                                   <h3>Samsung Galaxy Note 20 Ultra</h3>
                                                   <h4>DC Chowk, Rahim Yar Khan</h4>
                                                   <p>6 days ago</p>
                                                   <div className="Rs">
                                                       <h2>Rs. 1,80,000</h2>
                                                       <img className='heart' src={heart} alt="" />
                                                   </div>
                                                   <div className="twoBtn">
                                                       <button className="callBtn"><img className='call' src={call} alt="" />
                                                           Call</button>
                                                       <button className="chatBtn"><img className='chat' src={chat} alt="" />
                                                           Chat</button>
                                                   </div>
                                               </div>
                                           </div>
                           
                           
                                               <div className="card">
                                               <div className="phoneCard">
                                                   <img className='mobile' src={car2} alt="" />
                                                   <h3>Samsung Galaxy Note 20 Ultra</h3>
                                                   <h4>DC Chowk, Rahim Yar Khan</h4>
                                                   <p>6 days ago</p>
                                                   <div className="Rs">
                                                       <h2>Rs. 1,80,000</h2>
                                                       <img className='heart' src={heart} alt="" />
                                                   </div>
                                                   <div className="twoBtn">
                                                       <button className="callBtn"><img className='call' src={call} alt="" />
                                                           Call</button>
                                                       <button className="chatBtn"><img className='chat' src={chat} alt="" />
                                                           Chat</button>
                                                   </div>
                                               </div>
                                           </div>
                           </div>


    </>

  );
}

export default HouseCard;
