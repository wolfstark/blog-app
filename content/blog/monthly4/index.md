---
title: 文西的技术月刊（第 4 期）
date: "2021-07-05"
---

该月刊在每个月的第一个工作日发布，具有一定的个人向，欢迎订阅

- 博客网站（支持 RSS）：https://wenxi.tech/
- 微信订阅号：文西的酒馆

## 科技新闻

### 微软发布 Win11

![](https://tva1.sinaimg.cn/large/008i3skNly1gs5yky3c0mj30po0h2wgj.jpg)
这个月最重磅的消息就是 Win11 支持运行安卓 App 了，联想到 M1 芯片的 Mac，可以看到移动端到桌面端生态的融合是种趋势

也许过不了多久，就能看到大量同时适配移动端和桌面端的 App，一种全新的软件形态

### Github 发布 AI 结对编程助手 Copilot

Copilot 可以更具注释自动填充代码实现，据说正确率有 50%左右，有人用它尝试解了几道 LeetCode 的算法题，全部都能通过测试，内心五味杂陈
![](https://tva1.sinaimg.cn/large/008i3skNly1gs5ykytpdlj315a0hsn11.jpg)
还处于预览阶段，可以点击下面的链接去申请资格
[https://copilot.github.com/](https://copilot.github.com/ "https://copilot.github.com/")

## 学习资源

### [Next.js 应用开发实战](https://nextjs-in-action-cn.taonan.lu/ "Next.js应用开发实战")

一本很迷你的实战电子书，使用 Next.js 技术栈从零实现一个 HackerNews

## 代码片段

Win11 上周推出开发者预览版，大量使用毛玻璃效果，我们可以使用`backdrop-filter`CSS 属性对背景做模糊处理，达到同样的效果
![](https://tva1.sinaimg.cn/large/008i3skNly1gs5yl0xj4qj615e0nk1kx02.jpg)

```html
<div class="bg">
  <div class="backdrop-filter">backdrop-filter</div>
</div>
```

```css
.bg {
  background: url(https://cdn.wccftech.com/wp-content/uploads/2021/06/windows-11-wallpaper-scaled.jpeg)
    no-repeat;
  background-size: cover;
  width: 100vw;
  height: 100vh;
  display: grid;
  justify-content: center;
  align-content: center;
}
.backdrop-filter {
  width: 300px;
  height: 200px;
  display: grid;
  justify-content: center;
  align-content: center;
  background: rgba(255, 255, 255, 0.5);
  backdrop-filter: blur(5px);
}
```

## 开发工具

### [可视化生成 Nginx 配置](https://www.digitalocean.com/community/tools/nginx)

digitalocean 开源的工具，拯救 nginx 配置苦手，毕竟大部分前端一年也改不了几次 nginx，提供几种常见预设
![](https://tva1.sinaimg.cn/large/008i3skNly1gs5yl231cwj319x0u0wrz.jpg)

### [Library Genesis：搜书工具](https://libgen.is/ "Library Genesis：搜书工具")

之前推荐过 lorefree，后来发现在去年 8 月份的时候就已经没在维护书源了，现在推荐使用 Library Genesis，在计算机品类下基本全覆盖

### [readme-md-generator：README 生成器](https://github.com/kefranabg/readme-md-generator "readme-md-generator：README生成器")

终端交互式 README 生成器，会读取 package.json 和 git 中的一些信息填充部分内容，用于快速生成格式规范的 README 文件

## 开源项目

### [rustpad：在线协作编辑器](https://github.com/ekzhang/rustpad "rustpad：在线协作编辑器")

服务端使用的 Rust，这没什么特别的，但是冲突算法 OT 是在前端完成的，使用的**operational-transform-rs**这个 Rust 库，通过**wasm-bindgen**将其编译为`WebAssembly`并供 JS 调用
![](https://tva1.sinaimg.cn/large/008i3skNly1gs5yl32oogj311t0ludkt.jpg)

## 文章推荐

### [You Don't Need GUI：使用命令行处理常用任务](https://github.com/you-dont-need/You-Dont-Need-GUI#check-performance-of-your-computer "You Don't Need GUI：使用命令行处理常用任务")

有些任务在命令行上处理更方便些，比如这个`cal`命令，毕竟在 mac 上看日历还挺麻烦
![](https://tva1.sinaimg.cn/large/008i3skNly1gs5yl3yteaj30ak088my2.jpg)

### [比 npm link 更好的调试：yalc ](https://mp.weixin.qq.com/s/I4hhrgI3-Y18HD8zw_9g9w)

调试 npm 包时通常使用 npm link 软链接到项目上，但是 npm link 有个缺点，在调试阶段被调试的包和项目使用各自的`node_modules`，这会导致很多包出现依赖冲突

yalc 允许在调试阶段使用项目的`node_modules`而不是自己的，避免出现一些奇怪问题
![](https://tva1.sinaimg.cn/large/008i3skNly1gs5yl4gomvj30pg0gaq4i.jpg)

### [Typescript 一些常用的泛型工具](https://juejin.cn/post/6971341417893330952 "Typescript一些常用的泛型工具")

这篇文章介绍了常见的泛型工具和原理解析

### [构建一个富文本编辑器（英文）](https://www.smashingmagazine.com/2021/05/building-wysiwyg-editor-javascript-slatejs/ "构建一个富文本编辑器（英文）")

使用 slate.js 手把手带你实现一个所见即所得的富文本编辑器

在 slate.js 最近的版本更新中，修复了大量的中文（IME）输入问题，包括之前的全选中文编辑导致崩溃的 Bug，基本已经可以用于商业项目了

### [WebView 上软键盘的兼容方案](https://mp.weixin.qq.com/s/TYhbmMBphch0PDhLcDn7ew)

基本覆盖 H5 软键盘问题的所有场景，建议收藏

### [手把手教你搭建一个无框架埋点体系](https://mp.weixin.qq.com/s/TcaOUBMBBEGQoQPAjYXb_Q)

很详细的埋点统计，基本方案可以拿来直接落地

- 网页生命周期监听 - Page Lifecycle API
- DOM 结构变动监听 - MutationObserver API
- DOM 元素与 viewport 交叉状态监听 - IntersectionObserver API

### [Js 是怎样运行起来的？](https://mp.weixin.qq.com/s/3ROdZZ_xTtl6B5ii4ha46w)

一文理解 JS 运行流程，这两年 webassembly 大火，很多人认为它的性能优势或许会代替 JS 成为新的 WEB 开发语言，但其实 JS 在 V8 引擎的 JIT 加持下，往往和 webassembly 打的有来有回，差距不大
![](https://tva1.sinaimg.cn/large/008i3skNly1gs5yl500aaj30la0pcgn3.jpg)

### [业务中的前端组件化体系](https://zhuanlan.zhihu.com/p/383129585 "业务中的前端组件化体系")

作者为了组件的最大复用，按照职责将组件划为四部分

- 业务状态组件
- 交互状态组件
- 无状态视图组件
- 入口组件

可以看到和 Flux 架构很像，但是又有些区别，更像是对 Flux 架构的补充完善

- **多了一层交互状态组件**，在 Flux 架构里只是简单区分了无状态组件和有状态组件，但是对 UI 的状态管理很模糊，究竟是由视图组件自己生产自己消费，还是由状态组件统一管理。不过 Flux 架构都是五年前的东西了，当时对组件的状态管理还处于探索阶段，也没有 hooks 这种能够最小化抽取状态和逻辑的利器，对代码的粒度按照职责做了进一步的细分，自然就有了更多复用的可能
- **使用 context + hook 代替 props 传参**，这个其实很好理解，在父组的 render 函数里声明子组件并对子组件传参，从而达到控制子组件渲染的目的，这在耦合定义里叫**控制耦合**，而使用 context 可以做到无需在父组件内声明子组件也依旧可以传递数据，这种基于消费数据结构而进行耦合的方式叫**数据耦合**，在对各种耦合的定义中，**数据耦合**就是要比**标记耦合**的耦合度更低，耦合度低复用率也就上去了
- **减少全局依赖，把全局依赖下沉到某种上下文里**，这点真的是高度认同，之前做过几次老代码到新项目的迁移，迁移过去的组件有大量直接依赖全局环境的代码，request，localstorage，甚至是挂在 window 下的全局变量，为了不影响新项目的运行，迁移过去的老代码做了大量修改，如果一开始就把这些全局依赖封装在 context 里，平移过去的代码几乎不需要修改，或者只是修改 context 这一小块就够了

看下代码结构

```js
//业务上下文
const Business = () => {
  const [state, setState] = useState()

  return (
    <BusinessContext.Provider value={context}>
      {children}
    </BusinessContext.Provider>
  )
}
//交互上下文
const Interaction = () => {
  const [state, setState] = useState()

  return (
    <InteractionContext.Provider value={context}>
      {children}
    </InteractionContext.Provider>
  )
}
//在组件的实现中：​
const ComponentA = () => {
  const {} = useContext(BusinessContext)
  const {} = useContext(InteractionContext)

  // 在这里连接业务与交互
}
//使用的时候：​
const App = () => {
  // 下面每层传入各自需要的配置信息
  return (
    <Business>
      <Interaction>
        <ComponentA />
      </Interaction>
    </Business>
  )
}
```

最后引用作者的一段话

> 当前社区的技术方案，对这块是比较欠缺考虑的，绝大部分人采用的是两种比较极端的策略：​
>
> - 状态逻辑完全推到组件树顶层，采用全局性的状态管理方案
> - 状态逻辑分散在组件树的叶子部分

求求你们不要再把所有状态逻辑都堆到 Redux 里了 🤣🧎‍♂️

## 杂谈

最近比较忙，月刊整理不多，打算接下来新开一个面经话题，记录真实的面试过程，不定时更新
