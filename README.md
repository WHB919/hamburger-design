# Hamburger-design组件库

基于「 React 」框架的个性化 UI 组件库。[演示站点](https://WHB919.github.io/hamburger-design/)

## 技术栈

- 开发语言和框架：React + Typescript + Scss
- 构建工具：Rollup
- 静态站点：Storybook
- 持续化部署：Github-Action内置CICD工具
- 测试工具：React-testing-library

## 安装

推荐使用 npm 来安装，享受生态圈和工具带来的便利，可以在开发环境轻松调试，也可以在生态环境打包部署使用。

`$ npm install hamburger-design`

## 示例

### 1. 引入样式

在`index.tsx(.jsx)`中：

```js
import 'hamburger-design/dist/index.css'
```

### 2. 使用组件

```js
import React from 'react';
import { Button } from 'hamburger-design';

const App = () => (
  <>
    <Button btnType="primary" size="lg">PRESS ME</Button>
  </>
);
```

