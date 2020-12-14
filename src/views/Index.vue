<template>
  <v-app>
    <!-- <keep-alive> -->
    <component :is="getThemeMode.layout" />
    <!-- </keep-alive> -->

    <BaseFullscreenLoader :visible="isLoading"  />
  </v-app>
</template>

<script>
import axios from '@/plugins/axios'
import { mapGetters, mapActions } from 'vuex'

export default {
  name: "Index",
  computed: {
    ...mapGetters(['getThemeMode', 'isLoading', 'token']),
  },
  methods: {
    ...mapActions(['intercept'])
  },
  created() {
    axios.tokenize(this.token)
    this.intercept()
  }
};
</script>
