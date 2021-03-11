(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{653:function(t,v,_){t.exports=_.p+"assets/img/http.068d9084.png"},654:function(t,v,_){t.exports=_.p+"assets/img/file.48493ed5.png"},823:function(t,v,_){"use strict";_.r(v);var s=_(29),a=Object(s.a)({},(function(){var t=this,v=t.$createElement,s=t._self._c||v;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"资源的合并与压缩"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#资源的合并与压缩"}},[t._v("#")]),t._v(" 资源的合并与压缩")]),t._v(" "),s("h2",{attrs:{id:"http-请求的过程以及潜在的性能优化"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#http-请求的过程以及潜在的性能优化"}},[t._v("#")]),t._v(" http 请求的过程以及潜在的性能优化")]),t._v(" "),s("p",[t._v("需要优化 http 请求相关，首先需要知道一个 http 请求到底经历了哪些过程（可以看 http 模块）：")]),t._v(" "),s("p",[s("img",{attrs:{src:_(653),alt:"在这里插入图片描述"}})]),t._v(" "),s("p",[t._v("可以看到有下面的一些优化点：")]),t._v(" "),s("ul",[s("li",[t._v("减少 dns 查询时间")]),t._v(" "),s("li",[t._v("网络请求的过程走最近的网络环境（cdn 加速）")]),t._v(" "),s("li",[t._v("相同的静态资源进行缓存")]),t._v(" "),s("li",[t._v("减少 http 请求大小")]),t._v(" "),s("li",[t._v("减少 http 请求次数")]),t._v(" "),s("li",[t._v("服务端渲染")])]),t._v(" "),s("h3",{attrs:{id:"html-压缩"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#html-压缩"}},[t._v("#")]),t._v(" HTML 压缩")]),t._v(" "),s("p",[t._v("HTML 代码压缩就是压缩这些在文本文件中有意义，但是在 HTML 中不显示的字符，包括空格，制表符，换行符等，还有一些其他意思的字符，如 HTML 注释也可以被压缩。")]),t._v(" "),s("h4",{attrs:{id:"如何进行-html-压缩"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#如何进行-html-压缩"}},[t._v("#")]),t._v(" 如何进行 HTML 压缩")]),t._v(" "),s("ul",[s("li",[t._v("使用在线网站进行压缩")]),t._v(" "),s("li",[t._v("使用 nodejs 的 html-minfier 工具")]),t._v(" "),s("li",[t._v("后端模板引擎渲染压缩 （ejs 模板等）")])]),t._v(" "),s("h3",{attrs:{id:"css-压缩"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#css-压缩"}},[t._v("#")]),t._v(" css 压缩")]),t._v(" "),s("p",[t._v("主要做下面工作：")]),t._v(" "),s("ul",[s("li",[t._v("无效代码删除")]),t._v(" "),s("li",[t._v("css 语义合并")])]),t._v(" "),s("h4",{attrs:{id:"如何进行-css-压缩"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#如何进行-css-压缩"}},[t._v("#")]),t._v(" 如何进行 css 压缩")]),t._v(" "),s("ul",[s("li",[t._v("使用在线网站压缩")]),t._v(" "),s("li",[t._v("使用 html-minifier 对 HTML 中的 css 进行压缩")]),t._v(" "),s("li",[t._v("使用 clean-css 对 css 进行压缩")])]),t._v(" "),s("h3",{attrs:{id:"js-压缩与混乱"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#js-压缩与混乱"}},[t._v("#")]),t._v(" js 压缩与混乱")]),t._v(" "),s("ul",[s("li",[t._v("无效字符的删除")]),t._v(" "),s("li",[t._v("剔除注释")]),t._v(" "),s("li",[t._v("代码语义的缩减和优化")]),t._v(" "),s("li",[t._v("代码保护")])]),t._v(" "),s("h4",{attrs:{id:"如何进行-js-压缩和混乱"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#如何进行-js-压缩和混乱"}},[t._v("#")]),t._v(" 如何进行 js 压缩和混乱")]),t._v(" "),s("ul",[s("li",[t._v("使用在线网站进行压缩")]),t._v(" "),s("li",[t._v("使用 html-minifier 对 HTML 中的 js 进行压缩")]),t._v(" "),s("li",[t._v("使用 uglifyjs2 对 js 进行压缩")])]),t._v(" "),s("h3",{attrs:{id:"文件合并"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#文件合并"}},[t._v("#")]),t._v(" 文件合并")]),t._v(" "),s("p",[s("img",{attrs:{src:_(654),alt:"在这里插入图片描述"}})]),t._v(" "),s("p",[t._v("可以看到不合并请求可能会导致下面问题：")]),t._v(" "),s("ul",[s("li",[t._v("文件与文件之间有插入的上行请求，增加了 N-1 个网络延迟")]),t._v(" "),s("li",[t._v("受丢包问题影响更严重")]),t._v(" "),s("li",[t._v("经过代理服务器时可能会被断开")])]),t._v(" "),s("p",[t._v("文件合并存在的问题：")]),t._v(" "),s("ul",[s("li",[t._v("首屏渲染问题")]),t._v(" "),s("li",[t._v("缓存失效问题")])]),t._v(" "),s("p",[t._v("多个文件压缩在一起可能会导致首屏加载慢的问题，以及如果其中一个文件改变那么根据文件生成的 hash 等字符串改变或重新请求资源，导致缓存失效。\n我们可以优化：")]),t._v(" "),s("ul",[s("li",[t._v("公共库合并")]),t._v(" "),s("li",[t._v("不同页面的合并")]),t._v(" "),s("li",[t._v("根据实际应用进行文件合并")])]),t._v(" "),s("p",[t._v("如何进行文件合并：")]),t._v(" "),s("ul",[s("li",[t._v("使用在线网站进行文件合并")]),t._v(" "),s("li",[t._v("使用 nodejs 实现文件合并（不同的构件工具）")])]),t._v(" "),s("Valine")],1)}),[],!1,null,null,null);v.default=a.exports}}]);