### 基于webpack的多页面应用简单脚手架
>在webpack使用ejs作为生成html的生成模板  
配合html-webpack-plugin模块可以在页面中引入公共组件  
主要解决了多页面中多页面中公共部分修改后的代码不停copy到其他页面的问题  

* 添加对sass和css单独打包的支持 加入布局layout(2017-11-8 更新)

* 可以在项目中访问变量process.env.NODE_ENV获取项目环境 , 当然可以用webpack.DefinePlugin定义更多的全局变量(2017-9-27 更新)

* 打包好的文件要放在服务器中运行 , 或者修改product.js output中的publicPath为''让引用路径变成相对路径  

#### npm 命令

```
    npm install // 安装项目依赖

    npm run dev // 在生产环境中运行项目

    npm run build // 打包项目
```

#### 项目结构  
- dist => 打包文件位置  
- webpack.config.js => webpack 基础 配置文件
- product.js => 部署环境 额外 配置文件
- develop.js => 生产环境 额外 配置文件
- static => 静态资源存放文件夹 使用绝对路径方式 或者 相对路径引用  例 :  
        ```
            <img src="/static/img.png">
        ```
- src => 项目主体文件夹
    - common => 存放工具函数或者公共变量
    - component => 存放公共组件
        - footer => 单个组件的文件夹
            - footer.ejs =>公共组件html模板
            - footer.js =>公共组件方法
            - footer.css =>公共组件样式  
    - layout =>页面统一布局 默认:<header/> -> <page/> -> <footer/>
    - page => 存放页面
        - index =>单个页面文件夹
            - index.ejs =>页面模板  
            - html.js =>使用ejs模板拼装该页面html文件的js 在该文件中可引入公共组件模板(ejs)
            - index.css =>页面的css  
            - entry.js =>页面入口js 创建页面逻辑 引入页面样式 公共组件方法(js) 公共组件样式(css)
    - assets 另一种静态资源的存放文件夹 引入方式为require('相对引用文件的路径') 例 :  
            ```
                <img src="${require('../../../assets/img.png')}">
            ```

#### 参考资料
>[入门Webpack，看这篇就够了](http://www.jianshu.com/p/42e11515c10f)   
[ webpack多页应用架构系列](https://segmentfault.com/a/1190000007104372)


