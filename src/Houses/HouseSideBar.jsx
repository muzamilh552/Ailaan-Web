import React from 'react';

const HouseSideBar = () => {
  return (
    <div className='carsidebar'>
      <p>Home</p>
      <h2>Houses for Sale</h2>
      <h3>Fillters</h3>
      <hr />
      <h1>categories</h1>
      <p>All Categories</p>
      <aside>
        <div className="mobiles">
          <ul className='mobile-list'>
            <li>Property for Sale</li>
            <li>Land & Plots <span>(27732)</span></li>
            <li className='font-bold'>Houses <span>(15537)</span></li>
            <li>Apartments & Flats <span>(4037)</span></li>
            <li>Shops-Offices-Commercial space (1879)</li>
            <li>Portions & Floors <span>(689)</span></li>
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

        <div className="year">
          <h1>Price</h1>
          <div className="No">
            <div>
              <h2>500,000</h2>
              <h3>PKR 5 Lac</h3>
            </div>
            <div>
              <h2>10,000,000,000</h2>
              <h3>PKR 1000 Crore</h3>
            </div>
          </div>
          <input type="range" />
        </div>

        <div className="pakistan">
          <h1>Furnished</h1>
          <ul className='List'>
            <li><label htmlFor=""><input type="checkbox" name="" id="used" /><p>Unfurnished</p> <span>(15245)</span></label></li>
            <li><label htmlFor=""><input type="checkbox" name="" id="" /><p>Furnished</p> <span>(292)</span></label></li>
          </ul>
        </div>

        <div className="year">
          <h1>Bedrooms</h1>
          <div className="No">
            <h2>0</h2>
            <h2>Max</h2>
          </div>
        </div>
        <div className="year">
          <h1>Bedrooms</h1>
          <div className="No">
            <h2>0</h2>
            <h2>Max</h2>
          </div>
        </div>
        <div className="pakistan">
          <h1>Construction State</h1>
          <ul className='List'>
            <li><label htmlFor=""><input type="checkbox" name="" id="used" /><p>Furnished</p> <span>(878)</span></label></li>
            <li><label htmlFor=""><input type="checkbox" name="" id="" /><p>Grey Structure</p> <span>(66)</span></label></li>
          </ul>
        </div>

        <div className="pakistan">
          <h1>Features</h1>
          <ul className='List'>
            <li><label htmlFor=""><input type="checkbox" name="" id="used" /><p>Kitchen</p> <span>(781)</span></label></li>
            <li><label htmlFor=""><input type="checkbox" name="" id="" /><p>Drawing Room</p> <span>(740)</span></label></li>
            <li><label htmlFor=""><input type="checkbox" name="" id="" /><p>Dining Room</p> <span>(531)</span></label></li>
            <li><label htmlFor=""><input type="checkbox" name="" id="" /><p>Lounge or Sitting Room</p> <span>(434)</span></label></li>
            <li><label htmlFor=""><input type="checkbox" name="" id="" /><p>Store Room</p> <span>(396)</span></label></li>
            <li><a href="">View more</a></li>

          </ul>
        </div>

        <div className="pakistan">
          <h1>Area Unit</h1>
          <ul className='List'>
            <li>Kanal</li>
            <li>Marla</li>
            <li>Square Feet</li>
            <li>Square Meter</li>
            <li>Square Yards</li>
          </ul>
        </div>

        <div className="year">
          <h1>Area</h1>
          <div className="No">
            <h2>0</h2>
            <h2>99999</h2>
          </div>
        </div>

      </aside>
    </div>
  );
}

export default HouseSideBar;
