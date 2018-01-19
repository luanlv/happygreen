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
                <h1 className="title">Câu chuyện Happy Green</h1></div>
              <div className="main-content">
                <div className="tab-vertical">
                  <div className="tab-list-wrapper">
                    <ul role="tablist" className="tab-list">
                ..............      <li role="presentation" className="active"><a href="javascript:void(0)tab-1" role="tab" data-toggle="tab" className="link">Exclusive Knowledge</a></li>
                      <li role="presentation"><a href="javascript:void(0)tab-2" role="tab" data-toggle="tab" className="link">Passionate Service</a></li>
                      <li role="presentation"><a href="javascript:void(0)tab-3" role="tab" data-toggle="tab" className="link">Benefits For Partners</a></li>
                    </ul>
                  </div>
                  <div className="tab-content">
                    <div id="tab-1" role="tabpanel" className="tab-pane fade in active">
                      <div className="text-content">
                        <p>Đang cập nhập ...</p>
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
                <h1 className="title">Giá trị Happy Green</h1></div>
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
                        <h4 className="title">Quy Chuẩn Hữu Cơ</h4>
                        <p className="description">Happy Green cung cấp những sản phẩm đảm bảo quy chuẩn hữu cơ nghiêm ngặt. Áp dụng những quy ước về hữu cơ nhằm hướng đến đảm bảo an toàn cho người tiêu dùng và môi sinh

                        </p>
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
                        <h4 className="title">Chất Lượng Tốt Nhất</h4>
                        <p className="description">Happy Green nói không với các mặt hàng thứ cấp. Những thực phẩm bày bán đã được chọn lọc kỹ lưỡng từ những nhà cung cấp uy tín. Những tiêu chuẩn về tươi ngon và tốt nhất cho sức khỏe được chúng tôi đặt lên hàng đầu</p>
                      </div>
                    </div>
                  </div>
                  <div className="clearfix" />
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
