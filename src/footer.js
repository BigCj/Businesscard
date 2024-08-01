import React from 'react';
import './App.css';

function Footer() {
  return (
    <div className="footer">
       
                <a href="#"> <img src={process.env.PUBLIC_URL + '/igicon.png'} alt="instagram" /></a>
                <a href="#"> <img src={process.env.PUBLIC_URL + '/fbicon.png'} alt="facebook" /></a>
                <a href="#"> <img src={process.env.PUBLIC_URL + '/giticon.png'} alt="github" /></a>
                <a href="#"> <img src={process.env.PUBLIC_URL + '/xicon.png'} alt="x" /></a>
      
    
    </div>
  );
}

export default Footer;
