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

    let en = this.props.data.lang === 'en'

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
                    {!en && <a href="javascript:void(0)" className="link"> <i className="icons fa fa-circle" /><span>Giờ mở cửa</span></a>}
                    {en && <a href="javascript:void(0)" className="link"> <i className="icons fa fa-circle" /><span>Opening hours</span></a>}
                  </li>
                  <li>
                    <a href="javascript:void(0)" className="link"> <i className="icons-2 fa fa-clock-o" /><span>06:00 - 22:00 </span></a>
                  </li>
                </ul>

                <ul className="topbar-right list-unstyled style-2" style={{marginLeft: 20}}>
                  {!en && <a href="?lang=en"><img src="/flag_en.jpg" alt=""/></a>}
                  {en && <a href="?lang=vi"><img src="/flag_vn.jpg" alt=""/></a>}
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
                      {!en && <li className="dropdown active"><a href="/" className="main-menu"><span className="text">Trang chủ</span></a></li>}
                      {en && <li className="dropdown active"><a href="/" className="main-menu"><span className="text">Home</span></a></li>}

                      {!en && <li className="dropdown active"><a href="/gioi-thieu" className="main-menu"><span className="text">Giới thiệu</span></a></li>}
                      {en && <li className="dropdown active"><a href="/gioi-thieu" className="main-menu"><span className="text">About</span></a></li>}

                      {!en && <li className="dropdown active"><a href="/cua-hang" className="main-menu"><span className="text">Sản phẩm</span></a></li>}
                      {en && <li className="dropdown active"><a href="/cua-hang" className="main-menu"><span className="text">Product</span></a></li>}

                      <li className="dropdown active"><a href="#" className="main-menu"><span className="text">Hot Deal</span></a></li>

                      {!en && <li className="dropdown active"><a href="/tin-tuc" className="main-menu"><span className="text">Tin tức</span></a></li>}
                      {en && <li className="dropdown active"><a href="/tin-tuc" className="main-menu"><span className="text">News</span></a></li>}

                      {!en && <li className="dropdown active"><a href="/lien-he" className="main-menu"><span className="text">Liên hệ</span></a></li>}
                      {en && <li className="dropdown active"><a href="/lien-he" className="main-menu"><span className="text">Contact</span></a></li>}
                    </ul>

                  </nav>


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
                            {!en && <div className="title">Liên hệ</div>}
                            {en && <div className="title">Contact</div>}
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
                            <div className="title">Gallery</div>
                            <div className="content-widget">
                              <ul className="list-unstyled list-inline">
                                <li>
                                  <a href="/assets/images/gallery/caidun.png" data-fancybox-group="gallery2" className="thumb fancybox">
                                    <img src="/assets/images/gallery/caidun.png" alt="gallery image 1" className="img-full" /></a>
                                </li>
                                <li>
                                  <a href="/assets/images/gallery/cairo.png" data-fancybox-group="gallery2" className="thumb fancybox">
                                    <img src="/assets/images/gallery/cairo.png" alt="gallery image 2" className="img-full" /></a>
                                </li>
                                <li>
                                  <a href="/assets/images/gallery/rau1.png" data-fancybox-group="gallery2" className="thumb fancybox">
                                    <img src="/assets/images/gallery/rau1.png" alt="gallery image 3" className="img-full" /></a>
                                </li>
                                <li>
                                  <a href="/assets/images/gallery/rau2.png" data-fancybox-group="gallery2" className="thumb fancybox">
                                    <img src="/assets/images/gallery/rau2.png" alt="gallery image 4" className="img-full" /></a>
                                </li>
                                <li>
                                  <a href="/assets/images/gallery/traicay1.png" data-fancybox-group="gallery2" className="thumb fancybox">
                                    <img src="/assets/images/gallery/traicay1.png" alt="gallery image 5" className="img-full" /></a>
                                </li>
                                <li>
                                  <a href="/assets/images/gallery/traicay2.png" data-fancybox-group="gallery2" className="thumb fancybox">
                                    <img src="/assets/images/gallery/traicay2.png" alt="gallery image 6" className="img-full" /></a>
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
