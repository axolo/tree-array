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
      node: treeArray.arrayNode(array, 'chartIndexActiveMy')
    }
  }
}
</script>

<template>
  <json-editor v-model="node" codec readonly dark />
</template>
