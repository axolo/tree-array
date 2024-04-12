# 列表转树

```js
array2tree(array, [options])
```

列表结构数据转换为树状结构数据，并自动添加叶子（`leaf`）和深度（`deep`）。

::: tip 深拷贝
推荐使用 [lodash.clonedeep] 深拷贝，以避免原始数据遭到不必要的篡改。
:::

## 参数

|   参数    |   类型   | 默认 |               说明               |
| --------- | -------- | ---- | -------------------------------- |
| `array`   | `array`  |      | [列表结构数据](./param.md#array) |
| `options` | `object` |      | [配置选项](./param.md#options)   |

## 返回

| 参数 |  类型   |              说明               |
| ---- | ------- | ------------------------------- |
| *    | `array` | [树状结构数据](./param.md#tree) |

## 示例

::: code-group
```js [调用]
import cloneDeep from 'lodash.clonedeep'
import { array2tree } from '@axolo/tree-array'

const array = [{
  id: 'chart',
  path: '/chart',
  parentId: null
}, {
  id: 'chartIndex',
  path: '/chart/index',
  parentId: 'chart'
}, {
  id: 'chartIndexActive',
  path: '/chart/index/active',
  parentId: 'chartIndex'
}, {
  id: 'chartIndexActiveMy',
  path: '/chart/index/active/my',
  parentId: 'chartIndexActive'
}, {
  id: 'chartReview',
  path: '/chart/review',
  parentId: 'chart'
}, {
  id: 'chartProject',
  path: '/chart/project',
  parentId: 'chart'
}, {
  id: 'smile',
  path: '/smile',
  parentId: null
}, {
  id: 'smileIndex',
  path: '/smile/index',
  parentId: 'smile',
  test: true
}]

array2tree(cloneDeep(array)) // tree
```

```json [结果]
[
  {
    "id": "chart",
    "path": "/chart",
    "parentId": null,
    "deep": 0,
    "children": [
      {
        "id": "chartIndex",
        "path": "/chart/index",
        "parentId": "chart",
        "deep": 1,
        "children": [
          {
            "id": "chartIndexActive",
            "path": "/chart/index/active",
            "parentId": "chartIndex",
            "deep": 2,
            "children": [
              {
                "id": "chartIndexActiveMy",
                "path": "/chart/index/active/my",
                "parentId": "chartIndexActive",
                "deep": 3,
                "leaf": true
              }
            ]
          }
        ]
      },
      {
        "id": "chartReview",
        "path": "/chart/review",
        "parentId": "chart",
        "deep": 1,
        "leaf": true
      },
      {
        "id": "chartProject",
        "path": "/chart/project",
        "parentId": "chart",
        "deep": 1,
        "leaf": true
      }
    ]
  },
  {
    "id": "smile",
    "path": "/smile",
    "parentId": null,
    "deep": 0,
    "children": [
      {
        "id": "smileIndex",
        "path": "/smile/index",
        "test": true,
        "parentId": "smile",
        "deep": 1,
        "leaf": true
      }
    ]
  }
]
```
:::

[lodash.clonedeep]: https://www.npmjs.com/package/lodash.clonedeep
