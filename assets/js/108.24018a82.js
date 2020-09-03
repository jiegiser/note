(window.webpackJsonp=window.webpackJsonp||[]).push([[108],{530:function(t,e,s){"use strict";s.r(e);var a=s(25),o=Object(a.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"坐标系相关"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#坐标系相关"}},[t._v("#")]),t._v(" 坐标系相关")]),t._v(" "),s("h2",{attrs:{id:"web-端常见的坐标系"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#web-端常见的坐标系"}},[t._v("#")]),t._v(" web 端常见的坐标系")]),t._v(" "),s("h3",{attrs:{id:"epsg-4326"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#epsg-4326"}},[t._v("#")]),t._v(" EPSG:4326")]),t._v(" "),s("p",[t._v("一个地理坐标系（也叫大地坐标系），用于描述WGS84坐标系，其是从1984年开始在GPS中使用的全球地理坐标系统；也就是通常说的经纬度坐标；")]),t._v(" "),s("p",[t._v("该坐标系是大地坐标系（Geodectic coordinate system），单位是度（角度单位），角度用来测量长度和面积是不合适的，但可用于定位，而且它的范围又覆盖了全球，所以很适合全球定位（GPS卫星定位的坐标系用的就是它）")]),t._v(" "),s("h3",{attrs:{id:"epsg-3857"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#epsg-3857"}},[t._v("#")]),t._v(" EPSG:3857")]),t._v(" "),s("p",[t._v("EPSG:3857是一个投影坐标系（Projected coordinate system），在WGS84坐标系基础上进行了伪墨卡托投影（Pseudo-Mercator）。球形墨卡托地图、谷歌地图、osm地图、bing地图、ArcGIS、ESRI会常用该坐标系。\n投影坐标系（Projected coordinate system）是在大地坐标系（Geodectic coordinate system）的基础上，经过数学运算，把大地坐标系的曲面坐标映射到平面上产生的一种平面坐标系。\n虽然EPSG:3857是平面坐标系，单位是长度（米），但是他用了一个长度和面积都不靠谱的投影坐标系：Pseudo-Mercator（伪墨卡托投影，该投影是正轴等角切圆柱投影，在高纬度地区形变的非常严重）。原来高德地图和谷歌地图上面画的东东都是变形的！没错，就是变形的，你看到的这些互联网地图用的都是类似的投影，他们在高纬度地区都是拉伸严重的，远比他的实地面积要大。但是正轴墨卡托投影有个优点：投影后角度不变形，所以用来导航和定位非常合适。")]),t._v(" "),s("p",[t._v("CGCS2000与WGS84的基本定义是一致的，采用的参考椭球bai非常相近，椭球常数中仅扁率有细微差别，du虽然因此会造成同一点在两个坐标系中的值会有zhi微小差异，但是，在当前测量精度水平下这种微小差值dao是可以忽略回的，因此，可以认为CGCS2000和WGS84是相容的，在坐标系的实现精度范围答内两种坐标系下的坐标是一致的。")]),t._v(" "),s("p",[t._v("CGCS 2k和WGS 84经纬度可以说完全一致（毫米级别差别），但是二者的方里网坐标差别就大了去了。因为")]),t._v(" "),s("p",[t._v("1）二者中央经线在6度带时一样，CGCS 2k有3度带坐标，UTM WGS84只有6度带方里网坐标。")]),t._v(" "),s("p",[t._v("2）二者投影方法不一样，CGCS 2k是Gauss-Kruger投影 TM投影，UTM WGS 84顾名思义当然是UTM投影了。")]),t._v(" "),s("blockquote",[s("p",[t._v("epsg参数的含义：https://yq.aliyun.com/articles/399279")])]),t._v(" "),s("blockquote",[s("p",[t._v("度分秒转换: https://www.23bei.com/tool-135.html")])]),t._v(" "),s("blockquote",[s("p",[t._v("openlayers例子: http://60.174.203.118:8018/water/index.html")])]),t._v(" "),s("blockquote",[s("p",[t._v("墨卡托投影、高斯-克吕格投影、UTM投影及我国分带方法: http://tian0226.blog.sohu.com/142843049.html")])])])}),[],!1,null,null,null);e.default=o.exports}}]);