import React from 'react';
import Footer from './Footer';
import { PopupText } from "react-calendly";
import Navbar from './Navbar';
import '../css/Homepage.css';
import Homepageimg from '../images/Homepageimg.png' 
import baa from '../images/baa.png'
import looking from '../images/looking.png'
import bluehull from '../images/bluehull.png'
import bow from '../images/bow.png'
import lookinatboatsmall from '../images/lookinatboatsmall.png'
import palmtree from '../images/palmtree.jpeg' 


const Homepage = () => {
 
  return (
    <body className="Homepage">
    <Navbar />
      <div className='Homepage_Body'>
          <div className='Homepage_Name'>
            <div className='Homepage_Titles'>
              <h3 className='Homepage_Title'>MOBILE BOAT DETAILING</h3>
              <h3 className='Homepage_Subtitle'>Your Satisfaction Is Our Priority</h3>
            </div>
              <img className='Homepage_Image' src={Homepageimg} alt='waterdrophull'/>
              <div className='Homepage_Images'>
                <img className='Homepage_Imagescroll' id='Homepage_scrollbar' src={baa} alt='hull cleaning'/>
                <img className='Homepage_Imagescroll' src={bluehull} alt='hull cleaning'/>
                <img className='Homepage_Imagescroll' src={bow} alt='hull cleaning'/>
                <img className='Homepage_Imagescroll' src={lookinatboatsmall} alt='hull cleaning'/>
                <img className='Homepage_Imagescroll' src={looking} alt='hull cleaning'/>
                <img className='Homepage_Imagescroll' src={palmtree} alt='hull cleaning'/>
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
        <div className='Homepage_Footer'>
        <Footer />
        </div>
    </body>
  );
};

export default Homepage;