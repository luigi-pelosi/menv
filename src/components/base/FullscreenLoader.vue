<template>
  <v-overlay :value="visible" z-index="99999">
    <v-progress-circular indeterminate :size="100" :width="10" :color="progressColor"></v-progress-circular>
  </v-overlay>
</template>

<script>
export default {
  name: "FullscreenLoader",
  props: {
    visible: { type: Boolean, default: false },
    progressColor: { type: String, default: 'white' }
  }
}
</script>

<style scoped>
</style>