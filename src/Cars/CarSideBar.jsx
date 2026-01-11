import React from 'react';

const CarSideBar = () => {
  return (
    <div className='carsidebar'>
      <p>Home</p>
      <h2>Cars in Pakistan</h2>
      <h3>Fillters</h3>
      <hr />
      <h1>CATEGORIES</h1>
      <p>All Categories</p>
      <aside>
        <div className="mobiles">
          <h1>Vehicles</h1>
          <h1>Cars <span>(60357)</span></h1>
          <ul className='mobile-list'>
            <li>Car Accessories <span>(10898)</span></li>
            <li>Spare Parts <span>(8934)</span></li>
            <li>Buses, Vans & Trucks <span>(2758)</span></li>
            <li>Rickshaw & Chingchi <span>(1974)</span></li>
            <li>Tractors & Trailers <span>(849)</span></li>
            <li>Cars on Installments <span>(176)</span></li>
            <li>other Vehicles <span>(79)</span></li>
            <li>Boats <span>(96)</span></li>

          </ul>
        </div>

        <div className="pakistan">
          <h1>Locations</h1>
          <h1 className='Pak'>Pakistan</h1>
          <h1>Pakistan</h1>
          <ul className='mobile-list'>
            <li>Punjab  <span>(34205)</span></li>
            <li>Sindh  <span>(14971)</span></li>
            <li>Khyber Pakhtunkhwa  <span>(4826)</span></li>
            <li>Islamabad Capital Territory  <span>(5377)</span></li>
            <li>Bolochistan  <span>(597)</span></li>
            <li><a href="">View more</a></li>
          </ul>
        </div>
        <div className="year">
          <h1>Year</h1>
          <div className="No">
            <h2>1900</h2>
            <h2>2023</h2>
          </div>
        </div>

        <div className="year">
          <h1>KM's DRIVEN</h1>
          <div className="No">
            <h2>1</h2>
            <h2>999999</h2>
          </div>
        </div>

        <div className="year">
          <h1>Price</h1>
          <div className="No">
            <div>
              <h2>50,000</h2>
              <h3>PKR 50 Thousand</h3>
            </div>
            <div>
              <h2>5,00,000,000</h2>
              <h3>PKR 50 Crore</h3>
            </div>
          </div>
          <input type="range" />
        </div>
        <div className="pakistan">
          <h1>Make</h1>
          <ul className='List'>
            <li>Suzuki <span>(26775)</span></li>
            <li>Toyota <span>(13523)</span></li>
            <li>Honda <span>(9824)</span></li>
            <li>Daihatsu <span>(3201)</span></li>
            <li>Nissan <span>(1264)</span></li>
            <li><a href="">View more</a></li>
          </ul>
        </div>

        <div className="pakistan">
          <h1>Fuel</h1>
          <ul className='List'>
            <li><label htmlFor=""><input type="checkbox" name="" id="used" /><p>Petrol</p> <span>(54791)</span></label></li>
            <li><label htmlFor=""><input type="checkbox" name="" id="" /><p>CNG</p> <span>(2402)</span></label></li>
            <li><label htmlFor=""><input type="checkbox" name="" id="" /><p>Diesel</p> <span>(1460)</span></label></li>
            <li><label htmlFor=""><input type="checkbox" name="" id="" /><p>Hybrid</p> <span>(1413)</span></label></li>
            <li><label htmlFor=""><input type="checkbox" name="" id="" /><p>LPG</p> <span>(245)</span></label></li>
            <li><a href="">View more</a></li>

          </ul>
        </div>

        <div className="pakistan">
          <h1>Registration</h1>
          <ul className='List'>
            <li><label htmlFor=""><input type="checkbox" name="" id="used" /><p>Lahore</p> <span>(18738)</span></label></li>
            <li><label htmlFor=""><input type="checkbox" name="" id="" /><p>Karachi</p> <span>(15532)</span></label></li>
            <li><label htmlFor=""><input type="checkbox" name="" id="" /><p>Islamabad</p> <span>(8721)</span></label></li>
            <li><label htmlFor=""><input type="checkbox" name="" id="" /><p>Sindh</p> <span>(3392)</span></label></li>
            <li><label htmlFor=""><input type="checkbox" name="" id="" /><p>Punjab</p> <span>(2397)</span></label></li>
            <li><a href="">View more</a></li>

          </ul>
        </div>

        <div className="pakistan">
          <h1>Car Documents</h1>
          <ul className='List'>
            <li>Original <span>(59779)</span></li>
            <li>Duplicate <span>(570)</span></li>
          </ul>
        </div>

        <div className="pakistan">
          <h1>Assembly</h1>
          <ul className='List'>
            <li>Local <span>(38007)</span></li>
            <li>Imported <span>(22342)</span></li>
          </ul>
        </div>

        <div className="pakistan">
          <h1>Transmission</h1>
          <ul className='List'>
            <li>Manual <span>(39291)</span></li>
            <li>Automatic <span>(21058)</span></li>
          </ul>
        </div>

        <div className="pakistan">
          <h1>Features</h1>
          <ul className='List'>
            <li><label htmlFor=""><input type="checkbox" name="" id="used" /><p>Air Conditioning</p> <span>(38995)</span></label></li>
            <li><label htmlFor=""><input type="checkbox" name="" id="" /><p>AM/FM Radio</p> <span>(36324)</span></label></li>
            <li><label htmlFor=""><input type="checkbox" name="" id="" /><p>Alloy Rims</p> <span>(31006)</span></label></li>
            <li><label htmlFor=""><input type="checkbox" name="" id="" /><p>Power Steering</p> <span>(30584)</span></label></li>
            <li><label htmlFor=""><input type="checkbox" name="" id="" /><p>Front Speakers</p> <span>(28414)</span></label></li>
            <li><a href="">View more</a></li>

          </ul>
        </div>

        <div className="pakistan">
          <h1>Condition</h1>
          <ul className='List'>
            <li>Used <span>(50861)</span></li>
            <li>New <span>(9492)</span></li>
          </ul>
        </div>
      </aside>
    </div>
  );
}

export default CarSideBar;
