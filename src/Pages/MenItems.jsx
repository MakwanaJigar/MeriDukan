import React from "react";
import MTshirt from "../Images/Men TShirts/M-TShirt.webp";
import MTshirt1 from "../Images/Men TShirts/M-TShirt-1.webp";
import MTshirt2 from "../Images/Men TShirts/M-TShirt-2.webp";
import MTshirt3 from "../Images/Men TShirts/M-TShirt-3.webp";
import MTshirt4 from "../Images/Men TShirts/M-TShirt-4.webp";
import MTshirt5 from "../Images/Men TShirts/M-TShirt-5.webp";
import MTshirt6 from "../Images/Men TShirts/M-TShirt-6.webp";
import MTshirt7 from "../Images/Men TShirts/M-TShirt-7.webp";
import MTshirt8 from "../Images/Men TShirts/M-TShirt-8.webp";
import MTshirt9 from "../Images/Men TShirts/M-TShirt-9.webp";
import { Link } from "react-router-dom";

const MenItems = () => {
  return (
    <>

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


      {/* <div className="container"> */}

      <div className="row ">

        <div className="col-sm-2"  id="MenItems">
            <div className="card" style={{width:"18rem"}}>
              <img src={MTshirt} id="img" className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Plain White T-Shirt</h5>
                <p className="card-text">
                    $14.20
                </p>
                <a href="#" className="btn btn-success float-end">
                <i className="fa-solid fa-cart-shopping text-lidht"></i>
                </a>
              </div>
            </div>
        </div>

    
       <div className="col"  id="MenItems">
            <div className="card" style={{width:"18rem"}}>
              <img src={MTshirt1} id="img" className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Black T-Shirt</h5>
                <p className="card-text">
                    $13.56
                </p>
                <a href="#" className="btn btn-success float-end">
                <i className="fa-solid fa-cart-shopping text-lidht"></i>
                </a>
              </div>
           </div>
       </div>

       <div className="col"  id="MenItems">
             <div className="card" style={{width:"18rem"}}>
              <img src={MTshirt2} id="img" className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Plain Green T-Shirt</h5>
                <p className="card-text">
                 $15.3
                </p>
                <a href="#" className="btn btn-success float-end">
                <i className="fa-solid fa-cart-shopping text-lidht"></i>
                </a>
              </div>
            </div>
       </div>

       <div className="col"  id="MenItems">
             <div className="card" style={{width:"18rem"}}>
              <img src={MTshirt3} id="img" className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Plain Green T-Shirt</h5>
                <p className="card-text">
                 $15.3
                </p>
                <a href="#" className="btn btn-success float-end">
                <i className="fa-solid fa-cart-shopping text-lidht"></i>
                </a>
              </div>
            </div>
       </div>  

       <div className="col"  id="MenItems">
             <div className="card" style={{width:"18rem"}}>
              <img src={MTshirt4} id="img" className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Plain Green T-Shirt</h5>
                <p className="card-text">
                 $15.3
                </p>
                <a href="#" className="btn btn-success float-end">
                <i className="fa-solid fa-cart-shopping text-lidht"></i>
                </a>
              </div>
            </div>
       </div>

        <div className="col"  id="MenItems">
             <div className="card" style={{width:"18rem"}}>
              <img src={MTshirt5} id="img" className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Plain Green T-Shirt</h5>
                <p className="card-text">
                 $15.3
                </p>
                <a href="#" className="btn btn-success float-end">
                <i className="fa-solid fa-cart-shopping text-lidht"></i>
                </a>
              </div>
            </div>
       </div>

        <div className="col"  id="MenItems">
             <div className="card" style={{width:"18rem"}}>
              <img src={MTshirt6} id="img" className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Plain Green T-Shirt</h5>
                <p className="card-text">
                 $15.3
                </p>
                <a href="#" className="btn btn-success float-end">
                <i className="fa-solid fa-cart-shopping text-lidht"></i>
                </a>
              </div>
            </div>
       </div>

        <div className="col"  id="MenItems">
             <div className="card" style={{width:"18rem"}}>
              <img src={MTshirt7} id="img" className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Plain Green T-Shirt</h5>
                <p className="card-text">
                 $15.3
                </p>
                <a href="#" className="btn btn-success float-end">
                <i className="fa-solid fa-cart-shopping text-lidht"></i>
                </a>
              </div>
            </div>
       </div> 

       <div className="col"  id="MenItems">
             <div className="card" style={{width:"18rem"}}>
              <img src={MTshirt8} id="img" className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Plain Green T-Shirt</h5>
                <p className="card-text">
                 $15.3
                </p>
                <a href="#" className="btn btn-success float-end">
                <i className="fa-solid fa-cart-shopping text-lidht"></i>
                </a>
              </div>
            </div>
       </div>

       <div className="col"  id="MenItems">
             <div className="card" style={{width:"18rem"}}>
              <img src={MTshirt9} id="img" className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Plain Green T-Shirt</h5>
                <p className="card-text">
                 $15.3
                </p>
                <a href="#" className="btn btn-success float-end">
                <i className="fa-solid fa-cart-shopping text-lidht"></i>
                </a>
              </div>
            </div>
       </div>


       <div className="col"  id="MenItems">
            <div className="card" style={{width:"18rem"}}>
              <img src={MTshirt} id="img" className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Plain White T-Shirt</h5>
                <p className="card-text">
                    $14.20
                </p>
                <a href="#" className="btn btn-success float-end">
                <i className="fa-solid fa-cart-shopping text-lidht"></i>
                </a>
              </div>
            </div>
        </div>

    
       <div className="col"  id="MenItems">
            <div className="card" style={{width:"18rem"}}>
              <img src={MTshirt1} id="img" className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Black T-Shirt</h5>
                <p className="card-text">
                    $13.56
                </p>
                <a href="#" className="btn btn-success float-end">
                <i className="fa-solid fa-cart-shopping text-lidht"></i>
                </a>
              </div>
           </div>
       </div>

       <div className="col"  id="MenItems">
             <div className="card" style={{width:"18rem"}}>
              <img src={MTshirt2} id="img" className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Plain Green T-Shirt</h5>
                <p className="card-text">
                 $15.3
                </p>
                <a href="#" className="btn btn-success float-end">
                <i className="fa-solid fa-cart-shopping text-lidht"></i>
                </a>
              </div>
            </div>
       </div>

       <div className="col"  id="MenItems">
             <div className="card" style={{width:"18rem"}}>
              <img src={MTshirt3} id="img" className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Plain Green T-Shirt</h5>
                <p className="card-text">
                 $15.3
                </p>
                <a href="#" className="btn btn-success float-end">
                <i className="fa-solid fa-cart-shopping text-lidht"></i>
                </a>
              </div>
            </div>
       </div>  

       <div className="col"  id="MenItems">
             <div className="card" style={{width:"18rem"}}>
              <img src={MTshirt4} id="img" className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Plain Green T-Shirt</h5>
                <p className="card-text">
                 $15.3
                </p>
                <a href="#" className="btn btn-success float-end">
                <i className="fa-solid fa-cart-shopping text-lidht"></i>
                </a>
              </div>
            </div>
       </div>

        <div className="col"  id="MenItems">
             <div className="card" style={{width:"18rem"}}>
              <img src={MTshirt5} id="img" className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Plain Green T-Shirt</h5>
                <p className="card-text">
                 $15.3
                </p>
                <a href="#" className="btn btn-success float-end">
                <i className="fa-solid fa-cart-shopping text-lidht"></i>
                </a>
              </div>
            </div>
       </div>

        <div className="col"  id="MenItems">
             <div className="card" style={{width:"18rem"}}>
              <img src={MTshirt6} id="img" className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Plain Green T-Shirt</h5>
                <p className="card-text">
                 $15.3
                </p>
                <a href="#" className="btn btn-success float-end">
                <i className="fa-solid fa-cart-shopping text-lidht"></i>
                </a>
              </div>
            </div>
       </div>

        <div className="col"  id="MenItems">
             <div className="card" style={{width:"18rem"}}>
              <img src={MTshirt7} id="img" className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Plain Green T-Shirt</h5>
                <p className="card-text">
                 $15.3
                </p>
                <a href="#" className="btn btn-success float-end">
                <i className="fa-solid fa-cart-shopping text-lidht"></i>
                </a>
              </div>
            </div>
       </div> 

       <div className="col"  id="MenItems">
             <div className="card" style={{width:"18rem"}}>
              <img src={MTshirt8} id="img" className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Plain Green T-Shirt</h5>
                <p className="card-text">
                 $15.3
                </p>
                <a href="#" className="btn btn-success float-end">
                <i className="fa-solid fa-cart-shopping text-lidht"></i>
                </a>
              </div>
            </div>
       </div>

       <div className="col"  id="MenItems">
             <div className="card" style={{width:"18rem"}}>
              <img src={MTshirt9} id="img" className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Plain Green T-Shirt</h5>
                <p className="card-text">
                 $15.3
                </p>
                <a href="#" className="btn btn-success float-end">
                <i className="fa-solid fa-cart-shopping text-lidht"></i>
                </a>
              </div>
            </div>
       </div>

</div>

  {/* </div> */}
    
    </>
  );
};

export default MenItems;
