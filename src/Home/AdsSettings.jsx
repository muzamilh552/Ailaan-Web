import React from 'react';

const AdsSettings = () => {
    return (
        <>
            <div className="className='flex flex-col border-2 border-[#D0D0D0] mt-24 mx-27 p-7">
                <h1 className='font-[Poppins] font-semibold text-base text-left my-6'>My Ads Settings</h1>
                <div className="flex flex-row justify-between items-center w-116 mt-7 mb-12">
                    <h1 className='text-[#000000] font-[Poppins] font-normal text-base '>Show my Phone number in Ads</h1>
                    <div class="w-14 h-7 bg-[#2BBEF9] rounded-full flex items-center px-1">

                        <div class="w-5 h-5 bg-white rounded-full ml-auto"></div>
                    </div>
                </div>
                <h1 className='font-[Poppins] font-semibold text-base text-left my-6'>Notifications</h1>

                <div className="flex flex-row justify-between items-center w-116 mt-7 mb-12">
                    <div className="flex flex-col">
                        <h1 className='text-[#000000] font-[Poppins] font-normal text-base '>Recommendations</h1>
                        <p className='text-[9px] text-[#858997] font-normal'>Receive recommendations based on your activity</p>
                    </div>
                    <div class="w-14 h-7 bg-[#2BBEF9] rounded-full flex items-center px-1">

                        <div class="w-5 h-5 bg-white rounded-full ml-auto"></div>
                    </div>
                </div>

                <div className="flex flex-row justify-between items-center w-116 mt-7 mb-12">
                    <div className="flex flex-col">
                        <h1 className='text-[#000000] font-[Poppins] font-normal text-base '>Chat Safety Tips</h1>
                        <p className='text-[9px] text-[#858997] font-normal'>Receive safety tips based on your chat activity</p>
                    </div>
                    <div class="w-14 h-7 bg-[#2BBEF9] rounded-full flex items-center px-1">

                        <div class="w-5 h-5 bg-white rounded-full ml-auto"></div>
                    </div>
                </div>

            </div>
        </>
    );
}

export default AdsSettings;
