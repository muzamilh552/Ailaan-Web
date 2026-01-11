import React, { useState } from 'react';

const Signup = () => {
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [conpassword, setConpassword] = useState("")
const SignupFormSubmit = (evt) =>{
    evt.preventDefault()
console.log("UserName", username)
console.log("Confirm password", conpassword)
}
  return (
    <>
    <div className='Signup Log'>
      <h1>Sign Up Form</h1>
      <form className='form' action="" onSubmit={(evt) => {
        SignupFormSubmit(evt)

      }}>
        <div className="username">
            <label htmlFor="username">UserName</label>
            <input id='username' value={username} type="text" onChange={(evt) => {
                setUsername(evt.target.value)
            }} />
        </div>
        <div className="email">
            <label htmlFor="email">Email</label>
            <input id='email' value={email} type="text" onChange={(evt) => {
                setEmail(evt.target.value)
            }} />
        </div>
        <div className="password">
            <label htmlFor="password">Password</label>
            <input id='password' value={password} type="text" onChange={(evt) => {
                setPassword(evt.target.value)
            }} />
        </div>
        <div className="conPassword">
            <label htmlFor="conpassword">Confirm Password</label>
            <input id='conpassword' value={conpassword} type="text" onChange={(evt) => {
setConpassword(evt.target.value)
            }} />

        </div>
        <div className="button">
            <button className='btnSign'>Sign Up</button>
        </div>
      </form>
    </div>
    </>
  );
}

export default Signup;
