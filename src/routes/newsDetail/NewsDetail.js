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
          <section className="banner blog-detail">
            <div className="container">
              <div className="morepage-banner">
                <h2 className="title">Blog Single</h2>
                <ol className="breadcrumb">
                  <li><a href="index.html" className="link">Home</a></li>
                  <li><a href="blog.html" className="link">blog</a></li>
                  <li className="active"><a href="#" className="link">Blog Single</a></li>
                </ol>
              </div>
            </div>
          </section>
          <div className="page-main padding-top-100 padding-bottom-100">
            <div className="container">
              <div className="row">
                <div className="col-md-8 col-xs-12 main-left">
                  <div className="blog-detail-wrapper">
                    <div className="image-wrapper"><img src="/assets/images/news/news.jpg" alt className="images img-responsive" /></div>
                    <div className="content-wrapper">
                      <div className="title">Many people limit themselves what they think they can do.</div>
                      <div className="block-info">
                        <div className="block"><span className="title">posted by:</span><a href="#" className="link">john smith</a></div>
                        <div className="block"><i className="icons fa fa-calendar-o"> </i><a href="#" className="link">Aug 18, 2015</a></div>
                        <div className="block"><i className="icons fa fa-comment"> </i><a href="#" className="link">26</a></div>
                        <div className="block"><i className="icons fa fa-share-alt" /><a href="#" className="link">17</a></div>
                      </div>
                      <div className="description">
                        <p className="text">Donec sed odio dui. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Sed posuere consectetur est at lobortis. Nulla vitae elit libero, a pharetra augue. Donec
                          ullamcorper nulla non metus auctor fringilla. Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus id elit non mi porta gravida .</p>
                        <p className="text">Pellentesque ornare sem lacinia quam venenatis vestibulum. Aenean lacinia bibendum nulla sed consectetur.Cras mattis consectetur purus sit amet fermentum. Sed posuere consectetur est at lobortis. Nulla vitae
                          elit libero, a pharetra augue. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec id elit non mi porta at eget metus. Vestibulum id ligula porta felis euismod semper sed posuere consectetur
                          est at lobortis.</p>
                        <blockquote>
                          <div className="blockquote-title">Video courses to build new skills from start to finish.</div>
                          <div className="blockquote-des">Lorem ipsum dolor sit amet, feugiat delicata liberavisse id cum, no quo maiorum intellegebat, liber regione eu sit. Mea cu case ludus integre. </div>
                        </blockquote>
                        <p className="text">Pellentesque ornare sem lacinia quam venenatis vestibulum. Aenean lacinia bibendum nulla sed tur.Cras mattis consectetur purus sit amet fermentum. Sed posuere consectetur est at lobortis. Nulla vitae elit
                          libero, a pharetra augue consectetur purus sit amet fermentum aenean lacinia bibendum nulla sed tur.</p>
                        <div className="block-video">
                          <div className="video-button-play"> <i className="icons fa fa-play" /></div>
                          <div className="video-button-close" /><img src="/assets/images/news/video.jpg" alt className="img-full" /><iframe src="https://www.youtube.com/embed/1k2NRnc9vQ4?rel=0" allowFullScreen="allowfullscreen" className="video-embed" /></div>
                        <p className="text">Pellentesque ornare sem lacinia quam venenatis vestibulum. Aenean lacinia bibendum nulla sed tur.Cras mattis consectetur purus sit amet fermentum. Pellentesque ornare sem lacinia quam venenatis vestibulum.
                          Aenean lacinia bibendum nulla sed tur.Cras mattis consectetur purus sit amet fermentum. </p>
                        <ul className="blog-detail-list">
                          <li>Phasellus tincidunt, quam ac hendrerit molestie.</li>
                          <li>Etiam nulla lectus, dictum ut lobortis a, blandit sed nisi.</li>
                          <li>Integer in purus et lectus accumsan tempor ac nec nulla.</li>
                          <li>Vivamus varius erat justo, in vestibulum ipsum rutrum tristique.</li>
                        </ul>
                        <div className="tags margin-top-50">
                          <div className="title-tag">tags :</div>
                          <ul className="list-tag">
                            <li><a href="#" className="tag">Cappucino</a></li>
                            <li><a href="#" className="tag">Coffee</a></li>
                            <li><a href="#" className="tag">Frappucino</a></li>
                            <li><a href="#" className="tag">Hot Chocolate</a></li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="blog-author media margin-top-50">
                      <div className="media-left">
                        <a href="#" className="media-image"><img src="/assets/images/more-image/avatar-4.jpg" alt className="img-responsive" /></a>
                      </div>
                      <div className="media-right"><a href="#" className="author">Valeria</a>
                        <div className="position">Author</div>
                        <p className="des">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra euismod odio, gravida tesque urna varius vitae. Sed dui lorem, adipiscing in adipiscing et, interdum nec metus. </p>
                      </div>
                    </div>
                    <div className="blog-comment margin-top-70">
                      <div className="main-titles-2">
                        <h1 className="title">26 comments</h1></div>
                      <ul className="comment-list list-unstyled">
                        <li className="parent">
                          <div className="comment-item">
                            <div className="comment-left">
                              <a href="#" className="media-image"><img src="/assets/images/more-image/avatar-1.jpg" alt className="img-responsive" /></a>
                            </div>
                            <div className="comment-right">
                              <div className="pull-left">
                                <div className="author">Donna J. Walsh</div>
                              </div>
                              <div className="pull-right time"><i className="fa fa-clock-o"> </i><span>2 hours ago</span></div>
                              <div className="des">Donec faucibus iaculis nulla a consectetur. Nam sit amet tempor sapien, eu pellentesque justo. Morbi mattis masa sed est eleifend, a laoreet nisl sollicitudin.</div><a href="javascript:void(0)" className="btn-crystal btn reply-1"><i className="fa fa-reply"> </i>Reply</a>
                              <div className="clearfix" />
                            </div>
                          </div>
                          <ul className="comment-list-children list-unstyled">
                            <li className="child">
                              <div className="comment-item">
                                <div className="comment-left">
                                  <a href="#" className="media-image"><img src="/assets/images/more-image/avatar-2.jpg" alt className="img-responsive" /></a>
                                </div>
                                <div className="comment-right">
                                  <div className="pull-left">
                                    <div className="author">Keiko J. McCool</div>
                                  </div>
                                  <div className="pull-right time"><i className="fa fa-clock-o"> </i><span>40 minutes ago</span></div>
                                  <div className="des">Donec faucibus iaculis nulla a consectetur. Nam sit amet tempor sapien, eu pellentesque justo. Morbi mattis massa sed est eleifend, a laoreet.</div>
                                  <a href="javascript:void(0)" className="btn-crystal btn reply-1"><i className="fa fa-reply"> </i>Reply</a>
                                  <div className="clearfix" />
                                </div>
                              </div>
                            </li>
                          </ul>
                          <div className="comment-box media merge-1">
                            <div className="list-item">
                              <div className="media-body">
                                <form action="#" className="bg-w-form comment-form">
                                  <div className="form-group"><textarea placeholder="Your comment here..." className="form-control form-input" defaultValue={""} /></div>
                                </form>
                                <div className="media-submit"><button type="submit" className="btn btn-submit"><span>Submit</span></button></div>
                              </div>
                            </div>
                          </div>
                        </li>
                        <li className="parent">
                          <div className="comment-item">
                            <div className="comment-left">
                              <a href="#" className="media-image"><img src="/assets/images/more-image/avatar-3.jpg" alt className="img-responsive" /></a>
                            </div>
                            <div className="comment-right">
                              <div className="pull-left">
                                <div className="author">Harold K. Horton</div>
                              </div>
                              <div className="pull-right time"><i className="fa fa-clock-o"> </i><span>3 hours ago</span></div>
                              <div className="des">Donec faucibus iaculis nulla a consectetur. Nam sit amet tempor sapien, eu pellentesque justo. Morbi mattam et tempor sapien, eu pellentesque justo orbi mattis masa sed est eleifend.</div>
                              <a href="javascript:void(0)" className="btn-crystal btn reply-2"><i className="fa fa-reply"> </i>Reply</a>
                              <div className="clearfix" />
                            </div>
                          </div>
                          <div className="comment-box media merge-2">
                            <div className="list-item">
                              <div className="media-body">
                                <form action="#" className="bg-w-form comment-form">
                                  <div className="form-group"><textarea placeholder="Your comment here..." className="form-control form-input" defaultValue={""} /></div>
                                </form>
                                <div className="media-submit"><button type="submit" className="btn btn-submit"><span>Submit</span></button></div>
                              </div>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                    <div className="leave-comment margin-top-50">
                      <div className="main-titles-2">
                        <h1 className="title">Leave A Comment</h1></div>
                      <form id="comment-form" className="comment-form"><input type="text" placeholder="Your Name" className="form-control" /><input type="email" placeholder="Your Email" className="form-control" /><textarea placeholder="Your Message" className="form-control form-textarea" defaultValue={""} />
                        <button type="submit" data-hover="SEND NOW" className="btn btn-maincolor">Send Comment</button>
                      </form>
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
                      <div className="title-widget">recent post</div>
                      <div className="content-widget">
                        <div className="recent-post-list">
                          <div className="single-recent-post-widget">
                            <a href="blog-detail.html" className="thumb img-wrapper"><img src="/assets/images/products/thumbnail-1.jpg" alt /></a>
                            <div className="post-info">
                              <div className="meta-info"><span>Aug 18, 2016</span><span className="sep">|</span><span className="fa-custom view-count">56</span><span className="fa-custom comment-count">239</span></div>
                              <div className="description">Donec ullamcorper nulla non metus nisi auctor fringilla they can do.</div>
                            </div>
                          </div>
                          <div className="single-recent-post-widget">
                            <a href="blog-detail.html" className="thumb img-wrapper"><img src="/assets/images/products/thumbnail-2.jpg" alt /></a>
                            <div className="post-info">
                              <div className="meta-info"><span>Aug 18, 2016</span><span className="sep">|</span><span className="fa-custom view-count">56</span><span className="fa-custom comment-count">239</span></div>
                              <div className="description">Donec ullamcorper nulla non metus nisi auctor fringilla they can do.</div>
                            </div>
                          </div>
                          <div className="single-recent-post-widget">
                            <a href="blog-detail.html" className="thumb img-wrapper"><img src="/assets/images/products/thumbnail-3.jpg" alt /></a>
                            <div className="post-info">
                              <div className="meta-info"><span>Aug 18, 2016</span><span className="sep">|</span><span className="fa-custom view-count">56</span><span className="fa-custom comment-count">239</span></div>
                              <div className="description">Donec ullamcorper nulla non metus nisi auctor fringilla they can do.</div>
                            </div>
                          </div>
                          <div className="single-recent-post-widget">
                            <a href="blog-detail.html" className="thumb img-wrapper"><img src="/assets/images/products/thumbnail-4.jpg" alt /></a>
                            <div className="post-info">
                              <div className="meta-info"><span>Aug 18, 2016</span><span className="sep">|</span><span className="fa-custom view-count">56</span><span className="fa-custom comment-count">239</span></div>
                              <div className="description">Donec ullamcorper nulla non metus nisi auctor fringilla they can do.</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
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
                  </div>
                  <div className="col-2">
                    <div className="tags-widget widget">
                      <div className="title-widget">tags</div>
                      <div className="content-widget"><a href="javascript:void(0)" className="tag">products</a><a href="javascript:void(0)" className="tag">vegetable</a><a href="javascript:void(0)" className="tag">tomato</a><a href="javascript:void(0)" className="tag">radish</a>
                        <a href="javascript:void(0)" className="tag">explore</a><a href="javascript:void(0)" className="tag">sprouted soya</a><a href="javascript:void(0)" className="tag">pumpkin</a><a href="javascript:void(0)" className="tag">polygonum</a><a href="javascript:void(0)" className="tag">sargasso</a><a href="javascript:void(0)" className="tag">potato</a><a href="javascript:void(0)" className="tag">shallot</a></div>
                    </div>
                    <div className="archives-widget widget">
                      <div className="title-widget">archives</div>
                      <div className="content-widget">
                        <div className="archive-datepicker" />
                      </div>
                    </div>
                    <div className="gallery-widget widget">
                      <div className="title-widget">from gallery</div>
                      <div className="content-widget">
                        <ul className="list-unstyled list-inline">
                          <li>
                            <a href="assets/images/news/image-5.jpg" data-fancybox-group="gallery" className="thumb fancybox"><img src="/assets/images/news/image-5.jpg" alt="gallery image 1" className="img-responsive" /></a>
                          </li>
                          <li>
                            <a href="assets/images/news/image-2.jpg" data-fancybox-group="gallery" className="thumb fancybox"><img src="/assets/images/news/image-2.jpg" alt="gallery image 2" className="img-responsive" /></a>
                          </li>
                          <li>
                            <a href="assets/images/news/image-7.jpg" data-fancybox-group="gallery" className="thumb fancybox"><img src="/assets/images/news/image-7.jpg" alt="gallery image 3" className="img-responsive" /></a>
                          </li>
                          <li>
                            <a href="assets/images/news/image-8.jpg" data-fancybox-group="gallery" className="thumb fancybox"><img src="/assets/images/news/image-8.jpg" alt="gallery image 4" className="img-responsive" /></a>
                          </li>
                          <li>
                            <a href="assets/images/news/image-6.jpg" data-fancybox-group="gallery" className="thumb fancybox"><img src="/assets/images/news/image-6.jpg" alt="gallery image 5" className="img-responsive" /></a>
                          </li>
                          <li>
                            <a href="assets/images/news/image-9.jpg" data-fancybox-group="gallery" className="thumb fancybox"><img src="/assets/images/news/image-9.jpg" alt="gallery image 6" className="img-responsive" /></a>
                          </li>
                          <li>
                            <a href="assets/images/news/image-4.jpg" data-fancybox-group="gallery" className="thumb fancybox"><img src="/assets/images/news/image-4.jpg" alt="gallery image 7" className="img-responsive" /></a>
                          </li>
                          <li>
                            <a href="assets/images/news/image-11.jpg" data-fancybox-group="gallery" className="thumb fancybox"><img src="/assets/images/news/image-11.jpg" alt="gallery image 8" className="img-responsive" /></a>
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
                            <a href="javascript:void(0)" className="social-icon fa fa-twitter" />
                          </li>
                          <li>
                            <a href="javascript:void(0)" className="social-icon fa fa-pinterest-p" />
                          </li>
                          <li>
                            <a href="javascript:void(0)" className="social-icon fa fa-google" />
                          </li>
                          <li>
                            <a href="javascript:void(0)" className="social-icon fa fa-rss" />
                          </li>
                          <li>
                            <a href="javascript:void(0)" className="social-icon fa fa-linkedin" />
                          </li>
                          <li>
                            <a href="javascript:void(0)" className="social-icon fa fa-dribbble" />
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
