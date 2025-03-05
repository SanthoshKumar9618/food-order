import React, { useState } from 'react'
import './LoginPopuo.css'
import { assets } from '../../assets/assets'

const LoginPopup = ({setShowLogin}) => {

  const[currState,setCurrState] = useState("Login")

  return (
    <div className='login-popup'>
      <form action="" className='login-popup-container'>
        <div className="login-popup-title">
          <h2>{currState}</h2>
          <img onClick={()=>setShowLogin(false)} src={assets.cross_icon} alt="" />
        </div>
        <div className="login-popup-inputs">
          {
            currState==="Login"?<></>:<input type="text" placeholder='Your name' required/>
          }
          
          <input type="email" placeholder='email' required/>
          <input type="password" placeholder='password' required/>
        </div>
        <button>{currState==="sing up"?"Create account":"Login"}</button>
        <div className="login-popup-condition">
          <input type="checkbox" required/>
          <p>By continuing, I agree to the terms of use & privacy policy</p>
        </div>
        {currState==="Login"
        ? <p>Create a new account? <span onClick={()=>setCurrState("sign up")}>Click here</span></p>
      :<p>Already have an Account <span onClick={()=>setCurrState("Login")}>Login here</span></p>}
        
        
      </form>
    </div>
  )
}

export default LoginPopup
