(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{528:function(t,s,a){t.exports=a.p+"assets/img/data1.2872c1c3.png"},529:function(t,s,a){t.exports=a.p+"assets/img/data.63d9410a.jpg"},650:function(t,s,a){"use strict";a.r(s);var n=a(25),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h2",{attrs:{id:"加载的模型没有贴地"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#加载的模型没有贴地"}},[t._v("#")]),t._v(" 加载的模型没有贴地")]),t._v(" "),n("p",[t._v("问题：加载的矢量数据或者三维模型，浏览时会在地面漂浮。")]),t._v(" "),n("p",[t._v("解决方法：因为模型或数据的高度在地面以下造成的；")]),t._v(" "),n("ol",[n("li",[t._v("开启深度检测：viewer.scene.global.depthTestAgainstTerrain = true")]),t._v(" "),n("li",[t._v("如果看不到模型，说明高度确实有问题，调整模型高度")]),t._v(" "),n("li",[t._v("关闭深度检测：viewer.scene.global.depthTestAgainstTerrain = false")])]),t._v(" "),n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 调整模型高度")]),t._v("\ntiles"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("readyPromise"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("then")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("tilests")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("tilests"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" cartographic "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Cesium"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Cartographic"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("fromCartesian")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n      tilests"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("boundingSphere"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("center\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" surface "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Cesium"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Cartesian3"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("fromRadians")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n      cartographic"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("longitude"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      cartographic"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("latitude"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      cartographic"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("height\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" offset "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Cesium"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Cartesian3"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("fromRadians")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n      cartographic"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("longitude"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      cartographic"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("latitude"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("20")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" translation "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Cesium"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Cartesian3"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("subtract")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n      offset"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      surface"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Cesium"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Cartesian3")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    tilests"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("modelMatrix "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Cesium"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Matrix4"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("fromTranslation")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("translation"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),n("h2",{attrs:{id:"加载的矢量数据或倾斜模型数据位置不正确"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#加载的矢量数据或倾斜模型数据位置不正确"}},[t._v("#")]),t._v(" 加载的矢量数据或倾斜模型数据位置不正确")]),t._v(" "),n("p",[t._v("问题：使用国内公开访问的底图服务时，如高德、百度等，都是国测局对坐标进行偏移，如果数据没有偏移，叠加后，肯定会出现模型与底图发生了偏移。\n解决方法：使用与数据相同坐标系的底图，或者对矢量数据做加偏处理。")]),t._v(" "),n("h2",{attrs:{id:"加载的-gltf-模型不出现"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#加载的-gltf-模型不出现"}},[t._v("#")]),t._v(" 加载的 glTF 模型不出现")]),t._v(" "),n("p",[t._v("解决思路：")]),t._v(" "),n("ol",[n("li",[t._v("查看加载的 url 是否可以访问。")]),t._v(" "),n("li",[t._v("模型比例大小问题，修改模型缩放 scale 参数或缩放下视角进行浏览。")]),t._v(" "),n("li",[t._v("模型位置在地面下，可以尝试关闭深度检测：viewer.scene.global.depthTestAgainstTerrain = false")])]),t._v(" "),n("h2",{attrs:{id:"立体面的拉伸高度设置问题"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#立体面的拉伸高度设置问题"}},[t._v("#")]),t._v(" 立体面的拉伸高度设置问题")]),t._v(" "),n("p",[t._v("问题：polygon entity 对象的高度与拉伸高度无论怎么设置好像都不是想要的值。\n问题原因：\npolygon 的与高度相关的两个参数的具体含义：")]),t._v(" "),n("ul",[n("li",[t._v("height 是指 polygon 距离地面的高度")]),t._v(" "),n("li",[t._v("extrudeHeight 是指 polygon 拉伸后的面距离地面的拉伸高度")])]),t._v(" "),n("p",[t._v("只有当 extrudeHeight 大于 height 时才会呈现挤出高度的效果，且 polygon 的厚度就是两者之间的差值。")]),t._v(" "),n("h2",{attrs:{id:"cesium-加载的数据"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#cesium-加载的数据"}},[t._v("#")]),t._v(" Cesium 加载的数据")]),t._v(" "),n("p",[t._v("如下表格：")]),t._v(" "),n("p",[n("img",{attrs:{src:a(528),alt:"在这里插入图片描述"}}),t._v(" "),n("img",{attrs:{src:a(529),alt:"在这里插入图片描述"}})]),t._v(" "),n("p",[t._v("如果是卫星影像图加载，可以使用 arcgis、geoserver 等工具进行切片处理，然后客户端进行加载切片后的数据。在线地图的加载内网部署也是一样的，现在的互联网地图基本都是 xyz 的金字塔瓦片数据。可以下载导出 xyz 标注金字塔格式瓦片进行加载。")]),t._v(" "),n("p",[t._v("地形数据处理：\n根据 tif 格式的 DEM（数字高程模型）地形文件，生成 Cesium 可用的离线 terrain 格式地形瓦片数据，目前可以通过3个工具进行处理：")]),t._v(" "),n("ul",[n("li",[t._v("CTB 地形处理工具")]),t._v(" "),n("li",[t._v("GDAL 地形处理工具")]),t._v(" "),n("li",[t._v("CesiumLab 处理工具")])]),t._v(" "),n("h2",{attrs:{id:"gltf-小模型转换处理"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#gltf-小模型转换处理"}},[t._v("#")]),t._v(" glTF 小模型转换处理")]),t._v(" "),n("p",[t._v("需要将 3dmax、Maya 等建模软件建好的三维模型导出为 dae 或 obj 数据，再通过 dae 和 obj 格式转换为 gltf，转换方式有以下方式：")]),t._v(" "),n("ul",[n("li",[t._v("在线转换：https://cesiumjs.org/convertModel/")]),t._v(" "),n("li",[t._v("dae 转 glTF：https://github.com/KhronosGroup/COLLADA2GLTF")]),t._v(" "),n("li",[t._v("obj 转 glTF：https://github.com/CesiumGS/obj2gltf 或者https://github.com/PrincessGod/objTo3d-tiles，https://github.com/fanvanzh/3DTiles")]),t._v(" "),n("li",[t._v("glTF 内部优化处理：https://github.com/CesiumGS/gltf-pipeline")])]),t._v(" "),n("h2",{attrs:{id:"_3dtiles-三维模型数据处理"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_3dtiles-三维模型数据处理"}},[t._v("#")]),t._v(" 3DTiles 三维模型数据处理")]),t._v(" "),n("p",[t._v("Cesium 对数据处理工具没特别要求，生产的数据格式满足 Cesium 要求的 3DTiles 格式即可。3DTiles 格式规范： https://github.com/AnalyticalGraphicsInc/3d-tiles")]),t._v(" "),n("ul",[n("li",[t._v("城市建筑白膜：在拥有如 shp、kml 等格式的建筑物二维面边界坐标数据，和高度或楼层数属性信息，再通过工具转换为三维立体的白膜建筑物 3DTiles 模型。")]),t._v(" "),n("li",[t._v("倾斜摄影：一般是无人机拍摄，拍摄的数据通过建模工具 ContextCapture Cente 软件可以直接导出 cesium 3DTiles 格式。也可以通过 osgb 通用格式转 3DTiles 格式后在平台中使用。")]),t._v(" "),n("li",[t._v("点云数据：一般是激光扫描后生产的数据。")]),t._v(" "),n("li",[t._v("人工建模：数据来源于 3dmax、Maya 等建模软件建模，建好的三维模型导出为 dae 和 obj 数据后，再转换为 3DTiles 数据格式。")]),t._v(" "),n("li",[t._v("BIM 模型：数据来源于专业的 BIM 软件，常见的有 rvt 和 dgn 格式，目前市面没有免费软件，都是收费为主。")])]),t._v(" "),n("p",[t._v("目前处理数据的工具：")]),t._v(" "),n("ul",[n("li",[t._v("github 开源的小工具")]),t._v(" "),n("li",[t._v("Cesium 官方推出的 Cesium Ion 在线平台")]),t._v(" "),n("li",[t._v("cesiumLab 等")])])])}),[],!1,null,null,null);s.default=e.exports}}]);