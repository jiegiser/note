(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{381:function(t,s,a){t.exports=a.p+"assets/img/xsrf.db4658bc.png"},474:function(t,s,a){"use strict";a.r(s);var r=a(25),e=Object(r.a)({},(function(){var t=this,s=t.$createElement,r=t._self._c||s;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h2",{attrs:{id:"安全"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#安全"}},[t._v("#")]),t._v(" 安全")]),t._v(" "),r("h3",{attrs:{id:"xss-攻击"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#xss-攻击"}},[t._v("#")]),t._v(" XSS 攻击")]),t._v(" "),r("p",[t._v("攻击方式：在页面展示内容中掺杂"),r("code",[t._v("js")]),t._v("代码，以获取网页信息\n预防措施：转换生成"),r("code",[t._v("js")]),t._v("的特殊字符\n转换特殊字符")]),t._v(" "),r("div",{staticClass:"language-js extra-class"},[r("pre",{pre:!0,attrs:{class:"language-js"}},[r("code",[r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v("amp"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v("lt"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v("gt"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v('\n" '),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v("quot"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n' "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v("#x27"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v("#x2F"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),r("p",[t._v("比如，我们创建博客的时候，输入内容：")]),t._v(" "),r("div",{staticClass:"language-html extra-class"},[r("pre",{pre:!0,attrs:{class:"language-html"}},[r("code",[r("span",{pre:!0,attrs:{class:"token tag"}},[r("span",{pre:!0,attrs:{class:"token tag"}},[r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("script")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),r("span",{pre:!0,attrs:{class:"token script"}},[r("span",{pre:!0,attrs:{class:"token language-javascript"}},[t._v("\n"),r("span",{pre:!0,attrs:{class:"token function"}},[t._v("alert")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("document"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("cookie"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),r("span",{pre:!0,attrs:{class:"token tag"}},[r("span",{pre:!0,attrs:{class:"token tag"}},[r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("script")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),r("p",[t._v("打开博客的时候，页面会弹出用户的 cookie 信息。")]),t._v(" "),r("h3",{attrs:{id:"xsrf-攻击"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#xsrf-攻击"}},[t._v("#")]),t._v(" XSRF 攻击")]),t._v(" "),r("p",[t._v("CSRF（Cross-site request forgery），中文名称：跨站请求伪造。攻击者盗用了你的身份，以你的名义发送恶意请求。\nCSRF能够做的事情包括：以你名义发送邮件，发消息，盗取你的账号，甚至于购买商品，虚拟货币转账......造成的问题包括：个人隐私泄露以及财产安全。例如通过 QQ 等聊天软件发送的链接(有些还伪装成短域名，用户无法分辨)，攻击者就能迫使 Web 应用的用户去执行攻击者预设的操作。例如，当用户登录网络银行去查看其存款余额，在他没有退出时，就点击了一个 QQ 好友发来的链接，那么该用户银行帐户中的资金就有可能被转移到攻击者指定的帐户中。")]),t._v(" "),r("p",[r("img",{attrs:{src:a(381),alt:"在这里插入图片描述"}})]),t._v(" "),r("p",[t._v("从上图可以看出，要完成一次 CSRF 攻击，受害者必须依次完成两个步骤：")]),t._v(" "),r("ol",[r("li",[t._v("登录受信任网银网站，并在本地生成Cookie。")]),t._v(" "),r("li",[t._v("在不登出网银网站的情况下，访问危险网站钓鱼网站。\n这时候受害者就中招了。")])]),t._v(" "),r("p",[t._v("预防")]),t._v(" "),r("ul",[r("li",[t._v("使用 post 接口")]),t._v(" "),r("li",[t._v("增加验证，例如密码、短信验证码、指纹等")])])])}),[],!1,null,null,null);s.default=e.exports}}]);