<script>
import JsonEditor from '@axolo/json-editor-vue'
import treeArray from '../lib'
import tree from './data-tree.json'

export default {
  components: {
    JsonEditor
  },
  data() {
    return {
      node: treeArray.treeNode(tree, 'chartProjectMyTwo')
    }
  }
}
</script>

<template>
  <json-editor v-model="node" codec readonly dark />
</template>
