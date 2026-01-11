import React from 'react';
import './Footer.css'
import Vector from '../Home/Vector.png'
import twitter from '../Home/twitter.png'
import youtube from '../Home/youtube.png'
import instagram from '../Home/instagram.png'


const Footer = () => {
  return (
    <>
    <div className='footer'>
      
<ul className='ul'>
    <li><img src={Vector} alt="" /></li>
    <li className='brown'>If you have any question, please contact us at</li>
    <li className='email'>support@example.com</li>
    <li>
        <ul className='disflx'>
            <li><img src={twitter} alt="" /></li>
            <li><img src={youtube} alt="" /></li>
            <li><img src={instagram} alt="" /></li>
        </ul>
    </li>
</ul>

<ul className='ul'>
<li className='white'>POPULAR CATEGORIES</li>
<li className='brown'>Cars</li>
<li className='brown'>Flats for Rent</li>
<li className='brown'>Mobile Phones</li>
<li className='brown'>Jobs</li>
</ul>

<ul className='ul'>
    <li className='white'>ABOUT US</li>
    <li className='brown'>About Us</li>
    <li className='brown'>Contact Us</li>
</ul>

<ul className='ul'>
    <li className='white'>Classified</li>
    <li className='brown'>Help</li>
    <li className='brown'>Terms & Conditions</li>
    <li className='brown'>Privacy Policy</li>
</ul>

    </div>
    <div className="hr">
       <hr className="divider"/>
<p>© 2023 Classified - Copyrights 2023</p>

    </div>

    </>
  );
}

export default Footer;
