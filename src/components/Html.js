/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import PropTypes from 'prop-types';
import serialize from 'serialize-javascript';
import config from '../config';

/* eslint-disable react/no-danger */

class Html extends React.Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    styles: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.string.isRequired,
      cssText: PropTypes.string.isRequired,
    }).isRequired),
    scripts: PropTypes.arrayOf(PropTypes.string.isRequired),
    app: PropTypes.object, // eslint-disable-line
    children: PropTypes.string.isRequired,
  };

  static defaultProps = {
    styles: [],
    scripts: [],
  };

  render() {
    const { title, description, styles, scripts, app, children, v, seo, scriptTop, css  } = this.props;
    return (
      <html className="no-js" lang="en">
        <head>
          <meta charSet="utf-8" />
          <meta httpEquiv="x-ua-compatible" content="ie=edge" />
          <title>{title}</title>
          <meta name="description" content={description} />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link type="text/css" rel="stylesheet" href="https://fonts.googleapis.com/css?family=Pacifico" />
          <link type="text/css" rel="stylesheet" href="https://fonts.googleapis.com/css?family=Cuprum:400,700" />
          <link type="text/css" rel="stylesheet" href="/assets/font/font-icon/font-awesome/css/font-awesome.css" />
          <link type="text/css" rel="stylesheet" href="/assets/font/font-icon/font-oganic/flaticon.css" />
          <link type="text/css" rel="stylesheet" href="/assets/libs/bootstrap/css/bootstrap.min.css" />
          <link type="text/css" rel="stylesheet" href="/assets/libs/bootstrap-timepicker/jquery.timepicker.css" />
          <link type="text/css" rel="stylesheet" href="/assets/libs/bootstrap-datepicker/css/bootstrap-datepicker.min.css" />
          <link type="text/css" rel="stylesheet" href="/assets/libs/animate/animate.css" />
          <link type="text/css" rel="stylesheet" href="/assets/libs/slick-slider/slick.css" />
          <link type="text/css" rel="stylesheet" href="/assets/libs/slick-slider/slick-theme.css" />
          <link type="text/css" rel="stylesheet" href="/assets/libs/custom-scroll/jquery.mCustomScrollbar.min.css" />
          <link type="text/css" rel="stylesheet" href="/assets/libs/fancybox/css/jquery.fancybox.css" />
          <link type="text/css" rel="stylesheet" href="/assets/libs/fancybox/css/jquery.fancybox-buttons.css" />
          <link type="text/css" rel="stylesheet" href="/assets/libs/fancybox/css/jquery.fancybox-thumbs.css" />
          <link type="text/css" rel="stylesheet" href="/assets/css/layout.css" />
          <link type="text/css" rel="stylesheet" href="/assets/css/components.css" />
          <link type="text/css" rel="stylesheet" href="/assets/css/responsive.css" />
          <link type="text/css" rel="stylesheet" href="#" id="color-skins" />

          <script src="/assets/libs/jquery/jquery-2.2.4.min.js" />
          <script src="/assets/libs/cookie/js.cookie.js" />
          <link rel="stylesheet" type="text/css"  href={"/css/app.css?v=" +v }/>
          <style dangerouslySetInnerHTML={{ __html: css }} />
          <script dangerouslySetInnerHTML={{ __html: scriptTop }} />

        </head>
        <body>
          <div id="app" dangerouslySetInnerHTML={{ __html: children }} />
          <script dangerouslySetInnerHTML={{ __html: `window.App=${serialize(app)}` }} />


          <script src="/assets/libs/bootstrap/js/bootstrap.min.js"/>
          <script src="/assets/libs/bootstrap-timepicker/jquery.timepicker.min.js"/>
          <script src="/assets/libs/bootstrap-datepicker/js/bootstrap-datepicker.min.js"/>
          <script src="/assets/libs/smooth-scroll/jquery-smoothscroll.min.js"/>
          <script src="/assets/libs/mouse-direction-aware/dist/jquery.directional-hover.min.js"/>
          <script src="/assets/libs/wow-js/wow.min.js"/>
          <script src="/assets/libs/count-to/numscroller.js"/>
          <script src="/assets/libs/slick-slider/slick.min.js"/>
          <script src="/assets/libs/isotope/isotope.pkgd.min.js"/>
          <script src="/assets/libs/custom-scroll/jquery.mCustomScrollbar.concat.min.js"/>
          <script src="/assets/libs/fancybox/js/jquery.fancybox.min.js"/>
          <script src="/assets/libs/fancybox/js/jquery.fancybox-buttons.min.js"/>
          <script src="/assets/libs/fancybox/js/jquery.fancybox-thumbs.min.js"/>

          <script src="/assets/js/main.js" />
          <script src="/assets/libs/parallax/jquery.parallax-scroll.min.js" />

          <script  src={scripts[0] + "?v=" + v } />
          <sciprt  src={scripts[1] + "?v=" + v } />

          <script dangerouslySetInnerHTML={{ __html: this.props.scriptBottom }} />


        </body>
      </html>
    );
  }
}

export default Html;
