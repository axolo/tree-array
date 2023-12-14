<script>
import JsonEditor from '@axolo/json-editor-vue'
import treeArray from '../lib'
import array from './data-array.json'

export default {
  components: {
    JsonEditor
  },
  data() {
    return {
      tree: treeArray.array2tree(array)
    }
  }
}
</script>

<template>
  <json-editor v-model="tree" codec readonly dark />
</template>
