# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

### [0.9.6](https://github.com/honghuangdc/soybean-admin/compare/v0.9.5...v0.9.6) (2022-06-15)


### Features

* **projects:** 本地svg动态渲染图标 ([c3c975e](https://github.com/honghuangdc/soybean-admin/commit/c3c975ee1142987b7ded0107bf91d0080d5651fe)), closes [#61](https://github.com/honghuangdc/soybean-admin/issues/61)
* **projects:** 上下结构，菜单支持横向滚动 ([808051b](https://github.com/honghuangdc/soybean-admin/commit/808051b29dd682e1cbcf0e211774efb9cc12713a))
* **projects:** 新增Antv G2图表示例 ([2d64a2e](https://github.com/honghuangdc/soybean-admin/commit/2d64a2e57c8d83c8d06f210eeefef8f31b3abeb9))
* **projects:** 增加设置当前Tab页签名称功能 ([487213b](https://github.com/honghuangdc/soybean-admin/commit/487213b64853765e2bd186474e4607572624a33e))


### Bug Fixes

* **projects:** 设置tab标题导致meta属性丢失 ([efcfa57](https://github.com/honghuangdc/soybean-admin/commit/efcfa576d52a7eab644f3b4c65af153442887fab))
* **projects:** 修复顶部菜单的位置失效问题 ([4ee0d94](https://github.com/honghuangdc/soybean-admin/commit/4ee0d94f1bde83c788fc0dcb084402359c04fb1b))

### [0.9.5](https://github.com/honghuangdc/soybean-admin/compare/v0.9.4...v0.9.5) (2022-06-06)


### Features

* **projects:** 支持同一路由根据不同query和hash同时显示不同Tab ([4122685](https://github.com/honghuangdc/soybean-admin/commit/4122685803f8a0a485682d16cec74e27945adc47)), closes [#64](https://github.com/honghuangdc/soybean-admin/issues/64)
* **projects:** 动态路由根路由重定向只需取决于后端返回的路由首页 ([434ab1c](https://github.com/honghuangdc/soybean-admin/commit/434ab1c560b260f8a19895405eb1d3c3313052d7))
* **projects:** 补充更多的ECharts示例 ([c776249](https://github.com/honghuangdc/soybean-admin/commit/c7762490def77695bedf179ffc63e3e95d15e14d))
* **projects:** 添加百度地图、升级依赖 ([39854a4](https://github.com/honghuangdc/soybean-admin/commit/39854a492b9cce71e0c7ed52af9985cb4abd6a97))
* **projects:** 添加插件页面：图表 ([0a46ea0](https://github.com/honghuangdc/soybean-admin/commit/0a46ea08443f6b879434e925d440cf07e9494fcb))
* **projects:** 添加自动跟随系统主题设置 ([ba07b69](https://github.com/honghuangdc/soybean-admin/commit/ba07b695dd9dc5d3f8ebf57d0f2e69d624994962))
* **projects:** 添加antv g2图表示例 ([44b022a](https://github.com/honghuangdc/soybean-admin/commit/44b022aefd7dbb4c34886814cf04767450dec026))
* **projects:** 引入echarts替换antvG2plot ([e7ad086](https://github.com/honghuangdc/soybean-admin/commit/e7ad08685e8ac52a8906fc94e656192275f9764c))
* **route:** 路由meta新增activeMenu属性 ([ebd16a4](https://github.com/honghuangdc/soybean-admin/commit/ebd16a4d1ab1a95a27838a2d4f20cc1d1e7309ae))


### Bug Fixes

* **projects:** 修复@antv/g2生产环境报错 ([4558c24](https://github.com/honghuangdc/soybean-admin/commit/4558c24d1c1e1faa3326650fc16e6baf384509ac))
* **projects:** 修复插件不存在的错误提示 ([7165282](https://github.com/honghuangdc/soybean-admin/commit/716528206e9f63e873607d0afd59d83f6984e3fe))
* **projects:** 修复权限切换路由数据未更新的问题 ([60f9125](https://github.com/honghuangdc/soybean-admin/commit/60f912508b0e685957fb22ef0ed1f83272847263))
* **projects:** 修复页面切换时导致的溢出滚动条 ([e023306](https://github.com/honghuangdc/soybean-admin/commit/e0233061d3bca236b4c4bb462ce00f7ca186b9fa))
* **route:** 当为左侧混合菜单时activeMenu无效情况 ([3e4f9e2](https://github.com/honghuangdc/soybean-admin/commit/3e4f9e282442073447c5c24c33d65bc6130978ee))

### [0.9.4](https://github.com/honghuangdc/soybean-admin/compare/v0.9.3...v0.9.4) (2022-04-28)


### Features

* **layouts:** 添加侧边栏/头部的反转模式来增加对比度 ([861c8b9](https://github.com/honghuangdc/soybean-admin/commit/861c8b9852e0097a1f6b79ac2c10d19add123bde))
* **layouts:** 添加侧边栏/头部的反转模式来增加对比度 ([3c8dd77](https://github.com/honghuangdc/soybean-admin/commit/3c8dd772f89d2b656a42c4f7164e581acdb2b1a5))
* **projects:** 插件方式按需引入naiveUI ([6bed9ea](https://github.com/honghuangdc/soybean-admin/commit/6bed9ead38af6d58f6cd9e520db848ae5cbfa4db))
* **projects:** 登录页背景图片位置适配移动端 ([24010d0](https://github.com/honghuangdc/soybean-admin/commit/24010d05fb1ff51cb5e5d94ffe310206a9638711))
* **projects:** 登录页面适配移动端 ([ec0776e](https://github.com/honghuangdc/soybean-admin/commit/ec0776e268cd3d1031e9ecd794abce271a675793))
* **projects:** 权限完善及权限示例页面 ([807448a](https://github.com/honghuangdc/soybean-admin/commit/807448aec5b041535fe4fbac90eca1138b2f439c))
* **projects:** 添加请求适配器的请求示例 ([bed4292](https://github.com/honghuangdc/soybean-admin/commit/bed4292ed380e77ac428ab057abc42eceb72af53))
* **projects:** 新增静态路由 ([ca2dfa6](https://github.com/honghuangdc/soybean-admin/commit/ca2dfa6185aa7a4e58184bcfef2a1246a52f88fd))
* **projects:** 引入unocss替换windicss ([c9d3e5a](https://github.com/honghuangdc/soybean-admin/commit/c9d3e5a3fdf59179dcfc122ab8369c492ea7832e))
* **projects:** HTML lang 修改为 zh-cmn-Hans ([b9c5c34](https://github.com/honghuangdc/soybean-admin/commit/b9c5c349790b1e83a7acd1f2c53a86c9221944ff))
* **projects:** HTML lang 修改为 zh-cmn-Hans ([dbeb595](https://github.com/honghuangdc/soybean-admin/commit/dbeb595c0b9fc11e7d166a7684af37cc971f1a11))
* **projects:** mock添加权限过滤 ([7f4350a](https://github.com/honghuangdc/soybean-admin/commit/7f4350aeb673dab59192584177a897aacebe4b28))


### Bug Fixes

* **projects:** 去除从环境文件引入端口号导致的错误 ([2d6d179](https://github.com/honghuangdc/soybean-admin/commit/2d6d179d669ea71cca3fe97ac840e4856bff4051))
* **projects:** 全局搜索弹窗弹出时动画闪屏问题 ([bb1bbf2](https://github.com/honghuangdc/soybean-admin/commit/bb1bbf272438f4ed440735118c6a9ec04c7d109f))
* **projects:** 添加.npmrc修复无法获取自动引入的全局组件声明类型 ([e8488e4](https://github.com/honghuangdc/soybean-admin/commit/e8488e4d5237e5e03ec07ff07d03115389d5b1ef))
* **projects:** 添加获取路由组件文件未找到时的错误提示 ([219f87f](https://github.com/honghuangdc/soybean-admin/commit/219f87f46758f328f26697f66d8583f49c0d41de))
* **projects:** 修复获取vite环境变量的方式 ([46e1ae7](https://github.com/honghuangdc/soybean-admin/commit/46e1ae7825b2b204ce3cdd63b3c64f39bff096d0))
* **projects:** 修复路由守卫的动态路由逻辑 ([e6c26fc](https://github.com/honghuangdc/soybean-admin/commit/e6c26fcb4ae085f9fd7d7eb9183ddba020d0b5da))
* **projects:** 修复样式 ([e899914](https://github.com/honghuangdc/soybean-admin/commit/e8999144266761b3b701442975c3c00251240d53))
* **projects:** 修复在新版vite下环境变量获取不到的问题 ([3fb13ca](https://github.com/honghuangdc/soybean-admin/commit/3fb13ca9e710549d2ddeb774fe08fabd27d5ae11))
* **projects:** 修复vite alias ([cd7ca8f](https://github.com/honghuangdc/soybean-admin/commit/cd7ca8f4c77ac8c753b753ba698a9573d6c37bf9))

### [0.9.3](https://github.com/honghuangdc/soybean-admin/compare/v0.9.2...v0.9.3) (2022-03-12)


### Features

* **components:** svgIcon,添加type,调整size方案 ([ce4e039](https://github.com/honghuangdc/soybean-admin/commit/ce4e039f48001b47a2933e807f5410a9573781b9))
* **projects:** 引入soybean-admin-tab、去除vite-plugin-svg-icons，用unplugin-icons实现自定义svg的iconify写法、代码优化 ([a1a57a1](https://github.com/honghuangdc/soybean-admin/commit/a1a57a185ce5004888ca4e1611973665ee46980b))
* **projects:** 新增子菜单图标和多页签图标 ([f5c56c3](https://github.com/honghuangdc/soybean-admin/commit/f5c56c355ce41157b20ed0a10272a28e6d8b2b49))
* **projects:** 新增自定义svg图标动态渲染 ([f83c7b5](https://github.com/honghuangdc/soybean-admin/commit/f83c7b59b893ab6e210188e92c4177b3d01392ce))
* **projects:** 添加naiveUI按需引入 ([a810ef8](https://github.com/honghuangdc/soybean-admin/commit/a810ef85b19e4b74f3ddb3c69d17c050e556ee90))
* **projects:** 添加SvgIcon,配置vite plugin ([378d55a](https://github.com/honghuangdc/soybean-admin/commit/378d55ac0e11cdf115ce3cb8e281d60f7fc4ff7a))
* **projects:** 添加全局组件自动引入注册 ([f5a043b](https://github.com/honghuangdc/soybean-admin/commit/f5a043b11a403927828ae922bdae411a4e5ae3c6))
* **projects:** 添加网络代理 ([094dca9](https://github.com/honghuangdc/soybean-admin/commit/094dca961f608404352ac360f44496423d88dae8))
* **projects:** 重构项目的TS类型架构，去除interface文件夹 ([8191490](https://github.com/honghuangdc/soybean-admin/commit/8191490f39fc011096edd77c3156eb4fe33d4e1c))


### Bug Fixes

* **components:** 修复组件LoadingEmptyWrapper适应暗黑模式 ([811b15e](https://github.com/honghuangdc/soybean-admin/commit/811b15e672c9d69e9c5789eb11ab2db7bd729f37))
* **components:** 组件LoadingEmptyWrapper添加背景颜色动画过渡 ([7add5c2](https://github.com/honghuangdc/soybean-admin/commit/7add5c2edfcabadb77084179d464b849d880d5e6))
* **projects:** 修复 BASE_URL 没有生效的问题 ([72d7dcf](https://github.com/honghuangdc/soybean-admin/commit/72d7dcfa5ee8dc6f3601f4d65c6aca9ad2cc5d5c))
* **projects:** 修复页面切换动画开关不生效 ([9d4ed61](https://github.com/honghuangdc/soybean-admin/commit/9d4ed617fb80095e521d8063718283459711118f))
* **projects:** 修复页面切换动画无变化 ([c4546bd](https://github.com/honghuangdc/soybean-admin/commit/c4546bdfa303f1e89c0d7ddd46b54e4ec5170096))

### [0.9.2](https://github.com/honghuangdc/soybean-admin/compare/v0.9.1...v0.9.2) (2022-02-11)


### Features

* **projects:** 迁移全局搜索菜单功能 ([554d7fd](https://github.com/honghuangdc/soybean-admin/commit/554d7fd6114b9cf6df571c3cb02f4cb0cc6dcfd4))


### Bug Fixes

* **components:** 修复Tab在移动端设备无法点击的问题 ([2c9660f](https://github.com/honghuangdc/soybean-admin/commit/2c9660fdbf9a84e980db0aff5cd0aed0f75963ca))
* **projects:** 修复分析页和工作台的布局问题 ([e93b94c](https://github.com/honghuangdc/soybean-admin/commit/e93b94cb2435a130bb1d94a703328af342cd24c9))
* **projects:** 修复项目配置拷贝功能 ([a7a269d](https://github.com/honghuangdc/soybean-admin/commit/a7a269d6a61ccd25883e6bb69639d39e0260587d))
* **projects:** vite配置修复 ([facc00e](https://github.com/honghuangdc/soybean-admin/commit/facc00e8b4998dc8bd338e3b63a652b4bfe2ed3e))

### [0.9.1](https://github.com/honghuangdc/soybean-admin/compare/v0.1.3...v0.9.1) (2022-01-23)


### Features

* **projects:** 新版重构完成 ([68b4230](https://github.com/honghuangdc/soybean-admin/commit/68b42304d5964246775c7a82dcc1406c5db7a4e4))

### [0.1.3](https://github.com/honghuangdc/soybean-admin/compare/v0.1.2...v0.1.3) (2022-01-23)


### Bug Fixes

* **projects:** 修复未登录时会调用获取用户路由的接口 ([21bab1f](https://github.com/honghuangdc/soybean-admin/commit/21bab1f7c30611fe59dc91c7a73050ccb49a4658))
* **projects:** 修复路由守卫的动态路由逻辑 ([b61b0ce](https://github.com/honghuangdc/soybean-admin/commit/b61b0ce25fdcbaf29ca64cbcc467e12faa947625))

### [0.1.2](https://github.com/honghuangdc/soybean-admin/compare/v0.1.1...v0.1.2) (2022-01-21)


### Features

* **projects:** 添加缓存主题色 ([3709297](https://github.com/honghuangdc/soybean-admin/commit/37092974d37b2e661d4cbf9d27c89b5e99119cd7))
* **projects:** 添加页面缓存、记录在tab中的缓存页面的滚动条位置 ([1d63a83](https://github.com/honghuangdc/soybean-admin/commit/1d63a838226df4f48e7f2a15b5a05d4b496d3c69))

### [0.1.1](https://github.com/honghuangdc/soybean-admin/compare/v0.0.5...v0.1.1) (2022-01-20)


### Features

* **projects:** theme store完成 ([bf020a8](https://github.com/honghuangdc/soybean-admin/commit/bf020a82580e6b1fbda1cc1e0bd6176770434884))
* **projects:** 主题配置抽屉: 迁移其他功能 ([6d132c5](https://github.com/honghuangdc/soybean-admin/commit/6d132c59770e925cfc61217dcefa5b4d937604df))
* **projects:** 主题配置抽屉：迁移暗黑模式、布局模式、添加颜色选择面板 ([912bfdf](https://github.com/honghuangdc/soybean-admin/commit/912bfdf4390ab624d3f8e343be88e8c1cf7ab5b6))
* **projects:** 创建自定义布局组件SoybeanLayout ([0653fb1](https://github.com/honghuangdc/soybean-admin/commit/0653fb144fe9d49f24ef4fe6e4a58de6de342b78))
* **projects:** 初始化加载效果：应用主题颜色 ([035fa11](https://github.com/honghuangdc/soybean-admin/commit/035fa114c9fd638cf467e6a73a8e4c558f503deb))
* **projects:** 图标选择器增加扩展树形 ([041012b](https://github.com/honghuangdc/soybean-admin/commit/041012b3ee04d960c1e38895839225613f7af377))
* **projects:** 增加Icon选择器组件 ([9472b51](https://github.com/honghuangdc/soybean-admin/commit/9472b51811f419e9139de81c73f2c71d170700c2))
* **projects:** 增加全局搜索菜单功能 ([b9ce691](https://github.com/honghuangdc/soybean-admin/commit/b9ce69130b12712013228326f883e2d973e4e46a))
* **projects:** 增加项目文档外链 ([1901a0b](https://github.com/honghuangdc/soybean-admin/commit/1901a0bfb7bfa516dfda552675397ddec96b8d4b))
* **projects:** 多级路由的所有子路由转换成二级路由 ([85b55bb](https://github.com/honghuangdc/soybean-admin/commit/85b55bb37a0a06e2645b96ed81aefe463127121a))
* **projects:** 引入mockjs ([9bc682d](https://github.com/honghuangdc/soybean-admin/commit/9bc682dae878c084e38a0e2c9a4a2de171023c48))
* **projects:** 新增BasicLayout布局 ([006467a](https://github.com/honghuangdc/soybean-admin/commit/006467a0626f427da3f516d90c15bf1e1eef0e55))
* **projects:** 添加cryptojs，对本地缓存数据进行加密 ([7a0648d](https://github.com/honghuangdc/soybean-admin/commit/7a0648dba55a98f61f4d81696307d86c82a1d34d))
* **projects:** 添加NaiveProvider组件 ([c804b21](https://github.com/honghuangdc/soybean-admin/commit/c804b21ceb92133c6ea7cc64c87521cc164e40ce))
* **projects:** 添加侧边菜单 ([e25afe2](https://github.com/honghuangdc/soybean-admin/commit/e25afe2fadfe86b9330ee02190a4e40b8321714c))
* **projects:** 添加头部折叠按钮 ([a090d39](https://github.com/honghuangdc/soybean-admin/commit/a090d398fc071e246b92d0da80883cf5cbedba0e))
* **projects:** 添加常用组件、composables函数 ([230a50a](https://github.com/honghuangdc/soybean-admin/commit/230a50a4cf4d2ebb62b19d6324234243cf6b2f0d))
* **projects:** 添加抽屉 ([10e4d81](https://github.com/honghuangdc/soybean-admin/commit/10e4d81bd6a0b35d8cfb4f7a1e981f8ef6ab87cc))
* **projects:** 添加表格页面示例 ([51c744c](https://github.com/honghuangdc/soybean-admin/commit/51c744c8e2c8ed9691e92e35b6a88582f22c30d8))
* **projects:** 添加路由跳转浏览器新标签 ([987cef3](https://github.com/honghuangdc/soybean-admin/commit/987cef336338987f2e6f0d5aba8f6d4602b297ca))
* **projects:** 登录页面开始迁移 ([f5a36a0](https://github.com/honghuangdc/soybean-admin/commit/f5a36a05cb626ec62115283f1d2c534b2a787bdd))
* **projects:** 细节完善 ([cc290ac](https://github.com/honghuangdc/soybean-admin/commit/cc290accc29282e9ba655356e2695b6ca4b23605))
* **projects:** 细节完善、迁移页面 ([ce531ce](https://github.com/honghuangdc/soybean-admin/commit/ce531ce5dda0b4a1024aa6bd3d68835b59760d57))
* **projects:** 菜单搜索增加大小写转换 ([2907868](https://github.com/honghuangdc/soybean-admin/commit/29078689b0652cf4ae852c93d8601a157579adcc))
* **projects:** 请求拦截器添加刷新token ([839b82b](https://github.com/honghuangdc/soybean-admin/commit/839b82ba8b052b02e24bcfe6da54160609a4fd4b))
* **projects:** 路由页面跳转权限完成 ([0d2a562](https://github.com/honghuangdc/soybean-admin/commit/0d2a5629e89c73a32d6c79f04b51543e1513e006))
* **projects:** 迁移多页签 ([28efbdb](https://github.com/honghuangdc/soybean-admin/commit/28efbdbc70733d22011a0eee084d35711429d188))
* **projects:** 迁移登录完成 ([b93b80c](https://github.com/honghuangdc/soybean-admin/commit/b93b80cb4b35268dfb6a09517a2494af24748dac))
* **projects:** 集成naiveUI主题配置，将css vars添加至html ([2c19684](https://github.com/honghuangdc/soybean-admin/commit/2c196841bd8527d7acccefe6a7545e0a49d532f7))
* **projects:** 面包屑 ([09c7658](https://github.com/honghuangdc/soybean-admin/commit/09c7658c21c7dda461dbb528e85b638b5a7dfacd))


### Bug Fixes

* **deps:** 降低vite版本 ([c9c5ca9](https://github.com/honghuangdc/soybean-admin/commit/c9c5ca9989eddb084f2706155473123c5dcfc334))
* **projects:** 修复redirect-not-found子路由 ([5bfb819](https://github.com/honghuangdc/soybean-admin/commit/5bfb8199b463d9ca6430577b5c493c0b78967aa9))
* **projects:** 修复vertical-mix布局、重构初始化的loading ([579e074](https://github.com/honghuangdc/soybean-admin/commit/579e07400e1b9a52934ed808a37c8579a41e8e74))
* **projects:** 修复网络请求错误空信息的提示 ([ff9216b](https://github.com/honghuangdc/soybean-admin/commit/ff9216b621aaef0a8203386fa1c3ca5477a2edea))
* **projects:** 修复面包屑数据 ([28b5d22](https://github.com/honghuangdc/soybean-admin/commit/28b5d224010a28669ad3a1919fc49f6e2dc808cd))
* **projects:** 去除Layout组件冗余代码 ([0e783bc](https://github.com/honghuangdc/soybean-admin/commit/0e783bcf7be0b3a083fe950adfb0afc72b510f97))
* **projects:** 请求相关细节修复 ([2ad1ad3](https://github.com/honghuangdc/soybean-admin/commit/2ad1ad32b8410d84902a33d825032c282ca6df86))
