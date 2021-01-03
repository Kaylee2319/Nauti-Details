import React from 'react';
import '../css/Footer.css';
import { AiOutlineFacebook, AiOutlineInstagram } from "react-icons/ai";
const Footer = () => {

  return (
    <body className="Footer_all">
      <div className='Footer_Body'>
          <div className='Footer_Media'>
              <a href='https://www.facebook.com/Nauti-Details-Service-LLC-107897261017644/?modal=admin_todo_tour'><AiOutlineFacebook className='Facebook' /></a>
              <a href='https://www.facebook.com/Nauti-Details-Service-LLC-107897261017644/?modal=admin_todo_tour'><AiOutlineInstagram className='Instagram' /></a>
          </div>
          <div className='Footer_Name'>Palm Beach, FL</div>
      </div>
    </body>
  );
};

export default Footer;