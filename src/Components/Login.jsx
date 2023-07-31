import React from 'react';
import LoginSideIMG1 from '../Images/LoginSideIMG-1.avif'
import Logo2 from '../Images/Logo-2.png'
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <>

<div className="container" id='login'>
<div className="row m-5 no-gutters shadow-lg">
<div className="col-md-6 d-none d-md-block">
<img src={LoginSideIMG1} className="img-fluid" style={{minHeight:"100%"}} />
</div>
<div className="col-md-6 bg-white p-5">
  <img src={Logo2} className='mb-5' style={{width:'30vw'}} alt="" />

<div className="form-style">
<form>
  <div className="form-group pb-3">    
    <input type="email" placeholder="Email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>   
  </div>
  <div className="form-group pb-3">   
    <input type="password" placeholder="Password" className="form-control" id="exampleInputPassword1"/>
  </div>
   <div className="pb-2">
  <button type="submit" className="btn btn-primary w-100 font-weight-bold mt-2">Login</button>
   </div>
</form>

  <div>
  <Link type="submit" className="btn btn-dark w-100 font-weight-bold mt-2" to='/signup'>Create New</Link>
     </div>
 
  
</div>

</div>
</div>
</div>



{/* 
    <div className="loginIMG">
      
      <img src="" alt="" />
      <form className='container form'>
          <div className="mb-3">
            <label for="exampleInputEmail1" className="form-label">Email address</label>
            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
          </div>
          <div className="mb-3">
            <label for="exampleInputPassword1" className="form-label">Password</label>
            <input type="password" className="form-control" id="exampleInputPassword1"/>
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
</form>

    </div> */}
    



        
  {/* <!--Login Modal START'S HERE --> */}
{/* <div className="modal fade" id="loginModal" tabIndex="-1" aria-labelledby="loginModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h1 className="modal-title fs-5" id="loginModalLabel">Login to iCoder</h1>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
        <form>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required/>
            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
            <input type="password" className="form-control" minLength="8" id="exampleInputPassword1" required/>
          </div>
          
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div> */}
{/* <!--Login Modal END'S HERE --> */}

    </>
  );
}

export default Login;
