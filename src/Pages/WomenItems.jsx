import React from 'react';
import WTShirt1 from '../Images/Women TShirts/WTshirt-1.webp'
import WTShirt2 from '../Images/Women TShirts/WTshirt-2.webp'
import WTShirt3 from '../Images/Women TShirts/WTshirt-3.webp'
import WTShirt4 from '../Images/Women TShirts/WTshirt-4.webp'
import WTShirt5 from '../Images/Women TShirts/WTshirt-5.webp'
import WTShirt6 from '../Images/Women TShirts/WTshirt-6.webp'
import WTShirt7 from '../Images/Women TShirts/WTshirt-7.webp'
import WTShirt8 from '../Images/Women TShirts/WTshirt-8.webp'
import WTShirt9 from '../Images/Women TShirts/WTshirt-9.webp'
import WTShirt10 from '../Images/Women TShirts/WTshirt-10.webp'
import WTShirt11 from '../Images/Women TShirts/WTshirt-11.webp'
import WTShirt12 from '../Images/Women TShirts/WTshirt-12.webp'
import WTShirt13 from '../Images/Women TShirts/WTshirt-13.webp'
import WTShirt14 from '../Images/Women TShirts/WTshirt-14.webp'
import WTShirt15 from '../Images/Women TShirts/WTshirt-15.webp'
import { Link } from 'react-router-dom';

const WomenItems = () => {
  return (
    <>

        {/* FILTER SIDEBAR TOGGLE MENU START'S HERE  */}

        <div className="container">
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



          <div className="row ">

        <div className="col"  id="MenItems">
            <div className="card" style={{width:"18rem"}}>
              <img src={WTShirt1} id="img" className="card-img-top" alt="..." />
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
              <img src={WTShirt2} id="img" className="card-img-top" alt="..." />
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
              <img src={WTShirt3} id="img" className="card-img-top" alt="..." />
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
              <img src={WTShirt4} id="img" className="card-img-top" alt="..." />
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
              <img src={WTShirt5} id="img" className="card-img-top" alt="..." />
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
              <img src={WTShirt6} id="img" className="card-img-top" alt="..." />
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
              <img src={WTShirt7} id="img" className="card-img-top" alt="..." />
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
              <img src={WTShirt8} id="img" className="card-img-top" alt="..." />
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
              <img src={WTShirt9} id="img" className="card-img-top" alt="..." />
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
              <img src={WTShirt10} id="img" className="card-img-top" alt="..." />
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
              <img src={WTShirt11} id="img" className="card-img-top" alt="..." />
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
              <img src={WTShirt12} id="img" className="card-img-top" alt="..." />
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
              <img src={WTShirt13} id="img" className="card-img-top" alt="..." />
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
              <img src={WTShirt14} id="img" className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Plain Green T-Shirt</h5>
                <p className="card-text">
                 $15.3
                </p>
                <a href="#" className="btn btn-success float-end">
                <i className="fa-solid fa-cart-shopping text-light"></i>
                </a>
              </div>
            </div>
       </div>  

       <div className="col"  id="MenItems">
             <div className="card" style={{width:"18rem"}}>
              <img src={WTShirt15} id="img" className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Plain Green T-Shirt</h5>
                <p className="card-text">
                 $15.3
                </p>
                <a href="#" className="btn btn-success float-end">
                <i className="fa-solid fa-cart-shopping text-light"></i>
                </a>
              </div>
            </div>
       </div>

</div>
 


    </>
  );
}

export default WomenItems;
