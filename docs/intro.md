# 简介

`tree-array` 是一组久经考验的 `JavaScript` 树状结构数据实用工具集合。

::: tip 深拷贝
推荐使用 [lodash.clonedeep] 深拷贝，以避免原始数据遭到不必要的篡改。
:::

::: warning 大数据
在大数据场景下可能引发性能问题，请谨慎使用。
:::


## 安装

```shell
npm i @axolo/tree-array
```

## 使用

```js
import { tree2array, array2tree } from '@axolo/tree-array'
const tree = array2tree([/* array */])
const array = tree2array([/* tree */])
```

> Vue CLI

默认情况下 `babel-loader` 会忽略所有 `node_modules` 中的文件。
你可以启用 [transpileDependencies]，以避免构建后的代码中出现未转译的第三方依赖。

```js
// vue.config.js
module.exports = {
  transpileDependencies: ['@axolo/tree-array']
}
```

> CommonJS

默认编译为 `ES Modules`，若需 `CommonJS` 支持，请使用内置的 `UMD` 版本。

```js
const { tree2array, array2tree } = require('@axolo/tree-array/dist/index.umd.cjs')
const tree = array2tree(tree2array([/* tree */]))
```

[lodash.clonedeep]: https://www.npmjs.com/package/lodash.clonedeep
[transpileDependencies]: https://cli.vuejs.org/config/#transpiledependencies
