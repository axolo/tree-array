# 剪取子树

```js
treeSub(tree, id, [options])
```

根据主键从树中剪取一棵子树， 如：`{ id, parentId, children: [] }`。

## 参数

|   参数    |   类型   | 默认 |                    说明                     |
| --------- | -------- | ---- | ------------------------------------------- |
| `tree`    | `tree`   |      | [树状结构数据](./param.md#tree)             |
| `id`      | `any`    |      | [主键](./param.md#id)的值，如：`chartIndex` |
| `options` | `object` |      | [配置选项](./param.md#options)              |

## 返回

| 参数 |   类型   |                说明                |
| ---- | -------- | ---------------------------------- |
| *    | `object` | 剪取下的子树，注意其类型为**对象** |

## 示例

::: code-group
```js [调用]
import { treeSub } from '@axolo/tree-array'

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

treeSub(tree, 'chartIndex') // object of sub tree
```

```json [结果]
{
  "id": "chartIndex",
  "path": "/chart/index",
  "parentId": "chart",
  "children": [{
    "id": "chartIndexTop",
    "path": "/chart/index/top",
    "parentId": "chartIndex"
  }, {
    "id": "chartIndexActive",
    "path": "/chart/index/active",
    "parentId": "chartIndex",
    "children": [{
      "id": "chartIndexActiveMy",
      "path": "/chart/index/active/my",
      "parentId": "chartIndexActive"
    }]
  }]
}
```
:::
