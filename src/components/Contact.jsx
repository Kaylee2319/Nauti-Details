import React from 'react';
import Footer from './Footer';
import { PopupText } from "react-calendly";
import Navbar from './Navbar';
import '../css/Contact.css';
import aonboat from '../images/aonboat.png'

const Contact = () => {
 
  return (
    <body className="Contact">
    <Navbar />
      <div className='Contact_Body'>
          <div className='Contact_Name'>
            <div className='Contact_Titles'>
              <h3 className='Contact_Title'>GET IN TOUCH</h3>
              <h3 className='Contact_Subtitle'>nautidetailsservice@gmail.com</h3>
              <h3 className='Contact_Subtitle'>315-292-8282</h3>
            </div>
            <div className='Contact_Buttons'>
            <a className='Contact_Button' href="tel:3152928282">Call Now</a>
            <a className='Contact_Button' href="mailto:nautidetailsservice@gmail.com">Email Us</a> 
            </div>
                <link href="https://calendly.com/assets/external/widget.css" rel="stylesheet"/>
                <script src="https://calendly.com/assets/external/widget.js" type="text/javascript"></script>
               <button className='Homepage_Button'><PopupText
                color="#001997"
                text="Book Your Appointment Now"
                url="https://calendly.com/nautidetails/consultation"/>
               </button>
               <h3 className='Contact_Subtitle2'>Your Satisfaction Is Our Priority</h3>
               <img className='Contact_Image' src={aonboat} alt='waterdrophull'/>
        </div>
        </div>
        <div className='Homepage_Footer'>
        <Footer />
        </div>
    </body>
  );
};

export default Contact;