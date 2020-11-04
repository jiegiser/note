(window.webpackJsonp=window.webpackJsonp||[]).push([[54],{595:function(t,s,a){"use strict";a.r(s);var n=a(25),r=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"script-元素"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#script-元素"}},[t._v("#")]),t._v(" script 元素")]),t._v(" "),a("p",[t._v("它有下面几个属性：")]),t._v(" "),a("ul",[a("li",[t._v("async ：可选。表示应该立即开始下载脚本，但不能阻止其他页面动作，比如下载资源或等待其他脚本加载。只对外部脚本文件有效。")]),t._v(" "),a("li",[t._v("charset ：可选。使用 src 属性指定的代码字符集。这个属性很少使用，因为大多数浏览器不在乎它的值。")]),t._v(" "),a("li",[t._v('crossorigin ：可选。配置相关请求的CORS（跨源资源共享）设置。默认不使用CORS。 crossorigin="anonymous" 配置文件请求不必设置凭据标志。 crossorigin="use-credentials" 设置凭据标志，意味着出站请求会包含凭据。')]),t._v(" "),a("li",[t._v("defer ：可选。表示脚本可以延迟到文档完全被解析和显示之后再执行。只对外部脚本文件有效。在 IE7 及更早的版本中，对行内脚本也可以指定这个属性。")]),t._v(" "),a("li",[t._v("integrity ：可选。允许比对接收到的资源和指定的加密签名以验证子资源完整性（SRI，Subresource Integrity）。如果接收到的资源的签名与这个属性指定的签名不匹配，则页面会报错，脚本不会执行。这个属性可以用于确保内容分发网络（CDN，Content Delivery Network）不会提供恶意内容。")]),t._v(" "),a("li",[t._v('language ：废弃。最初用于表示代码块中的脚本语言（如 "JavaScript" 、 "JavaScript 1.2"或 "VBScript" ）。大多数浏览器都会忽略这个属性，不应该再使用它。')]),t._v(" "),a("li",[t._v("src ：可选。表示包含要执行的代码的外部文件。")]),t._v(" "),a("li",[t._v('type ：可选。代替 language ，表示代码块中脚本语言的内容类型（也称 MIME 类型）。按照惯例，这个值始终都是 "text/javascript" ，尽管 "text/javascript" 和 "text/ecmascript"都已经废弃了。JavaScript 文件的 MIME 类型通常是 "application/x-javascript" ，不过给type 属性这个值有可能导致脚本被忽略。在非 IE 的浏览器中有效的其他值还有"application/javascript" 和 "application/ecmascript" 。如果这个值是 module ，则代码会被当成 ES6 模块，而且只有这时候代码中才能出现 import 和 export 关键字。')])]),t._v(" "),a("p",[t._v("使用了 src 属性的 script 元素不应该再在 script 和 <\/script> 标签中再包含其他 JavaScript 代码。如果两者都提供的话，则浏览器只会下载并执行脚本文件，从而忽略行内代码。")]),t._v(" "),a("p",[t._v("不管包含的是什么代码，浏览器都会按照 script 在页面中出现的顺序依次解释它们，前提是它们没有使用 defer 和 async 属性。第二个 script 元素的代码必须在第一个 script 元素的代码解释完毕才能开始解释，第三个则必须等第二个解释完，以此类推。")]),t._v(" "),a("h3",{attrs:{id:"推迟执行脚本"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#推迟执行脚本"}},[t._v("#")]),t._v(" 推迟执行脚本")]),t._v(" "),a("p",[t._v("script 元素定义了一个叫 defer 的属性。这个属性表示脚本在执行的时候不会改变页面的结构。也就是说，脚本会被延迟到整个页面都解析完毕后再运行。因此，在 script 元素上设置 defer 属性，相当于告诉浏览器立即下载，但延迟执行。HTML5 规范要求脚本应该按照它们出现的顺序执行，因此第一个推迟的脚本会在第二个推迟的脚本之前执行，而且两者都会在 DOMContentLoaded 事件之前执行。不过在实际当中，推迟执行的脚本不一定总会按顺序执行或者在 DOMContentLoaded 事件之前执行，因此最好只包含一个这样的脚本。")]),t._v(" "),a("h3",{attrs:{id:"异步执行脚本"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#异步执行脚本"}},[t._v("#")]),t._v(" 异步执行脚本")]),t._v(" "),a("p",[t._v("HTML5 为 script 元素定义了 async 属性。async 属性与 defer 类似。不过，与 defer 不同的是，标记为 async 的脚本并不保证能按照它们出现的次序执行；给\n脚本添加 async 属性的目的是告诉浏览器，不必等脚本下载和执行完后再加载页面，同样也不必等到该异步脚本下载和执行后再加载其他脚本。正因为如此，异步脚本不应该在加载期间修改 DOM。异步脚本保证会在页面的 load 事件前执行，但可能会在 DOMContentLoaded 之前或之后。")]),t._v(" "),a("h3",{attrs:{id:"动态加载脚本"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#动态加载脚本"}},[t._v("#")]),t._v(" 动态加载脚本")]),t._v(" "),a("p",[t._v("JavaScript 可以使用 DOM API 动态加载脚本，向 DOM 中动态添加 script 元素同样可以加载指定的脚本。只要创建一个 script 元素并将其添加到 DOM 即可。")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" script "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" document"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("createElement")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'script'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nscript"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("src "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'gibberish.js'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\ndocument"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("head"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("appendChild")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("script"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("默认情况下，以这种方式创建的 script 元素是以异步方式加载的，相当于添加了 async 属性。不过这样做可能会有问题，因为所有浏览器都支持 createElement() 方法，但不是所有浏览器都支持 async 属性。因此，如果要统一动态脚本的加载行为，可以明确将其设置为同步加载：")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" script "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" document"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("createElement")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'script'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nscript"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("src "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'gibberish.js'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nscript"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("async "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\ndocument"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("head"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("appendChild")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("script"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("以这种方式获取的资源对浏览器预加载器是不可见的。这会严重影响它们在资源获取队列中的优先级。根据应用程序的工作方式以及怎么使用，这种方式可能会严重影响性能。要想让预加载器知道这些动态请求文件的存在，可以在文档头部显式声明它们：")]),t._v(" "),a("div",{staticClass:"language-html extra-class"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("link")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("rel")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("preload"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("href")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("gibberish.js"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])])])}),[],!1,null,null,null);s.default=r.exports}}]);