---
title: 文西的技术月刊（第 3 期）
date: "2021-06-01"
---

该月刊在每个月的第一个工作日发布，具有一定的个人向，欢迎订阅

- 博客网站（支持 RSS）：https://wenxi.tech/
- 微信订阅号：文西的酒馆

## 学习资源

### [Take your first steps with Rust](https://docs.microsoft.com/en-us/learn/paths/rust-first-steps/)

微软出品的`Rust`入门课程

### [Learn CSS（英文）](https://web.dev/learn/css/)

Google 出品的 CSS 教程，配合`The CSS Podcast`播客频道食用更佳，在苹果官方播客客户端即可订阅，学 CSS 的同时还能把听力给练了

## 开发工具

### [cusdis: 评论系统](https://cusdis.com/)

轻量，隐私优先的开源评论系统，特点是无需登录，使用邮件服务通知，非常适合用于个人网站比如博客，免费版完全够用
![](https://tva1.sinaimg.cn/large/008i3skNly1gr1qtcltz1j30u00u0jwp.jpg)

### [npm.devtool: npm 包调试工具](https://npm.devtool.tech/)

很多时候我们需要调试一个 npm 包的 API，在项目里直接调试不方便，新开空项目调试也嫌麻烦，可以试试这个在线工具，他能帮我们在控制台直接调试 npm 包的 API
![](https://tva1.sinaimg.cn/large/008i3skNly1gr1qtd8c9vj30u00va79v.jpg)

### [stackblitz: 在线 IDE](https://stackblitz.com/)

stackblitz 最近上线了 webContainer，借助 webContainer 我们可以在浏览器中运行 NodeJS，NextJS，无需与服务端通信，代码的编译阶段是在浏览器中完成的，试用下来，热加载感觉比我本地跑 NextJS 还快，可能和它省去了和服务端 HTTP 通信的链路有关

### [npm trends](https://www.npmtrends.com/)

npm 包对比工具，帮助分析 npm 包质量和发现同类 npm 包
![](https://tva1.sinaimg.cn/large/008i3skNly1gr1qtdmid2j31ve0cm40p.jpg)

## 开源项目

### [swc: Babel 的替代品](https://github.com/swc-project/swc)

基于 Rust 实现的 Babel 替代品，特点的是绝对的速度，提供至少 18 倍的性能提升，通过 [napi-rs](https://github.com/napi-rs/napi-rs) 使 rust 与 nodejs 进行通信
![](https://tva1.sinaimg.cn/large/008i3skNly1gr1qtejbcej30so0hkgot.jpg)

### [Win 95 风格 React 组件库](https://github.com/arturbien/React95)

时尚是一种轮回，我们通过展示复古元素来缅怀逝去的时光
![](https://tva1.sinaimg.cn/large/008i3skNly1gr1qtf1cgvj30qa0fg0ui.jpg)

### [zx: 使用 nodejs 编写 shell 脚本](https://github.com/google/zx)

google 开发的 shell 脚本编写工具，允许使用字符模板的方式编写 shell 脚本，相比 shell.js 不需要学习额外的 api，并且核心代码仅有 200 行，非常适合阅读

```javascript
#!/usr/bin/env zx

await $`cat package.json | grep name`

let branch = await $`git branch --show-current`
await $`dep deploy --branch=${branch}`

await Promise.all([$`sleep 1; echo 1`, $`sleep 2; echo 2`, $`sleep 3; echo 3`])

let name = "foo bar"
await $`mkdir /tmp/${name}`
```

### [gogocode: 代码转换工具](https://gogocode.io/)

以类似 JQuery 的简易 API，使修改 AST 的过程变得简单易上手，适合用于项目上的代码批量修改，相比直接使用 IDE 工具的 replace，更加灵活

```javascript
$(code)
  .replace(`var $_$ = console.log()`, `var $_$ = void 0`)
  .replace(`var $_$ = console.log`, `var $_$ = function(){}`)
  .find(`console.log()`)
  .remove()
  .generate()
```

## 文章推荐

### [ AVIF 图片开发指南（英文）](https://darekkay.com/blog/avif-images/)

Chrome 85 + 和 Firefox 86 +开始支持一种全新的图片格式 AVIF，拥有比 WebP 更高的压缩率
![](https://tva1.sinaimg.cn/large/008i3skNly1gr1qtfk057j30mq0bmdgq.jpg)
对于不支持的浏览器可以使用`<picture/>`标签做渐进式增强

```html
<picture>
  <source type="image/avif" srcset="cow.avif" />
  <source type="image/webp" srcset="cow.webp" />
  <img src="cow.jpg" srcset="cow.png" alt="Cow" />
</picture>
```

### [零成本搭建现代博客之优化国内访问速度](https://mp.weixin.qq.com/s/eVYgbHKG2w-TI3lfF7ZhwA)

在网站代码部署在国外的情况下，如何零成本，不备案还能提升国内访问速度？本篇文章教会你如何在 DNS 配置基于位置的路由策略。使国内外流量分配到不同的 CDN 服务

### [Electron + Puppeteer + Robotjs 实现工作自动化](https://juejin.cn/post/6957601771694850062)

将高频繁琐的浏览器操作，鼠标键盘操作，通过 Puppeteer + Robotjs 实现自动化，通过 Electron 封装为 GUI 工具，为团队成员赋能，使用场景如：

- 登录跳板机
- 项目大盘，开发流程集成
- 常用工具脚本如一键设置 Host 环境

### [如何封装不被嫌弃的组件 SDK](https://mp.weixin.qq.com/s/vbRkCgncWZswqnrz30LiLQ)

- 和业务方，产品，后端敲定组件职责，组件该做什么，不该做什么提前确定避免日后扯皮
- 完善的类型提示（ts, d.ts, jsdoc），对业务方和编辑器工具友好，同时可以减少沟通成本
- 错误边界：组件内部错误捕获处理，控制影响范围
- 考虑到编译需求和优化，提供多种导出版本，例如 cjs，esm，还要支持 treeShaking，css 分离
- 引入埋点和监控预警，如第三方服务 sentry

### [代码评审中的马斯洛金字塔（英文）](http://www.dein.fr/2015-02-18-maslows-pyramid-of-code-review.html)

心理学家马斯洛 1954 年提出需求层次理论，从下到上依次是生理，安全，爱与归属，尊严，自我实现，人类的需求由低级的需求开始，逐级向上发展到高级层次的需求
reddit 上一位楼主仿照马斯洛金字塔提出用于 code review 的需求层次模型
![](https://tva1.sinaimg.cn/large/008i3skNly1gr1qtfxzdlj309007vaa5.jpg)

- **正确** ：是否运行正确，是否经过充分测试，是否足够高效
- **安全** ：代码是否有漏洞，数据是否安全，输入验证是否全面
- **可读性** ：是否易于阅读，是否遵循团队规范，是否使用了开发所熟悉的概念从而减少认知负荷
- **优雅：** 代码是否使用了设计模式？它是否在保证代码简单和简洁的情况下实现了功能？你会为这段代码感到兴奋吗？
- **利他主义：** 别人能否从这些代码学到东西？这些代码是否会激励其他工程师进行改进？它是清理未使用的代码、改进文档、通过小规模重构引入更好的模式吗？

### [使用 ClojureScript 编写 React（英文）](https://jerue.org/blog/lessons-on-writing-javascript-and-react-from-clojurescript/)

似乎从 RoamRearch 一炮成名开始，ClojureScript 被越来越多的 Web 项目采用，尽管在国内的需求量几乎为零，但是并不影响我们通过 ClojureScript 学习背后的函数式编程思想

### [从 SWR 开始 — 一窥现代请求 hooks 设计模型](https://mp.weixin.qq.com/s?__biz=Mzg4MjE5OTI4Mw==&mid=2247488071&idx=1&sn=f9399389523a63cb3990ba4bf7a6e099&scene=21#wechat_redirect)

SWR 本质上是为请求提供了缓存命中机制，这不是什么新鲜东西，它厉害的地方还是通过 hooks 实现了高效，简单的缓存修改和更新操作，让全站缓存覆盖成为可能，通过缓存优先和静默请求校验的方式提升用户交互体验

### [写给前端的跨平台方案、跨端引擎的本质](https://juejin.cn/post/6966626823912308772)

> 计算机科学领域的任何问题都可以通过增加一个间接的中间层来解决

几乎所有的跨端方案，本质都是加了一层抽象层来抹平各平台之间的实现差异，抽象层可以由编译器和运行时的 runtime 两部分组成

### [React 性能优化终极指南](https://mp.weixin.qq.com/s/GB4s8pZ11WlJZnLWGAztCg)

出现性能问题时可以用作自检清单
