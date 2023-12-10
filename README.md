# interview

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### 也可以使用 yarn
### yarn官网
https://yarnpkg.com/

https://classic.yarnpkg.com/en/docs/install#windows-stable

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).


### 详情笔记
### nodejs最新版本
https://nodejs.org/en/download/

### nodejs下载地址(其他版本): 
https://nodejs.org/en/about/previous-releases

### nvm下载地址 下载nvm-step包
https://github.com/coreybutler/nvm-windows/releases

### nvm查看命令目录
nvm list

### nvm下的淘宝镜像 
### node淘宝镜像：
https://npm.taobao.org/mirrors/node/
### npm淘宝镜像：
https://npm.taobao.org/mirrors/npm/

### npm官网
https://www.npmjs.com/

### npm国内淘宝服务器
npm config set registry https://registry.npm.taobao.org

npm config get registry

### 手动创建package.json包
npm init

### 检查哪些包需要跟新
npm outdated

### 更新包
npm update [-g] 包名

### 查看其他命令
npm config ls

### 配置环境变量
npm i cross-env

"scripts":{
  "start":"cross-env NODE_ENV=development node index.js",
  "test":"corss-env NODE_ENV=test node test.js"
}



# 发布包到npm

## 准备工作
#### 1.移除淘宝镜像源
npm config delete registry

npm config get registry
#### 2.到npm官网注册一个账号，并完成邮箱注册
#### 3.本地使用 npm cli 进行登录
  使用命令```npm login```登录
  使用命令```npm whoami```查看当前登录账号
  使用命令```npm logout```注销
#### 4.创建工程根目录
#### 5.使用npm init 进行初始化


## 发布
#### 1.开发
#### 2.确定版本version
#### 3.使用命令```npm publish```完成发布

## 发布完成 改回淘宝镜像

## yarn相关命令

#### 验证package.json文件的依赖记录和lock文件是否一致
命令： yarn check

#### 可以检查本地安装的包有哪些已知漏洞，以表格的形式列出
命令：yarn audit 

info: 信息级别

low:低级别

moderate: 中级别

high: 高级别

critical: 关键级别


#### 可以在控制台打印出为什么安装了这个包，哪些包会用到它
命令： yarn why

#### 搭建工程
命令： yarn create 

如： yarn create react-app my-app

搭建全局脚手架：yarn global add create-react-app

创建项目： create-react-app my-app

搭建脚手架和项目一起： yarn create react-app my-app

# 开源协议
http://choosealicense.online/appendix/