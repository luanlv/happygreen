import React from 'react';
import Link from '../../components/Link'
import {Title, BreadCrumb} from './components'

class NewsDetail extends React.Component {
  render() {

    const product = this.props.data.product.value
    // const recentNews = this.props.data.recentNews.value
    const productRelative = this.props.data.productRelative.value
    const categories = this.props.data.categories.value

    return (
      <div>
        <div className="main-contents">
          {/* Breadcrumb*/}
          <section className="banner shop-detail">
            <div className="container">
              <div className="morepage-banner">
                <h2 className="title">{product.title}</h2>
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
                        <div className="image-wrapper"><img src={product.coverUrl} alt className="img-responsive" /></div>
                      </div>
                    </div>

                  </div>
                </div>
                <div className="col-md-6 col-xs-12">
                  <div className="info-detail">
                    <div className="title">
                      <h1>{product.title}</h1></div>
                    <div className="prices-wrapper">
                      <div className="prices"><span className="number">{product.price.toLocaleString()}</span><sup>đ</sup></div><span className="unit">/kg</span></div>
                    <div className="discription"
                      dangerouslySetInnerHTML={{__html: product.body }}
                    />
                    <div className="shopping-cart">
                      <div className="quantity">
                        {/*input.minus.button.is-form(type='button', value='-')*/}
                        <div className="quantity-button quantity-down"><i className="glyphicon glyphicon-minus" /></div><input type="number" step={1} min={0} max={999} defaultValue={1} className="input-text qty text" />
                        <div className="quantity-button quantity-up"><i className="glyphicon glyphicon-plus" /></div>
                        {/*input.plus.button.is-form(type='button', value='+')*/}
                      </div>
                    </div>
                    <div className="btn-addtocart"><button type="submit" className="btn btn-maincolor">Thêm vào rỏ hàng</button></div>
                  </div>
                </div>
              </div>
              <div className="row padding-top-100">
                <div className="col-xs-12">
                  <div className="our-product">
                    <div className="main-titles">
                      <h1 className="title">Các sản phẩm khác</h1></div>
                    <div className="main-content">
                      <div className="our-product-list">
                        {productRelative.map((p, idx) => {
                          return (
                            <div className="item" key={idx}>
                              <div className="block-4">
                                <div className="block-image"><img src={p.coverUrl} alt className="img-full" />
                                  <a href={`/sp/${p.slug}`} className="link" />
                                </div>
                                <div className="block-content"><a href={`/sp/${p.slug}`}  className="title">{p.title}</a>
                                  <div className="prices-wrapper">
                                    <div className="prices"><span className="number">{p.price.toLocaleString()}</span><sup>$</sup></div><span className="unit">/kg</span></div>
                                  <ul className="list-icons">
                                    <li><a href="#" className="link"><i className="icons fa fa-cart-plus" /></a></li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          )
                        })}
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
