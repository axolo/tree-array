# 树过滤

```js
treeFilter(tree, condition, [options])
```

从树中按条件过滤得到一棵新的树。其中，过滤条件为一个函数，如：`node => !node.hide`。

::: tip 深拷贝
推荐使用 [lodash.clonedeep] 深拷贝，以避免原始数据遭到不必要的篡改。
:::

## 参数

|    参数     |    类型    | 默认 |                  说明                  |
| ----------- | ---------- | ---- | -------------------------------------- |
| `tree`      | `array`    |      | [树状结构数据](./param.md#tree)        |
| `condition` | `function` |      | 过滤条件函数，如：`node => !node.hide` |
| `options`   | `object`   |      | [配置选项](./param.md#options)         |

## 返回

| 参数 |  类型   |       说明       |
| ---- | ------- | ---------------- |
| *    | `array` | 过滤后得到的新树 |

## 示例

::: code-group
```js [调用]
import cloneDeep from 'lodash.clonedeep'
import { treeFilter } from '@axolo/tree-array'

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

treeFilter(cloneDeep(tree), i => !i.test) // new tree
```

```json [结果]
[{
  "id": "home",
  "path": "/home",
  "parentId": null
}, {
  "id": "chart",
  "path": "/chart",
  "parentId": null,
  "children": [{
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
  }, {
    "id": "chartReview",
    "path": "/chart/review",
    "parentId": "chart"
  }, {
    "id": "chartProject",
    "path": "/chart/project",
    "parentId": "chart",
    "children": [{
      "id": "chartProjectMy",
      "path": "/chart/project/my",
      "parentId": "chartProject",
      "children": [{
        "id": "chartProjectMyOne",
        "path": "/chart/project/my/one",
        "parentId": "chartProjectMy"
      }, {
        "id": "chartProjectMyTwo",
        "path": "/chart/project/my/two",
        "parentId": "chartProjectMy"
      }]
    }]
  }]
}, {
  "id": "smile",
  "path": "/smile",
  "parentId": null
}]
```
:::

[lodash.clonedeep]: https://www.npmjs.com/package/lodash.clonedeep
