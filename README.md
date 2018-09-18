这个项目基于 [Create React App](https://github.com/facebookincubator/create-react-app).

## Folder Structure

```
project/
  README.md
  node_modules/
  package.json
  .gitignore
  db.json  --- mock数据
  mockServer.js --- mock规则
  yarn.lock
  public/
    index.html
    favicon.ico
    manifest.json --- vendors 的 版本控制文件
  src/
    actions/ --- redux 的 action 集
    components/
    config/ --- 配置
    constants/ --- 常量
    pages/
    reducers/
    sagas/
    services/ --- 接口定义
    store/ --- saga 和 redux 的融合
    styles/
    utils/ --- 工具类
    index.js --- 入口
    registerServiceWorker.js
```

## Available Scripts

### `npm run dev`

运行这个项目.<br>
提供mock服务，接口域名需是http://localhost:3000.<br>
打开 [http://localhost:4000](http://localhost:4000) 浏览器查看项目.

### `npm run dev:prod`

运行项目，提供环境变量:process.env.REACT_APP_CUSTOM_ENV=production,用于调试线上环境的接口数据

### `npm run build`

构建项目，最终打包好的静态资源文件存储在dist/文件下
