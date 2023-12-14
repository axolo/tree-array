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
      path: treeArray.treePath(tree, 'chartProjectMyTwo')
    }
  }
}
</script>

<template>
  <json-editor v-model="path" codec readonly dark />
</template>
