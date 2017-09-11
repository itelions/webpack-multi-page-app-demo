### 基于webpack的多页面应用简单脚手架
>在webpack使用ejs作为生成html的生成模板  
配合html-webpack-plugin模块可以在页面中引入公共组件  
主要解决了多页面中多页面中公共部分修改后的代码不停copy到其他页面的问题

    打包好的文件要放在服务器中运行  
    或者修改webpack.config.product.js output中的publicPath为''让引用路径变成相对路径
#### npm 命令

```
    npm install // 安装项目依赖

    npm run dev // 在生产环境中运行项目

    npm run build // 打包项目
```

#### 项目结构  
- dist => 打包文件位置  
- webpack.config.js => 生产环境配置文件
- webpack.config.product.js => 部署环境配置文
件
- static => 静态资源存放文件夹 使用绝对路径方式或者相对路径引用  例 :  
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
    - page => 存放页面
        - index =>单个页面文件夹
            - index.ejs =>页面模板  
                - html.js =>组织生产该页面的html文件的js 在该文件中可引入公共组件模板(ejs)  定义页面布局
            - index.css =>页面的css  
                - entry.js =>页面入口js 创建页面逻辑 引入页面样式 公共组件方法(js) 公共组件样式(css)
    - assets 另一种静态资源的存放文件夹 引入方式为require('相对引用文件的路径') 例 :  
            ```
                <img src="${require('../../../assets/img.png')}">
            ```

#### 参考资料
>[入门Webpack，看这篇就够了](http://www.jianshu.com/p/42e11515c10f)   
[ webpack多页应用架构系列](https://segmentfault.com/a/1190000007104372)


