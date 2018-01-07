import React from 'react'
import Link from '../Link'
import * as C from './components/index'

class Header extends React.Component {
  render () {
    // const services = this.props.data.information.value.services
    // const common = this.props.data.information.value.common
    return (
      <div>

        <div className="wrapper-menu-mobile-background" />
        <div className="wrapper-menu-mobile">
          <div className="mb-social-wrapper">
            <div className="mb-socials">
              <ul className="list-unstyled list-inline">
                <li><a href="https://www.facebook.com/HappyGreen.vn/" className="link facebook"><i className="fa fa-facebook" /></a></li>
              </ul>
            </div>
            <div className="mb-button-close"><i className="icons fa fa-times" /></div>
            <div className="clearfix" />
          </div>

          <ul className="nav navbar-nav mb-nav">
            <li className="dropdown"><a href="/" className="main-menu"><span className="text">Trang chủ</span></a>
            </li>
            <li><a href="/about" className="main-menu"><span className="text">Giới thiệu</span></a></li>
            <li className="dropdown"><a href="/shop" className="main-menu"><span className="text">Cửa hàng</span></a>
            </li>
            <li className="dropdown"><a href="/tin-tuc" className="main-menu"><span className="text">Tin tức</span></a></li>
            <li><a href="/lien-he" className="main-menu"><span className="text">Liên hệ</span></a></li>
          </ul>
        </div>
        <div className="wrapper-search-mobile">
          <div className="mb-social-wrapper">
            <div className="mb-button-close"><i className="icons fa fa-times" /></div>
            <div className="clearfix" />
          </div>
          <div className="mb-search">
            <form><input type="text" placeholder="Search" onfocus="this.placeholder = ''" className="searchbox" />
              <div className="line-boder" /><button type="submit" className="searchbutton fa fa-search" /></form>
          </div>
        </div>


      </div>
    )
  }
}

export default Header
