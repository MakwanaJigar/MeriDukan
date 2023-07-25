import React from 'react';
import Aboutbackground2 from '../Images/AboutBackground-2.webp'
import AboutPageBackground3 from '../Images/AboutPageBackground-3.webp'

const About = () => {
  return (
    <>
 <div className="container about">
 
    <div className="">

      <p className='since '>-Since 1999-</p>
      <h1 className='MainAboutText'>
      We Provide Best-quality<br/>
      Printed Products At<br/>
      Affordable Prices.
      </h1>
      <div className="btn btn-light" >EXPLORE MORE</div> 
    </div>
    
    <hr />

    <div className="">

    <div className="container">
  <div className="row ">
    <div className="col-md-3 col-sm-1">
    <h4 className='fw-bold'>
          WHO WE ARE
        </h4>
        <p>
        Qui dolore ipsum quia dolor sitamet, consectetur adipisci velit, sed quia non numquam eius modi tempora incidunt lor.
        </p>
    </div>
    <div className="col-md-3 col-sm-1">
    <h4 className='fw-bold'>
          HOW IT STARTED
        </h4>
        <p>
        Qui dolore ipsum quia dolor sitamet, consectetur adipisci velit, sed quia non numquam eius modi tempora incidunt lor.
        </p>
    </div>
    <div className="col-md-3 col-sm-1">
    <h4 className='fw-bold'>
          WHY CHOOSE US
        </h4>
        <p>
        Qui dolore ipsum quia dolor sitamet, consectetur adipisci velit, sed quia non numquam eius modi tempora incidunt lor.
        </p>
    </div>
    <div className="col-md-3 col-sm-1">
    <h4 className='fw-bold'>
          HOW ITS WORKS
        </h4>
        <p>
        Qui dolore ipsum quia dolor sitamet, consectetur adipisci velit, sed quia non numquam eius modi tempora incidunt lor.
        </p>
    </div>
  </div>
</div>

    </div>  
 </div>

{/* TEXT AND IMAGE SECTIONS  BOTH ARE SIDE BY SIDE*/}
 <div className="card  mb-3" style={{width:'100vw',height:'70vh'}}>
  <div className="row g-0">
   
    <div className="col-md-8 container">
      <div className="card-body ">
      <h1 className='btn btn-danger' id='bacscket'><i  className="fa-sharp fa-solid fa-basket-shopping"  style={{cursor:'pointer',color:'white',fontSize:'3vh'}}></i></h1>
    <h1 className="card-title fw-bold" style={{color:'gray'}}>Best Quality Printed Tshirts , Shirts And Shoes Very <br/>Affordable Price</h1>

    <div className="GiftSections" style={{color:'gray',fontSize:'100%',fontWeight:'bold'}} >
    <div className=' mx-3'>
        <p>Personal gifts</p>
        <p>Occasional Gifts</p>
        <p>Corporate Gifts</p>
      </div>
      <div className=' mx-3'>
      <p>Printed Tshirts</p>
      <p>Printed Mugs</p>
      <p>Corporate Gifts</p>
      </div>
      </div>
      <h6 className='h6'>
      Neque porro quisquam est, qui dolore ipsum quia dolor sit amet, consectetur adipisci velit, sed quia non incidunt lores ta porro ame. numquam eius modi tempora incidunt lores ta porro ame.
      </h6>
      </div> 

    </div>

    <div className="col-md-4">
      <img src={Aboutbackground2} className="img-fluid rounded-start" style={{height:'60vh'}} alt="..."/>
    </div>
  </div>
</div>

{/* GET OFFERS SECTIONS */}

    <div className="box">
      <h2 className='fw-bold text-light mx-5'>
        GET BEST OFFERS ON ALL <br/> PRODUCTS
      </h2>
      <div className="btn btn-light mx-5">
        VISIT STORE <i className="fa-regular fa-greater-than"></i>
      </div>
    </div>


{/* AFTER GET OFFERS SECTION WITH BACKGROUND IMAGE */}
<div className="card bg-dark text-white">
  <img src={AboutPageBackground3}  className="card-img AboutPageBackground" alt="..."/>
  <div className="card-img-overlay container" id='imagetext'>
    <h1 className="card-title fw-bold">Tshirt Printing Is The New Cool!</h1>
    <p className="card-text">Neque porro quisquam est, qui dolore ipsum quia dolor sit amet, consectetur adipisci velit, sed quia non numquam eius modi tempora incidunt lores ta porro ame.</p>
    <p className="btn btn-outline-light">EXPLORE MORE</p>
  </div>
</div>

{/* <div>
    <img src={AboutPageBackground1}  className="AboutPageBackground" alt="" />
    <div className="card-img-overlay">
    <h1 className="card-title">Tshirt Printing Is The New Cool!</h1>
    <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
    <p className="card-text">Last updated 3 mins ago</p>
  </div>

</div> */}

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

            <div className="btn btn-light mx-2" >
              <i className="fa-brands fa-facebook"  style={{color:'blue'}}></i>
            </div>
            <div className="btn btn-light mx-2">
              <i className='fa-brands fa-twitter'  style={{color:'blueviolet'}}></i>
            </div>
            <div className="btn btn-light mx-2" >
              <i className='fa-brands fa-youtube'  style={{color:'red'}}></i>
            </div>
            <div className="btn btn-light mx-2" >
              <i className='fa-brands fa-google'  style={{color:'yellowgreen'}}></i>
            </div>
            <div className="btn btn-light mx-2" >
              <i className='fa-brands fa-instagram'  style={{color:'#bc1888'}}></i>
            </div>

          </div>


      </div>

    {/* FOOTER END'S HERE */}

    
 <div className="card-footer bg-light d-flex justify-content-evenly align-content-center justify-content-center">
  <p className='d-flex align-content-center flex-wrap'>Copyright &copy; 2023 ApniDukan.Com</p>
  <p className='d-flex align-content-center flex-wrap'>Powered by ApniDukan.Com</p>
 </div>
    {/* </div> */}
    </>
  );
}

export default About;
