(window.webpackJsonp=window.webpackJsonp||[]).push([[156],{822:function(t,s,n){"use strict";n.r(s);var a=n(26),r=Object(a.a)({},(function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h2",{attrs:{id:"nginx"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#nginx"}},[t._v("#")]),t._v(" nginx")]),t._v(" "),n("ul",[n("li",[t._v("高性能的 web 服务器，开源免费")]),t._v(" "),n("li",[t._v("一般用于做静态服务、负载均衡")])]),t._v(" "),n("h3",{attrs:{id:"配置"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#配置"}},[t._v("#")]),t._v(" 配置")]),t._v(" "),n("p",[t._v("打开安装目录："),n("code",[t._v("\\nginx-1.16.1\\conf")]),t._v("中的"),n("code",[t._v("nginx.conf")]),t._v("文件进行配置：")]),t._v(" "),n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[t._v("\n#user  nobody"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 这里是进程数，默认是1")]),t._v("\nworker_processes  "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n#error_log  logs"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("error"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("log"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n#error_log  logs"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("error"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("log  notice"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n#error_log  logs"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("error"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("log  info"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n#pid        logs"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("nginx"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("pid"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n\nevents "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    worker_connections  "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1024")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n\nhttp "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    include       mime"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("types"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    default_type  application"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("octet"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("stream"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    #log_format  main  "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'$remote_addr - $remote_user [$time_local] \"$request\" '")]),t._v("\n    #                  "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'$status $body_bytes_sent \"$http_referer\" '")]),t._v("\n    #                  "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('\'"$http_user_agent" "$http_x_forwarded_for"\'')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    #access_log  logs"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("access"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("log  main"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    sendfile        on"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    #tcp_nopush     on"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    #keepalive_timeout  "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    keepalive_timeout  "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("65")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    #gzip  on"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    server "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 这里是nginx访问的端口")]),t._v("\n        listen       "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("8090")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        server_name  localhost"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n        #charset koi8"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("r"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n        #access_log  logs"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("host"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("access"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("log  main"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n#        location "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n#            root   html"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n#            index  index"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("html index"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("htm"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n#        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* \n        主要的配置 /就是访问页面的端口，配置服务器地址，/api就是接口的地址，\n        在页面中直接使用axios.get('/api/blog/list')进行获取数据\n        然后我们在浏览器中，直接输入nginx监听的端口就可以了比如我的是localhost:8090\n        */")]),t._v("\n\t\tlocation "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t  proxy_pass http"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("localhost"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("8001")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t\t"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\t\tlocation "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("api"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t  proxy_pass http"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("localhost"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("8000")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t\t  proxy_set_header Host $host"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t\t"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n        #error_page  "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("404")]),t._v("              "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("404.")]),t._v("html"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n        # redirect server error pages to the "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("static")]),t._v(" page "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("50")]),t._v("x"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("html\n        #\n        error_page   "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("500")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("502")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("503")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("504")]),t._v("  "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("50")]),t._v("x"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("html"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        location "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("50")]),t._v("x"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("html "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            root   html"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n        # proxy the "),n("span",{pre:!0,attrs:{class:"token constant"}},[t._v("PHP")]),t._v(" scripts to Apache listening on "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("127.0")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v(".0")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v(".1")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("80")]),t._v("\n        #\n        #location "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("~")]),t._v(" \\"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("php$ "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        #    proxy_pass   http"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("127.0")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v(".0")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v(".1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        #"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n        # pass the "),n("span",{pre:!0,attrs:{class:"token constant"}},[t._v("PHP")]),t._v(" scripts to FastCGI server listening on "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("127.0")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v(".0")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v(".1")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("9000")]),t._v("\n        #\n        #location "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("~")]),t._v(" \\"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("php$ "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        #    root           html"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        #    fastcgi_pass   "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("127.0")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v(".0")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v(".1")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("9000")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        #    fastcgi_index  index"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("php"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        #    fastcgi_param  "),n("span",{pre:!0,attrs:{class:"token constant"}},[t._v("SCRIPT_FILENAME")]),t._v("  "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("scripts$fastcgi_script_name"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        #    include        fastcgi_params"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        #"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n        # deny access to "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("htaccess files"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" Apache's document root\n        # concurs "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("with")]),t._v(" nginx's one\n        #\n        #location "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("~")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("\\"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ht "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        #    deny  all"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        #"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n\n    # another virtual host using mix "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("of")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token constant"}},[t._v("IP")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" name"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" and port"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("based configuration\n    #\n    #server "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    #    listen       "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("8000")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    #    listen       somename"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("8080")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    #    server_name  somename  alias  another"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("alias"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    #    location "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    #        root   html"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    #        index  index"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("html index"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("htm"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    #    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    #"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n\n    # "),n("span",{pre:!0,attrs:{class:"token constant"}},[t._v("HTTPS")]),t._v(" server\n    #\n    #server "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    #    listen       "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("443")]),t._v(" ssl"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    #    server_name  localhost"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    #    ssl_certificate      cert"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("pem"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    #    ssl_certificate_key  cert"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("key"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    #    ssl_session_cache    shared"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),n("span",{pre:!0,attrs:{class:"token constant"}},[t._v("SSL")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("m"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    #    ssl_session_timeout  "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),t._v("m"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    #    ssl_ciphers  "),n("span",{pre:!0,attrs:{class:"token constant"}},[t._v("HIGH")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("aNULL"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),n("span",{pre:!0,attrs:{class:"token constant"}},[t._v("MD5")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    #    ssl_prefer_server_ciphers  on"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    #    location "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    #        root   html"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    #        index  index"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("html index"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("htm"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    #    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    #"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n")])])]),n("h3",{attrs:{id:"nginx对应的操作命令"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#nginx对应的操作命令"}},[t._v("#")]),t._v(" nginx对应的操作命令")]),t._v(" "),n("p",[t._v("测试配置文件格式是否正确 nginx -t\n启动 nginx\n重启：nginx -s reload\n停止: nginx -s stop")]),t._v(" "),n("blockquote",[n("p",[t._v("注意在Windows环境下，需要使用管理员权限打开cmd然后进行操作；可以使用 git bash 进行打开；")])]),t._v(" "),n("Valine")],1)}),[],!1,null,null,null);s.default=r.exports}}]);