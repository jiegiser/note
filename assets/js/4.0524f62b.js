(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{246:function(t,a,v){t.exports=v.p+"assets/img/browserWeb.6a5ec9f7.png"},247:function(t,a,v){t.exports=v.p+"assets/img/5.cd2b5ad4.png"},278:function(t,a,v){"use strict";v.r(a);var _=v(28),s=Object(_.a)({},(function(){var t=this,a=t.$createElement,_=t._self._c||a;return _("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[_("h1",{attrs:{id:"http-协议基础"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#http-协议基础"}},[t._v("#")]),t._v(" HTTP 协议基础")]),t._v(" "),_("p",[t._v("浏览器输入 URL 后 http 请求返回的完全过程：")]),t._v(" "),_("p",[_("img",{attrs:{src:v(246),alt:"在这里插入图片描述"}})]),t._v(" "),_("p",[t._v("对应这些过程，我们可以从其中入手去做更多的优化；")]),t._v(" "),_("h2",{attrs:{id:"经典五层模型"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#经典五层模型"}},[t._v("#")]),t._v(" 经典五层模型")]),t._v(" "),_("p",[_("img",{attrs:{src:v(247),alt:"在这里插入图片描述"}})]),t._v(" "),_("h3",{attrs:{id:"低三层"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#低三层"}},[t._v("#")]),t._v(" 低三层")]),t._v(" "),_("ul",[_("li",[t._v("物理层主要作用是定义物理设备如何传输数据")]),t._v(" "),_("li",[t._v("数据链路层在通讯的尸体间建立数据链路连接")]),t._v(" "),_("li",[t._v("网络层为数据在结点之间传输创建逻辑链路")])]),t._v(" "),_("h3",{attrs:{id:"传输层（tcp，udp）"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#传输层（tcp，udp）"}},[t._v("#")]),t._v(" 传输层（TCP，UDP）")]),t._v(" "),_("ul",[_("li",[t._v("向用户提供可靠的端到端（end-to-end）服务")]),t._v(" "),_("li",[t._v("传输层向高层屏蔽了下层数据通信的细节")])]),t._v(" "),_("h3",{attrs:{id:"应用层（http、ftp-）"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#应用层（http、ftp-）"}},[t._v("#")]),t._v(" 应用层（http、ftp...）")]),t._v(" "),_("ul",[_("li",[t._v("为应用软件提供了很多服务")]),t._v(" "),_("li",[t._v("构建于 TCP 协议之上")]),t._v(" "),_("li",[t._v("屏蔽网络传输相关细节")])]),t._v(" "),_("h2",{attrs:{id:"http-发展史"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#http-发展史"}},[t._v("#")]),t._v(" HTTP 发展史")]),t._v(" "),_("h3",{attrs:{id:"http-0-9"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#http-0-9"}},[t._v("#")]),t._v(" HTTP/0.9")]),t._v(" "),_("ul",[_("li",[t._v("只有一个命令 GET")]),t._v(" "),_("li",[t._v("没有 HEAD 等描述数据的信息")]),t._v(" "),_("li",[t._v("服务器发送完毕，就关闭 TCP 连接")])]),t._v(" "),_("h3",{attrs:{id:"http-1-0"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#http-1-0"}},[t._v("#")]),t._v(" HTTP/1.0")]),t._v(" "),_("ul",[_("li",[t._v("增加了很多命令")]),t._v(" "),_("li",[t._v("增加 status code 和 header")]),t._v(" "),_("li",[t._v("多字符集支持、多部分发送、权限、缓存等")])]),t._v(" "),_("h3",{attrs:{id:"http-1-1"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#http-1-1"}},[t._v("#")]),t._v(" HTTP/1.1")]),t._v(" "),_("ul",[_("li",[t._v("持久连接")]),t._v(" "),_("li",[t._v("pipeline")]),t._v(" "),_("li",[t._v("增加 host 和其他一些命令")])]),t._v(" "),_("h3",{attrs:{id:"http2"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#http2"}},[t._v("#")]),t._v(" HTTP2")]),t._v(" "),_("ul",[_("li",[t._v("所有数据以二进制传输")]),t._v(" "),_("li",[t._v("统一个连接里面发送多个请求不在需要按照顺序来")]),t._v(" "),_("li",[t._v("头信息压缩以及推送等提高效率的功能")])]),t._v(" "),_("h2",{attrs:{id:"问题"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#问题"}},[t._v("#")]),t._v(" 问题")]),t._v(" "),_("h3",{attrs:{id:"http-2-0对于http-1-x有哪些优点？"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#http-2-0对于http-1-x有哪些优点？"}},[t._v("#")]),t._v(" http 2.0对于http 1.x有哪些优点？")]),t._v(" "),_("ul",[_("li",[t._v("多路复用")])]),t._v(" "),_("blockquote",[_("p",[t._v("多路复用允许同时通过单一的 HTTP/2 连接发起多重的请求-响应消息。由于http 1.x的时代中，浏览器向同一域名下发送的http请求数量是受限的，当超出数量限制时，请求会被阻塞，大大降低了用户体验。而HTTP/2 的多路复用允许同时通过单一的 HTTP/2 连接发起多重的请求-响应消息。")])]),t._v(" "),_("ul",[_("li",[t._v("二进制分帧")])]),t._v(" "),_("blockquote",[_("p",[t._v("HTTP/2在应用层和传输层之间追加了一个二进制分帧层，最终使得多个数据流共用一个连接，更加高效的使用tcp连接。从而使得服务器的连接压力减轻，降低了内存的消耗，增大了网络的吞吐量。")])]),t._v(" "),_("ul",[_("li",[t._v("首部压缩")])]),t._v(" "),_("blockquote",[_("p",[t._v("HTTP/2引入了HPACK算法对头部进行压缩，大大减小了数据发送的字节数。")])])])}),[],!1,null,null,null);a.default=s.exports}}]);