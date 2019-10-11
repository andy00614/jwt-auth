# 初始化环境
## 1.npm
- nodemon
注意：如果nodemon非全局安装需要用npm script去启动
- express
## 2.目录
root
  -node_modules
  -routes
    -auth.js
  index.js

## 3.安装mongoose
npm install mongoose
## 4.安装dotenv

## 5.定义Schema格式，再路由调用添加(mongoose)

## 6.添加json的middleware
app.use(express.json())

## 7.body-parse记得要再利用路由中间件前加上，否则会读取不到body

## 8.安装hapi/joi
npm install @hapi/joi