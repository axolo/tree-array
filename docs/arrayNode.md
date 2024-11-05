# 列表溯源主键

```js
arrayNode(array, id, [options])
```

根据主键的值从列表中溯源，返回**从根到自身**顺序的主键数组，如：`[id1, id12, id121]`。

## 参数

|   参数    |   类型   | 默认 |                        说明                         |
| --------- | -------- | ---- | --------------------------------------------------- |
| `array`   | `array`  |      | [列表结构数据](./param.md#array)                    |
| `id`      | `any`    |      | [主键](./param.md#id)的值，如：`chartIndexActiveMy` |
| `options` | `object` |      | [配置选项](./param.md#options)                      |

## 返回

| 参数 |  类型   |             说明             |
| ---- | ------- | ---------------------------- |
| *    | `array` | 从根到自身顺序溯源的主键数组 |

## 示例

::: code-group
```js [调用]
import { arrayNode } from '@axolo/tree-array'

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

arrayNode(array, 'chartIndexActiveMy') // array of id
```

```json [结果]
[
  "chart",
  "chartIndex",
  "chartIndexActive",
  "chartIndexActiveMy"
]
```
:::
