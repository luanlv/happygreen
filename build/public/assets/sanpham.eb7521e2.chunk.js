webpackJsonp([6],{1213:function(e,t,a){"use strict";var i=a(2),o=(a.n(i),a(31)),n=function(){var e="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103;return function(t,a,i,o){var n=t&&t.defaultProps,r=arguments.length-3;if(a||0===r||(a={}),a&&n)for(var s in n)void 0===a[s]&&(a[s]=n[s]);else a||(a=n||{});if(1===r)a.children=o;else if(r>1){for(var c=Array(r),l=0;l<r;l++)c[l]=arguments[l+3];a.children=c}return{$$typeof:e,type:t,key:void 0===i?null:""+i,ref:null,props:a,_owner:null}}}();n("span",{},void 0,n(o.a,{className:"home",to:"/",title:"Go to CargoPress.",rel:"v:url"},void 0,"Trang chủ"))},1214:function(e,t,a){"use strict";var i=a(2);a.n(i),function(){var e="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103}()},1215:function(e,t,a){"use strict";a(1214),a(1213)},823:function(e,t,a){"use strict";function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function n(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var r=a(2),s=a.n(r),c=(a(31),a(1215),Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var i in a)Object.prototype.hasOwnProperty.call(a,i)&&(e[i]=a[i])}return e}),l=function(){var e="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103;return function(t,a,i,o){var n=t&&t.defaultProps,r=arguments.length-3;if(a||0===r||(a={}),a&&n)for(var s in n)void 0===a[s]&&(a[s]=n[s]);else a||(a=n||{});if(1===r)a.children=o;else if(r>1){for(var c=Array(r),l=0;l<r;l++)c[l]=arguments[l+3];a.children=c}return{$$typeof:e,type:t,key:void 0===i?null:""+i,ref:null,props:a,_owner:null}}}(),u=function(){function e(e,t){for(var a=0;a<t.length;a++){var i=t[a];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,a,i){return a&&e(t.prototype,a),i&&e(t,i),t}}(),d=l("sup",{},void 0,"đ"),v=l("span",{className:"unit"},void 0,"/kg"),m=l("i",{className:"glyphicon glyphicon-minus"}),p=l("i",{className:"glyphicon glyphicon-plus"}),f=l("div",{className:"main-titles"},void 0,l("h1",{className:"title"},void 0,"Các sản phẩm khác")),b=l("sup",{},void 0,"$"),N=l("span",{className:"unit"},void 0,"/kg"),y=l("ul",{className:"list-icons"},void 0,l("li",{},void 0,l("a",{href:"#",className:"link"},void 0,l("i",{className:"icons fa fa-cart-plus"})))),g=function(e){function t(e){i(this,t);var a=o(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return a.state={number:1,product:e.data.product.value},a}return n(t,e),u(t,[{key:"render",value:function(){var e=this,t=this.props.data.product.value,a=this.props.data.productRelative.value;this.props.data.categories.value;return l("div",{},void 0,l("div",{className:"main-contents"},void 0,l("section",{className:"banner shop-detail"},void 0,l("div",{className:"container"},void 0,l("div",{className:"morepage-banner"},void 0,l("h2",{className:"title"},void 0,t.title)))),l("div",{className:"page-shop-detail padding-top-100 padding-bottom-100"},void 0,l("div",{className:"container"},void 0,l("div",{className:"row"},void 0,l("div",{className:"col-md-6 col-xs-12"},void 0,l("div",{className:"shop-img-wrapper"},void 0,l("div",{className:"slider-for"},void 0,l("div",{className:"item"},void 0,l("div",{className:"image-wrapper"},void 0,l("img",{src:t.coverUrl,alt:!0,className:"img-responsive"})))))),l("div",{className:"col-md-6 col-xs-12"},void 0,l("div",{className:"info-detail"},void 0,l("div",{className:"title"},void 0,l("h1",{},void 0,t.title)),l("div",{className:"prices-wrapper"},void 0,l("div",{className:"prices"},void 0,l("span",{className:"number"},void 0,t.price.toLocaleString()),d),v),l("div",{className:"discription",dangerouslySetInnerHTML:{__html:t.body}}),l("div",{className:"shopping-cart"},void 0,l("div",{className:"quantity"},void 0,l("div",{className:"quantity-button quantity-down",onClick:function(){e.setState(function(e){return c({},e,{number:e.number-1>0?e.number:1})})}},void 0,m),l("input",{type:"number",step:1,min:0,max:999,value:this.state.number,className:"input-text qty text",onChange:function(t){var a=parseInt(t.target.value);e.setState({number:a})}}),l("div",{className:"quantity-button quantity-up",onClick:function(){e.setState(function(e){return c({},e,{number:e.number+1})})}},void 0,p))),l("div",{className:"btn-addtocart"},void 0,l("button",{type:"submit",className:"btn btn-maincolor",onClick:function(){var t=e,a=window&&window.sessionStorage?window.sessionStorage:{},i=JSON.parse(a.getItem("cart")||"[]"),o=i.findIndex(function(e){return e.slug===t.state.product.slug});o>=0?(i[o].number=parseInt(i[o].number)+parseInt(t.state.number),a.setItem("cart",JSON.stringify(i)),$(".cart-counter").text(i.length)):(i.push({slug:t.state.product.slug,number:t.state.number,product:t.state.product}),a.setItem("cart",JSON.stringify(i)),$(".cart-counter").text(i.length)),document.location.href="/gio-hang"}},void 0,"Thêm vào rỏ hàng"))))),l("div",{className:"row padding-top-100"},void 0,l("div",{className:"col-xs-12"},void 0,l("div",{className:"our-product"},void 0,f,l("div",{className:"main-content"},void 0,l("div",{className:"our-product-list"},void 0,a.map(function(e,t){return l("div",{className:"item"},t,l("div",{className:"block-4"},void 0,l("div",{className:"block-image"},void 0,l("img",{src:e.coverUrl,alt:!0,className:"img-full"}),l("a",{href:"/sp/"+e.slug,className:"link"})),l("div",{className:"block-content"},void 0,l("a",{href:"/sp/"+e.slug,className:"title"},void 0,e.title),l("div",{className:"prices-wrapper"},void 0,l("div",{className:"prices"},void 0,l("span",{className:"number"},void 0,e.price.toLocaleString()),b),N),y)))}))))))))))}}]),t}(s.a.Component);t.default=g}});