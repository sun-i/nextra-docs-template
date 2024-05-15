# **CTF Wiki**
[https://ctf-wiki.org/](https://ctf-wiki.org/)
> 欢迎来到 **CTF Wiki**。
> **CTF**（Capture The Flag，夺旗赛）起源于 1996 年 **DEFCON** 全球黑客大会，是网络安全爱好者之间的竞技游戏。
> **CTF** 竞赛涉及众多领域，内容繁杂。与此同时，安全技术的发展速度越来越快，**CTF** 题目的难度越来越高，初学者面对的门槛越来越高。而网上资料大都零散琐碎，初学者往往并不知道该如何系统性地学习 **CTF** 相关领域知识，常需要花费大量时间，苦不堪言。
> 为了使得热爱 **CTF** 的小伙伴们更好地入门 **CTF**，2016 年 10 月份，**CTF Wiki** 在 Github 有了第一次 commit。随着内容不断完善，**CTF Wiki** 受到了越来越多安全爱好者的喜爱，也渐渐有素未谋面的小伙伴们参与进来。
> 作为一个自由的站点，围绕 **CTF** 近几年赛题，**CTF Wiki** 对 **CTF** 中的各个方向的知识和技术进行介绍，以便于初学者更好地学习 **CTF** 相关的知识。
> 目前，**CTF Wiki** 主要包含 **CTF** 各大范畴的基础知识，并正在着力完善以下内容
> - CTF 竞赛中的进阶知识
> - CTF 竞赛中的优质题目
> 
关于上述部分待完善内容，请参见 CTF Wiki 的 [Projects](https://github.com/ctf-wiki/ctf-wiki/projects)，详细列出了正在做的事项以及待做事项。
> 当然，**CTF Wiki** 基于 **CTF**，却不会局限于 **CTF**。在未来，**CTF Wiki** 将会
> - 介绍安全研究中的工具
> - 更多地与安全实战结合
> 
此外，鉴于以下两点
> - 技术应该以开放的方式共享。
> - 安全攻防技术总是在不断演进，旧的技术在面对新的技术时可能失效。
> 
因此，**CTF Wiki** 永远不会出版书籍。
> 最后，**CTF Wiki** 源于社区，作为**独立的组织**，提倡**知识自由**，在未来也绝不会商业化，将始终保持**独立自由**的性质。

# 漏洞挖掘
[国家信息安全漏洞库](https://www.cnnvd.org.cn/home/childHome)<br />【【我的src漏洞挖掘之旅】-如何从0到多个src前10，我的经验分享】 <br />[【我的src漏洞挖掘之旅】-如何从0到多个src前10，我的经验分享_哔哩哔哩_bilibili](https://www.bilibili.com/video/BV1Ru4m1u7tn/?share_source=copy_web&vd_source=59b1cd85bfb60147d8715b95372b9f83)<br />[美团安全应急响应中心](https://security.meituan.com/#/home)<br />[美团安全应急响应中心](https://security.meituan.com/#/newsContent/203)
# 渗透工具的选择
> 作者：桓星安全实验室<br />链接：https://www.zhihu.com/question/358637441/answer/1901109137<br />来源：知乎<br />著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。

嗯？你想问渗透中一般用什么系统吧，一般用kali？我一个个来说
> 渗透中一般用什么系统

- 在渗透中，用什么系统都可以啊，没有说还有限制你必须用什么系统来渗透，照我来算，两年前我用Mac，一年前用Windows，现在偶尔用Linux
- 且，不论是谁，你看那些做教程和写文章，绝大多数不都是用Windows来吗？[kali](https://www.zhihu.com/search?q=kali&search_source=Entity&hybrid_search_source=Entity&hybrid_search_extra=%7B%22sourceType%22%3A%22answer%22%2C%22sourceId%22%3A1901109137%7D)本身不太适合做物理机，开[虚拟机](https://www.zhihu.com/search?q=%E8%99%9A%E6%8B%9F%E6%9C%BA&search_source=Entity&hybrid_search_source=Entity&hybrid_search_extra=%7B%22sourceType%22%3A%22answer%22%2C%22sourceId%22%3A1901109137%7D)又麻烦，不到一定时刻肯定不会用kali来渗透的，但确实用起来舒服
> 为什么都觉得渗透要用kali？

其实和“python是最简单的语言”“安全行业是最吃香的IT行业”等舆论一样。最终源头是谁呢？<br />教育/培训机构（如某大学，某IT，某学院，某教育这种机构）“这里的大学不是高校，是指部分教育机构”

- 从一开始的python到现在的kali，都不过是教育机构的宣传和炒作，把安全和开发行业说的多么多么棒，只有自己亲自去试了才知道水有多深，且待遇其实也就中等水平（我的父母是做中控“控制企业生产”的，两个人加起来一个月三万左右，一个人一万三到一万五，水泥行业。而IT行业想混个上万月薪，除开奖金，HW，代打那些，也不见得简单）
- 其实看看那些讲师的简介，一个个的牛逼上天了，讲课也是老套路，一个课程只要换个名可以反复讲十遍，我想问下那些讲师，你们不烦吗？
> 重新回到问题，用什么系统

- 其实我个人推荐吧，专搞渗透，用武器库就可以啊，[悬剑](https://www.zhihu.com/search?q=%E6%82%AC%E5%89%91&search_source=Entity&hybrid_search_source=Entity&hybrid_search_extra=%7B%22sourceType%22%3A%22answer%22%2C%22sourceId%22%3A1901109137%7D)，泰阿，CTFtools等等，可以说是非常强的，但配置要求可能相对较高（[泰阿](https://www.zhihu.com/search?q=%E6%B3%B0%E9%98%BF&search_source=Entity&hybrid_search_source=Entity&hybrid_search_extra=%7B%22sourceType%22%3A%22answer%22%2C%22sourceId%22%3A1901109137%7D)需要8G运行内存）。一般情况下，就算是安全从业者，也是用Windows就够了，没什么区别
- 其实也有一点讲一下，很多新学安全的小白，认为学会kali就可以就业，拿SRC奖金，证书，就是安全的全部了 
- 但其实不然，工具只是辅助作用，真正的项目和实战，我基本不用工具

---

> 作者：IversOn5<br />链接：https://www.zhihu.com/question/358637441/answer/986324821<br />来源：知乎<br />著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。

国外的大佬我不知道，但是据我知道的国内尖端的大佬很多都是用的windows的。不是说不用kali，而是自己本地测试的时候kali还是用的很多的，比较很多环境、工具都集成了，测试的时候还是非常舒服的。<br />少数大佬还是会用kali的，但更多的是自己用debian、Ubuntu来整自己的专用的渗透系统。<br />国内用kali比较多的是菜鸡们，他们觉得学了kali就能成为大佬，特别是某些培训，就教kali内的各类工具做，就光看那些讲师的简介，就知道他们自己都不是做安全的，顶多是个安全运维。<br />[编辑于 2020-01-26 22:35](//www.zhihu.com/question/358637441/answer/986324821)

[7大单兵武器库下载 | 渗透测试集成系统环境-CSDN博客](https://blog.csdn.net/shuteer_xu/article/details/107373892)
## 悬剑武器库
首先是圈子社区<br />[登录 - Powered by SecQuan 汇聚新锐白帽](https://secquan.org/#)<br />[嗨，这里是圈子社区](https://mp.weixin.qq.com/s/yuaPv94Yfsh9Ohwu8VozLw)<br />[人人大佬计划-核心-铸剑-攻防平台.pptx](https://www.yuque.com/attachments/yuque/0/2024/pptx/35855942/1713516921414-aec9325b-6b35-4363-84dc-8ca8bc08ba17.pptx)<br />[红队公益计划 | 悬剑3.0公益版发布|NOSEC安全讯息平台 - 白帽汇安全研究院](https://nosec.org/home/detail/3028.html)<br />[https://blog.csdn.net/m0_62571257/article/details/124102636](https://blog.csdn.net/m0_62571257/article/details/124102636)
# 司法鉴定能力验证
[南昌大学软件学院](https://soft.ncu.edu.cn/xydt/xwdt/ad05ef85569341958eae240689d2243f.htm)<br />[关于开展2021年度司法鉴定能力验证活动的通知_国务院部门文件_中国政府网](https://www.gov.cn/zhengce/zhengceku/2021-02/21/content_5588065.htm)<br />如果您想在中国大陆参加司法鉴定或法庭科学领域的能力验证，通常需要通过相关的官方机构或网站进行报名。您可以查找由中国司法部或其他专业机构提供的相关信息。例如，中国司法部官网经常会发布关于各类专业技术人员资格考试和能力验证的通知，包括报名时间、地点、费用及所需准备的材料等详细信息。

此外，还有一些专业网站和平台提供相关的报名服务和支持。这些平台会提供详细的步骤和指导，帮助您完成报名过程。如果有具体的网站或平台您想了解更多信息，可以告诉我，我可以帮助您查找更详细的资料。<br />您可以通过以下方式参加中国大陆的司法鉴定或法庭科学领域的能力验证：

1. **中国政府网**：每年会有关于开展司法鉴定能力验证活动的通知，包括具体的报名链接、时间以及联系方式。具体信息通常会在司法鉴定科学研究院的官方网站上发布（www.ssfjd.cn）。
2. **中国能力验证资源平台（CNAS）**：这个平台提供各类能力验证的信息，包括司法鉴定。您可以通过访问 [中国能力验证资源平台]([https://www.cnas.org.cn/fwzl/nlyzzl/zgnlyzzypt/)](https://www.cnas.org.cn/fwzl/nlyzzl/zgnlyzzypt/)) 获取更多细节。
3. **国家政务服务平台**：该平台提供各种职业资格考试和能力验证的信息，包括司法鉴定。可以通过该平台找到相应的报名入口和时间。

通过上述链接，您可以找到更多关于如何报名参加能力验证的具体信息。
# 一些安全相关自媒体
[Alice-Bob视频专辑-Alice-Bob视频合集-哔哩哔哩视频](https://space.bilibili.com/552018206/channel/series)
> 质量还不错的入门课程


---

[开源就安全么？醒醒吧！_哔哩哔哩_bilibili](https://www.bilibili.com/video/BV1Gq421w7rg/?share_source=copy_web&vd_source=59b1cd85bfb60147d8715b95372b9f83)

---

【电子监听、全国断网，棱镜门背后，中国如何从末路狂奔到世界之巅】 <br />[电子监听、全国断网，棱镜门背后，中国如何从末路狂奔到世界之巅_哔哩哔哩_bilibili](https://www.bilibili.com/video/BV1i14y157YV/?share_source=copy_web&vd_source=59b1cd85bfb60147d8715b95372b9f83)<br />[b 站一个介绍 IPv6 的视频火了，但是问题也很多](https://www.v2ex.com/t/890731)

---

# 其他
【价值3W付费教程流出，Web+渗透测试课程-100+小时入狱级教程含面试题，网络安全/信息安全/暗网/网警技术/成功上岸奇安信/10年网安大佬亲授/付费教程】 <br />[价值3W付费教程流出，Web+渗透测试课程-100+小时入狱级教程含面试题，网络安全/信息安全/暗网/网警技术/成功上岸奇安信/10年网安大佬亲授/付费教程_哔哩哔哩_bilibili](https://www.bilibili.com/video/BV1HJ4m177o4/?share_source=copy_web&vd_source=59b1cd85bfb60147d8715b95372b9f83)<br />【B站强推！2024年最新SQL注入漏洞全集顶级天花板教程，血赚！学完即可上岸，拿走不谢！】 <br />[https://www.bilibili.com/video/BV1jN4y1p7B4/?share_source=copy_web&vd_source=59b1cd85bfb60147d8715b95372b9f83](https://www.bilibili.com/video/BV1jN4y1p7B4/?share_source=copy_web&vd_source=59b1cd85bfb60147d8715b95372b9f83)<br />[sql注入-哔哩哔哩_Bilibili](https://search.bilibili.com/all?vt=30931325&keyword=sql%E6%B3%A8%E5%85%A5&from_source=webtop_search&spm_id_from=333.788&search_source=5)
