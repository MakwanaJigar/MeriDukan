import React from "react";
import { Link } from "react-router-dom";
// TSHIRTS IMAGES IMPORTED
import TshirtA from '../Images/Tshirts/Tshirts-A.avif'
import TshirtB from '../Images/Tshirts/Tshirts-B.avif'
import TshirtC from '../Images/Tshirts/Tshirts-C.avif'
import TshirtD from '../Images/Tshirts/Tshirts-D.avif'
import TshirtE from '../Images/Tshirts/Tshirts-E.avif'
import TshirtF from '../Images/Tshirts/Tshirts-F.avif'

const Products = () => {
  return (
    <>
      <div className="container">
        {/* FILTER SIDEBAR TOGGLE MENU START'S HERE  */}

        <div className="container ">
          <button
            className="btn btn-light"
            id="LeftTtn"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasWithBothOptions"
            aria-controls="offcanvasWithBothOptions"
          >
            <i className="fa fa-bars"> Filter </i>
          </button>

          <div
            className="offcanvas offcanvas-start"
            data-bs-scroll="true"
            tabindex="-1"
            id="offcanvasWithBothOptions"
            aria-labelledby="offcanvasWithBothOptionsLabel"
          >
            <div className="offcanvas-header">
              <h5
                className="offcanvas-title FilterHeading"
                id="offcanvasWithBothOptionsLabel"
              >
                Product categories
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div className="offcanvas-body" id="SidebarFilter">
              <ul>
                <li><Link to="/MItems">MEN</Link></li>
                <li><Link to="/WItems">WOMEN</Link></li>
                <li><Link to="/MWItems">SHOES</Link></li>
              </ul>
              <div className="">
                <h5 className="FilterSidebarHeading">FILTER BY PRICE</h5>
              </div>
              <div className="FilterRange container">
                <input
                  type="range"
                  className="form-range"
                  min="0"
                  max="5"
                  step="0.5"
                  id="customRange3"
                />
              </div>
              <div className="d-flex">
                <div className="btn btn-light mx-5" id="FilterBtn">
                  <i className="fa fa-bars"> Filter</i>
                </div>
                <p className="mx-1">Price : $10 - $100</p>
              </div>
            </div>

            
          </div>
        </div>
        {/* FILTER SIDEBAR END'S HERE TOGGLE MENU */}
        {/* DORPDOWN MENU  */}

        <div className="dropdown float-end">
          <button
            className="btn dropdown-toggle"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Dropdown button
          </button>
          <ul className="dropdown-menu dropdown-menu-secondary">
            <li>
              <Link className="dropdown-item active" to="/">
                Default sorting
              </Link>
            </li>
            <li>
              <Link className="dropdown-item" to="/">
                Sort by popularity
              </Link>
            </li>
            <li>
              <Link className="dropdown-item" to="/">
                Sort by average rating
              </Link>
            </li>
            <li>
              <Link className="dropdown-item" to="/">
                Sort by letest
              </Link>
            </li>
            <li>
              <Link className="dropdown-item" to="/">
                Sort by price : Low to High
              </Link>
            </li>
            <li>
              <Link className="dropdown-item" to="/">
                Sort by price : High to Low
              </Link>
            </li>
            <li>
              <hr className="dropdown-divider" />
            </li>
            <li>
              <Link className="dropdown-item" to="/">
                Separated link
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* PRODUCTS CARDS START'S HERE */}

      <div className="container ">
        <div className="row d-flex justify-content-evenly alignItems-center">

        <div className="card col-md-2 mx-3" id="PruductID" style={{ width: "18rem" }}>
          <img src={TshirtA} id="img" className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">T-Shirt</h5>
            <p className="card-text fw-bold">
              Black T-Shirt for men
            </p>
            <p className=" ">$15.23</p>
          </div>
        </div>

        <div className="card col-md-2 mx-3" id="PruductID" style={{ width: "18rem" }}>
          <img src={TshirtB} id="img" className="card-img-top" alt="..." />
          <div className="card-body">
          <h5 className="card-title">T-Shirt</h5>
            <p className="card-text fw-bold">
              NavyBlue T-Shirt for men
            </p>
            <p className="align-items-center">$12.43</p>
          </div>
        </div>

        <div className="card col-md-2 mx-3" id="PruductID" style={{ width: "18rem" }}>
          <img src={TshirtC} id="img" className="card-img-top" alt="..." />
          <div className="card-body">
          <h5 className="card-title">T-Shirt</h5>
            <p className="card-text fw-bold">
              Gray Printed T-Shirt for men
            </p>
            <p className="align-items-center">$20.26</p>
          </div>
        </div>

        <div className="card col-md-2 mx-3" id="PruductID" style={{ width: "18rem" }}>
          <img src={TshirtD} id="img" className="card-img-top" alt="..." />
          <div className="card-body">
          <h5 className="card-title">T-Shirt</h5>
            <p className="card-text fw-bold">
              Black Printed T-Shirt for men
            </p>
            <p className="align-items-center">$25.10</p>
          </div>
        </div>

        <div className="card col-md-2 mx-3" id="PruductID" style={{ width: "18rem" }}>
          <img src={TshirtE} id="img" className="card-img-top" alt="..." />
          <div className="card-body">
          <h5 className="card-title">T-Shirt</h5>
            <p className="card-text fw-bold">
              Yellow T-Shirt for men
            </p>
            <p className="align-items-center">$10</p>
          </div>
        </div>

        <div className="card col-md-2 mx-3" id="PruductID" style={{ width: "18rem" }}>
          <img src={TshirtF} id="img" className="card-img-top" alt="..." />
          <div className="card-body">
          <h5 className="card-title">T-Shirt</h5>
            <p className="card-text fw-bold">
              Cream T-Shirt for men
            </p>
            <p className="align-items-center">$28.56</p>
          </div>
        </div>

        </div>
      </div>
    </>
  );
};

export default Products;
