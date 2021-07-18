## 联系方式

- 手机: 13291823868
- Email: wangxiang0807@foxmail.com

## 个人信息

- 王翔 / 男 / 27
- 期望职位：Web 前端工程师
- 工作年限：5 年
- 订阅号: 文西的酒馆
- 个人网站: https://wenxi.tech
- Github：https://github.com/wolfstark

## 项目经验

### 天眼 TMS，OMS 软件（WEB，小程序）（2020）

提供仓运配全链路服务的 SAAS 系统，服务中小物流企业和货主

我作为主要工程师，负责天眼全终端软件的开发

我解决了什么问题

- 我接手时项目刚立项，技术栈老旧混乱，开发不易维护，用户体验也存在问题
  - 我利用业余时间使用 Umi 和 Antd-Pro 重构技术体系，提升用户和开发体验
- 订单管理模块状态和行为关系复杂，不易维护，且接口查询较慢
  - 使用 React-Query 配合状态机管理订单模型，提升代码可维护性和交互体验
- 前端经常需要开发打印模版，例如发票模版，整个过程很痛苦也没什么意义
  - 为了减少重复性劳动，我开发了可视化打印模版生成器，提升了打印需求的交付效率
- 项目早先的多页签方案存在性能问题，并且页面间的跳转和 Redux 的使用需要使用特殊的函数，设计不合理
  - 通过在下层重写 React-Router 和 React-Redux，使得在多页签方案下，能够直接使用社区规定的 api，如`router.push`和`dispatch`，避免使用特殊封装函数让其他开发成员感到困惑
- 前端项目 service 层存在大量样板代码，并且开发阶段为了编写代码经常需要查阅文档复制黏贴，过程繁琐
  - 开发了 service-cli 命令行工具（已开源），实现前端项目 service 层代码依据 OpenAPI 规范自动生成，并且提供 d.ts 文件方便 IDE 工具自动补全字段
- 大客户定制化项目和现有 SAAS 项目部分功能重合
  - 落地微前端架构，完成项目拆分，使大客户定制化项目能够复用已有模块，快速交付
- 技术栈：Umi，React，Taro，Antd，NodeJS，Less，Typescript

### H5 可视化搭建工具 （2019）

通过可视化的方式快速完成 H5 活动页的开发，部署，管理

由于公司活动页需求太多（例如抽奖转盘，商品促销），有时候一天页面十几个，所以想到开发可视化搭建工具交由运营同事自行搭建页面，让开发去做更有意义的组件建设，从产品设计到前后端开发都是我一个人用业余时间完成

产品原型参考阿里云凤蝶，阿里飞冰，美团乐高和开源项目 pipline

特性

- 可视化搭建工具和业务组件互相解耦，易于不断添加供运营使用的业务组件
- 对需要上线的页面提供按需编译，而不是全量编译，减少上线时间
- 借助 Nuxt 提供的 SSG 能力，对 html 预渲染，加速页面访问速度，提升转化率

技术栈

- 前端 Electron，Graphql，Typescript，Stylus，Vuetify，Vue 全家桶
- 后端 Koa2，Graphql，Nuxt，MongoDB

### 环球黑卡 APP （2018）

会员制服务 APP，业务涉及出行，金融，电商，卡销

我解决了什么问题

- WEB 与 Android 和 IOS 端通信方式不一致，甚至同系统不同版本也有较大差异，项目当中存在大量嵌套 if 判断环境差异，并且不存在的 api 没有通用兜底方案只能 catch
  - 使用 Typescript 开发维护 JSBrage 通信方案，提供 d.ts 类型声明
  - 在 JSBrage 中抹平平台差异，并提供兜底方案，提升开发体验
  - 编写脚本批量替换线上上千个现存页面，迁移到 JSBrage
- 公司各个项目 Webpack 配置和目录结构不一致，导致开发体验迥异，并且上线需要手动上传文件至 FTP，经常出现错发的问题
  - 开发适用公司业务的 Fuc-cli 前端工程化解决方案（Fork 自早期 vue-cli 3-alpha 版）
  - 实现工程配置开箱即用，零配置，可复用，可升级
  - 通过 Fuc-cli 完成开发->构建->上线自动化，提升开发效率和页面性能，降低上线风险
- 推动前端团队组件化开发，开发 Magic-UI 业务组件库
- 技术栈：Hybrid App，Vue，React，Webpack，Vuex，Typescript，PWA，Eslint

### 秘境社交 （2018）

