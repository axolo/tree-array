<script>
import JsonEditor from '@axolo/json-editor-vue'
import array from './data-array.json'

export default {
  components: {
    JsonEditor
  },
  data() {
    return {
      array
    }
  }
}
</script>

<template>
  <json-editor v-model="array" codec readonly dark />
</template>
