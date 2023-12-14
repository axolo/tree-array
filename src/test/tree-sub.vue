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
      sub: treeArray.treeSub(tree, 'chartIndex')
    }
  }
}
</script>

<template>
  <json-editor v-model="sub" codec readonly dark />
</template>
