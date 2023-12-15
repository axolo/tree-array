<script>
import JsonEditor from '@axolo/json-editor-vue'
import { tree2array } from '../lib'
import tree from './data-tree.json'

export default {
  components: {
    JsonEditor
  },
  data() {
    return {
      array: tree2array(tree)
    }
  }
}
</script>

<template>
  <json-editor v-model="array" codec readonly dark />
</template>
