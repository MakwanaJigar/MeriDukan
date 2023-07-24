import React from 'react';
// import Logo from '../Images/Logo-2.png'
import {Link} from 'react-router-dom'



const Navbar = () => {
  return (
    <>
      
      <nav className="navbar navbar-expand-lg fixed-top mb-5 navbar-dark bg-light shadow" style={{height:'10vh'}}>
  <div className="container">
    <Link className="navbar-brand text-dark" to="/"><span className='shop fw-bold h3'>ApniDakan</span>.com</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav m-auto fw-bold mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link text-dark" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-dark" to="/product">Products</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-dark" to="/contact">Contact</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-dark" to="/about">About US</Link>
        </li>
      </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-dark" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>

    </>
  );
}

export default Navbar;
