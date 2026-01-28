import React from 'react';

const MsgSentSuccessful = () => {
    return (
        <>
            <div className='flex flex-col mt-37 ml-130 p-5 justify-center items-center w-125 h-92 rounded-2xl  relative max-sm:ml-0 max-sm:mt-14'>
                <div className="flex flex-col justify-center items-center w-94">
                    <h1 className='font-[Poppins] font-semibold text-[18px] text-[#000000] max-sm:ml-14'>Message Sent Successfully!</h1>
                    <p className='font-[Poppins] font-normal text-sm text-[#000000] text-center max-sm:ml-12'>Thanks for Reaching out for help at Classified. You are
                        Always welcome here.</p>
                </div>
                <div className="my-3 max-sm:ml-12">
                    <svg width="134" height="134" viewBox="0 0 134 134" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M67 0C30.1997 0 0 30.1997 0 67C0 103.8 30.1997 134 67 134C103.8 134 134 103.8 134 67C134 30.1997 103.8 0 67 0ZM58.8917 97.4745L29.5517 68.1348L40.6543 57.0322L59.4054 75.7833L97.0492 41.563L107.615 53.1794L58.8917 97.4745Z" fill="#31CF41" />
                    </svg>
                </div>
                <div className="flex flex-col mt-3">
                    <button className='w-61 h-12 text-[white] bg-[#2BBEF9] flex items-center justify-center rounded-3xl cursor-pointer max-sm:ml-12'>Go to Home</button>
                </div>

            </div>
            <div className="absolute bottom-0 right-107 mb-6 opacity-5">
                <svg width="234" height="251" viewBox="0 0 234 251" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M140 0C63.1039 0 0 63.1039 0 140C0 216.896 63.1039 280 140 280C216.896 280 280 216.896 280 140C280 63.1039 216.896 0 140 0ZM123.057 203.678L61.7498 142.371L84.9494 119.172L124.131 158.353L202.789 86.8481L224.867 111.121L123.057 203.678Z" fill="#31CF41" />
                </svg>
            </div>
        </>
    );
}

export default MsgSentSuccessful;
