import React from 'react';
import './Navbar.css';
import { useNavigate } from 'react-router-dom';
import PostYourAd from '../PostYourAd/PostYourAd';
const Navbar = () => {
  const navigate = useNavigate();

  return (
    <div className="navba flex flex-row justify-center mt-10">
      <ul className='flex flex-row justify-center gap-5  items-center '>
        <li>
          <button className="flex justify-center items-center gap-3 h-[6vh] bg-[#2BBEF9] text-[#FFFFFF] font-normal rounded-3xl w-[9vw]" onClick={() => {
            navigate("/")
          }}>All Categories</button>
        </li>

        <li className="nav" onClick={() => navigate('/mobile')}>
          Mobile Phones
        </li>

        <li className="nav" onClick={() => {
          navigate('/cars')
        }}>Cars</li>
        <li className="nav" onClick={() => {
          navigate('/motorcycle')
        }}>Motorcycles</li>
        <li className="nav" onClick={() => {
          navigate('/houses')
        }}>Houses</li>
        <li className="nav" onClick={() => {
          navigate("/inbox")
        }}>TV-Video-Audio</li>
        <li className="nav" onClick={() => {
          navigate("/postyourad")
        }}>Tablets</li>
        <li className="nav" onClick={() => {
          navigate("/createprofile")
        }}>Plots</li>
      </ul>
    </div>
  );
};

export default Navbar;
