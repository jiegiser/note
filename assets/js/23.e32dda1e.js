(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{390:function(t,s,a){t.exports=a.p+"assets/img/shijiedaoguancahzhe.d7362ec5.png"},391:function(t,s,a){t.exports=a.p+"assets/img/shitujuzhentuidao.0665aaaf.png"},392:function(t,s,a){t.exports=a.p+"assets/img/shuxuebiaodashi.49d113d7.png"},761:function(t,s,a){"use strict";a.r(s);var n=a(29),r=Object(n.a)({},(function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h2",{attrs:{id:"视图矩阵"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#视图矩阵"}},[t._v("#")]),t._v(" 视图矩阵")]),t._v(" "),n("p",[t._v("我们需要将世界坐标系转换到观察者坐标系中；通过视图矩阵可以进行坐标系的变换。")]),t._v(" "),n("p",[t._v("模型矩阵是相对世界坐标系的变换，但是大多数情况下，我们更关注物体相对于观察者的坐标变化，这决定了最终在 canvas 上渲染的结果")]),t._v(" "),n("p",[n("img",{attrs:{src:a(390),alt:"avatar"}})]),t._v(" "),n("p",[t._v("将世界坐标系通过旋转平移至观察者坐标系，这个旋转 R 和平移 T 矩阵的组合矩阵 M = T * R，则视图矩阵为 view = M 的逆矩阵。")]),t._v(" "),n("p",[t._v("首先我们看下图，左侧的是相机坐标系的位置，右侧是物体在世界坐标系的位置，我们需要变换将世界坐标系转换为观察者坐标系下；所有的物体都相对于观察者的位置。")]),t._v(" "),n("ul",[n("li",[t._v("视点：(eyex, eyey, eyez) 表示相机坐标")]),t._v(" "),n("li",[t._v("观察目标点: (atx, aty, atz)")]),t._v(" "),n("li",[t._v("上方向：(upx, upy, upz)")])]),t._v(" "),n("p",[t._v("根据上面三个分量就确定了观察者的状态。也是根据这三个矢量来创建一个视图矩阵。然后将该矩阵传给顶点着色器。之所以称为视图矩阵，是因为它最终影响了显示在屏幕上的视图，也就是观察者观察到的场景。")]),t._v(" "),n("p",[n("img",{attrs:{src:a(391),alt:"avatar"}})]),t._v(" "),n("p",[t._v("然后我们需要将物体的坐标转换到以视点、观察目标点、上方向这三个基量组成的坐标系中。根据下面的步骤：")]),t._v(" "),n("ol",[n("li",[t._v("计算摄像机镜头方向 forwrad = (target - eye) 归一化处理 forwrad = forwrad / |forwrad|  forwrad 也就是 z 轴的基向量")]),t._v(" "),n("li",[t._v("根据 up vector 和 forwrad 确定摄像机的 side 向量归一化 up vector: viewUp' = viewUp / |vieUp| 叉积：side = cross(forwrad, viewUp')  side 向量也就是垂直于 up 以及 forward 向量。")]),t._v(" "),n("li",[t._v("根据 forwrad 和 side 计算 up 向量：叉积：up = cross(side, forwrad)(注意此 up 向量是垂直于 forwrad 和 side 构成的平面)也就是原始的 up 向量在垂直于 side 跟 forward 方向的 投影。")])]),t._v(" "),n("blockquote",[n("p",[t._v("叉乘获取的是垂直平面的向量")])]),t._v(" "),n("p",[t._v("数学表达式推导：\n先通过平移矩阵进行变换，然后进行通过基变换得到在视空间下的坐标。\n"),n("img",{attrs:{src:a(392),alt:"avatar"}})]),t._v(" "),n("h2",{attrs:{id:"示例代码"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#示例代码"}},[t._v("#")]),t._v(" 示例代码")]),t._v(" "),n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Matrix4")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("prototype"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("setLookAt")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("eyeX"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" eyeY"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" eyeZ"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" centerX"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" centerY"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" centerZ"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" upX"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" upY"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" upZ")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" e"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" fx"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" fy"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" fz"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" rlf"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" sx"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" sy"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" sz"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" rls"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" ux"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" uy"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" uz"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// forward 向量 ")]),t._v("\n  fx "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" centerX "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" eyeX"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  fy "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" centerY "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" eyeY"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  fz "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" centerZ "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" eyeZ"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//  forward 归一化")]),t._v("\n  rlf "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v(" Math"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("sqrt")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("fx"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("fx "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" fy"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("fy "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" fz"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("fz"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 向量的模")]),t._v("\n  fx "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*=")]),t._v(" rlf"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  fy "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*=")]),t._v(" rlf"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  fz "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*=")]),t._v(" rlf"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// side 向量- forward 与 up 向量的叉乘")]),t._v("\n  sx "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" fy "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" upZ "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" fz "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" upY"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  sy "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" fz "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" upX "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" fx "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" upZ"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  sz "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" fx "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" upY "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" fy "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" upX"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 归一化 side 向量")]),t._v("\n  rls "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v(" Math"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("sqrt")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("sx"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("sx "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" sy"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("sy "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" sz"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("sz"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  sx "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*=")]),t._v(" rls"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  sy "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*=")]),t._v(" rls"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  sz "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*=")]),t._v(" rls"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 通过叉乘得到垂直于 forward 以及 side 向量.")]),t._v("\n  ux "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" sy "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" fz "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" sz "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" fy"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  uy "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" sz "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" fx "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" sx "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" fz"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  uz "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" sx "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" fy "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" sy "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" fx"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 转置矩阵")]),t._v("\n  e "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("elements"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  e"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" sx"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  e"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" ux"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  e"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("fx"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  e"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n  e"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" sy"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  e"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" uy"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  e"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("6")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("fy"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  e"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("7")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n  e"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("8")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" sz"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  e"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("9")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" uz"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  e"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("fz"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  e"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("11")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n  e"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("12")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  e"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("13")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  e"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("14")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  e"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("15")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 平移矩阵的逆矩阵 乘以转置矩阵")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("translate")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("eyeX"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("eyeY"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("eyeZ"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Matrix4")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("prototype"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("translate")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("x"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" y"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" z")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" e "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("elements"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  e"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("12")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+=")]),t._v(" e"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" x "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" e"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" y "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" e"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("8")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("  "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" z"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  e"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("13")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+=")]),t._v(" e"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" x "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" e"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" y "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" e"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("9")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("  "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" z"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  e"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("14")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+=")]),t._v(" e"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" x "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" e"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("6")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" y "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" e"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" z"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  e"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("15")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+=")]),t._v(" e"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" x "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" e"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("7")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" y "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" e"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("11")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" z"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),n("p",[t._v("视图变换只是将模型坐标转换为了基于视空间下的坐标；还得需要基于投影变换，进行规范化坐标，最终进行渲染。")]),t._v(" "),n("Valine")],1)}),[],!1,null,null,null);s.default=r.exports}}]);