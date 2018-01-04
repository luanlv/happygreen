import React from 'react';

import {Title, BreadCrumb} from './components'

class About extends React.Component {

  render() {

    const about = this.props.data.information.value.about

    return (
      <div>
        <div className="main-contents">
          {/* Breadcrumb*/}
          <section className="banner about">
            <div className="container">
              <div className="morepage-banner">
                <h2 className="title">Happy Green</h2>
              </div>
            </div>
          </section>
          {/* history*/}
          <section className="history padding-top-100 padding-bottom-100">
            <div className="container">
              <div className="main-titles">
                <h1 className="title">Lịch sử hình thành</h1></div>
              <div className="main-content">
                <div className="tab-vertical">
                  <div className="tab-list-wrapper">
                    <ul role="tablist" className="tab-list">
                      <li role="presentation" className="active"><a href="#tab-1" role="tab" data-toggle="tab" className="link">Exclusive Knowledge</a></li>
                      <li role="presentation"><a href="#tab-2" role="tab" data-toggle="tab" className="link">Passionate Service</a></li>
                      <li role="presentation"><a href="#tab-3" role="tab" data-toggle="tab" className="link">Benefits For Partners</a></li>
                    </ul>
                  </div>
                  <div className="tab-content">
                    <div id="tab-1" role="tabpanel" className="tab-pane fade in active">
                      <div className="text-content">
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad.</p>
                        <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sitong out voluptatem accusantium doloremque
                          laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae.</p>
                        <ul>
                          <li>Duis aute irure dolor in reprehenderit in</li>
                          <li>Ut enim ad minim veniam, quis nostrud exercitation</li>
                          <li>Duis aute irure dolor in reprehenderit in voluptate velit esse</li>
                          <li>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.</li>
                        </ul>
                      </div>
                      <div className="text-image"><img src="/assets/images/news/image-2.jpg" alt className="img-responsive" /></div>
                    </div>
                    <div id="tab-2" role="tabpanel" className="tab-pane fade">
                      <div className="text-content">
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad.</p>
                        <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sitong out voluptatem accusantium doloremque
                          laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunting explicabo quae ab illo inventore.</p>
                        <ul>
                          <li>Duis aute irure dolor in reprehenderit in</li>
                          <li>Ut enim ad minim veniam, quis nostrud exercitation</li>
                          <li>Duis aute irure dolor in reprehenderit in voluptate velit esse</li>
                          <li>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.</li>
                        </ul>
                      </div>
                      <div className="text-image"><img src="/assets/images/news/image-5.jpg" alt className="img-responsive" /></div>
                    </div>
                    <div id="tab-3" role="tabpanel" className="tab-pane fade">
                      <div className="text-content">
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad.</p>
                        <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sitong out voluptatem accusantium doloremque
                          laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunting explicabo quae ab illo inventore.</p>
                        <ul>
                          <li>Duis aute irure dolor in reprehenderit in</li>
                          <li>Ut enim ad minim veniam, quis nostrud exercitation</li>
                          <li>Duis aute irure dolor in reprehenderit in voluptate velit esse</li>
                          <li>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.</li>
                        </ul>
                      </div>
                      <div className="text-image"><img src="/assets/images/news/image-8.jpg" alt className="img-responsive" /></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* About us*/}
          <section className="about-us padding-bottom-100">
            <div className="container">
              <div className="main-titles">
                <h1 className="title">best service for you </h1></div>
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
                  <div data-wow-delay="0.3s" className="about-center wow zoomIn"><img src="/assets/images/more-image/about-us-2.jpg" alt className="img-responsive" /></div>
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
                      <div className="block-image"><img src="/assets/images/teams/image-1.jpg" alt className="img-full" />
                        <a href="#" className="link" />
                      </div>
                      <div className="block-content"><a href="blog-detail.html" className="title">Kown Jiyong</a>
                        <p className="subtitle">CE0-Founder</p>
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
                      <div className="block-content"><a href="blog-detail.html" className="title">Kown Jiyong</a>
                        <p className="subtitle">CE0-Founder</p>
                        <div className="description">
                          <p className="text">We care about what you eat. We want to produce food which nourishes your body and tastes isaw delicious food which nourishes food</p>
                        </div>
                        <ul className="list-social">
                          <li><a href="#" className="link facebook"><i className="fa fa-facebook" /></a></li>
                          <li><a href="#" className="link twitter"><i className="fa fa-twitter" /></a></li>
                          <li><a href="#" className="link google"><i className="fa fa-google" /></a></li>
                          <li><a href="#" className="link instagram"><i className="fa fa-linkedin" /></a></li>
                        </ul><a href="#" className="btn btn-maincolor">view profile</a></div>
                      <div className="block-image"><img src="/assets/images/teams/image-2.jpg" alt className="img-full" />
                        <a href="#" className="link" />
                      </div>
                    </div>
                  </div>
                  <div className="grid-item grid-2">
                    <div className="block-3 style-2">
                      <div className="block-image"><img src="/assets/images/teams/image-3.jpg" alt className="img-full" />
                        <a href="#" className="link" />
                      </div>
                      <div className="block-content"><a href="blog-detail.html" className="title">Kown Jiyong</a>
                        <p className="subtitle">CE0-Founder</p>
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
        </div>

      </div>
    );
  }
}

export default About
