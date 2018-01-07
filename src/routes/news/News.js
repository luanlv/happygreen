import React from 'react';
import Link from '../../components/Link'
import moment from 'moment'
// import {Title, BreadCrumb} from './components'

class News extends React.Component {
  render() {
    let news = this.props.data.allNews.value
    let recentNews = this.props.data.recentNews.value
    let categories = this.props.data.categories.value

    let category = undefined

    if(this.props.slug){
      category = categories.find(p => p.slug === this.props.slug)
    }

    return (
      <div className="main-contents">
        <section className="banner blog">
          <div className="container">
            <div className="morepage-banner">
              {!this.props.slug && <h2 className="title">Trang tin tức</h2>}
              {this.props.slug && <h2 className="title">{category.title}</h2>}
            </div>
          </div>
        </section>
        <div className="page-main padding-top-100 padding-bottom-100">
          <div className="container">
            <div className="row">
              <div className="col-md-8 col-xs-12 main-left">
                <div className="blog-masonry">
                  {news.map(tintuc => {
                    return (
                      <div className="item">
                        <div className="block-1">
                          <div className="block-image">
                            <img src={tintuc.coverUrl} alt className="img-full" />
                            <a href={'/p/' + tintuc.slug} className="link" />
                          </div>
                          <div className="block-content"><a href={'/p/' + tintuc.slug} className="title">{tintuc.title}</a>

                            <div className="description">
                              <p className="text">
                                {tintuc.description}
                              </p>
                            </div><a href={'/p/' + tintuc.slug} className="readmore"><span className="text">Đọc thêm</span><i className="icons fa fa-long-arrow-right"> </i></a>
                            <div className="block-info">
                              <div className="info-left">
                                <div className="block"><i className="icons fa fa-calendar-o"> </i>{moment(tintuc.created_at).format('DD/MM/YYYY')}</div>
                              </div>
                            </div>
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
                <div className="col-2">
                  <div className="recent-post-widget widget">
                    <div className="title-widget">Bài viết mới</div>
                    <div className="content-widget">
                      <div className="recent-post-list">
                        {recentNews.map(tintuc => {
                          return (
                            <div className="single-recent-post-widget">
                              <a href={`/p/${tintuc.slug}`} className="thumb img-wrapper"><img src={tintuc.coverUrl} alt="" /></a>
                              <div className="post-info">
                                <div className="meta-info"><span>{moment(tintuc.created_at).format('DD/MM/YYYY')}</span></div>
                                <a href={`/p/${tintuc.slug}`}>
                                <div className="description">

                                     {tintuc.title}

                                </div>
                                </a>
                              </div>
                            </div>
                          )
                        })}
                      </div>
                    </div>
                  </div>

                  <div className="categories-widget widget">
                    <div className="title-widget">Danh mục</div>
                    <div className="content-widget">
                      <ul className="widget-list">
                        <li className="single-widget-item"><a href={`/tin-tuc`} className="link"><span className="fa-custom category">Tổng hợp</span></a></li>
                        {categories.map(danhmuc => {
                          return (
                            <li className="single-widget-item"><a href={`/tin-tuc/${danhmuc.slug}`} className="link"><span className="fa-custom category">{danhmuc.title}</span></a></li>
                          )
                        })}
                      </ul>
                    </div>
                  </div>

                </div>
                <div className="col-2">

                  <div className="gallery-widget widget">
                    <div className="title-widget">Thư viện ảnh</div>
                    <div className="content-widget">
                      <ul className="list-unstyled list-inline">
                        <li>
                          <a href="assets/images/news/image-5.jpg" data-fancybox-group="gallery" className="thumb fancybox"><img src="assets/images/news/image-5.jpg" alt="gallery image 1" className="img-responsive" /></a>
                        </li>
                        <li>
                          <a href="assets/images/news/image-2.jpg" data-fancybox-group="gallery" className="thumb fancybox"><img src="assets/images/news/image-2.jpg" alt="gallery image 2" className="img-responsive" /></a>
                        </li>
                        <li>
                          <a href="assets/images/news/image-7.jpg" data-fancybox-group="gallery" className="thumb fancybox"><img src="assets/images/news/image-7.jpg" alt="gallery image 3" className="img-responsive" /></a>
                        </li>
                        <li>
                          <a href="assets/images/news/image-8.jpg" data-fancybox-group="gallery" className="thumb fancybox"><img src="assets/images/news/image-8.jpg" alt="gallery image 4" className="img-responsive" /></a>
                        </li>
                        <li>
                          <a href="assets/images/news/image-6.jpg" data-fancybox-group="gallery" className="thumb fancybox"><img src="assets/images/news/image-6.jpg" alt="gallery image 5" className="img-responsive" /></a>
                        </li>
                        <li>
                          <a href="assets/images/news/image-9.jpg" data-fancybox-group="gallery" className="thumb fancybox"><img src="assets/images/news/image-9.jpg" alt="gallery image 6" className="img-responsive" /></a>
                        </li>
                        <li>
                          <a href="assets/images/news/image-4.jpg" data-fancybox-group="gallery" className="thumb fancybox"><img src="assets/images/news/image-4.jpg" alt="gallery image 7" className="img-responsive" /></a>
                        </li>
                        <li>
                          <a href="assets/images/news/image-11.jpg" data-fancybox-group="gallery" className="thumb fancybox"><img src="assets/images/news/image-11.jpg" alt="gallery image 8" className="img-responsive" /></a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="social-widget widget">
                    <div className="title-widget">social</div>
                    <div className="content-widget">
                      <ul className="list-unstyled list-inline">
                        <li>
                          <a href="javascript:void(0)" className="social-icon fa fa-facebook" />
                        </li>
                        <li>
                          <a href="javascript:void(0)" className="social-icon fa fa-google" />
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
    );
  }
}
//
// function findCategoryBySlug(slug, categories) {
//   for (let i = 0; i < categories.length; i++){
//     if(categories[i].slug === slug) {
//       return categories[i]
//     }
//   }
//   return {slug:'/', title: 'Không tồn tại'}
// }

export default News
