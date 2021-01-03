import React from 'react';
import Footer from './Footer';
import { PopupText } from "react-calendly";
import Navbar from './Navbar';
import '../css/About.css';
import dreandkay from '../images/dreandkay.jpg';
import thewholefam from '../images/thewholefam.jpg';
import el from '../images/el.jpg';
import rs from '../images/rs.jpeg';
import chidi from '../images/chidi.jpg';
import rupert from '../images/rupert.jpeg';
import bubby from '../images/bubby.jpg';
import boo from '../images/boo.jpg';
import ducks from '../images/ducks.jpg';
import court from '../images/court.jpg';
import charles from '../images/charles.jpg';
import roseandrup from '../images/roseandrup.jpeg';

const About = () => {
 
  return (
    <body className="About">
    <Navbar />
      <div className='About_Body'>
          <div className='About_Name'>
            <div className='About_Titles'>
              <h3 className='About_Title'>ALL ABOUT NAUTI DETAILS</h3>
              <h3 className='About_Subtitle'>Veteran Owned and Operated</h3>
            </div>
            <div className='About_Info'>
                <h3 className='About_InfoTitle'>Our Background</h3>
                <p className='About_TheInfo1'>Nauti Details & Service offers quality services, exceptional proficiency and the highest level of professionalism. No matter what service you’re looking for, we guarantee to not only meet, but exceed your expectations and ensure your full satisfaction.</p>
                <p className='About_TheInfo2'>Our team is up for every job, managing projects with the skills and experience gained from the United States Coast Guard. Andrea and Kaylee are both veterans and are now putting the skills they acquired into this new business venture. Please get in touch to learn more about our team, our company or for details about the services we provide.</p>
            </div>
            <div className='About_Family'>
                Our Family
            </div>
              <div className='About_Images'>
                <img className='About_Imagescroll' id='Homepage_scrollbar' src={dreandkay} alt='hull cleaning'/>
                <img className='About_Imagescroll' src={el} alt='hull cleaning'/>
                <img className='About_Imagescroll' src={thewholefam} alt='hull cleaning'/>
                <img className='About_Imagescroll' src={chidi} alt='hull cleaning'/>
                <img className='About_Imagescroll' src={bubby} alt='hull cleaning'/>
                <img className='About_Imagescroll' src={boo} alt='hull cleaning'/>
                <img className='About_Imagescroll' src={charles} alt='hull cleaning'/>
                <img className='About_Imagescroll' src={rs} alt='hull cleaning'/>
                <img className='About_Imagescroll' src={rupert} alt='hull cleaning'/>
                <img className='About_Imagescroll' src={roseandrup} alt='hull cleaning'/>
                <img className='About_Imagescroll' src={court} alt='hull cleaning'/>
                <img className='About_Imagescroll' src={ducks} alt='hull cleaning'/>
              </div>
                <link href="https://calendly.com/assets/external/widget.css" rel="stylesheet"/>
                <script src="https://calendly.com/assets/external/widget.js" type="text/javascript"></script>
               <button className='Homepage_Button'><PopupText
                color="#001997"
                text="Book Your Appointment Now"
                url="https://calendly.com/nautidetails/consultation"/>
               </button>
        </div>
        </div>
        <div className='About_Footer'>
        <Footer />
        </div>
    </body>
  );
};

export default About;