webpackJsonp([2],{393:function(a,e,s){"use strict";function i(a){var e=a.data.allNews.value,s=a.data.recentNews.value,i=a.data.categories.value,l=void 0;return a.slug&&(l=i.find(function(e){return e.slug===a.slug})),m("div",{className:"main-contents"},void 0,m("section",{className:"banner blog"},void 0,m("div",{className:"container"},void 0,m("div",{className:"morepage-banner"},void 0,!a.slug&&d,a.slug&&m("h2",{className:"title"},void 0,l.title)))),m("div",{className:"page-main padding-top-100 padding-bottom-100"},void 0,m("div",{className:"container"},void 0,m("div",{className:"row"},void 0,m("div",{className:"col-md-8 col-xs-12 main-left"},void 0,m("div",{className:"blog-masonry"},void 0,e.map(function(a){return m("div",{className:"item"},void 0,m("div",{className:"block-1"},void 0,m("div",{className:"block-image"},void 0,m("img",{src:a.coverUrl,alt:!0,className:"img-full"}),m("a",{href:"/p/"+a.slug,className:"link"})),m("div",{className:"block-content"},void 0,m("a",{href:"/p/"+a.slug,className:"title"},void 0,a.title),m("div",{className:"description"},void 0,m("p",{className:"text"},void 0,a.description)),m("a",{href:"/p/"+a.slug,className:"readmore"},void 0,c,g),m("div",{className:"block-info"},void 0,m("div",{className:"info-left"},void 0,m("div",{className:"block"},void 0,n,t()(a.created_at).format("DD/MM/YYYY")))))))}))),m("div",{className:"col-md-4 col-xs-12 sidebar"},void 0,m("div",{className:"col-2"},void 0,m("div",{className:"recent-post-widget widget"},void 0,v,m("div",{className:"content-widget"},void 0,m("div",{className:"recent-post-list"},void 0,s.map(function(a){return m("div",{className:"single-recent-post-widget"},void 0,m("a",{href:"/p/"+a.slug,className:"thumb img-wrapper"},void 0,m("img",{src:a.coverUrl,alt:""})),m("div",{className:"post-info"},void 0,m("div",{className:"meta-info"},void 0,m("span",{},void 0,t()(a.created_at).format("DD/MM/YYYY"))),m("a",{href:"/p/"+a.slug},void 0,m("div",{className:"description"},void 0,a.title))))})))),m("div",{className:"categories-widget widget"},void 0,r,m("div",{className:"content-widget"},void 0,m("ul",{className:"widget-list"},void 0,m("li",{className:"single-widget-item"},void 0,m("a",{href:"/tin-tuc",className:"link"},void 0,N)),i.map(function(a){return m("li",{className:"single-widget-item"},void 0,m("a",{href:"/tin-tuc/"+a.slug,className:"link"},void 0,m("span",{className:"fa-custom category"},void 0,a.title)))}))))),f)))))}Object.defineProperty(e,"__esModule",{value:!0});var l=s(2),o=(s.n(l),s(31),s(0)),t=s.n(o),m=function(){var a="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103;return function(e,s,i,l){var o=e&&e.defaultProps,t=arguments.length-3;if(s||0===t||(s={}),s&&o)for(var m in o)void 0===s[m]&&(s[m]=o[m]);else s||(s=o||{});if(1===t)s.children=l;else if(t>1){for(var d=Array(t),c=0;c<t;c++)d[c]=arguments[c+3];s.children=d}return{$$typeof:a,type:e,key:void 0===i?null:""+i,ref:null,props:s,_owner:null}}}(),d=m("h2",{className:"title"},void 0,"Trang tin tức"),c=m("span",{className:"text"},void 0,"Đọc thêm"),g=m("i",{className:"icons fa fa-long-arrow-right"},void 0," "),n=m("i",{className:"icons fa fa-calendar-o"},void 0," "),v=m("div",{className:"title-widget"},void 0,"Bài viết mới"),r=m("div",{className:"title-widget"},void 0,"Danh mục"),N=m("span",{className:"fa-custom category"},void 0,"Tổng hợp"),f=m("div",{className:"col-2"},void 0,m("div",{className:"gallery-widget widget"},void 0,m("div",{className:"title-widget"},void 0,"Thư viện ảnh"),m("div",{className:"content-widget"},void 0,m("ul",{className:"list-unstyled list-inline"},void 0,m("li",{},void 0,m("a",{href:"assets/images/news/image-5.jpg","data-fancybox-group":"gallery",className:"thumb fancybox"},void 0,m("img",{src:"assets/images/news/image-5.jpg",alt:"gallery image 1",className:"img-responsive"}))),m("li",{},void 0,m("a",{href:"assets/images/news/image-2.jpg","data-fancybox-group":"gallery",className:"thumb fancybox"},void 0,m("img",{src:"assets/images/news/image-2.jpg",alt:"gallery image 2",className:"img-responsive"}))),m("li",{},void 0,m("a",{href:"assets/images/news/image-7.jpg","data-fancybox-group":"gallery",className:"thumb fancybox"},void 0,m("img",{src:"assets/images/news/image-7.jpg",alt:"gallery image 3",className:"img-responsive"}))),m("li",{},void 0,m("a",{href:"assets/images/news/image-8.jpg","data-fancybox-group":"gallery",className:"thumb fancybox"},void 0,m("img",{src:"assets/images/news/image-8.jpg",alt:"gallery image 4",className:"img-responsive"}))),m("li",{},void 0,m("a",{href:"assets/images/news/image-6.jpg","data-fancybox-group":"gallery",className:"thumb fancybox"},void 0,m("img",{src:"assets/images/news/image-6.jpg",alt:"gallery image 5",className:"img-responsive"}))),m("li",{},void 0,m("a",{href:"assets/images/news/image-9.jpg","data-fancybox-group":"gallery",className:"thumb fancybox"},void 0,m("img",{src:"assets/images/news/image-9.jpg",alt:"gallery image 6",className:"img-responsive"}))),m("li",{},void 0,m("a",{href:"assets/images/news/image-4.jpg","data-fancybox-group":"gallery",className:"thumb fancybox"},void 0,m("img",{src:"assets/images/news/image-4.jpg",alt:"gallery image 7",className:"img-responsive"}))),m("li",{},void 0,m("a",{href:"assets/images/news/image-11.jpg","data-fancybox-group":"gallery",className:"thumb fancybox"},void 0,m("img",{src:"assets/images/news/image-11.jpg",alt:"gallery image 8",className:"img-responsive"})))))),m("div",{className:"social-widget widget"},void 0,m("div",{className:"title-widget"},void 0,"social"),m("div",{className:"content-widget"},void 0,m("ul",{className:"list-unstyled list-inline"},void 0,m("li",{},void 0,m("a",{target:"_blank",href:"https://fb.com/happygreenmarket",className:"social-icon fa fa-facebook"}))))));e.default=i}});