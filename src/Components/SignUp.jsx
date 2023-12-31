import React from 'react';
import Logo2 from '../Images/Logo-2.png'
import LoginSideIMG1 from '../Images/LoginSideIMG-1.avif'
import { Link } from 'react-router-dom';

const SignUp = () => {
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
    <input type="text" placeholder="First Name" className="form-control" id="exampleInputFirstName" aria-describedby="firstnameHelp"/>   
  </div>
  <div className="form-group pb-3">    
    <input type="text" placeholder="Last Name" className="form-control" id="exampleInputLastName" aria-describedby="lastnameHelp"/>   
  </div>
  <div className="form-group pb-3">    
    <input type="email" placeholder="Email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>   
  </div>
  <div className="form-group pb-3">   
    <input type="password" placeholder="Password" className="form-control" id="exampleInputPassword1"/>
  </div>
  <div className="form-group pb-3">   
    <input type="password" placeholder="Confirm Password" className="form-control" id="exampleInputConfirmPassword2"/>
  </div>
   <div className="pb-2">
  <button type="submit" className="btn btn-primary w-100 font-weight-bold mt-2">Create Account</button>
   </div>
</form>

  <div>
  <Link type="submit" className="btn btn-dark w-100 font-weight-bold mt-2" to='/login'>SignUp</Link>
     </div>
 
  
</div>

</div>
</div>
</div>


        
{/* <!--SignUp Modal START'S HERE --> */}
{/* <div className="modal fade" id="signupModal" tabIndex="-1" aria-labelledby="signupModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h1 className="modal-title fs-5" id="signupModalLabel">Get an iCoder Account</h1>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
        <form>
          <div className="mb-3">
            <label htmlFor="nameInputEmail1" className="form-label">Name</label>
            <input type="text" className="form-control" id="nameInputEmail1" aria-describedby="emailHelp" required/>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required/>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
            <input type="password" className="form-control" id="exampleInputPassword1" minLength="8" required />
          </div>
          <div className="mb-3">
            <label htmlFor="cexampleInputPassword1" className="form-label">Confirm Password</label>
            <input type="password" className="form-control" id="cexampleInputPassword1" minLength="8" required/>
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

{/* <!--SignUp Modal END'S HERE --> */}

    </>
  );
}

export default SignUp;
