(window.webpackJsonp=window.webpackJsonp||[]).push([[154],{861:function(t,a,s){"use strict";s.r(a);var n=s(26),r=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h2",{attrs:{id:"操作符"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#操作符"}},[t._v("#")]),t._v(" 操作符")]),t._v(" "),s("p",[t._v("需要注意的是 ECMAscript 操作符可以适用于很多值，包括对象。在应用对象的时候，相应的操作符通常都会调用对象的 valueOf 或者 toString 方法来获取可以操作的值。")]),t._v(" "),s("h3",{attrs:{id:"一元操作符"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#一元操作符"}},[t._v("#")]),t._v(" 一元操作符")]),t._v(" "),s("p",[t._v("需要注意的是，如果应用到字符串上，会将字符串转换为数字，然后再执行操作。执行的结果是数值类型，不是字符串。其他类型也是。")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" a "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'123'")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),t._v("a\nconsole"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("a"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 124")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" b "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'123a'")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),t._v("b\nconsole"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("b"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// NaN")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" c "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("undefined")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),t._v("c\nconsole"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("c"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// NaN")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" d "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("''")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),t._v("d\nconsole"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("d"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 1")]),t._v("\n")])])]),s("h4",{attrs:{id:"一元加减操作符"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#一元加减操作符"}},[t._v("#")]),t._v(" 一元加减操作符")]),t._v(" "),s("p",[t._v("对非数值应用一元加操作符时，该操作符会像 Number() 换型函数一样，进行转换；")]),t._v(" "),s("h3",{attrs:{id:"布尔操作符"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#布尔操作符"}},[t._v("#")]),t._v(" 布尔操作符")]),t._v(" "),s("h4",{attrs:{id:"逻辑非"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#逻辑非"}},[t._v("#")]),t._v(" 逻辑非 ！")]),t._v(" "),s("p",[t._v("会将一个值转换为布尔类型。!! 转换的结果跟 Boolean() 方法转换的结果相同，")]),t._v(" "),s("blockquote",[s("p",[t._v("Boolean('') // false")])]),t._v(" "),s("h4",{attrs:{id:"逻辑与"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#逻辑与"}},[t._v("#")]),t._v(" 逻辑与")]),t._v(" "),s("p",[t._v("他也可以应用于任何类型的操作数；在有一个操作数不是布尔值的情况下，逻辑与操作就不一定返回布尔值，遵循的规则如下：")]),t._v(" "),s("ul",[s("li",[t._v("如果第一个操作数是对象，则返回第二个操作数；")]),t._v(" "),s("li",[t._v("如果第二个操作数是对象，则只有在第一个操作数的求职结果为 true 的情况下才会返回该对象；")]),t._v(" "),s("li",[t._v("如果两个操作数都是对象，则返回第二个操作数；")]),t._v(" "),s("li",[t._v("如果第一个操作数是 null，则返回 null；")]),t._v(" "),s("li",[t._v("如果第一个操作数是 NaN，则返回 NaN；")]),t._v(" "),s("li",[t._v("如果第一个操作数是 undefined，则返回 undefined；")])]),t._v(" "),s("p",[t._v("逻辑与操作属于短路操作，也就是说如果第一个操作数能够决定结果，那么就不会再对第二个操作数求值。对于逻辑与操作而言，如果第一个操作数是 false，则无论第二个操作数是什么值，结果都不再可能是 true 了。")]),t._v(" "),s("p",[t._v("看下面代码：")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" found "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" result "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" found "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" someUndefinedVariable "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 报错")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("alert")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("result"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("p",[t._v("这里说明逻辑与操作中不能使用未定义的值。如果 found 为 false，就不会往下面执行，直接返回 false。")]),t._v(" "),s("h3",{attrs:{id:"逻辑或"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#逻辑或"}},[t._v("#")]),t._v(" 逻辑或")]),t._v(" "),s("p",[t._v("逻辑或返回的结果跟逻辑与很类似，不过要看两个值能不能转换为 Boolean 类型，如果第一个能转换为 Boolan 的 true ，就返回第一个；不会执行后面的操作。")]),t._v(" "),s("h3",{attrs:{id:"乘法操作符"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#乘法操作符"}},[t._v("#")]),t._v(" 乘法操作符")]),t._v(" "),s("p",[t._v("在操作符为非数值的情况下，会自动执行类型转换。后台会使用 Number() 方法进行转换。比较特殊的规则如下：")]),t._v(" "),s("ul",[s("li",[t._v("如果是 Infinity 与 0 相乘，结果是 NaN；")]),t._v(" "),s("li",[t._v("如果是 Infinity 与非 0 相乘，则结果是 Infinity 或 -Infinity，取决于有符号操作数的符号；")]),t._v(" "),s("li",[t._v("如果是 Infinity 与 Infinity 相乘，结果是 Infinity；")])]),t._v(" "),s("h3",{attrs:{id:"除法操作符"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#除法操作符"}},[t._v("#")]),t._v(" 除法操作符")]),t._v(" "),s("ul",[s("li",[t._v("如果是 Infinity 被 Infinity 除，则结果是 NaN；")]),t._v(" "),s("li",[t._v("如果是零被零除，结果是 NaN；")]),t._v(" "),s("li",[t._v("如果是非零的有限数被零除，则结果是 Infinity 或 -Infinity，取决于有符号操作数的符号；")]),t._v(" "),s("li",[t._v("如果是 Infinity 被任何非零数值除，则结果是 Infinity 或 -Infinity，取决于有符号操作数的符号；")])]),t._v(" "),s("h3",{attrs:{id:"求模"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#求模"}},[t._v("#")]),t._v(" 求模")]),t._v(" "),s("ul",[s("li",[t._v("如果被除数是无穷大值而除数是有限大的数值，返回 NaN；")]),t._v(" "),s("li",[t._v("如果被除数是有限大的数值而除数是零，返回 NaN；")]),t._v(" "),s("li",[t._v("如果是 Infinity 被 Infinity 除，结果为 NaN；")]),t._v(" "),s("li",[t._v("如果被除数是有限大的数值而除数是无穷大的数值，则结果是被除数；")]),t._v(" "),s("li",[t._v("如果被除数是零，则结果是零；")]),t._v(" "),s("li",[t._v("如果有一个操作数不是数值，则后台调用 Number() 将其转换为数值在执行；")])]),t._v(" "),s("h3",{attrs:{id:"加性操作符"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#加性操作符"}},[t._v("#")]),t._v(" 加性操作符")]),t._v(" "),s("h4",{attrs:{id:"加法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#加法"}},[t._v("#")]),t._v(" 加法")]),t._v(" "),s("p",[t._v("如果两个操作数都是数值，比较特殊的计算规则如下：")]),t._v(" "),s("ul",[s("li",[t._v("如果有一个是 NaN，那么结果是 NaN")]),t._v(" "),s("li",[t._v("如果是 Infinity 加 Infinity，结果是 Infinity")]),t._v(" "),s("li",[t._v("如果是 -Infinity 加 -Infinity，结果是 -Infinity")]),t._v(" "),s("li",[t._v("如果是 Infinity 加 -Infinity，结果是 NaN")]),t._v(" "),s("li",[t._v("如果是 +0 加 +0，结果是 +0")]),t._v(" "),s("li",[t._v("如果是 -0 加 -0，结果是 -0")]),t._v(" "),s("li",[t._v("如果是 +0 加 -0，结果是 +0")])]),t._v(" "),s("p",[t._v("如果其中一个操作数是字符串，应用下面规则：")]),t._v(" "),s("ul",[s("li",[t._v("如果两个操作数都是字符串，则将第二个操作数与第一个操作数拼接起来")]),t._v(" "),s("li",[t._v("如果只有一个操作数是字符串，则将另一个操作数转换为字符串，然后再将两个字符串拼接起来")])]),t._v(" "),s("p",[t._v('如果有一个操作数是对象、数值或布尔值。则调用他们的 toString() 方法取得相应的字符串值，然后在应用到前面的规则中，对于 undefined 和 null，则分别调用 String() 函数并取得对应的转换后的字符串 "undefined" 和 "null"')]),t._v(" "),s("h4",{attrs:{id:"减法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#减法"}},[t._v("#")]),t._v(" 减法")]),t._v(" "),s("p",[t._v("减法遵循一些特殊的规则：")]),t._v(" "),s("ul",[s("li",[t._v("如果有一个操作数是 NaN，结果是 NaN；")]),t._v(" "),s("li",[t._v("如果是 Infinity 减 InFinity 结果是 NaN；")]),t._v(" "),s("li",[t._v("如果是 -Infinity 减 -InFinity 结果是 NaN；")]),t._v(" "),s("li",[t._v("如果是 Infinity 减 -InFinity 结果是 Infinity；")]),t._v(" "),s("li",[t._v("如果是 -Infinity 减 InFinity 结果是 -Infinity；")]),t._v(" "),s("li",[t._v("如果是 +0 减 +0，结果是 +0；")]),t._v(" "),s("li",[t._v("如果是 -0 减 +0，结果是 -0；")]),t._v(" "),s("li",[t._v("如果是 -0 减 -0，结果是 +0；")]),t._v(" "),s("li",[t._v("如果有一个操作数是字符串、布尔值、null、或 undefined，则先在后台调用 Number() 函数的将其转换为数值，然后再根据前面；然后再根据前面的规则执行减法计算。")]),t._v(" "),s("li",[t._v("如果有一个操作数是对象，先调用 ValueOf() 方法，如果是 NaN，结果就是 NaN，如果没有 ValueOf 方法，就调用 toString() 方法，然后转换为数值计算。")])]),t._v(" "),s("h3",{attrs:{id:"关系操作符"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#关系操作符"}},[t._v("#")]),t._v(" 关系操作符")]),t._v(" "),s("p",[t._v("比较特殊的规则：")]),t._v(" "),s("ul",[s("li",[t._v("如果两个操作数是字符串则比较两个字符串对应的字符编码值。")]),t._v(" "),s("li",[t._v("如果一个操作数是数值，则将另一个转换为数值进行比较。")]),t._v(" "),s("li",[t._v("如果是对象则按照：ValueOf() -> toString() 执行。")]),t._v(" "),s("li",[t._v("如果一个操作数是布尔值，则先将其转换为数值，然后再执行比较。")]),t._v(" "),s("li",[t._v("任何操作数与 NaN 进行比较，都是 false；")])]),t._v(" "),s("p",[t._v("在两个字符串比较的时候，实际比较的是两个字符串中对应位置的每个字符的字符编码值。")]),t._v(" "),s("h3",{attrs:{id:"相等操作符"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#相等操作符"}},[t._v("#")]),t._v(" 相等操作符")]),t._v(" "),s("p",[t._v("比较特殊的规则：")]),t._v(" "),s("ul",[s("li",[t._v("如果一个操作数是字符串，另一个操作数是数值，在比较之前先将字符串转换为数值。")])]),t._v(" "),s("h3",{attrs:{id:"逗号操作符"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#逗号操作符"}},[t._v("#")]),t._v(" 逗号操作符")]),t._v(" "),s("p",[t._v("比较特殊的，用于赋值时，逗号操作数总会返回表达式中的最后一项：")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" num "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 0")]),t._v("\n")])])]),s("h3",{attrs:{id:"breack-和-continue-语句"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#breack-和-continue-语句"}},[t._v("#")]),t._v(" breack 和 continue 语句")]),t._v(" "),s("p",[t._v("break 语句会立即退出循环，强制继续执行循环后面的语句，而 continue 语句虽然也是立即退出循环，但退出循环后会从循环的顶部继续执行。")]),t._v(" "),s("h3",{attrs:{id:"switch-语句"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#switch-语句"}},[t._v("#")]),t._v(" switch 语句")]),t._v(" "),s("p",[t._v("可以在 switch 语句中使用任何数据类型，无论是字符串，还是对象都没有问题。其次每个 case 的值不一定是常量，可以是变量，甚至是表达式。")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("switch")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("i"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("case")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("25")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("case")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("35")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("alert")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("i"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("break")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("alert")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'other'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("blockquote",[s("p",[t._v("switch 语句在比较值时使用的是全等操作符，因此不会发生类型转换。")])]),t._v(" "),s("Valine")],1)}),[],!1,null,null,null);a.default=r.exports}}]);