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
                <h2 className="title">contact</h2>
                <ol className="breadcrumb">
                  <li><a href="index.html" className="link">Home</a></li>
                  <li className="active"><a href="#" className="link">contact</a></li>
                </ol>
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
                        <p className="sub">COME TO</p>
                        <div className="detail">
                          <p>99 Barnard St - Suite 111</p>
                          <p>United Kingdom</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-4 col-xs-12">
                      <div className="method-item"><i className="fa fa-phone" />
                        <p className="sub">CALL TO</p>
                        <div className="detail">
                          <p>Local: 1-800-123-hello</p>
                          <p>Mobile: 1-800-123-hello</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-4 col-xs-12">
                      <div className="method-item"><i className="fa fa-envelope" />
                        <p className="sub">CONNECT TO</p>
                        <div className="detail">
                          <p>hello@edugate.com</p>
                          <p>www.edugate.com</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <form id="contactForm" noValidate="novalidate" className="contact-form">
                    <div className="row">
                      <div className="col-sm-6">
                        <div className="form-group"><label className="form-label">NAME <span className="highlight">*</span></label><input id="name" type="text" required="required" data-validation-required-message="Please enter your name." className="form-control" />
                          <p className="help-block text-danger" />
                        </div>
                      </div>
                      <div className="col-sm-6">
                        <div className="form-group"><label className="form-label">EMAIL <span className="highlight">*</span></label><input id="email" type="email" required="required" data-validation-required-message="Please enter your email address." className="form-control" />
                          <p className="help-block text-danger" />
                        </div>
                      </div>
                      <div className="col-sm-6">
                        <div className="form-group"><label className="form-label">PHONE</label><input id="phone" type="text" required="required" data-validation-required-message="Please enter your phone number." className="form-control" />
                          <p className="help-block text-danger" />
                        </div>
                      </div>
                      <div className="col-sm-6">
                        <div className="form-group"><label className="form-label">SUBJECT</label><input id="subject" type="text" required="required" data-validation-required-message="Please enter your subject." className="form-control" />
                          <p className="help-block text-danger" />
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-sm-12">
                        <div className="form-group"><label className="form-label">HOW CAN WE HELP?</label><textarea id="message" required="required" data-validation-required-message="Please enter a message." className="form-control form-textarea" defaultValue={""} />
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
