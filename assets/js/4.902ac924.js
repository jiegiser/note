(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{248:function(t,a,s){t.exports=s.p+"assets/img/browserWeb.6a5ec9f7.png"},249:function(t,a,s){t.exports=s.p+"assets/img/5.cd2b5ad4.png"},250:function(t,a,s){t.exports=s.p+"assets/img/request.a0489e81.png"},301:function(t,a,s){"use strict";s.r(a);var v=s(28),_=Object(v.a)({},(function(){var t=this,a=t.$createElement,v=t._self._c||a;return v("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[v("h1",{attrs:{id:"http-协议基础"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#http-协议基础"}},[t._v("#")]),t._v(" HTTP 协议基础")]),t._v(" "),v("p",[t._v("浏览器输入 URL 后 http 请求返回的完全过程：")]),t._v(" "),v("p",[v("img",{attrs:{src:s(248),alt:"在这里插入图片描述"}})]),t._v(" "),v("p",[t._v("对应这些过程，我们可以从其中入手去做更多的优化；")]),t._v(" "),v("h2",{attrs:{id:"经典五层模型"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#经典五层模型"}},[t._v("#")]),t._v(" 经典五层模型")]),t._v(" "),v("p",[v("img",{attrs:{src:s(249),alt:"在这里插入图片描述"}})]),t._v(" "),v("h3",{attrs:{id:"低三层"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#低三层"}},[t._v("#")]),t._v(" 低三层")]),t._v(" "),v("ul",[v("li",[t._v("物理层主要作用是定义物理设备如何传输数据")]),t._v(" "),v("li",[t._v("数据链路层在通讯的实体间建立数据链路连接")]),t._v(" "),v("li",[t._v("网络层为数据在结点之间传输创建逻辑链路")])]),t._v(" "),v("h3",{attrs:{id:"传输层（tcp，udp）"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#传输层（tcp，udp）"}},[t._v("#")]),t._v(" 传输层（TCP，UDP）")]),t._v(" "),v("p",[t._v("运输层(transport layer)的主要任务就是负责向两台主机进程之间的通信提供通用的数据传输服务。应用进程利用该服务传送应用层报文。“通用的”是指并不针对某一个特定的网络应用，而是多种应用可以使用同一个运输层服务。由于一台主机可同时运行多个线程，因此运输层有复用和分用的功能。所谓复用就是指多个应用层进程可同时使用下面运输层的服务，分用和复用相反，是运输层把收到的信息分别交付上面应用层中的相应进程。")]),t._v(" "),v("ul",[v("li",[t._v("向用户提供可靠的端到端（end-to-end）服务")]),t._v(" "),v("li",[t._v("传输层向高层屏蔽了下层数据通信的细节")])]),t._v(" "),v("p",[t._v("运输层主要使用以下两种协议:")]),t._v(" "),v("p",[t._v("传输控制协议 TCP（Transmission Control Protocol）--提供面向连接的，可靠的数据传输服务。\n用户数据协议 UDP（User Datagram Protocol）--提供无连接的，尽最大努力的数据传输服务（不保证数据传输的可靠性）。")]),t._v(" "),v("h3",{attrs:{id:"应用层（http、ftp-）"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#应用层（http、ftp-）"}},[t._v("#")]),t._v(" 应用层（http、ftp...）")]),t._v(" "),v("p",[t._v("应用层(application-layer）的任务是通过应用进程间的交互来完成特定网络应用。应用层协议定义的是应用进程（进程：主机中正在运行的程序）间的通信和交互的规则。对于不同的网络应用需要不同的应用层协议。在互联网中应用层协议很多，如域名系统DNS，支持万维网应用的 HTTP协议，支持电子邮件的 SMTP协议等等。我们把应用层交互的数据单元称为报文。")]),t._v(" "),v("ul",[v("li",[t._v("为应用软件提供了很多服务")]),t._v(" "),v("li",[t._v("构建于 TCP 协议之上")]),t._v(" "),v("li",[t._v("屏蔽网络传输相关细节")])]),t._v(" "),v("blockquote",[v("p",[t._v("TCP 连接可以对应多个 http 请求")])]),t._v(" "),v("h4",{attrs:{id:"域名系统"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#域名系统"}},[t._v("#")]),t._v(" 域名系统")]),t._v(" "),v("p",[t._v("域名系统(Domain Name System缩写 DNS，Domain Name被译为域名)是因特网的一项核心服务，它作为可以将域名和IP地址相互映射的一个分布式数据库，能够使人更方便的访问互联网，而不用去记住能够被机器直接读取的IP数串。（百度百科）例如：一个公司的 Web 网站可看作是它在网上的门户，而域名就相当于其门牌地址，通常域名都使用该公司的名称或简称。例如上面提到的微软公司的域名，类似的还有：IBM 公司的域名是 www.ibm.com；")]),t._v(" "),v("h4",{attrs:{id:"http-协议"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#http-协议"}},[t._v("#")]),t._v(" http 协议")]),t._v(" "),v("p",[t._v("超文本传输协议（HTTP，HyperText Transfer Protocol)是互联网上应用最为广泛的一种网络协议。所有的 WWW（万维网） 文件都必须遵守这个标准。设计 HTTP 最初的目的是为了提供一种发布和接收 HTML 页面的方法。")]),t._v(" "),v("h2",{attrs:{id:"http-发展史"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#http-发展史"}},[t._v("#")]),t._v(" HTTP 发展史")]),t._v(" "),v("h3",{attrs:{id:"http-0-9"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#http-0-9"}},[t._v("#")]),t._v(" HTTP/0.9")]),t._v(" "),v("ul",[v("li",[t._v("只有一个命令 GET")]),t._v(" "),v("li",[t._v("没有 HEAD 等描述数据的信息")]),t._v(" "),v("li",[t._v("服务器发送完毕，就关闭 TCP 连接")])]),t._v(" "),v("h3",{attrs:{id:"http-1-0"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#http-1-0"}},[t._v("#")]),t._v(" HTTP/1.0")]),t._v(" "),v("ul",[v("li",[t._v("增加了很多命令")]),t._v(" "),v("li",[t._v("增加 status code 和 header")]),t._v(" "),v("li",[t._v("多字符集支持、多部分发送、权限、缓存等")])]),t._v(" "),v("h3",{attrs:{id:"http-1-1"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#http-1-1"}},[t._v("#")]),t._v(" HTTP/1.1")]),t._v(" "),v("ul",[v("li",[t._v("持久连接")]),t._v(" "),v("li",[t._v("pipeline")]),t._v(" "),v("li",[t._v("增加 host 和其他一些命令(通过 host 使得一台物理服务器可以存在很多软件服务器)")])]),t._v(" "),v("h3",{attrs:{id:"http2"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#http2"}},[t._v("#")]),t._v(" HTTP2")]),t._v(" "),v("ul",[v("li",[t._v("所有数据以二进制传输")]),t._v(" "),v("li",[t._v("统一个连接里面发送多个请求不在需要按照顺序来")]),t._v(" "),v("li",[t._v("头信息压缩以及推送等提高效率的功能")])]),t._v(" "),v("h2",{attrs:{id:"问题"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#问题"}},[t._v("#")]),t._v(" 问题")]),t._v(" "),v("h3",{attrs:{id:"http-2-0对于http-1-x有哪些优点？"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#http-2-0对于http-1-x有哪些优点？"}},[t._v("#")]),t._v(" http 2.0对于http 1.x有哪些优点？")]),t._v(" "),v("ul",[v("li",[t._v("多路复用")])]),t._v(" "),v("blockquote",[v("p",[t._v("多路复用允许同时通过单一的 HTTP/2 连接发起多重的请求-响应消息。由于http 1.x的时代中，浏览器向同一域名下发送的http请求数量是受限的，当超出数量限制时，请求会被阻塞，大大降低了用户体验。而HTTP/2 的多路复用允许同时通过单一的 HTTP/2 连接发起多重的请求-响应消息。")])]),t._v(" "),v("ul",[v("li",[t._v("二进制分帧")])]),t._v(" "),v("blockquote",[v("p",[t._v("HTTP/2在应用层和传输层之间追加了一个二进制分帧层，最终使得多个数据流共用一个连接，更加高效的使用tcp连接。从而使得服务器的连接压力减轻，降低了内存的消耗，增大了网络的吞吐量。")])]),t._v(" "),v("ul",[v("li",[t._v("首部压缩")])]),t._v(" "),v("blockquote",[v("p",[t._v("HTTP/2引入了HPACK算法对头部进行压缩，大大减小了数据发送的字节数。")])]),t._v(" "),v("h3",{attrs:{id:"http-请求报文"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#http-请求报文"}},[t._v("#")]),t._v(" http 请求报文")]),t._v(" "),v("p",[v("img",{attrs:{src:s(250),alt:"在这里插入图片描述"}})])])}),[],!1,null,null,null);a.default=_.exports}}]);