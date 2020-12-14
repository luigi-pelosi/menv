<template>
  <v-snackbar
      :timeout="timeout"
      :value="true"
      :color="color"
      :outlined="outlined"
      :absolute="absolute"
      :right="right"
      :top="top"
      :left="left"
      :bottom="bottom"
  >
    {{ message }}
  </v-snackbar>
</template>

<script>
export default {
  name: "Snackbar",
  props: {
    value: { type: Boolean, default: false },
    timeout: { type: Number, default: -1 },
    color: { type: String, default: 'warning' },
    outlined: { type: Boolean, default: false },
    absolute: { type: Boolean, default: true },
    right: { type: Boolean, default: true },
    top: { type: Boolean, default: true },
    left: { type: Boolean, default: false },
    bottom: { type: Boolean, default: false },
    message: { type: String, default: '' },
  }
}
</script>

<style scoped>

</style>