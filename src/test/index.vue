<script>
import cloneDeep from 'lodash.clonedeep'
import VueJsonPretty from 'vue-json-pretty';
import 'vue-json-pretty/lib/styles.css';
import { name, version, homepage } from '../../package.json'
import tree from './tree.json'
import array from './array.json'
import {
  array2tree,
  arrayParents,
  arrayNode,
  arrayDeep,
  tree2array,
  treeFilter,
  treeSub,
  treeNode,
  treePath,
  treeDeep
} from '../lib'

export default {
  components: {
    VueJsonPretty
  },
  data() {
    return {
      name,
      version,
      homepage,
      index: 0,
      tests:[
        { name: 'array', result: array },
        { name: 'array2tree', result: array2tree(cloneDeep(array)) },
        { name: 'arrayParents', result: arrayParents('chartIndexActiveMy', array) },
        { name: 'arrayNode', result: arrayNode(array, 'chartIndexActiveMy') },
        { name: 'arrayDeep', result: arrayDeep(array) },
        { name: 'tree', result: tree },
        { name: 'tree2array', result: tree2array(tree) },
        { name: 'treeFilter', result: treeFilter(cloneDeep(tree), i => !i.test) },
        { name: 'treeSub', result: treeSub(tree, 'chartIndex') },
        { name: 'treeNode', result: treeNode(tree, 'chartProjectMyTwo') },
        { name: 'treePath', result: treePath(tree, 'chartProjectMyTwo') },
        { name: 'treeDeep', result: treeDeep(tree) },
        { name: 'tree2array2tree', result: array2tree(tree2array(cloneDeep(tree))) }
      ]
    }
  }
}
</script>

<template>
  <div class="tree-array">
    <div class="head">
      <h3>
        <a :href="homepage" target="_blank">{{ name }}</a>
      </h3>
      <div class="tip">
        Use <a href="https://www.npmjs.com/package/lodash.clonedeep" target="_blank">lodash.clonedeep</a> to keep data raw.
        Read <a href="https://github.com/axolo/tree-array">docs</a> for help more.
      </div>
      <div class="navi">
        <ul>
          <li
            v-for="(item, i) in tests"
            :key="i"
            :class="{ active: index === i }"
            @click="index = i"
          >
            {{ item.name }}
          </li>
        </ul>
      </div>
    </div>

    <div class="body">
      <vue-json-pretty :data="tests[index].result" />
    </div>

    <address class="foot">{{ `${name}@${version}` }}</address>
  </div>
</template>

<style lang="scss">
.tree-array {
  .head {
    position: sticky;
    z-index: 20;
    top: 0;
    background-color: #fff;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    gap: 1rem;
    h3 {
      margin: 0;
      a {
        color: #333;
        text-decoration: none;
      }
    }
    .tip {
      color: #666;
      font-style: italic;
      font-size: 0.9rem;
    }
    .navi {
      ul {
        margin: 0;
        padding: 0;
        list-style: none;
        display: flex;
        justify-content: space-between;
        align-items: center;
        li {
          flex: auto;
          cursor: pointer;
          padding: 0.25rem 0.5rem;
          display: inline-block;
          text-align: center;
          border: 1px solid#666;
          color: #fff;
          background-color: #666;
        }
        li.active {
          color: #666;
          background-color: #fff;
        }
      }
    }
  }
  .body {
    max-height: 40rem;
    padding: 0.5rem;
    overflow-y: scroll;
    border-radius: 0.25rem;
    background-color: #f8f8f8;
  }
  .foot {
    margin: 1rem 0;
    color: #666;
    font-size: small;
    font-style: normal;
  }
}
</style>
