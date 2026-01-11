import React from 'react';
import './MobilePhones.css'
import mobile from '../Home/Mobile/mobile.png'
import { useNavigate } from 'react-router-dom';

const MobilePhones = () => {
    const navigate = useNavigate()

    return (

        <>
            <div className="view">
                <h2>Mobile Phones</h2>
                <h3>View More</h3>
            </div>
            <div className='flex flex-row gap-5 mt-5 mr-0 mb-2.5 ml-27'>

                <div className="flex gap-5 py-4 px-2.5" onClick={() => {
                    navigate("/mobiledetails")
                }}>
                    <div className=" relative flex w-64 h-81 flex-col bg-[#f5f5f5] py-1.25 px-2.5">
                        <img className='w-full h-44 rounded-tl-xl rounded-tr-xl ' src={mobile} alt="" />
                        <div className='content py-1.25 px-2.5'>
                            <h6 className=' absolute top-3.5 right-3.5 bg-[black] text-[white] py-1.25 px-3 rounded-xl'>NEW</h6>
                            <h3 className=' w-53.75 h-11 font-semibold text-sm text-[#141821] leading-5 tracking-normal font-[Poppins] '>iPhone 14 Pro Max 1TB Factory Uncloked</h3>
                            <h4 className=' w-54 h-6 font-normal text-[#858997] text-xs leading-6 font-[Poppins] tracking-normal  '>DC Chowk, Rahim Yar Khan</h4>
                            <p className='w-54 h-3.5 font-[Poppins] leading-full text-[#000000] leading-none  text-xs tracking-normal'>6 days ago</p>
                            <div className=" flex flex-row items-center justify-between ">
                                <h2 className='w-32 h-5 text-[#000000] leading-5.2 text-lg font-bold'>Rs. 1,80,000</h2>
                                <svg width="20" height="20" viewBox="0 0 23 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M11.3376 19.0007L2.35745 9.75536C1.5682 8.9769 1.04729 7.97291 0.86858 6.88579C0.689874 5.79867 0.862451 4.68361 1.36183 3.69874V3.69874C1.7384 2.95553 2.28849 2.31128 2.96676 1.81906C3.64503 1.32685 4.43207 1.00077 5.26305 0.867687C6.09402 0.734603 6.94514 0.798327 7.74627 1.05361C8.5474 1.30889 9.27562 1.74842 9.87092 2.33598L11.3376 3.78288L12.8044 2.33598C13.3997 1.74842 14.1279 1.30889 14.929 1.05361C15.7302 0.798327 16.5813 0.734603 17.4123 0.867687C18.2432 1.00077 19.0303 1.32685 19.7085 1.81906C20.3868 2.31128 20.9369 2.95553 21.3135 3.69874C21.8122 4.68323 21.9845 5.79763 21.8059 6.88413C21.6274 7.97063 21.1071 8.97416 20.3188 9.75259L11.3376 19.0007Z" stroke="#333333" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>


            </div>

        </>
    );
}

export default MobilePhones;
