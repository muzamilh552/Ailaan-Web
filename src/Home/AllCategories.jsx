import React from 'react';
import phone from '../Home/Category/phone.png'
import car from '../Home/Category/car.png'
import sale from '../Home/Category/sale.png'
import rent from '../Home/Category/rent.png'
import electronic from '../Home/Category/electronic.png'
import bike from '../Home/Category/bike.png'
import business from '../Home/Category/business.png'
import service from '../Home/Category/service.png'
import job from '../Home/Category/job.png'
import dog from '../Home/Category/dog.png'
import furniture from '../Home/Category/furniture.png'
import fashion from '../Home/Category/fashion.png'
import book from '../Home/Category/book.png'
import kid from '../Home/Category/kid.png'



const AllCategories = () => {
  return (
    <>
      <h1 className='ml-33 mt-7 mb-4 font-bold'>All Categories</h1>
    <div className='categorie flex flex-row flex-wrap justify-start mx-28 items-center gap-2'>
      <div className="flex flex-col justify-center items-center my-3 w-[9vw]">
        <img className='phone' src={phone} alt="" />
        <h3>Mobiles</h3>
      </div>

       <div className="flex flex-col justify-center items-center my-3 w-[9vw]">
        <img className='vicales' src={car} alt="" />
        <h3>Vehicles</h3>
      </div>

       <div className="flex flex-col justify-center items-center my-3 w-[9vw]">
        <img className='sale' src={sale} alt="" />
        <h3>Property for Sale</h3>
      </div>

       <div className="flex flex-col justify-center items-center my-3 w-[9vw]">
        <img className='rent' src={rent} alt="" />
        <h3>Property for Rent</h3>
      </div>

       <div className="flex flex-col justify-center items-center my-3 w-[9vw]">
        <img className='electronics' src={electronic} alt="" />
        <h3>Electronics & Home Appliances</h3>
      </div>

       <div className="flex flex-col justify-center items-center my-3 w-[9vw]">
        <img className='bike' src={bike} alt="" />
        <h3>Bikes</h3>
      </div>

       <div className="flex flex-col justify-center items-center my-3 w-[9vw]">
        <img className='business' src={business} alt="" />
        <h3>Business, Industrial & Agriculture</h3>
      </div>

       <div className="flex flex-col justify-center items-center my-3 w-[9vw]">
        <img className='service' src={service} alt="" />
        <h3>Services</h3>
      </div>

       <div className="flex flex-col justify-center items-center my-3 w-[9vw]">
        <img className='job' src={job} alt="" />
        <h3>Jobs</h3>
      </div>

       <div className="flex flex-col justify-center items-center my-3 w-[9vw]">
        <img className='animal' src={dog} alt="" />
        <h3>Animals</h3>
      </div>

       <div className="flex flex-col justify-center items-center my-3 w-[9vw]">
        <img className='furniture' src={furniture} alt="" />
        <h3>Furniture & Home Decor</h3>
      </div>

 <div className="flex flex-col justify-center items-center my-3 w-[9vw]">
        <img className='fashion' src={fashion} alt="" />
        <h3>Fashion & Beauty</h3>
      </div>

       <div className="flex flex-col justify-center items-center my-3 w-[9vw]">
        <img className='book' src={book} alt="" />
        <h3>Books, Sports & Hobbies</h3>
      </div>

       <div className="flex flex-col justify-center items-center my-3 w-[9vw]">
        <img className='kid' src={kid} alt="" />
        <h3>Kids</h3>
      </div>

    </div>
    </>
  );
}

export default AllCategories;
