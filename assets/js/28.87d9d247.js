(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{589:function(_,v,t){"use strict";t.r(v);var e=t(6),a=Object(e.a)({},(function(){var _=this,v=_.$createElement,t=_._self._c||v;return t("ContentSlotsDistributor",{attrs:{"slot-key":_.$parent.slotKey}},[t("details",{staticClass:"custom-block details"},[t("summary",[_._v("Multithreading&Architecture")]),_._v(" "),t("p"),t("div",{staticClass:"table-of-contents"},[t("ul",[t("li",[t("a",{attrs:{href:"#_1-java-i-o-演进之路"}},[_._v("1. Java I/O 演进之路")]),t("ul",[t("li",[t("a",{attrs:{href:"#_1-1-i-o-的问世"}},[_._v("1.1 I/O 的问世")])]),t("li",[t("a",{attrs:{href:"#_1-2-五种i-o通信模型"}},[_._v("1.2 五种I/O通信模型")])]),t("li",[t("a",{attrs:{href:"#_1-3-从bio到nio的演进"}},[_._v("1.3 从BIO到NIO的演进")])])])])])]),t("p")]),_._v(" "),t("h2",{attrs:{id:"_1-java-i-o-演进之路"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-java-i-o-演进之路"}},[_._v("#")]),_._v(" 1. Java I/O 演进之路")]),_._v(" "),t("h3",{attrs:{id:"_1-1-i-o-的问世"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-i-o-的问世"}},[_._v("#")]),_._v(" 1.1 I/O 的问世")]),_._v(" "),t("h4",{attrs:{id:"_1-1-1-什么是i-o"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-1-什么是i-o"}},[_._v("#")]),_._v(" 1.1.1 什么是I/O")]),_._v(" "),t("p",[_._v("我们都知道在UNIX世界里一切皆文件，而文件是什么呢？文件就是一串二进制流而已，其实不管是"),t("code",[_._v("Socket")]),_._v("，还是FIFO (First Input First Output，先进先出队列)、管道、终端。对计算机来说，一切都是文件，一切都是流。在信息交换的过程中，计算机都是对这些流进行数据的收发操作，简称为I/O操作(Input and Output)，包括往流中读出数据、系统调用Read、写入数据、系统调用Write。不过计算机里有那么多流，怎么知道要操作哪个流呢？实际上是由操作系统内核创建"),t("code",[_._v("文件描述符")]),_._v("(File Descriptor，FD)来标识的，一个"),t("code",[_._v("FD")]),_._v("就是一个非负整数，所以对这个整数的操作就是对这个文件(流)的操作。我们创建一个"),t("code",[_._v("Socket")]),_._v("，通过系统调用会返回一个"),t("code",[_._v("FD")]),_._v("，那么剩下的对"),t("code",[_._v("Socket")]),_._v("的操作就会转化为对这个描述符的操作，这又是一种分层和抽象的思想。")]),_._v(" "),t("h4",{attrs:{id:"_1-1-2-i-o交互流程"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-2-i-o交互流程"}},[_._v("#")]),_._v(" 1.1.2 I/O交互流程")]),_._v(" "),t("p",[_._v("通常用户进程中的一次完整I/O交互流程分为两阶段，首先是经过内核空间，也就是由报系统处理:紧接着就是到用户空间，也就是交由应用程序。")]),_._v(" "),t("p",[_._v("![截屏2022-01-24 下午10.43.11](https://gitee.com/WWWWWWWXQ/images/raw/master/JCP-JUC/截屏2022-01-24 下午10.43.11.png)")]),_._v(" "),t("p",[_._v("内核空间中存放的是内核代码和数据，而进程的用户空间中存放的是用户程序的代码和数据。不管是内核空间还是用户空间，它们都处于虚拟空间中，Linux使用两级保护机制: 0级供内核(Kernel)使用，3级供用户程序使用。每个进程都有各自的私有用户空间("),t("code",[_._v("0-3G")]),_._v(")，这个空间对系统中的其他进程是不可见的。最高的"),t("code",[_._v("1G")]),_._v("字节虚拟内核空间则为所有进程及内核共享。")]),_._v(" "),t("p",[_._v("操作系统和驱动程序运行在内核空间，应用程序运行在用户空间，两者不能简单地使用指传递数据。因为Linux使用的虚拟内存机制，必须通过系统调用请求Kernel来协助完成I/O操作，内核会为每个I/O设备维护一个缓冲区，用户空间的数据可能被换出，所以当内核空间使用用户空间的指针时，对应的数据可能不在内存中。")]),_._v(" "),t("p",[_._v("对于一个输入操作来说，进程I/O系统调用后，内核会先看缓冲区中有没有相应的缓存数据，如果没有再到设备中读取。因为设备I/O一般速度较慢，需要等待，内核缓冲区有数据则直接复制到进程空间。所以，一个网络输入操作通常包括两个不同阶段。")]),_._v(" "),t("ol",[t("li",[_._v("等待网络数据到达网卡，然后将数据读取到内核缓冲区。")]),_._v(" "),t("li",[_._v("从内核缓冲区复制数据，然后拷贝到用户空间。")])]),_._v(" "),t("p",[_._v("I/O有内存I/O、网络I/O和磁盘I/O三种，通常我们说的I/O指的是后两者。如下图所示I/O通信过程的调度示意。")]),_._v(" "),t("p",[_._v("![截屏2022-01-24 下午10.51.44](https://gitee.com/WWWWWWWXQ/images/raw/master/JCP-JUC/截屏2022-01-24 下午10.51.44.png)")]),_._v(" "),t("h3",{attrs:{id:"_1-2-五种i-o通信模型"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-五种i-o通信模型"}},[_._v("#")]),_._v(" 1.2 五种I/O通信模型")]),_._v(" "),t("p",[_._v("在网络环境下，通俗地讲，将I/O分为两步：第一步是等待；第二步是数据搬迁。")]),_._v(" "),t("p",[_._v("如果想要提高I/O效率，需要将等待时间降低。因此发展出来五种I/O模型，分别是：")]),_._v(" "),t("ul",[t("li",[_._v("阻塞I/O模型")]),_._v(" "),t("li",[_._v("非阻塞I/O模型")]),_._v(" "),t("li",[_._v("多路复用I/O模型")]),_._v(" "),t("li",[_._v("信号驱动I/O模型")]),_._v(" "),t("li",[_._v("异步I/O模型。")])]),_._v(" "),t("p",[_._v("其中，前四种被称为"),t("strong",[_._v("同步")]),_._v("I/O，下面对每一种I/O模型进行详细分析。")]),_._v(" "),t("h4",{attrs:{id:"_1-2-1-阻塞i-o模型"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-1-阻塞i-o模型"}},[_._v("#")]),_._v(" 1.2.1 阻塞I/O模型")]),_._v(" "),t("p",[_._v("阻塞I/O模型的通信过程示意如下图所示。")]),_._v(" "),t("p",[_._v("![截屏2022-01-24 下午10.53.47](https://gitee.com/WWWWWWWXQ/images/raw/master/JCP-JUC/截屏2022-01-24 下午10.53.47.png)")]),_._v(" "),t("p",[_._v("当用户进程调用了"),t("code",[_._v("recvfrom")]),_._v("这个系统调用，内核就开始了I/O的第一个阶段："),t("strong",[_._v("准备数据")]),_._v("。对于网络I/O来说，很多时候数据在一开始还没有到达（比如，还没有收到一个完整的UDP包)，这个时候内核就要等待足够的数据到来。而在用户进程这边，整个进程会被阻塞，当数据准备好时，它就会将数据从内核拷贝到用户内存，然后返回结果，用户进程才解除阻塞的状态，重新运行起来。几乎所有的开发者第一次接触到的网络编程都是从"),t("code",[_._v("listen()")]),_._v("、"),t("code",[_._v("send()")]),_._v("，"),t("code",[_._v("recv()")]),_._v("等接口开始的，这些接口都是"),t("strong",[_._v("阻塞型")]),_._v("的。")]),_._v(" "),t("p",[_._v("阻塞I/O模型的特性总结如下表所示。")]),_._v(" "),t("table",[t("thead",[t("tr",[t("th",[_._v("特点")]),_._v(" "),t("th",[_._v("特点1在I/O执行的两个阶段(等待数据和拷贝数据)都被阻")])])]),_._v(" "),t("tbody",[t("tr",[t("td",[_._v("典型应用")]),_._v(" "),t("td",[_._v("阻塞Socket，Java BIO")])]),_._v(" "),t("tr",[t("td",[_._v("优点")]),_._v(" "),t("td",[_._v("进程阻塞挂起不消耗CPU资源，及时响应每个操作"),t("br"),_._v("实现难度低，开发应用较容易"),t("br"),_._v("适合并发量小的网络应用开发")])]),_._v(" "),t("tr",[t("td",[_._v("缺点")]),_._v(" "),t("td",[_._v("不适合并发量大的应用，因为一个请求I/O会阻塞进程"),t("br"),_._v("需要为每个请求分配一个处理进程(线程)以及时响应，系统开销大")])])])]),_._v(" "),t("h4",{attrs:{id:"_1-1-2-非阻塞i-o模型"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-2-非阻塞i-o模型"}},[_._v("#")]),_._v(" 1.1.2 非阻塞I/O模型")]),_._v(" "),t("p",[_._v("非阻塞I/O模型的通信过程示意如下图所示")]),_._v(" "),t("p",[_._v("![截屏2022-01-25 下午10.47.47](https://gitee.com/WWWWWWWXQ/images/raw/master/JCP-JUC/截屏2022-01-25 下午10.47.47.png)")]),_._v(" "),t("p",[_._v("当用户进程发出"),t("code",[_._v("read")]),_._v("操作时，如果内核中的数据还没有准备好，那么它并不会阻塞用户进程是立刻返回一个"),t("code",[_._v("error")]),_._v("。从用户进程角度讲，它发起一个"),t("code",[_._v("read")]),_._v("操作后，并不需要等待，而是马得到了一个结果，用户进程判断结果是一个"),t("code",[_._v("error")]),_._v("，它就知道数据还没有准备好。于是它可次发送"),t("code",[_._v("read")]),_._v("操作，一旦内核中的数据准备好了，并且再次收到了用户进程的系统调用，那么马上将数据拷贝到用户内存，然后返回，非阻塞型接口相比于阻塞型接口的显著差异在于，在被用之后会立即返回。非阻塞I/O模型的特性总结如下表所示。")]),_._v(" "),t("table",[t("thead",[t("tr",[t("th",[_._v("特点")]),_._v(" "),t("th",[_._v("用户进程需要不断地主动询问内核(Kemel)数据准备好了没有")])])]),_._v(" "),t("tbody",[t("tr",[t("td",[_._v("典型应用")]),_._v(" "),t("td",[_._v("Socket设置NON_BLOCK")])]),_._v(" "),t("tr",[t("td",[_._v("优点")]),_._v(" "),t("td",[_._v("实现难度低，开发应用相对阻塞I/O模型较难")])]),_._v(" "),t("tr",[t("td",[_._v("缺点")]),_._v(" "),t("td",[_._v("进程轮询(重复)调用，消耗CPU的资源"),t("br"),_._v("适合并发量较小且不需要及时响应的网络应用开发")])])])]),_._v(" "),t("p",[_._v("非阻塞模式套接字与阻塞模式套接字相比，不容易使用。使用非阻塞模式套接字，需要编写更多的代码，但是，非阻塞模式套接字在控制建立多个连接、数据的收发量不均、时间不定时具有明显优势。")]),_._v(" "),t("h4",{attrs:{id:"_1-1-3-多路复用i-o模型"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-3-多路复用i-o模型"}},[_._v("#")]),_._v(" 1.1.3 多路复用I/O模型")]),_._v(" "),t("p",[_._v("多路复用I/O模型的通信过程示意如下图所示。")]),_._v(" "),t("p",[_._v("![截屏2022-01-25 下午10.52.22](https://gitee.com/WWWWWWWXQ/images/raw/master/JCP-JUC/截屏2022-01-25 下午10.52.22.png)")]),_._v(" "),t("p",[_._v("多个进程的I/O可以注册到一个"),t("strong",[_._v("复用器")]),_._v("("),t("code",[_._v("Selector")]),_._v(")上，当用户进程调用该"),t("code",[_._v("Selector")]),_._v("，"),t("code",[_._v("Selector")]),_._v("会监听注册进来的所有I/O，如果"),t("code",[_._v("Selector")]),_._v("监听的所有I/O在内核缓冲区都没有可读数据，"),t("code",[_._v("select")]),_._v("调用进程会被阻塞，而当任一I/O在内核缓冲区中有可读数据时，"),t("code",[_._v("select")]),_._v("调用就会返回，而后"),t("code",[_._v("select")]),_._v("调用进程可以自己或通知另外的进程(注册进程)再次发起读取I/O，读取内核中准备好的数据多个进程注册I/O后，只有一个"),t("code",[_._v("select")]),_._v("调用进程被阻塞。")]),_._v(" "),t("p",[_._v("多路复用I/O相对阻塞和非阻塞更难简单说明，所以额外解释一段，其实多路复用I/O模型和阻塞I/O模型并没有太大的不同，事实上，还更差一些，因为这里需要使用两个系统调用("),t("code",[_._v("select")]),_._v("和"),t("code",[_._v("recvfrom")]),_._v(")，而阻塞I/O模型只有一次系统调用(revfrom)。但是，用"),t("code",[_._v("Selector")]),_._v("的优势在于它可以"),t("strong",[_._v("同时处理多个连接")]),_._v("，所以如果处理的连接数不是很多，使用"),t("code",[_._v("select/epoll")]),_._v("的Web Server不一定比使用多线程加阻塞I/O的Web Server性能更好，可能延迟还更大，"),t("code",[_._v("select/epoll")]),_._v("的优势并不是对于单个连接能处理得更快，而是能处理更多的连接。多路复用I/O模型的特性总结如下表所示。")]),_._v(" "),t("table",[t("thead",[t("tr",[t("th",[_._v("特点")]),_._v(" "),t("th",[_._v("对于每一个Socket，一般都设置成非阻塞，但是整个用户的进程其实是一直被阻塞的，只不过进程被select函数阻塞，而不是被Socket I/O阻塞")])])]),_._v(" "),t("tbody",[t("tr",[t("td",[_._v("典型应用")]),_._v(" "),t("td",[_._v("Java NIO，Nginx (epoll，poll，selet)")])]),_._v(" "),t("tr",[t("td",[_._v("优点")]),_._v(" "),t("td",[_._v("专一进程解决多个进程I/O的阻塞问题，性能好，Reactor模式"),t("br"),_._v("适合高并发服务应用开发，一个进程线程响应多个请求")])]),_._v(" "),t("tr",[t("td",[_._v("缺点")]),_._v(" "),t("td",[_._v("实现和开发应用难度较大")])])])]),_._v(" "),t("h4",{attrs:{id:"_1-1-4-信号驱动i-o模型"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-4-信号驱动i-o模型"}},[_._v("#")]),_._v(" 1.1.4 信号驱动I/O模型")]),_._v(" "),t("p",[_._v("信号驱动I/O模型的通信过程示意如下图所示。")]),_._v(" "),t("p",[t("img",{attrs:{src:"https://gitee.com/WWWWWWWXQ/images/raw/master/JCP-JUC/%E6%88%AA%E5%B1%8F2022-01-25%20%E4%B8%8B%E5%8D%8811.15.32-20220125232956958.png",alt:"截屏2022-01-25 下午11.15.32"}})]),_._v(" "),t("p",[_._v("信号驱动I/O是指进程预先告知内核，向内核注册一个信号处理函数，然后用户进程返回阻塞，当内核数据就绪时会发送一个信号给进程，用户进程便在信号处理函数中调用I/O读取据。从上图可以看出，实际上I/O内核拷贝到用户进程的过程还是阻塞的，信号驱动I/O并没有现真正的异步，因为通知到进程之后，依然由进程来完成I/O操作。这和后面的异步I/O模型得易混淆，需要理解I/O交互并结合五种I/O模型进行比较阅读。信号驱动I/O模型的特性总结表所示。")]),_._v(" "),t("table",[t("thead",[t("tr",[t("th",[_._v("特点")]),_._v(" "),t("th",[_._v("并不符合异步I/O要求，只能算是伪异步，并且实际中并不常用")])])]),_._v(" "),t("tbody",[t("tr",[t("td",[_._v("典型应用")]),_._v(" "),t("td",[_._v("应用场景较少")])]),_._v(" "),t("tr",[t("td",[_._v("优点")]),_._v(" "),t("td",[_._v("应用较少，不做详细总结")])]),_._v(" "),t("tr",[t("td",[_._v("缺点")]),_._v(" "),t("td",[_._v("实现和开发应用难度较大")])])])]),_._v(" "),t("h4",{attrs:{id:"_1-1-5-异步i-o模型"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-5-异步i-o模型"}},[_._v("#")]),_._v(" 1.1.5 异步I/O模型")]),_._v(" "),t("p",[_._v("异步I/O模型的通信过程示意如下图所示。")]),_._v(" "),t("p",[t("img",{attrs:{src:"https://gitee.com/WWWWWWWXQ/images/raw/master/JCP-JUC/%E6%88%AA%E5%B1%8F2022-01-25%20%E4%B8%8B%E5%8D%8811.17.01-20220125232957763.png",alt:"截屏2022-01-25 下午11.17.01"}})]),_._v(" "),t("p",[_._v("用户进程发起"),t("code",[_._v("aio_read")]),_._v("操作后，给内核传递与"),t("code",[_._v("read")]),_._v("相同的描述符、缓冲区指针、缓冲区大小三个参数及文件偏移，告诉内核当整个操作完成时，如何通知我们立刻就可以开始去做其他的事；而另一方面，从内核的角度，当它收到一个 "),t("code",[_._v("aio_read")]),_._v("之后，首先它会立刻返回，所以不会对用户进程产生任何阻塞，内核会等待数据准备完成，然后将数据拷贝到用户内存，当这一切都完成之后，内核会给用户进程发送一个信号，告诉它"),t("code",[_._v("aio_read")]),_._v("操作完成。")]),_._v(" "),t("p",[_._v("异步I/O的工作机制是：告知内核启动某个操作，并让内核在整个操作完成后通知我们，这种模型与信号驱动I/O模型的区别在于，信号驱动I/O模型是由内核通知我们何时可以启动一个I/O操作，这个I/O操作由用户自定义的信号函数来实现，而异步I/O模型由内核告知我们I/O操作何时完成。")]),_._v(" "),t("p",[_._v("异步I/O模型的特性总结如下表所示。")]),_._v(" "),t("table",[t("thead",[t("tr",[t("th",[_._v("特点")]),_._v(" "),t("th",[_._v("真正实现了异步I/O，是五种I/O模型中唯一的异步模型")])])]),_._v(" "),t("tbody",[t("tr",[t("td",[_._v("典型应用")]),_._v(" "),t("td",[_._v("Java 7 AIO，高性能服务器应用")])]),_._v(" "),t("tr",[t("td",[_._v("优点")]),_._v(" "),t("td",[_._v("不阻塞，数据一步到位，采用Proactor模式"),t("br"),_._v("非常适合高性能、高并发应用")])]),_._v(" "),t("tr",[t("td",[_._v("缺点")]),_._v(" "),t("td",[_._v("需要操作系统的底层支持，Linux 2.5内核首现，Linux 2.6产品的内核标准特性"),t("br"),_._v("实现和开发应用难度较大")])])])]),_._v(" "),t("h4",{attrs:{id:"_1-1-6-易混淆的概念澄清"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-6-易混淆的概念澄清"}},[_._v("#")]),_._v(" 1.1.6 易混淆的概念澄清")]),_._v(" "),t("p",[_._v("在实际开发中，我们经常会听到同步、异步、阻塞、非阻塞这些概念，每次遇到的时候都会“蒙圈” ，然后就查网上各种资料，结果越查越迷糊。大部分文章都千篇一律，没有说到本质上的区别，所以下次再碰到这些概念，印象还是比较模糊，尤其是在一些场景下觉得同步与阻塞、异步与非阻塞没什么区别，但其实这四个术语描述的还真不是一回事。下面我们来慢慢探讨它们之间的区别与联系，在这之前，我们还会经常看到下面的组合术")]),_._v(" "),t("ol",[t("li",[_._v("同步阻塞")]),_._v(" "),t("li",[_._v("同步非阻塞")]),_._v(" "),t("li",[_._v("异步阻塞")]),_._v(" "),t("li",[_._v("异步非阻塞")])]),_._v(" "),t("p",[_._v("在什么是同步和异步、阻塞和非阻塞的概念还没弄清楚之前，更别提上面这些组合术语了只会让你更加困惑")]),_._v(" "),t("h5",{attrs:{id:"「1」同步和异步"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#「1」同步和异步"}},[_._v("#")]),_._v(" 「1」同步和异步")]),_._v(" "),t("p",[_._v("同步和异步其实是指CPU时间片的利用，主要看"),t("strong",[_._v("请求发起方")]),_._v("获取消息结果是"),t("strong",[_._v("主动发起")]),_._v("还是"),t("strong",[_._v("被动通知")]),_._v("的，如下图所示。")]),_._v(" "),t("p",[_._v("![截屏2022-01-26 下午11.07.06](https://gitee.com/WWWWWWWXQ/images/raw/master/JCP-JUC/截屏2022-01-26 下午11.07.06.png)")]),_._v(" "),t("p",[_._v("如果是请求方"),t("strong",[_._v("主动发起")]),_._v("的，一直在等待应答结果（同步阻塞)，或者可以先去处理其他事情，但要不断轮询查看发起的请求是否有应答结果(同步非阻塞)，因为不管如何都要发起方主动获取消息结果，所以形式上还是同步操作。如果是由"),t("strong",[_._v("服务方通知的")]),_._v("，也就是请求方发出请求后，要么一直等待通知(异步阻塞)，要么先去干自己的事(异步非阻塞)。当事情处理完成后，服务方会主动通知请求方，它的请求已经完成，这就是异步。异步通知的方式一般通过状态改变、消息通知或者回调函数来完成，大多数时候采用的都是回调函数。")]),_._v(" "),t("h5",{attrs:{id:"「2」阻塞和非阻塞"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#「2」阻塞和非阻塞"}},[_._v("#")]),_._v(" 「2」阻塞和非阻塞")]),_._v(" "),t("p",[_._v("阻塞和非阻塞在计算机的世界里，通常指针对I/O的操作，如网络I/O和磁盘I/O等。那么什么是阻塞和非阻塞呢？简单地说，就是我们调用了一个函数后，在等待这个函数返回结果之前，当前的线程是处于"),t("strong",[_._v("挂起")]),_._v("状态还是"),t("strong",[_._v("运行")]),_._v("状态。如果是挂起状态，就意味着当前线程什么都不能干，就等着获取结果，这就是同步阻塞；如果仍然是运行状态，就意味着当前线程是可以继续处理其他任务的，但要时不时地看一下是否有结果了，这就是同步非阻塞。具体如下图所示。")]),_._v(" "),t("p",[_._v("![截屏2022-01-26 下午11.10.39](https://gitee.com/WWWWWWWXQ/images/raw/master/JCP-JUC/截屏2022-01-26 下午11.10.39.png)")]),_._v(" "),t("h5",{attrs:{id:"「3」实际生活场景"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#「3」实际生活场景"}},[_._v("#")]),_._v(" 「3」实际生活场景")]),_._v(" "),t("p",[_._v("同步、异步、阻塞和非阻塞可以组合成上面提到过的四种结果。")]),_._v(" "),t("p",[_._v("举个例子，比如我们去照相馆拍照，拍完照片之后，商家说需要30min左右才能洗出来照片。")]),_._v(" "),t("ol",[t("li",[_._v("同步阻塞：这个时候，如果我们一直在店里面什么都不干，一直等待直到洗完照片。")]),_._v(" "),t("li",[_._v("同步非阻塞：当然，大部分人很少这么干，更多的是大家拿起手机开始看电视，看一会儿就会问老板洗完没，老板说没洗完，然后接着看，再过一会儿接着问，直到照片洗完。")]),_._v(" "),t("li",[_._v("异步阻塞(实际不应用)：由于店里生意太好了，越来越多的人过来拍，店里面快没地方坐了，老板说你把手机号留下，我一会儿洗好了就打电话告诉你过来取，然后你去外面找了一个长凳开始躺着睡觉等待老板打电话，什么都不干。")]),_._v(" "),t("li",[_._v("异步非阻塞(效率最高)：当然实际情况是，大家可能会先去逛街或者吃饭，或者做其他活动，这样一来，两不耽误。")])]),_._v(" "),t("h5",{attrs:{id:"「4」小结"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#「4」小结"}},[_._v("#")]),_._v(" 「4」小结")]),_._v(" "),t("p",[_._v("从上面的描述中，我们能够看到阻塞和非阻塞通常是指在客户端发出请求后，在服务端处理这个请求的过程中，客户端本身是直接挂起等待结果，还是继续做其他的任务。而异步和同步则是对于请求结果的获取是客户端主动获取结果，还是由服务端来通知结果。从这一点来看，同步和阻塞其实描述的是两个不同角度的事情：阻塞和非阻塞指的是客户端等待消息处理时本身的状态，是挂起还是继续干别的。同步和异步指的是对于消息结果是客户端主动获取的，还是由服务端间接推送的。记住这两点关键的区别将有助于我们更好地区分和理解它们。")]),_._v(" "),t("h4",{attrs:{id:"_1-1-7-各i-o模型的对比与总结"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-7-各i-o模型的对比与总结"}},[_._v("#")]),_._v(" 1.1.7 各I/O模型的对比与总结")]),_._v(" "),t("p",[_._v("其实前四种I/O模型都是同步I/O操作，它们的区别在于第一阶段，而第二阶段是一样的:\n在数据从内核拷贝到应用缓冲区期间(用户空间)，进程阻塞于"),t("code",[_._v("recvfrom")]),_._v("调用。")]),_._v(" "),t("p",[_._v('有人可能会说，NIO (Non-Blocking I/O)并没有被阻塞。这里有个非常“狡猾”的地方，定义中所指的"I/O Operation"是指真实的I/O操作。NIO在执行'),t("code",[_._v("recvfrom")]),_._v("的时候，如果内核(Kernel 的数据没有准备好，这时候不会阻塞进程，也就是等待数据就绪的这个步骤是非阻塞的。但是，当内核(Kernel)中数据准备好的时候，"),t("code",[_._v("recvfrom")]),_._v("\n会将数据从内核(Kernel)拷贝到用户内存中，这个时候进程就被阻塞了。下图是各I/O模型的阻塞状态对比。")]),_._v(" "),t("p",[_._v("![截屏2022-01-26 下午11.20.47](https://gitee.com/WWWWWWWXQ/images/raw/master/JCP-JUC/截屏2022-01-26 下午11.20.47.png)")]),_._v(" "),t("p",[_._v("从上图可以看出，阻塞程度:阻塞I/O > 非阻塞I/O > 多路复用I/O > 信号驱动I/O > 异步I/O，效率是由低到高的。最后，再看一下表，从多维度总结了各I/O模型之间的差异，可以加深理解。")]),_._v(" "),t("p",[_._v("![截屏2022-01-26 下午11.22.16](https://gitee.com/WWWWWWWXQ/images/raw/master/JCP-JUC/截屏2022-01-26 下午11.22.16.png)")]),_._v(" "),t("h3",{attrs:{id:"_1-3-从bio到nio的演进"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-3-从bio到nio的演进"}},[_._v("#")]),_._v(" 1.3 从BIO到NIO的演进")]),_._v(" "),t("p",[_._v("下表总结了Java BIO (Blocking I/O)和NIO (Non-Blocking I/O)之间的主要差异。")]),_._v(" "),t("table",[t("thead",[t("tr",[t("th",[_._v("I/O模型")]),_._v(" "),t("th",[_._v("BIO")]),_._v(" "),t("th",[_._v("NIO")])])]),_._v(" "),t("tbody",[t("tr",[t("td",[_._v("通信")]),_._v(" "),t("td",[_._v("面向流")]),_._v(" "),t("td",[_._v("面向缓冲区")])]),_._v(" "),t("tr",[t("td",[_._v("处理")]),_._v(" "),t("td",[_._v("阻塞I/O")]),_._v(" "),t("td",[_._v("非阻塞I/O")])]),_._v(" "),t("tr",[t("td",[_._v("触发")]),_._v(" "),t("td",[_._v("无")]),_._v(" "),t("td",[_._v("选择器")])])])]),_._v(" "),t("h4",{attrs:{id:"_1-3-1-面向流与面向缓冲"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-3-1-面向流与面向缓冲"}},[_._v("#")]),_._v(" 1.3.1 面向流与面向缓冲")]),_._v(" "),t("p",[_._v("Java NIO和BIO之间第一个最大的区别是，BIO是面向"),t("strong",[_._v("流")]),_._v("的，NIO是面向"),t("strong",[_._v("缓冲区")]),_._v("的。Java BIO\n面向流意味着每次从流中读一个或多个字节，直至读取所有字节，它们没有被缓存在任何地方。此外，不能前后移动流中的数据。如果需要前后移动从流中读取的数据，需要先将它缓存到一个缓冲区。Java NIO的缓冲导向方法略有不同。数据读取到一个它稍后处理的缓冲区，需要时可在缓冲区中前后移动。这就增加了处理过程的灵活性。但是，还需要检查该缓冲区是否包含所有需要处理的数据。而且，要确保当更多的数据读入缓冲区时，不能覆盖缓冲区里尚未处理的数据。")]),_._v(" "),t("h4",{attrs:{id:"_1-3-2-阻塞与非阻塞"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-3-2-阻塞与非阻塞"}},[_._v("#")]),_._v(" 1.3.2 阻塞与非阻塞")]),_._v(" "),t("p",[_._v("Java BIO的各种流是"),t("strong",[_._v("阻塞的")]),_._v("。这意味着，当一个线程调用"),t("code",[_._v("read()")]),_._v("或"),t("code",[_._v("write()")]),_._v("时，该线程被阻塞，直到有一些数据被读取，或数据完全写入。该线程在此期间不能再干任何事情。Java NIO的非阻塞模式，是一个线程从某"),t("strong",[_._v("通道")]),_._v("(Channel)发送请求读取数据，但是它仅能得到目前可用的数据，如果目前没有数据可用，就什么都不会获取，而不是保持线程阻塞，所以直到数据变成可以读取之前，该线程可以继续做其他的事情。非阻塞写也是如此。一个线程请求写入某通道一些数据，但不需要等待它完全写入，这个线程同时可以去做别的事情。线程通常将非阻塞I/O的空闲时间用于在其他通道上执行I/O操作，所以一个单独的线程现在可以管理多个I/O通道。")]),_._v(" "),t("h4",{attrs:{id:"_1-3-3-选择器在i-o中的应用"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-3-3-选择器在i-o中的应用"}},[_._v("#")]),_._v(" 1.3.3 选择器在I/O中的应用")]),_._v(" "),t("p",[_._v("Java NIO的选择器(Selector)允许一个单独的线程监视多个输入通道(Channel)，可以注册多个通道共用一个选择器，然后使用一个单独的线程来“选择”通道：这些通道里已经有可以处理的输入，或者选择已准备写入的通道。这种选择机制使一个单独的线程很容易管理多个通道。")])])}),[],!1,null,null,null);v.default=a.exports}}]);