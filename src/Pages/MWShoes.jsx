import React from 'react';
import Shoes1 from '../Images/Shoes/Shoes-1.webp'
import Shoes2 from '../Images/Shoes/Shoes-2.webp'
import Shoes3 from '../Images/Shoes/Shoes-3.webp'
import Shoes4 from '../Images/Shoes/Shoes-4.webp'
import Shoes5 from '../Images/Shoes/Shoes-5.webp'
import Shoes6 from '../Images/Shoes/Shoes-6.webp'
import Shoes7 from '../Images/Shoes/Shoes-7.webp'
import Shoes8 from '../Images/Shoes/Shoes-8.webp'
import Shoes9 from '../Images/Shoes/Shoes-9.webp'
import Shoes10 from '../Images/Shoes/Shoes-10.webp'
import Shoes11 from '../Images/Shoes/Shoes-11.webp'
import Shoes12 from '../Images/Shoes/Shoes-12.webp'
import Shoes13 from '../Images/Shoes/Shoes-13.webp'
import Shoes14 from '../Images/Shoes/Shoes-14.webp'
import Shoes15 from '../Images/Shoes/Shoes-15.webp'
import { Link } from 'react-router-dom';

const MWShoes = () => {
  return (
    <div>
      
      
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

{/* IMAGE CARDS START'S HERE */}

          <div className="row ">

        <div className="col"  id="MenItems">
            <div className="card" style={{width:"18rem"}}>
              <img src={Shoes1} id="img" className="card-img-top" alt="..." />
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
              <img src={Shoes2} id="img" className="card-img-top" alt="..." />
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
              <img src={Shoes3} id="img" className="card-img-top" alt="..." />
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
              <img src={Shoes4} id="img" className="card-img-top" alt="..." />
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
              <img src={Shoes5} id="img" className="card-img-top" alt="..." />
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
              <img src={Shoes6} id="img" className="card-img-top" alt="..." />
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
              <img src={Shoes7} id="img" className="card-img-top" alt="..." />
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
              <img src={Shoes8} id="img" className="card-img-top" alt="..." />
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
              <img src={Shoes9} id="img" className="card-img-top" alt="..." />
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
              <img src={Shoes10} id="img" className="card-img-top" alt="..." />
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
              <img src={Shoes11} id="img" className="card-img-top" alt="..." />
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
              <img src={Shoes12} id="img" className="card-img-top" alt="..." />
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
              <img src={Shoes13} id="img" className="card-img-top" alt="..." />
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
              <img src={Shoes14} id="img" className="card-img-top" alt="..." />
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
              <img src={Shoes15} id="img" className="card-img-top" alt="..." />
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
 


      
    </div>
  );
}

export default MWShoes;
