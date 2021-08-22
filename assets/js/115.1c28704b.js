(window.webpackJsonp=window.webpackJsonp||[]).push([[115],{807:function(t,a,s){"use strict";s.r(a);var n=s(26),e=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"缓存头-cache-control-的含义和使用"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#缓存头-cache-control-的含义和使用"}},[t._v("#")]),t._v(" 缓存头 Cache-Control 的含义和使用")]),t._v(" "),s("h2",{attrs:{id:"特性"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#特性"}},[t._v("#")]),t._v(" 特性")]),t._v(" "),s("h3",{attrs:{id:"可缓存性"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#可缓存性"}},[t._v("#")]),t._v(" 可缓存性")]),t._v(" "),s("ul",[s("li",[t._v("public：http 请求返回的过程中设置 Cache-Control 为 public，代表这个 http 请求他返回的内容所经过的任何路径当中包括一些中间的 http 的代理服务器以及发出请求的客户端浏览器他都可以对返回内容缓存操作（也就是说 http 请求经过的地方都可以进行缓存）。")]),t._v(" "),s("li",[t._v("private：http 请求返回的过程中设置 Cache-Control 为 private，代表发起请求的浏览器可以进行缓存。")]),t._v(" "),s("li",[t._v("no-cache：http 请求返回的过程中设置 Cache-Control 为 no-cache，任何节点都不进行缓存（本地可以进行缓存，但是缓存需要服务器端验证之后才可以使用）。")])]),t._v(" "),s("h3",{attrs:{id:"到期"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#到期"}},[t._v("#")]),t._v(" 到期")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("max-age = <seconds>\n就是设置缓存什么时候到期；\nseconds 代表缓存的时间，")])]),t._v(" "),s("li",[s("p",[t._v("s-maxage=<seconds>")])])]),t._v(" "),s("p",[t._v("代替 max-age ，但是只有在代理服务器里面才会生效；也就是说浏览器还是会读取 max-age 作为缓存的到期时间。如果在代理服务器中如果同时设置了 max-age 和 s-maxage；他会读取 s-maxage，因为这个 s-maxage 配置项是专门为代理服务器设置的。")]),t._v(" "),s("ul",[s("li",[t._v("max-stale=<seconds>")])]),t._v(" "),s("p",[t._v("如果返回的 max-age 过期了，并且有设置 max-stale；发起请求的客户端只要在 max-stale 时间内，仍然可以使用过期的缓存。在浏览器中这个请求时没有用的，这个是在发起端进行设置。")]),t._v(" "),s("h3",{attrs:{id:"重新验证"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#重新验证"}},[t._v("#")]),t._v(" 重新验证")]),t._v(" "),s("ul",[s("li",[t._v("must-revalidate")])]),t._v(" "),s("p",[t._v("如果我们设置了 max-age 的缓存中，并且已经过期了；我们必须向原服务端重新发送请求，然后重新获取数据，再来验证这个内容到底是不是真的过期了；而不能直接使用缓存。")]),t._v(" "),s("ul",[s("li",[t._v("proxy-revalidate")])]),t._v(" "),s("p",[t._v("跟 must-revalidate 的功能类型，只不过 proxy-revalidate 用在缓存服务器当中的，指定缓存服务器必须在过期的时候，要在原服务器上请求一遍。而不是直接使用过期的缓存。")]),t._v(" "),s("h3",{attrs:{id:"其他"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#其他"}},[t._v("#")]),t._v(" 其他")]),t._v(" "),s("ul",[s("li",[t._v("no-store：本地和代理服务器本地不可以存储缓存，每次请求都需要从服务器请求数据；")]),t._v(" "),s("li",[t._v("no-transform：主要用在代理服务器中；设置代理服务器不要改变从服务器获取的数据（如果请求的数据较大代理服务器可能会对数据进行压缩等操作）")])]),t._v(" "),s("h3",{attrs:{id:"node-实践"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#node-实践"}},[t._v("#")]),t._v(" node 实践")]),t._v(" "),s("p",[t._v("cache-Control 可以设置多个，用逗号隔开。如果设置了相同的那么后面的会覆盖前面的。")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" http "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'http'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" fs "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'fs'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nhttp"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("createServer")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("req"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" res")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("req"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("url "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/script.js'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" html "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" fs"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("readFileSync")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'test.html'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'utf-8'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    res"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("writeHead")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("200")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Content-Type'")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'text/javascript'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'cache-Control'")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'max-age=20, public, max-age=30'")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    res"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("end")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'console.log(\"loaded\")'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("listen")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("8888")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("p",[t._v("我们发现一个问题，如果设置了 max-age ，在客户端请求时会对数据进行缓存，但是如果在缓存时间内，服务端修改了数据，就会导致请求的数据还是原来缓存的数据，不会拿到新的数据。我们可以通过打包 js 等静态资源文件使用 hash 来命名文件，hash 是根据文件内容生成，如果文件内容没有改变，hash 不会发生改变。这样 url 会随着文件内容发生变化，发送的请求就会根据文件内容变化，如果变化就生成一个新的请求；这样就达到了更新缓存的目的。这也是为什么打包后的文件会有很长一串的命名，是一种刷新缓存的方案。")]),t._v(" "),s("Valine")],1)}),[],!1,null,null,null);a.default=e.exports}}]);