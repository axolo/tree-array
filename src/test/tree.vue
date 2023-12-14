<script>
import JsonEditor from '@axolo/json-editor-vue'
import tree from './data-tree.json'

export default {
  components: {
    JsonEditor
  },
  data() {
    return {
      tree
    }
  }
}
</script>

<template>
  <json-editor v-model="tree" codec readonly dark />
</template>
