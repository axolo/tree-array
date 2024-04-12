# 树深度

```js
treeDeep(tree, [options], [deep = 1])
```

获取树状数据结构的最大树深度。

## 参数

|   参数    |   类型   | 默认 |               说明               |
| --------- | -------- | ---- | -------------------------------- |
| `tree`    | `tree`   |      | [树状结构数据](./param.md#tree)  |
| `options` | `object` |      | [配置选项](./param.md#options)   |
| `deep`    | `number` | `1`  | 初始深度，以此基础累加到最大深度 |

## 返回

| 参数 |   类型   |    说明    |
| ---- | -------- | ---------- |
| *    | `number` | 最大树深度 |

## 示例

::: code-group
```js [调用]
import { treeDeep } from '@axolo/tree-array'

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

treeDeep(tree) // 4
```

```json [结果]
4
```
:::
