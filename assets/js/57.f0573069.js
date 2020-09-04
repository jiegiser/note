(window.webpackJsonp=window.webpackJsonp||[]).push([[57],{457:function(t,s,a){"use strict";a.r(s);var n=a(25),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"使用nginx部署https服务"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用nginx部署https服务"}},[t._v("#")]),t._v(" 使用Nginx部署HTTPS服务")]),t._v(" "),a("h3",{attrs:{id:"https-服务部署"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#https-服务部署"}},[t._v("#")]),t._v(" https 服务部署")]),t._v(" "),a("p",[t._v("使用 HTTPS 需要生成私钥与公钥；某个文件夹中打开 git bash 输入命令：openssl req -x509 -newkey rsa:2048 -nodes -sha256 -keyout localhost-privkey.pem -out localhost-cert.pem；会生成两个文件 localhost-privkey.pem 跟 localhost-cert.pem；")]),t._v(" "),a("p",[t._v("这里我将生成的证书放在了 nginx 安装目录下的 certs 文件夹中。这样就完成了 https 服务的部署。")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[t._v("    proxy_cache_path cache "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("levels")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(":2 "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("keys_zone")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("my_cache:10m"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 表示要启动一个服务")]),t._v("\n    server "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 开启 ssl 加密算法")]),t._v("\n        listen       "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("443")]),t._v(" ssl"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 服务监听的端口-https默认使用端口")]),t._v("\n        server_name  localhost"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 浏览器访问的 host name")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 指定对应的证书")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 相对路径-证书存放的路径")]),t._v("\n        ssl_certificate_key "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v("/certs/localhost-privkey.pem"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        ssl_certificate  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v("/certs/localhost-cert.pem"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 要代理的路由")]),t._v("\n        location / "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n          "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 匹配到 localhost:9999/ 代理到下面的地址")]),t._v("\n          proxy_pass http://localhost:8888"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h3",{attrs:{id:"访问-http-跳转到-https-服务"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#访问-http-跳转到-https-服务"}},[t._v("#")]),t._v(" 访问 http 跳转到 https 服务")]),t._v(" "),a("p",[t._v("如果我们想在访问 http 的时候直跳转到 https：")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[t._v("    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 增加服务配置 http 跳转到 https")]),t._v("\n    server "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      listen       "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("8777")]),t._v(" default_server"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n      listen       "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("::"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(":8777 default_server"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 使用 IP 的情况下")]),t._v("\n      server_name localhost"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("302")]),t._v(" https://"),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$server_name")]),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$request_uri")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# server_name 就是前面指定的 localhost，request_uri 就是具体访问的路径")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 表示要启动一个服务")]),t._v("\n    server "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 开启 ssl 加密算法")]),t._v("\n        listen       "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("443")]),t._v(" ssl"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 服务监听的端口-https 默认使用端口")]),t._v("\n        server_name  localhost"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 浏览器访问的 host name")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 指定对应的证书")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 相对路径-证书存放的路径")]),t._v("\n        ssl_certificate_key "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v("/certs/localhost-privkey.pem"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        ssl_certificate  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v("/certs/localhost-cert.pem"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 要代理的路由")]),t._v("\n        location / "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n          "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 匹配到 localhost:9999/ 代理到下面的地址")]),t._v("\n          proxy_pass http://localhost:8888"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])])}),[],!1,null,null,null);s.default=e.exports}}]);