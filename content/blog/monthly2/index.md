---
title: 文西的技术月刊（第 2 期）
date: "2021-05-06"
---

该月刊在每个月的第一个工作日发布，具有一定的个人向，欢迎订阅

- 博客网站（支持RSS）：https://wenxi.tech/
- 微信订阅号：文西的酒馆

## 科技新闻
### [普天同庆，vue3 将不再支持 IE11](https://github.com/vuejs/rfcs/blob/ie11/active-rfcs/0000-vue3-ie11-support.md) 
> Nobody enjoys supporting IE11. It is a dying browser stuck in the past. The further the web ecosystem moves forward, the larger the gap we need to cover when trying to support it. Ironically, by supporting IE11 in Vue 3 we are giving it more reasons to stick around. Given our user base, dropping IE11 support will likely help make it obsolete a bit faster.
放弃对IE11的支持可能有助于让它更快地过时

### [奢侈品牌 Gucci ](https://www.ifanr.com/1407755) 发布了首款数字虚拟运动鞋：

Gucci Virtual 25，售价人民币78元。买来后，只能在线上世界穿。目前， Gucci App、VR 社交平台 VR Chat、游戏平台 Roblox 支持该鞋。
### [Android 加入了对 Rust 语言的支持](https://juejin.cn/post/6949459782709280799)
Google 官方安全博客宣布，Android 加入了对 Rust 语言的支持。Google 称，七成的 Android 高危漏洞与内存相关，而内存安全语言是解决这一问题的最有效方法。Google 宣布 Android Open Source Project(AOSP) 现在支持用 Rust 语言开发操作系统。
对 C 和 C++ 来说，开发者负责管理内存，但管理内存时因代码库的复杂性开发者很容易犯错。Rust 语言利用编译时检查和运行时检查确保内存安全，同时它还提供了比拟 C 和 C++ 语言的性能。
## 学习资源
### [区块链开发教程](https://github.com/jklepatch/eattheblocks)
区块链教程。了解如何在以太坊和Solidity智能合约上构建DAPP
### [blockchainer-roadmap: 浙大区块链协会总结的学习路线](https://github.com/Blockchain-zju/blockchainer-roadmap)
### [learnGitBranching: 通过游戏的方式学习Git ](https://github.com/pcottle/learnGitBranching)
### [cssgridgarden: 通过游戏的方式学习Grid布局 ](https://cssgridgarden.com/)
### [learn-go-with-tests：通过测试驱动学习Go](https://studygolang.gitbook.io/learn-go-with-tests/)
## 代码片段
### 给flex元素添加间距
Chromium 84开始，flex布局支持 `gap` 属性，允许给flex布局下的子元素之间添加间距
```css
.flex-container {
    width: 500px;
    display: flex;
    flex-wrap: wrap;
    gap: 5px;
    justify-content: center;
    border: 2px solid #333;
}

.item {
    width: 80px;
    height: 100px;
    background: deeppink;
}
```
![](https://tva1.sinaimg.cn/large/008i3skNly1gq8mi2rcs7j30eb04ddfp.jpg)
## 开发工具
### [css 生成工具](https://juejin.cn/post/6944881756524789773)
几个常用的可视化生成CSS代码工具，如阴影，渐变色，剪裁，圆角，Grid排版
### [domcomp: 域名比价](https://domcomp.com/)
如果你想在国外的域名供应商那买域名，这绝对是个好去处，它提供最新的域名比价服务
![](https://tva1.sinaimg.cn/large/008i3skNly1gq8mi3s28pj32cs0eeadk.jpg)
### [happyhues](https://www.happyhues.co/)
不确定为你的网站选择什么配色？这个网站搜集了大量的活泼配色供你参考
### [微信MD写作工具](https://devtool.tech/markdown)
相比mdnice，默认样式已经够用，并且提供外链采集，微信转脚注等实用功能
### [dnspeep：监控当前正在进行的DNS查询](https://github.com/jvns/dnspeep)
## 开源项目
### [markmap：md语法转思维导图](https://markmap.js.org/)
![](https://tva1.sinaimg.cn/large/008i3skNly1gq8mi4nlopj31np0u0dlw.jpg)
### [表单验证:react-hook-form](https://github.com/react-hook-form/react-hook-form)
使用hook实现的表单库，使用简单且高性能，并且扩展性很好，可以和各类UI库如Antd一起使用
![](https://tva1.sinaimg.cn/large/008i3skNly1gq8mi5zncrj313d0u0wr1.jpg)
### [数据验证:superstruct](https://github.com/ianstormtaylor/superstruct)
常见的数据校验库 `joi` Gzip过后足足有45kb，而这个数据校验库Gzip过后只有不到3kb
而且它还提供灵活自由组合的校验方式和抛出具体的错误信息，这对错误数据搜集非常有用
```js
const { assert, object, number, string } = window.Superstruct

const User = object({
  id: number(),
  name: string(),
})

const data = {
  id: 'invalid',
  name: 'Jane Smith',
}

try {
  assert(data, User)
  log('valid', data)
} catch (e) {
  const { message, value, type, path, branch } = e
  log('invalid', { message, value, type, path, branch })
}


function log(type, data) {
  document.body.className = type
  document.body.textContent = JSON.stringify(data, null, 2)
}
```

## 文章推荐
### [5种防止JavaScript和Node.js被注入恶意代码的方式（英文）](https://snyk.io/blog/5-ways-to-prevent-code-injection-in-javascript-and-node-js/)
如果你懒得看文章可以选择直接配置 eslint-plugin-security，它会帮你检查在项目内部的不安全代码
```js
"plugins": [
  "security"
],
"extends": [
  "plugin:security/recommended"
]
```
### [vanilla-javascript-code-snippets](https://www.smashingmagazine.com/2021/04/vanilla-javascript-code-snippets/)
学习开源项目代码太多看不过来？这篇文章搜集了很多纯JS的小体积代码片段，很适合用碎片时间学习JS
- [30 Seconds Of Code](https://www.30secondsofcode.org/)
- [HTML Dom](https://htmldom.dev/)
- [Vanilla JavaScript Toolkit](https://vanillajstoolkit.com/)
- [moving from jQuery to vanilla JavaScript](https://tobiasahlin.com/blog/move-from-jquery-to-vanilla-javascript/)
- [microjs](http://microjs.com/#)
- [in single line of code](https://1loc.dev/)
- [clean-code-javascript](https://github.com/ryanmcdermott/clean-code-javascript)
### [透过 Rust 探索系统的本原系列文章](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=MzA3NDM0ODQwMw==&action=getalbum&album_id=1701598373151047680&scene=173&from_msgid=2649828932&from_itemidx=1&count=3&nolastread=1#wechat_redirect)
### [我所理解的 Hooks API](https://mp.weixin.qq.com/s/_AKjxHYRzplh5CmUXmmL8g)
本文不讲述如何使用Hooks，而是通过Hooks底层的设计哲学帮你彻底理解Hooks
### [使用rust构建一个浏览器引擎](https://segmentfault.com/a/1190000038859456)
### [开源项目都在用 monorepo，但是你知道居然有那么多坑么？](https://juejin.cn/post/6950082433647640612)
主要问题还是在依赖安全访问上，yarn提升了依赖层级，会导致项目访问到自己并未声明的依赖
### [一看就会的 GitHub 骚操作，让你看上去像一位开源大佬](https://juejin.cn/post/6949202430886150180)
![](https://tva1.sinaimg.cn/large/008i3skNly1gq8mi6vytvj30wy0e00xf.jpg)
### [理解互联网](https://hoochanlon.github.io/fq-book/#/)
以GFW为切入口，详细讲解各类网络技术的运行机制
### [无限扩张的WEB浏览器（英文）](https://drewdevault.com/2020/03/18/Reckless-limitless-scope.html)
截止2020年3月，W3C已发布1217个规范，总字数为1.14亿字，并且W3C 规范的数量以平均每年200个新规范的速度增长，大约400万字，随着Microsoft放弃自研内核转而使用chromium，已经不太可能有任何团队能够重新开发一款WEB浏览器，其难度和波罗计划或曼哈顿计划相媲美，由Chrome和Firefox形成的双寡头局面已经产生
作者认为，Chrome和Firefox通过不断丰富浏览器功能的方式来形成自己的护城河，哪怕这些功能在浏览器上并没什么用处，例如VR，这些多余的功能一面成为老牌厂商的护城河，一面通过不断膨胀的体积蚕食用户的电脑性能
### [为什么面向对象编程很糟糕](http://harmful.cat-v.org/software/OO_programming/why_oo_sucks)
- 因为函数和数据结构是完全不同的动物类型，所以把它们关在同一个笼子里是根本不正确的。
  所有的东西都必须是一个对象，例如 `time` ，这是不必要的，非OO语言可以仅通过数据类型的实例表述它
- 在OOPL中，各种数据类型散落在项目中的各个角落，而在C语言中，我们可以将所有的数据类型定义在数据字典里，在OOPL中，每当我要创建一个新类型时，我都要考虑它所继承的父类在何处，具体又是哪个类型
- 对象具有私有状态，状态是有副作用的，在函数式编程中被要求一个纯函数中不应该有不受控制的状态，但在OOPL中，它并没有选择解决状态副作用的问题，而是通过把状态私有化限制程序员直接访问他们

### [SQLite不是一个玩具数据库](https://antonz.org/sqlite-is-not-a-toy-database/)
除了常规使用方式外，SQLite还支持在命令行中直接将JSON，Excel转换为数据库，并将查询结果导出到SQL, CSV, JSON, Markdown, HTML等格式
```bash
> .import --csv city.csv city
> select count(*) from city;
1117
```
### [创建病毒式传播网站](https://notfunatparties.substack.com/p/inside-a-viral-website)
在苏伊士运河的事件冲上热点后，作者讲述了他创建 [istheshipstillstuck](https://istheshipstillstuck.com/) 的背后故事
- 为了方便大家快速获取到苏伊士运河的最新进展，作者用Next.js和纽约时报开放API，花了几个小时快速上线了这个站点
- 将项目部署在Vercel上，Vercel提供弹性扩展机制，足以应对突然爆发的访问请求
- 在社交平台上发布该网站，等待传播
- 在该网站获得大量流量后，作者先后尝试通过NFT和亚马逊营销计划做流量变现，并最终获得了大概600美元左右的收入
- 由于在欧美很多国家要求获取cookies需要用户授权，所以作者采用 [simpleanalytics](https://simpleanalytics.com/) 作用户分析，它不会采集用户的cookies
	![](https://tva1.sinaimg.cn/large/008i3skNly1gq8mi7fq5bj31080n70uf.jpg)
### [把重构后的代码稳定搞上线](https://zhuanlan.zhihu.com/p/365195630)
一般来讲，除非迫不得已绝对不会选择重构，但是如果真要重构，针对数据加工逻辑进行单测是投入产出比很高的一种方式
```js
describe('utils', () => {
  it('流程图：转换为提交的数据 transformForm', () => {
    const result = transformForm(canvasData);
    expect(result).toEqual(settingData);
  });

  it('流程图：转换为需要的数据 parseRuleSetData', () => {
    const [result] = parseRuleSetData(settingData, rules);
    expect(result).toEqual(canvasData);
  });

  it('流程图：反复转换 transformForm - parseRuleSetData', () => {
    const [result] = parseRuleSetData(visualSettings, rulesData);
    const newResult = transformForm(result);
    expect(newResult).toEqual(visualSettings);
  });
});
```
### [Proxy 和 Reflect](https://juejin.cn/post/6844904090116292616)
深入浅出Proxy 和 Reflect的底层原理，可能是全网讲的最清楚的文章，Proxy和Reflect都是基于一系列用于操作数据的内部方法规范，这也是为什么Proxy不能被polyfill的原因
![](https://tva1.sinaimg.cn/large/008i3skNly1gq8mi7w96xj30rs10mdks.jpg)
### [React + TypeScript 实践](https://mp.weixin.qq.com/s/mUblBpj6pmdxz9mLKEDJTw)
盘点了在React下的TS最佳实践，覆盖大部分开发场景，适合遇到类型问题时翻一翻
### [【速学速记】《设计模式》这样学就对了！](https://juejin.cn/post/6953423646664687652)
## 杂谈

- [一项研究](#)(https://blog.rize.io/blog/phones-and-apps-reduce-your-ability-to-focus-even-when-they-dont-distract-you)发现，哪怕手机只是放在一旁，都会分散你的注意力。研究人员建议，对于要求专注的工作，最好将手机放到另一间房间。 
- 世界上每个程序员一觉醒来，都会有"我应该开发一个 Todo 清单程序的想法"，人们喜欢开发生产力工具。所以，你应该尽量避免将生产力工具作为创业项目，那类软件根本没有护城河。---[《我如何因为创业损失1000万美元的故事》](https://threadreaderapp.com/thread/1376985869542887425.html)