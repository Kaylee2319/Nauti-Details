import React from 'react';
import '../css/Navbar.css';
import { Link } from 'react-router-dom';
import Nautilogo from '../images/Nautilogo.jpg'
const Navbar = () => {

  return (
    <body className="Navbar">
      <div className='Navbar_Body'>
          <img className='Navbar_Image' src={Nautilogo} alt='Nauti Logo'/>
          <div className='Navbar_Name'>NAUTI DETAILS & SERVICE LLC</div>
      </div>
      <div className='Navbar_Line'> </div>
      <div className='Navbar_Links'>
          <Link To={'/'} className='Navbar_Link'>Home</Link>
          <Link To={'/'} className='Navbar_Link'>About</Link>
          <Link To={'/'} className='Navbar_Link'>Services</Link>
          <Link To={'/'} className='Navbar_Link'>Contact Us</Link>
      </div>
    </body>
  );
};

export default Navbar;