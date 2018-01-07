import React from 'react';

import {Title, BreadCrumb} from './components'
import moment from 'moment'

class About extends React.Component {

  render() {
    let recentNews = this.props.data.recentNews.value
    let allProducts = this.props.data.allProducts.value
    return (
      <div>
        <div className="main-contents">
          {/* Breadcrumb*/}
          <section className="banner shop">
            <div className="container">
              <div className="morepage-banner">
                <h2 className="title">Happy Green Market</h2>
              </div>
            </div>
          </section>
          <section className="page-main padding-top-100 padding-bottom-100">
            <div className="container">
              <div className="row">
                <div className="col-md-8 col-xs-12 main-left">
                  <div className="list-block column-2">
                    {allProducts.map((p, idx) => {
                      return (
                        <div className="item" key={idx}>
                          <div className="block-4">
                            <div className="block-image"><img src={p.coverUrl} alt className="img-full" />
                              <a href={`/sp/${p.slug}`} className="link" />
                            </div>
                            <div className="block-content"><a href="#" className="title">{p.title}</a>
                              <div className="prices-wrapper">
                                <div className="prices"><span className="number">{p.price.toLocaleString()}</span><sup>đ</sup></div><span className="unit">/kg</span></div>
                              <ul className="list-icons">
                                <li><a href="#" className="link"><i className="icons fa fa-cart-plus" /></a></li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      )
                    })}
                  </div>
                  <nav className="pagination-list margin-top-70">
                    <ul className="pagination">
                      <li><a href="#" aria-label="Previous" className="btn-pagination previous"><span aria-hidden="true" className="fa fa-angle-left" /></a></li>
                      <li><a href="#" className="btn-pagination active">01</a></li>
                      <li><a href="#" className="btn-pagination">02</a></li>
                      <li><a href="#" className="btn-pagination">...</a></li>
                      <li><a href="#" className="btn-pagination">09</a></li>
                      <li><a href="#" aria-label="Next" className="btn-pagination next"><span aria-hidden="true" className="fa fa-angle-right" /></a></li>
                    </ul>
                  </nav>
                </div>
                <div className="col-md-4 col-xs-12 sidebar">
                  <div className="col-1">
                    <div className="search-widget widget">
                      <form>
                        <div className="input-group search-wrapper"><input type="text" placeholder="Search..." className="search-input form-control" /><span className="input-group-btn"><button type="submit" className="btn submit-btn"><span className="fa fa-search" /></button>
                  </span>
                        </div>
                      </form>
                    </div>
                  </div>
                  <div className="col-2">
                    <div className="categories-widget widget">
                      <div className="title-widget">categories</div>
                      <div className="content-widget">
                        <ul className="widget-list">
                          <li className="single-widget-item"><a href="#" className="link"><span className="fa-custom category">all</span><span className="count">27</span></a></li>
                          <li className="single-widget-item"><a href="#" className="link"><span className="fa-custom category">Vagetables</span><span className="count">75</span></a></li>
                          <li className="single-widget-item"><a href="#" className="link"><span className="fa-custom category">Juices</span><span className="count">35</span></a></li>
                          <li className="single-widget-item"><a href="#" className="link"><span className="fa-custom category">Dried Products</span><span className="count">34</span></a></li>
                          <li className="single-widget-item"><a href="#" className="link"><span className="fa-custom category">Other</span><span className="count">65</span></a></li>
                        </ul>
                      </div>
                    </div>
                    <div className="recent-post-widget widget">
                      <div className="title-widget">Bài viết</div>
                      <div className="content-widget">
                        <div className="recent-post-list">
                          {recentNews.map((el, idx) => {
                            return (
                              <div className="single-recent-post-widget" key={idx}>
                                <a href={`/p/${el.slug}`} className="thumb img-wrapper"><img src={el.coverUrl} alt /></a>
                                <div className="post-info">
                                  <div className="meta-info"><span>{moment(el.created_at).format('DD/MM/YYYY')}</span></div>
                                  <div className="description">{el.title}</div>
                                </div>
                              </div>
                            )
                          })}

                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-2">

                    <div className="social-widget widget">
                      <div className="title-widget">social</div>
                      <div className="content-widget">
                        <ul className="list-unstyled list-inline">
                          <li>
                            <a target="_blank" href="https://fb.com/happygreen.vn" className="social-icon fa fa-facebook" />
                          </li>

                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>

      </div>
    );
  }
}

export default About