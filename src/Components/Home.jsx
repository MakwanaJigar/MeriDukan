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
    </>
  );
}

export default Home;
