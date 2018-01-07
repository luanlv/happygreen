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
import moment from 'moment'

class Home extends React.Component {

  componentDidMount () {
    // init();
  }

  render() {
    let [firstNews, ...restNews] = this.props.data.recentNews.value;
    let productCategories = this.props.data.productCategories.value;
    let recentProduct = this.props.data.recentProduct.value;
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

                {/*<div className="gallery-nav">*/}
                  {/*<ul className="tab-filter tab-menu">*/}
                    {/*{productCategories.map(el => {*/}
                      {/*return (*/}
                        {/*<li data-filter={`.${el.slug}`} data-category={el.slug} className="tab active">*/}
                          {/*<div className="link">{el.title}</div>*/}
                        {/*</li>*/}
                      {/*)*/}
                    {/*})}*/}

                  {/*</ul>*/}
                {/*</div>*/}

                <div className="gallery-grid">
                  {recentProduct.map(el => {
                    return (
                      <div className="grid-item">
                        <div className="block-4">
                          <div className="block-image"><img src={el.coverUrl} alt className="img-full" />
                            <a href={`/sp/${el.slug}`} className="link" />
                          </div>
                          <div className="block-content"><a href="#" className="title">{el.title}</a>
                            <div className="prices-wrapper">
                              <div className="prices"><span className="number">{el.price.toLocaleString()}</span><sup>đ</sup></div><span className="unit">/kg</span></div>
                            <ul className="list-icons">
                              <li><a href="#" className="link"><i className="icons fa fa-cart-plus" /></a></li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    )
                  })}
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
          {/* our team*/}
          <section className="our-team padding-top-100 padding-bottom-100">
            <div className="container">
              <div className="main-titles">
                <h1 className="title">meet the family</h1></div>
              <div className="main-content">
                <div className="grid-block-2">
                  <div className="grid-item grid-1">
                    <div className="block-3">
                      <div className="block-image"><img src="/assets/images/teams/1.jpg" alt className="img-full" />
                        <a href="#" className="link" />
                      </div>
                      <div className="block-content"><a href="blog-detail.html" className="title">Nguyễn Thị Bảo Phương</a>
                        <div className="description">
                          <p className="text">We care about what you eat. We want to produce food which nourishes your body and tastes isaw delicious food which nourishes food</p>
                        </div>
                        <ul className="list-social">
                          <li><a href="#" className="link facebook"><i className="fa fa-facebook" /></a></li>
                          <li><a href="#" className="link twitter"><i className="fa fa-twitter" /></a></li>
                          <li><a href="#" className="link google"><i className="fa fa-google" /></a></li>
                          <li><a href="#" className="link instagram"><i className="fa fa-linkedin" /></a></li>
                        </ul><a href="#" className="btn btn-maincolor">view profile</a></div>
                    </div>
                  </div>
                  <div className="grid-item grid-2">
                    <div className="block-3 style-2">
                      <div className="block-content"><a href="blog-detail.html" className="title">Nguyễn Thị Bảo Phương</a>
                        <div className="description">
                          <p className="text">We care about what you eat. We want to produce food which nourishes your body and tastes isaw delicious food which nourishes food</p>
                        </div>
                        <ul className="list-social">
                          <li><a href="#" className="link facebook"><i className="fa fa-facebook" /></a></li>
                          <li><a href="#" className="link twitter"><i className="fa fa-twitter" /></a></li>
                          <li><a href="#" className="link google"><i className="fa fa-google" /></a></li>
                          <li><a href="#" className="link instagram"><i className="fa fa-linkedin" /></a></li>
                        </ul><a href="#" className="btn btn-maincolor">view profile</a></div>
                      <div className="block-image"><img src="/assets/images/teams/2.jpg" alt className="img-full" />
                        <a href="#" className="link" />
                      </div>
                    </div>
                  </div>
                  <div className="grid-item grid-2">
                    <div className="block-3 style-2">
                      <div className="block-image"><img src="/assets/images/teams/3.jpg" alt className="img-full" />
                        <a href="#" className="link" />
                      </div>
                      <div className="block-content"><a href="blog-detail.html" className="title">Nguyễn Thị Bảo Phương</a>
                        <div className="description">
                          <p className="text">We care about what you eat. We want to produce food which nourishes your body and tastes isaw delicious food which nourishes food</p>
                        </div>
                        <ul className="list-social">
                          <li><a href="#" className="link facebook"><i className="fa fa-facebook" /></a></li>
                          <li><a href="#" className="link twitter"><i className="fa fa-twitter" /></a></li>
                          <li><a href="#" className="link google"><i className="fa fa-google" /></a></li>
                          <li><a href="#" className="link instagram"><i className="fa fa-linkedin" /></a></li>
                        </ul><a href="#" className="btn btn-maincolor">view profile</a></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* Banner 2*/}
          <section className="banner banner-2">
            <div className="container">
              <div className="row">
                <div className="col-lg-8 col-lg-offset-4">
                  <div data-parallax="{&quot;y&quot;: 150}" className="banner-text-wrapper">
                    <h2 className="title">From The <span className="main-color">Best Farm</span> To Your Table</h2>
                    <h5 className="subtitle">summer sale</h5>
                    <p className="description">start now</p>
                    <div className="prices"><span className="text-1">50%</span><span className="text-2">off</span></div><a href="#" className="btn btn-maincolor">show now</a></div>
                </div>
              </div>
            </div>
          </section>
          {/* Blogs*/}
          <section className="blogs padding-top-100 padding-bottom-100">
            <div className="container">
              <div className="main-titles">
                <h1 className="title">our blog</h1></div>
              <div className="main-content">
                <div className="grid-block-1">

                  <div className="block-left">
                    <div className="grid-item">

                      {firstNews && <div className="block-1">
                        <div className="block-image"><img src={firstNews.coverUrl} alt className="img-full" />
                          <a href="blog-detail.html" className="link" />
                        </div>
                        <div className="block-content"><a href={`/p/${firstNews.slug}`} className="title">{firstNews.title}</a>
                          <div className="author">
                            <p className="text">posted by</p><a href="#" className="link">Sandara Park</a></div>
                          <div className="description">
                            <p className="text">
                              {firstNews.description}
                            </p>
                          </div><a href={`/p/${firstNews.slug}`} className="readmore"><span className="text">Chi tiết</span><i className="icons fa fa-long-arrow-right"> </i></a>
                          <div className="block-info">
                            <div className="info-left">
                              <div className="block"><i className="icons fa fa-calendar-o"> </i>{moment(firstNews.created_at).format('DD/MM/YYYY')}</div>
                            </div>
                            <div className="clearfix" />
                          </div>
                        </div>
                      </div>}

                    </div>
                  </div>

                  <div className="block-right">
                    {restNews.map(tintuc => {
                      return (
                        <div className="grid-item">
                          <div className="block-2">
                            <div className="block-image"><img src={tintuc.coverUrl} alt className="img-full" />
                              <a href={`/p/${tintuc.slug}`} className="link" />
                            </div>
                            <div className="block-content"><a href="blog-detail.html" className="title">{tintuc.title}</a>
                              <div className="description">
                                <p className="text">
                                  {tintuc.description}
                                </p>
                              </div><a href={`/p/${tintuc.slug}`} className="readmore"><span className="text">Chi tiết</span><i className="icons fa fa-long-arrow-right" /></a></div>
                          </div>
                        </div>
                      )
                    })}
                  </div>
                  <div className="clearfix" />
                </div>
                <div className="wrapper-btn margin-top-70"><a href="/tin-tuc" className="btn">Xem thêm</a></div>

              </div>
            </div>
          </section>
        </div>
      </div>
    );
  }
}

export default Home;
