import React from 'react';
import Footer from './Footer';
import { PopupText } from "react-calendly";
import Navbar from './Navbar';
import '../css/Service.css';


const Service = () => {
 
  return (
    <body className="Service">
    <Navbar />
      <div className='Service_Body'>
          <div className='Service_Name'>
            <div className='Service_Titles'>
              <h3 className='Service_Title'>DETAILING, WASHING, WAXING</h3>
            </div>
            <div className='Service_Info'>
                <p className='Service_TheInfo1'>Nauti Details & Service offers detailed washing, waxing, hull waxing/compounding, mold/mildew removal, metal shining, clean organized hatches, and any other need upon request. Hire us for this service and learn how we cater to the needs of each client, ensuring the results you need and deserve.</p>
                <p className='Service_TheInfo3'>How we charge...</p>
                <p className='Service_TheInfo2'>Our minimum price is $3/ft for a detailed wash. We like to see the boat before we negotiate a price with our clients. Depending on the condition we will come up with a fair price together. Call with any questions and thank you for your business!</p>
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
        <div className='Service_Footer'>
        <Footer />
        </div>
    </body>
  );
};

export default Service;