import React from 'react';
import { Helmet } from 'react-helmet';
import $ from 'bootstrap';

function Home() {
  return (
    <>
      <div className="home-sticky-pin sidebar-header scrollspy-example position-relative" data-bs-spy="scroll" data-bs-target="#navbar-example2" data-bs-offset="0" tabIndex="0">

        <div className="d-none d-lg-block">
          <div className="header-area left-header-style d-flex">
            <div className="logo-area logo-custom-css">
              <a className="logo-light" href="index.html"><img src="assets/images/logo/logo-white.png" alt="nft-logo" /></a>
              <a className="logo-dark" href="index.html"><img src="assets/images/logo/logo-dark.png" alt="nft-logo" /></a>
            </div>
            <div className="sidebar-nav-wrapper">
              <nav className="mainmenu-nav">
                <ul className="mainmenu list-group">
                  <li className="nav-item"><a className="nav-link" href="index.html"> <i data-feather="home"></i>Home</a></li>
                  <li className="nav-item"><a className="nav-link" href="marketplace.html"> <i data-feather="heart"></i>MarketPlace</a></li>
                  <li className="nav-item"><a className="nav-link" href="checkin.html"> <i data-feather="trending-up"></i>Check-in</a></li>
                  <li className="nav-item"><a className="nav-link" href="#"> <i data-feather="trending-up"></i>Vote Star</a></li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
        <div className="popup-mobile-menu one-page-vavigation-popup">
          <div className="inner">
            <div className="header-top">
              <div className="logo logo-custom-css">
                <a className="logo-light" href="index.html"><img src="assets/images/logo/logo-white.png" alt="nft-logo" /></a>
                <a className="logo-dark" href="index.html"><img src="assets/images/logo/logo-dark.png" alt="nft-logo" /></a>
              </div>
              <div className="close-menu">
                <button className="close-button">
                  <i className="fa fa-times" aria-hidden="true"></i>
                </button>
              </div>
            </div>
            <nav>
              <ul className="mainmenu" id="navbar-example2">
                <li className="nav-item"><a className="nav-link" href="index.html"> <i data-feather="home"></i>Home</a></li>
                <li className="nav-item"><a className="nav-link" href="marketplace.html"> <i data-feather="heart"></i>MarketPlace</a></li>
                <li className="nav-item"><a className="nav-link" href="#"> <i data-feather="trending-up"></i>Check-in</a></li>
                <li className="nav-item"><a className="nav-link" href="#"> <i data-feather="trending-up"></i>Vote Star</a></li>
              </ul>
            </nav>
          </div>
        </div>

        <div className="rn-nft-mid-wrapper">

          <div id="list-item-1">
            {/* <!-- top bar --> */}
            <div className="rn-top-bar-area">
              <div className="d-none d-lg-block">
                <div className="input-group">
                  <input type="text" placeholder="Search Here..." className="form-control bg-color--2" />
                  <div className="input-group-append">
                    <button className="btn btn-primary-alta btn-outline-secondary" type="button">
                      <i data-feather="search"></i>
                    </button>
                  </div>
                </div>
              </div>

              <div className="contact-area">
                <div className="rn-icon-list setting-option d-block d-lg-none">
                  <div className="icon-box search-mobile-icon">
                    <button><i className="fa fa-search" aria-hidden="true"></i></button>
                  </div>
                  <form id="header-search-1" action="#" method="GET" className="large-mobile-blog-search">
                    <div className="rn-search-mobile form-group">
                      <button type="submit" className="search-button"><i className="fa fa-search" aria-hidden="true"></i></button>
                      <input type="text" placeholder="Search ..." />
                    </div>
                  </form>
                </div>

                <div className="setting-option">
                  <div className="icon-box">
                    <a title="Contact With Us" href="contact.html"><i className="fa fa-bell-o" aria-hidden="true"></i></a>
                  </div>
                </div>
                <div className="setting-option">
                  <div className="icon-box">
                    <a title="Message" href="#"><i className="fa fa-comment-o" aria-hidden="true"></i></a>
                  </div>
                </div>
                <div className="setting-option mobile-menu-bar ml--5 d-block d-lg-none">
                  <div className="icon-box">
                    <button className="hamberger-button">
                      <i className="fa fa-bars" aria-hidden="true"></i>
                    </button>
                  </div>
                </div>

                <div className="setting-option rbt-site-header ml--5" id="rbt-site-header">
                  <div className="icon-box">
                    <a id="connectbtn" className="btn btn-primary-alta btn-small" href="connect.html">Wallet connect</a>
                  </div>
                </div>

                <div id="my_switcher" className="my_switcher setting-option">
                  <ul>
                    <li>
                      <a href="javascript: void(0);" data-theme="light" className="setColor light">
                        <img src="assets/images/icons/sun-01.svg" alt="Sun images" />
                      </a>
                    </li>
                    <li>
                      <a href="javascript: void(0);" data-theme="dark" className="setColor dark">
                        <img src="assets/images/icons/vector.svg" alt="Vector Images" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            {/* <!-- top bar End --> */}

            {/* <!-- start banner area --> */}
            <div className="banner-area pt--25">
              <div className="container-fluid">
                <div className="row">
                  <div className="slider-style-2 slick-activation-01 slick-arrow-style-one slick-arrow-between">
                    {/* <!-- Start Single Portfolio  --> */}
                    <div className="single-slide">
                      <div className="inner">
                        <div className="thumbnail">
                          <a href="product-details.html"><img src="assets/images/banner/banner-01.jpg" alt="NFT_portfolio" /></a>
                        </div>
                        <div className="banner-read-thumb">
                          <h4><a href="product-details.html">Cubic Bazier</a></h4>
                          <span>John Lee</span>
                        </div>
                      </div>
                    </div>
                    {/* <!-- Start Single Portfolio  --> */}

                    {/* <!-- Start Single Portfolio  --> */}
                    <div className="single-slide">
                      <div className="inner">
                        <div className="thumbnail">
                          <a href="product-details.html"><img src="assets/images/banner/banner-02.jpg" alt="NFT_portfolio" /></a>
                        </div>
                        <div className="banner-read-thumb">
                          <h4><a href="product-details.html">Faminho24</a></h4>
                          <span>Mr.Alamin</span>
                        </div>
                      </div>
                    </div>
                    {/* <!-- Start Single Portfolio  --> */}

                    {/* <!-- Start Single Portfolio  --> */}
                    <div className="single-slide">
                      <div className="inner">
                        <div className="thumbnail">
                          <a href="product-details.html"><img src="assets/images/banner/banner-03.jpg" alt="NFT_portfolio" /></a>
                        </div>
                        <div className="banner-read-thumb">
                          <h4><a href="product-details.html">Tzniistan</a></h4>
                          <span>Ms.maybin</span>
                        </div>
                      </div>
                    </div>
                    {/* <!-- Start Single Portfolio  --> */}

                    {/* <!-- Start Single Portfolio  --> */}
                    <div className="single-slide">
                      <div className="inner">
                        <div className="thumbnail">
                          <a href="product-details.html"><img src="assets/images/banner/banner-04.jpg" alt="NFT_portfolio" /></a>
                        </div>
                        <div className="banner-read-thumb">
                          <h4><a href="product-details.html">Bazier</a></h4>
                          <span>Ms.Dhoni</span>
                        </div>
                      </div>
                    </div>
                    {/* <!-- Start Single Portfolio  --> */}

                  </div>
                </div>
              </div>
            </div>
            {/* <!-- End banner area --> */}
          </div>
          {/* <!-- new feed--> */}
          <div className="nu-community-area rn-section-gapTop">
            <div className="container">
              <div className="row g-5">
                <div className="col-lg-12">
                  <div className="community-content-wrapper">
                    {/* <!-- start Community single box --> */}
                    <div className="single-community-box">
                      <div className="community-bx-header">
                        <div className="header-left">
                          <div className="thumbnail">
                            <img src="assets/images/client/client-10.png" alt="NFT-thumbnail" />
                          </div>
                          <div className="name-date">
                            <a href="#" className="name">Elijavd May</a>
                            <span className="date">6 Hour Ago</span>
                          </div>
                          <div className="info-buy">
                            <span>đã check-in tại</span>
                          </div>
                          <div className="info-buy-shop">
                            <span>Vegetable Farm</span>
                          </div>
                        </div>

                      </div>
                      <div className="community-content">
                        <h3 className="title">Great farm</h3>
                        <p className="desc">
                          Mọi thứ đều tốt và tươi sạch, mọi thông tin đều khớp trên hệ thống chuỗi khối !
                        </p>
                        <img className="community-img" src="assets/images/blog/community/community-post-01.jpg" alt="Nft_Community-image" />
                      </div>
                    </div>
                    {/* <!-- end Community single box --> */}


                    {/* <!-- start Community single box --> */}
                    <div className="single-community-box">
                      <div className="community-bx-header">
                        <div className="header-left">
                          <div className="thumbnail">
                            <img src="assets/images/client/client-9.png" alt="NFT-thumbnail" />
                          </div>
                          <div className="name-date">
                            <a href="#" className="name">John Phine</a>
                            <span className="date">1 Hour Ago</span>

                          </div>
                          <div className="info-buy">
                            <span>đã mua hàng tại</span>
                          </div>
                          <div className="info-buy-shop">
                            <span>Apple Farm</span>
                          </div>
                        </div>

                        {/* <!-- header-right --> */}
                        <div className="header-right">

                          <div className="stars">
                            <span className="star">&#9733;</span>
                            <span className="star">&#9733;</span>
                            <span className="star">&#9733;</span>
                            <span className="star">&#9733;</span>
                            <span className="star">&#9733;</span>
                          </div>

                        </div>
                        {/* <!-- header-right End --> */}
                      </div>
                      <div className="community-content">
                        <h3 className="title">Hàng tươi ngon bổ rẻ</h3>
                        <p className="desc">
                          Nên mua nhé mọi người, mình sẽ ủng hộ những lần mua tiếp theo !
                        </p>
                        <img className="community-img" src="assets/images/blog/community/community-post-02.jpg" alt="Nft_Community-image" />
                      </div>
                    </div>
                    {/* <!-- end Community single box --> */}

                    {/* <!-- start Community single box --> */}
                    <div className="single-community-box">
                      <div className="community-bx-header">
                        <div className="header-left">
                          <div className="thumbnail">
                            <img src="assets/images/client/client-11.png" alt="NFT-thumbnail" />
                          </div>
                          <div className="name-date">
                            <a href="#" className="name">May</a>
                            <span className="date">6 Hour Ago</span>
                          </div>
                          <div className="info-buy">
                            <span>đã check-in tại</span>
                          </div>
                          <div className="info-buy-shop">
                            <span>Vegetable Farm</span>
                          </div>
                        </div>

                      </div>
                      <div className="community-content">
                        <h3 className="title">Great farm</h3>
                        <p className="desc">
                          Mọi thứ đều tốt và tươi sạch, mọi thông tin đều khớp trên hệ thống chuỗi khối !
                        </p>
                        <img className="community-img" src="assets/images/blog/community/community-post-03.jpg" alt="Nft_Community-image" />
                      </div>
                    </div>
                    {/* <!-- end Community single box --> */}

                    {/* <!-- start Community single box --> */}
                    <div className="single-community-box">
                      <div className="community-bx-header">
                        <div className="header-left">
                          <div className="thumbnail">
                            <img src="assets/images/client/client-7.png" alt="NFT-thumbnail" />
                          </div>
                          <div className="name-date">
                            <a href="#" className="name">Natalya</a>
                            <span className="date">6 Hour Ago</span>
                          </div>
                          <div className="info-buy">
                            <span>đã check-in tại</span>
                          </div>
                          <div className="info-buy-shop">
                            <span>Vegetable Farm</span>
                          </div>
                        </div>

                      </div>
                      <div className="community-content">
                        <h3 className="title">Great farm</h3>
                        <p className="desc">
                          Mọi thứ đều tốt và tươi sạch, mọi thông tin đều khớp trên hệ thống chuỗi khối !
                        </p>
                        <img className="community-img" src="assets/images/blog/community/community-post-04.jpg" alt="Nft_Community-image" />
                      </div>
                    </div>
                    {/* <!-- end Community single box --> */}

                    {/* <!-- start Community single box --> */}
                    <div className="single-community-box">
                      <div className="community-bx-header">
                        <div className="header-left">
                          <div className="thumbnail">
                            <img src="assets/images/client/client-5.png" alt="NFT-thumbnail" />
                          </div>
                          <div className="name-date">
                            <a href="#" className="name">Peter</a>
                            <span className="date">6 Hour Ago</span>
                          </div>
                          <div className="info-buy">
                            <span>đã check-in tại</span>
                          </div>
                          <div className="info-buy-shop">
                            <span>Vegetable Farm</span>
                          </div>
                        </div>

                      </div>
                      <div className="community-content">
                        <h3 className="title">Great farm</h3>
                        <p className="desc">
                          Tuyệt vời !!!!
                        </p>
                        <img className="community-img" src="assets/images/blog/community/community-post-05.jpg" alt="Nft_Community-image" />
                      </div>
                    </div>
                    {/* <!-- end Community single box --> */}

                    {/* <!-- start Community single box --> */}
                    <div className="single-community-box">
                      <div className="community-bx-header">
                        <div className="header-left">
                          <div className="thumbnail">
                            <img src="assets/images/client/client-9.png" alt="NFT-thumbnail" />
                          </div>
                          <div className="name-date">
                            <a href="#" className="name">Wonderwoman</a>
                            <span className="date">9 Hour Ago</span>
                          </div>
                          <div className="info-buy">
                            <span>đã check-in tại</span>
                          </div>
                          <div className="info-buy-shop">
                            <span>Vegetable Farm</span>
                          </div>
                        </div>

                      </div>
                      <div className="community-content">
                        <h3 className="title">Great farm</h3>
                        <p className="desc">
                          Tuyệt vời !!!!
                        </p>
                        <img className="community-img" src="assets/images/blog/community/community-post-06.jpg" alt="Nft_Community-image" />
                      </div>
                    </div>
                    {/* <!-- end Community single box --> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="header-right-fixed">
          {/* <!-- notificatio area --> */}
          <div className="rn-notification-area right-fix-notice">
            <div className="rn-notification-wrapper">
              <div className="authore-profile">
                <div className="thumbnail">
                  <img src="assets/images/client/testimonial-1.jpg" alt="Nft_marketplaces" />
                </div>
                <div className="au-content">
                  <p className="name">Hao</p>
                  <p className="blc">Balance:<span className="value">12ETH</span></p>
                  <p className="blc">Balance:<span className="value">12ETH</span></p>
                  <p className="blc">Balance:<span className="value">12ETH</span></p>
                  <p className="blc">Balance:<span className="value">12ETH</span></p>
                  <p className="blc">Balance:<span className="value">12ETH</span></p>
                  <p className="blc">Balance:<span className="value">12ETH</span></p>
                  <p className="blc">Balance:<span className="value">12ETH</span></p>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- notificatio area End --> */}

          {/* <!-- start creators area --> */}
          <div className="rn-creators-area right-fix-notice creators mt--30">
            <div className="h--100">
              <div className="notice-heading">
                <h4>
                  Top Artist
                </h4>
                <div className="nice-select" tabIndex="0"><span className="current">Today</span>
                  <ul className="list">
                    <li data-value="Potato" data-display="Today" className="option selected">Today</li>
                    <li data-value="1" className="option">7 Day's</li>
                    <li data-value="2" className="option">30 Days</li>
                    <li data-value="4" className="option">6 Month's</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="rn-notification-wrapper creators">
              {/* <!-- single authore --> */}
              <div className="top-seller-inner-one">
                <div className="top-seller-wrapper">
                  <div className="thumbnail varified">
                    <a href="#"><img src="assets/images/client/client-3.png" alt="Nft_Profile" /></a>
                  </div>
                  <div className="top-seller-content">
                    <a href="#">
                      <h6 className="name">Brodband</h6>
                    </a>
                    <span className="count-number">
                      $2500,000
                    </span>
                  </div>
                </div>
                <a href="#" className="btn btn-primary-alta">Follow</a>
              </div>
              {/* <!-- single authore end --> */}
              {/* <!-- single authore --> */}
              <div className="top-seller-inner-one">
                <div className="top-seller-wrapper">
                  <div className="thumbnail varified">
                    <a href="#"><img src="assets/images/client/client-4.png" alt="Nft_Profile" /></a>
                  </div>
                  <div className="top-seller-content">
                    <a href="#">
                      <h6 className="name">Ms. Parkline</h6>
                    </a>
                    <span className="count-number">
                      $2500,000
                    </span>
                  </div>
                </div>
                <a href="#" className="btn btn-primary-alta">Follow</a>
              </div>
              {/* <!-- single authore end --> */}
              {/* <!-- single authore --> */}
              <div className="top-seller-inner-one">
                <div className="top-seller-wrapper">
                  <div className="thumbnail">
                    <a href="#"><img src="assets/images/client/client-5.png" alt="Nft_Profile" /></a>
                  </div>
                  <div className="top-seller-content">
                    <a href="#">
                      <h6 className="name">
                        Methods</h6>
                    </a>
                    <span className="count-number">
                      $3300,000
                    </span>
                  </div>
                </div>
                <a href="#" className="btn btn-primary-alta">Follow</a>
              </div>
              {/* <!-- single authore end --> */}
              {/* <!-- single authore --> */}
              <div className="top-seller-inner-one">
                <div className="top-seller-wrapper">
                  <div className="thumbnail varified">
                    <a href="#"><img src="assets/images/client/client-6.png" alt="Nft_Profile" /></a>
                  </div>
                  <div className="top-seller-content">
                    <a href="#">
                      <h6 className="name">Jone sone</h6>
                    </a>
                    <span className="count-number">
                      $5500,000
                    </span>
                  </div>
                </div>
                <a href="#" className="btn btn-primary-alta">Follow</a>
              </div>
              {/* <!-- single authore end --> */}
              {/* <!-- single authore --> */}
              <div className="top-seller-inner-one">
                <div className="top-seller-wrapper">
                  <div className="thumbnail varified">
                    <a href="#"><img src="assets/images/client/client-7.png" alt="Nft_Profile" /></a>
                  </div>
                  <div className="top-seller-content">
                    <a href="#">
                      <h6 className="name">Jone Lee</h6>
                    </a>
                    <span className="count-number">
                      $1900,000
                    </span>
                  </div>
                </div>
                <a href="#" className="btn btn-primary-alta">Follow</a>
              </div>
              {/* <!-- single authore end --> */}
              {/* <!-- single authore --> */}
              <div className="top-seller-inner-one">
                <div className="top-seller-wrapper">
                  <div className="thumbnail">
                    <a href="#"><img src="assets/images/client/client-8.png" alt="Nft_Profile" /></a>
                  </div>
                  <div className="top-seller-content">
                    <a href="#">
                      <h6 className="name">Brodband</h6>
                    </a>
                    <span className="count-number">
                      $2500,000
                    </span>
                  </div>
                </div>
                <a href="#" className="btn btn-primary-alta">Follow</a>
              </div>
              {/* <!-- single authore end --> */}
              {/* <!-- single authore --> */}
              <div className="top-seller-inner-one">
                <div className="top-seller-wrapper">
                  <div className="thumbnail varified">
                    <a href="#"><img src="assets/images/client/client-9.png" alt="Nft_Profile" /></a>
                  </div>
                  <div className="top-seller-content">
                    <a href="#">
                      <h6 className="name">Ms. Parkline</h6>
                    </a>
                    <span className="count-number">
                      $2500,000
                    </span>
                  </div>
                </div>
                <a href="#" className="btn btn-primary-alta">Follow</a>
              </div>
              {/* <!-- single authore end --> */}
              {/* <!-- single authore --> */}
              <div className="top-seller-inner-one">
                <div className="top-seller-wrapper">
                  <div className="thumbnail">
                    <a href="#"><img src="assets/images/client/client-10.png" alt="Nft_Profile" /></a>
                  </div>
                  <div className="top-seller-content">
                    <a href="#">
                      <h6 className="name">
                        Methods</h6>
                    </a>
                    <span className="count-number">
                      $3300,000
                    </span>
                  </div>
                </div>
                <a href="#" className="btn btn-primary-alta">Follow</a>
              </div>
              {/* <!-- single authore end --> */}
              {/* <!-- single authore --> */}
              <div className="top-seller-inner-one">
                <div className="top-seller-wrapper">
                  <div className="thumbnail varified">
                    <a href="#"><img src="assets/images/client/client-11.png" alt="Nft_Profile" /></a>
                  </div>
                  <div className="top-seller-content">
                    <a href="#">
                      <h6 className="name">Jone sone</h6>
                    </a>
                    <span className="count-number">
                      $5500,000
                    </span>
                  </div>
                </div>
                <a href="#" className="btn btn-primary-alta">Follow</a>
              </div>
              {/* <!-- single authore end --> */}
              {/* <!-- single authore --> */}
              <div className="top-seller-inner-one">
                <div className="top-seller-wrapper">
                  <div className="thumbnail">
                    <a href="#"><img src="assets/images/client/client-1.png" alt="Nft_Profile" /></a>
                  </div>
                  <div className="top-seller-content">
                    <a href="#">
                      <h6 className="name">Jone Lee</h6>
                    </a>
                    <span className="count-number">
                      $1900,000
                    </span>
                  </div>
                </div>
                <a href="#" className="btn btn-primary-alta">Follow</a>
              </div>
              {/* <!-- single authore end --> */}
            </div>
          </div>
          {/* <!-- End creators area --> */}
        </div>

        {/* <!-- Start Footer Area  --> */}
        <div className="rn-footer-area footer-for-left-sticky-header">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="inner">
                  <div className="logo logo-custom-css">
                    <a className="logo-light" href="index.html"><img src="assets/images/logo/logo-white.png" alt="nft-logo" /></a>
                    <a className="logo-dark" href="index.html"><img src="assets/images/logo/logo-dark.png" alt="nft-logo" /></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- End Footer Area  --> */}

        {/* <!-- Modal --> */}
        <div className="rn-popup-modal share-modal-wrapper modal fade" id="shareModal" tabIndex="-1" aria-hidden="true">
          <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"><i data-feather="x"></i></button>
          <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
            <div className="modal-content share-wrapper">
              <div className="modal-header share-area">
                <h5 className="modal-title">Share this NFT</h5>
              </div>
              <div className="modal-body">
                <ul className="social-share-default">
                  <li><a href="#"><span className="icon"><i data-feather="facebook"></i></span><span className="text">facebook</span></a></li>
                  <li><a href="#"><span className="icon"><i data-feather="twitter"></i></span><span className="text">twitter</span></a></li>
                  <li><a href="#"><span className="icon"><i data-feather="linkedin"></i></span><span className="text">linkedin</span></a></li>
                  <li><a href="#"><span className="icon"><i data-feather="instagram"></i></span><span className="text">instagram</span></a></li>
                  <li><a href="#"><span className="icon"><i data-feather="youtube"></i></span><span className="text">youtube</span></a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- Modal --> */}
        <div className="rn-popup-modal report-modal-wrapper modal fade" id="reportModal" tabIndex="-1" aria-hidden="true">
          <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"><i data-feather="x"></i></button>
          <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
            <div className="modal-content report-content-wrapper">
              <div className="modal-header report-modal-header">
                <h5 className="modal-title">Why are you reporting?
                </h5>
              </div>
              <div className="modal-body">
                <p>Describe why you think this item should be removed from marketplace</p>
                <div className="report-form-box">
                  <h6 className="title">Message</h6>
                  <textarea name="message" placeholder="Write issues"></textarea>
                  <div className="report-button">
                    <button type="button" className="btn btn-primary mr--10 w-auto">Report</button>
                    <button type="button" className="btn btn-primary-alta w-auto" data-bs-dismiss="modal">Cancel</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mouse-cursor cursor-outer"></div>
        <div className="mouse-cursor cursor-inner"></div>
        {/* <!-- Start Top To Bottom Area  --> */}
        <div className="rn-progress-parent">

          <svg className="rn-back-circle svg-inner" width="100%" height="100%" viewBox="-1 -1 102 102">
            <path d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98" />
          </svg>
        </div>
      </div>
      <Helmet>
        <script src="/assets/js/vendor/jquery.js"></script>
        <script src="/assets/js/vendor/jquery.nice-select.min.js"></script>
        <script src="/assets/js/vendor/jquery-ui.js"></script>
        <script src="/assets/js/vendor/modernizer.min.js"></script>
        <script src="/assets/js/vendor/feather.min.js"></script>
        <script src="/assets/js/vendor/slick.min.js"></script>
        <script src="/assets/js/vendor/bootstrap.min.js"></script>
        <script src="/assets/js/vendor/bootstrap.js"></script>
        <script src="/assets/js/vendor/sal.min.js"></script>
        <script src="/assets/js/vendor/particles.js"></script>
        <script src="/assets/js/vendor/jquery.style.swicher.js"></script>
        <script src="/assets/js/vendor/js.cookie.js"></script>
        <script src="/assets/js/vendor/count-down.js"></script>
        <script src="/assets/js/vendor/isotop.js"></script>
        <script src="/assets/js/vendor/imageloaded.js"></script>
        <script src="/assets/js/vendor/backtoTop.js"></script>
        <script src="/assets/js/vendor/odometer.js"></script>
        <script src="/assets/js/vendor/jquery-appear.js"></script>
        <script src="/assets/js/vendor/scrolltrigger.js"></script>
        <script src="/assets/js/vendor/jquery.custom-file-input.js"></script>
        <script src="/assets/js/vendor/savePopup.js"></script>
        <script src="/assets/js/vendor/vanilla.tilt.js"></script>

        <script src="/assets/js/main.js"></script>

        <script src="/assets/js/vendor/web3.min.js"></script>
        <script src="/assets/js/vendor/maralis.js"></script>
        <script src="/assets/js/vendor/nft.js"></script>
      </Helmet>
    </>
  )
}

export default Home;