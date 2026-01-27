import React from 'react';
import './Footer.css'
import Vector from '../Home/Vector.png'
import twitter from '../Home/twitter.png'
import youtube from '../Home/youtube.png'
import instagram from '../Home/instagram.png'
import { useNavigate } from 'react-router-dom';


const Footer = () => {
    const navigate = useNavigate();
  return (
    <>
    <div className='foote flex flex-row bg-[#141821] w-full justify-evenly items-start py-5'>
      
<ul className='flex gap-2 flex-col '>
    <li><img src={Vector} alt="" /></li>
    <li className='text-[#B8B8B8]'>If you have any question, please contact us at</li>
    <li className='text-[#2BBEF9]'>support@example.com</li>
    <li>
        <ul className='flex flex-row gap-3'>
            <li><img src={twitter} alt="" /></li>
            <li><img src={youtube} alt="" /></li>
            <li><img src={instagram} alt="" /></li>
        </ul>
    </li>
</ul>

<ul className='flex gap-2 flex-col'>
<li className='text-[white]'>POPULAR CATEGORIES</li>
<li className='text-[#B8B8B8] cursor-pointer'>Cars</li>
<li className='text-[#B8B8B8] cursor-pointer'>Flats for Rent</li>
<li className='text-[#B8B8B8] cursor-pointer'>Mobile Phones</li>
<li className='text-[#B8B8B8] cursor-pointer' onClick={() => {
    navigate("/choosecategorypost");
}}>Jobs</li>
</ul>

<ul className='flex gap-2 flex-col'>
    <li className='text-[white]'>ABOUT US</li>
    <li className='text-[#B8B8B8]' onClick={() => {
        navigate("/adssettings");
    }}>About Us</li>
    <li className='text-[#B8B8B8]' onClick={() => {
        navigate("/ads");
    }}>Contact Us</li>
</ul>

<ul className='flex gap-2 flex-col'>
    <li className='text-[white]'>Classified</li>
    <li className='text-[#B8B8B8] cursor-pointer' onClick={() => {
        navigate("/help");
    }}>Help</li>
    <li className='text-[#B8B8B8] cursor-pointer' onClick={() => {
        navigate("/termsandconditions");
    }}>Terms & Conditions</li>
    <li className='text-[#B8B8B8] cursor-pointer' onClick={() => {
        navigate("/privacypolicy");
    }}>Privacy Policy</li>
</ul>

    </div>
    <div className="flex bg-[#141821] flex-col justify-center items-center text-[white] py-4 border-2 border-b-gray-400 w-full">
<p className='flex items-center justify-center '>© 2023 Classified - Copyrights 2023</p>

    </div>

    </>
  );
}

export default Footer;
