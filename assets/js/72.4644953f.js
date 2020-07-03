(window.webpackJsonp=window.webpackJsonp||[]).push([[72],{341:function(s,a,t){"use strict";t.r(a);var e=t(28),r=Object(e.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"系统安全相关"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#系统安全相关"}},[s._v("#")]),s._v(" 系统安全相关")]),s._v(" "),t("h3",{attrs:{id:"sql-注入：窃取数据库内容"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#sql-注入：窃取数据库内容"}},[s._v("#")]),s._v(" sql 注入：窃取数据库内容")]),s._v(" "),t("p",[t("code",[s._v("web 2.0")]),s._v("就有了"),t("code",[s._v("sql")]),s._v("注入攻击；\n攻击方式：输入一个"),t("code",[s._v("sql")]),s._v("片段，最终拼接成一段攻击代码，比如在登录的时候，用户名使用"),t("code",[s._v("sql")]),s._v("语句来进行操作数据。\n最简单的，我们一般登录的"),t("code",[s._v("sql")]),s._v("是：")]),s._v(" "),t("div",{staticClass:"language-sql extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" username"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("realname "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" users "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("where")]),s._v(" username "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'zhangsan'")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("and")]),s._v(" password "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'123'")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("-- 我们可以将用户名传入下面的字符串")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" username"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("realname "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" users "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("where")]),s._v(" username "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'zhangsan'")]),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("--' and password = '123'")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("-- 后面的密码就没什么用了。如果用户输入下面的sql，会直接删除所有用户信息")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" username"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("realname "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" users "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("where")]),s._v(" username "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'zhangsan'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("delete")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" users"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("--' and password = '123'")]),s._v("\n")])])]),t("p",[s._v("预防措施：使用"),t("code",[s._v("mysql")]),s._v("的"),t("code",[s._v("escape")]),s._v("函数处理输入内容即可。")]),s._v(" "),t("h3",{attrs:{id:"xss攻击：窃取前端的-cookie-内容"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#xss攻击：窃取前端的-cookie-内容"}},[s._v("#")]),s._v(" XSS攻击：窃取前端的 cookie 内容")]),s._v(" "),t("p",[s._v("攻击方式：在页面展示内容中掺杂"),t("code",[s._v("js")]),s._v("代码，以获取网页信息\n预防措施：转换生成"),t("code",[s._v("js")]),s._v("的特殊字符\n转换特殊字符")]),s._v(" "),t("div",{staticClass:"language-js extra-class"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&")]),s._v("amp"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&")]),s._v("lt"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&")]),s._v("gt"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v('\n" '),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&")]),s._v("quot"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n' "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&")]),s._v("#x27"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&")]),s._v("#x2F"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])]),t("p",[s._v("比如，我们创建博客的时候，输入内容：")]),s._v(" "),t("div",{staticClass:"language-html extra-class"},[t("pre",{pre:!0,attrs:{class:"language-html"}},[t("code",[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("script")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),t("span",{pre:!0,attrs:{class:"token script"}},[t("span",{pre:!0,attrs:{class:"token language-javascript"}},[s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("alert")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("document"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("cookie"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("script")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n")])])]),t("p",[s._v("用户输入上面的内容，再次展示博客的时候，页面会弹出信息。\n我们通过安装依赖")]),s._v(" "),t("div",{staticClass:"language-js extra-class"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[s._v("npm install xss "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),s._v("save\n")])])]),t("h3",{attrs:{id:"密码加密：保障用户信息安全"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#密码加密：保障用户信息安全"}},[s._v("#")]),s._v(" 密码加密：保障用户信息安全")])])}),[],!1,null,null,null);a.default=r.exports}}]);