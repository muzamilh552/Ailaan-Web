import { Routes, Route } from 'react-router-dom';

import Header from './Home/Header';
import Navbar from './Home/Navbar';
import BannerAd from './Home/BannerAd';
import AllCategories from './Home/AllCategories';
import MobilePhones from './Home/MobilePhones';
import Cars from './Home/Cars';
import Houses from './Home/Houses';
import Partners from './Home/Partners';
import Footer1 from './Home/Footer1';
import Footer from './Home/Footer';

import Home from './Home/Home';
import Mobile from './MobilesComponent/Mobile';
import Car from './Cars/Car';
import './App.css';
import MotorCycle from './MotorCycle/MotorCycle';
import House from './Houses/House';
import Login from './LoginForm/Login';
import Signup from './SignUp/Signup';
import Inbox from './Inbox/Inbox';
import MobileDetails from './MobileDetailsComponent/MobileDetails';
import axios from 'axios';
import { BACKENDURL } from './services/variables';
import { useEffect, useState } from 'react';
function App() {


  const [allProducts,setAllProducts]=useState([]);

  const [avaiableCars,setAvailableCars ]=useState([]); 
const [availablePhones,setAvailablePhones]=useState([]);
const [availableHouses,setAvailableHouses]=useState([]);
  const fetchAllProducts=async()=>{
    try {
      const response=await axios.get(BACKENDURL +"/products/view-all");
      console.log("response ",response);
      setAllProducts(response?.data?.data);

      const filteredMobiles=response?.data?.data.filter((product)=>{
        return product.product_category === "mobilephones";
      })
      setAvailablePhones(filteredMobiles);
      const filteredCars=response?.data?.data.filter((product)=>{
        return product.product_category === "cars";
      })
      setAvailableCars(filteredCars);

      const filteredHouses=response.data.data.filter((product)=>{
        return product.product_category === "houses";
      })

      setAvailableHouses(filteredHouses);


    } catch (error) {
      
    }
  }



  useEffect(()=>{
    fetchAllProducts();
  },[])



  console.log("HOUSES ",availableHouses);
  console.log("MOBILE ",availablePhones);
  console.log("CARS ",avaiableCars);


  return (
    <>
      <Header />
      
      <Navbar />
      <Routes>
        {/* HOME PAGE */}
        <Route
          path="/"
          element={
            <>
            {/* Landing page */}
              <BannerAd />
              <AllCategories />
              <MobilePhones />
              <Cars />
              <Houses />
              <Partners />
            </>
          }
        />

        {/* MOBILE PAGE */}
        <Route path="/mobile" element={<Mobile />} />
        {/* CARS PAGE */}
        <Route path="/cars" element={<Car />} />
        {/* MOTORCYCLE PAGE */}
        <Route path="/motorcycle" element={<MotorCycle />} />
        {/* HOUSES PAGE */}
        <Route path="/houses" element={<House />} />
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/inbox' element={<Inbox/>}/>
        <Route path='/mobiledetails' element={<MobileDetails/>}/>

      </Routes>

      <Footer1 />
      <Footer />
    </>
  );
}

export default App;
