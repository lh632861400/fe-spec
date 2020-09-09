FE-SPEC
===========================
本项目是前端一些常用的规范

如何运行
===========================

### 环境依赖
首先得有 node，并确保 node 版本是 10.13 或以上。

```
$ node -v
v10.13.0
```
首先得有 npm，并确保 npm 版本是 5.0 或以上。

### clone项目到本地
```
git clone https://github.com/lh632861400/fe-spec.git
```

### 安装依赖
npm 使用的镜像在国外，会比较慢，可以尝试使用`cnpm`或者设置`npm`镜像源为`cnpmjs.org`的镜像源
```
cd fe-spec
npm install
```

### 运行项目
```
npm run dev
```
打开浏览器输入`http://localhost:8000/`查看项目


### 目录结构描述

├── Readme.md                   // 说明文档

├── .umi                         // umi临时文件夹

├── config                      // 配置

│   ├── config.ts              // dumi配置元数据

├── docs                         // 文档

├── node_modules   