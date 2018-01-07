/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';

import {Header, Footer} from '../Partial'
import LoadingBar from 'react-redux-loading-bar';

class Layout extends React.Component {

  render() {
    return (<div className="body-wrapper">
      <LoadingBar showFastActions  maxProgress={80} progressIncrease={40} style={{ backgroundColor: 'red', zIndex: 1000, height: '2px' }} />

      <Header data={this.props.data}/>

      <div className="wrapper-content">
        <header>
          <div className="bg-transparent">
            <div className="header-topbar">
              <div className="container">
                <ul className="topbar-left list-unstyled pull-left">
                  <li>
                    <a href="javascript:void(0)" className="link"> <i className="icons fa fa-circle" /><span>Giờ mở cửa</span></a>
                  </li>
                  <li>
                    <a href="javascript:void(0)" className="link"> <i className="icons-2 fa fa-clock-o" /><span>06:00 - 22:00 </span></a>
                  </li>
                </ul>
                <ul className="topbar-right list-unstyled list-inline style-2">
                  <li>
                    <a href="#" className="link"> <i className="icons-2 fa fa-cart-plus" /><span className="cart-counter">0</span></a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="header-main">
              <div className="container">
                <div className="header-main-wrapper">
                  <div className="hamburger-menu-mobile"><i className="icons fa fa-bars" /></div>
                  <div className="logo-wrapper">
                    <a href="/" className="logo"><img src="/assets/images/logo/logo.png" alt /></a>
                  </div>
                  <nav className="navigation">
                    <ul className="nav-links nav navbar-nav">
                      <li className="dropdown active"><a href="/" className="main-menu"><span className="text">Trang chủ</span></a>
                        {/*<ul className="menu-dropdown">*/}
                          {/*<li><a href="index.html" className="sub-menu"><span className="text">Homepage 01</span></a></li>*/}
                          {/*<li><a href="homepage-2.html" className="sub-menu"><span className="text">Homepage 02</span></a></li>*/}
                          {/*<li><a href="homepage-3.html" className="sub-menu"><span className="text">Homepage 03</span></a></li>*/}
                        {/*</ul>*/}
                      </li>
                      <li className="dropdown active"><a href="/gioi-thieu" className="main-menu"><span className="text">Giới thiệu</span></a></li>
                      <li className="dropdown active"><a href="/cua-hang" className="main-menu"><span className="text">Cửa hàng</span></a>
                      </li>
                      <li className="dropdown active"><a href="/tin-tuc" className="main-menu"><span className="text">Tin tức</span></a></li>
                      <li className="dropdown active"><a href="/lien-he" className="main-menu"><span className="text">Liên hệ</span></a></li>
                    </ul>
                    <div className="button-search">
                      <p className="main-menu "><i className="fa fa-search" /></p>
                    </div>
                    <div className="nav-search hide">
                      <form><input type="text" placeholder="Search" className="searchbox" /><button type="submit" className="searchbutton fa fa-search" /></form>
                    </div>
                  </nav>
                  <div className="button-search-mobile"><i className="icons fa fa-search" /></div>
                  <div className="clearfix" />
                </div>
              </div>
            </div>
          </div>
        </header>
        {this.props.children}

        <footer>
          <div className="footer">
            <div className="footer-wrapper">
              <div className="footer-main">
                <div className="container">
                  <div className="footer-main-wrapper">
                    <div className="row">
                      <div className="col-2">
                        <div className="col-md-6 col-xs-12">
                          <div className="gamba-info widget">
                            <div className="title">Liên hệ</div>
                            <div className="content-widget">
                              <ul className="list-unstyled info-list">
                                <li><i className="icons fa fa-map-marker" /><a href="#" className="link">
                                  B1.00.11 Khu chung cứ phức hợp M2, số 72, Đường Nguyễn Cơ Thạch, Phường An Lợi Đông, Quận 2, Thành phố Hồ Chí Minh, Việt Nam
                                </a></li>
                                <li><i className="icons fa fa-phone" /><a href="#" className="link link-2">0199.999.9910</a></li>
                                <li><i className="icons fa fa-envelope-o" /><a href="#" className="link">phuongnguyen@happygreenmarket.com.vn</a></li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-2">
                        <div className="col-md-6 col-xs-12">
                          <div className="gamba-gallery widget">
                            <div className="title">gallery</div>
                            <div className="content-widget">
                              <ul className="list-unstyled list-inline">
                                <li>
                                  <a href="/assets/images/products/thumbnail-1.jpg" data-fancybox-group="gallery2" className="thumb fancybox"><img src="/assets/images/products/thumbnail-1.jpg" alt="gallery image 1" className="img-full" /></a>
                                </li>
                                <li>
                                  <a href="/assets/images/products/thumbnail-2.jpg" data-fancybox-group="gallery2" className="thumb fancybox"><img src="/assets/images/products/thumbnail-2.jpg" alt="gallery image 2" className="img-full" /></a>
                                </li>
                                <li>
                                  <a href="/assets/images/products/thumbnail-3.jpg" data-fancybox-group="gallery2" className="thumb fancybox"><img src="/assets/images/products/thumbnail-3.jpg" alt="gallery image 3" className="img-full" /></a>
                                </li>
                                <li>
                                  <a href="/assets/images/news/image-2.jpg" data-fancybox-group="gallery2" className="thumb fancybox"><img src="/assets/images/news/image-2.jpg" alt="gallery image 4" className="img-full" /></a>
                                </li>
                                <li>
                                  <a href="/assets/images/news/image-3.jpg" data-fancybox-group="gallery2" className="thumb fancybox"><img src="/assets/images/news/image-3.jpg" alt="gallery image 5" className="img-full" /></a>
                                </li>
                                <li>
                                  <a href="/assets/images/news/image-4.jpg" data-fancybox-group="gallery2" className="thumb fancybox"><img src="/assets/images/news/image-4.jpg" alt="gallery image 6" className="img-full" /></a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="hyperlink">
                <div className="container">
                  <div className="name-company pull-left">© Designed by <a href="http://thunderduck.com.vn">Thunder Duck</a></div>
                  <div className="social-footer pull-right">
                    <ul className="list-inline list-unstyled">
                      <li><a href="https://www.facebook.com/HappyGreen.vn/" className="link facebook"><i className="fa fa-facebook" /></a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>
        <div id="back-top"><a href="#top" className="link gamba-circles"><span className="circle" /><span className="circle" /><span className="circle" /><span className="circle" /><i className="fa fa-angle-double-up" /></a></div>

      </div>

      </div>);
  }
}

export default Layout