类抖音的私密社交应用，使用 ReactNative 的热更新能力快速迭代多端 APP，功能包括视频流和 IM 通讯

- 主要工作是和 Android，IOS 工程师协商建立 NativeBridge，方便前端和原生交互
- 技术栈：Redux， ReactNative， ReactNavigation， Axios， BaseNative

### 移动端服装定制平台（2017）

服装定制可视化平台，方便用户在网页上定制服装款式并实时预览定制效果

作为前端 Leader 参与产品原型建设和带领小组成员开发，前端项目基类组件构建和架构优化

我解决了什么问题

- SPA 项目首屏渲染过慢，HTML 需要在前端侧解析渲染，对 SEO 也不友好
  - 通过使用 puppeteer 对 SPA 页面抓取 DOM，生成预渲染页面达到 SSG 的效果，同时解决 SEO 问题，首屏加载从 840ms 降低至 380ms
  - 通过将 Preload  技术与 PWA  结合，实现懒加载组件秒加载，二次首屏渲染 100ms 以下完成
- 页面图片过多，代码体积也很庞大，页面加载缓慢
  - 开发懒加载组件：同时支持图片和自定义组件的按需加载
  - 提供兜底机制和占位骨架，优化用户体验
- 技术栈：Vuejs， Vuex，Vue-router，Webpack，Eslint，Typescript， Axios，PWA，puppeteer

### 开源项目

- [Markdown 笔记工具][1]:  插件化，可扩展的本地优先 WYSIWYG 编辑器
- [Fuc-cli][2]: 基于 Vue 的前端工程化解决方案，初始化->开发->部署
- [Vue 懒加载组件][3]:使用 Typescript 开发，允许懒加载图片和组件
- [H5 可视化构建工具][4]: 供运营人员快速生成电商 H5 活动页
- [Service 层代码生成器][5]: Service 层渐进式增强工具链，用于自动生成 Service 层代码，提供强类型校验，代码补全
- [web-clipper][6]: 用于网页剪裁的 Chrome 扩展，我是 Contributor

## 工作经验

- 杭州数链科技有限公司（ 19 年 ~ 至今 ）
- 杭州冒险元素网络科技有限公司（ 18 年 ~ 19 年 ）
- 杭州持码网络有限公司（ 17 年 ~ 18 年 ）
- 杭州小北科技有限公司（ 16 年 ~ 17 年 ）

## 技能清单

- 使用 Hybrid，小程序，React-Native，Electron 技术开发过若干跨平台软件
- 参与过多个团队的基础建设，对前端基础建设有自己的理解
- 熟悉原生 JS，Vue2，React，并通晓主流 JS 框架和模板引擎
- 能够通过前端架构和设计模式优化项目并提升开发效率，尤其擅长插件化架构
- 对 WebAssembly 和 Rust 很感兴趣，略懂，很乐意接受相关工作
- 熟悉分布式存储网络协议 IPFS
- 对富文本编辑器原理有一定了解
- 技术栈：Graphql，Electron，React-Native，Taro，Vue，Umi，Vuetify，Element-UI，NextJS，Antd，ExtJs，AvalonJs，SlateJS

## 自我评价

- 积极参与开源项目，被 vuejs-templates，alibaba/dawn，web-clipper 等开源项目合并过 PR
- 热衷 IT 行业，技术控，兴趣驱动
- 具有一定领导能力，良好的沟通能力，协调能力和团队合作能力
- 学习能力强，自学前端，并先后完成了本科学位、国家软件设计师职称考试，并计划后续完成高项、BEC
- 具备规范的代码编写风格，有代码洁癖和强迫症，逻辑能力比较强
- 善于从工具和工程角度提升开发效率
- 自认为有点系统思维，善于从第一性原则出发寻找最优解

## 教育背景

|             |              |                  |      |
| ----------- | ------------ | ---------------- | ---- |
| 2017 ~ 2020 | 浙江理工大学 | 计算机科学与技术 | 本科 |
| 2012 ~ 2014 | 江西司法警官 | 法律事务         | 大专 |

## 证书

2021 年：软件设计师

## 致谢

感谢您花时间阅读我的简历，期待能有机会和您共事。

[1]: https://github.com/wolfstark/neuron
[2]: https://github.com/wolfstark/fuc-cli
[3]: https://github.com/wolfstark/vue-better-lazyload
[4]: https://github.com/wolfstark/mofang
[5]: https://github.com/wolfstark/service-cli
[6]: https://github.com/webclipper/web-clipper
