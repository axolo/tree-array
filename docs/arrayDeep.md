# 列表树深度

```js
arrayDeep(array, [options], [deep = 1])
```

获取列表树状关系的最大深度。

## 参数

|   参数    |   类型   | 默认 |               说明               |
| --------- | -------- | ---- | -------------------------------- |
| `array`   | `array`  |      | [列表结构数据](./param.md#array) |
| `options` | `object` |      | [配置选项](./param.md#options)   |
| `deep`    | `number` | `1`  | 初始深度，以此基础累加到最大深度 |

## 返回

| 参数 |   类型   |         说明         |
| ---- | -------- | -------------------- |
| *    | `number` | 列表树状关系最大深度 |

## 示例

::: code-group
```js [调用]
import { arrayDeep } from '@axolo/tree-array'

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

arrayDeep(array) // 4
```

```json [结果]
4
```
:::
