# tree-array

An array have children key and parentId key like tree.

## install

```shell
npm i @axolo/tree-array
```

## usage

```js
import { tree2array, array2tree } from '@axolo/tree-array'
const array = array2tree([/* array */])
const tree = tree2array([/* tree */])
```

> use as CommonJS

```js
const { tree2array, array2tree } = require('@axolo/tree-array/dist/index.umd.cjs')
const array = array2tree(tree2array([/* tree */]))
```

## api

|                 function                  | return |                        description                         |
| ----------------------------------------- | ------ | ---------------------------------------------------------- |
| `array2tree(array, [options])`            | tree   | array to tree with leaf and deep                           |
| `arrayDeep(array, [options], [deep = 1])` | int    | get max deep of array                                      |
| `arrayNode(array, id, [options])`         | array  | get path of id from array by id, like `[id1, id12, id121]` |
| `arrayParents(id, array, [options])`      | array  | find parents from array by id                              |
| `tree2array(tree, [options])`             | array  | tree to array                                              |
| `treeDeep(tree, [options], [deep = 1])`   | int    | get max deep of tree                                       |
| `treeNode(tree, id, [options])`           | array  | get path of id from tree by id, like `[id1, id12, id121]`  |
| `treePath(tree, id, [options])`           | array  | get path of index from tree by id, like `[0, 2, 1]`        |
| `treeSub(tree, id, [options])`            | object | get sub tree by id, like `{ id, parentId, children: [] }`  |

## options

  params    |  type  | default  | description
----------- | ------ | -------- | -----------
idKey       | string | id       | key of id
parentKey   | string | parentId | key of parentId
childrenKey | string | children | key of children
leafKey     | string | leaf     | key of leaf
leafValue   | any    | true     | value of leaf
deepKey     | string | deep     | key of deep
deepValue   | number | 0        | value of deep

## data

The data format **MUST** like example with key defined in options.

### array

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
  "query": "test",
  "parentId": "smile"
}]
```

### tree

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
    "query": "test",
    "parentId": "smile"
  }]
}]
```

> Yueming Fang
> 2022-09-04
