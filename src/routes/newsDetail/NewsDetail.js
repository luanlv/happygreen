import React from 'react';
import Link from '../../components/Link'
import {Title, BreadCrumb} from './components'
import moment from 'moment'

class NewsDetail extends React.Component {
  render() {

    const news = this.props.data.news.value
    const recentNews = this.props.data.recentNews.value
    const categories = this.props.data.categories.value

    return (
      <div>
        <div className="main-contents">
          {/* Breadcrumb*/}
          <section className="banner blog-detail">
            <div className="container">
              <div className="morepage-banner">
                <h2 className="title">{news.title}</h2>
              </div>
            </div>
          </section>
          <div className="page-main padding-top-100 padding-bottom-100">
            <div className="container">
              <div className="row">
                <div className="col-md-8 col-xs-12 main-left">
                  <div className="blog-detail-wrapper">
                    <div className="content-wrapper">
                      <div className="title">{news.title}</div>
                      <div className="block-info">
                        <div className="block"><i className="icons fa fa-calendar-o"> </i><a href="#" className="link">{moment(news.created_at).format('DD/MM/YYYY')}</a></div>
                      </div>
                      <div className="description"
                           dangerouslySetInnerHTML={{__html: news.body}}
                      >
                      </div>
                    </div>

                  </div>
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
                    <div className="recent-post-widget widget">
                      <div className="title-widget">Bài viết mới</div>
                      <div className="content-widget">
                        <div className="recent-post-list">
                          {recentNews.map((tintuc, idx) => {
                            return (
                              <div className="single-recent-post-widget" key={idx}>
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
                          {categories.map(danhmuc => {
                            return (
                              <li className="single-widget-item"><a href={`/danh-muc/${danhmuc.slug}`} className="link"><span className="fa-custom category">{danhmuc.title}</span></a></li>
                            )
                          })}
                        </ul>
                      </div>
                    </div>


                  </div>
                  <div className="col-2">
                    <div className="gallery-widget widget">
                      <div className="title-widget">from gallery</div>
                      <div className="content-widget">
                        <ul className="list-unstyled list-inline">
                          <li>
                            <a href="/assets/images/news/image-5.jpg" data-fancybox-group="gallery" className="thumb fancybox"><img src="/assets/images/news/image-5.jpg" alt="gallery image 1" className="img-responsive" /></a>
                          </li>
                          <li>
                            <a href="/assets/images/news/image-2.jpg" data-fancybox-group="gallery" className="thumb fancybox"><img src="/assets/images/news/image-2.jpg" alt="gallery image 2" className="img-responsive" /></a>
                          </li>
                          <li>
                            <a href="/assets/images/news/image-7.jpg" data-fancybox-group="gallery" className="thumb fancybox"><img src="/assets/images/news/image-7.jpg" alt="gallery image 3" className="img-responsive" /></a>
                          </li>
                          <li>
                            <a href="/assets/images/news/image-8.jpg" data-fancybox-group="gallery" className="thumb fancybox"><img src="/assets/images/news/image-8.jpg" alt="gallery image 4" className="img-responsive" /></a>
                          </li>
                          <li>
                            <a href="/assets/images/news/image-6.jpg" data-fancybox-group="gallery" className="thumb fancybox"><img src="/assets/images/news/image-6.jpg" alt="gallery image 5" className="img-responsive" /></a>
                          </li>
                          <li>
                            <a href="/assets/images/news/image-9.jpg" data-fancybox-group="gallery" className="thumb fancybox"><img src="/assets/images/news/image-9.jpg" alt="gallery image 6" className="img-responsive" /></a>
                          </li>
                          <li>
                            <a href="/assets/images/news/image-4.jpg" data-fancybox-group="gallery" className="thumb fancybox"><img src="/assets/images/news/image-4.jpg" alt="gallery image 7" className="img-responsive" /></a>
                          </li>
                          <li>
                            <a href="/assets/images/news/image-11.jpg" data-fancybox-group="gallery" className="thumb fancybox"><img src="/assets/images/news/image-11.jpg" alt="gallery image 8" className="img-responsive" /></a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="social-widget widget">
                      <div className="title-widget">social</div>
                      <div className="content-widget">
                        <ul className="list-unstyled list-inline">
                          <li>
                            <a href="https://fb.com/happygreen.vn" className="social-icon fa fa-facebook" />
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
