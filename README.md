# 后台通用解决方案
- 自定义svgIcon 初探工程化
- vue.config.js到webpack
    - 用了devserver,chainwebpack
        - devserver是用来代理的,检测到/api的全部代理到指定的服务器上
        - chainwebpack处理svg
- env文件与环境设置
    - .env文件
- require.ensure实现webpack按需加载
- 使用对象代替 if 及 switch

    let name = 'lisi'let obj = {
        zhangsan: 21,
        lisi: 18,
        wangwu: 12
    };let age = obj[name] || 18;

- 使用 router.beforeEach 来处理跳转前逻辑
- 登录鉴权
    - 未登录时不允许进入除login以外的界面
    - 登陆后token未过期之前不允许进入login页面
    - 通过路由守卫进行实现
- 登录不仅仅那么简单,而是一个完整的业务流程
- 搭建layout架构
- sass变量
    - 使用$符号
    - 可以在变量名中使用
        - 写在#{}之中   border-#{$side}: 1px solid pink;
    - css常量
        - 定义--main-bg-color
        - 使用var(--main-bg-color)
- 嵌套
    - 嵌套样式
    - 嵌套属性
        -   font: {    size: 25px;    weight: bold;  }
- css变量导入到js变量
    - :export
- @mixin和@include

    @mixin circle {
        width: 200px;
        height: 200px;
        background: red;
        border-radius: 50%;
    }
    div {
       @include circle;
    }

- alias
    - \<script\>标签是@
    - \<style\>标签是~@
- session和cookie
    - 首先HTTP是无状态的协议,每次客户端和服务端会话完成时,服务端不会保存任何信息
    - cookie存储在客户端里,大小4k,最多300,除了一级域名和二级域名允许共享使用,不可跨域
    - session的抽象概念是会话,服务器生成、保存的session结构
        - 原理流程
            - 客户端:发送请求
            - 服务器:接收数据并创建特定session/sessionId,表示用户并跟踪用户当前会话
            - 客户端:获取会话,并在下一次请求时带上session/sessionID
            - 服务器:与本地保存的sessionID比对,获取会话状态
    - 差异：安全、存取类型（cookie只有字符串）、有效期（session短）、大小
- token
    - refresh token
- 常用鉴权
    - HTTP基本鉴权
    - session-cookie鉴权
    - token鉴权
    - JWT（json web token）鉴权
    - 单点登录sso
        - 跨域的sso用cas
    - Oauth第三方登录
- 动态侧边栏
    - 使用sass和js变量共享
        - 使用动态css还可以更换主题
    - 动态路由
      - 长
- 用户退出的处理
	- 主动退出
	- 被动退出
		- 主动处理:token失效
		- 被动处理:同时处理token失效与单点登录(挤号)
- 箭头函数的函数体不加括号默认加上return,有括号时需要手动加上return
- views中定义创建routes时使用了扩展操作符
- path.resolve
  - path.resolve([…paths])里的每个参数都类似在当前目录执行一个cd操作，从左到右执行，返回的是最后的当前目录，
  - 经常用于basePath+route.path重
- 折叠菜单
  - 使用vuex来处理折叠与否
  - toggleClick触发mutations改变状态
  - 使用css的calc()方法计算

- 搜索
  - 先像动态路由那样获得路由信息
  - 通过第三方库fuse.js实现模糊搜索

- scoped
  - .example[data-v-f3f3eg9]
  - 深度选择器 .a :deep(.b)

- CSS Modules 是一个流行的，用于模块化和组合 CSS 的系统
  - 和scoped一样,都能避免css全局带来的污染
  - 变成哈希值
  - 可以composes继承另一个选择器的规则
  - 定义常量


- element渲染数据就用props传值，图片用v-slot
  >在之前的章节中，我们已经了解到组件能够接收任意类型的 JavaScript 值作为 props，但组件要如何接收模板内容呢？在某些场景中，我们可能想要为子组件传递一些模板片段，让子组件在它们的组件中渲染这些片段。
  - https://cn.vuejs.org/guide/components/slots.html
  >v-slot 有对应的简写 #，因此 <template v-slot:header> 可以简写为 <template #header>。其意思就是“将这部分模板片段传入子组件的 header 插槽中”。
  - { row }  作用域插槽:同时使用子组件父组件域内的数据,

