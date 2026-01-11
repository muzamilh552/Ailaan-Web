import React from 'react';

const MotorCycleSideBar = () => {
    return (
        <div className='carsidebar'>
            <p>Home</p>
            <h2>MotorCycle in Pakistan</h2>
            <h3>Fillters</h3>
            <hr />
            <h1>Categories</h1>
            <p>All Categories</p>
            <aside>
                <div className="mobiles">
                    <h1>Bikes</h1>
                    <h1>MotorCycles <span>(60357)</span></h1>
                    <ul className='mobile-list'>
                        <li>Standard <span>(10898)</span></li>
                        <li>Others <span>(8934)</span></li>
                        <li>Sports & Heavy Bikes <span>(2758)</span></li>
                        <li>Electric Bikes <span>(1974)</span></li>
                        <li>Cafe Racers <span>(849)</span></li>
                        <li>Trail <span>(176)</span></li>
                        <li>Cruisers <span>(79)</span></li>
                    </ul>
                </div>

                <div className="pakistan">
                    <h1>Locations</h1>
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

export default MotorCycleSideBar;
