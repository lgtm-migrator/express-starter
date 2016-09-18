# EXPRESS DEMO

这是一个Express 示例项目

使用bower管理前端库

使用babel以支持ES6/ES7 特性

### 开发
```
npm install
npm start
```
如果需要查看调试信息
```
set DEBUG=express-demo:*&&npm start
```

### 部署
```
npm install
npm run compile
npm start --production
```

### 调试信息
如果需要查看调试信息，需要在环境变量中设置DEBUG=express-demo:*

### 其他
在vs code环境下

可以使用ctrl+shift+b完成编译

可以使用F5直接调试
