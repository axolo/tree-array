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
      deep: treeArray.arrayDeep(array)
    }
  }
}
</script>

<template>
  <json-editor v-model="deep" codec readonly dark />
</template>
