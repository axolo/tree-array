<script>
import { name, version, homepage } from '../package.json'
import TestArray from './test/array.vue'
import TestArray2tree from './test/array2tree.vue'
import TestArrayParents from './test/array-parents.vue'
import TestArrayNode from './test/array-node.vue'
import TestArrayDeep from './test/array-deep.vue'
import TestTree from './test/tree.vue'
import TestTree2array from './test/tree2array.vue'
import TestTreeSub from './test/tree-sub.vue'
import TestTreeNode from './test/tree-node.vue'
import TestTreeDeep from './test/tree-deep.vue'
import TestTreePath from './test/tree-path.vue'
import TestTree2array2tree from './test/tree2array2tree.vue'

export default {
  components: {
    TestArray,
    TestArray2tree,
    TestArrayParents,
    TestArrayNode,
    TestArrayDeep,
    TestTree,
    TestTree2array,
    TestTreeSub,
    TestTreeNode,
    TestTreePath,
    TestTreeDeep,
    TestTree2array2tree,
  },
  data() {
    return {
      name,
      version,
      homepage,
      active: 0,
      tests: [
        { name: 'array', component: 'test-array' },
        { name: 'array2tree', component: 'test-array2tree' },
        { name: 'arrayParents', component: 'test-array-parents' },
        { name: 'arrayNode', component: 'test-array-node' },
        { name: 'arrayDeep', component: 'test-array-deep' },
        { name: 'tree', component: 'test-tree' },
        { name: 'tree2array', component: 'test-tree2array' },
        { name: 'treeSub', component: 'test-tree-sub' },
        { name: 'treeNode', component: 'test-tree-node' },
        { name: 'treePath', component: 'test-tree-path' },
        { name: 'treeDeep', component: 'test-tree-deep' },
        { name: 'tree2array2tree', component: 'test-tree2array2tree' },
      ]
    }
  }
}
</script>

<template>
  <div class="axolo-tree-array">
    <div class="head">
      <h3>
        <a :href="homepage" target="_blank">{{ name }}</a>
      </h3>
      <div class="navi">
        <ul>
          <li
            v-for="(item, index) in tests"
            :key="index"
            :class="{ active: active === index }"
            @click="active = index"
          >
            {{ item.name }}
          </li>
        </ul>
      </div>
    </div>

    <div class="body">
      <component :is="tests[active].component" />
    </div>
    <address>{{ `${name}@${version}` }}</address>
  </div>
</template>

<style lang="scss">
body {
  margin: 0;
  padding: 0;
}
.axolo-tree-array {
  padding: 0 0.5em;
  .axolo-json-editor {
    .cm-scroller {
      font-size: 0.9em;
      font-family: Consolas, 'Courier New', Courier, monospace;
    }
  }
  .head {
    position: sticky;
    z-index: 20;
    top: 0;
    padding: 0.5em 0;
    background-color: #fff;
    a {
      text-decoration: none;
    }
  }
  .navi {
    ul {
      margin: 0;
      padding: 0.25em 0;
      list-style: none;
      display: flex;
      align-items: center;
      gap: 0.25em;
      li {
        cursor: pointer;
        display: inline-block;
        padding: 0.25em 0.75em;
        color: #fff;
        background-color: #666;
      }
      li.active {
        color: #666;
        background-color: #fff;
        border: 1px solid#666;
      }
    }
  }
  address {
    margin: 1em 0;
    color: #666;
    font-size: small;
    font-style: normal;
  }
}
</style>
