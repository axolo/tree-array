# tree-array

An array have children key and parentId key like tree.

- Read [docs] for help more
- Use [lodash.clonedeep] to keep data raw
- May not be suitable for big data

## install

```shell
npm i @axolo/tree-array
```

## usage

```js
import { tree2array, array2tree } from '@axolo/tree-array'
const tree = array2tree([/* array */])
const array = tree2array([/* tree */])
```

> Vue CLI

By default `babel-loader` ignores all files inside `node_modules`.
You can enable [transpileDependencies] to avoid unexpected untranspiled code from third-party dependencies.

```js
// vue.config.js
module.exports = {
  transpileDependencies: ['@axolo/tree-array']
}
```

> CommonJS

ES Modules is not supported in CommonJS. You can use UMD version.

```js
const { tree2array, array2tree } = require('@axolo/tree-array/dist/index.umd.cjs')
const tree = array2tree(tree2array([/* tree */]))
```

## api

|                 function                  | return |                                    description                                    |
| ----------------------------------------- | ------ | --------------------------------------------------------------------------------- |
| `randomId(prefix = '')`                   | string | generate random id with prefix, like `i_9fang05da21`                              |
| `array2tree(array, [options])`            | array  | array to tree with leaf and deep                                                  |
| `arrayDeep(array, [options], [deep = 1])` | int    | get max deep of array                                                             |
| `arrayTrace(array, id, [options])`        | array  | trace source of node by id from array, like `[object1, object12, object121]`      |
| `arrayNode(array, id, [options])`         | array  | get path of id from array by id, like `[id1, id12, id121]`                        |
| `tree2array(tree, [options])`             | array  | tree to array and generate id, parentId and leaf when undefined                   |
| `treeDeep(tree, [options], [deep = 1])`   | int    | get max deep of tree                                                              |
| `treeFilter(tree, condition, [options])`  | array  | get new tree filter by condition function like `node => !node.hide`               |
| `treePath(tree, id, [options])`           | array  | get path of index from tree by id, like `[0, 2, 1]`                               |
| `treeNode(tree, id, [options])`           | array  | get path of id from tree by id, like `[id1, id12, id121]`                         |
| `treeTrace(tree, id, [options])`          | array  | get path of node as object from tree by id, like `[object1, object12, object121]` |
| `treeSub(tree, id, [options])`            | object | get sub tree by id, like `{ id, parentId, children: [] }`                         |

## options

|   params    |  type  | default  |   description   |
| ----------- | ------ | -------- | --------------- |
| idKey       | string | id       | key of id       |
| parentKey   | string | parentId | key of parentId |
| childrenKey | string | children | key of children |
| leafKey     | string | leaf     | key of leaf     |
| leafValue   | any    | true     | value of leaf   |
| deepKey     | string | deep     | key of deep     |
| deepValue   | number | 0        | value of deep   |

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
  "test": true,
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
    "test": true,
    "parentId": "smile"
  }]
}]
```

> Yueming Fang
> 2022-09-04

[docs]: https://axolo.github.io/tree-array/
[lodash.clonedeep]: https://www.npmjs.com/package/lodash.clonedeep
[transpileDependencies]: https://cli.vuejs.org/config/#transpiledependencies
