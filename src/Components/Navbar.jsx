import React from 'react';
import {Link} from 'react-router-dom'


const Navbar = () => {
  return (
    <>
      
      <nav className="navbar navbar-expand-lg fixed-top mb-5 navbar-light bg-light  shadow" >
  <div className="container">
    <Link className="navbar-brand text-dark" to="/"><span className='shop fw-bold h3'>ApniDakan</span>.com</Link>
    <button className="navbar-toggler text-light bg-warning" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav m-auto fw-bold mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link " aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link " to="/product">Products</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link " to="/contact">Contact</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link " to="/about">About US</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link " to="/login">Login</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link " to="/signup">SignUp</Link>
        </li>
      </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2 rounded-5" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-dark rounded-3" type="submit"><i className='fa fa-search'></i></button>
      </form>
      
    </div>
    
</div>
</nav>
    </>
  );
}

export default Navbar;
