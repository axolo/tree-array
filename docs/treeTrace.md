# 树溯源对象

```js
treeTrace(tree, id, [options])
```

根据主键的值从树中溯源，返回**从根到自身**顺序的对象数组，如：`[object1, object12, object121]`。

## 参数

|   参数    |   类型   | 默认 |                        说明                        |
| --------- | -------- | ---- | -------------------------------------------------- |
| `tree`    | `array`  |      | [树状结构数据](./param.md#tree)                    |
| `id`      | `any`    |      | [主键](./param.md#id)的值，如：`chartProjectMyTwo` |
| `options` | `object` |      | [配置选项](./param.md#options)                     |

## 返回

| 参数 |  类型   |             说明             |
| ---- | ------- | ---------------------------- |
| *    | `array` | 从根到自身顺序溯源的对象数组 |

## 示例

::: code-group
```js [调用]
import { treeTrace } from '@axolo/tree-array'

const tree = [{
  id: 'home',
  path: '/home',
  parentId: null
}, {
  id: 'chart',
  path: '/chart',
  parentId: null,
  children: [{
    id: 'chartIndex',
    path: '/chart/index',
    parentId: 'chart',
    children: [{
      id: 'chartIndexTop',
      path: '/chart/index/top',
      parentId: 'chartIndex'
    }, {
      id: 'chartIndexActive',
      path: '/chart/index/active',
      parentId: 'chartIndex',
      children: [{
        id: 'chartIndexActiveMy',
        path: '/chart/index/active/my',
        parentId: 'chartIndexActive'
      }]
    }]
  }, {
    id: 'chartReview',
    path: '/chart/review',
    parentId: 'chart'
  }, {
    id: 'chartProject',
    path: '/chart/project',
    parentId: 'chart',
    children: [{
      id: 'chartProjectYou',
      path: '/chart/project/you',
      parentId: 'chartProject',
      test: true
    }, {
      id: 'chartProjectMy',
      path: '/chart/project/my',
      parentId: 'chartProject',
      children: [{
        id: 'chartProjectMyOne',
        path: '/chart/project/my/one',
        parentId: 'chartProjectMy'
      }, {
        id: 'chartProjectMyTwo',
        path: '/chart/project/my/two',
        parentId: 'chartProjectMy'
      }]
    }]
  }]
}, {
  id: 'smile',
  path: '/smile',
  parentId: null,
  children: [{
    id: 'smileIndex',
    path: '/smile/index',
    parentId: 'smile',
    test: true
  }]
}]

treeTrace(tree, 'chartProjectMyTwo') // array of id
```

```json [结果]
[
  {
    "id": "chart",
    "path": "/chart",
    "parentId": null,
    "children": null
  },
  {
    "id": "chartProject",
    "path": "/chart/project",
    "parentId": "chart",
    "children": null
  },
  {
    "id": "chartProjectMy",
    "path": "/chart/project/my",
    "parentId": "chartProject",
    "children": null
  },
  {
    "id": "chartProjectMyTwo",
    "path": "/chart/project/my/two",
    "parentId": "chartProjectMy",
    "children": null
  }
]
```
:::
