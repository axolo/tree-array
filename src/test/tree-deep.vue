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
      deep: treeArray.treeDeep(tree)
    }
  }
}
</script>

<template>
  <json-editor v-model="deep" codec readonly dark />
</template>
