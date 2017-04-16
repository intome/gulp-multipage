## 项目说明

>基于Gulp的传统项目多页面自动化构建方案

## 项目特点

+ 页面脚本和样式实现MD5与版本号替换有效解决版本号问题
+ 图片追加MD5与版本号替换
+ 可自动生成雪碧图片在SCSS中进行调用
+ 多脚本文件压缩成一个文件
+ 载入Babel可编辑ES6语法
+ HTML页面可基于ejs模板进行编辑
+ 开发模式下可热加载更新页面

## 项目结构

```
Project
│─ dist      构建后的文件
├─ gulpfile  Gulp任务文件配置
│   ├─ tasks 配置任务目录
│   ├─ config.js 路径配置文件
│   ├─ default.js 开发模式与构建模式Gulp任务模块
│   
├─ src       源代码
│   ├─ css   scss生成的文件
│   ├─ img   图片目录
│   │  ├─ sprite  需要合并的雪碧图目录
│   │  ├─ _sprite.png  生成后的雪碧图文件名（可修改配置文件中参数改名）
│   │
│   ├─ js    脚本文件
│   │  ├─ app       页面模块目录
│   │  ├─ build.js  生成文件的脚本（可自定义自己的文件名）
│   │   
│   ├─ sass  scss文件
│   │  ├─ sprite.scss  生成雪碧图的scss （可修改配置文件变更名字）
│   │
│   ├─ views HTML页面
│      ├─ include  模板页面
│
├─ .eslintrc js检查
├─ gulpfile.js Gulp 入口文件
```

## 用法
用git克隆本项目，需先安装node环境后, 从命令行进入项目根目录，依次执行以下命令：

    $ npm install
    
构建模式指令：

    $ npm run build
    
开发模式指令：

    $ npm run dev
    
## 注意
> 目前该项目还无法模块化构建，后期会更新入此功能
    
## 开源许可证
MIT

您可以随意使用此项目，无需通知我，因为我可能很忙没有时间回覆你。
