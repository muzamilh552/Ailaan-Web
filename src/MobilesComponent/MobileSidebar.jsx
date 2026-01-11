import React from 'react';
import './MobileSidebar.css'


const MobileSidebar = () => {
    return (

        <div className='sidebar'>
            <p>Home</p>
            <h2>Mobiles in Pakistan</h2>
            <h3>Fillters</h3>
            <hr />
            <h1>CATEGORIES</h1>
            <p>All Categories</p>
            <aside>
                <div className="mobiles">
                    <h1>Mobiles</h1>
                    <ul className='mobile-list'>
                        <li>Mobile Phones <span>(236231)</span></li>
                        <li>Accessories <span>(24770)</span></li>
                        <li>Smart Watches <span>(9433)</span></li>
                        <li>Tablets <span>(5418)</span></li>
                    </ul>
                </div>
                <div className="location">
                    <h1>LOCATION</h1>

                    <select name="location" id="location">
                        <option value="all Pakistan">All Pakistan</option>
                        <option value="punjab">Punjab</option>
                        <option value="sindh">Sindh</option>
                        <option value="kpk">Khyber Pakhtunkhwa</option>
                        <option value="balochistan">Balochistan</option>
                        <option value="islamabad">Islamabad</option>
                        <option value="azad kashmir">Azad Kashmir</option>
                        <option value="gilgit baltistan">Gilgit Baltistan</option>
                    </select>

                </div>
                <div className="pakistan">
                    <h1>Pakistan</h1>
                    <ul className='mobile-list'>
                        <li>Punjab  <span>(177301)</span></li>
                        <li>Sindh  <span>(59875)</span></li>
                        <li>Khyber Pakhtunkhwa  <span>(19057)</span></li>
                        <li>Islamabad Capital  <span>(15804)</span></li>
                        <li>Bolochistan  <span>(2211)</span></li>
                        <li><a href="">View more</a></li>
                    </ul>
                </div>
                <div className="price">
                    <h1>Price</h1>
                    <input type="range" />
                    <div className="line-bar">
                        <span>Price:$0-$20000</span>
                        <p>Filter</p>
                    </div>
                </div>
                <div className="pakistan">
                    <h1>Brand</h1>
                    <ul className='mobile-list'>
                        <li>Apple Iphone  <span>(75791)</span></li>
                        <li>Samsung Mobile  <span>(32518)</span></li>
                        <li>Vivo  <span>(21409)</span></li>
                        <li>Infinix  <span>(18998)</span></li>
                        <li>OPPO  <span>(18534)</span></li>
                        <li><a href="">View more</a></li>
                    </ul>
                </div>
                <div className="pakistan">
                    <h1>Conditon</h1>
                    <ul className='mobile-list'>
                        <li><label htmlFor=""><input type="checkbox" name="" id="used" /><p>Used</p> <span>(18349)</span></label></li>
                        <li><label htmlFor=""><input type="checkbox" name="" id="" /><p>New</p> <span>(40314)</span></label></li>
                        <li><label htmlFor=""><input type="checkbox" name="" id="" /><p>Open Box</p> <span>(13737)</span></label></li>
                        <li><label htmlFor=""><input type="checkbox" name="" id="" /><p>For Ports or Not Working</p> <span>(1828)</span></label></li>
                        <li><label htmlFor=""><input type="checkbox" name="" id="" /><p>Refurbished</p> <span>(524)</span></label></li>

                    </ul>
                </div>
            </aside>
        </div>
    );
}

export default MobileSidebar;
