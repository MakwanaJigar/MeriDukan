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
            class="btn btn-light"
            id="LeftTtn"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasWithBothOptions"
            aria-controls="offcanvasWithBothOptions"
          >
            <i className="fa fa-bars"> Filter </i>
          </button>

          <div
            class="offcanvas offcanvas-start"
            data-bs-scroll="true"
            tabindex="-1"
            id="offcanvasWithBothOptions"
            aria-labelledby="offcanvasWithBothOptionsLabel"
          >
            <div class="offcanvas-header">
              <h5
                class="offcanvas-title FilterHeading"
                id="offcanvasWithBothOptionsLabel"
              >
                Product categories
              </h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div class="offcanvas-body" id="SidebarFilter">
              <ul>
                <li>T-SHIRTS for Men</li>
                <li>SHIRTS for Men</li>
                <li>SHOES for Men</li>
                <li>T-SHIRTS for Women</li>
                <li>SHIRTS for Women</li>
                <li>SHOES for Women</li>
              </ul>
              <div className="">
                <h5 className="FilterSidebarHeading">FILTER BY PRICE</h5>
              </div>
              <div className="FilterRange container">
                <input
                  type="range"
                  class="form-range"
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

        <div class="dropdown float-end">
          <button
            class="btn dropdown-toggle"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Dropdown button
          </button>
          <ul class="dropdown-menu dropdown-menu-secondary">
            <li>
              <Link class="dropdown-item active" to="/">
                Default sorting
              </Link>
            </li>
            <li>
              <Link class="dropdown-item" to="/">
                Sort by popularity
              </Link>
            </li>
            <li>
              <Link class="dropdown-item" to="/">
                Sort by average rating
              </Link>
            </li>
            <li>
              <Link class="dropdown-item" to="/">
                Sort by letest
              </Link>
            </li>
            <li>
              <Link class="dropdown-item" to="/">
                Sort by price : Low to High
              </Link>
            </li>
            <li>
              <Link class="dropdown-item" to="/">
                Sort by price : High to Low
              </Link>
            </li>
            <li>
              <hr class="dropdown-divider" />
            </li>
            <li>
              <Link class="dropdown-item" to="/">
                Separated link
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* PRODUCTS CARDS START'S HERE */}

      <div className="container ">
        <div className="row d-flex justify-content-evenly alignItems-center">

        <div class="card col-md-2 mx-3" id="PruductID" style={{ width: "18rem" }}>
          <img src={TshirtA} class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title">T-Shirt</h5>
            <p class="card-text fw-bold">
              Black T-Shirt for men
            </p>
            <p className=" ">$15.23</p>
          </div>
        </div>

        <div class="card col-md-2 mx-3" id="PruductID" style={{ width: "18rem" }}>
          <img src={TshirtB} class="card-img-top" alt="..." />
          <div class="card-body">
          <h5 class="card-title">T-Shirt</h5>
            <p class="card-text fw-bold">
              NavyBlue T-Shirt for men
            </p>
            <p className="align-items-center">$12.43</p>
          </div>
        </div>

        <div class="card col-md-2 mx-3" id="PruductID" style={{ width: "18rem" }}>
          <img src={TshirtC} class="card-img-top" alt="..." />
          <div class="card-body">
          <h5 class="card-title">T-Shirt</h5>
            <p class="card-text fw-bold">
              Gray Printed T-Shirt for men
            </p>
            <p className="align-items-center">$20.26</p>
          </div>
        </div>

        <div class="card col-md-2 mx-3" id="PruductID" style={{ width: "18rem" }}>
          <img src={TshirtD} class="card-img-top" alt="..." />
          <div class="card-body">
          <h5 class="card-title">T-Shirt</h5>
            <p class="card-text fw-bold">
              Black Printed T-Shirt for men
            </p>
            <p className="align-items-center">$25.10</p>
          </div>
        </div>

        <div class="card col-md-2 mx-3" id="PruductID" style={{ width: "18rem" }}>
          <img src={TshirtE} class="card-img-top" alt="..." />
          <div class="card-body">
          <h5 class="card-title">T-Shirt</h5>
            <p class="card-text fw-bold">
              Yellow T-Shirt for men
            </p>
            <p className="align-items-center">$10</p>
          </div>
        </div>

        <div class="card col-md-2 mx-3" id="PruductID" style={{ width: "18rem" }}>
          <img src={TshirtF} class="card-img-top" alt="..." />
          <div class="card-body">
          <h5 class="card-title">T-Shirt</h5>
            <p class="card-text fw-bold">
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
