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
      parents: treeArray.arrayParents('chartIndexActiveMy', array)
    }
  }
}
</script>

<template>
  <json-editor v-model="parents" codec readonly dark />
</template>
