import React from 'react';

import {Title, BreadCrumb, Widget, FormEmail} from './components'

class Contact extends React.Component {
  render() {

    const contact = this.props.data.information.value.contact

    return (
      <div>
        <div className="main-contents">
          {/* Breadcrumb*/}
          <section className="banner contact">
            <div className="container">
              <div className="morepage-banner">
                <h2 className="title">Liên hệ</h2>
              </div>
            </div>
          </section>
          <div className="page-main padding-top-100 padding-bottom-100">
            <div className="container">
              <div className="row">
                <div className="col-xs-12">
                  <div className="row contact-method padding-bottom-100">
                    <div className="col-sm-4 col-xs-12">
                      <div className="method-item"><i className="fa fa-map-marker" />
                        <p className="sub">Địa điểm</p>
                        <div className="detail">
                          <p>
                            B1.00.11 Khu chung cứ phức hợp M2, số 72, Đường Nguyễn Cơ Thạch, Phường An Lợi Đông, Quận 2,
                          </p>
                          <p>Thành phố Hồ Chí Minh, Việt Nam</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-4 col-xs-12">
                      <div className="method-item"><i className="fa fa-phone" />
                        <p className="sub">Điện thoại</p>
                        <div className="detail">
                          <p>0199 999 9910</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-4 col-xs-12">
                      <div className="method-item">
                        <i className="fa fa-facebook" />
                        <p className="sub">Fanpage</p>
                        <div className="detail">
                          <a target="_blank" className="link" href="https://fb.com/happygreen.vn">Happy Green Market</a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <form id="contactForm" noValidate="novalidate" className="contact-form">
                    <div className="row">
                      <div className="col-sm-6">
                        <div className="form-group"><label className="form-label">Tên <span className="highlight">*</span></label><input id="name" type="text" required="required" data-validation-required-message="Please enter your name." className="form-control" />
                          <p className="help-block text-danger" />
                        </div>
                      </div>
                      <div className="col-sm-6">
                        <div className="form-group"><label className="form-label">Email <span className="highlight">*</span></label><input id="email" type="email" required="required" data-validation-required-message="Please enter your email address." className="form-control" />
                          <p className="help-block text-danger" />
                        </div>
                      </div>
                      <div className="col-sm-6">
                        <div className="form-group"><label className="form-label">Số điện thoại</label><input id="phone" type="text" required="required" data-validation-required-message="Please enter your phone number." className="form-control" />
                          <p className="help-block text-danger" />
                        </div>
                      </div>
                      <div className="col-sm-6">
                        <div className="form-group"><label className="form-label">Chủ đề</label><input id="subject" type="text" required="required" data-validation-required-message="Please enter your subject." className="form-control" />
                          <p className="help-block text-danger" />
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-sm-12">
                        <div className="form-group"><label className="form-label">Tin nhắn</label><textarea id="message" required="required" data-validation-required-message="Please enter a message." className="form-control form-textarea" defaultValue={""} />
                          <p className="help-block text-danger" />
                        </div>
                      </div>
                    </div>
                    <div id="success" className="margin-top-50" /><button type="submit" className="btn btn-maincolor">Send Message </button></form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact
