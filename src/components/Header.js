import { Link } from "react-router-dom";
// import Login from "../pages/Login";
import React, { useState } from "react";
import Register from "../pages/Register";
import Logout from "../pages/Logout";


function Header() {
  
  return (
    <React.Fragment>
      <div
        className="modal fade"
        id="exampleModalToggle"
        aria-hidden="true"
        aria-labelledby="exampleModalToggleLabel"
        tabIndex="-1"
      >
        <div className="modal-dialog  modal-dialog-centered">
          <div className="modal-content cart-modal">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalToggleLabel"></h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <table className="table fs-5 table-dark">
                <tbody>
                  <tr>
                    <th scope="row">1</th>
                    <td colSpan="2">LOGIN</td>
                    <td>name</td>
                  </tr>
                  <tr>
                    <th scope="row">2</th>
                    <td colSpan="2">DELIVERY ADDRESS</td>
                    <td>address detail</td>
                  </tr>
                  <tr>
                    <th scope="row">3</th>
                    <td colSpan="2">REVIEW ORDER</td>
                    <td>Product deatil</td>
                  </tr>
                </tbody>
              </table>

              <table className="table ">
                <thead className="table-info mt-5">
                  <tr>
                    <th scope="col">item Details</th>
                    <th scope="col">Quantity</th>
                    <th scope="col">Delivery Option</th>
                    <th scope="col">Subtotal</th>
                  </tr>
                </thead>
                <tbody className="mt-5">
                  <tr>
                    <th>watch</th>
                    <td className="text-start">1</td>
                    <td>date</td>
                    <td>234</td>
                  </tr>
                  <tr>
                    <td>
                      <button>remove</button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="modal-footer">
              <button
                className="btn btn-primary"
                data-bs-target="#exampleModalToggle2"
                data-bs-toggle="modal"
                data-bs-dismiss="modal"
              >
                Remove
              </button>
            </div>
          </div>
        </div>
      </div>
      <div
        className="modal fade"
        id="exampleModalToggle2"
        aria-hidden="true"
        aria-labelledby="exampleModalToggleLabel2"
        tabIndex="-1"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalToggleLabel2">
                Shopping cart item
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <table className="table ">
                <thead className="table-info mt-5">
                  <tr>
                    <th scope="col">item Details</th>
                    <th scope="col">price</th>
                    <th scope="col">Delivery Option</th>
                    <th scope="col">Subtotal</th>
                  </tr>
                </thead>
                <tbody className="mt-5">
                  <tr>
                    <th>watch</th>
                    <td className="text-start">1</td>
                    <td>date</td>
                    <td>234</td>
                  </tr>
                  <tr>
                    <td>
                      <button>remove</button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="modal-footer">
              <button
                className="btn btn-danger"
                data-bs-target="#exampleModalToggle"
                data-bs-toggle="modal"
                data-bs-dismiss="modal"
              >
                PROCEED TO PAY
              </button>
            </div>
          </div>
        </div>
      </div>
      <header>
        {/* Header top starts */}
        <div className="a_header_top p-1">
          <div className="container p-0">
            <span className="first text-white fs-9">
              Brand Waali Quality, Bazaar Waali Deal!
            </span>
            <ul className="nav float-end ">
              <li className="nav-item pb-1">
                <a
                  className="nav-link active text-white p-1 ps-3"
                  aria-current="page"
                  href="#"
                >
                  Impact@Snapdeal
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white p-1 ps-3" href="#">
                  GiftCards
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white p-1 ps-3" href="#">
                  HelpCenter
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white p-1 ps-3" href="#">
                  Sell On Snapdeal
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white  p-1 ps-3" href="#">
                  <img
                    className="pb-1"
                    src="https://i4.sdlcdn.com/img/platinum09/downloadappicon2ndsep.png"
                    height="20px"
                    alt="..."
                  />
                  Download App
                </a>
              </li>
            </ul>
          </div>
        </div>
        {/* Header top ends */}

        {/* Header bottom starts */}
        <div className="a_header_bottom w-100 ">
          <div className="container ps-0">
            <div className="row parent">
              {/* snapdeal logo starts */}
              <div className=" btn col-3 m-0 ps-0 ms-0">
                <div>
                  <img
                    className=" mb-3 ms-0"
                    src="https://www.snapdeal.com/img/icons/finalFavicon.ico"
                    height="40px"
                  />
                  <span className="snapdeal  text-white">snapdeal</span>
                </div>
              </div>
              {/* snapdeal logo ends */}

              {/* search-input starts */}
              <div className="col-7 ">
                <form className="mt-3 a_hform ">
                  <div className="row ">
                    <div className="col-md-10">
                      <input
                        className="form-control"
                        placeholder="    Search products &amp; brands"
                      ></input>
                      <div className="bg-white inputBox position-absolute">
                        <h5 className=" p-1 mt-1 ms-2">
                          <img
                            src="https://cdn1.vectorstock.com/i/1000x1000/57/30/single-analytic-icon-increasing-graph-vector-29565730.jpg"
                            height="20px"
                            width="20px"
                          />{" "}
                          Trending Searches
                        </h5>
                        <ul className="list-unstyled ">
                          <li className="nav-item">
                            <a className="nav-link" href="#">
                              Electronic Devices
                            </a>
                          </li>
                          <li className="nav-item">
                            <a className="nav-link" href="#">
                              Men's Fashion
                            </a>
                          </li>
                          <li className="nav-item">
                            <a className="nav-link" href="#">
                              Women's Fashion
                            </a>
                          </li>
                          <li className="nav-item">
                            <a className="nav-link " href="#">
                              Ornaments
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>

                    <div className="col-md-2">
                      <button type="submit" className="search-btn text-white">
                        search
                      </button>
                    </div>
                  </div>
                </form>
              </div>
              {/* search-input starts */}

              {/* cart and sign-in starts */}
              <div className="col-3 right-bar">
                 
                <ul className="nav a_hbot_nav ">
                  {/* cart starts */}
                  <Link to="/cart">
                    <li className="nav-item text-white fs-6">
                      <Link to="/cart"> Cart</Link>
                    </li>
                  </Link>
                  {/* cart ends */}

                  {/* sign-in starts */}
                    
               

                    <li className="nav-item">
                      <div className="a_b1 " >
                        {" "}
                        <img
                          src="https://static.vecteezy.com/system/resources/thumbnails/002/318/271/small/user-profile-icon-free-vector.jpg"
                          height="25px"
                          width="25px"
                        />{" "}
                        Sign in
                      </div>
                      {/* sign-in dropdown starts*/}
                      <ul className="sign-in-list border-bottom">
                        <li className="nav-item signin_bottom">
                          <div className="new_user mt-5">
                            <h5>
                              If you are new
                              <div className="text-center me-4">user</div>
                            </h5>
                          </div>
                        </li>
                        
                        <Link to="/register" className="btn btn-success me-4 mt-3">SignUp</Link>
                        
                        {/* <div className="btn btn-danger me-4 mt-3">Login</div> */}
                        {/* <li className="btn btn-success mt-5 ps-4 pe-4"> logout</li> */}
                      </ul>
                      
                      {/* sign-in dropdown ends */}
                    </li>
                    
                    
                  {/* sign-in ends */}
                </ul>
              </div>
              {/* cart and sign-in ends */}
            </div>
            {/* row of header b0ttom ends*/}
          </div>
        </div>
        {/* header bottom ends */}
      </header>
    </React.Fragment>
  );
}

export default Header;