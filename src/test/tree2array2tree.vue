<script>
import JsonEditor from '@axolo/json-editor-vue'
import { array2tree, tree2array } from '../lib'
import tree from './data-tree.json'

export default {
  components: {
    JsonEditor
  },
  data() {
    return {
      result: array2tree(tree2array(tree))
    }
  }
}
</script>

<template>
  <json-editor v-model="result" codec readonly dark />
</template>
