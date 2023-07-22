import React from 'react';
import AboutHero4 from '../Images/AboutHero-4.avif'

const About = () => {
  return (
    <>

<div id="carouselExampleSlidesOnly1"  class="carousel slide mt-5" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active" id='hero1'>
      <img src={AboutHero4} class="d-block w-100" alt="..."/>
      <div className="card-img-overlay text-light d-flex justify-content-center flex-column text-center">
    <span className="card-title text-light fw-bold">-Since 1999-</span>
    <p className='hero-title'>We Provide Best-quality<br/> Printed Products At<br/> Affordable Prices.</p>
    <hr className='container' style={{border:'3px solid white'}}/>

<div className="main-box row justify-content-center flex-row text-center">

    <div className="box1 col-md-2">
      <h2 className='fw-bold'>WHO WE ARE</h2>
      <p>Qui dolore ipsum quia dolor sitamet, consectetur adipisci velit, sed quia non numquam eius modi tempora incidunt lor.</p>
    </div>

    <div className="box2 col-md-3">
      <h2 className='fw-bold'>HOW IT STARTED</h2>
      <p>Qui dolore ipsum quia dolor sitamet, consectetur adipisci velit, sed quia non numquam eius modi tempora incidunt lor.</p>
    </div>

    <div className="box3 col-md-3">
      <h2 className='fw-bold'>WHY CHOOSE US</h2>
      <p>Qui dolore ipsum quia dolor sitamet, consectetur adipisci velit, sed quia non numquam eius modi tempora incidunt lor.</p>
    </div>

    <div className="box4 col-md-3">
      <h2 className='fw-bold'>HOW IT WORKS</h2>
      <p>Qui dolore ipsum quia dolor sitamet, consectetur adipisci velit, sed quia non numquam eius modi tempora incidunt lor.</p>
    </div>

</div>
  </div>
 
    </div>
  </div>


    {/* FOOTER START'S HERE */}

      <div className="fotter d-flex justify-content-evenly  align-content-center justify-content-cente ">

          <div className="footerleft d-flex align-content-center flex-wrap">
            <div className="firstli">
              <ul>
                <li>Home</li>
                <li>Tshirts</li>
                <li>Shirts</li>
              </ul> 
                </div>
                <div className="secondli">    
                <ul>
                <li>Jeans</li>
                <li>Contact</li>
              </ul>
              </div>
          </div>
          <div className="footerright d-flex align-content-center flex-wrap">

            <div className="btn btn-light mx-2">
              <i class="fa-brands fa-facebook" style={{color:'blue'}}></i>
            </div>
            <div className="btn btn-light mx-2">
              <i className='fa-brands fa-twitter' style={{color:'blueviolet'}}></i>
            </div>
            <div className="btn btn-light mx-2">
              <i className='fa-brands fa-youtube' style={{color:'red'}}></i>
            </div>
            <div className="btn btn-light mx-2">
              <i className='fa-brands fa-google' style={{color:'yellowgreen'}}></i>
            </div>
            <div className="btn btn-light mx-2">
              <i className='fa-brands fa-instagram' style={{color:'#bc1888'}}></i>
            </div>

          </div>


      </div>

    {/* FOOTER END'S HERE */}

    
 <div className="card-footer bg-light d-flex justify-content-evenly align-content-center justify-content-center">
  <p className='d-flex align-content-center flex-wrap'>Copyright &copy; 2023 ApniDukan.Com</p>
  <p className='d-flex align-content-center flex-wrap'>Powered by ApniDukan.Com</p>
 </div>
    </div>
    </>
  );
}

export default About;
