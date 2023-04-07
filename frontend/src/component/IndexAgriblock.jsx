import React from 'react';
const IndexAgriblock = () => {
    return (
        <>

            <body class="home-sticky-pin sidebar-header scrollspy-example position-relative" data-bs-spy="scroll" data-bs-target="#navbar-example2" data-bs-offset="0" tabindex="0">

                <div class="d-none d-lg-block">
                    <div class="header-area left-header-style d-flex">
                        <div class="logo-area logo-custom-css">
                            <a class="logo-light" href="index.html"><img src="./src/assets/images/logo/logo-white.png" alt="nft-logo" /></a>
                            <a class="logo-dark" href="index.html"><img src="./src/assets/images/logo/logo-dark.png" alt="nft-logo" /></a>
                        </div>
                        <div class="sidebar-nav-wrapper">
                            <nav class="mainmenu-nav">
                                <ul class="mainmenu list-group">
                                    <li class="nav-item"><a class="nav-link" href="index.html"> <i data-feather="home"></i>Home</a></li>
                                    <li class="nav-item"><a class="nav-link" href="marketplace.html"> <i data-feather="heart"></i>MarketPlace</a></li>
                                    <li class="nav-item"><a class="nav-link" href="checkin.html"> <i data-feather="trending-up"></i>Check-in</a></li>
                                    <li class="nav-item"><a class="nav-link" href="#"> <i data-feather="trending-up"></i>Vote Star</a></li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
                <div class="popup-mobile-menu one-page-vavigation-popup">
                    <div class="inner">
                        <div class="header-top">
                            <div class="logo logo-custom-css">
                                <a class="logo-light" href="index.html"><img src="/./src/assets/images/logo/logo-white.png" alt="nft-logo" /></a>
                                <a class="logo-dark" href="index.html"><img src="./src/assets/images/logo/logo-dark.png" alt="nft-logo" /></a>
                            </div>
                            <div class="close-menu">
                                <button class="close-button">
                                    <i class="fa fa-times" aria-hidden="true"></i>
                                </button>
                            </div>
                        </div>
                        <nav>
                            <ul class="mainmenu" id="navbar-example2">
                                <li class="nav-item"><a class="nav-link" href="index.html"> <i data-feather="home"></i>Home</a></li>
                                <li class="nav-item"><a class="nav-link" href="marketplace.html"> <i data-feather="heart"></i>MarketPlace</a></li>
                                <li class="nav-item"><a class="nav-link" href="#"> <i data-feather="trending-up"></i>Check-in</a></li>
                                <li class="nav-item"><a class="nav-link" href="#"> <i data-feather="trending-up"></i>Vote Star</a></li>
                            </ul>
                        </nav>
                    </div>
                </div>

                <div class="rn-nft-mid-wrapper">

                    <div id="list-item-1">
                        {/* <!-- top bar --> */}
                        <div class="rn-top-bar-area">
                            <div class="d-none d-lg-block">
                                <div class="input-group">
                                    <input type="text" placeholder="Search Here..." class="form-control bg-color--2" />
                                    <div class="input-group-append">
                                        <button class="btn btn-primary-alta btn-outline-secondary" type="button">
                                            <i data-feather="search"></i>
                                        </button>
                                    </div>
                                </div>
                            </div>

                            <div class="contact-area">
                                <div class="rn-icon-list setting-option d-block d-lg-none">
                                    <div class="icon-box search-mobile-icon">
                                        <button><i class="fa fa-search" aria-hidden="true"></i></button>
                                    </div>
                                    <form id="header-search-1" action="#" method="GET" class="large-mobile-blog-search">
                                        <div class="rn-search-mobile form-group">
                                            <button type="submit" class="search-button"><i class="fa fa-search" aria-hidden="true"></i></button>
                                            <input type="text" placeholder="Search ..." />
                                        </div>
                                    </form>
                                </div>

                                <div class="setting-option">
                                    <div class="icon-box">
                                        <a title="Contact With Us" href="contact.html"><i class="fa fa-bell-o" aria-hidden="true"></i></a>
                                    </div>
                                </div>
                                <div class="setting-option">
                                    <div class="icon-box">
                                        <a title="Message" href="#"><i class="fa fa-comment-o" aria-hidden="true"></i></a>
                                    </div>
                                </div>
                                <div class="setting-option mobile-menu-bar ml--5 d-block d-lg-none">
                                    <div class="icon-box">
                                        <button class="hamberger-button">
                                            <i class="fa fa-bars" aria-hidden="true"></i>
                                        </button>
                                    </div>
                                </div>

                                <div class="setting-option rbt-site-header ml--5" id="rbt-site-header">
                                    <div class="icon-box">
                                        <a id="connectbtn" class="btn btn-primary-alta btn-small" href="connect.html">Wallet connect</a>
                                    </div>
                                </div>

                                <div id="my_switcher" class="my_switcher setting-option">
                                    <ul>
                                        <li>
                                            <a href="javascript: void(0);" data-theme="light" class="setColor light">
                                                <img src="./src/assets/images/icons/sun-01.svg" alt="Sun images" />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="javascript: void(0);" data-theme="dark" class="setColor dark">
                                                <img src="./src/assets/images/icons/vector.svg" alt="Vector Images" />
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        {/* <!-- top bar End --> */}

                        {/* <!-- start banner area --> */}
                        <div class="banner-area pt--25">
                            <div class="container-fluid">
                                <div class="row">
                                    <div class="slider-style-2 slick-activation-01 slick-arrow-style-one slick-arrow-between">
                                        {/* <!-- Start Single Portfolio  --> */}
                                        <div class="single-slide">
                                            <div class="inner">
                                                <div class="thumbnail">
                                                    <a href="product-details.html"><img src="./src/assets/images/banner/banner-01.jpg" alt="NFT_portfolio" /></a>
                                                </div>
                                                <div class="banner-read-thumb">
                                                    <h4><a href="product-details.html">Cubic Bazier</a></h4>
                                                    <span>John Lee</span>
                                                </div>
                                            </div>
                                        </div>
                                        {/* <!-- Start Single Portfolio  -->

                        <!-- Start Single Portfolio  --> */}
                                        <div class="single-slide">
                                            <div class="inner">
                                                <div class="thumbnail">
                                                    <a href="product-details.html"><img src="./src/assets/images/banner/banner-02.jpg" alt="NFT_portfolio" /></a>
                                                </div>
                                                <div class="banner-read-thumb">
                                                    <h4><a href="product-details.html">Faminho24</a></h4>
                                                    <span>Mr.Alamin</span>
                                                </div>
                                            </div>
                                        </div>
                                        {/* <!-- Start Single Portfolio  -->

                        <!-- Start Single Portfolio  --> */}
                                        <div class="single-slide">
                                            <div class="inner">
                                                <div class="thumbnail">
                                                    <a href="product-details.html"><img src="./src/assets/images/banner/banner-03.jpg" alt="NFT_portfolio" /></a>
                                                </div>
                                                <div class="banner-read-thumb">
                                                    <h4><a href="product-details.html">Tzniistan</a></h4>
                                                    <span>Ms.maybin</span>
                                                </div>
                                            </div>
                                        </div>
                                        {/* <!-- Start Single Portfolio  -->

                        <!-- Start Single Portfolio  --> */}
                                        <div class="single-slide">
                                            <div class="inner">
                                                <div class="thumbnail">
                                                    <a href="product-details.html"><img src="./src/assets/images/banner/banner-04.jpg" alt="NFT_portfolio" /></a>
                                                </div>
                                                <div class="banner-read-thumb">
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
                    <div class="nu-community-area rn-section-gapTop">
                        <div class="container">
                            <div class="row g-5">
                                <div class="col-lg-12">
                                    <div class="community-content-wrapper">
                                        {/* <!-- start Community single box --> */}
                                        <div class="single-community-box">
                                            <div class="community-bx-header">
                                                <div class="header-left">
                                                    <div class="thumbnail">
                                                        <img src="./src/assets/images/client/client-10.png" alt="NFT-thumbnail" />
                                                    </div>
                                                    <div class="name-date">
                                                        <a href="#" class="name">Elijavd May</a>
                                                        <span class="date">6 Hour Ago</span>
                                                    </div>
                                                    <div class="info-buy">
                                                        <span>đã check-in tại</span>
                                                    </div>
                                                    <div class="info-buy-shop">
                                                        <span>Vegetable Farm</span>
                                                    </div>
                                                </div>

                                            </div>
                                            <div class="community-content">
                                                <h3 class="title">Great farm</h3>
                                                <p class="desc">
                                                    Mọi thứ đều tốt và tươi sạch, mọi thông tin đều khớp trên hệ thống chuỗi khối !
                                                </p>
                                                <img class="community-img" src="./src/assets/images/blog/community/community-post-01.jpg" alt="Nft_Community-image" />
                                            </div>
                                        </div>
                                        {/* <!-- end Community single box --> */}


                                        {/* <!-- start Community single box --> */}
                                        <div class="single-community-box">
                                            <div class="community-bx-header">
                                                <div class="header-left">
                                                    <div class="thumbnail">
                                                        <img src="./src/assets/images/client/client-9.png" alt="NFT-thumbnail" />
                                                    </div>
                                                    <div class="name-date">
                                                        <a href="#" class="name">John Phine</a>
                                                        <span class="date">1 Hour Ago</span>

                                                    </div>
                                                    <div class="info-buy">
                                                        <span>đã mua hàng tại</span>
                                                    </div>
                                                    <div class="info-buy-shop">
                                                        <span>Apple Farm</span>
                                                    </div>
                                                </div>

                                                {/* <!-- header-right --> */}
                                                <div class="header-right">

                                                    <div class="stars">
                                                        <span class="star">&#9733;</span>
                                                        <span class="star">&#9733;</span>
                                                        <span class="star">&#9733;</span>
                                                        <span class="star">&#9733;</span>
                                                        <span class="star">&#9733;</span>
                                                    </div>

                                                </div>
                                                {/* <!-- header-right End --> */}
                                            </div>
                                            <div class="community-content">
                                                <h3 class="title">Hàng tươi ngon bổ rẻ</h3>
                                                <p class="desc">
                                                    Nên mua nhé mọi người, mình sẽ ủng hộ những lần mua tiếp theo !
                                                </p>
                                                <img class="community-img" src="./src/assets/images/blog/community/community-post-02.jpg" alt="Nft_Community-image" />
                                            </div>
                                        </div>
                                        {/* <!-- end Community single box --> */}

                                        {/* <!-- start Community single box --> */}
                                        <div class="single-community-box">
                                            <div class="community-bx-header">
                                                <div class="header-left">
                                                    <div class="thumbnail">
                                                        <img src="./src/assets/images/client/client-11.png" alt="NFT-thumbnail" />
                                                    </div>
                                                    <div class="name-date">
                                                        <a href="#" class="name">May</a>
                                                        <span class="date">6 Hour Ago</span>
                                                    </div>
                                                    <div class="info-buy">
                                                        <span>đã check-in tại</span>
                                                    </div>
                                                    <div class="info-buy-shop">
                                                        <span>Vegetable Farm</span>
                                                    </div>
                                                </div>

                                            </div>
                                            <div class="community-content">
                                                <h3 class="title">Great farm</h3>
                                                <p class="desc">
                                                    Mọi thứ đều tốt và tươi sạch, mọi thông tin đều khớp trên hệ thống chuỗi khối !
                                                </p>
                                                <img class="community-img" src="./src/assets/images/blog/community/community-post-03.jpg" alt="Nft_Community-image" />
                                            </div>
                                        </div>
                                        {/* <!-- end Community single box --> */}

                                        {/* <!-- start Community single box --> */}
                                        <div class="single-community-box">
                                            <div class="community-bx-header">
                                                <div class="header-left">
                                                    <div class="thumbnail">
                                                        <img src="./src/assets/images/client/client-7.png" alt="NFT-thumbnail" />
                                                    </div>
                                                    <div class="name-date">
                                                        <a href="#" class="name">Natalya</a>
                                                        <span class="date">6 Hour Ago</span>
                                                    </div>
                                                    <div class="info-buy">
                                                        <span>đã check-in tại</span>
                                                    </div>
                                                    <div class="info-buy-shop">
                                                        <span>Vegetable Farm</span>
                                                    </div>
                                                </div>

                                            </div>
                                            <div class="community-content">
                                                <h3 class="title">Great farm</h3>
                                                <p class="desc">
                                                    Mọi thứ đều tốt và tươi sạch, mọi thông tin đều khớp trên hệ thống chuỗi khối !
                                                </p>
                                                <img class="community-img" src="./src/assets/images/blog/community/community-post-04.jpg" alt="Nft_Community-image" />
                                            </div>
                                        </div>
                                        {/* <!-- end Community single box --> */}

                                        {/* <!-- start Community single box --> */}
                                        <div class="single-community-box">
                                            <div class="community-bx-header">
                                                <div class="header-left">
                                                    <div class="thumbnail">
                                                        <img src="./src/assets/images/client/client-5.png" alt="NFT-thumbnail" />
                                                    </div>
                                                    <div class="name-date">
                                                        <a href="#" class="name">Peter</a>
                                                        <span class="date">6 Hour Ago</span>
                                                    </div>
                                                    <div class="info-buy">
                                                        <span>đã check-in tại</span>
                                                    </div>
                                                    <div class="info-buy-shop">
                                                        <span>Vegetable Farm</span>
                                                    </div>
                                                </div>

                                            </div>
                                            <div class="community-content">
                                                <h3 class="title">Great farm</h3>
                                                <p class="desc">
                                                    Tuyệt vời !!!!
                                                </p>
                                                <img class="community-img" src="./src/assets/images/blog/community/community-post-05.jpg" alt="Nft_Community-image" />
                                            </div>
                                        </div>
                                        {/* <!-- end Community single box --> */}

                                        {/* <!-- start Community single box --> */}
                                        <div class="single-community-box">
                                            <div class="community-bx-header">
                                                <div class="header-left">
                                                    <div class="thumbnail">
                                                        <img src="./src/assets/images/client/client-9.png" alt="NFT-thumbnail" />
                                                    </div>
                                                    <div class="name-date">
                                                        <a href="#" class="name">Wonderwoman</a>
                                                        <span class="date">9 Hour Ago</span>
                                                    </div>
                                                    <div class="info-buy">
                                                        <span>đã check-in tại</span>
                                                    </div>
                                                    <div class="info-buy-shop">
                                                        <span>Vegetable Farm</span>
                                                    </div>
                                                </div>

                                            </div>
                                            <div class="community-content">
                                                <h3 class="title">Great farm</h3>
                                                <p class="desc">
                                                    Tuyệt vời !!!!
                                                </p>
                                                <img class="community-img" src="./src/assets/images/blog/community/community-post-06.jpg" alt="Nft_Community-image" />
                                            </div>
                                        </div>
                                        {/* <!-- end Community single box --> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="header-right-fixed">
                    {/* <!-- notificatio area --> */}
                    <div class="rn-notification-area right-fix-notice">
                        <div class="rn-notification-wrapper">
                            <div class="authore-profile">
                                <div class="thumbnail">
                                    <img src="./src/assets/images/client/testimonial-1.jpg" alt="Nft_marketplaces" />
                                </div>
                                <div class="au-content">
                                    <p class="name">Hao</p>
                                    <p class="blc">Balance:<span class="value">12ETH</span></p>
                                    <p class="blc">Balance:<span class="value">12ETH</span></p>
                                    <p class="blc">Balance:<span class="value">12ETH</span></p>
                                    <p class="blc">Balance:<span class="value">12ETH</span></p>
                                    <p class="blc">Balance:<span class="value">12ETH</span></p>
                                    <p class="blc">Balance:<span class="value">12ETH</span></p>
                                    <p class="blc">Balance:<span class="value">12ETH</span></p>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <!-- notificatio area End --> */}

                    {/* <!-- start creators area --> */}
                    <div class="rn-creators-area right-fix-notice creators mt--30">
                        <div class="h--100">
                            <div class="notice-heading">
                                <h4>
                                    Top Artist
                                </h4>
                                <div class="nice-select" tabindex="0"><span class="current">Today</span>
                                    <ul class="list">
                                        <li data-value="Potato" data-display="Today" class="option selected">Today</li>
                                        <li data-value="1" class="option">7 Day's</li>
                                        <li data-value="2" class="option">30 Days</li>
                                        <li data-value="4" class="option">6 Month's</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="rn-notification-wrapper creators">
                            {/* <!-- single authore --> */}
                            <div class="top-seller-inner-one">
                                <div class="top-seller-wrapper">
                                    <div class="thumbnail varified">
                                        <a href="#"><img src="./src/assets/images/client/client-3.png" alt="Nft_Profile" /></a>
                                    </div>
                                    <div class="top-seller-content">
                                        <a href="#">
                                            <h6 class="name">Brodband</h6>
                                        </a>
                                        <span class="count-number">
                                            $2500,000
                                        </span>
                                    </div>
                                </div>
                                <a href="#" class="btn btn-primary-alta">Follow</a>
                            </div>
                            {/* <!-- single authore end --> */}
                            {/* <!-- single authore --> */}
                            <div class="top-seller-inner-one">
                                <div class="top-seller-wrapper">
                                    <div class="thumbnail varified">
                                        <a href="#"><img src="./src/assets/images/client/client-4.png" alt="Nft_Profile" /></a>
                                    </div>
                                    <div class="top-seller-content">
                                        <a href="#">
                                            <h6 class="name">Ms. Parkline</h6>
                                        </a>
                                        <span class="count-number">
                                            $2500,000
                                        </span>
                                    </div>
                                </div>
                                <a href="#" class="btn btn-primary-alta">Follow</a>
                            </div>
                            {/* <!-- single authore end --> */}
                            {/* <!-- single authore --> */}
                            <div class="top-seller-inner-one">
                                <div class="top-seller-wrapper">
                                    <div class="thumbnail">
                                        <a href="#"><img src="./src/assets/images/client/client-5.png" alt="Nft_Profile" /></a>
                                    </div>
                                    <div class="top-seller-content">
                                        <a href="#">
                                            <h6 class="name">
                                                Methods</h6>
                                        </a>
                                        <span class="count-number">
                                            $3300,000
                                        </span>
                                    </div>
                                </div>
                                <a href="#" class="btn btn-primary-alta">Follow</a>
                            </div>
                            {/* <!-- single authore end --> */}
                            {/* <!-- single authore --> */}
                            <div class="top-seller-inner-one">
                                <div class="top-seller-wrapper">
                                    <div class="thumbnail varified">
                                        <a href="#"><img src="./src/assets/images/client/client-6.png" alt="Nft_Profile" /></a>
                                    </div>
                                    <div class="top-seller-content">
                                        <a href="#">
                                            <h6 class="name">Jone sone</h6>
                                        </a>
                                        <span class="count-number">
                                            $5500,000
                                        </span>
                                    </div>
                                </div>
                                <a href="#" class="btn btn-primary-alta">Follow</a>
                            </div>
                            {/* <!-- single authore end --> */}
                            {/* <!-- single authore --> */}
                            <div class="top-seller-inner-one">
                                <div class="top-seller-wrapper">
                                    <div class="thumbnail varified">
                                        <a href="#"><img src="./src/assets/images/client/client-7.png" alt="Nft_Profile" /></a>
                                    </div>
                                    <div class="top-seller-content">
                                        <a href="#">
                                            <h6 class="name">Jone Lee</h6>
                                        </a>
                                        <span class="count-number">
                                            $1900,000
                                        </span>
                                    </div>
                                </div>
                                <a href="#" class="btn btn-primary-alta">Follow</a>
                            </div>
                            {/* <!-- single authore end --> */}
                            {/* <!-- single authore --> */}
                            <div class="top-seller-inner-one">
                                <div class="top-seller-wrapper">
                                    <div class="thumbnail">
                                        <a href="#"><img src="./src/assets/images/client/client-8.png" alt="Nft_Profile" /></a>
                                    </div>
                                    <div class="top-seller-content">
                                        <a href="#">
                                            <h6 class="name">Brodband</h6>
                                        </a>
                                        <span class="count-number">
                                            $2500,000
                                        </span>
                                    </div>
                                </div>
                                <a href="#" class="btn btn-primary-alta">Follow</a>
                            </div>
                            {/* <!-- single authore end --> */}
                            {/* <!-- single authore --> */}
                            <div class="top-seller-inner-one">
                                <div class="top-seller-wrapper">
                                    <div class="thumbnail varified">
                                        <a href="#"><img src="./src/assets/images/client/client-9.png" alt="Nft_Profile" /></a>
                                    </div>
                                    <div class="top-seller-content">
                                        <a href="#">
                                            <h6 class="name">Ms. Parkline</h6>
                                        </a>
                                        <span class="count-number">
                                            $2500,000
                                        </span>
                                    </div>
                                </div>
                                <a href="#" class="btn btn-primary-alta">Follow</a>
                            </div>
                            {/* <!-- single authore end --> */}
                            {/* <!-- single authore --> */}
                            <div class="top-seller-inner-one">
                                <div class="top-seller-wrapper">
                                    <div class="thumbnail">
                                        <a href="#"><img src="./src/assets/images/client/client-10.png" alt="Nft_Profile" /></a>
                                    </div>
                                    <div class="top-seller-content">
                                        <a href="#">
                                            <h6 class="name">
                                                Methods</h6>
                                        </a>
                                        <span class="count-number">
                                            $3300,000
                                        </span>
                                    </div>
                                </div>
                                <a href="#" class="btn btn-primary-alta">Follow</a>
                            </div>
                            {/* <!-- single authore end --> */}
                            {/* <!-- single authore --> */}
                            <div class="top-seller-inner-one">
                                <div class="top-seller-wrapper">
                                    <div class="thumbnail varified">
                                        <a href="#"><img src="./src/assets/images/client/client-11.png" alt="Nft_Profile" /></a>
                                    </div>
                                    <div class="top-seller-content">
                                        <a href="#">
                                            <h6 class="name">Jone sone</h6>
                                        </a>
                                        <span class="count-number">
                                            $5500,000
                                        </span>
                                    </div>
                                </div>
                                <a href="#" class="btn btn-primary-alta">Follow</a>
                            </div>
                            {/* <!-- single authore end --> */}
                            {/* <!-- single authore --> */}
                            <div class="top-seller-inner-one">
                                <div class="top-seller-wrapper">
                                    <div class="thumbnail">
                                        <a href="#"><img src="./src/assets/images/client/client-1.png" alt="Nft_Profile" /></a>
                                    </div>
                                    <div class="top-seller-content">
                                        <a href="#">
                                            <h6 class="name">Jone Lee</h6>
                                        </a>
                                        <span class="count-number">
                                            $1900,000
                                        </span>
                                    </div>
                                </div>
                                <a href="#" class="btn btn-primary-alta">Follow</a>
                            </div>
                            {/* <!-- single authore end --> */}
                        </div>
                    </div>
                    {/* <!-- End creators area --> */}
                </div>

                {/* <!-- Start Footer Area  --> */}
                <div class="rn-footer-area footer-for-left-sticky-header">
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-12">
                                <div class="inner">
                                    <div class="logo logo-custom-css">
                                        <a class="logo-light" href="index.html"><img src="./src/assets/images/logo/logo-white.png" alt="nft-logo" /></a>
                                        <a class="logo-dark" href="index.html"><img src="./src/assets/images/logo/logo-dark.png" alt="nft-logo" /></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- End Footer Area  --> */}

                {/* <!-- Modal --> */}
                <div class="rn-popup-modal share-modal-wrapper modal fade" id="shareModal" tabindex="-1" aria-hidden="true">
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"><i data-feather="x"></i></button>
                    <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                        <div class="modal-content share-wrapper">
                            <div class="modal-header share-area">
                                <h5 class="modal-title">Share this NFT</h5>
                            </div>
                            <div class="modal-body">
                                <ul class="social-share-default">
                                    <li><a href="#"><span class="icon"><i data-feather="facebook"></i></span><span class="text">facebook</span></a></li>
                                    <li><a href="#"><span class="icon"><i data-feather="twitter"></i></span><span class="text">twitter</span></a></li>
                                    <li><a href="#"><span class="icon"><i data-feather="linkedin"></i></span><span class="text">linkedin</span></a></li>
                                    <li><a href="#"><span class="icon"><i data-feather="instagram"></i></span><span class="text">instagram</span></a></li>
                                    <li><a href="#"><span class="icon"><i data-feather="youtube"></i></span><span class="text">youtube</span></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- Modal --> */}
                <div class="rn-popup-modal report-modal-wrapper modal fade" id="reportModal" tabindex="-1" aria-hidden="true">
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"><i data-feather="x"></i></button>
                    <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                        <div class="modal-content report-content-wrapper">
                            <div class="modal-header report-modal-header">
                                <h5 class="modal-title">Why are you reporting?
                                </h5>
                            </div>
                            <div class="modal-body">
                                <p>Describe why you think this item should be removed from marketplace</p>
                                <div class="report-form-box">
                                    <h6 class="title">Message</h6>
                                    <textarea name="message" placeholder="Write issues"></textarea>
                                    <div class="report-button">
                                        <button type="button" class="btn btn-primary mr--10 w-auto">Report</button>
                                        <button type="button" class="btn btn-primary-alta w-auto" data-bs-dismiss="modal">Cancel</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="mouse-cursor cursor-outer"></div>
                <div class="mouse-cursor cursor-inner"></div>
                {/* <!-- Start Top To Bottom Area  --> */}
                <div class="rn-progress-parent">

                    <svg class="rn-back-circle svg-inner" width="100%" height="100%" viewBox="-1 -1 102 102">
                        <path d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98" />
                    </svg>
                </div>
            </body>
        </>

    )
}

export default IndexAgriblock        