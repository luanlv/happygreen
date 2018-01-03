import React from 'react';
import Link from '../../components/Link'
import {Title, BreadCrumb} from './components'

class NewsDetail extends React.Component {
  render() {

    const news = this.props.data.news.value
    const recentNews = this.props.data.recentNews.value
    const categories = this.props.data.categories.value

    return (
      <div>
        <div className="main-contents">
          {/* Breadcrumb*/}
          <section className="banner shop-detail">
            <div className="container">
              <div className="morepage-banner">
                <h2 className="title">Shop detail</h2>
              </div>
            </div>
          </section>
          <div className="page-shop-detail padding-top-100 padding-bottom-100">
            <div className="container">
              <div className="row">
                <div className="col-md-6 col-xs-12">
                  <div className="shop-img-wrapper">
                    <div className="slider-for">
                      <div className="item">
                        <div className="image-wrapper"><img src="/assets/images/products/shopdetail-01.jpg" alt className="img-responsive" /></div>
                      </div>
                      <div className="item">
                        <div className="image-wrapper"><img src="/assets/images/products/shopdetail-01.jpg" alt className="img-responsive" /></div>
                      </div>
                      <div className="item">
                        <div className="image-wrapper"><img src="/assets/images/products/shopdetail-01.jpg" alt className="img-responsive" /></div>
                      </div>
                      <div className="item">
                        <div className="image-wrapper"><img src="/assets/images/products/shopdetail-01.jpg" alt className="img-responsive" /></div>
                      </div>
                      <div className="item">
                        <div className="image-wrapper"><img src="/assets/images/products/shopdetail-01.jpg" alt className="img-responsive" /></div>
                      </div>
                      <div className="item">
                        <div className="image-wrapper"><img src="/assets/images/products/shopdetail-01.jpg" alt className="img-responsive" /></div>
                      </div>
                    </div>
                    <div className="slider-nav">
                      <div className="item">
                        <div className="image-wrapper"><img src="/assets/images/products/shopdetail-nav-01.jpg" alt className="img-responsive" /></div>
                      </div>
                      <div className="item">
                        <div className="image-wrapper"><img src="/assets/images/products/shopdetail-nav-02.jpg" alt className="img-responsive" /></div>
                      </div>
                      <div className="item">
                        <div className="image-wrapper"><img src="/assets/images/products/shopdetail-nav-03.jpg" alt className="img-responsive" /></div>
                      </div>
                      <div className="item">
                        <div className="image-wrapper"><img src="/assets/images/products/shopdetail-nav-04.jpg" alt className="img-responsive" /></div>
                      </div>
                      <div className="item">
                        <div className="image-wrapper"><img src="/assets/images/products/shopdetail-nav-01.jpg" alt className="img-responsive" /></div>
                      </div>
                      <div className="item">
                        <div className="image-wrapper"><img src="/assets/images/products/shopdetail-nav-02.jpg" alt className="img-responsive" /></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-xs-12">
                  <div className="info-detail">
                    <div className="title">
                      <h1>Broccoli</h1></div>
                    <fieldset className="rating"><input id="star5" type="radio" name="rating" defaultValue={5} /><label htmlFor="star5" title="5 stars" className="full" /><input id="star4half" type="radio" name="rating" defaultValue="4 and a half" /><label htmlFor="star4half" title="4.5 stars" className="half" /><input id="star4" type="radio" name="rating" defaultValue={4} /><label htmlFor="star4" title="4 stars" className="full" /><input id="star3half" type="radio" name="rating" defaultValue="3 and a half" defaultChecked="checked" />
                      <label htmlFor="star3half" title="3.5 stars" className="half" /><input id="star3" type="radio" name="rating" defaultValue={3} /><label htmlFor="star3" title="3 stars" className="full" /><input id="star2half" type="radio" name="rating" defaultValue="2 and a half" /><label htmlFor="star2half" title="2.5 stars" className="half" /><input id="star2" type="radio" name="rating" defaultValue={2} /><label htmlFor="star2" title="2 stars" className="full" /><input id="star1half" type="radio" name="rating" defaultValue="1 and a half" />
                      <label htmlFor="star1half" title="1.5 stars" className="half" /><input id="star1" type="radio" name="rating" defaultValue={1} /><label htmlFor="star1" title="1 star" className="full" /><input id="starhalf" type="radio" name="rating" defaultValue="half" /><label htmlFor="starhalf" title="0.5 stars" className="half" /></fieldset>
                    <div className="prices-wrapper">
                      <div className="prices prices-discount"><sup>$</sup><span className="number">70</span></div>
                      <div className="prices"><sup>$</sup><span className="number">46</span></div><span className="unit">/kg</span></div>
                    <div className="discription">
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed varius ultricies eli metus. Donec ac ex porta libero venenatis sodales. Sed varius ultricies eli metus. Donec ac ex porta libero venenatis sodales
                        lorem ipsum dolor sit amet.</p>
                    </div>
                    <ul className="list-info">
                      <li>Categories:<span className="categories">Vegetable</span></li>
                      <li>Tag:<span className="tag"><a href="#">Vegetable</a><a href="#">Organic</a><a href="#">Healthy</a></span></li>
                      <li>Expire Date:<span className="expire-day">20-07-2017</span></li>
                      <li className="list-social">Share:
                        <ul>
                          <li><a href="#" className="link facebook"><i className="fa fa-facebook" /></a></li>
                          <li><a href="#" className="link twitter"><i className="fa fa-twitter" /></a></li>
                          <li><a href="#" className="link google"><i className="fa fa-google" /></a></li>
                          <li><a href="#" className="link instagram"><i className="fa fa-linkedin" /></a></li>
                        </ul>
                      </li>
                    </ul>
                    <div className="shopping-cart">
                      <div className="quantity">
                        {/*input.minus.button.is-form(type='button', value='-')*/}
                        <div className="quantity-button quantity-down"><i className="glyphicon glyphicon-minus" /></div><input type="number" step={1} min={0} max={999} defaultValue={1} className="input-text qty text" />
                        <div className="quantity-button quantity-up"><i className="glyphicon glyphicon-plus" /></div>
                        {/*input.plus.button.is-form(type='button', value='+')*/}
                      </div>
                    </div>
                    <div className="btn-addtocart"><button type="submit" className="btn btn-maincolor">ADD TO CART</button></div>
                    <div className="btn-addtocwishlish"><button type="submit" className="btn btn-maincolor">ADD TO WISHLISH</button></div>
                  </div>
                </div>
              </div>
              <div className="row padding-top-100">
                <div className="information-tab col-xs-12">
                  <ul role="tablist" className="nav nav-tabs">
                    <li role="presentation" className="active"><a href="#tab-1" aria-controls="tab-1" role="tab" data-toggle="tab">Discription</a></li>
                    <li role="presentation"><a href="#tab-2" aria-controls="tab-2" role="tab" data-toggle="tab">Review<div className="number-review">2</div></a></li>
                  </ul>
                  {/* Tab panes*/}
                  <div className="tab-content">
                    <div id="tab-1" role="tabpanel" className="tab-pane fade in active">
                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                        ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
                        mollit anim id est laborum.</p>
                      <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
                        Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia
                        dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>
                    </div>
                    <div id="tab-2" role="tabpanel" className="tab-pane fade">
                      <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
                        Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia
                        dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>
                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                        ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
                        mollit anim id est laborum.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row padding-top-100">
                <div className="col-xs-12">
                  <div className="our-product">
                    <div className="main-titles">
                      <h1 className="title">You may also like</h1></div>
                    <div className="main-content">
                      <div className="our-product-list">
                        <div className="item">
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
                        <div className="item">
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
                        <div className="item">
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
                        <div className="item">
                          <div className="block-4">
                            <div className="block-image"><img src="/assets/images/products/image-13.png" alt className="img-full" />
                              <a href="blog-detail.html" className="link" />
                            </div>
                            <div className="block-content"><a href="#" className="title">tomato</a>
                              <div className="prices-wrapper">
                                <div className="prices"><sup>$</sup><span className="number">34.00</span></div><span className="unit">/kg</span></div>
                              <ul className="list-icons">
                                <li><a href="#" className="link"><i className="icons fa fa-cart-plus" /></a></li>
                                <li><a href="#" className="link"><i className="icons fa fa-heart" /></a></li>
                                <li><a href="#" className="link"><i className="icons fa fa-share-alt" /></a></li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        <div className="item">
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
                        <div className="item">
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
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    );
  }
}


function findCategoryBySlug(slug, categories) {
  for (let i = 0; i < categories.length; i++){
    if(categories[i].slug === slug) {
      return categories[i]
    }
  }
  return {slug:'/', title: 'Không tồn tại'}
}

export default NewsDetail
