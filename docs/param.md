# 通用参数

在功能函数中经常会见以下通用参数：

|  名称   |     说明     |
| ------- | ------------ |
| options | 配置选项     |
| array   | 列表结构数据 |
| tree    | 树状结构数据 |

## options

配置选项是 `key-value` 形式的键值对，用于动态定义数据的关键键名。

|    参数     |  类型  |  默认值  |    说明    |
| ----------- | ------ | -------- | ---------- |
| idKey       | string | id       | 主键名     |
| parentKey   | string | parentId | 父键名     |
| childrenKey | string | children | 子键名     |
| leafKey     | string | leaf     | 叶子键名   |
| leafValue   | any    | true     | 叶子值     |
| deepKey     | string | deep     | 深度键名   |
| deepValue   | number | 0        | 根级深度值 |

当对应键被定义时，其定义值覆盖默认值；键未定义的仍使用键默认值。如：

```js
{
  idKey: 'key',
  parentKey: 'parentKey',
  leafKey: 'isLeaf',
  deepKey: 'level',
  deepValue: 1
}
```

## array

列表数据结构，示例如下：

```json
[{
  "id": "chart",
  "path": "/chart",
  "parentId": null
}, {
  "id": "chartIndex",
  "path": "/chart/index",
  "parentId": "chart"
}, {
  "id": "chartIndexActive",
  "path": "/chart/index/active",
  "parentId": "chartIndex"
}, {
  "id": "chartIndexActiveMy",
  "path": "/chart/index/active/my",
  "parentId": "chartIndexActive"
}, {
  "id": "chartReview",
  "path": "/chart/review",
  "parentId": "chart"
}, {
  "id": "chartProject",
  "path": "/chart/project",
  "parentId": "chart"
}, {
  "id": "smile",
  "path": "/smile",
  "parentId": null
}, {
  "id": "smileIndex",
  "path": "/smile/index",
  "test": true,
  "parentId": "smile"
}]
```

## tree

树状结构数据，示例如下：

```json
[{
  "id": "chart",
  "path": "/chart",
  "parentId": null,
  "children": [{
    "id": "chartIndex",
    "path": "/chart/index",
    "parentId": "chart",
    "children": [{
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
    "parentId": "chart"
  }]
}, {
  "id": "smile",
  "path": "/smile",
  "parentId": null,
  "children": [{
    "id": "smileIndex",
    "path": "/smile/index",
    "test": true,
    "parentId": "smile"
  }]
}]
```
