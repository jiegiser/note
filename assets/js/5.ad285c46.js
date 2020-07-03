(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{251:function(t,e,v){t.exports=v.p+"assets/img/threeHttp.ca48afd9.png"},252:function(t,e,v){t.exports=v.p+"assets/img/three.5ddaf23d.png"},295:function(t,e,v){"use strict";v.r(e);var r=v(28),_=Object(r.a)({},(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h2",{attrs:{id:"http-三次握手"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#http-三次握手"}},[t._v("#")]),t._v(" HTTP 三次握手")]),t._v(" "),r("p",[t._v("首先要知道在客户端与服务器端进行一个 http 请求的发送和返回的过程当中，我们需要创建一个 TCP 连接（TCP connection）；因为 http 只存在请求和响应，不存在连接这个概念的；请求很响应都是数据包，他们之间需要经过一个传输的通道，这个传输的通道就是通过 TCP connection 创建的一个从客户端发起，服务端接收的一个连接。这个连接是可以一直保存连接；http 请求时在连接的基础上去发送的；在 TCP 连接上面可以发送多个 http 请求的（在不同的 http 版本里面是不一样的，在 1.0 里面这个连接同时创建 http 请求，请求完毕就会关闭这个 TCP 连接；在 1.1 中可以通过某种声明方式，使得这个连接一直保持，第一个请求发送完毕之后，可以进行第二个请求；2.0 的版本中 http 请求时可以并发的）")]),t._v(" "),r("h3",{attrs:{id:"说明"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#说明"}},[t._v("#")]),t._v(" 说明")]),t._v(" "),r("p",[r("img",{attrs:{src:v(251),alt:"图解http中插图"}})]),t._v(" "),r("blockquote",[r("p",[t._v("图片来源：《图解HTTP》")])]),t._v(" "),r("p",[t._v("简单示意图：")]),t._v(" "),r("ul",[r("li",[t._v("客户端–发送带有 SYN/Seq 标志的数据包–一次握手–服务端")]),t._v(" "),r("li",[t._v("服务端–发送带有 SYN/ACK 标志的数据包–二次握手–客户端")]),t._v(" "),r("li",[t._v("客户端–发送带有带有 ACK 标志的数据包–三次握手–服务端")])]),t._v(" "),r("p",[r("img",{attrs:{src:v(252),alt:"图解http中插图"}})]),t._v(" "),r("ol",[r("li",[t._v("客户端发起一个要创建连接的数据包（SYN/Seq）的请求发送到服务端")]),t._v(" "),r("li",[t._v("服务器端接收到客户端的请求，返回一个 SYN/ACK 标志的数据包，其中 ACK 就是客户端发送 Seq + 1,而且再次发送一个服务端的 Seq。")]),t._v(" "),r("li",[t._v("客户端接收到服务端发送的数据，表名允许连接，再次向服务端发送数据确认可以接收到数据，发送 ACK 等于上一步返回的 Seq + 1，以及新的数据 Seq；")])]),t._v(" "),r("h3",{attrs:{id:"为何要三次握手"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#为何要三次握手"}},[t._v("#")]),t._v(" 为何要三次握手")]),t._v(" "),r("p",[t._v("简单的说就是为了防止服务端开启一些无用的连接；因为网络连接是有延迟的(因为之间需要通过各种复杂的方式进行传输)；需要三次握手来确定客户端与服务器端保持连接以及发送数据成功。")]),t._v(" "),r("p",[t._v("第一次握手：Client 什么都不能确认；Server 确认了对方发送正常，自己接收正常")]),t._v(" "),r("p",[t._v("第二次握手：Client 确认了：自己发送、接收正常，对方发送、接收正常；Server 确认了：对方发送正常，自己接收正常")]),t._v(" "),r("p",[t._v("第三次握手：Client 确认了：自己发送、接收正常，对方发送、接收正常；Server 确认了：自己发送、接收正常，对方发送、接收正常")]),t._v(" "),r("p",[t._v("所以三次握手就能确认双发收发功能都正常，缺一不可。")]),t._v(" "),r("h2",{attrs:{id:"四次挥手"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#四次挥手"}},[t._v("#")]),t._v(" 四次挥手")]),t._v(" "),r("h3",{attrs:{id:"tcp关闭连接过程"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#tcp关闭连接过程"}},[t._v("#")]),t._v(" TCP关闭连接过程")]),t._v(" "),r("ol",[r("li",[r("p",[t._v("Client 向 Server 发送 FIN 包，表示 Client 主动要关闭连接，然后进入 FIN_WAIT_1 状态，等待 Server 返回 ACK 包。此后 Client 不能再向 Server 发送数据，但能读取数据。")])]),t._v(" "),r("li",[r("p",[t._v("Server 收到 FIN 包后向 Client 发送 ACK 包，然后进入 CLOSE_WAIT 状态，此后 Server 不能再读取数据，但可以继续向 Client 发送数据。")])]),t._v(" "),r("li",[r("p",[t._v("Client 收到 Server 返回的 ACK 包后进入 FIN_WAIT_2 状态，等待 Server 发送 FIN 包。")])]),t._v(" "),r("li",[r("p",[t._v("Server 完成数据的发送后，将 FIN 包发送给 Client，然后进入 LAST_ACK 状态，等待 Client 返回 ACK 包，此后 Server 既不能读取数据，也不能发送数据。")])]),t._v(" "),r("li",[r("p",[t._v("Client 收到 FIN 包后向 Server 发送 ACK 包，然后进入 TIME_WAIT 状态，接着等待足够长的时间（2MSL）以确保 Server 接收到 ACK 包，最后回到 CLOSED 状态，释放网络资源。")])])]),t._v(" "),r("p",[t._v("Server 收到 Client 返回的 ACK 包后便回到 CLOSED 状态，释放网络资源。")]),t._v(" "),r("h3",{attrs:{id:"为什么要四次挥手"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#为什么要四次挥手"}},[t._v("#")]),t._v(" 为什么要四次挥手")]),t._v(" "),r("p",[t._v("TCP 是全双工信道，何为全双工就是客户端与服务端建立两条通道，通道1: 客户端的输出连接服务端的输入；通道2: 客户端的输入连接服务端的输出。两个通道可以同时工作：客户端向服务端发送信号的同时服务端也可以向客户端发送信号。所以关闭双通道的时候就是这样：")]),t._v(" "),r("p",[t._v("客户端：我要关闭输入通道了。 服务端：好的，你关闭吧，我这边也关闭这个通道。")]),t._v(" "),r("p",[t._v("服务端：我也要关闭输入通道了。 客户端：好的你关闭吧，我也把这个通道关闭。")])])}),[],!1,null,null,null);e.default=_.exports}}]);