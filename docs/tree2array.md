# 树转列表

```js
tree2array(tree, [options])
```

树状结构数据转换为列表结构数据，并在未定义主键（`id`）、父键（`parentId`）和叶子（`leaf`）时**自动生成**它们。

::: tip 深拷贝
推荐使用 [lodash.clonedeep] 深拷贝，以避免原始数据遭到不必要的篡改。
:::

## 参数

|   参数    |   类型   | 默认 |              说明               |
| --------- | -------- | ---- | ------------------------------- |
| `tree`    | `array`  |      | [树状结构数据](./param.md#tree) |
| `options` | `object` |      | [配置选项](./param.md#options)  |

## 返回

| 参数 |  类型   |               说明               |
| ---- | ------- | -------------------------------- |
| *    | `array` | [列表结构数据](./param.md#array) |

## 示例

::: code-group
```js [调用]
import cloneDeep from 'lodash.clonedeep'
import { tree2array } from '@axolo/tree-array'

const tree = [{
  path: '/home'
}, {
  path: '/chart',
  children: [{
    path: '/chart/index',
    children: [{
      path: '/chart/index/top'
    }, {
      path: '/chart/index/active',
      children: [{
        path: '/chart/index/active/my'
      }]
    }]
  }, {
    path: '/chart/review'
  }, {
    path: '/chart/project',
    children: [{
      path: '/chart/project/you',
      test: true
    }, {
      path: '/chart/project/my',
      children: [{
        path: '/chart/project/my/one'
      }, {
        path: '/chart/project/my/two'
      }]
    }]
  }]
}, {
  path: '/smile',
  children: [{
    path: '/smile/index',
    test: true
  }]
}]

tree2array(cloneDeep(tree)) // array
```

```json [结果]
[{
  "path": "/home",
  "parentId": null,
  "id": "5tnchk22z3w",
  "leaf": true
}, {
  "path": "/chart",
  "parentId": null,
  "id": "oabyvsti24",
  "leaf": false
}, {
  "path": "/chart/index",
  "parentId": "oabyvsti24",
  "id": "r5s1atye4p",
  "leaf": false
}, {
  "path": "/chart/index/top",
  "parentId": "r5s1atye4p",
  "id": "0tw2dgclqao",
  "leaf": true
}, {
  "path": "/chart/index/active",
  "parentId": "r5s1atye4p",
  "id": "iji2k8j9rj",
  "leaf": false
}, {
  "path": "/chart/index/active/my",
  "parentId": "iji2k8j9rj",
  "id": "u11xvewau8",
  "leaf": true
}, {
  "path": "/chart/review",
  "parentId": "oabyvsti24",
  "id": "y9b2oungnke",
  "leaf": true
}, {
  "path": "/chart/project",
  "parentId": "oabyvsti24",
  "id": "l5mjmml40fh",
  "leaf": false
}, {
  "path": "/chart/project/you",
  "test": true,
  "parentId": "l5mjmml40fh",
  "id": "l6boi1z3uk",
  "leaf": true
}, {
  "path": "/chart/project/my",
  "parentId": "l5mjmml40fh",
  "id": "ch00zi2xlbr",
  "leaf": false
}, {
  "path": "/chart/project/my/one",
  "parentId": "ch00zi2xlbr",
  "id": "h1x7bwx2cew",
  "leaf": true
}, {
  "path": "/chart/project/my/two",
  "parentId": "ch00zi2xlbr",
  "id": "hthwywtm8ac",
  "leaf": true
}, {
  "path": "/smile",
  "parentId": null,
  "id": "jb5jfr58glj",
  "leaf": false
}, {
  "path": "/smile/index",
  "test": true,
  "parentId": "jb5jfr58glj",
  "id": "ab0yw0uxl7n",
  "leaf": true
}]
```
:::

[lodash.clonedeep]: https://www.npmjs.com/package/lodash.clonedeep
