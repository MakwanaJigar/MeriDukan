import React from 'react';
import Hero1 from '../Images/Hero-1.avif'
import Hero2 from '../Images/Hero-2.avif'
import Hero3 from '../Images/Hero-3.avif'
import Cards from './Cards';

const Home = () => {
  return (
    <>
     {/* HERO IMAGE START'S HERE */}

    <div className="HomeHeroImg">
     <div id="carouselExampleFade" className="carousel slide carousel-fade">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img id='hero' src={Hero1} className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src={Hero2} id='hero' className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img id='hero' src={Hero3} className="d-block w-100" alt="..."/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
</div>
     {/* HERO IMAGE END'S HERE */}
     <Cards />
     

      
    {/* FOOTER START'S HERE */}

    <div className="fotter d-flex justify-content-evenly  align-content-center justify-content-center mt-4 ">

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
    </>
  );
}

export default Home;
