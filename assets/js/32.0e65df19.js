(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{499:function(t,s,a){t.exports=a.p+"assets/img/http2t.529755fe.png"},596:function(t,s,a){"use strict";a.r(s);var e=a(25),n=Object(e.a)({},(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h2",{attrs:{id:"http2-的优势和-nginx-配置-http2-的简单使用"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#http2-的优势和-nginx-配置-http2-的简单使用"}},[t._v("#")]),t._v(" HTTP2 的优势和 Nginx 配置 HTTP2 的简单使用")]),t._v(" "),e("h3",{attrs:{id:"http2-的优势"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#http2-的优势"}},[t._v("#")]),t._v(" HTTP2 的优势")]),t._v(" "),e("ul",[e("li",[e("p",[t._v("新的二进制格式（Binary Format），HTTP1.x 的解析是基于文本。基于文本协议的格式解析存在天然缺陷，文本的表现形式有多样性，要做到健壮性考虑的场景必然很多，二进制则不同，只认 0 和 1 的组合。基于这种考虑 HTTP2.0 的协议解析决定采用二进制格式，实现方便且健壮。")])]),t._v(" "),e("li",[e("p",[t._v("多路复用（MultiPlexing），即连接共享，即每一个 request 都是是用作连接共享机制的。一个 request 对应一个 id，这样一个连接上可以有多个 request，每个连接的request 可以随机的混杂在一起，接收方可以根据 request 的 id 将 request 再归属到各自不同的服务端请求里面。")])]),t._v(" "),e("li",[e("p",[t._v("header 压缩，HTTP1.x 的 header 带有大量信息，而且每次都要重复发送，HTTP2.0 使用 encoder 来减少需要传输的 header 大小，通讯双方各自 cache 一份 header fields 表，既避免了重复 header 的传输，又减小了需要传输的大小。")])]),t._v(" "),e("li",[e("p",[t._v("服务端推送（server push），同 SPDY 一样，HTTP2.0 也具有 server push 功能。")])]),t._v(" "),e("li",[e("p",[t._v("分帧传输：可以并发发送不同请求。")])])]),t._v(" "),e("h3",{attrs:{id:"nginx-配置-http2-的简单使用"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#nginx-配置-http2-的简单使用"}},[t._v("#")]),t._v(" Nginx 配置 HTTP2 的简单使用")]),t._v(" "),e("p",[t._v("需要注意的是：目前来说在 https 的请求下才能开启 http2；")]),t._v(" "),e("div",{staticClass:"language-shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[t._v("    server "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      listen       "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("8777")]),t._v(" default_server"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n      listen       "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("::"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(":8777 default_server"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 使用 IP 的情况下")]),t._v("\n      server_name localhost"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("return")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("302")]),t._v(" https://"),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$server_name")]),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$request_uri")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# server_name 就是前面指定的 localhost，request_uri 就是具体访问的路径")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 表示要启动一个服务")]),t._v("\n    server "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 开启 ssl 加密算法以及 http2")]),t._v("\n        listen       "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("443")]),t._v(" ssl http2"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 服务监听的端口-https默认使用端口")]),t._v("\n        server_name  localhost"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 浏览器访问的 host name")]),t._v("\n        http2_push_preload on"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 开启服务器端推送")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 指定对应的证书")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 相对路径-证书存放的路径")]),t._v("\n        ssl_certificate_key "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v("/certs/localhost-privkey.pem"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        ssl_certificate  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v("/certs/localhost-cert.pem"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 要代理的路由")]),t._v("\n        location / "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n          "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 匹配到 localhost:9999/ 代理到下面的地址")]),t._v("\n          proxy_pass http://localhost:8888"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),e("p",[t._v("结果：")]),t._v(" "),e("p",[t._v("可以看到我们的请求已经变成了 http2 协议；")]),t._v(" "),e("p",[e("img",{attrs:{src:a(499),alt:"在这里插入图片描述"}})]),t._v(" "),e("blockquote",[e("p",[t._v("在 git bash 中可以使用 curl -v -k http://localhost:8777 去发送请求")])])])}),[],!1,null,null,null);s.default=n.exports}}]);