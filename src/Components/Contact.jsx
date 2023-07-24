import React from "react";

const Contact = () => {
  return (
    <>
      <div className="container d-flex" id="ContactCard">
        <div class="mb-3" style={{ maxWidth: "540px" }}>
          <div class="row g-0">
            <div class="col-md-8">
              <div class="card-body">
                <h1 class="card-title">SAY HELLO</h1>
                <p class="card-text">
                  Qui dolore ipsum quia dolor sit amet, consectetur adipisci
                  velit, sed quia non numquam eius modi Neque porro quis quam
                  est.
                </p>
                <p class="card-text">
                  <small class="text-muted">Last updated 3 mins ago</small>
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d58502.41699318198!2d72.34177911025658!3d23.589945227654!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395c422caf789ef5%3A0x170bbc90b8be8bdc!2sMehsana%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1690180224059!5m2!1sen!2sin"
            style={{ border: "0", height: "50vh", width: "90vw" }}
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>

      <div className="ContactForm container">
        <form action="input">
          <h3 className="fw-bold" style={{color:"gray"}}>SEND US A MESSAGE</h3>

          <div class="row">
            <div class="col-sm-6">
              <input
                type="text"
                class="form-control"
                placeholder="First name"
                aria-label="First name"
              />
            </div>
            <div class="col  mb-3">
              <input
                type="text"
                class="form-control"
                placeholder="Last name"
                aria-label="Last name"
              />
            </div>
          </div>

          <div class="form-floating mb-3">
            <input
              type="email"
              class="form-control"
              id="floatingInput"
              placeholder="Your Email"
            />
            <label for="floatingInput">Email address</label>
          </div>
          <div class="form-floating">
            <input
              type="text"
              class="form-control mb-3"
              id="floatingPassword"
              placeholder="Addess"
            />
            <label for="floatingPassword">Address</label>
          </div>

          <div class="form-floating">
            <textarea
              class="form-control"
              placeholder="Leave a comment here"
              id="floatingTextarea2"
              style={{ height: "100px" }}
            ></textarea>
            <label for="floatingTextarea2">Message</label>
          </div>
        </form>
        <div className="btn btn-light mt-3"><i class="fa-solid fa-message mx-2"></i>SEND MESSAGE</div>
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
    </>
  );
};

export default Contact;
