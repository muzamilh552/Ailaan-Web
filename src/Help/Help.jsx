import React, { useState } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import MsgSentSuccessful from './MsgSentSuccessful';

const Help = () => {
    const navigate = useNavigate();

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")
    const [message, setMessage] = useState("")

    const HandleFormSubmit = (event) => {
        event.preventDefault();

    }
    return (
        <>
            {/* <Routes>
        <Route path='/msgsentsuccessful' element={<MsgSentSuccessful/>} />
    </Routes> */}
            <div className='flex flex-col border-2 border-[#D0D0D0] mt-24 mx-27 p-7 max-sm:ml-[22%] max-sm:w-[70%] mb-10'>
                <h1 className='font-[Poppins] font-semibold text-base text-left'>Help</h1>
                <form action="" className='p-12 max-sm:p-2' onSubmit={(event) => {
                    HandleFormSubmit(event)
                }}>
                    <div className="flex flex-row justify-around mb-10 max-sm:flex-col">
                        <div className="flex flex-col">
                            <label className='my-2' htmlFor="name">Name</label>
                            <input type="text" name="" id="name" value={name} className='border-2 border-[#D0D0D0] w-117 h-12.5 text-[#858997] p-2 max-sm:w-full' placeholder='Type Here' onChange={(event) => {
                                setName(event.target.value)
                            }} />
                        </div>
                        <div className="flex flex-col">
                            <label className='my-2' htmlFor="email">Email</label>
                            <input type="text" name="" id="email" className='border-2 border-[#D0D0D0] w-117 h-12.5 text-[#858997] p-2 max-sm:w-full' placeholder='Type Here' value={email} onChange={(event) => {
                                setEmail(event.target.value)
                            }} />
                        </div>
                    </div>
                    <div className="flex flex-col pl-9 mb-10 max-sm:pl-0">
                        <label className='my-2' htmlFor="phone">Phone Number</label>
                        <input type="text" name="" id="phone" className='border-2 border-[#D0D0D0] w-117 h-12.5 text-[#858997] p-2 max-sm:w-full' placeholder='Type Here' value={phone} onChange={(event) => {
                            setPhone(event.target.value)
                        }} />
                    </div>
                    <div className="flex flex-col pl-9 w-118 mb-10 max-sm:w-full max-sm:pl-0">
                        <label className='my-2' htmlFor="message">Message</label>
                        <textarea className='border-2 border-[#D0D0D0] w-117 h-34 text-[#858997] p-2 max-sm:w-full' name="" id="message" placeholder='Write a message' value={message} onChange={(event) => {
                            setMessage(event.target.value)
                        }} ></textarea>
                        <p className='text-right text-[#333333] text-[10px] font-normal'>0/200</p>
                    </div>
                    <div className="flex flex-col pl-9 max-sm:w-full max-sm:pl-0">
                        <button className='w-40 h-12 text-[white] bg-[#2BBEF9] flex items-center justify-center rounded-3xl cursor-pointer max-sm:w-full' onClick={() => {
                            navigate("/msgsentsuccessful")
                        }}>SEND MESSAGE</button>
                    </div>

                </form>
            </div>
        </>
    );
}

export default Help;
