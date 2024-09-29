// src/components/DownloadApp.js
import React from 'react';
import './DownloadApp.css'; // Importing the custom CSS file
import A6 from "../../assets/A6.png"
import A7 from "../../assets/A7.png"
import A8 from "../../assets/A8.png"
import A9 from "../../assets/A9.png"

function DownloadApp() {
  return (
    <div className="download-app-container">
        <div className='image-container'>
          <img src={A6} />
        </div>
      <div className="text-container">
        <h2 className="heading">Download App Now!</h2>
        <p>Use code <span className="bold">WELCOME</span> and get <span className="bold">FLAT 12% OFF*</span>on your first booking.</p>
      </div>

      <div className="icon-container">
        <img
          src={A7}
          alt="App Store"
          className="store-icon"
        />
        <img
          src={A8}
          alt="Google Play"
          className="store-icon"
        />
        </div>
        <div>
          <img src={A9} alt="QR Code" className="qr-code" />
        </div>
      
    </div>
  );
}

export default DownloadApp;
