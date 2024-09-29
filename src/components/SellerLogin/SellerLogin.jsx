import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { FaMobileAlt, FaLock, FaUserAlt } from "react-icons/fa"; // Importing icons
import "./SellerLogin.css";
import WebLogo from "../../assets/WebLogo.png"

const SellerLogin = () => {
  const [mobile, setMobile] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("https://alphasilver.productsalphawizz.com/app/v1/api/get_sellers", {
        mobile,
        password,
      });

      if (response.status === 200) {
        const token = response.data.token;
        localStorage.setItem("authToken", token);
        navigate("/seller/dashboard");
      } else {
        setError("Invalid login credentials");
      }
    } catch (err) {
      setError("Error logging in. Please try again.");
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <div className="login-header">
          <img src={WebLogo} alt="Alpha Platinum" className="logo" />
        </div>

        <p>Sign in to start your session</p>

        <form className="login-form" onSubmit={handleLogin}>
          <div className="input-group">
            <input
              type="text"
              placeholder="Mobile"
              className="login-input"
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
              required
            />
                        <FaMobileAlt className="input-icon" /> {/* React icon */}

          </div>

          <div className="input-group">
            <input
              type="password"
              placeholder="Password"
              className="login-input"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
                        <FaLock className="input-icon" /> {/* React icon */}

          </div>

          {error && <p className="error-message">{error}</p>}

          <div className="remember-me">
            <input type="checkbox" id="rememberMe" />
            <label htmlFor="rememberMe">Remember Me</label>
          </div>

          <button type="submit" className="login-button">
            <FaUserAlt className="button-icon" /> Sign In {/* Icon in button */}
          </button>
        </form>

        <div className="login-links">
          <a href="#">Don't have any account?</a>
          <a href="#">Forgot Password</a>
          <a href="#">Go To Website</a>
        </div>
      </div>
    </div>
  );
};

export default SellerLogin;
