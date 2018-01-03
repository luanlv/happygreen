/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import PropTypes from 'prop-types';
import {Header, Footer} from '../../components/Partial'
import * as C from './components/index'

class Home extends React.Component {

  componentDidMount () {
    // init();
  }

  render() {
    return (
      <div>
        <div className="main-contents">
          {/* Slider*/}
          <section className="background-slide">
            <div className="slide-item"><img src="/assets/images/background-full/homepage-1.jpg" alt data-parallax="{&quot;y&quot;: 200}" className="img-responsive img-background" />
              <div className="container">
                <div className="homepage-banner-warpper">
                  <div className="homepage-banner-content">
                    <div className="group-title fadeInDown">
                      <h1 className="title">Happy Green</h1>
                      <h2 className="subtitle">Tươi mỗi ngày | Fresh daily</h2>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="about-us padding-top-100 padding-bottom-100">
            <div className="container">
              <div className="main-titles">
                <h1 className="title">Chào mừng đến với Happy Green</h1></div>
              <div className="main-content">
                <div className="about-us-wrapper">
                  <div className="about-left">
                    <div data-wow-delay="0.8s" className="block-icon-1 wow fadeInLeft">
                      <div className="table-cell">
                        <div className="gamba-circles">
                          <div className="circle" />
                          <div className="circle" />
                          <div className="circle" />
                          <div className="circle" />
                        </div><i className="icons flaticon-broccoli" /></div>
                      <div className="table-cell">
                        <h4 className="title">100% Natural</h4>
                        <p className="description">We care about what you eat. We want to produce food which nourishes your body and tastes delicious. </p>
                      </div>
                    </div>
                    <div data-wow-delay="1.3s" className="block-icon-1 wow fadeInLeft">
                      <div className="table-cell">
                        <div className="gamba-circles">
                          <div className="circle" />
                          <div className="circle" />
                          <div className="circle" />
                          <div className="circle" />
                        </div><i className="icons flaticon-lemon" /></div>
                      <div className="table-cell">
                        <h4 className="title">Always Fresh</h4>
                        <p className="description">We care about what you eat. We want to produce food which nourishes your body and tastes delicious.</p>
                      </div>
                    </div>
                  </div>
                  <div data-wow-delay="0.3s" className="about-center wow zoomIn"><img src="/assets/images/more-image/about-us-1.jpg" alt className="img-responsive" /></div>
                  <div className="about-right">
                    <div data-wow-delay="0.8s" className="block-icon-1 wow fadeInRight">
                      <div className="table-cell">
                        <div className="gamba-circles">
                          <div className="circle" />
                          <div className="circle" />
                          <div className="circle" />
                          <div className="circle" />
                        </div><i className="icons flaticon-groceries" /></div>
                      <div className="table-cell">
                        <h4 className="title">Organic Products</h4>
                        <p className="description">We care about what you eat. We want to produce food which nourishes your body and tastes delicious.</p>
                      </div>
                    </div>
                    <div data-wow-delay="1.3s" className="block-icon-1 wow fadeInRight">
                      <div className="table-cell">
                        <div className="gamba-circles">
                          <div className="circle" />
                          <div className="circle" />
                          <div className="circle" />
                          <div className="circle" />
                        </div><i className="icons flaticon-flour" /></div>
                      <div className="table-cell">
                        <h4 className="title">Best Quality</h4>
                        <p className="description">We care about what you eat. We want to produce food which nourishes your body and tastes delicious.</p>
                      </div>
                    </div>
                  </div>
                  <div className="clearfix" />
                </div>
              </div>
            </div>
          </section>


          <section className="banner-1"><img src="/assets/images/background-full/banner-1.jpg" alt className="img-bg-1" /><img src="/assets/images/background-full/banner-1-2.png" alt className="img-bg-2" />
            <div className="container">
              <div data-parallax="{&quot;y&quot;: 150}" className="banner-1-wrapper">
                <h3 className="subtitle">eat better</h3>
                <h2 className="title">feel better</h2>
                <p className="description">We produce food in a way which is honest, natural &amp; transparent.</p><a href="#" className="btn btn-maincolor">shop now</a></div>
            </div>
          </section>
          {/* Products*/}
          <section className="our-product padding-top-100 padding-bottom-100">
            <div className="container">
              <div className="main-titles">
                <h1 className="title">our product</h1></div>
              <div className="main-content">
                <div className="gallery-nav">
                  <ul className="tab-filter tab-menu">
                    <li data-filter="*" data-category="all" className="tab active">
                      <div className="link">all</div>
                    </li>
                    <li data-filter=".tab-1" data-category="tab-1" className="tab">
                      <div className="link">Vegetables</div>
                    </li>
                    <li data-filter=".tab-2" data-category="tab-2" className="tab">
                      <div className="link">Juices</div>
                    </li>
                    <li data-filter=".tab-3" data-category="tab-3" className="tab">
                      <div className="link">Dried Products</div>
                    </li>
                  </ul>
                </div>
                <div className="gallery-grid">
                  <div className="grid-item tab-2">
                    <div className="block-4">
                      <div className="block-image"><img src="/assets/images/products/image-1.png" alt className="img-full" />
                        <a href="blog-detail.html" className="link" />
                      </div>
                      <div className="block-content"><a href="#" className="title">Green Cabbage</a>
                        <div className="prices-wrapper">
                          <div className="prices"><sup>$</sup><span className="number">20.00</span></div><span className="unit">/kg</span></div>
                        <ul className="list-icons">
                          <li><a href="#" className="link"><i className="icons fa fa-cart-plus" /></a></li>
                          <li><a href="#" className="link"><i className="icons fa fa-heart" /></a></li>
                          <li><a href="#" className="link"><i className="icons fa fa-share-alt" /></a></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="grid-item tab-2 tab-3 tab-1">
                    <div className="block-4">
                      <div className="block-image"><img src="/assets/images/products/image-2.png" alt className="img-full" />
                        <a href="blog-detail.html" className="link" />
                      </div>
                      <div className="block-content"><a href="#" className="title">Spinach</a>
                        <div className="prices-wrapper">
                          <div className="prices"><sup>$</sup><span className="number">20.00</span></div><span className="unit">/kg</span></div>
                        <ul className="list-icons">
                          <li><a href="#" className="link"><i className="icons fa fa-cart-plus" /></a></li>
                          <li><a href="#" className="link"><i className="icons fa fa-heart" /></a></li>
                          <li><a href="#" className="link"><i className="icons fa fa-share-alt" /></a></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="grid-item tab-2 tab-3">
                    <div className="block-4">
                      <div className="block-image"><img src="/assets/images/products/image-3.png" alt className="img-full" />
                        <a href="blog-detail.html" className="link" />
                      </div>
                      <div className="block-content"><a href="#" className="title">corn</a>
                        <div className="prices-wrapper">
                          <div className="prices"><sup>$</sup><span className="number">35.00</span></div><span className="unit">/kg</span></div>
                        <ul className="list-icons">
                          <li><a href="#" className="link"><i className="icons fa fa-cart-plus" /></a></li>
                          <li><a href="#" className="link"><i className="icons fa fa-heart" /></a></li>
                          <li><a href="#" className="link"><i className="icons fa fa-share-alt" /></a></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="grid-item tab-1 tab-3 tab-2">
                    <div className="block-4">
                      <div className="block-image"><img src="/assets/images/products/image-4.png" alt className="img-full" />
                        <a href="blog-detail.html" className="link" />
                      </div>
                      <div className="block-content"><a href="#" className="title">Carrots</a>
                        <div className="prices-wrapper">
                          <div className="prices"><sup>$</sup><span className="number">34.00</span></div><span className="unit">/kg</span></div>
                        <ul className="list-icons">
                          <li><a href="#" className="link"><i className="icons fa fa-cart-plus" /></a></li>
                          <li><a href="#" className="link"><i className="icons fa fa-heart" /></a></li>
                          <li><a href="#" className="link"><i className="icons fa fa-share-alt"></i></a></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="grid-item tab-1 tab-2">
                    <div className="block-4">
                      <div className="block-image"><img src="/assets/images/products/image-5.png" alt className="img-full" />
                        <a href="blog-detail.html" className="link" />
                      </div>
                      <div className="block-content"><a href="#" className="title">pumpkin</a>
                        <div className="prices-wrapper">
                          <div className="prices"><sup>$</sup><span className="number">27.00</span></div><span className="unit">/kg</span></div>
                        <ul className="list-icons">
                          <li><a href="#" className="link"><i className="icons fa fa-cart-plus" /></a></li>
                          <li><a href="#" className="link"><i className="icons fa fa-heart" /></a></li>
                          <li><a href="#" className="link"><i className="icons fa fa-share-alt" /></a></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="grid-item tab-1 tab-3">
                    <div className="block-4">
                      <div className="block-image"><img src="/assets/images/products/image-6.png" alt className="img-full" />
                        <a href="blog-detail.html" className="link" />
                      </div>
                      <div className="block-content"><a href="#" className="title">kohlrabi</a>
                        <div className="prices-wrapper">
                          <div className="prices"><sup>$</sup><span className="number">31.00</span></div><span className="unit">/kg</span></div>
                        <ul className="list-icons">
                          <li><a href="#" className="link"><i className="icons fa fa-cart-plus" /></a></li>
                          <li><a href="#" className="link"><i className="icons fa fa-heart" /></a></li>
                          <li><a href="#" className="link"><i className="icons fa fa-share-alt"> </i></a></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="wrapper-btn margin-top-70"><a href="#" className="btn">Xem thêm</a></div>
              </div>
            </div>
          </section>
          {/* deal today*/}
          {/*<section className="deal-today padding-top-100 padding-bottom-100">*/}
            {/*<div className="container">*/}
              {/*<div className="main-titles">*/}
                {/*<h1 className="title">deal today</h1></div>*/}
              {/*<div className="main-content">*/}
                {/*<div className="grid-block-3">*/}
                  {/*<div className="grid-left"><img src="/assets/images/more-image/fact.png" alt className="img-responsive" /></div>*/}
                  {/*<div className="grid-right block-products">*/}
                    {/*<h2 className="title">ORGANIC SOUP MIX 500G</h2>*/}
                    {/*<div className="prices">*/}
                      {/*<p className="text">price:</p><sup>$</sup><span className="number">20.00</span></div>*/}
                    {/*<div title="Rated 5.00 out of 5" className="star-rating"><span className="width-100"><strong className="rating">5.00</strong></span></div>*/}
                    {/*<p className="description">An ice cream sundae would never be seen topless. And a bowl of oatmeal would bore you back.</p>*/}
                    {/*<ul className="list-info">*/}
                      {/*<li>Over a spinach salad</li>*/}
                      {/*<li>Mixed into muffin or pancake batter</li>*/}
                      {/*<li>As a complement to salty nuts in homemade</li>*/}
                    {/*</ul><a href="#" className="btn btn-maincolor">add to cart</a></div>*/}
                {/*</div>*/}
                {/*<div className="list-images margin-top-70">*/}
                  {/*<div className="item">*/}
                    {/*<div className="thumbnail-image"><img src="/assets/images/products/thumbnail-1.jpg" alt className="img-full" /></div>*/}
                  {/*</div>*/}
                  {/*<div className="item">*/}
                    {/*<div className="thumbnail-image"><img src="/assets/images/products/thumbnail-2.jpg" alt className="img-full" /></div>*/}
                  {/*</div>*/}
                  {/*<div className="item">*/}
                    {/*<div className="thumbnail-image"><img src="/assets/images/products/thumbnail-3.jpg" alt className="img-full" /></div>*/}
                  {/*</div>*/}
                  {/*<div className="item">*/}
                    {/*<div className="thumbnail-image"><img src="/assets/images/products/thumbnail-4.jpg" alt className="img-full" /></div>*/}
                  {/*</div>*/}
                {/*</div>*/}
              {/*</div>*/}
            {/*</div>*/}
          {/*</section>*/}
          {/* Customer*/}
          <section className="banner customer-review padding-top-100 padding-bottom-100">
            <div className="container">
              <div className="main-titles white">
                <h1 className="title">happy customer</h1></div>
              <div className="list-customer-review">
                <div className="item">
                  <div className="customer">
                    <div className="gamba-circles-2">
                      <div className="circle" />
                      <div className="circle" />
                      <div className="circle" />
                      <div className="circle" />
                    </div>
                    <div className="customer-info">
                      <div className="icons">"</div>
                      <div className="name">phien phien</div>
                      <div className="description">An ice cream sundae would never be seen topless. And a bowl of oatmeal would an bore you back seen never be oatmeal would seen.</div>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="customer">
                    <div className="gamba-circles-2">
                      <div className="circle" />
                      <div className="circle" />
                      <div className="circle" />
                      <div className="circle" />
                    </div>
                    <div className="customer-info">
                      <div className="icons">"</div>
                      <div className="name">bao bao</div>
                      <div className="description">An ice cream sundae would never be seen topless. And a bowl of oatmeal would an bore you back seen never be oatmeal would seen.</div>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="customer">
                    <div className="gamba-circles-2">
                      <div className="circle" />
                      <div className="circle" />
                      <div className="circle" />
                      <div className="circle" />
                    </div>
                    <div className="customer-info">
                      <div className="icons">"</div>
                      <div className="name">Kwon Ji Yong</div>
                      <div className="description">An ice cream sundae would never be seen topless. And a bowl of oatmeal would an bore you back seen never be oatmeal would seen.</div>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="customer">
                    <div className="gamba-circles-2">
                      <div className="circle" />
                      <div className="circle" />
                      <div className="circle" />
                      <div className="circle" />
                    </div>
                    <div className="customer-info">
                      <div className="icons">"</div>
                      <div className="name">Sandara Park </div>
                      <div className="description">An ice cream sundae would never be seen topless. And a bowl of oatmeal would an bore you back seen never be oatmeal would seen.</div>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="customer">
                    <div className="gamba-circles-2">
                      <div className="circle" />
                      <div className="circle" />
                      <div className="circle" />
                      <div className="circle" />
                    </div>
                    <div className="customer-info">
                      <div className="icons">"</div>
                      <div className="name">bao tuan</div>
                      <div className="description">An ice cream sundae would never be seen topless. And a bowl of oatmeal would an bore you back seen never be oatmeal would seen.</div>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="customer">
                    <div className="gamba-circles-2">
                      <div className="circle" />
                      <div className="circle" />
                      <div className="circle" />
                      <div className="circle" />
                    </div>
                    <div className="customer-info">
                      <div className="icons">"</div>
                      <div className="name">tuan duy</div>
                      <div className="description">An ice cream sundae would never be seen topless. And a bowl of oatmeal would an bore you back seen never be oatmeal would seen.</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="blogs padding-top-100 padding-bottom-100">
            <div className="container">
              <div className="main-titles">
                <h1 className="title">our blog</h1></div>
              <div className="main-content">
                <div className="grid-block-1">
                  <div className="block-left">
                    <div className="grid-item">
                      <div className="block-1">
                        <div className="block-image"><img src="/assets/images/news/image-1.jpg" alt className="img-full" />
                          <a href="blog-detail.html" className="link" />
                        </div>
                        <div className="block-content"><a href="blog-detail.html" className="title">50 Foods That Are Super Healthy</a>
                          <div className="author">
                            <p className="text">posted by</p><a href="#" className="link">Sandara Park</a></div>
                          <div className="description">
                            <p className="text">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci
                              tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.</p>
                          </div><a href="#" className="readmore"><span className="text">read more</span><i className="icons fa fa-long-arrow-right"> </i></a>
                          <div className="block-info">
                            <div className="info-left">
                              <div className="block"><i className="icons fa fa-calendar-o"> </i><a href="#" className="link">25.07.2016</a></div>
                            </div>
                            <div className="info-right">
                              <div className="block"><i className="icons fa fa-comment"> </i><a href="#" className="link">26</a></div>
                              <div className="block"><i className="icons fa fa-share-alt" /><a href="#" className="link">17</a></div>
                              <div className="block"><i className="icons fa fa-heart" /><a href="#" className="link">70</a></div>
                            </div>
                            <div className="clearfix" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="block-right">
                    <div className="grid-item">
                      <div className="block-2">
                        <div className="block-image"><img src="/assets/images/news/image-3.jpg" alt className="img-full" />
                          <a href="blog-detail.html" className="link" />
                        </div>
                        <div className="block-content"><a href="blog-detail.html" className="title">50 Foods That Are Super Healthy</a>
                          <div className="author">
                            <p className="text">posted by</p><a href="#" className="link">Sandara Park</a></div>
                          <div className="description">
                            <p className="text">An ice cream sundae would never be seen topless. And a bowl of oatmeal would an bore you back.</p>
                          </div><a href="#" className="readmore"><span className="text">read more</span><i className="icons fa fa-long-arrow-right" /></a></div>
                      </div>
                    </div>
                    <div className="grid-item">
                      <div className="block-2">
                        <div className="block-image"><img src="/assets/images/news/image-4.jpg" alt className="img-full" />
                          <a href="blog-detail.html" className="link" />
                        </div>
                        <div className="block-content"><a href="blog-detail.html" className="title">50 Foods That Are Super Healthy</a>
                          <div className="author">
                            <p className="text">posted by</p><a href="#" className="link">Sandara Park</a></div>
                          <div className="description">
                            <p className="text">An ice cream sundae would never be seen topless. And a bowl of oatmeal would an bore you back.</p>
                          </div><a href="#" className="readmore"><span className="text">read more</span><i className="icons fa fa-long-arrow-right" /></a></div>
                      </div>
                    </div>
                    <div className="grid-item">
                      <div className="block-2">
                        <div className="block-image"><img src="/assets/images/news/image-2.jpg" alt className="img-full" />
                          <a href="blog-detail.html" className="link" />
                        </div>
                        <div className="block-content"><a href="blog-detail.html" className="title">50 Foods That Are Super Healthy</a>
                          <div className="author">
                            <p className="text">posted by</p><a href="#" className="link">Sandara Park</a></div>
                          <div className="description">
                            <p className="text">An ice cream sundae would never be seen topless. And a bowl of oatmeal would an bore you back.</p>
                          </div><a href="#" className="readmore"><span className="text">read more</span><i className="icons fa fa-long-arrow-right" /></a></div>
                      </div>
                    </div>
                  </div>
                  <div className="clearfix" />
                </div>
                <div className="wrapper-btn margin-top-70"><a href="#" className="btn">Xem thêm</a></div>
              </div>
            </div>
          </section>
        </div>
      </div>
    );
  }
}

export default Home;
