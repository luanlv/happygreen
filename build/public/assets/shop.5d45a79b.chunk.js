webpackJsonp([1],{1219:function(e,i,s){"use strict";var a=s(2),o=(s.n(a),s(31)),l=function(){var e="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103;return function(i,s,a,o){var l=i&&i.defaultProps,n=arguments.length-3;if(s||0===n||(s={}),s&&l)for(var t in l)void 0===s[t]&&(s[t]=l[t]);else s||(s=l||{});if(1===n)s.children=o;else if(n>1){for(var r=Array(n),c=0;c<n;c++)r[c]=arguments[c+3];s.children=r}return{$$typeof:e,type:i,key:void 0===a?null:""+a,ref:null,props:s,_owner:null}}}();l("span",{},void 0,l(o.a,{className:"home",to:"/",title:"Go to CargoPress.",rel:"v:url"},void 0,"Trang chủ"))},1220:function(e,i,s){"use strict";var a=s(2);s.n(a),function(){var e="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103}()},1221:function(e,i,s){"use strict";s(1220),s(1219)},394:function(e,i,s){"use strict";function a(e){var i=(e.data.recentNews.value,e.data.allProducts.value),s=e.data.allHotdeals.value,a=e.data.productCategories.value,o=void 0;return e.slug&&(o=a.find(function(i){return i.slug===e.slug})),n("div",{},void 0,n("div",{className:"main-contents"},void 0,n("section",{className:"banner shop"},void 0,n("div",{className:"container"},void 0,n("div",{className:"morepage-banner"},void 0,!e.slug&&t,e.slug&&n("h2",{className:"title"},void 0,o.title)))),n("section",{className:"page-main padding-top-100 padding-bottom-100"},void 0,n("div",{className:"container"},void 0,n("div",{className:"row"},void 0,n("h2",{style:{textAlign:"center",fontSize:28}},void 0,"Hot deal"),r,n("div",{className:"col-md-12 col-xs-12 main-left"},void 0,n("div",{className:"list-block column-3"},void 0,s.map(function(e,i){return n("div",{className:"item"},i,n("div",{className:"block-4"},void 0,n("div",{className:"block-image"},void 0,n("div",{className:"square"},void 0,n("img",{src:e.coverUrl,alt:!0,className:"img-full"})),n("a",{href:"/sp/"+e.slug,className:"link"})),n("div",{className:"block-content"},void 0,n("a",{href:"javascript:void(0)",className:"title"},void 0,e.title),n("div",{className:"prices-wrapper"},void 0,n("div",{className:"prices"},void 0,n("span",{className:"number"},void 0,e.price.toLocaleString()),c),n("span",{className:"unit"},void 0,"/",e.donvi)),n("ul",{className:"list-icons"},void 0,n("li",{},void 0,n("span",{className:"link",style:{cursor:"pointer"},onClick:function(){var i=window&&window.sessionStorage?window.sessionStorage:{},s=JSON.parse(i.getItem("cart")||"[]"),a=s.findIndex(function(i){return i.slug===e.slug});a>=0?(s[a].number=s[a].number+1,i.setItem("cart",JSON.stringify(s)),console.log(s)):(s.push({slug:e.slug,number:1,product:e}),i.setItem("cart",JSON.stringify(s))),document.location.href="/gio-hang"}},void 0,d))))))})))),n("div",{className:"row"},void 0,n("h2",{style:{textAlign:"center",fontSize:28}},void 0,"Tất cả sản phẩm"),v,n("div",{className:"col-md-12 col-xs-12 main-left"},void 0,n("div",{className:"list-block column-3"},void 0,i.map(function(e,i){return n("div",{className:"item"},i,n("div",{className:"block-4"},void 0,n("div",{className:"block-image"},void 0,n("div",{className:"square"},void 0,n("img",{src:e.coverUrl,alt:!0,className:"img-full"})),n("a",{href:"/sp/"+e.slug,className:"link"})),n("div",{className:"block-content"},void 0,n("a",{href:"javascript:void(0)",className:"title"},void 0,e.title),n("div",{className:"prices-wrapper"},void 0,n("div",{className:"prices"},void 0,n("span",{className:"number"},void 0,e.price.toLocaleString()),u),n("span",{className:"unit"},void 0,"/",e.donvi)),n("ul",{className:"list-icons"},void 0,n("li",{},void 0,n("span",{className:"link",style:{cursor:"pointer"},onClick:function(){var i=window&&window.sessionStorage?window.sessionStorage:{},s=JSON.parse(i.getItem("cart")||"[]"),a=s.findIndex(function(i){return i.slug===e.slug});a>=0?(s[a].number=s[a].number+1,i.setItem("cart",JSON.stringify(s)),console.log(s)):(s.push({slug:e.slug,number:1,product:e}),i.setItem("cart",JSON.stringify(s))),document.location.href="/gio-hang"}},void 0,m))))))}))))))))}Object.defineProperty(i,"__esModule",{value:!0});var o=s(2),l=(s.n(o),s(1221),s(0)),n=(s.n(l),function(){var e="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103;return function(i,s,a,o){var l=i&&i.defaultProps,n=arguments.length-3;if(s||0===n||(s={}),s&&l)for(var t in l)void 0===s[t]&&(s[t]=l[t]);else s||(s=l||{});if(1===n)s.children=o;else if(n>1){for(var r=Array(n),c=0;c<n;c++)r[c]=arguments[c+3];s.children=r}return{$$typeof:e,type:i,key:void 0===a?null:""+a,ref:null,props:s,_owner:null}}}()),t=n("h2",{className:"title"},void 0,"Happy Green Market"),r=n("hr",{}),c=n("sup",{},void 0,"đ"),d=n("i",{className:"icons fa fa-cart-plus"}),v=n("hr",{}),u=n("sup",{},void 0,"đ"),m=n("i",{className:"icons fa fa-cart-plus"});i.default=a}});