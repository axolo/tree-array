# tree-array

An array have children key and parentId key like tree.

## install

```shell
npm i @axolo/tree-array
```

## usage

```js
const { tree2array, array2tree } = require('@axolo/tree-array')
const array = array2tree([/* array */])
const tree = tree2array([/* tree */])
```

## api

### array2tree(array, [options])

array to tree

### tree2array(tree, [options])

tree to array

### arrayParents(childId, array, [options])

find parents from array by child id

### treeDeep(tree, [options], [deep = 1])

get max deep of tree

### arrayDeep(array, [options], [deep = 1])

get max deep of array

### treePath(tree, id, [options])

get path of index from tree by id

### treeNode(tree, id, [options])

get path of id from tree by id

## options

  params    |  type  | default  | description
----------- | ------ | -------- | -----------
idKey       | string | id       | key of id
parentKey   | string | parentId | key of parentId
childrenKey | string | children | key of children
leafKey     | string | leaf     | key of leaf
leafValue   | any    | true     | value of leaf

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
