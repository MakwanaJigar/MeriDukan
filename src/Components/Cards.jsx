import React from 'react';

// CARDS IMAGES
import Shirt3 from '../Images/Shirt-3.avif'
import Tshirt1 from '../Images/Tshirt-1.avif'
import TshirtW from '../Images/Tshirt-W-1.avif'
// BRANDS LOGOS
import Wrong from '../Images/Wrong.png'
import Levis from '../Images/Levis.png'
import TeamSpirit from '../Images/TeamSpirit.png'
import Arrow from '../Images/Arrow.png'
import VanHuesen from '../Images/VanHeusen.png'


const Cards = () => {
  return (
    <>

<div className="container text-center w-75">
  <div className="row gy-3 m-2">
    <div className="col-md">  
    <div className="card" style={{width: "18rem"}}>
  <img src={Shirt3} className="card-img-top" alt="..."/>
  <div className="card-img-downlay">
    <h5 className="card-title text-primary fw-bold">Shirts</h5>
    <div className="btn btn-outline-danger m-2">Shop Now</div> 
  </div>
</div>
    </div>
    <div className="col-md">
    <div className="card" style={{width: "18rem"}}>
  <img src={Tshirt1} className="card-img-top" alt="..."/>
  <div className="card-img-downlay">
    <h5 className="card-title text-primary fw-bold">TShirts</h5>
    <div className="btn btn-outline-danger m-2">Shop Now</div> 
  </div>
</div>
    </div>
    <div className="col-md">
    <div className="card" style={{width: "18rem"}}>
  <img src={TshirtW} className="card-img-top" alt="..."/>
  <div className="card-img-downlay">
    <h5 className="card-title fw-bold text-primary">Women T-Shirts</h5>
<div className="btn btn-outline-danger m-2">Shop Now</div> 
  </div>
</div>
    </div>
  </div>
</div>



{/* COLABORATED BRANDS LIST AND IMAGES START'S HERE*/}

<div class="container-fluid text-center mt-5">
  <div class="row row-cols-1 row-cols-sm-2 row-cols-md-5">
    <div class="col"><img src={Wrong} alt="" className=''/></div>
    <div class="col"><img src={Levis} className='' alt="" /></div>
    <div class="col"> <img src={VanHuesen} className='' alt="" /></div>
    <div class="col"> <img src={Arrow} className='' alt="" /></div>
    <div class="col"> <img src={TeamSpirit} className='' alt="" /></div>
  </div>
</div>



    {/* <section className='d-flex container bg-dark'>
        <div className="logo-1 mx-2">
            <img src={Wrong} alt="" className=''/>
        </div>
        <div className="logo-2 mx-2">
            <img src={Levis} className='' alt="" />
        </div>
        <div className="logo-3 mx-2">
            <img src={VanHuesen} className='' alt="" />
        </div>
        <div className="logo-4 mx-2">
            <img src={Arrow} className='' alt="" />
        </div>
        <div className="logo-5 mx-2">
            <img src={TeamSpirit} className='' alt="" />
        </div>

    </section> */}


{/* COLABORATED BRANDS LIST AND IMAGES END'S HERE*/}
 
    </>
  );
}

export default Cards;
