(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{591:function(v,a,t){"use strict";t.r(a);var _=t(6),r=Object(_.a)({},(function(){var v=this,a=v.$createElement,t=v._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[t("p",[v._v("此篇仅作拜读"),t("a",{attrs:{href:"https://github.com/fenixsoft",target:"_blank",rel:"noopener noreferrer"}},[v._v("周志明"),t("OutboundLink")],1),v._v("老师的《深入理解Java虚拟机》阅读笔记")]),v._v(" "),t("details",{staticClass:"custom-block details"},[t("summary",[v._v("目录")]),v._v(" "),t("p"),t("div",{staticClass:"table-of-contents"},[t("ul",[t("li",[t("a",{attrs:{href:"#history"}},[v._v("History")])]),t("li",[t("a",{attrs:{href:"#java内存区域与oom异常"}},[v._v("Java内存区域与OOM异常")]),t("ul",[t("li",[t("a",{attrs:{href:"#runtime数据区"}},[v._v("RunTime数据区")])]),t("li",[t("a",{attrs:{href:"#hotspot虚拟机对象探秘"}},[v._v("HotSpot虚拟机对象探秘")])]),t("li",[t("a",{attrs:{href:"#实战oomerror异常"}},[v._v("实战OOMError异常")])]),t("li",[t("a",{attrs:{href:"#小结"}},[v._v("小结")])])])]),t("li",[t("a",{attrs:{href:"#垃圾收集器与内存分配策略"}},[v._v("垃圾收集器与内存分配策略")]),t("ul",[t("li",[t("a",{attrs:{href:"#对象已死"}},[v._v("对象已死？")])]),t("li",[t("a",{attrs:{href:"#gc算法"}},[v._v("GC算法")])]),t("li",[t("a",{attrs:{href:"#hotspot算法细节实现"}},[v._v("HotSpot算法细节实现")])]),t("li",[t("a",{attrs:{href:"#经典垃圾收集器"}},[v._v("经典垃圾收集器")])]),t("li",[t("a",{attrs:{href:"#低延迟垃圾收集器"}},[v._v("低延迟垃圾收集器")])]),t("li",[t("a",{attrs:{href:"#选择合适的垃圾收集器"}},[v._v("选择合适的垃圾收集器")])]),t("li",[t("a",{attrs:{href:"#实战-内存分配与回收策略"}},[v._v("实战：内存分配与回收策略")])]),t("li",[t("a",{attrs:{href:"#小结"}},[v._v("小结")])])])])])]),t("p")]),v._v(" "),t("h2",{attrs:{id:"history"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#history"}},[v._v("#")]),v._v(" History")]),v._v(" "),t("h1",{attrs:{id:"自动内存管理"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#自动内存管理"}},[v._v("#")]),v._v(" 自动内存管理")]),v._v(" "),t("h2",{attrs:{id:"java内存区域与oom异常"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#java内存区域与oom异常"}},[v._v("#")]),v._v(" Java内存区域与OOM异常")]),v._v(" "),t("h3",{attrs:{id:"runtime数据区"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#runtime数据区"}},[v._v("#")]),v._v(" RunTime数据区")]),v._v(" "),t("h4",{attrs:{id:"程序计数器"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#程序计数器"}},[v._v("#")]),v._v(" 程序计数器")]),v._v(" "),t("ul",[t("li",[t("code",[v._v("Program Counter Register")])]),v._v(" "),t("li",[v._v("一块"),t("code",[v._v("较小")]),v._v("的内存空间，可以看作是当前线程所执行的"),t("code",[v._v("字节码")]),v._v("的"),t("code",[v._v("行号指示器")])]),v._v(" "),t("li",[t("code",[v._v("字节码解释器")]),v._v("用来选取下一条需要执行的字节码指令")]),v._v(" "),t("li",[t("code",[v._v("程序控制流")]),v._v("的指示器")]),v._v(" "),t("li",[t("code",[v._v("分支")]),v._v("、"),t("code",[v._v("循环")]),v._v("、"),t("code",[v._v("跳转")]),v._v("、"),t("code",[v._v("异常处理")]),v._v("、"),t("code",[v._v("线程恢复")]),v._v("等基础功能的依赖")]),v._v(" "),t("li",[t("code",[v._v("线程私有")]),v._v("，每条线程都需要有一个"),t("code",[v._v("独立")]),v._v("的程序计数器来保证多线程情况下，线程切换后能恢复到正确的执行位置")]),v._v(" "),t("li",[v._v("唯一一个没有规定任何"),t("code",[v._v("OOM")]),v._v("情况的区域")])]),v._v(" "),t("h4",{attrs:{id:"java虚拟机栈"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#java虚拟机栈"}},[v._v("#")]),v._v(" Java虚拟机栈")]),v._v(" "),t("ul",[t("li",[t("code",[v._v("线程私有")]),v._v("，生命周期与线程相同")]),v._v(" "),t("li",[t("code",[v._v("虚拟机栈")]),v._v("描述的是 "),t("code",[v._v("Java方法")]),v._v("执行的"),t("code",[v._v("线程内存模型")]),v._v("，每个"),t("code",[v._v("方法")]),v._v("被执行的时候，Java虚拟机都会同步创建一个"),t("code",[v._v("帧栈")]),v._v("用于存储"),t("code",[v._v("局部变量表")]),v._v("、"),t("code",[v._v("操作数栈")]),v._v("、"),t("code",[v._v("动态连接")]),v._v("、"),t("code",[v._v("方法出口")]),v._v("等信息，通常"),t("code",[v._v("栈")]),v._v("指的都是"),t("code",[v._v("局部变量表")])]),v._v(" "),t("li",[v._v("每一个方法被调用直至执行完毕的过程，就对应着一个帧栈在虚拟机栈中从入栈到出栈的过程")]),v._v(" "),t("li",[t("code",[v._v("局部变量表")]),v._v("存放了\n"),t("ul",[t("li",[v._v("编译器可知的各种Java虚拟机基本数据类型\n"),t("ul",[t("li",[t("code",[v._v("boolean")]),v._v(", "),t("code",[v._v("byte")]),v._v(", "),t("code",[v._v("char")]),v._v(", "),t("code",[v._v("short")]),v._v(", "),t("code",[v._v("int")]),v._v(", "),t("code",[v._v("float")]),v._v(", "),t("code",[v._v("long")]),v._v(", "),t("code",[v._v("double")])])])]),v._v(" "),t("li",[v._v("对象引用\n"),t("ul",[t("li",[t("code",[v._v("reference")]),v._v("类型，它并不等同于对象本身，可能是一个指向对象起始地址的引用指针，也可能是指向一个代表对象的句柄或者其他与此对象相关的位置")])])]),v._v(" "),t("li",[t("code",[v._v("returnAddress")]),v._v("类型\n"),t("ul",[t("li",[v._v("指向一条字节码指令的地址")])])])])]),v._v(" "),t("li",[v._v("上面三种数据类型在局部变量表中的存储空间以"),t("code",[v._v("局部变量槽(Slot)")]),v._v("来表示\n"),t("ul",[t("li",[t("code",[v._v("64")]),v._v("位的"),t("code",[v._v("long")]),v._v("和"),t("code",[v._v("double")]),v._v("占"),t("code",[v._v("2")]),v._v("个")]),v._v(" "),t("li",[v._v("其余的数据类型占"),t("code",[v._v("1")]),v._v("个。")])])]),v._v(" "),t("li",[v._v("局部变量表所需的内存空间在"),t("code",[v._v("编译期间")]),v._v("完成分配，当进入一个方法时，这个方法需要在栈帧中分配多大的局部变量空间是"),t("code",[v._v("完全确定")]),v._v("的，在"),t("code",[v._v("方法运行期间")]),v._v("不会改变局部变量表的大小（变量槽数）")]),v._v(" "),t("li",[t("code",[v._v("StackOverflowError")]),v._v(" "),t("ul",[t("li",[v._v("如果线程请求的栈深度"),t("code",[v._v(">")]),v._v("虚拟机所允许的深度")])])]),v._v(" "),t("li",[t("code",[v._v("OOM")]),v._v(" "),t("ul",[t("li",[v._v("Java虚拟机栈容量可以"),t("code",[v._v("动态扩展")]),v._v("，当栈扩展时无法申请到足够内存时")]),v._v(" "),t("li",[v._v("不支持动态扩展，线程申请栈空间失败时")])])])]),v._v(" "),t("h4",{attrs:{id:"本地方法栈"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#本地方法栈"}},[v._v("#")]),v._v(" 本地方法栈")]),v._v(" "),t("ul",[t("li",[t("code",[v._v("Native Method Stacks")])]),v._v(" "),t("li",[v._v("为虚拟机使用到的"),t("code",[v._v("本地方法")]),v._v("服务")]),v._v(" "),t("li",[v._v("异常状态与Java虚拟机栈一样")])]),v._v(" "),t("h4",{attrs:{id:"java堆"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#java堆"}},[v._v("#")]),v._v(" Java堆")]),v._v(" "),t("h3",{attrs:{id:"hotspot虚拟机对象探秘"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#hotspot虚拟机对象探秘"}},[v._v("#")]),v._v(" HotSpot虚拟机对象探秘")]),v._v(" "),t("h3",{attrs:{id:"实战oomerror异常"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#实战oomerror异常"}},[v._v("#")]),v._v(" 实战OOMError异常")]),v._v(" "),t("h3",{attrs:{id:"小结"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#小结"}},[v._v("#")]),v._v(" 小结")]),v._v(" "),t("h2",{attrs:{id:"垃圾收集器与内存分配策略"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#垃圾收集器与内存分配策略"}},[v._v("#")]),v._v(" 垃圾收集器与内存分配策略")]),v._v(" "),t("h3",{attrs:{id:"对象已死"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#对象已死"}},[v._v("#")]),v._v(" 对象已死？")]),v._v(" "),t("h3",{attrs:{id:"gc算法"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#gc算法"}},[v._v("#")]),v._v(" GC算法")]),v._v(" "),t("h3",{attrs:{id:"hotspot算法细节实现"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#hotspot算法细节实现"}},[v._v("#")]),v._v(" HotSpot算法细节实现")]),v._v(" "),t("h3",{attrs:{id:"经典垃圾收集器"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#经典垃圾收集器"}},[v._v("#")]),v._v(" 经典垃圾收集器")]),v._v(" "),t("h3",{attrs:{id:"低延迟垃圾收集器"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#低延迟垃圾收集器"}},[v._v("#")]),v._v(" 低延迟垃圾收集器")]),v._v(" "),t("h3",{attrs:{id:"选择合适的垃圾收集器"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#选择合适的垃圾收集器"}},[v._v("#")]),v._v(" 选择合适的垃圾收集器")]),v._v(" "),t("h3",{attrs:{id:"实战-内存分配与回收策略"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#实战-内存分配与回收策略"}},[v._v("#")]),v._v(" 实战：内存分配与回收策略")]),v._v(" "),t("h3",{attrs:{id:"小结-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#小结-2"}},[v._v("#")]),v._v(" 小结")])])}),[],!1,null,null,null);a.default=r.exports}}]);