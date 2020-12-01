(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{629:function(t,s,a){t.exports=a.p+"assets/img/readPixels.e32b4954.png"},769:function(t,s,a){"use strict";a.r(s);var n=a(29),r=Object(n.a)({},(function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h2",{attrs:{id:"用鼠标控制物体旋转"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#用鼠标控制物体旋转"}},[t._v("#")]),t._v(" 用鼠标控制物体旋转")]),t._v(" "),n("p",[t._v("需要根据鼠标的移动情况创建旋转矩阵，更新模型视图投影矩阵，并对物体的顶点坐标进行变化。")]),t._v(" "),n("ul",[n("li",[t._v("实现思路：")])]),t._v(" "),n("p",[t._v("在鼠标左键按下时记录鼠标的初始坐标，然后在鼠标移动的时候用当前坐标减去初始坐标，获得鼠标的位置，然后根据这个位移来计算旋转矩阵。")]),t._v(" "),n("ul",[n("li",[t._v("示例程序关键代码：")])]),t._v(" "),n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("initEventHandlers")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("canvas"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" currentAngle")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 是否拖动")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" draggle "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 鼠标的最后位置")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" lastX "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      lastY "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n  \n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 按下鼠标")]),t._v("\n  canvas"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("onmousedown")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("ev")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" x "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" ev"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("clientX"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" y "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" ev"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("clientY\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 如果鼠标在 canvas 内就开始拖动")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" rect "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" ev"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("target"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("getBoundingClientRect")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("rect"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("left "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<=")]),t._v(" x "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" x "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" rect"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("right "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" rect"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("top "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<=")]),t._v(" y "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" y "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" rect"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("bottom"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      lastX "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" x\n      lastY "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" y\n      draggle "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 鼠标松开")]),t._v("\n  canvas"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("onmouseup")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("ev")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    draggle "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 鼠标移动")]),t._v("\n  canvas"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("onmousemove")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("ev")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" x "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" ev"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("clientX"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" y "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" ev"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("clientY\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("draggle"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 旋转因子")]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" factor "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("100")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v(" canvas"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("height\n      "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" dx "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" factor "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("x "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" lastX"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" dy "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" factor "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("y "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" lastY"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 将沿 Y 轴角度的因子控制在 -90 到 90")]),t._v("\n      currentAngle"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Math"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("max")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Math"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("min")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("currentAngle"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" dy"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("90.0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("90.0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n      currentAngle"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" currentAngle"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" dx\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    lastX "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" x\n    lastY "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" y\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 模型视图投影矩阵")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" g_MvpMatrix "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Matrix4")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("draw")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("gl"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" viewProjMatrix"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" u_MvpMatrix"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" currentAngle")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 计算模型视图投影矩阵")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 复制模型矩阵")]),t._v("\n  g_MvpMatrix"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("set")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("viewProjMatrix"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 绕 x 轴旋转")]),t._v("\n  g_MvpMatrix"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("rotate")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("currentAngle"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1.0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  g_MvpMatrix"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("rotate")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("currentAngle"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1.0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  \n  gl"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("uniformMatrix4fv")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("u_MvpMatrix"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" g_MvpMatrix"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("elements"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n  gl"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("clear")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("gl"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token constant"}},[t._v("COLOR_BUFFER_BIT")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" gl"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token constant"}},[t._v("DEPTH_BUFFER_BIT")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n  gl"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("drawElements")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("gl"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token constant"}},[t._v("TRIANGLES")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" gl"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token constant"}},[t._v("UNSIGNED_BYTE")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),n("h2",{attrs:{id:"对象拾取"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#对象拾取"}},[t._v("#")]),t._v(" 对象拾取")]),t._v(" "),n("ul",[n("li",[t._v("实现思路")])]),t._v(" "),n("p",[t._v("一个简单的做法就是：")]),t._v(" "),n("ol",[n("li",[t._v("当鼠标左键按下时，将整个立方体重绘为单一的红色；（为了使用户看不到立方体的这一闪烁过程，需要在取出像素颜色之后立即将立方体进行重绘）")]),t._v(" "),n("li",[t._v("读取鼠标点击处的像素颜色；")]),t._v(" "),n("li",[t._v("使用立方体原来的颜色对其进行重绘；")]),t._v(" "),n("li",[t._v("如果第二步读取的颜色是红色，就提示选中对象；")])]),t._v(" "),n("ul",[n("li",[t._v("示例程序关键代码")])]),t._v(" "),n("p",[t._v("注意，上面第一步将立方体重绘为红色的过程发生在顶点着色器中，我们向其中添加了一个 u_clicked 变量，这样就可以在恰当的时候通过该变量通知顶点着色器将立方体绘制成红色。鼠标点击时， JavaScript 就会向 u_Click 变量传入 true 值，然后顶点着色器经过判断，将一个固定颜色值赋值给 v_Color 变量。如果 u_Click 为 false，那么顶点着色器就照常将立方体原来的颜色 a_Color 赋值给 v_Color，这样一来，鼠标点击，立方体就被绘制成红色。")]),t._v(" "),n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[t._v("  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 首次加载为 false")]),t._v("\n  gl"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("uniform1i")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("u_Clicked"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 当前旋转角度")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" currentAngle "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.0")]),t._v("\n  canvas"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("onmousedown")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("ev")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" x "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" ev"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("clientX"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" y "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" ev"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("clientY\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" rect "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" ev"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("target"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("getBoundingClientRect")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("rect"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("left "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<=")]),t._v(" x "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" x "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" rect"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("right "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" rect"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("top "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<=")]),t._v(" y "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" y "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" rect"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("bottom"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" x_in_canvas "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" x "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" rect"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("left"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" y_in_canvas "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" rect"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("bottom "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" y\n      "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" picked "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("check")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("gl"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" x_in_canvas"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" y_in_canvas"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" currentAngle"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" u_Clicked"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" viewProjMatrix"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" u_MvpMatrix"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("picked"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("alert")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'The cube was selected! '")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("check")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("gl"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" x"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" y"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" currentAngle"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" u_Clicked"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" viewProjMatrix"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" u_MvpMatrix")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" picked "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 拾取到物体")]),t._v("\n  gl"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("uniform1i")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("u_Clicked"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("draw")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("gl"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" currentAngle"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" viewProjMatrix"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" u_MvpMatrix"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 获取点击位置的像素颜色值")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" pixels "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Uint8Array")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 存储像素的数组")]),t._v("\n  gl"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("readPixels")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("x"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" y"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" gl"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token constant"}},[t._v("RGBA")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" gl"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token constant"}},[t._v("UNSIGNED_BYTE")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" pixels"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 如果 pixels[0] 为 255 表示点击在物体上")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("pixels"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("255")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    picked "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 重新绘制立方体")]),t._v("\n  gl"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("uniform1i")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("u_Clicked"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("draw")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("gl"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" currentAngle"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" viewProjMatrix"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" u_MvpMatrix"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" picked\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),n("p",[t._v("readPixels 函数使用如下：")]),t._v(" "),n("p",[n("img",{attrs:{src:a(629),alt:"avatar"}})]),t._v(" "),n("h2",{attrs:{id:"拾取立方体的一个表面"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#拾取立方体的一个表面"}},[t._v("#")]),t._v(" 拾取立方体的一个表面")])])}),[],!1,null,null,null);s.default=r.exports}}]);