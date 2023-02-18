//import React, { Component } from 'react'
import React from 'react'
import PropTypes from 'prop-types'
import Layout from '../components/Layout'
import Footer from '../components/Footer'
import Header from '../components/Header'
import dress from '../assets/images/dress.jpg'
import watch from '../assets/images/watch.jpg'
import wallet from '../assets/images/wallet.jpg'
import socks from '../assets/images/socks.jpg'
import chopper from '../assets/images/chopper.jpg'
import chappal from '../assets/images/chappal.jpg'
import lighter from '../assets/images/lighter.jpg'
import tshirt from '../assets/images/tshirt.jpg'
import saree from '../assets/images/saree.jpg'
import mala from '../assets/images/mala.jpg'
import shoe from '../assets/images/shoe.jpg'
import code from '../assets/images/code.jpg'
import rightbarimage from '../assets/images/rightbarimage.jpg'
import { Link } from 'react-router-dom'
import CartHome from '../pages/CartHome'
import Menhome from '../pages/Menhome'
import Womenhome from '../pages/Womenhome'
import Ornamenthome from '../pages/Ornamenthome'





function Home() {
  return (
    <Layout>
    <div className="a_main pb-5">
        <div className='container p-0 a_main1 mt-3'>

            <div className='row m-0 a_main1_b1'>
                <div className='col-2 bg-white main_b1_left pe-0 pt-3 pb-3 position-relative'>
                    <h6 className='fs-5 mt-3'>TOP CATEGORIES</h6>
                    <ul className=" nav flex-column asidenav fs-5">
                        <li className="nav-item  mt-3">
                            <Link to="/CartHome" >Electronic Devices</Link>
                            <div className='position-absolute top-0 asidenav_rightbox'>A</div>
                        </li>
                        <li className="nav-item">
                            <Link to="/Menhome">Mens's Fashions</Link>
                            <div className='position-absolute top-0 asidenav_rightbox'>B</div>
                        </li>
                        <li className="nav-item">
                            <Link to="/Womenhome">Women's Fashion</Link>
                            <div className='position-absolute top-0 asidenav_rightbox'>C</div>
                        </li>
                        <li className="nav-item">
                            <Link to="/Ornamenthome">Ornaments</Link>
                            <div className='position-absolute top-0 asidenav_rightbox'>D</div>
                        </li>
                       
                    </ul>
                    <h6 className='mt-4 fs-4 mt-10'>Recent Searches</h6>
                    <ul className=" nav flex-column asidenav asidenav fs-5">
                        <li className="nav-item">
                            <div className="mt-6">Men'sFashions</div>
                            
                        </li>
                        <li className="nav-item">
                        <div className="mt-6">Women'sFashions</div>
                        </li>
                        <li className="nav-item">
                            <div className="mt-6">Electronic Devices</div>
                        </li>
                        <li className="nav-item">
                            <div className="mt-6">Ornaments</div>
                        </li>
                        
                    </ul>
                    <div className='mt-5 qrcode'>
                    <img src={code} style={{width:"190px" ,height:"190px"}}/>
                    <div className='mt-3'>Enjoy Convenient Order Tracking</div>
                    </div>
                </div>

                <div className='col-10'>

                    <div className='a_slider row'>
                        <div className='col-9'>
                            <div id="carouselExampleIndicators" className="carousel slide h-100" data-bs-ride="carousel">
                                <div className="carousel-indicators m-1 justify-content-center">
                                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active m-0" aria-current="true" aria-label="Slide 1">Tees and Polos</button>
                                    <button className="m-0" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2">Boy's Tees</button>
                                    <button className="m-0" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3">Water Bottles</button>
                                    <button className="m-0" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4">Polo T-Shirts</button>
                                </div>
                                <div className="carousel-inner">
                                    <div className="carousel-item active">
                                        <img src="https://n2.sdlcdn.com/imgs/j/s/y/TShirtsWeb-5d598.jpg" className="d-block w-100" height="270px" alt="..." />
                                    </div>
                                    <div className="carousel-item ">
                                        <img src="https://n2.sdlcdn.com/imgs/j/s/y/BoyTeesWeb-ac5f2.jpg" className="d-block w-100" height="270px" alt="..." />
                                    </div>
                                    <div className="carousel-item">
                                        <img src="https://n2.sdlcdn.com/imgs/j/s/y/WBSBWeb-693f9.jpg" className="d-block w-100" height="270px" alt="..." />
                                    </div>
                                    <div className="carousel-item">
                                        <img src="https://n2.sdlcdn.com/imgs/j/s/y/PoloTShirtsWeb-c1078.jpg" className="d-block w-100" height="270px" alt="..." />
                                    </div>
                                </div>
                                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span className="visually-hidden">Previous</span>
                                </button>
                                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span className="visually-hidden">Next</span>
                                </button>
                            </div>
                        </div>
                        <div className='col-3 position-relative'>

                            <div className="a_sliderrbox position-absolute top-0 start-0 login">
                                <div className='text-center'>
                                    <div className="a_pinging">
                                        <img src={rightbarimage} style={{width:"256px" ,height:"339px"}} />
                                    </div>
                                  
                                </div>
                               
                            </div>

                        </div>

                    </div>

                  
                    <div className=' ms-4 a_trending_products '>
                        <h3>Trending Products</h3>
                        <div id="carouselExampleControls" className="carousel slide carousel_trending" data-bs-ride="carousel">
                            <div className="carousel-inner text-start ">

                                <div className="carousel-item active p-2">
                                    <div className='each-product row m-0 h-100'>
                                        <div className='col tbdr p-0 '>
                                            <div className="btn btn-white rounded-0 w-100 h-100">
                                            <img src={watch} style={{width:"100%"}}/>
                                            <h6 className='mt-1'>Blue-sharp Watch-Rs.896</h6>
                                            </div>
                                        </div>
                                        
                                        <div className='col tbdr p-0'>
                                            <div className="btn btn-white rounded-0 w-100 h-100">
                                            <img src={mala} style={{width:"100%"}}/>
                                            <div className='mt-1'>Rudraksha-Gold-plated-Rs.456</div>
                                            </div>

                                        </div>
                                       
                                        <div className='col tbdr p-0'>
                                            <div className="btn btn-white rounded-0 w-100 h-100">
                                            <img src={dress} style={{width:"100%" ,height:"72%"}}/>
                                            <div className='mt-1'>Pink-maxi-Rs.916</div>
                                            </div>
                                        </div>
                                        <div className='col tbdr p-0'>
                                            <div className="btn btn-white rounded-0 w-100 h-100">
                                            <img src={wallet} style={{width:"100%"}}/>
                                            <div className='mt-1'>Leather Zip Wallet-Rs.1263</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="carousel-item p-2">
                                    <div className='row m-0 h-100'>
                                        <div className='col tbdr p-0'>
                                            <div className="btn btn-white rounded-0 w-100 h-100">
                                            <img src={chopper} style={{width:"100%"}}/>
                                            <div className='mt-1'>Vegetable Cutter-Rs.394</div>
                                            </div>
                                        </div>
                                        <div className='col tbdr p-0'>
                                            <div className="btn btn-white rounded-0 w-100 h-100">
                                            <img src={shoe} style={{width:"100%", height:"75%"}}/>
                                            <div className='mt-1'>Casual-men Shoe-Rs.962</div>
                                            </div>
                                        </div>
                                        <div className='col tbdr p-0'>
                                            <div className="btn btn-white rounded-0 w-100 h-100">
                                            <img src={tshirt} style={{width:"100%"}}/>
                                            <div className='mt-1'>Veirdo-T-Shirt-Rs.766</div>
                                            </div>
                                        </div>
                                        <div className='col tbdr p-0'>
                                           <div className="btn btn-white rounded-0 w-100 h-100">
                                           <img src={saree} style={{width:"100%", height:"75%"}}/>
                                           <div className='mt-1'>Red Georgette-Rs.1896</div>
                                           </div>
                                        </div>
                                    </div>
                                </div>

                                

                                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Previous</span>
                            </button>
                            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Next</span>
                            </button>

                            </div>
                           
                        </div>
                    </div>
                  
                </div>
                
            </div>

        </div>
        
        <div className='container-fluid bg-white mt-6 a_main2 '>
            <div className='row m-0 h-100 bg-white'>
                <div className='col-6 p-0 tbdr dld_banner'></div>
                <div className='pt-5 ps-5 col-3 tbdr'>
                    <h1>Download Snapdeal App Now</h1>
                    <div className='pt-3'>Fast, Simple & Delightful.</div>
                    <div>All it takes is 30 seconds to Download.</div>
                     <a href="https://play.google.com/store/apps/details?id=com.snapdeal.main&hl=en_IN&gl=US" className='btn google' style={{ width: '122px', height: '42px' }}></a> 
                </div>
                <div className='col-3 p-0 dld_banner_right'>
                </div>
            </div>
        </div>

    </div>
</Layout>
  )
}

export default Home