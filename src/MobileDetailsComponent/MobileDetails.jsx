import React, { useEffect, useState } from 'react';
import './MobileDetails.css'
import p1 from '../MobileDetailsComponent/p1.png'
import p2 from '../MobileDetailsComponent/p2.png'
import p3 from '../MobileDetailsComponent/p3.png'
import p4 from '../MobileDetailsComponent/p4.png'

import usman from '../MobileDetailsComponent/usman.png'
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { BACKENDURL } from '../services/variables';

const MobileDetails = () => {

    const location=useLocation();
    const productId=location.state.productId;
    // const navigate=useNavigate();
const [singlePhone, setSinglePhone] = useState([])

    const fetchSingleMobile= async()=>{
        try {
            const response=await axios.get(BACKENDURL+ `/products/view-one/${productId}`);
            console.log("response ",response);
            setSinglePhone(response?.data?.data)
        } catch (error) {
            console.log(error)
        }

    }


    useEffect(()=>{

        if(productId){
            fetchSingleMobile();
        }

    },[])

    
/*


product_category
: 
"mobilephones"
product_display_image
: 
"https://images.unsplash.com/photo-1661961112958-fd9e2d2c9d9a"
product_favourite
: 
false
product_images
: 
(2) ['https://images.unsplash.com/photo-1661961112958-fd9e2d2c9d9a', 'https://images.unsplash.com/photo-1598327105666-5b89351aff97']
product_location
: 
"Lahore"
product_name
: 
"Google Pixel 7"
product_owner_id
: 
"d60c2b42-6d1e-498b-a480-423aa44d9ca4"
product_owners
: 
{id: 'd60c2b42-6d1e-498b-a480-423aa44d9ca4', created_at: '2026-01-11T07:57:09.109947+00:00', owner_name: 'Bilal Ahmed', owner_image: 'https://randomuser.me/api/portraits/men/55.jpg', owner_phone: '03055678901', …}
product_price
: 
215000*/


    return (
        <>
            <div className='flex flex-row gap-4 justify-around mt-26 ml-16'>
              
                <img className='w-171.5 h-131 ' src={singlePhone?.product_display_image} alt="" />
                <div className='flex flex-col justify-center items-start gap-6'>
                    <h1 className='font-[Poppins] font-semibold text-2xl leading-4 text-[#222222] text-start'>{singlePhone?.product_name}</h1>
                    <h1 className='font-[Poppins] font-semibold text-2xl leading-4 text-[#141821] text-start'>Rs. {singlePhone?.product_price}</h1>
                    <div className="flex flex-row justify-between items-center gap-57">
                        <p className='font-[Poppins] font-normal text-xs '>{singlePhone?.created_at}</p>
                        <div className="flex flex-row justify-between gap-4">
                        <svg width="19" height="19" viewBox="0 0 19 19" fill={singlePhone?.product_favourite ? "red": "white"} xmlns="http://www.w3.org/2000/svg">
                                <g clip-path="url(#clip0_236_3356)">
                                    <path d="M13.8379 1.88337C14.9814 1.8834 16.0805 2.34718 16.9326 3.20466C17.8684 4.14643 18.4091 5.48823 18.4004 6.8863C18.3933 8.00409 17.9465 9.2563 16.9971 10.6148C16.2632 11.6647 15.2355 12.7714 13.9316 13.9C11.8219 15.7261 9.74312 16.9644 9.49902 17.108C9.24778 16.9612 7.15871 15.723 5.04492 13.9C3.73609 12.7712 2.70756 11.6644 1.97656 10.6148C1.02996 9.25563 0.592598 8.00451 0.599609 6.88728C0.608143 5.5403 1.0906 4.28522 1.94434 3.34724C2.8106 2.39565 3.9525 1.88342 5.16211 1.88337C6.70824 1.88337 8.14688 2.75033 8.98438 4.16267L9.5 5.03278L10.0166 4.16267C10.8541 2.75047 12.2918 1.88337 13.8379 1.88337Z" stroke="#333333" stroke-width="1.2" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_236_3356">
                                        <rect width="19" height="19" fill="none" />
                                    </clipPath>
                                </defs>
                            </svg>

                            <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clip-path="url(#clip0_236_3352)">
                                    <path d="M15.0664 12.3203C13.9664 12.3203 12.9972 12.8614 12.3883 13.6843L7.12463 10.989C7.21202 10.6911 7.27344 10.3824 7.27344 10.0566C7.27344 9.61482 7.18285 9.19478 7.02636 8.80843L12.5351 5.49352C13.1481 6.213 14.0492 6.67969 15.0664 6.67969C16.9081 6.67969 18.4062 5.18154 18.4062 3.33984C18.4062 1.49814 16.9081 0 15.0664 0C13.2247 0 11.7266 1.49814 11.7266 3.33984C11.7266 3.76426 11.814 4.16686 11.9589 4.54063L6.43384 7.86526C5.82131 7.16716 4.93321 6.7168 3.93359 6.7168C2.09189 6.7168 0.59375 8.21494 0.59375 10.0566C0.59375 11.8983 2.09189 13.3965 3.93359 13.3965C5.0517 13.3965 6.03736 12.8395 6.64388 11.9935L11.8903 14.6801C11.7936 14.992 11.7266 15.3169 11.7266 15.6602C11.7266 17.5019 13.2247 19 15.0664 19C16.9081 19 18.4062 17.5019 18.4062 15.6602C18.4062 13.8185 16.9081 12.3203 15.0664 12.3203Z" fill="#333333" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_236_3352">
                                        <rect width="19" height="19" fill="white" />
                                    </clipPath>
                                </defs>
                            </svg>

                        </div>
                    </div>
                    <div className="flex flex-row gap-3">
                        <img className='w-19 h-19 rounded-full' src={singlePhone?.product_owners?.owner_image} alt="" />
                        <div className="flex flex-col ">
                            <p className='font-[Poppins] font-bold text-sm leading-5 text-[#002F34]'>{singlePhone?.product_owners?.owner_name}</p>
                            <p className='font-[Poppins] font-normal text-sm leading-5 text-[#002F34] '> {singlePhone?.product_owners?.created_at} </p>
                            <p className='font-[Poppins] font-bold text-sm leading-5 text-[#002F34] flex flex-row gap-5 items-center'>See profile <span><svg width="8" height="13" viewBox="0 0 8 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0.249082 1.35078C-0.0759177 1.02578 -0.0352927 0.497656 0.289707 0.213281C0.614707 -0.0710938 1.10221 -0.0710938 1.38658 0.213281L7.07408 5.90078C7.39908 6.22578 7.39908 6.71328 7.07408 7.03828L1.38658 12.7258C1.06158 13.0508 0.574082 13.0508 0.249082 12.7664C-0.0759177 12.4414 -0.0759178 11.9539 0.208457 11.6289L0.249082 11.5883L5.36783 6.51016L0.249082 1.35078Z" fill="#002F34" />
                            </svg>
                            </span></p>
                        </div>
                    </div>
                    <div className="flex flex-col gap-4 border-2-[#D8DFE0]">
                        <button className='bg-[#2BBEF9] w-95 h-13.75 text-[#FFFFFF] text-sm items-center justify-center rounded-4xl flex flex-row gap-3 rounded-13'><span><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M16.3877 17.978C8.61984 17.6348 2.36484 11.3798 2.02195 3.61195L5.53688 2.2057L7.68586 6.50484L6.0218 7.33687V7.9568C6.0218 11.277 8.72297 13.9779 12.0429 13.9779H12.6628L12.9408 13.4238L13.4958 12.3138L17.7938 14.464L16.3877 17.978ZM19.5178 13.0807L13.4958 10.0699L12.1488 10.5199L11.4448 11.9269C9.70875 11.6667 8.33391 10.2909 8.07281 8.55492L9.48094 7.85086L9.92953 6.50484L6.92016 0.482813L5.64984 0L0.63 2.00695L0 2.93977C0 12.3469 7.65399 19.9999 17.0611 19.9999L17.993 19.3699L20.0002 14.3498L19.5171 13.0798L19.5178 13.0807Z" fill="white" />
                        </svg>
                        </span>Show phone number</button>
                        <button className='text-[#2BBEF9] w-95 h-13.75 bg-[#FFFFFF] text-sm items-center justify-center rounded-4xl flex flex-row gap-3 rounded-13 border-2'><span><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M17 6.6C17.9166 7.19647 18.6705 8.01133 19.1942 8.97135C19.7178 9.93137 19.9947 11.0065 20 12.1V20L17.6 18.8H11.6C10.3969 18.7856 9.22068 18.4426 8.19842 17.8081C7.17617 17.1736 6.34681 16.2717 5.8 15.2H8.2C9.1 16.2 10.2 16.7 11.6 16.7H17.6L18 16.8V12.1C17.9988 10.905 17.5325 9.75731 16.7 8.9C16.9 8.1 17 7.4 17 6.6ZM8.4 0C10.1504 0 11.8292 0.695355 13.0669 1.9331C14.3046 3.17084 15 4.84957 15 6.6C15 8.35043 14.3046 10.0292 13.0669 11.2669C11.8292 12.5046 10.1504 13.2 8.4 13.2H2.8L2.4 13.3L0 14.5V6.6C0 3 3 0 6.6 0H8.4ZM8.4 2H6.6C5.38 2 4.20998 2.48464 3.34731 3.34731C2.48464 4.20998 2 5.38 2 6.6V11.3H2.3L2.6 11.2H8.4C9.00408 11.2 9.60225 11.081 10.1603 10.8498C10.7184 10.6187 11.2255 10.2798 11.6527 9.85269C12.0798 9.42554 12.4187 8.91844 12.6498 8.36034C12.881 7.80225 13 7.20408 13 6.6C13 4.1 11 2 8.4 2Z" fill="#2BBEF9" />
                        </svg>
                        </span>Chat</button>
                    </div>
                    <div className="flex flex-col gap-3 ">
                        <h1 className='font-[Poppins] font-bold text-2xl text-[#002F34] leading-6'>Location</h1>
                        <div className="flex flex-row gap-4 items-center">
                            <svg width="18" height="20" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M9 0C13.9629 0 18 4.03758 18 9C18 13.7011 12.9656 18.1955 10.672 20.0002H7.32844C5.03508 18.1955 0 13.7009 0 9C0 4.03758 4.03758 0 9 0ZM9 2.00016C5.14055 2.00016 1.99992 5.14008 1.99992 9C1.99992 12.7505 6.61453 16.9812 8.99508 18.7641C10.7484 17.4347 16.0001 13.1081 16.0001 9C16.0001 5.14008 12.8599 2.00016 9 2.00016ZM9 4.99992C11.2055 4.99992 13.0001 6.7943 13.0001 9C13.0001 11.2057 11.2057 12.9998 9.00023 12.9998C6.79477 12.9998 5.00016 11.2055 5.00016 9C5.00016 6.79453 6.79453 4.99992 9 4.99992ZM9 6.99984C7.89703 6.99984 7.00008 7.89703 7.00008 9C7.00008 10.103 7.89703 10.9999 9.00023 10.9999C10.1034 10.9999 11.0002 10.103 11.0002 9C11.0002 7.89703 10.1032 6.99984 9.00023 6.99984H9Z" fill="#002F34" />
                            </svg>

                            <p className='font-[Poppins] font-normal text-sm text-[#002F34] '>Dharampura, Lahore</p>
                        </div>
                    </div>
                    <div className="flex flex-row gap-27 items-center">
                        <h1 className='font-[Poppins] font-normal leading-6 text-sm uppercase'>Ad id 1071950120</h1>
                        <div className="flex flex-row gap-4 font-bold items-center">
                            <svg width="15" height="16" viewBox="0 0 15 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M12 9.1H1.7V1.6H12L10.2 4.6L9.7 5.4L10.2 6.3L12 9.1ZM13.5 0H0V15.8L0.8 16.6L1.8 15.8V10.8H13.5L14.2 9.5L11.7 5.3L14.2 1.1L13.5 0Z" fill="#002F34" />
                            </svg>

                            <p>Report this ad</p>
                        </div>
                    </div>
                </div>

            </div>
            <div className="flex flex-row gap-5 mt-12 ml-29">
                {singlePhone?.product_images?.map((image)=>{
                    return (
                        <div className='w-32 h-32 rounded-b-lg rounded-t-lg bg-gray-100'>
                <img className='h-full w-full' src={image} alt="" />

                            </div>
                    )
                })}
               

            </div>
            <div className="flex flex-row gap-7  mt-12 ml-29">
                <div className="flex flex-col justify-between w-67 h-44 border-gray-900  ">
                    <h1 className='font-[Poppins] font-bold text-2xl leading-6 items-center'>Details</h1>
                    <div className="flex flex-row justify-between ">
                        <p className='font-[Poppins] font-normal text-[#002F34] text-sm'>Brand</p>
                        <p className='font-[Poppins] font-bold text-[#002F34] text-sm'>Infinix</p>
                    </div>
                    <div className="flex flex-row justify-between ">
                        <p className='font-[Poppins] font-normal text-[#002F34] text-sm'>Condition</p>
                        <p className='font-[Poppins] font-bold text-[#002F34] text-sm'>New</p>
                    </div>
                    <div className="flex flex-row justify-between ">
                        <p className='font-[Poppins] font-normal text-[#002F34] text-sm'>Price</p>
                        <p className='font-[Poppins] font-bold text-[#002F34] text-sm'>29,000</p>
                    </div>

                </div>
                <div className="w-214 h-44 flex flex-col ">
                    <h1 className='font-[Poppins] font-bold text-2xl leading-6 items-center mb-4'>Details</h1>
                    <p className='font-[Poppins] font-normal text-xs leading-5 text-[#5A5A5A]'>Samsung  fold 2 note 20 Ultra available PT approve non PTA sim time available</p>
                </div>
            </div>

            <h1 className='mt-12 ml-29 font-bold'>Related Ads</h1>

            <div className='flex flex-row mt-5 mr-0 mb-2.5 ml-27'>
                <div className="flex gap-5 py-4 px-2.5 ">
                    <div className=" relative flex w-64 h-81 flex-col bg-[#f5f5f5] py-1.25 px-2.5">
                        <img className='w-full h-44 rounded-tl-xl rounded-tr-xl ' src={p3} alt="" />
                        <div className='content py-1.25 px-2.5'>
                            <h3 className=' w-53.75 h-11 font-semibold text-sm text-[#141821] leading-5 tracking-normal font-[Poppins] '>iPhone 14 Pro Max 1TB Factory Uncloked</h3>
                            <h4 className=' w-54 h-6 font-normal text-[#858997] text-xs leading-6 font-[Poppins] tracking-normal  '>DC Chowk, Rahim Yar Khan</h4>
                            <p className='w-54 h-3.5 font-[Poppins] leading-full text-[#000000] leading-none  text-xs tracking-normal'>6 days ago</p>
                            <div className=" flex flex-row items-center justify-between ">
                                <h2 className='w-32 h-5 text-[#000000] leading-5.2 text-lg font-bold'>Rs. 1,80,000</h2>
                                <svg width="20" height="20" viewBox="0 0 23 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M11.3376 19.0007L2.35745 9.75536C1.5682 8.9769 1.04729 7.97291 0.86858 6.88579C0.689874 5.79867 0.862451 4.68361 1.36183 3.69874V3.69874C1.7384 2.95553 2.28849 2.31128 2.96676 1.81906C3.64503 1.32685 4.43207 1.00077 5.26305 0.867687C6.09402 0.734603 6.94514 0.798327 7.74627 1.05361C8.5474 1.30889 9.27562 1.74842 9.87092 2.33598L11.3376 3.78288L12.8044 2.33598C13.3997 1.74842 14.1279 1.30889 14.929 1.05361C15.7302 0.798327 16.5813 0.734603 17.4123 0.867687C18.2432 1.00077 19.0303 1.32685 19.7085 1.81906C20.3868 2.31128 20.9369 2.95553 21.3135 3.69874C21.8122 4.68323 21.9845 5.79763 21.8059 6.88413C21.6274 7.97063 21.1071 8.97416 20.3188 9.75259L11.3376 19.0007Z" stroke="#333333" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </div>
                            <div className="flex flex-row gap-4 mt-4">
                                <button className=' w-23 h-9 bg-[white] text-[black] rounded-2xl flex flex-row gap-2 items-center justify-center '><span><svg width="13" height="14" viewBox="0 0 13 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M11.4007 9.58771C10.5685 8.87595 9.72396 8.44481 8.902 9.1555L8.41119 9.58502C8.05208 9.89682 7.38441 11.3537 4.80294 8.38407C2.22202 5.41823 3.75789 4.95645 4.11753 4.64734L4.61103 4.21728C5.42869 3.50498 5.12012 2.6083 4.53039 1.68527L4.17451 1.12619C3.5821 0.205312 2.937 -0.399466 2.11719 0.311753L1.67422 0.698811C1.31189 0.962763 0.299092 1.82074 0.053418 3.45069C-0.242251 5.40641 0.690451 7.64597 2.82734 10.1033C4.96153 12.5616 7.05111 13.7964 9.03048 13.7749C10.6755 13.7572 11.6689 12.8745 11.9796 12.5535L12.4242 12.1659C13.2419 11.4553 12.7339 10.7317 11.9012 10.0183L11.4007 9.58771Z" fill="#141821" />
                                </svg>
                                </span>Call</button>
                                <button className='w-23 h-9 bg-[#2BBEF9] text-[white] rounded-2xl items-center justify-center flex flex-row gap-2'><span><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clip-path="url(#clip0_235_2576)">
                                        <path d="M14.6381 11.2744C16.1467 9.15772 15.9161 6.25771 13.8555 4.36866C12.9139 3.50557 11.7137 2.96826 10.4171 2.8182C10.409 2.80826 10.4007 2.79841 10.3917 2.78899C9.26373 1.61731 7.64323 0.945312 5.9457 0.945312C2.71534 0.945312 0 3.35219 0 6.43399C0 7.5145 0.335633 8.5503 0.973204 9.44487L0.0825436 12.2412C0.0265591 12.417 0.0816289 12.6091 0.22217 12.7286C0.362954 12.8482 0.561553 12.8712 0.725634 12.7877L3.43421 11.4105C3.99045 11.65 4.5803 11.8072 5.19113 11.8787C6.36943 13.1178 7.99868 13.7522 9.66557 13.7522C10.532 13.7522 11.3954 13.5756 12.1769 13.24L14.8856 14.6173C14.9512 14.6507 15.0222 14.667 15.0928 14.667C15.4015 14.667 15.6228 14.3662 15.5287 14.0708L14.6381 11.2744ZM3.61881 10.4902C3.49071 10.4293 3.34169 10.4313 3.2153 10.4956L1.28612 11.4766L1.9161 9.49863C1.96196 9.35461 1.93375 9.19727 1.84069 9.07819C1.23492 8.30277 0.914719 7.38844 0.914719 6.43399C0.914719 3.91194 3.1716 1.86009 5.9457 1.86009C7.06283 1.86009 8.13828 2.19853 9.01064 2.80799C6.07274 3.1034 3.71986 5.3981 3.71986 8.26355C3.71986 9.15479 3.94831 10.0128 4.37902 10.7815C4.11825 10.7038 3.86427 10.6067 3.61881 10.4902ZM12.396 12.3251C12.2714 12.2618 12.1223 12.258 11.9925 12.3197C11.2794 12.6584 10.4748 12.8375 9.66557 12.8375C6.89146 12.8375 4.63458 10.7856 4.63458 8.26355C4.63458 5.7415 6.89146 3.68965 9.66557 3.68965C12.4397 3.68965 14.6966 5.7415 14.6966 8.26355C14.6966 9.218 14.3763 10.1323 13.7705 10.9077C13.6775 11.0268 13.6493 11.1841 13.6951 11.3282L14.3251 13.3061L12.396 12.3251Z" fill="white" />
                                        <path d="M7.80553 8.72093C8.05814 8.72093 8.26292 8.51615 8.26292 8.26354C8.26292 8.01093 8.05814 7.80615 7.80553 7.80615C7.55292 7.80615 7.34814 8.01093 7.34814 8.26354C7.34814 8.51615 7.55292 8.72093 7.80553 8.72093Z" fill="white" />
                                        <path d="M9.63512 8.72093C9.88773 8.72093 10.0925 8.51615 10.0925 8.26354C10.0925 8.01093 9.88773 7.80615 9.63512 7.80615C9.38251 7.80615 9.17773 8.01093 9.17773 8.26354C9.17773 8.51615 9.38251 8.72093 9.63512 8.72093Z" fill="white" />
                                        <path d="M11.4647 8.72093C11.7173 8.72093 11.9221 8.51615 11.9221 8.26354C11.9221 8.01093 11.7173 7.80615 11.4647 7.80615C11.2121 7.80615 11.0073 8.01093 11.0073 8.26354C11.0073 8.51615 11.2121 8.72093 11.4647 8.72093Z" fill="white" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_235_2576">
                                            <rect width="15.6122" height="15.6122" fill="white" />
                                        </clipPath>
                                    </defs>
                                </svg>
                                </span>Chat</button>

                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex gap-5 py-4 px-2.5">
                    <div className=" relative flex w-64 h-81 flex-col bg-[#f5f5f5] py-1.25 px-2.5">
                        <img className='w-full h-44 rounded-tl-xl rounded-tr-xl ' src={p4} alt="" />
                        <div className='content py-1.25 px-2.5'>
                            <h3 className=' w-53.75 h-11 font-semibold text-sm text-[#141821] leading-5 tracking-normal font-[Poppins] '>iPhone 14 Pro Max 1TB Factory Uncloked</h3>
                            <h4 className=' w-54 h-6 font-normal text-[#858997] text-xs leading-6 font-[Poppins] tracking-normal  '>DC Chowk, Rahim Yar Khan</h4>
                            <p className='w-54 h-3.5 font-[Poppins] leading-full text-[#000000] leading-none  text-xs tracking-normal'>6 days ago</p>
                            <div className=" flex flex-row items-center justify-between ">
                                <h2 className='w-32 h-5 text-[#000000] leading-5.2 text-lg font-bold'>Rs. 1,80,000</h2>
                                <svg width="20" height="20" viewBox="0 0 23 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M11.3376 19.0007L2.35745 9.75536C1.5682 8.9769 1.04729 7.97291 0.86858 6.88579C0.689874 5.79867 0.862451 4.68361 1.36183 3.69874V3.69874C1.7384 2.95553 2.28849 2.31128 2.96676 1.81906C3.64503 1.32685 4.43207 1.00077 5.26305 0.867687C6.09402 0.734603 6.94514 0.798327 7.74627 1.05361C8.5474 1.30889 9.27562 1.74842 9.87092 2.33598L11.3376 3.78288L12.8044 2.33598C13.3997 1.74842 14.1279 1.30889 14.929 1.05361C15.7302 0.798327 16.5813 0.734603 17.4123 0.867687C18.2432 1.00077 19.0303 1.32685 19.7085 1.81906C20.3868 2.31128 20.9369 2.95553 21.3135 3.69874C21.8122 4.68323 21.9845 5.79763 21.8059 6.88413C21.6274 7.97063 21.1071 8.97416 20.3188 9.75259L11.3376 19.0007Z" stroke="#333333" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </div>
                            <div className="flex flex-row gap-4 mt-4">
                                <button className=' w-23 h-9 bg-[white] text-[black] rounded-2xl flex flex-row gap-2 items-center justify-center '><span><svg width="13" height="14" viewBox="0 0 13 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M11.4007 9.58771C10.5685 8.87595 9.72396 8.44481 8.902 9.1555L8.41119 9.58502C8.05208 9.89682 7.38441 11.3537 4.80294 8.38407C2.22202 5.41823 3.75789 4.95645 4.11753 4.64734L4.61103 4.21728C5.42869 3.50498 5.12012 2.6083 4.53039 1.68527L4.17451 1.12619C3.5821 0.205312 2.937 -0.399466 2.11719 0.311753L1.67422 0.698811C1.31189 0.962763 0.299092 1.82074 0.053418 3.45069C-0.242251 5.40641 0.690451 7.64597 2.82734 10.1033C4.96153 12.5616 7.05111 13.7964 9.03048 13.7749C10.6755 13.7572 11.6689 12.8745 11.9796 12.5535L12.4242 12.1659C13.2419 11.4553 12.7339 10.7317 11.9012 10.0183L11.4007 9.58771Z" fill="#141821" />
                                </svg>
                                </span>Call</button>
                                <button className='w-23 h-9 bg-[#2BBEF9] text-[white] rounded-2xl items-center justify-center flex flex-row gap-2'><span><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clip-path="url(#clip0_235_2576)">
                                        <path d="M14.6381 11.2744C16.1467 9.15772 15.9161 6.25771 13.8555 4.36866C12.9139 3.50557 11.7137 2.96826 10.4171 2.8182C10.409 2.80826 10.4007 2.79841 10.3917 2.78899C9.26373 1.61731 7.64323 0.945312 5.9457 0.945312C2.71534 0.945312 0 3.35219 0 6.43399C0 7.5145 0.335633 8.5503 0.973204 9.44487L0.0825436 12.2412C0.0265591 12.417 0.0816289 12.6091 0.22217 12.7286C0.362954 12.8482 0.561553 12.8712 0.725634 12.7877L3.43421 11.4105C3.99045 11.65 4.5803 11.8072 5.19113 11.8787C6.36943 13.1178 7.99868 13.7522 9.66557 13.7522C10.532 13.7522 11.3954 13.5756 12.1769 13.24L14.8856 14.6173C14.9512 14.6507 15.0222 14.667 15.0928 14.667C15.4015 14.667 15.6228 14.3662 15.5287 14.0708L14.6381 11.2744ZM3.61881 10.4902C3.49071 10.4293 3.34169 10.4313 3.2153 10.4956L1.28612 11.4766L1.9161 9.49863C1.96196 9.35461 1.93375 9.19727 1.84069 9.07819C1.23492 8.30277 0.914719 7.38844 0.914719 6.43399C0.914719 3.91194 3.1716 1.86009 5.9457 1.86009C7.06283 1.86009 8.13828 2.19853 9.01064 2.80799C6.07274 3.1034 3.71986 5.3981 3.71986 8.26355C3.71986 9.15479 3.94831 10.0128 4.37902 10.7815C4.11825 10.7038 3.86427 10.6067 3.61881 10.4902ZM12.396 12.3251C12.2714 12.2618 12.1223 12.258 11.9925 12.3197C11.2794 12.6584 10.4748 12.8375 9.66557 12.8375C6.89146 12.8375 4.63458 10.7856 4.63458 8.26355C4.63458 5.7415 6.89146 3.68965 9.66557 3.68965C12.4397 3.68965 14.6966 5.7415 14.6966 8.26355C14.6966 9.218 14.3763 10.1323 13.7705 10.9077C13.6775 11.0268 13.6493 11.1841 13.6951 11.3282L14.3251 13.3061L12.396 12.3251Z" fill="white" />
                                        <path d="M7.80553 8.72093C8.05814 8.72093 8.26292 8.51615 8.26292 8.26354C8.26292 8.01093 8.05814 7.80615 7.80553 7.80615C7.55292 7.80615 7.34814 8.01093 7.34814 8.26354C7.34814 8.51615 7.55292 8.72093 7.80553 8.72093Z" fill="white" />
                                        <path d="M9.63512 8.72093C9.88773 8.72093 10.0925 8.51615 10.0925 8.26354C10.0925 8.01093 9.88773 7.80615 9.63512 7.80615C9.38251 7.80615 9.17773 8.01093 9.17773 8.26354C9.17773 8.51615 9.38251 8.72093 9.63512 8.72093Z" fill="white" />
                                        <path d="M11.4647 8.72093C11.7173 8.72093 11.9221 8.51615 11.9221 8.26354C11.9221 8.01093 11.7173 7.80615 11.4647 7.80615C11.2121 7.80615 11.0073 8.01093 11.0073 8.26354C11.0073 8.51615 11.2121 8.72093 11.4647 8.72093Z" fill="white" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_235_2576">
                                            <rect width="15.6122" height="15.6122" fill="white" />
                                        </clipPath>
                                    </defs>
                                </svg>
                                </span>Chat</button>

                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex gap-5 py-4 px-2.5">
                    <div className=" relative flex w-64 h-81 flex-col bg-[#f5f5f5] py-1.25 px-2.5">
                        <img className='w-full h-44 rounded-tl-xl rounded-tr-xl ' src={p2} alt="" />
                        <div className='content py-1.25 px-2.5'>
                            <h3 className=' w-53.75 h-11 font-semibold text-sm text-[#141821] leading-5 tracking-normal font-[Poppins] '>iPhone 14 Pro Max 1TB Factory Uncloked</h3>
                            <h4 className=' w-54 h-6 font-normal text-[#858997] text-xs leading-6 font-[Poppins] tracking-normal  '>DC Chowk, Rahim Yar Khan</h4>
                            <p className='w-54 h-3.5 font-[Poppins] leading-full text-[#000000] leading-none  text-xs tracking-normal'>6 days ago</p>
                            <div className=" flex flex-row items-center justify-between ">
                                <h2 className='w-32 h-5 text-[#000000] leading-5.2 text-lg font-bold'>Rs. 1,80,000</h2>
                                <svg width="20" height="20" viewBox="0 0 23 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M11.3376 19.0007L2.35745 9.75536C1.5682 8.9769 1.04729 7.97291 0.86858 6.88579C0.689874 5.79867 0.862451 4.68361 1.36183 3.69874V3.69874C1.7384 2.95553 2.28849 2.31128 2.96676 1.81906C3.64503 1.32685 4.43207 1.00077 5.26305 0.867687C6.09402 0.734603 6.94514 0.798327 7.74627 1.05361C8.5474 1.30889 9.27562 1.74842 9.87092 2.33598L11.3376 3.78288L12.8044 2.33598C13.3997 1.74842 14.1279 1.30889 14.929 1.05361C15.7302 0.798327 16.5813 0.734603 17.4123 0.867687C18.2432 1.00077 19.0303 1.32685 19.7085 1.81906C20.3868 2.31128 20.9369 2.95553 21.3135 3.69874C21.8122 4.68323 21.9845 5.79763 21.8059 6.88413C21.6274 7.97063 21.1071 8.97416 20.3188 9.75259L11.3376 19.0007Z" stroke="#333333" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </div>
                            <div className="flex flex-row gap-4 mt-4">
                                <button className=' w-23 h-9 bg-[white] text-[black] rounded-2xl flex flex-row gap-2 items-center justify-center '><span><svg width="13" height="14" viewBox="0 0 13 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M11.4007 9.58771C10.5685 8.87595 9.72396 8.44481 8.902 9.1555L8.41119 9.58502C8.05208 9.89682 7.38441 11.3537 4.80294 8.38407C2.22202 5.41823 3.75789 4.95645 4.11753 4.64734L4.61103 4.21728C5.42869 3.50498 5.12012 2.6083 4.53039 1.68527L4.17451 1.12619C3.5821 0.205312 2.937 -0.399466 2.11719 0.311753L1.67422 0.698811C1.31189 0.962763 0.299092 1.82074 0.053418 3.45069C-0.242251 5.40641 0.690451 7.64597 2.82734 10.1033C4.96153 12.5616 7.05111 13.7964 9.03048 13.7749C10.6755 13.7572 11.6689 12.8745 11.9796 12.5535L12.4242 12.1659C13.2419 11.4553 12.7339 10.7317 11.9012 10.0183L11.4007 9.58771Z" fill="#141821" />
                                </svg>
                                </span>Call</button>
                                <button className='w-23 h-9 bg-[#2BBEF9] text-[white] rounded-2xl items-center justify-center flex flex-row gap-2'><span><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clip-path="url(#clip0_235_2576)">
                                        <path d="M14.6381 11.2744C16.1467 9.15772 15.9161 6.25771 13.8555 4.36866C12.9139 3.50557 11.7137 2.96826 10.4171 2.8182C10.409 2.80826 10.4007 2.79841 10.3917 2.78899C9.26373 1.61731 7.64323 0.945312 5.9457 0.945312C2.71534 0.945312 0 3.35219 0 6.43399C0 7.5145 0.335633 8.5503 0.973204 9.44487L0.0825436 12.2412C0.0265591 12.417 0.0816289 12.6091 0.22217 12.7286C0.362954 12.8482 0.561553 12.8712 0.725634 12.7877L3.43421 11.4105C3.99045 11.65 4.5803 11.8072 5.19113 11.8787C6.36943 13.1178 7.99868 13.7522 9.66557 13.7522C10.532 13.7522 11.3954 13.5756 12.1769 13.24L14.8856 14.6173C14.9512 14.6507 15.0222 14.667 15.0928 14.667C15.4015 14.667 15.6228 14.3662 15.5287 14.0708L14.6381 11.2744ZM3.61881 10.4902C3.49071 10.4293 3.34169 10.4313 3.2153 10.4956L1.28612 11.4766L1.9161 9.49863C1.96196 9.35461 1.93375 9.19727 1.84069 9.07819C1.23492 8.30277 0.914719 7.38844 0.914719 6.43399C0.914719 3.91194 3.1716 1.86009 5.9457 1.86009C7.06283 1.86009 8.13828 2.19853 9.01064 2.80799C6.07274 3.1034 3.71986 5.3981 3.71986 8.26355C3.71986 9.15479 3.94831 10.0128 4.37902 10.7815C4.11825 10.7038 3.86427 10.6067 3.61881 10.4902ZM12.396 12.3251C12.2714 12.2618 12.1223 12.258 11.9925 12.3197C11.2794 12.6584 10.4748 12.8375 9.66557 12.8375C6.89146 12.8375 4.63458 10.7856 4.63458 8.26355C4.63458 5.7415 6.89146 3.68965 9.66557 3.68965C12.4397 3.68965 14.6966 5.7415 14.6966 8.26355C14.6966 9.218 14.3763 10.1323 13.7705 10.9077C13.6775 11.0268 13.6493 11.1841 13.6951 11.3282L14.3251 13.3061L12.396 12.3251Z" fill="white" />
                                        <path d="M7.80553 8.72093C8.05814 8.72093 8.26292 8.51615 8.26292 8.26354C8.26292 8.01093 8.05814 7.80615 7.80553 7.80615C7.55292 7.80615 7.34814 8.01093 7.34814 8.26354C7.34814 8.51615 7.55292 8.72093 7.80553 8.72093Z" fill="white" />
                                        <path d="M9.63512 8.72093C9.88773 8.72093 10.0925 8.51615 10.0925 8.26354C10.0925 8.01093 9.88773 7.80615 9.63512 7.80615C9.38251 7.80615 9.17773 8.01093 9.17773 8.26354C9.17773 8.51615 9.38251 8.72093 9.63512 8.72093Z" fill="white" />
                                        <path d="M11.4647 8.72093C11.7173 8.72093 11.9221 8.51615 11.9221 8.26354C11.9221 8.01093 11.7173 7.80615 11.4647 7.80615C11.2121 7.80615 11.0073 8.01093 11.0073 8.26354C11.0073 8.51615 11.2121 8.72093 11.4647 8.72093Z" fill="white" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_235_2576">
                                            <rect width="15.6122" height="15.6122" fill="white" />
                                        </clipPath>
                                    </defs>
                                </svg>
                                </span>Chat</button>

                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex gap-5 py-4 px-2.5">
                    <div className=" relative flex w-64 h-81 flex-col bg-[#f5f5f5] py-1.25 px-2.5">
                        <img className='w-full h-44 rounded-tl-xl rounded-tr-xl ' src={p1} alt="" />
                        <div className='content py-1.25 px-2.5'>
                            <h3 className=' w-53.75 h-11 font-semibold text-sm text-[#141821] leading-5 tracking-normal font-[Poppins] '>iPhone 14 Pro Max 1TB Factory Uncloked</h3>
                            <h4 className=' w-54 h-6 font-normal text-[#858997] text-xs leading-6 font-[Poppins] tracking-normal  '>DC Chowk, Rahim Yar Khan</h4>
                            <p className='w-54 h-3.5 font-[Poppins] leading-full text-[#000000] leading-none  text-xs tracking-normal'>6 days ago</p>
                            <div className=" flex flex-row items-center justify-between ">
                                <h2 className='w-32 h-5 text-[#000000] leading-5.2 text-lg font-bold'>Rs. 1,80,000</h2>
                                <svg width="20" height="20" viewBox="0 0 23 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M11.3376 19.0007L2.35745 9.75536C1.5682 8.9769 1.04729 7.97291 0.86858 6.88579C0.689874 5.79867 0.862451 4.68361 1.36183 3.69874V3.69874C1.7384 2.95553 2.28849 2.31128 2.96676 1.81906C3.64503 1.32685 4.43207 1.00077 5.26305 0.867687C6.09402 0.734603 6.94514 0.798327 7.74627 1.05361C8.5474 1.30889 9.27562 1.74842 9.87092 2.33598L11.3376 3.78288L12.8044 2.33598C13.3997 1.74842 14.1279 1.30889 14.929 1.05361C15.7302 0.798327 16.5813 0.734603 17.4123 0.867687C18.2432 1.00077 19.0303 1.32685 19.7085 1.81906C20.3868 2.31128 20.9369 2.95553 21.3135 3.69874C21.8122 4.68323 21.9845 5.79763 21.8059 6.88413C21.6274 7.97063 21.1071 8.97416 20.3188 9.75259L11.3376 19.0007Z" stroke="#333333" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </div>
                            <div className="flex flex-row gap-4 mt-4">
                                <button className=' w-23 h-9 bg-[white] text-[black] rounded-2xl flex flex-row gap-2 items-center justify-center '><span><svg width="13" height="14" viewBox="0 0 13 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M11.4007 9.58771C10.5685 8.87595 9.72396 8.44481 8.902 9.1555L8.41119 9.58502C8.05208 9.89682 7.38441 11.3537 4.80294 8.38407C2.22202 5.41823 3.75789 4.95645 4.11753 4.64734L4.61103 4.21728C5.42869 3.50498 5.12012 2.6083 4.53039 1.68527L4.17451 1.12619C3.5821 0.205312 2.937 -0.399466 2.11719 0.311753L1.67422 0.698811C1.31189 0.962763 0.299092 1.82074 0.053418 3.45069C-0.242251 5.40641 0.690451 7.64597 2.82734 10.1033C4.96153 12.5616 7.05111 13.7964 9.03048 13.7749C10.6755 13.7572 11.6689 12.8745 11.9796 12.5535L12.4242 12.1659C13.2419 11.4553 12.7339 10.7317 11.9012 10.0183L11.4007 9.58771Z" fill="#141821" />
                                </svg>
                                </span>Call</button>
                                <button className='w-23 h-9 bg-[#2BBEF9] text-[white] rounded-2xl items-center justify-center flex flex-row gap-2'><span><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clip-path="url(#clip0_235_2576)">
                                        <path d="M14.6381 11.2744C16.1467 9.15772 15.9161 6.25771 13.8555 4.36866C12.9139 3.50557 11.7137 2.96826 10.4171 2.8182C10.409 2.80826 10.4007 2.79841 10.3917 2.78899C9.26373 1.61731 7.64323 0.945312 5.9457 0.945312C2.71534 0.945312 0 3.35219 0 6.43399C0 7.5145 0.335633 8.5503 0.973204 9.44487L0.0825436 12.2412C0.0265591 12.417 0.0816289 12.6091 0.22217 12.7286C0.362954 12.8482 0.561553 12.8712 0.725634 12.7877L3.43421 11.4105C3.99045 11.65 4.5803 11.8072 5.19113 11.8787C6.36943 13.1178 7.99868 13.7522 9.66557 13.7522C10.532 13.7522 11.3954 13.5756 12.1769 13.24L14.8856 14.6173C14.9512 14.6507 15.0222 14.667 15.0928 14.667C15.4015 14.667 15.6228 14.3662 15.5287 14.0708L14.6381 11.2744ZM3.61881 10.4902C3.49071 10.4293 3.34169 10.4313 3.2153 10.4956L1.28612 11.4766L1.9161 9.49863C1.96196 9.35461 1.93375 9.19727 1.84069 9.07819C1.23492 8.30277 0.914719 7.38844 0.914719 6.43399C0.914719 3.91194 3.1716 1.86009 5.9457 1.86009C7.06283 1.86009 8.13828 2.19853 9.01064 2.80799C6.07274 3.1034 3.71986 5.3981 3.71986 8.26355C3.71986 9.15479 3.94831 10.0128 4.37902 10.7815C4.11825 10.7038 3.86427 10.6067 3.61881 10.4902ZM12.396 12.3251C12.2714 12.2618 12.1223 12.258 11.9925 12.3197C11.2794 12.6584 10.4748 12.8375 9.66557 12.8375C6.89146 12.8375 4.63458 10.7856 4.63458 8.26355C4.63458 5.7415 6.89146 3.68965 9.66557 3.68965C12.4397 3.68965 14.6966 5.7415 14.6966 8.26355C14.6966 9.218 14.3763 10.1323 13.7705 10.9077C13.6775 11.0268 13.6493 11.1841 13.6951 11.3282L14.3251 13.3061L12.396 12.3251Z" fill="white" />
                                        <path d="M7.80553 8.72093C8.05814 8.72093 8.26292 8.51615 8.26292 8.26354C8.26292 8.01093 8.05814 7.80615 7.80553 7.80615C7.55292 7.80615 7.34814 8.01093 7.34814 8.26354C7.34814 8.51615 7.55292 8.72093 7.80553 8.72093Z" fill="white" />
                                        <path d="M9.63512 8.72093C9.88773 8.72093 10.0925 8.51615 10.0925 8.26354C10.0925 8.01093 9.88773 7.80615 9.63512 7.80615C9.38251 7.80615 9.17773 8.01093 9.17773 8.26354C9.17773 8.51615 9.38251 8.72093 9.63512 8.72093Z" fill="white" />
                                        <path d="M11.4647 8.72093C11.7173 8.72093 11.9221 8.51615 11.9221 8.26354C11.9221 8.01093 11.7173 7.80615 11.4647 7.80615C11.2121 7.80615 11.0073 8.01093 11.0073 8.26354C11.0073 8.51615 11.2121 8.72093 11.4647 8.72093Z" fill="white" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_235_2576">
                                            <rect width="15.6122" height="15.6122" fill="white" />
                                        </clipPath>
                                    </defs>
                                </svg>
                                </span>Chat</button>

                            </div>
                        </div>
                    </div>
                </div>


            </div>
        </>
    );
}

export default MobileDetails;
