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
function App() {
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
