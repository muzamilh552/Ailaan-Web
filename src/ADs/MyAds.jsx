import React from 'react';
import mobile from '../ADs/mobile.jpg'

const MyAds = () => {
  return (
    <>
      <div className="flex flex-row gap-6 ml-30">
        <button className='text-[white] bg-[#2BBEF9] w-auto py-2 px-6 h-10 border-2 border-gray-100 rounded-3xl'>View All (4)</button>
        <button className='text-[black]  w-auto h-10 border-2 border-gray-400 rounded-3xl py-2 px-6 flex items-center justify-center'>Active Ads (3)</button>
        <button className='text-[black]  w-auto h-10 border-2 border-gray-400 rounded-3xl py-2 px-6 flex items-center justify-center'>Inactive Ads (1)</button>
        <button className='text-[black]  w-auto h-10 border-2 border-gray-400 rounded-3xl py-2 px-6 flex items-center justify-center'>Pending Ads (0)</button>
      </div>
      <div className="flex flex-row flex-wrap ">
        <div className="flex flex-col mt-6 ml-30 w-141 h-auto shadow-lg shadow-gray-500/50 p-6 rounded-lg bg-white">
          <div className="flex flex-row justify-between ">
            <h1 className='font-[Poppins] font-semibold text-xs '>From 08 Aug 23 to 7 Sep 23</h1>
            <p className='w-15 h-6 text-[white] bg-[#25D366] rounded-sm py-2 px-4 flex items-center justify-center'>Active</p>
          </div>
          <div className="flex flex-row gap-4 mt-3">
            <div className="w-25.5 h-23.5">
              <img className='rounded-xl' src={mobile} alt="" />
            </div>
            <div className="flex flex-col gap-1 ">
              <h1 className='font-[Poppins] font-bold text-xl text-[#2BBEF9] '>Samsung S22 Ultra</h1>
              <p className='font-[Poppins] font-normal text-xs text-[#A3AAAE] flex flex-row gap-2 items-center'><span><svg width="10" height="11" viewBox="0 0 10 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3.96187 0.0377932C2.6236 0.246495 1.48327 0.986632 0.728076 2.13557C0.452676 2.55512 0.200943 3.17692 0.0955166 3.69545C-0.192793 5.12624 0.166518 6.4516 1.2423 7.91251C1.73931 8.5881 2.47945 9.35406 3.60041 10.3524C4.31688 10.9914 4.33409 11 4.66543 11C4.99677 11 5.01399 10.9914 5.73046 10.3524C6.85142 9.35406 7.59156 8.5881 8.08857 7.91251C8.88465 6.83027 9.28484 5.8298 9.32787 4.81426C9.3709 3.73418 9.03741 2.68637 8.35967 1.79132C8.17894 1.55464 7.73141 1.11142 7.48398 0.92854C6.888 0.483167 6.21886 0.190555 5.49379 0.0571575C5.14093 -0.00954151 4.32334 -0.020299 3.96187 0.0377932ZM4.90641 2.4583C5.34318 2.49488 5.83373 2.74446 6.15216 3.08871C6.83636 3.82669 6.888 4.90678 6.27911 5.71576C6.01877 6.06001 5.65946 6.30529 5.20978 6.44299C5.03765 6.49463 4.99032 6.50108 4.66543 6.50108C4.34055 6.50108 4.29321 6.49463 4.12109 6.44299C3.67141 6.30529 3.3121 6.06001 3.05176 5.71576C2.66878 5.20584 2.53969 4.60341 2.68385 4.00312C2.85597 3.29526 3.40247 2.72294 4.09527 2.52285C4.2803 2.46906 4.59443 2.42603 4.70847 2.43894C4.73859 2.44324 4.8268 2.45185 4.90641 2.4583Z" fill="#A3AAAE" />
              </svg>
              </span>Lahore District, Punjab, Pakistan</p>
              <h1 className='font-[Poppins] font-bold text-xl text-[#333333] '>Rs 110,00</h1>



            </div>

          </div>
          <div className="flex items-center justify-end">
            <button className='bg-[#2BBEF9] text-[white] w-39 h-7 flex justify-center items-center rounded-sm '>Sold</button>
          </div>
          <div className="flex flex-row justify-between mt-5">
            <button className='flex gap-1 justify-center items-center border-2 border-gray-400 rounded-xs text-[#858997] text-[10px] font-semibold w-26 h-8'><span><svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M13.8524 10.9251C13.8524 12.5077 12.5586 13.7903 10.9633 13.7903C9.36805 13.7903 8.0752 12.5077 8.0752 10.9251C8.0752 9.34159 9.36805 8.05902 10.9633 8.05902C12.5586 8.05902 13.8524 9.34159 13.8524 10.9251Z" stroke="#858997" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
              <path fill-rule="evenodd" clip-rule="evenodd" d="M10.9624 17.5436C14.4417 17.5436 17.6241 15.0618 19.4158 10.9249C17.6241 6.78804 14.4417 4.30628 10.9624 4.30628H10.9661C7.48678 4.30628 4.30442 6.78804 2.5127 10.9249C4.30442 15.0618 7.48678 17.5436 10.9661 17.5436H10.9624Z" stroke="#858997" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
            </span>View:12</button>

            <button className='flex gap-1 justify-center items-center border-2 border-gray-400 rounded-xs text-[#858997] text-[10px] font-semibold w-26 h-8'><span><svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M2.53235 4.17117C2.80017 3.72281 4.27582 2.092 5.32887 2.14124C5.64365 2.16761 5.92191 2.36014 6.148 2.58344C6.66713 3.09598 8.15322 5.03449 8.23756 5.44241C8.44278 6.44287 7.26365 7.01959 7.62452 8.02796C8.54452 10.3041 10.1297 11.9067 12.3819 12.836C13.3784 13.2008 13.9489 12.0087 14.9384 12.2171C15.341 12.3023 17.2593 13.8048 17.7663 14.3296C17.9863 14.5573 18.1776 14.8395 18.2037 15.1578C18.2428 16.2787 16.5297 17.7917 16.1958 17.9851C15.408 18.5548 14.3802 18.5451 13.1271 17.9561C9.63061 16.4853 4.04278 10.9423 2.56104 7.27366C1.99409 6.01385 1.95496 4.96767 2.53235 4.17117Z" stroke="#858997" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
            </span>Call:12</button>

            <button className='flex gap-1 justify-center items-center border-2 border-gray-400 rounded-xs text-[#858997] text-[10px] font-semibold w-26 h-8'><span><svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M15.4804 8.21313L11.6564 11.326C10.9328 11.8997 9.91833 11.8997 9.19467 11.326L5.33789 8.21313" stroke="#858997" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
              <path fill-rule="evenodd" clip-rule="evenodd" d="M6.17493 3.17245H14.627C15.8457 3.18627 17.0056 3.70717 17.8367 4.61383C18.6677 5.5205 19.0973 6.73378 19.0254 7.97111V13.8881C19.0973 15.1254 18.6677 16.3387 17.8367 17.2454C17.0056 18.152 15.8457 18.6729 14.627 18.6867H6.17493C3.55724 18.6867 1.79297 16.5336 1.79297 13.8881V7.97111C1.79297 5.32559 3.55724 3.17245 6.17493 3.17245Z" stroke="#858997" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
            </span>Chat:12</button>

            <button className='flex gap-1 justify-center items-center border-2 border-gray-400 rounded-xs text-[#858997] text-[10px] font-semibold w-26 h-8'><span><svg width="16" height="19" viewBox="0 0 16 19" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M7.35576 15.1199L2.03833 18.0652C1.61377 18.2883 1.09073 18.1304 0.856677 17.7085V17.7085C0.788962 17.5778 0.75243 17.4328 0.75 17.2853V4.23461C0.75 1.7456 2.43221 0.75 4.85296 0.75H10.5397C12.8865 0.75 14.6426 1.67923 14.6426 4.06868V17.2853C14.6426 17.5208 14.5501 17.7466 14.3854 17.913C14.2208 18.0795 13.9974 18.1731 13.7646 18.1731C13.616 18.1707 13.47 18.1338 13.3379 18.0652L7.98762 15.1199C7.79046 15.0122 7.55291 15.0122 7.35576 15.1199Z" stroke="#858997" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M4.40137 6.68214H10.9415" stroke="#858997" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
            </span>Saved:12</button>


          </div>
        </div>

        <div className="flex flex-col mt-6 ml-30 w-141 h-auto shadow-lg shadow-gray-500/50 p-6 rounded-lg bg-white">
          <div className="flex flex-row justify-between ">
            <h1 className='font-[Poppins] font-semibold text-xs '>From 08 Aug 23 to 7 Sep 23</h1>
            <p className='w-15 h-6 text-[white] bg-[#25D366] rounded-sm py-2 px-4 flex items-center justify-center'>Active</p>
          </div>
          <div className="flex flex-row gap-4 mt-3">
            <div className="w-25.5 h-23.5">
              <img className='rounded-xl' src={mobile} alt="" />
            </div>
            <div className="flex flex-col gap-1 ">
              <h1 className='font-[Poppins] font-bold text-xl text-[#2BBEF9] '>Samsung S22 Ultra</h1>
              <p className='font-[Poppins] font-normal text-xs text-[#A3AAAE] flex flex-row gap-2 items-center'><span><svg width="10" height="11" viewBox="0 0 10 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3.96187 0.0377932C2.6236 0.246495 1.48327 0.986632 0.728076 2.13557C0.452676 2.55512 0.200943 3.17692 0.0955166 3.69545C-0.192793 5.12624 0.166518 6.4516 1.2423 7.91251C1.73931 8.5881 2.47945 9.35406 3.60041 10.3524C4.31688 10.9914 4.33409 11 4.66543 11C4.99677 11 5.01399 10.9914 5.73046 10.3524C6.85142 9.35406 7.59156 8.5881 8.08857 7.91251C8.88465 6.83027 9.28484 5.8298 9.32787 4.81426C9.3709 3.73418 9.03741 2.68637 8.35967 1.79132C8.17894 1.55464 7.73141 1.11142 7.48398 0.92854C6.888 0.483167 6.21886 0.190555 5.49379 0.0571575C5.14093 -0.00954151 4.32334 -0.020299 3.96187 0.0377932ZM4.90641 2.4583C5.34318 2.49488 5.83373 2.74446 6.15216 3.08871C6.83636 3.82669 6.888 4.90678 6.27911 5.71576C6.01877 6.06001 5.65946 6.30529 5.20978 6.44299C5.03765 6.49463 4.99032 6.50108 4.66543 6.50108C4.34055 6.50108 4.29321 6.49463 4.12109 6.44299C3.67141 6.30529 3.3121 6.06001 3.05176 5.71576C2.66878 5.20584 2.53969 4.60341 2.68385 4.00312C2.85597 3.29526 3.40247 2.72294 4.09527 2.52285C4.2803 2.46906 4.59443 2.42603 4.70847 2.43894C4.73859 2.44324 4.8268 2.45185 4.90641 2.4583Z" fill="#A3AAAE" />
              </svg>
              </span>Lahore District, Punjab, Pakistan</p>
              <h1 className='font-[Poppins] font-bold text-xl text-[#333333] '>Rs 110,00</h1>



            </div>

          </div>
          <div className="flex items-center justify-end">
            <button className='bg-[#2BBEF9] text-[white] w-39 h-7 flex justify-center items-center rounded-sm '>Sold</button>
          </div>
          <div className="flex flex-row justify-between mt-5">
            <button className='flex gap-1 justify-center items-center border-2 border-gray-400 rounded-xs text-[#858997] text-[10px] font-semibold w-26 h-8'><span><svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M13.8524 10.9251C13.8524 12.5077 12.5586 13.7903 10.9633 13.7903C9.36805 13.7903 8.0752 12.5077 8.0752 10.9251C8.0752 9.34159 9.36805 8.05902 10.9633 8.05902C12.5586 8.05902 13.8524 9.34159 13.8524 10.9251Z" stroke="#858997" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
              <path fill-rule="evenodd" clip-rule="evenodd" d="M10.9624 17.5436C14.4417 17.5436 17.6241 15.0618 19.4158 10.9249C17.6241 6.78804 14.4417 4.30628 10.9624 4.30628H10.9661C7.48678 4.30628 4.30442 6.78804 2.5127 10.9249C4.30442 15.0618 7.48678 17.5436 10.9661 17.5436H10.9624Z" stroke="#858997" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
            </span>View:12</button>

            <button className='flex gap-1 justify-center items-center border-2 border-gray-400 rounded-xs text-[#858997] text-[10px] font-semibold w-26 h-8'><span><svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M2.53235 4.17117C2.80017 3.72281 4.27582 2.092 5.32887 2.14124C5.64365 2.16761 5.92191 2.36014 6.148 2.58344C6.66713 3.09598 8.15322 5.03449 8.23756 5.44241C8.44278 6.44287 7.26365 7.01959 7.62452 8.02796C8.54452 10.3041 10.1297 11.9067 12.3819 12.836C13.3784 13.2008 13.9489 12.0087 14.9384 12.2171C15.341 12.3023 17.2593 13.8048 17.7663 14.3296C17.9863 14.5573 18.1776 14.8395 18.2037 15.1578C18.2428 16.2787 16.5297 17.7917 16.1958 17.9851C15.408 18.5548 14.3802 18.5451 13.1271 17.9561C9.63061 16.4853 4.04278 10.9423 2.56104 7.27366C1.99409 6.01385 1.95496 4.96767 2.53235 4.17117Z" stroke="#858997" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
            </span>Call:12</button>

            <button className='flex gap-1 justify-center items-center border-2 border-gray-400 rounded-xs text-[#858997] text-[10px] font-semibold w-26 h-8'><span><svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M15.4804 8.21313L11.6564 11.326C10.9328 11.8997 9.91833 11.8997 9.19467 11.326L5.33789 8.21313" stroke="#858997" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
              <path fill-rule="evenodd" clip-rule="evenodd" d="M6.17493 3.17245H14.627C15.8457 3.18627 17.0056 3.70717 17.8367 4.61383C18.6677 5.5205 19.0973 6.73378 19.0254 7.97111V13.8881C19.0973 15.1254 18.6677 16.3387 17.8367 17.2454C17.0056 18.152 15.8457 18.6729 14.627 18.6867H6.17493C3.55724 18.6867 1.79297 16.5336 1.79297 13.8881V7.97111C1.79297 5.32559 3.55724 3.17245 6.17493 3.17245Z" stroke="#858997" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
            </span>Chat:12</button>

            <button className='flex gap-1 justify-center items-center border-2 border-gray-400 rounded-xs text-[#858997] text-[10px] font-semibold w-26 h-8'><span><svg width="16" height="19" viewBox="0 0 16 19" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M7.35576 15.1199L2.03833 18.0652C1.61377 18.2883 1.09073 18.1304 0.856677 17.7085V17.7085C0.788962 17.5778 0.75243 17.4328 0.75 17.2853V4.23461C0.75 1.7456 2.43221 0.75 4.85296 0.75H10.5397C12.8865 0.75 14.6426 1.67923 14.6426 4.06868V17.2853C14.6426 17.5208 14.5501 17.7466 14.3854 17.913C14.2208 18.0795 13.9974 18.1731 13.7646 18.1731C13.616 18.1707 13.47 18.1338 13.3379 18.0652L7.98762 15.1199C7.79046 15.0122 7.55291 15.0122 7.35576 15.1199Z" stroke="#858997" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M4.40137 6.68214H10.9415" stroke="#858997" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
            </span>Saved:12</button>


          </div>
        </div>


      </div>
    </>
  );
}

export default MyAds;
