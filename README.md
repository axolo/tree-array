# tree-array

An array have children key and parentId key like tree.

## install

```shell
npm i @axolo/tree-array
```

## usage

```js
const { tree2array, array2tree, arrayParents } = require('@axolo/tree-array')
const array = array2tree([])
const tree = tree2array([])
const parents = arrayParents(childId, [])
```

## api

### array2tree(array, [options])

array to tree

### tree2array(tree, [options])

tree to array

### arrayParents(childId, array, [options])

find parents from array by child id

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
[
  {
    "id": "cGPj-b7iPQ9W",
    "path": "/chart/idea",
    "parentId": "bbAUr0bCxmdm"
  },
  {
    "id": "zE07BbAW4uCe",
    "parentId": null
  },
  {
    "id": "mOV9CkWOdQTy",
    "path": "/project/index",
    "parentId": "zE07BbAW4uCe"
  },
  {
    "id": "BhC4UQdkw8CC",
    "path": "/chart/review",
    "parentId": "zE07BbAW4uCe"
  },
  {
    "id": "lTsDaSpN0MRI",
    "parentId": null
  },
  {
    "id": "E_Udsc9ueYIL",
    "path": "/smile/index",
    "query": "",
    "parentId": "lTsDaSpN0MRI"
  },
  {
    "id": "R5S4lIp7GLDv",
    "path": "/chart/index",
    "parentId": "zE07BbAW4uCe"
  },
  {
    "id": "V1StGXR8",
    "path": "/chart/index/active",
    "parentId": "R5S4lIp7GLDv"
  }
]
```

### tree

```json
[
  {
    "id": "cGPj-b7iPQ9W",
    "path": "/chart/idea",
    "parentId": "bbAUr0bCxmdm"
  },
  {
    "id": "zE07BbAW4uCe",
    "parentId": null,
    "children": [
      {
        "id": "R5S4lIp7GLDv",
        "path": "/chart/index",
        "parentId": "zE07BbAW4uCe",
        "children": [
          {
            "id": "V1StGXR8",
            "path": "/chart/index/active",
            "parentId": "R5S4lIp7GLDv"
          }
        ]
      },
      {
        "id": "BhC4UQdkw8CC",
        "path": "/chart/review",
        "parentId": "zE07BbAW4uCe"
      },
      {
        "id": "mOV9CkWOdQTy",
        "path": "/project/index",
        "parentId": "zE07BbAW4uCe"
      }
    ]
  },
  {
    "id": "lTsDaSpN0MRI",
    "parentId": null,
    "children": [
      {
        "id": "E_Udsc9ueYIL",
        "path": "/smile/index",
        "query": "",
        "parentId": "lTsDaSpN0MRI"
      }
    ]
  }
]
```


> Yueming Fang
> 2022-09-04
