(window.webpackJsonp=window.webpackJsonp||[]).push([[117],{809:function(v,_,i){"use strict";i.r(_);var l=i(26),t=Object(l.a)({},(function(){var v=this,_=v.$createElement,i=v._self._c||_;return i("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[i("h2",{attrs:{id:"span-标签设置-inline-block-后加-width-和-height-能起作用么-加-padding-和-margin-呢"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#span-标签设置-inline-block-后加-width-和-height-能起作用么-加-padding-和-margin-呢"}},[v._v("#")]),v._v(" span 标签设置 inline-block 后加 width 和 height 能起作用么，加 padding 和 margin 呢")]),v._v(" "),i("h2",{attrs:{id:"visible、display-none、opacity-之间的区别"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#visible、display-none、opacity-之间的区别"}},[v._v("#")]),v._v(" visible、display:none、opacity 之间的区别")]),v._v(" "),i("p",[v._v("两者都能把网页上某个元素隐藏起来，但两者有区别：")]),v._v(" "),i("h3",{attrs:{id:"display-none"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#display-none"}},[v._v("#")]),v._v(" display: none")]),v._v(" "),i("ul",[i("li",[v._v("DOM 结构：浏览器不会渲染 display 属性为 none 的元素，不占据空间；")]),v._v(" "),i("li",[v._v("事件监听：无法进行 DOM 事件监听；")]),v._v(" "),i("li",[v._v("性能：动态改变此属性时会引起重排，性能较差；")]),v._v(" "),i("li",[v._v("继承：不会被子元素继承，毕竟子类也不会被渲染；")]),v._v(" "),i("li",[v._v("transition：transition 不支持 display。")])]),v._v(" "),i("h3",{attrs:{id:"visibility-hidden"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#visibility-hidden"}},[v._v("#")]),v._v(" visibility: hidden")]),v._v(" "),i("ul",[i("li",[v._v("DOM 结构：元素被隐藏，但是会被渲染不会消失，占据空间；")]),v._v(" "),i("li",[v._v("事件监听：无法进行 DOM 事件监听；")]),v._v(" "),i("li",[v._v("性 能：动态改变此属性时会引起重绘，性能较高；")]),v._v(" "),i("li",[v._v("继 承：会被子元素继承，子元素可以通过设置 visibility: visible; 来取消隐藏；")]),v._v(" "),i("li",[v._v("transition：visibility 会立即显示，隐藏时会延时")])]),v._v(" "),i("h3",{attrs:{id:"opacity-0"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#opacity-0"}},[v._v("#")]),v._v(" opacity: 0")]),v._v(" "),i("ul",[i("li",[v._v("DOM 结构：透明度为 100%，元素隐藏，占据空间；")]),v._v(" "),i("li",[v._v("事件监听：可以进行 DOM 事件监听；")]),v._v(" "),i("li",[v._v("性 能：提升为合成层，不会触发重绘，性能较高；")]),v._v(" "),i("li",[v._v("继 承：会被子元素继承,且，子元素并不能通过 opacity: 1 来取消隐藏；")]),v._v(" "),i("li",[v._v("transition：opacity 可以延时显示和隐藏")])]),v._v(" "),i("h2",{attrs:{id:"盒子模型"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#盒子模型"}},[v._v("#")]),v._v(" 盒子模型")]),v._v(" "),i("h2",{attrs:{id:"flex-以及如何实现响应式布局"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#flex-以及如何实现响应式布局"}},[v._v("#")]),v._v(" flex 以及如何实现响应式布局")]),v._v(" "),i("h2",{attrs:{id:"清除浮动"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#清除浮动"}},[v._v("#")]),v._v(" 清除浮动")]),v._v(" "),i("h2",{attrs:{id:"垂直居中布局"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#垂直居中布局"}},[v._v("#")]),v._v(" 垂直居中布局")]),v._v(" "),i("h2",{attrs:{id:"css-动画"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#css-动画"}},[v._v("#")]),v._v(" css 动画")]),v._v(" "),i("h2",{attrs:{id:"css-选择器"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#css-选择器"}},[v._v("#")]),v._v(" css 选择器")]),v._v(" "),i("h3",{attrs:{id:"选择器语法"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#选择器语法"}},[v._v("#")]),v._v(" 选择器语法")]),v._v(" "),i("h4",{attrs:{id:"简单选择器"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#简单选择器"}},[v._v("#")]),v._v(" 简单选择器")]),v._v(" "),i("ul",[i("li",[i("p",[v._v("星号 —— *")]),v._v(" "),i("ul",[i("li",[v._v("通用选择器，可以选择任何的元素")])])]),v._v(" "),i("li",[i("p",[v._v("类型选择器｜type selector —— div svg|a")]),v._v(" "),i("ul",[i("li",[i("p",[v._v("也叫做 type selector, 也就是说它选择的是元素中的 tagName (标签名) 属性")])]),v._v(" "),i("li",[i("p",[v._v("tagName 也是我们平常最常用的的选择器")])]),v._v(" "),i("li",[i("p",[v._v("但是因为 HTML 也是有命名空间的，它主要有三个：HTML、SVG、MathML")])]),v._v(" "),i("li",[i("p",[v._v("如果我们想选 SVG 或者 MathML 里面特定的元素，我们就必须要用到单竖线 | ，CSS选择器里面单竖线是一个命名空间的分隔符，而HTML 里面命名空间分隔符是 冒号 : 。然后前面说到的命名空间是需要 @namespace 来声明的，他们是配合使用的，但是这个命名空间的使用不是很频繁，它的存在只是为了一个完备性考虑，HTML 和 SVG当中唯一一个重叠的元素名就只有一个 a")])]),v._v(" "),i("li",[i("p",[i("strong",[v._v("所以我们可以认为，类型选择器就是一个简单的文本字符串即可")])])])])]),v._v(" "),i("li",[i("p",[v._v("类选择器｜class selector —— .class-name")]),v._v(" "),i("ul",[i("li",[v._v("以 . 开头的选择器就是 class 选择器，也是最经典之一")]),v._v(" "),i("li",[v._v("它会选择一个 class，我们也可以用空格做分隔符来制定多个 class 的")]),v._v(" "),i("li",[v._v("这个 .class 只要匹配中其中一个就可以了")])])]),v._v(" "),i("li",[i("p",[v._v("ID 选择器｜id selector —— #id")]),v._v(" "),i("ul",[i("li",[v._v("以 # 开头加上 ID 名选中一个 ID")]),v._v(" "),i("li",[v._v("这个是严格匹配的")]),v._v(" "),i("li",[v._v("ID 里面是可以加减号或者是其他符号的")])])]),v._v(" "),i("li",[i("p",[v._v("属性选择器｜attribute selector —— "),i("code",[v._v("[attr=value]")])]),v._v(" "),i("ul",[i("li",[v._v("它包括了 class 属性选择器和 id 选择器")]),v._v(" "),i("li",[v._v("这个选择器的完整语法就是 attr=value，等于前面是属性名，后面是属性值")]),v._v(" "),i("li",[v._v("这里面的等号前面可以加 ～ 就表示像 class 一样，可以支持拿空格分隔的值的序列：attr~=value")]),v._v(" "),i("li",[v._v("如果在等号前面加单竖线，表示这个属性以这个值开头即可：attr|=value")]),v._v(" "),i("li",[v._v("如果我们对优先级没有特殊要求的话，我们理论上是可以用属性选择器来代替 class 选择器和 id 选择器的")])])]),v._v(" "),i("li",[i("p",[v._v("伪类  —— :hover")]),v._v(" "),i("ul",[i("li",[v._v("以 : 开头的，它主要是一些属性的特殊状态")]),v._v(" "),i("li",[v._v("这个跟我们写的 HTML 没有关系，多半来自于交互和效果")]),v._v(" "),i("li",[v._v("一些伪类选择器是带有函数的伪类选择器，这些我们都是可以去使用伪类来解决的")])])]),v._v(" "),i("li",[i("p",[v._v("伪元素选择器 —— ::before")]),v._v(" "),i("ul",[i("li",[v._v("一般来说是以 :: 双冒号开头的")]),v._v(" "),i("li",[v._v("实际上是支持使用单冒号的，但是我们提倡双冒号这个写法")]),v._v(" "),i("li",[v._v("因为我们可以一眼就看出这个是伪元素选择器，和伪类区分开来")]),v._v(" "),i("li",[v._v("伪元素属于选中一些原本不存在的元素")]),v._v(" "),i("li",[v._v("如果我们不选择它们，这个地方就不存在这个元素了，选择后就会多了一个元素")])])])]),v._v(" "),i("h4",{attrs:{id:"复合选择器"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#复合选择器"}},[v._v("#")]),v._v(" 复合选择器")]),v._v(" "),i("ul",[i("li",[v._v("<简单选择器><简单选择器><简单选择器>")]),v._v(" "),i("li",[i("code",[v._v("*")]),v._v(" 或则 div 必须写在最前面")])]),v._v(" "),i("blockquote",[i("p",[v._v("首先复合选择器是以多个简单选择器构成的，只要把简单选择器挨着写就变成一个复合选择器了。它的语义就是我们选中的元素必须同时 match 几个简单选择器，形成了 “与” 的关系。")])]),v._v(" "),i("h4",{attrs:{id:"复杂选择器"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#复杂选择器"}},[v._v("#")]),v._v(" 复杂选择器")]),v._v(" "),i("p",[v._v("复合选择器中间用连接符就可以变成复杂选择器了，复杂选择器是针对一个元素的结构来进行选择的。")]),v._v(" "),i("ul",[i("li",[v._v("<复合选择器>  <复合选择器> —— 子孙选择器，单个元素必须要有空格左边的一个父级节点或者祖先节点")]),v._v(" "),i("li",[v._v('复合选择器> ">" <复合选择器> —— 父子选择器，必须是元素直接的上级父元素')]),v._v(" "),i("li",[v._v('<复合选择器> "~" <复合选择器> —— 邻接关系选择器')]),v._v(" "),i("li",[v._v('<复合选择器> "+" <复合选择器> —— 邻接关系选择器')]),v._v(" "),i("li",[v._v('<复合选择器> "||" <复合选择器> —— 双竖线是 Selector Level 4 才有的，当我们做表格的时候可以选中每一个列')])]),v._v(" "),i("h3",{attrs:{id:"选择器优先级"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#选择器优先级"}},[v._v("#")]),v._v(" 选择器优先级")]),v._v(" "),i("ol",[i("li",[v._v("在属性后面使用 !important 会覆盖页面内任何位置定义的元素样式。")]),v._v(" "),i("li",[v._v("作为 style 属性写在元素内的样式")]),v._v(" "),i("li",[v._v("id 选择器")]),v._v(" "),i("li",[v._v("类选择器 (例如，.example)，属性选择器（例如，"),i("code",[v._v('[type="radio"]')]),v._v("）和伪类（例如，:hover）")]),v._v(" "),i("li",[v._v("类型选择器（例如，h1）和伪元素（例如，::before）")]),v._v(" "),i("li",[v._v("通配符选择器")]),v._v(" "),i("li",[v._v("浏览器自定义或继承")])]),v._v(" "),i("p",[v._v("优先级是由 A 、B、C、D 的值来决定的，其中它们的值计算规则如下：")]),v._v(" "),i("ul",[i("li",[v._v("如果存在内联样式，那么 A = 1, 否则 A = 0;")]),v._v(" "),i("li",[v._v("B 的值等于 ID选择器 出现的次数;")]),v._v(" "),i("li",[v._v("C 的值等于 类选择器 和 属性选择器 和 伪类 出现的总次数;")]),v._v(" "),i("li",[v._v("D 的值等于 标签选择器 和 伪元素 出现的总次数 。")])]),v._v(" "),i("p",[v._v("这样子直接看好像也还是很明白 ，那先上个例子：")]),v._v(" "),i("div",{staticClass:"language-shell extra-class"},[i("pre",{pre:!0,attrs:{class:"language-shell"}},[i("code",[i("span",{pre:!0,attrs:{class:"token comment"}},[v._v("#nav-global > ul > li > a.nav-link")]),v._v("\n")])])]),i("p",[v._v("套用上面的算法，依次求出 A B C D 的值：")]),v._v(" "),i("ul",[i("li",[v._v("因为没有内联样式 ，所以 A = 0;")]),v._v(" "),i("li",[v._v("ID选择器总共出现了1次， B = 1;")]),v._v(" "),i("li",[v._v("类选择器出现了1次， 属性选择器出现了0次，伪类选择器出现0次，所以 C = (1 + 0 + 0) = 1；")]),v._v(" "),i("li",[v._v("标签选择器出现了3次， 伪元素出现了0次，所以 D = (3 + 0) = 3;")])]),v._v(" "),i("p",[v._v("上面算出的 A 、B、C、D 可以简记作：(0, 1, 1, 3)。")]),v._v(" "),i("p",[v._v("比较规则是: 从左往右依次进行比较 ，较大者胜出，如果相等，则继续往右移动一位进行比较 。如果4位全部相等，则后面的会覆盖前面的")]),v._v(" "),i("blockquote",[i("p",[v._v("参考：https://juejin.cn/post/6873672592947937294")])]),v._v(" "),i("h2",{attrs:{id:"重绘和重排"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#重绘和重排"}},[v._v("#")]),v._v(" 重绘和重排")]),v._v(" "),i("p",[v._v("DOM 的修改会导致重绘和重排。")]),v._v(" "),i("ul",[i("li",[v._v("重绘是指一些样式的修改，元素的位置和大小都没有改变；")]),v._v(" "),i("li",[v._v("重排是指元素的位置或尺寸发生了变化，浏览器需要重新计算渲染树，而新的渲染树建立后，浏览器会重新绘制受影响的元素；")]),v._v(" "),i("li",[v._v("重排一定会导致重绘；")])]),v._v(" "),i("p",[v._v("页面重绘的速度要比页面重排的速度快，在页面交互中要尽量避免页面的重排操作。浏览器不会在 js 执行的时候更新 DOM，而是会把这些DOM 操作存放在一个队列中，在 js 执行完之后按顺序一次性执行完毕，因此在 js 执行过程中用户一直在被阻塞。")]),v._v(" "),i("h3",{attrs:{id:"导致页面重排的一些操作"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#导致页面重排的一些操作"}},[v._v("#")]),v._v(" 导致页面重排的一些操作")]),v._v(" "),i("ul",[i("li",[v._v("内容改变\n"),i("ul",[i("li",[v._v("文本改变或图片尺寸改变")])])]),v._v(" "),i("li",[v._v("DOM 元素的几何属性的变化\n"),i("ul",[i("li",[v._v("例如改变 DOM 元素的宽高值时，原渲染树中的相关节点会失效，浏览器会根据变化后的 DOM 重新排建渲染树中的相关节点。如果父节点的几何属性变化时，还会使其子节点及后续兄弟节点重新计算位置等，造成一系列的重排。")])])]),v._v(" "),i("li",[v._v("DOM 树的结构变化\n"),i("ul",[i("li",[v._v("添加 DOM 节点、修改 DOM 节点位置及删除某个节点都是对 DOM 树的更改，会造成页面的重排。浏览器布局是从上到下的过程，修改当前元素不会对其前边已经遍历过的元素造成影响，但是如果在所有的节点前添加一个新的元素，则后续的所有元素都要进行重排。")])])]),v._v(" "),i("li",[v._v("获取某些属性\n"),i("ul",[i("li",[v._v("除了渲染树的直接变化，当获取一些属性值时，浏览器为取得正确的值也会发生重排，这些属性包括：offsetTop、offsetLeft、 offsetWidth、offsetHeight、scrollTop、scrollLeft、scrollWidth、scrollHeight、clientTop、clientLeft、clientWidth、clientHeight、getComputedStyle()。")])])]),v._v(" "),i("li",[v._v("浏览器窗口尺寸改变\n"),i("ul",[i("li",[v._v("窗口尺寸的改变会影响整个网页内元素的尺寸的改变，即 DOM 元素的集合属性变化，因此会造成重排。")])])])]),v._v(" "),i("h3",{attrs:{id:"导致页面重绘的操作"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#导致页面重绘的操作"}},[v._v("#")]),v._v(" 导致页面重绘的操作")]),v._v(" "),i("ul",[i("li",[v._v("应用新的样式或者修改任何影响元素外观的属性\n"),i("ul",[i("li",[v._v("只改变了元素的样式，并未改变元素大小、位置，此时只涉及到重绘操作。")])])]),v._v(" "),i("li",[v._v("重排一定会导致重绘\n"),i("ul",[i("li",[v._v("一个元素的重排一定会影响到渲染树的变化，因此也一定会涉及到页面的重绘。")])])])]),v._v(" "),i("h3",{attrs:{id:"浏览器分析"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#浏览器分析"}},[v._v("#")]),v._v(" 浏览器分析")]),v._v(" "),i("p",[v._v("主要是通过浏览器的 timeline 记录来分析重拍以及重绘；")]),v._v(" "),i("p",[v._v("timeline 分析：")]),v._v(" "),i("ol",[i("li",[v._v("FPS:最上面一栏为绿色柱形为帧率(FPS)，顶点值为 60fps，上方红色方块表示长帧，这些长帧被 Chrome 称为 jank (卡顿)。")]),v._v(" "),i("li",[v._v("CPU:第二栏为 CPU，蓝色表示 loading（网络通信和 HTML 解析），黄色表示 scripting（js执行时间），紫色表示 rendering（样式计算和布局，即重排）， 绿色为 painting（即重绘）。")])]),v._v(" "),i("blockquote",[i("p",[v._v("更多timeline使用方法可参考：https://www.jianshu.com/p/4da0f0bda768")])]),v._v(" "),i("h2",{attrs:{id:"css-有哪些属性是可以继承的"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#css-有哪些属性是可以继承的"}},[v._v("#")]),v._v(" css 有哪些属性是可以继承的")]),v._v(" "),i("ol",[i("li",[v._v("color(颜色，a元素除外)")]),v._v(" "),i("li",[v._v("direction(方向)")]),v._v(" "),i("li",[v._v("font（字体）")]),v._v(" "),i("li",[v._v("font-family（字体系列）")]),v._v(" "),i("li",[v._v("font-size（字体大小）")]),v._v(" "),i("li",[v._v("font-style（用于设置斜体）")]),v._v(" "),i("li",[v._v("font-variant（用于设置小型大写字母）")]),v._v(" "),i("li",[v._v("font-weight（用于设置粗体）")]),v._v(" "),i("li",[v._v("letter-spacing（字母间距）")]),v._v(" "),i("li",[v._v("line-height（行高）")]),v._v(" "),i("li",[v._v("text-align（用于设置对齐方式）")]),v._v(" "),i("li",[v._v("text-indent（用于设置首航缩进）")]),v._v(" "),i("li",[v._v("text-transform（用于修改大小写）")]),v._v(" "),i("li",[v._v("visibility（可见性）")]),v._v(" "),i("li",[v._v("white-space（用于指定如何处理空格）")]),v._v(" "),i("li",[v._v("word-spacing（字间距）")])]),v._v(" "),i("ul",[i("li",[v._v("列表")])]),v._v(" "),i("ol",[i("li",[v._v("list-style（列表样式）")]),v._v(" "),i("li",[v._v("list-style-image（用于为列表指定定制的标记）")]),v._v(" "),i("li",[v._v("list-style-position（用于确定列表标记的位置）")]),v._v(" "),i("li",[v._v("list-style-type（用于设置列表的标记）")])]),v._v(" "),i("ul",[i("li",[v._v("表格")])]),v._v(" "),i("ol",[i("li",[v._v("border-collapse（用于控制表格相邻单元格的边框是否合并为单一边框）")]),v._v(" "),i("li",[v._v("border-spacing（用于指定表格边框之间的空隙大小）")]),v._v(" "),i("li",[v._v("caption-side（用于设置表格标题的位置）")]),v._v(" "),i("li",[v._v("empty-cells（用于设置是否显示表格中的空单元格）")])]),v._v(" "),i("ul",[i("li",[v._v("页面设置（对于印刷物）")])]),v._v(" "),i("ol",[i("li",[v._v("orphans（用于设置当元素内部发生分页时在页面底部需要保留的最少行数）")]),v._v(" "),i("li",[v._v("page-break-inside（用于设置元素内部的分页方式）")]),v._v(" "),i("li",[v._v("widows（用于设置当元素内部发生分也是在页面顶部需要保留的最少行数）")])]),v._v(" "),i("ul",[i("li",[v._v("其他")])]),v._v(" "),i("ol",[i("li",[v._v("cursor（鼠标指针）")]),v._v(" "),i("li",[v._v("quotes（用于指定引号样式）")])])])}),[],!1,null,null,null);_.default=t.exports}}]);