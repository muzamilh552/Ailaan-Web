import React, { useState } from 'react';
import './Login.css';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate()
    const FormSubmit = (evt) => {
        evt.preventDefault()
     
        console.log("Email", email)
        console.log("Password", password)
   setEmail("")
        setPassword("")
    }

    return (
        <>
            <div className='Log'>
                <h1>Sign in to your account</h1>
                <form className='form' action="" onSubmit={(evt) => {
                    FormSubmit(evt);

                }} >
                    <div className="email">
                        <label htmlFor="email">Email</label>
                        <input type="text" id='email' value={email} placeholder='Enter Email' onChange={(event) => {
                            setEmail(event.target.value)
                        }} />
                    </div>
                    <div className="password">
                        <label htmlFor="password">Password</label>
                        <input type="text" id='password' value={password} placeholder='Enter Password' onChange={(event) => {
                            setPassword(event.target.value)
                        }} />
                    </div>
                    <div className="button">
                        <button className='btnSign'>Sign In</button>
                    </div>
                    <div className="SignUp">
                        <h1>Don't have an account? <a href="" onClick={() => {
                            navigate("/signup");
                        }} >Sign Up</a></h1>
                    </div>
                </form>
            </div>
        </>
    );
}

export default Login;
