(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{566:function(s,t,a){s.exports=a.p+"assets/img/pm2.518ed355.png"},567:function(s,t,a){s.exports=a.p+"assets/img/pm2list.8432f91e.png"},568:function(s,t,a){s.exports=a.p+"assets/img/pm2restart.ab12a8bc.png"},569:function(s,t,a){s.exports=a.p+"assets/img/pm2stop.befb3528.png"},570:function(s,t,a){s.exports=a.p+"assets/img/pm2delete.93d9528e.png"},571:function(s,t,a){s.exports=a.p+"assets/img/pm2info.5dbc5692.png"},572:function(s,t,a){s.exports=a.p+"assets/img/pm2log.4332457f.png"},573:function(s,t,a){s.exports=a.p+"assets/img/pm2monit.f6631798.png"},693:function(s,t,a){"use strict";a.r(t);var n=a(25),r=Object(n.a)({},(function(){var s=this,t=s.$createElement,n=s._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h2",{attrs:{id:"pm2-相关"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#pm2-相关"}},[s._v("#")]),s._v(" PM2 相关")]),s._v(" "),n("ul",[n("li",[s._v("进程守护，系统崩溃自动重启")]),s._v(" "),n("li",[s._v("启动多进程，充分利用 CPU 和内存")]),s._v(" "),n("li",[s._v("自带日志记录功能")])]),s._v(" "),n("h3",{attrs:{id:"下载安装"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#下载安装"}},[s._v("#")]),s._v(" 下载安装")]),s._v(" "),n("p",[s._v("使用命令 npm install pm2 -g;可以使用 pm2 --version 查看版本；")]),s._v(" "),n("h4",{attrs:{id:"启动"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#启动"}},[s._v("#")]),s._v(" 启动")]),s._v(" "),n("p",[s._v("通过 pm2 启动服务：\npm2 start 后面可以跟启动的文件名，也可以跟启动的配置文件；")]),s._v(" "),n("div",{staticClass:"language-json extra-class"},[n("pre",{pre:!0,attrs:{class:"language-json"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 在 package.json 中进行配置下面命令")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// app.js 为项目入口文件；如果是 koa 或者 express 项目，是 bin/www")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token property"}},[s._v('"scripts"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token property"}},[s._v('"start"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"node bin/www"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token property"}},[s._v('"prd"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"cross-env NODE_ENV=production pm2 start app.js"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n")])])]),n("p",[s._v("启动之后，控制台会打印启动的结果：\n"),n("img",{attrs:{src:a(566),alt:"在这里插入图片描述"}})]),s._v(" "),n("h4",{attrs:{id:"查看启动列表"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#查看启动列表"}},[s._v("#")]),s._v(" 查看启动列表")]),s._v(" "),n("p",[s._v("可以使用命令 pm2 list 查看启动的应用：")]),s._v(" "),n("p",[n("img",{attrs:{src:a(567),alt:"在这里插入图片描述"}})]),s._v(" "),n("h4",{attrs:{id:"重启服务"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#重启服务"}},[s._v("#")]),s._v(" 重启服务")]),s._v(" "),n("p",[s._v("可以使用 pm2 restart id/name；比如上面我们启动的服务，有 id 和 name 标识一个服务：\n"),n("img",{attrs:{src:a(568),alt:"在这里插入图片描述"}})]),s._v(" "),n("h4",{attrs:{id:"停止或删除服务"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#停止或删除服务"}},[s._v("#")]),s._v(" 停止或删除服务")]),s._v(" "),n("p",[s._v("使用命令 pm2 stop id/name, pm2 delete id/name;")]),s._v(" "),n("p",[n("img",{attrs:{src:a(569),alt:"在这里插入图片描述"}})]),s._v(" "),n("p",[n("img",{attrs:{src:a(570),alt:"在这里插入图片描述"}})]),s._v(" "),n("h4",{attrs:{id:"查看服务信息"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#查看服务信息"}},[s._v("#")]),s._v(" 查看服务信息")]),s._v(" "),n("p",[s._v("使用命令 pm2 info id/name\n"),n("img",{attrs:{src:a(571),alt:"在这里插入图片描述"}})]),s._v(" "),n("h4",{attrs:{id:"查看服务日志"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#查看服务日志"}},[s._v("#")]),s._v(" 查看服务日志")]),s._v(" "),n("p",[s._v("使用命令 pm2 log id/name\n"),n("img",{attrs:{src:a(572),alt:"在这里插入图片描述"}})]),s._v(" "),n("h4",{attrs:{id:"监听服务更详细的信息"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#监听服务更详细的信息"}},[s._v("#")]),s._v(" 监听服务更详细的信息")]),s._v(" "),n("p",[s._v("使用命令 pm2 monit id/name\n"),n("img",{attrs:{src:a(573),alt:"在这里插入图片描述"}})]),s._v(" "),n("h3",{attrs:{id:"进行守护"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#进行守护"}},[s._v("#")]),s._v(" 进行守护")]),s._v(" "),n("p",[s._v("如果我们使用 node app.js 或者 nodemon app.js，如果服务出现问题，服务崩溃就不能访问了，pm2 遇到进程崩溃，会自动重启服务")]),s._v(" "),n("h3",{attrs:{id:"配置"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#配置"}},[s._v("#")]),s._v(" 配置")]),s._v(" "),n("ul",[n("li",[s._v("新建 pm2 配置文件（包括进程数量，日志文件目录等）")]),s._v(" "),n("li",[s._v("修改 pm2 启动命令，重启")])]),s._v(" "),n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"apps"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"name"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"blog-server"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"script"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"bin/www"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"watch"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 监听文件变化自动重启")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"ignore_watch"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n      "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"node_modules"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n      "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"logs"')]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 开启 4 个进程，pm2 会实现负载均衡")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"instances"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 输出错误日志")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"error_file"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"logs/err.log"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 自定义日志")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"out_file"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"logs/out.log"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 日志时间戳")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"log_date_format"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"YYYY-MM-DD HH:mm:ss"')]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])]),n("p",[s._v("日志内容：")]),s._v(" "),n("div",{staticClass:"language-shell extra-class"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[n("span",{pre:!0,attrs:{class:"token number"}},[s._v("2020")]),s._v("-02-19 "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("16")]),s._v(":52:41: GET /api/user/login-test - 1ms\n"),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("2020")]),s._v("-02-19 "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("16")]),s._v(":52:41:   --"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" GET /api/user/login-test "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("404")]),s._v(" 3ms -\n")])])]),n("p",[s._v("然后修改项目配置：")]),s._v(" "),n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[s._v("  "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"scripts"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"start"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"node bin/www"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"prd"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"cross-env NODE_ENV=production pm2 start pm2.conf.json"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n")])])])])}),[],!1,null,null,null);t.default=r.exports}}]);