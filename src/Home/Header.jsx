import React from 'react';
import logo from '../Home/logo.png'
import { useNavigate } from 'react-router-dom';
const Header = () => {
    const navigate = useNavigate()
    return (
        <div className='flex flex-row justify-center items-center mt-7 gap-19'>
            <a href=""><img className='logo' src={logo} alt="" /></a>

            <ul className=' relative flex flex-row  items-center '>
                <li className='flex flex-row items-center '><button className='flex justify-center items-center gap-3 h-[6vh] bg-[#2BBEF9] text-[#FFFFFF] font-normal rounded-3xl w-[13vw]'><span ><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M19.8226 18.98L14.9623 14.1197C16.2661 12.6208 17.0554 10.6652 17.0554 8.52772C17.0554 3.82262 13.2284 0 8.52771 0C3.82262 0 0 3.82705 0 8.52772C0 13.2284 3.82705 17.0554 8.52771 17.0554C10.6652 17.0554 12.6208 16.2661 14.1197 14.9623L18.98 19.8226C19.0953 19.9379 19.2506 20 19.4013 20C19.5521 20 19.7073 19.9424 19.8226 19.8226C20.0532 19.592 20.0532 19.2106 19.8226 18.98ZM1.1929 8.52772C1.1929 4.48337 4.48337 1.19734 8.52328 1.19734C12.5676 1.19734 15.8537 4.48781 15.8537 8.52772C15.8537 12.5676 12.5676 15.8625 8.52328 15.8625C4.48337 15.8625 1.1929 12.5721 1.1929 8.52772Z" fill="white" />
                </svg>
                </span> Rahim Yar Khan <span><svg width="14" height="8" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 1L7 7L13 1" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                    </span></button> <span><input className='search' type="search" placeholder='Find Cars, Mobile Phones and more...' />

                        <svg className='searchBlack' width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10 18C11.775 17.9996 13.4988 17.4054 14.897 16.312L19.293 20.708L20.707 19.294L16.311 14.898C17.405 13.4997 17.9996 11.7754 18 10C18 5.589 14.411 2 10 2C5.589 2 2 5.589 2 10C2 14.411 5.589 18 10 18ZM10 4C13.309 4 16 6.691 16 10C16 13.309 13.309 16 10 16C6.691 16 4 13.309 4 10C4 6.691 6.691 4 10 4Z" fill="#333333" />
                        </svg></span></li>
                <li><div className="log"><button className='login' onClick={() => {
                    navigate("/login")
                }}>Login</button></div></li>
                <li><button className='sell'><span><svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clipPath="url(#clip0_183_894)">
                        <path d="M9.12109 4.12109H5.87891V0.878906C5.87891 0.393496 5.48541 0 5 0C4.51459 0 4.12109 0.393496 4.12109 0.878906V4.12109H0.878906C0.393496 4.12109 0 4.51459 0 5C0 5.48541 0.393496 5.87891 0.878906 5.87891H4.12109V9.12109C4.12109 9.6065 4.51459 10 5 10C5.48541 10 5.87891 9.6065 5.87891 9.12109V5.87891H9.12109C9.6065 5.87891 10 5.48541 10 5C10 4.51459 9.6065 4.12109 9.12109 4.12109Z" fill="white" />
                    </g>
                    <defs>
                        <clipPath id="clip0_183_894">
                            <rect width="10" height="10" fill="white" />
                        </clipPath>
                    </defs>
                </svg>
                </span>Sell</button></li>
            </ul>
        </div>
    );
}

export default Header;
