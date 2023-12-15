<script>
import JsonEditor from '@axolo/json-editor-vue'
import { arrayNode } from '../lib'
import array from './data-array.json'

export default {
  components: {
    JsonEditor
  },
  data() {
    return {
      node: arrayNode(array, 'chartIndexActiveMy')
    }
  }
}
</script>

<template>
  <json-editor v-model="node" codec readonly dark />
</template>
