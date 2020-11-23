(window.webpackJsonp=window.webpackJsonp||[]).push([[73],{739:function(t,s,a){"use strict";a.r(s);var n=a(29),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"数据类型"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#数据类型"}},[t._v("#")]),t._v(" 💫 数据类型")]),t._v(" "),a("h3",{attrs:{id:"number"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#number"}},[t._v("#")]),t._v(" 👉 Number")]),t._v(" "),a("blockquote",[a("p",[t._v("在进行算数运算时候，所有八进制和十六进制表示的数值最终将转换为十进制数值。")])]),t._v(" "),a("h4",{attrs:{id:"浮点数值"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#浮点数值"}},[t._v("#")]),t._v(" 🌟 浮点数值")]),t._v(" "),a("blockquote",[a("p",[t._v("保存浮点数值需要的内存空间是保存整数的两倍；因此 ECMAscript 会不失时机的将浮点数转换为整数。\nECMAscript 会将小数点后面带有 6 个零以上的浮点数值转换为 e 表示法表示的数值。\n浮点数值的最高精度为 17 位小数。")])]),t._v(" "),a("h4",{attrs:{id:"isfinite"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#isfinite"}},[t._v("#")]),t._v(" 🌟 isFinite")]),t._v(" "),a("p",[t._v("判断一个数值是不是有穷的。同样 NaN、undefined、字符串（不是可以转换为整数的）都为 false")]),t._v(" "),a("h4",{attrs:{id:"isnan"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#isnan"}},[t._v("#")]),t._v(" 🌟 isNaN")]),t._v(" "),a("p",[t._v("Number 有一个检测数值是不是 NaN 的方法，isNaN：\n其他都为 false")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("isNaN")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("NaN")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// true")]),t._v("\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("isNaN")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'hello'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// true")]),t._v("\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("isNaN")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("undefined")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// true")]),t._v("\n")])])]),a("p",[t._v("isNaN 也适用于对象，对对象检测步骤如下：")]),t._v(" "),a("blockquote",[a("p",[t._v("首先调用对象的 valueOf 方法，然后确定该方法返回的值是否可以转换为数值，如不不能，则基于这个返回值再调用 toString 方法，再测试返回值。")])]),t._v(" "),a("h4",{attrs:{id:"数值转换"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#数值转换"}},[t._v("#")]),t._v(" 🌟 数值转换")]),t._v(" "),a("p",[t._v("有三个函数可以将非数值转换为数值：Number()、parseInt()、parseFloat。第一个函数适用于任何类型的数值，第二个以及第三个则专门用于将字符串转换为数值。")]),t._v(" "),a("blockquote",[a("p",[t._v("一元加操作符的操作与 Number 函数相同")])]),t._v(" "),a("ol",[a("li",[t._v("Number() 函数的转换比较特殊的如下：")])]),t._v(" "),a("ul",[a("li",[t._v("如果是 undefined 值，返回 NaN；")]),t._v(" "),a("li",[t._v("如果是字符串：如果字符串包含数字（包括前面带正号或者负号的情况），就转换为十进制数值；注意这里，如果是以 0 开头的字符串数字，不会以八进制转换为十进制，直接转换为十进制；比如 '011' 转换为 11；如果字符串中包含有效的浮点格式，也会转换为为对应的浮点数值。同样注意的是会忽略前导的 0；如果字符串中包含有效的十六进制格式，那么将其转换为相同大小的十进制整数值。如果为空字符串转换为 0，如果不是上面的情况，比如 '123asd' 不会转换为 123，直接返回 NaN；不会像 parseInt 一样转换为 123 的。")]),t._v(" "),a("li",[t._v("如果是对象的话，根据 isNaN 转换的步骤进行转换：valueOf、toString")])]),t._v(" "),a("ol",{attrs:{start:"2"}},[a("li",[t._v("parseInt() 方法转换数值比较特殊的如下：")])]),t._v(" "),a("p",[t._v("首先他会忽略字符串前面的空格，直至找到第一个非空字符。")]),t._v(" "),a("ul",[a("li",[t._v("如果第一个字符不是数字或者负、正号，就返回 NaN；")]),t._v(" "),a("li",[t._v("如果为空字符串转换为 NaN（注意这里的跟 Number() 是不一样的，他返回为 0）")]),t._v(" "),a("li",[t._v("如果第一个是数字字符，就会继续解析，直到后续字符没有或者遇到了一个非数字字符，解析结束；所以 '123asd' 返回 123")]),t._v(" "),a("li",[t._v("由于各种版本，解析八进制数值得不到统一，可以传递第二个参数来指定要解析的数值是何进制的；如果指定了第二个为 16 进制，那么字符串 '0xAF' 前面的 '0x' 可以省略。")])]),t._v(" "),a("ol",{attrs:{start:"3"}},[a("li",[t._v("parseFloat() 方法转换数值比较特殊的如下：")])]),t._v(" "),a("ul",[a("li",[t._v("他只能解析十进制的数值，因此字符串前面的 0 始终都会被忽略；但是十六进制的字符串始终被转换为 0；因为解析到后面的 x 就停止解析了。")]),t._v(" "),a("li",[t._v("他没有向 parseInt 一样有第二个参数指定基数的用法，")]),t._v(" "),a("li",[t._v("如果解析的字符串是一个可以解析为整数的数值，他会返回整数。")])]),t._v(" "),a("h3",{attrs:{id:"string"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#string"}},[t._v("#")]),t._v(" 👉 String")]),t._v(" "),a("blockquote",[a("p",[t._v("String 数据类型包含一些特殊的字符字面量也叫转义序列。在解析字符串长度的时候，这些转义序列被作为一个字符来解析；")])]),t._v(" "),a("h4",{attrs:{id:"将一个值转换为字符串"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#将一个值转换为字符串"}},[t._v("#")]),t._v(" 🌟 将一个值转换为字符串")]),t._v(" "),a("p",[t._v("有两种方法：")]),t._v(" "),a("ol",[a("li",[t._v("使用几乎每个值都有的 toString 方法；唯一的 null、undefined 没有这个方法；\n该方法可以传递一个参数，就是指定转换为数字的基数；默认情况下会以十进制格式返回数值的字符串。通过基数可以输出二进制、八进制、十进制乃至任意有效进制格式表示的字符串。需要注意的是默认输出值与指定基数 10 是相同的。")])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" num "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),t._v("\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("num"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("toString")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 10")]),t._v("\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("num"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("toString")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 1010")]),t._v("\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("num"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("toString")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("8")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 12")]),t._v("\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("num"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("toString")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 10")]),t._v("\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("num"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("toString")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("16")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// a")]),t._v("\n")])])]),a("ol",{attrs:{start:"2"}},[a("li",[t._v("使用 String() 方法：可以将任何类型转换为字符串。转换规则：")])]),t._v(" "),a("ul",[a("li",[t._v("如果值有 toString 方法，就调用；")]),t._v(" "),a("li",[t._v('null -> "null"')]),t._v(" "),a("li",[t._v('undefined -> "undefined"')])]),t._v(" "),a("h3",{attrs:{id:"object"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#object"}},[t._v("#")]),t._v(" 👉 Object")]),t._v(" "),a("p",[t._v("Object 的每个实例都具有下列属性和方法")]),t._v(" "),a("ul",[a("li",[t._v("constructor：指向创建当前对象的函数；")]),t._v(" "),a("li",[t._v("hasOwnProperty：用于检查给定的属性在当前对象实例中是否存在；")]),t._v(" "),a("li",[t._v("isPrototypeOf(Object)：用于检查传入的对象是不是当前对象的原型；")]),t._v(" "),a("li",[t._v("propertyIsEnumerable(propertyName)：用于检查给定的属性是否能够使用 for in 语句类枚举。也就说是不是可枚举的属性；")]),t._v(" "),a("li",[t._v('toLocaleString：返回对象的字符串表示；该字符串与执行环境的地区对应；"[object Object]"；')]),t._v(" "),a("li",[t._v('toSring：返回对象的字符串表达；"[object Object]"；')]),t._v(" "),a("li",[t._v('valueOf：返回对象的字符串、数值或者布尔值表示。通常与 toString 返回相同。{a: "a", b: "b"}；')])]),t._v(" "),a("Valine")],1)}),[],!1,null,null,null);s.default=e.exports}}]);