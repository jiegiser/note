(window.webpackJsonp=window.webpackJsonp||[]).push([[142],{859:function(t,r,a){"use strict";a.r(r);var e=a(29),v=Object(e.a)({},(function(){var t=this,r=t.$createElement,a=t._self._c||r;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"工作者线程简介"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#工作者线程简介"}},[t._v("#")]),t._v(" 工作者线程简介")]),t._v(" "),a("h3",{attrs:{id:"工作者线程与线程"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#工作者线程与线程"}},[t._v("#")]),t._v(" 工作者线程与线程")]),t._v(" "),a("p",[t._v("工作者线程和线程有很多共同之处：")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("工作者线程是以实际线程实现的。例如，Blink 浏览器引擎实现工作者线程的 WorkerThread 就对应着底层的线程。")])]),t._v(" "),a("li",[a("p",[t._v("工作者线程并行执行。虽然页面和工作者线程都是单线程 JavaScript 环境，每个环境中的指令则可以并行执行。")])]),t._v(" "),a("li",[a("p",[t._v("工作者线程可以共享某些内存。工作者线程能够使用 SharedArrayBuffer 在多个环境间共享内容。虽然线程会使用锁实现并发控制，但 JavaScript 使用 Atomics 接口实现并发控制。工作者线程与线程有很多类似之处，但也有重要的区别。")])]),t._v(" "),a("li",[a("p",[t._v("工作者线程不共享全部内存。在传统线程模型中，多线程有能力读写共享内存空间。除了 Shared-ArrayBuffer 外，从工作者线程进出的数据需要复制或转移。")])]),t._v(" "),a("li",[a("p",[t._v("工作者线程不一定在同一个进程里。通常，一个进程可以在内部产生多个线程。根据浏览器引擎的实现，工作者线程可能与页面属于同一进程，也可能不属于。例如，Chrome的 Blink引擎对共享工作者线程和服务工作者线程使用独立的进程。")])]),t._v(" "),a("li",[a("p",[t._v("创建工作者线程的开销更大。工作者线程有自己独立的事件循环、全局对象、事件处理程序和其他 JavaScript 环境必需的特性。创建这些结构的代价不容忽视")])])]),t._v(" "),a("blockquote",[a("p",[t._v("工作者线程相对比较重，不建议大量使用。例如，对一张 400 万像素的图片，为每个像素都启动一个工作者线程是不合适的。通常，工作者线程应该是长期运行的，启动成本比较高，每个实例占用的内存也比较大。")])]),t._v(" "),a("Valine")],1)}),[],!1,null,null,null);r.default=v.exports}}]);