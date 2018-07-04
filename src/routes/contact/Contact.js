import React from 'react';

import {Title, BreadCrumb, Widget, FormEmail} from './components'
import axios from 'axios'

class Contact extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      cart: [],
      hoten: "",
      phone: "",
      email: "",
      chude: "",
      tinnhan: "",
    }
  }

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
                      <a target="_blank" href="https://fb.com/happygreenmarket">
                        <div className="method-item">
                          <i className="fa fa-facebook" />
                          <p className="sub">Fanpage</p>
                          <div className="detail">
                            <span style={{color: '#333'}}>Happy Green Market</span>
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>
                  <form id="contactForm" noValidate="novalidate" className="contact-form">
                    <div className="row">
                      <div className="col-sm-6">
                        <div className="form-group"><label className="form-label">Họ Tên <span className="highlight">*</span></label>
                          <input 
                            defaultValue={this.state.hoten}
                             onChange={(e) => {
                               let value = e.target.value
                               this.setState({hoten: value})
                             }}
                          id="name" type="text" required="required" data-validation-required-message="Please enter your name." className="form-control" />
                          <p className="help-block text-danger" />
                        </div>
                      </div>
                      <div className="col-sm-6">
                        <div className="form-group"><label className="form-label">Email <span className="highlight">*</span></label>
                          <input id="email" type="email" required="required" data-validation-required-message="Please enter your email address." className="form-control" 
                            defaultValue={this.state.email}
                             onChange={(e) => {
                               let value = e.target.value
                               this.setState({email: value})
                             }}
                          />
                          <p className="help-block text-danger" />
                        </div>
                      </div>
                      <div className="col-sm-6">
                        <div className="form-group"><label className="form-label">Số điện thoại</label>
                          <input id="phone" type="text" required="required" data-validation-required-message="Please enter your phone number." className="form-control" 
                            defaultValue={this.state.phone}
                             onChange={(e) => {
                               let value = e.target.value
                               this.setState({phone: value})
                             }}
                          />
                          <p className="help-block text-danger" />
                        </div>
                      </div>
                      <div className="col-sm-6">
                        <div className="form-group"><label className="form-label">Chủ đề</label>
                          <input id="subject" type="text" required="required" data-validation-required-message="Please enter your subject." className="form-control" 
                            defaultValue={this.state.chude}
                             onChange={(e) => {
                               let value = e.target.value
                               this.setState({chude: value})
                             }}
                          />
                          <p className="help-block text-danger" />
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-sm-12">
                        <div className="form-group"><label className="form-label">Tin nhắn</label>
                          <textarea id="message" required="required" data-validation-required-message="Please enter a message." className="form-control form-textarea" 
                            defaultValue={this.state.tinnhan}
                             onChange={(e) => {
                               let value = e.target.value
                               this.setState({tinnhan: value})
                             }}
                          />
                          <p className="help-block text-danger" />
                        </div>
                      </div>
                    </div>
                    <div id="success" className="margin-top-50" /><div type="submit" className="btn btn-maincolor"
                      onClick={() => {
                          if(this.state.hoten.length < 1){
                            alert('Tên không được để trống')
                          } else if (this.state.phone.length < 1){ 
                            alert('Số điện thoại không được để trống')
                          } else if (this.state.email.length < 1){
                            alert('Email không được để trống')
                          } else if (this.state.chude.length < 1){
                            alert('Chủ đề không được để trống')
                          } else if (this.state.tinnhan.length < 1){
                            alert('Tin nhắn không được để trống')
                          } else {
                            axios.post('/api/tinnhan/new', this.state)
                              .then(res => {
                                if (process.env.BROWSER) {
                                  alert("Tin nhắn đã được gửi đi! Chúng tôi sẽ liên lạc với bạn sớm nhất có thể!")
                                  document.location.href = '/'
                                }
                              }).catch(err => {
                                alert('có lỗi')
                            })
                          }
                      }}
                    >Send Message </div></form>
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
