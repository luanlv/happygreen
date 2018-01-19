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
    let recentProduct = this.props.data.recentProduct.value
    let isEn = this.props.data && this.props.data.lang === 'en'
    return (
      <div>
        <div className="main-contents">
          {/* Slider*/}
          <section className="background-slide">
            <div className="slide-item">
              <img src="/assets/images/background-full/homepage-1.jpg" alt="" data-parallax="{&quot;y&quot;: 200}" className="img-responsive img-background" />
              <div className="container">
                <div className="homepage-banner-warpper">
                  <div className="homepage-banner-content">
                    <div className="group-title fadeInDown">
                      <h1 className="title">Happy Green</h1>
                      {!isEn  && <h2 className="subtitle">Tươi mỗi ngày</h2>}
                      {isEn  && <h2 className="subtitle">Fresh daily</h2>}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="about-us padding-top-100 padding-bottom-100">
            <div className="container">
              <div className="main-titles">
                {!isEn && <h2 className="title">Chào mừng đến với Happy Green</h2>}
                {isEn && <h2 className="title">Welcome to Happy Green</h2>}
              </div>
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
                        <h4 className="title">100% Tự nhiên</h4>
                        <p className="description">Happy Green mang đến
                          những thức rau củ quả
                          không sử dụng bất cứ
                          hàm lượng thuốc bảo
                          quản thực vật nào. Đảm
                          bảo độ tự nhiên tối đa cho
                          thực phẩm người dùng</p>
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
                        <h4 className="title">Luôn tươi</h4>
                        <p className="description">Happy Green cam kết
                          mang đến cho khách hàng
                          những thức dùng luôn
                          tươi và xanh. Những thực
                          phẩm được chọn lựa mỗi
                          ngày từ nhiều nguồn cung
                          cấp uy tín đảm bảo tươi
                          mới, xanh mơn đúng chất</p>
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
                        <h4 className="title">Quy chuẩn hữu cơ</h4>
                        <p className="description">Happy Green cung cấp
                          những sản phẩm đảm bảo
                          quy chuẩn hữu cơ nghiêm
                          ngặt. Áp dụng những quy
                          ước về hữu cơ nhằm
                          hướng đến đảm bảo an
                          toàn cho người tiêu dùng
                          và môi sinh</p>
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
                        <h4 className="title">Chất lượng tốt nhất</h4>
                        <p className="description">Happy Green nói không
                          với các mặt hàng thứ cấp.
                          Những thực phẩm bày
                          bán đã được chọn lọc kỹ
                          lưỡng từ những nhà cung
                          cấp uy tín. Những tiêu
                          chuẩn về tươi ngon và tốt
                          nhất cho sức khỏe được
                          chúng tôi đặt lên hàng đầu</p>
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
              <a href="/cua-hang">

                <div data-parallax="{&quot;y&quot;: 150}" className="banner-1-wrapper">
                <h3 className="subtitle">Chọn chất lượng</h3>
                <h2 className="title">Chọn Happy Green</h2>
                <p className="description">Chúng tôi cam kết đem
                  đến những sản phẩm tự
                  nhiên, tươi, xanh với tiêu
                  chuẩn chọn lựa nghiêm
                  ngặt</p>
                  {/*<a href="/cuar-hang" className="btn btn-maincolor">Mua sắm ngay!</a>*/}
                </div>
              </a>
            </div>
          </section>
          {/* Products*/}
          <section className="our-product padding-top-100 padding-bottom-100">
            <div className="container">
              <div className="main-titles">
                {!isEn && <h2 className="title">Sản phẩm</h2>}
                {isEn && <h2 className="title">Products</h2>}
              </div>
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
                  {recentProduct.map((el, idx) => {
                    return (
                      <div className="grid-item" key={idx}>
                        <div className="block-4">
                          <div className="block-image"><img src={el.coverUrl} alt className="img-full" />
                            <a href={`/sp/${el.slug}`} className="link" />
                          </div>
                          <div className="block-content"><a href="#" className="title">{el.title}</a>
                            <div className="prices-wrapper">
                              <div className="prices"><span className="number">{el.price.toLocaleString()}</span><sup>đ</sup></div><span className="unit">/kg</span></div>
                          </div>
                        </div>
                      </div>
                    )
                  })}
                </div>
                <div className="wrapper-btn margin-top-70"><a href="/cua-hang" className="btn">Xem thêm</a></div>
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
                {!isEn && <h1 className="title">Khách hàng tiêu biểu</h1>}
                {isEn && <h1 className="title">Happy customers</h1>}
              </div>
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
                      <div className="name">Bích Ngọc</div>
                      <div className="description">Perfect</div>
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
                      <div className="name">Võ Cường</div>
                      <div className="description">Đồ tươi ngon chất lượng</div>
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
                      <div className="name">Jorma Koponen</div>
                      <div className="description">5 sao cho chất lượng</div>
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
                      <div className="name">Kate Do</div>
                      <div className="description">5 sao cho chất lượng</div>
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
                      <div className="name">Hoài Duy</div>
                      <div className="description">Mại dzô mại dzô....hàng tốt
                        giá tốt....</div>
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
                {!isEn && <h1 className="title">Thành viên</h1>}
                {isEn && <h1 className="title">My Teams</h1>}
              </div>
              <div className="main-content">
                <div className="grid-item grid-2">
                  <div className="block-3 style-2">
                    <div className="block-content"><a href="blog-detail.html" className="title">NGUYỄN THỊ HOÀNG PHƯƠNG</a>
                      <div className="description">
                        <p className="text">We care about what you eat. We want to produce food which nourishes your body and tastes isaw delicious food which nourishes food</p>
                      </div>
                    </div>
                    <div className="block-image"><img src="/assets/images/teams/2.jpg" alt className="img-full" />
                      <a href="#" className="link" />
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
                    <h2 className="title">From The Best Farm To Your <span style={{color: 'red'}}>Tết</span></h2>
                    <h5 className="subtitle">Tết deal</h5>
                    <p className="description">Cho mùa tết trọn vẹn</p>
                    <div className="prices"><span className="text-1">5%</span><span className="text-2">off</span></div>
                    <a href="/cua-hang" className="btn btn-maincolor">Mua sắm ngay</a></div>
                </div>
              </div>
            </div>
          </section>
          {/* Blogs*/}
          <section className="blogs padding-top-100 padding-bottom-100">
            <div className="container">
              <div className="main-titles">
                {!isEn && <h2 className="title">Bài viết</h2>}
                {isEn && <h2 className="title">Post</h2>}
              </div>
              <div className="main-content">
                <div className="grid-block-1">

                  <div className="block-left">
                    <div className="grid-item">

                      {firstNews && <div className="block-1">
                        <div className="block-image"><img src={firstNews.coverUrl} alt className="img-full" />
                          <a href="blog-detail.html" className="link" />
                        </div>
                        <div className="block-content"><a href={`/p/${firstNews.slug}`} className="title">{firstNews.title}</a>
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
                    {restNews.map((tintuc, idx) => {
                      return (
                        <div className="grid-item" key={idx}>
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
