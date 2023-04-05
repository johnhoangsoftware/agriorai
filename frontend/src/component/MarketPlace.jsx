import React from 'react'

const MarketPlace = () => {
    return (
        <body class="home-sticky-pin sidebar-header scrollspy-example position-relative" data-bs-spy="scroll" data-bs-target="#navbar-example2" data-bs-offset="0" tabindex="0">

            <div class="d-none d-lg-block">
                <div class="header-area left-header-style d-flex">
                    <div class="logo-area logo-custom-css">
                        <a class="logo-light" href="index.html"><img src="assets/images/logo/logo-white.png" alt="nft-logo" /></a>
                        <a class="logo-dark" href="index.html"><img src="assets/images/logo/logo-dark.png" alt="nft-logo" /></a>
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

                        <div class="help-center-area mainmenu-nav mt--30">
                            <ul class="mainmenu">
                                <li class="nav-item"><a class="nav-link" href="#"> <i data-feather="settings"></i>Settings</a></li>
                                <li class="nav-item"><a class="nav-link" href="support.html"> <i data-feather="activity"></i>Help Center</a></li>
                            </ul>
                        </div>
                    </div>
                    <div class="authore-profile">
                        <div class="thumbnail">
                            <img src="assets/images/client/testimonial-1.jpg" alt="Nft_marketplaces" />
                        </div>
                        <div class="au-content">
                            <p class="name">Hảo đuồi bầu</p>
                            <p class="blc">Balance:<span class="value">12ETH</span></p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="popup-mobile-menu one-page-vavigation-popup">
                <div class="inner">
                    <div class="header-top">
                        <div class="logo logo-custom-css">
                            <a class="logo-light" href="index.html"><img src="assets/images/logo/logo-white.png" alt="nft-logo" /></a>
                            <a class="logo-dark" href="index.html"><img src="assets/images/logo/logo-dark.png" alt="nft-logo" /></a>
                        </div>
                        <div class="close-menu">
                            <button class="close-button">
                                <i class="feather-x"></i>
                            </button>
                        </div>
                    </div>
                    <nav>
                        <ul class="mainmenu" id="navbar-example2">
                            <li class="nav-item"><a class="nav-link" href="index.html"> <i data-feather="home"></i>Home</a></li>
                            <li class="nav-item"><a class="nav-link" href="marketplace.html"> <i data-feather="heart"></i>MarketPlace</a></li>
                            <li class="nav-item"><a class="nav-link" href="checkin.html"> <i data-feather="trending-up"></i>Check-in</a></li>
                            <li class="nav-item"><a class="nav-link" href="#"> <i data-feather="trending-up"></i>Vote Star</a></li>
                        </ul>
                    </nav>
                </div>
            </div>


        </body>
    )

}

export default MarketPlace