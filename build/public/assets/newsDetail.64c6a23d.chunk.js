webpackJsonp([4],{1194:function(a,e,s){"use strict";var i=s(2),l=(s.n(i),s(29)),o=function(){var a="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103;return function(e,s,i,l){var o=e&&e.defaultProps,t=arguments.length-3;if(s||0===t||(s={}),s&&o)for(var d in o)void 0===s[d]&&(s[d]=o[d]);else s||(s=o||{});if(1===t)s.children=l;else if(t>1){for(var m=Array(t),n=0;n<t;n++)m[n]=arguments[n+3];s.children=m}return{$$typeof:a,type:e,key:void 0===i?null:""+i,ref:null,props:s,_owner:null}}}();o("span",{},void 0,o(l.a,{className:"home",to:"/",title:"Go to CargoPress.",rel:"v:url"},void 0,"Trang chủ"))},1195:function(a,e,s){"use strict";var i=s(2);s.n(i),function(){var a="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103}()},1196:function(a,e,s){"use strict";s(1195),s(1194)},815:function(a,e,s){"use strict";function i(a){var e=a.data.news.value,s=a.data.recentNews.value,i=a.data.categories.value;return d("div",{},void 0,d("div",{className:"main-contents"},void 0,d("section",{className:"banner blog-detail"},void 0,d("div",{className:"container"},void 0,d("div",{className:"morepage-banner"},void 0,d("h2",{className:"title"},void 0,e.title)))),d("div",{className:"page-main padding-top-100 padding-bottom-100"},void 0,d("div",{className:"container"},void 0,d("div",{className:"row"},void 0,d("div",{className:"col-md-8 col-xs-12 main-left"},void 0,d("div",{className:"blog-detail-wrapper"},void 0,d("div",{className:"content-wrapper"},void 0,d("div",{className:"title"},void 0,e.title),d("div",{className:"block-info"},void 0,d("div",{className:"block"},void 0,m,d("a",{href:"#",className:"link"},void 0,t()(e.created_at).format("DD/MM/YYYY")))),d("div",{className:"description",dangerouslySetInnerHTML:{__html:e.body}},void 0)))),d("div",{className:"col-md-4 col-xs-12 sidebar"},void 0,n,d("div",{className:"col-2"},void 0,d("div",{className:"recent-post-widget widget"},void 0,c,d("div",{className:"content-widget"},void 0,d("div",{className:"recent-post-list"},void 0,s.map(function(a){return d("div",{className:"single-recent-post-widget"},void 0,d("a",{href:"/p/"+a.slug,className:"thumb img-wrapper"},void 0,d("img",{src:a.coverUrl,alt:""})),d("div",{className:"post-info"},void 0,d("div",{className:"meta-info"},void 0,d("span",{},void 0,t()(a.created_at).format("DD/MM/YYYY"))),d("a",{href:"/p/"+a.slug},void 0,d("div",{className:"description"},void 0,a.title))))})))),d("div",{className:"categories-widget widget"},void 0,r,d("div",{className:"content-widget"},void 0,d("ul",{className:"widget-list"},void 0,i.map(function(a){return d("li",{className:"single-widget-item"},void 0,d("a",{href:"/danh-muc/"+a.slug,className:"link"},void 0,d("span",{className:"fa-custom category"},void 0,a.title)))}))))),g))))))}Object.defineProperty(e,"__esModule",{value:!0});var l=s(2),o=(s.n(l),s(29),s(1196),s(0)),t=s.n(o),d=function(){var a="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103;return function(e,s,i,l){var o=e&&e.defaultProps,t=arguments.length-3;if(s||0===t||(s={}),s&&o)for(var d in o)void 0===s[d]&&(s[d]=o[d]);else s||(s=o||{});if(1===t)s.children=l;else if(t>1){for(var m=Array(t),n=0;n<t;n++)m[n]=arguments[n+3];s.children=m}return{$$typeof:a,type:e,key:void 0===i?null:""+i,ref:null,props:s,_owner:null}}}(),m=d("i",{className:"icons fa fa-calendar-o"},void 0," "),n=d("div",{className:"col-1"},void 0,d("div",{className:"search-widget widget"},void 0,d("form",{},void 0,d("div",{className:"input-group search-wrapper"},void 0,d("input",{type:"text",placeholder:"Search...",className:"search-input form-control"}),d("span",{className:"input-group-btn"},void 0,d("button",{type:"submit",className:"btn submit-btn"},void 0,d("span",{className:"fa fa-search"}))))))),c=d("div",{className:"title-widget"},void 0,"Bài viết mới"),r=d("div",{className:"title-widget"},void 0,"Danh mục"),g=d("div",{className:"col-2"},void 0,d("div",{className:"gallery-widget widget"},void 0,d("div",{className:"title-widget"},void 0,"from gallery"),d("div",{className:"content-widget"},void 0,d("ul",{className:"list-unstyled list-inline"},void 0,d("li",{},void 0,d("a",{href:"/assets/images/news/image-5.jpg","data-fancybox-group":"gallery",className:"thumb fancybox"},void 0,d("img",{src:"/assets/images/news/image-5.jpg",alt:"gallery image 1",className:"img-responsive"}))),d("li",{},void 0,d("a",{href:"/assets/images/news/image-2.jpg","data-fancybox-group":"gallery",className:"thumb fancybox"},void 0,d("img",{src:"/assets/images/news/image-2.jpg",alt:"gallery image 2",className:"img-responsive"}))),d("li",{},void 0,d("a",{href:"/assets/images/news/image-7.jpg","data-fancybox-group":"gallery",className:"thumb fancybox"},void 0,d("img",{src:"/assets/images/news/image-7.jpg",alt:"gallery image 3",className:"img-responsive"}))),d("li",{},void 0,d("a",{href:"/assets/images/news/image-8.jpg","data-fancybox-group":"gallery",className:"thumb fancybox"},void 0,d("img",{src:"/assets/images/news/image-8.jpg",alt:"gallery image 4",className:"img-responsive"}))),d("li",{},void 0,d("a",{href:"/assets/images/news/image-6.jpg","data-fancybox-group":"gallery",className:"thumb fancybox"},void 0,d("img",{src:"/assets/images/news/image-6.jpg",alt:"gallery image 5",className:"img-responsive"}))),d("li",{},void 0,d("a",{href:"/assets/images/news/image-9.jpg","data-fancybox-group":"gallery",className:"thumb fancybox"},void 0,d("img",{src:"/assets/images/news/image-9.jpg",alt:"gallery image 6",className:"img-responsive"}))),d("li",{},void 0,d("a",{href:"/assets/images/news/image-4.jpg","data-fancybox-group":"gallery",className:"thumb fancybox"},void 0,d("img",{src:"/assets/images/news/image-4.jpg",alt:"gallery image 7",className:"img-responsive"}))),d("li",{},void 0,d("a",{href:"/assets/images/news/image-11.jpg","data-fancybox-group":"gallery",className:"thumb fancybox"},void 0,d("img",{src:"/assets/images/news/image-11.jpg",alt:"gallery image 8",className:"img-responsive"})))))),d("div",{className:"social-widget widget"},void 0,d("div",{className:"title-widget"},void 0,"social"),d("div",{className:"content-widget"},void 0,d("ul",{className:"list-unstyled list-inline"},void 0,d("li",{},void 0,d("a",{href:"https://fb.com/happygreen.vn",className:"social-icon fa fa-facebook"}))))));e.default=i}});