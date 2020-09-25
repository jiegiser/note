(window.webpackJsonp=window.webpackJsonp||[]).push([[50],{486:function(s,t,a){"use strict";a.r(t);var n=a(25),r=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h2",{attrs:{id:"css-工程化"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#css-工程化"}},[s._v("#")]),s._v(" css 工程化")]),s._v(" "),a("ul",[a("li",[s._v("组织")]),s._v(" "),a("li",[s._v("优化")]),s._v(" "),a("li",[s._v("构建")]),s._v(" "),a("li",[s._v("维护")])]),s._v(" "),a("h3",{attrs:{id:"postcss"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#postcss"}},[s._v("#")]),s._v(" PostCSS")]),s._v(" "),a("p",[s._v("css通过postcss解析转换（可以进行模块化、加前缀、处理兼容性问题等等）为css。")]),s._v(" "),a("ul",[a("li",[s._v("PostCSS本身只有解析能力")]),s._v(" "),a("li",[s._v("各种神奇的特性全靠插件")]),s._v(" "),a("li",[s._v("目前至少有200多个插件")]),s._v(" "),a("li",[s._v("import 模块合并")]),s._v(" "),a("li",[s._v("autoprefixier自动加前缀")]),s._v(" "),a("li",[s._v("cssnano压缩代码")]),s._v(" "),a("li",[s._v("cssnext使用css新特性")]),s._v(" "),a("li",[s._v("precss变量、mixin、循环等")])]),s._v(" "),a("h4",{attrs:{id:"简单的使用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#简单的使用"}},[s._v("#")]),s._v(" 简单的使用")]),s._v(" "),a("p",[s._v("使用，首先进行安装：npm install postcss-cli --save安装到自己的项目中，然后进行一个简单的输出测试：")]),s._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 在终端输入下面的命令，他会打印出src目录下面的postcssTest文件里面的内容")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("node_modules"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("bin"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("postcss src"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("postcssTest"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("css\n")])])]),a("p",[s._v("我们可以对该文件进行解析输出加一个命令 -o：")]),s._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 在终端输入下面的命令，输出到build文件夹中的postcssTest")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("node_modules"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("bin"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("postcss src"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("postcssTest"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("css "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("o build"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("postcssTest"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("css\n")])])]),a("h4",{attrs:{id:"添加前缀"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#添加前缀"}},[s._v("#")]),s._v(" 添加前缀")]),s._v(" "),a("p",[s._v("如果需要添加前缀，需要配置插件，新建一个postcss.config.js文件，添加配置如下：")]),s._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 需要在项目进行安装autoprefixer插件：npm install autoprefixer --save")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" autoprefixer "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("require")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'autoprefixer'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\nmodule"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("exports "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  plugins"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 自动添加前缀")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("autoprefixer")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 在package.json中添加配置")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"browserslist"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"defaults"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"not ie < 11"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"last 2 versions"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"> 1%"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"iOS 7"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"last 3 iOS versions"')]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n")])])]),a("h4",{attrs:{id:"对import引入的代码进行合并请求"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#对import引入的代码进行合并请求"}},[s._v("#")]),s._v(" 对import引入的代码进行合并请求")]),s._v(" "),a("p",[s._v("如果我们在写css的时候使用import，这样会发送一次请求去获取，我们可以通过\npostcss-import去合并代码，需要在postcss.config.js进行添加配置：\n首先需要安装postcss-import插件：npm install postcss-import")]),s._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" atImport "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("require")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'postcss-import'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\nmodule"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("exports "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  plugins"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n    atImport\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])]),a("h4",{attrs:{id:"cssnano-压缩代码"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#cssnano-压缩代码"}},[s._v("#")]),s._v(" cssnano 压缩代码")]),s._v(" "),a("p",[s._v("使用cssnano插件，需要配置在postcss.config.js中插件的最后，因为前面的配置进行对css代码的处理，最后进行压缩使用。\n使用前还是需要进行安装该插件：npm install cssnano\n然后进行配置postcss.config.js：")]),s._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" cssnano "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("  "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("require")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'cssnano'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\nmodule"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("exports "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  plugins"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n    cssnano\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])]),a("h4",{attrs:{id:"cssnext"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#cssnext"}},[s._v("#")]),s._v(" cssnext")]),s._v(" "),a("p",[s._v("这个插件是css最新特性的支持并使用:比如定义变量，以及跟css预处理器一样定义代码片段；使用时还是需要进行安装该插件：\nnpm install postcss-cssnext,配置如下：")]),s._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" cssnext "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("require")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'postcss-cssnext'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\nmodule"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("exports "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  plugins"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n    cssnext\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])]),a("h4",{attrs:{id:"precss"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#precss"}},[s._v("#")]),s._v(" precss")]),s._v(" "),a("p",[s._v("基本跟预编译器很类似：")]),s._v(" "),a("ul",[a("li",[s._v("变量")]),s._v(" "),a("li",[s._v("条件（if）")]),s._v(" "),a("li",[s._v("循环")]),s._v(" "),a("li",[s._v("Mixin Extend")]),s._v(" "),a("li",[s._v("import")]),s._v(" "),a("li",[s._v("属性值引用")])]),s._v(" "),a("p",[s._v("使用时候还是需要进行安装插件：npm install precss,配置：")]),s._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" precss  "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("require")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'precss'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\nmodule"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("exports "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  plugins"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n    precss\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])]),a("p",[s._v("处理前的css：")]),s._v(" "),a("div",{staticClass:"language-css extra-class"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[s._v("$"),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("blue")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" red"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n$"),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("column")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" 200px"),a("span",{pre:!0,attrs:{class:"token selector"}},[s._v(";\n\n.menu")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("width")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("calc")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("4 * $column"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token selector"}},[s._v(".menu_link")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("background")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" $blue"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("width")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" $column"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token selector"}},[s._v(".notice-clear")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token atrule"}},[a("span",{pre:!0,attrs:{class:"token rule"}},[s._v("@if")]),s._v(" 3 < 5")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("background")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" green"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token atrule"}},[a("span",{pre:!0,attrs:{class:"token rule"}},[s._v("@else")])]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("background")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" blue"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token atrule"}},[a("span",{pre:!0,attrs:{class:"token rule"}},[s._v("@for")]),s._v(" $i from 1 to 3")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token selector"}},[s._v(".b-$i")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("width")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" $"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("i"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("px"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])]),a("p",[s._v("处理后的结果：")]),s._v(" "),a("div",{staticClass:"language-css extra-class"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token selector"}},[s._v(".menu")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("width")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("-webkit-calc")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("4 * 200px"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("width")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("-moz-calc")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("4 * 200px"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("width")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("calc")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("4 * 200px"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token selector"}},[s._v(".menu_link")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("background")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" red"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("width")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" 200px"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token selector"}},[s._v(".notice-clear")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("background")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" green\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token selector"}},[s._v(".b-1")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("width")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" 1px"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token selector"}},[s._v(".b-2")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("width")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" 2px"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token selector"}},[s._v(".b-3")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("width")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" 3px"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])]),a("h3",{attrs:{id:"postcss支持的构建工具"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#postcss支持的构建工具"}},[s._v("#")]),s._v(" PostCSS支持的构建工具")]),s._v(" "),a("ul",[a("li",[s._v("cli命令行工具")]),s._v(" "),a("li",[s._v("webpack postcss-loader")]),s._v(" "),a("li",[s._v("gulp gulp-postcss")]),s._v(" "),a("li",[s._v("grunt grunt-postcss")]),s._v(" "),a("li",[s._v("rollup rollup-postcss")]),s._v(" "),a("li",[s._v("....")])]),s._v(" "),a("h2",{attrs:{id:"css-面试真题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#css-面试真题"}},[s._v("#")]),s._v(" CSS 面试真题")]),s._v(" "),a("h3",{attrs:{id:"如何解决css模块化问题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#如何解决css模块化问题"}},[s._v("#")]),s._v(" 如何解决css模块化问题")]),s._v(" "),a("ul",[a("li",[s._v("Less Sass等css预处理器")]),s._v(" "),a("li",[s._v("postcss插件（postcss-import / precss等）")]),s._v(" "),a("li",[s._v("webpack处理css（css-loader + style-loader）")])]),s._v(" "),a("h3",{attrs:{id:"postcss可以做什么"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#postcss可以做什么"}},[s._v("#")]),s._v(" postcss可以做什么")]),s._v(" "),a("ul",[a("li",[s._v("取决于插件可以做什么")]),s._v(" "),a("li",[s._v("autoprefixer cssnext precss等兼容性处理")]),s._v(" "),a("li",[s._v("import 模块合并")]),s._v(" "),a("li",[s._v("css语法检查 兼容性检查")]),s._v(" "),a("li",[s._v("压缩文件")])]),s._v(" "),a("h3",{attrs:{id:"css-modules是做什么的，如何使用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#css-modules是做什么的，如何使用"}},[s._v("#")]),s._v(" css modules是做什么的，如何使用")]),s._v(" "),a("ul",[a("li",[s._v("解决类名冲突的问题")]),s._v(" "),a("li",[s._v("使用postcss或者webpack等构件工具进行编译")]),s._v(" "),a("li",[s._v("在html模板中使用编译过程产生的类名")])]),s._v(" "),a("h3",{attrs:{id:"为什么使用js来引用、加载css"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#为什么使用js来引用、加载css"}},[s._v("#")]),s._v(" 为什么使用JS来引用、加载CSS")]),s._v(" "),a("ul",[a("li",[s._v("JS作为入口，管理资源有天然优势")]),s._v(" "),a("li",[s._v("将组件的结构、样式、行为封装到一起，增强内聚")]),s._v(" "),a("li",[s._v("可以做更多处理（webpack）")])])])}),[],!1,null,null,null);t.default=r.exports}}]);