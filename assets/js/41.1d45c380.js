(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{473:function(t,s,a){"use strict";a.r(s);var n=a(25),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"节点层次"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#节点层次"}},[t._v("#")]),t._v(" 节点层次")]),t._v(" "),a("p",[t._v("HTML 中每一段标记都可以通过树中的一个节点来表示：HTML 元素通过元素节点表示，特性（attribute）通过特性节点表示，文档类型通过文档类型节点来表示，而注释通过注释节点来表示。")]),t._v(" "),a("h3",{attrs:{id:"node-类型"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#node-类型"}},[t._v("#")]),t._v(" Node 类型")]),t._v(" "),a("p",[t._v("JavaScript 中所有节点类型都继承自 Node 类型，因此所有节点属性都共享着相同的基本属性和方法。")]),t._v(" "),a("p",[t._v("每个节点都有一个 nodeType 属性，用于表明节点的类型。节点类型由在 Node 类型中定义的下列 12 个数值常量来表示，任何节点类型必具其一：")]),t._v(" "),a("ul",[a("li",[t._v("Node.ELEMENT_NODE(1)")]),t._v(" "),a("li",[t._v("Node.ATTRIBUTE_NODE(2)")]),t._v(" "),a("li",[t._v("Node.TEXT_NODE(3)")]),t._v(" "),a("li",[t._v("Node.CDATA_SECTION_NODE(4)")]),t._v(" "),a("li",[t._v("Node.ENTITY_PREPERENCE_NODE(5)")]),t._v(" "),a("li",[t._v("Node.ENTITY_NODE(6)")]),t._v(" "),a("li",[t._v("Node.PROCESSING_INSTRUCTION_NODE(7)")]),t._v(" "),a("li",[t._v("Node.COMMENT_NODE(8)")]),t._v(" "),a("li",[t._v("Node.DOCUMENT_NODE(9)")]),t._v(" "),a("li",[t._v("Node.DOCUMENT_TYPE_NODE(10)")]),t._v(" "),a("li",[t._v("Node.DOCUMENT_FRAGMENT_NODE(11)")]),t._v(" "),a("li",[t._v("Node.NOTATION_NODE(12)")])]),t._v(" "),a("p",[t._v("通过比较上面这些常量，可以很容易地确定节点的类型，例如：")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 在 IE 中无效")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("someNode"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("nodeType "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" Node"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("ELEMENT_NODE")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'node is an element'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 可以通过与数值进行比较适用于所有浏览器")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("someNode"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("nodeType "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'node is an element'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h4",{attrs:{id:"nodename-和-nodevalue-属性"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#nodename-和-nodevalue-属性"}},[t._v("#")]),t._v(" nodeName 和 nodeValue 属性")]),t._v(" "),a("p",[t._v("nodeName 是元素的标签名。Node 的 nodeValue 属性返回或设置当前节点的值。")]),t._v(" "),a("h4",{attrs:{id:"节点关系"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#节点关系"}},[t._v("#")]),t._v(" 节点关系")]),t._v(" "),a("ul",[a("li",[t._v("每个节点都有一个 childNodes 属性，用于保存他的子元素，是一个 NodeList 对象，NodeList 是一种 类数组对象，用于保存一组有序的节点，可以通过位置来访问这些节点。NodeList 实际上是基于 DOM 结构动态执行查询的结果，因此 DOM 结构的变化能够自动反应在 NodeList 对象中。他并不是在某一时期的快照。")])]),t._v(" "),a("p",[t._v("下面代码将 NodeList 对象转换为数组")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 在 IE8 之前无效")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" arrayOfNodes "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Array")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("prototype"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("slice")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("call")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("someNode"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" chilNodes"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("p",[t._v("下面代码是兼容 IE8：")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("convertToArray")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("nodes")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" array "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("try")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    array "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Array")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("prototype"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("slice")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("call")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("nodes"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("catch")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ex"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    array "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Array")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" i "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" leng "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" nodes"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("length"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      array"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("push")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("nodes"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("ul",[a("li",[t._v("每个节点都有一个 parentNode 属性；该属性指向文档树中的父节点。包含在 childrenNodes 列表中的每个节点相互之间都是同胞节点，通过使用列表中每个节点的 previousSibling 和 nextSilling 属性，可以访问他的前一个与后一个兄弟节点。")])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("someNodes"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("nextSibling "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Last node in the parents childNodes list'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("someNodes"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("previousSibling "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'First node in the parents childNodes list'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("ul",[a("li",[a("p",[t._v("父节点的 firstChild 和 lastChild 属性分别指向其 childNodes 列表中的第一个和最后一个节点。")])]),t._v(" "),a("li",[a("p",[t._v("使用 hasChildNodes() 方法可以检查是否有子节点；")])]),t._v(" "),a("li",[a("p",[t._v("所有节点都有一个最后一个属性是 ownerDocument，该属性指向表示整个文档的文档节点。这种关系表示的是任何节点都属于他所在的文档，任何节点都不能同时存在于两个或更多的文档中。通过这个属性，我们可以不必在节点层次中通过层层回溯到达顶端，而是可以直接访问文档顶点。")])])]),t._v(" "),a("h4",{attrs:{id:"操作节点"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#操作节点"}},[t._v("#")]),t._v(" 操作节点")]),t._v(" "),a("ul",[a("li",[t._v("appendChild() 方法：用于向 chilNodes 列表的末尾添加一个节点。返回值为新增的节点。")])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" returnedNode "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" someNode"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("appendChild")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("newNode"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("returnedNode "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" newNode"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// true")]),t._v("\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("someNode"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("lastChild "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" newNode"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// true")]),t._v("\n")])])]),a("p",[t._v("如果新添加的节点已经是文档的一部分了，那结果就是将该节点从原来的位置转移到新文职。即使可以将 DOM 树看成是由一系列指针连接起来的，但任何 DOM 节点也不能同时出现在文档中的多个位置上。")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// someNode 有多个子节点")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" returnedNode "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" someNode"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("appendChild")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("someNode"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("firstChild"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("returnNode "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" someNode"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("firstChild"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// false")]),t._v("\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("returnNode "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" someNode"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("lastChild"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// true")]),t._v("\n")])])]),a("ul",[a("li",[t._v("insertBefore() 方法：用于将节点放在 childNodes 列表中某个特定的位置上；他接收两个参数，第一个是要插入节点，第二个是作为参照的节点；插入节点后，被插入的节点会变成参照节点的前一个兄弟节点，同时被方法返回。如果参照节点是 null，则 insertBefore() 与 appendChild() 执行相同的操作，如下")])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 插入后成为左右一个子节点")]),t._v("\nreturnNode "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" someNode"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("insertBefore")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("newNode"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("newNode "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" someNode"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("lastChild"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// true")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 插入后成为第一个子节点")]),t._v("\nreturnNode "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" someNode"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("insertBefore")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("newNode"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" someNode"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("firstChild"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("returnNode "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" newNode"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// true")]),t._v("\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("newNode "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" someNode"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("firstChild"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// true")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 插入到最后一个子节点的前面")]),t._v("\nreturnNode "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" someNoed"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("insertBefore")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("newNode"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" someNode"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("lastChild"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("newNode "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" someNode"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("childNodes"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("someNode"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("childNodes"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("length "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// true")]),t._v("\n")])])]),a("ul",[a("li",[t._v("replaceChild() 方法：替换节点。接收两个参数，要插入的节点和要替换的节点。要替换的节点将由这个方法返回并从文档树中被移除，同时由要插入的节点替换其位置，如下：")])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 替换第一个子节点")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" returnedNode "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" someNode"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("replaceChild")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("newNode"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" someNode"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("firstChild"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 替换最后一个子节点")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" rerurnedNode "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" someNode"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("replaceChild")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("newNode"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" someNode"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("lastChild"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("ul",[a("li",[t._v("removeChild() 方法：移除节点，该方法接收一个参数，即要移除的节点，该方法的返回值为被移除的节点。如下：")])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 移除第一个子节点")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" formerFirstChild "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" someNode"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("removeChild")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("someNode"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("firstChild"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 移除最后一个子节点")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" formerLastChild "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" someNode"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("removeChild")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("someNode"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("lastChild"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("h4",{attrs:{id:"其他方法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#其他方法"}},[t._v("#")]),t._v(" 其他方法")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("cloneNode() 方法：用于创建调用这个方法的节点的一个完全相同的副本；接收一个布尔值参数，表示是否执行深拷贝，ture 执行深拷贝。也就是复制节点及其整个子节点树；参数为 false 的情况下，执行浅拷贝，即只拷贝节点本身。拷贝的节点需要指定父节点，可以通过 appendChild()、insertBefore() 或者 replaceChild() 将它添加到文档中。")])]),t._v(" "),a("li",[a("p",[t._v("normalize() 方法：主要作用处理文档树中的文本节点。由于解析器的实现或 DOM 操作的原因，可能出现文本节点不包含文本，或者接连出现两个文本节点的情况。当在某个节点上调用这个方法时，就会在该节点的后代节点中查找上述两种情况。如果找到了空文本节点，则删除他，如果找到相邻的文本节点 ，则将他们合并为一个文本节点。")])])]),t._v(" "),a("h3",{attrs:{id:"document-类型"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#document-类型"}},[t._v("#")]),t._v(" Document 类型")]),t._v(" "),a("p",[t._v("JavaScript 通过 Document 类型表示文档，在浏览器中，document 对象是 HTMLDocument （继承自 Document 类型） 的一个实例，表示整个 HTML 页面。而且 document 对象是 window 对象的一个属性。具有以下特性：")]),t._v(" "),a("ul",[a("li",[t._v("nodeType 为 9")]),t._v(" "),a("li",[t._v("nodeName 的值为 '#document'")]),t._v(" "),a("li",[t._v("nodeValue 的值为 null")]),t._v(" "),a("li",[t._v("parentNode 的值为 null")]),t._v(" "),a("li",[t._v("ownerDocument 的值为 null")]),t._v(" "),a("li",[t._v("其子节点可能是一个 DocumentType（最多一个）、Element（最多一个）、ProcessingInstruction 或 Comment。")])]),t._v(" "),a("h4",{attrs:{id:"文档的子节点"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#文档的子节点"}},[t._v("#")]),t._v(" 文档的子节点")]),t._v(" "),a("ul",[a("li",[t._v("可以通过 documentElement 属性，访问 HTML 页面中的 HTML 元素。")])])])}),[],!1,null,null,null);s.default=e.exports}}]);