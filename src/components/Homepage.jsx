import React, {useState} from 'react';
import Footer from './Footer';
import { PopupText } from "react-calendly";
import Navbar from './Navbar';
import '../css/Homepage.css';
import Homepageimg from '../images/Homepageimg.png' 
import Beforeandafter from '../images/Beforeandafter.jpeg'
import whitehullclean from '../images/whitehullclean.jpeg'
import bluehullclean from '../images/bluehullclean.jpg'
import Bowboat from '../images/Bowboat.jpeg'
import Lookingatboat from '../images/Lookingatboat.jpeg'
import palmtree from '../images/palmtree.jpeg' 
import { Carousel } from "react-responsive-carousel";
import styles from "react-responsive-carousel/lib/styles/carousel.min.css";
import Modal from 'react-modal';


const Homepage = () => {
  
  const [modalIsOpen,setModalIsOpen] = useState(false);

  const setModalIsOpenToTrue =()=>{
      setModalIsOpen(true)
  }

  const setModalIsOpenToFalse =()=>{
      setModalIsOpen(false)
  }
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
                <button className='Homepage_Imagescrolls' id='Homepage_scrollbar' onClick={setModalIsOpenToTrue}><img className='Homepage_Imagescroll' src={bluehullclean} alt='hull cleaning'/></button>
                <button className='Homepage_Imagescrolls'onClick={setModalIsOpenToTrue}><img className='Homepage_Imagescroll' src={Lookingatboat} alt='hull cleaning'/></button>
                <button className='Homepage_Imagescrolls'onClick={setModalIsOpenToTrue}><img className='Homepage_Imagescroll' src={whitehullclean } size='50%' color={'#23C2C4'}alt='hull cleaning'/></button>
                <button className='Homepage_Imagescrolls'onClick={setModalIsOpenToTrue}><img className='Homepage_Imagescroll' src={palmtree} alt='hull cleaning'/></button>
                <button className='Homepage_Imagescrolls'onClick={setModalIsOpenToTrue}><img className='Homepage_Imagescroll' src={Bowboat} alt='hull cleaning'/></button>
                <button className='Homepage_Imagescrolls'onClick={setModalIsOpenToTrue}><img className='Homepage_Imagescroll' src={Beforeandafter} alt='hull cleaning'/></button>
                <Modal isOpen={modalIsOpen} className="Modal">
                <button className="ModalButton" onClick={setModalIsOpenToFalse}>x</button>
                <Carousel className='Carousel' showThumbs={false} >
                <div className='CarouselImages'>
                    <img src={bluehullclean} />
                </div>
                <div className='CarouselImages'>
                    <img src={Lookingatboat} />
                </div>
                <div className='CarouselImages'>
                    <img src={Beforeandafter} />
                </div>
                <div className='CarouselImages'>
                    <img src={palmtree} />
                </div>
                <div className='CarouselImages'>
                    <img src={Bowboat} />
                </div>
                <div className='CarouselImages'>
                    <img src={whitehullclean } />
                </div>
                </Carousel>

                </Modal>
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