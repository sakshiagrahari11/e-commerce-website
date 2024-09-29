import React, { useState } from 'react';
import './TogglePage.css'; // Import the CSS file for styling
import axios from "axios"


const TogglePage = () => {
  const [isLogin, setIsLogin] = useState(true); // Toggle between Login and Register
  const [mobileNumber, setMobileNumber] = useState('');
  const [password, setPassword] = useState('');
  const [isRobot, setIsRobot] = useState(false); // reCAPTCHA check

  const handleBtn=(e)=>{
             e.preventDefault()
             const user = {mobileNumber};
             console.log(user)
             axios.post("https://hellostay.com/api/auth/login",user)
             .then(res=>{
                 console.log(res);
             })
         }

         const handleRegisterBtn=(e)=>{
          e.preventDefault()
          const user = {mobileNumber};
          console.log(user)
          axios.post("https://hellostay.com/api/auth/register",user)
          .then(res=>{
              console.log(res);
          })
      }
  // Handle form submission for Login
  const handleLogin = (e) => {
    e.preventDefault();
    // Login logic here
    console.log('Logging in with', mobileNumber, password);
  };

  // Handle form submission for Register
  const handleRegister = (e) => {
    e.preventDefault();
    // Register logic here
    console.log('Registering with', mobileNumber, isRobot);
  };

  return (
    <div className="auth-container">
      {/* Toggle buttons for switching between Login and Register */}
      <div className="auth-toggle">
  <button
    className={`toggle-btn login-btn ${isLogin ? 'active' : ''}`}
    onClick={() => setIsLogin(true)}
  >
    Login
  </button>
  <button
    className={`toggle-btn register-btn ${!isLogin ? 'active' : ''}`}
    onClick={() => setIsLogin(false)}
  >
    Register
  </button>
</div>

      {/* Render the appropriate form based on the isLogin state */}
      {isLogin ? (
        <form onSubmit={handleLogin} className="auth-form">
          <input
            type="text"
            placeholder="Enter Mobile Number"
            value={mobileNumber}
            onChange={(e) => setMobileNumber(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <div className="forgot-password">
            <a href="#">Forgot Password?</a>
          </div>
          <button onClick={handleBtn} type="submit">Login</button>
        </form>
      ) : (
        <form onSubmit={handleRegister} className="auth-form">
          <div className="input-container">
            <span className="country-code">+91</span>
            <input
              type="text"
              placeholder="Enter Mobile Number"
              value={mobileNumber}
              onChange={(e) => setMobileNumber(e.target.value)}
              required
            />
          </div>
          <div className="recaptcha-container">
            <input
              type="checkbox"
              checked={isRobot}
              onChange={() => setIsRobot(!isRobot)}
              required
            />
            <label>I'm not a robot</label>
          </div>
          <div className="action-buttons">
            <button type="button" className="cancel-button">
              Cancel
            </button>
            <button  onClick={handleRegisterBtn} type="submit" className="otp-button">
              Send OTP
            </button>
          </div>
        </form>
      )}
    </div>
  );
};

export default TogglePage;

// import React, { useState } from "react";
// import axios from "axios"

// const Register=()=>{
//     const [email , setEmail] = useState("")
//     const handleEmail=(e)=>{
// setEmail(e.target.value);
// // console.log(e)
//     }
//     const handleBtn=(e)=>{
//         e.preventDefault()
//         const user = {email};
//         console.log(user)
//         axios.post("https://hellostay.com/api/auth/register",user)
//         .then(res=>{
//             console.log(res);
//         })
//     }
//     return (
//         <div style={{marginLeft:"500px"}}> 
//            <input onChange={handleEmail} value={email} type="email" placeholder="email"></input>
//            <br></br>
//            <button onClick={handleBtn}>Submit</button>
//         </div>
//     )
// }
// export default Register;
