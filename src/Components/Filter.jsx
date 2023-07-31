import React from 'react';
import { Link } from 'react-router-dom';

const Filter = () => {
  return (
    <>

        
        {/* FILTER SIDEBAR TOGGLE MENU START'S HERE  */}

        <div className="container d-flex">
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
              <li><Link to="/MItems"> Men's Tshirts </Link></li>
                <li><Link to="/WItems">Women's Tshirts</Link></li>
                <li><Link to="/MWItems">SHOES</Link></li>
                <li><Link to="/menshirts"> Men's Shirts</Link></li>
                <li><Link to="/womenshirts">Women's Shirt's </Link></li>
                <li><Link to="/menjeans"> Men's Jeans's</Link></li>
                <li><Link to="/womenjeans"> Women's Jeans</Link></li>
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

        <div className="container dropdown d-flex">
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


    </>
  );
}

export default Filter;
