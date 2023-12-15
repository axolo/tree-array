<script>
import JsonEditor from '@axolo/json-editor-vue'
import { treeNode } from '../lib'
import tree from './data-tree.json'

export default {
  components: {
    JsonEditor
  },
  data() {
    return {
      node: treeNode(tree, 'chartProjectMyTwo')
    }
  }
}
</script>

<template>
  <json-editor v-model="node" codec readonly dark />
</template>
