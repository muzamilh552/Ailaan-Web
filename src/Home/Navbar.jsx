import React from 'react';
import './Navbar.css';
import { useNavigate } from 'react-router-dom';
import PostYourAd from '../PostYourAd/PostYourAd';
const Navbar = () => {
  const navigate = useNavigate();

  return (
    <div className="navbar">
      <ul id="navbar">
        <li className="li">
          <button className="text" onClick={() => {
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
