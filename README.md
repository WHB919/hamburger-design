# Hamburger-design组件库

基于「 React 」框架的个性化 UI 组件库。[静态站点](https://WHB919.github.io/hamburger-design/)

## 介绍

- 基于React框架开发
- 基于TypeScript开发
- 基于Storybook设计的静态演示站点
- 采用Rollup打包，默认支持基于ES modules的tree shaking

## 安装

推荐使用 npm 来安装，享受生态圈和工具带来的便利，可以在开发环境轻松调试，也可以在生态环境打包部署使用。

`$ npm install hamburger-design`

### 示例

#### 1. 引入样式

在`index.tsx(.jsx)`中：

```js
import 'hamburger-design/dist/index.css'
```

#### 2. 使用组件

```js
import React from 'react';
import { Button } from 'hamburger-design';

const App = () => (
  <>
    <Button btnType="primary" size="lg">PRESS ME</Button>
  </>
);
```

