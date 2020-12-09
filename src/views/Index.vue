<template>
  <v-app>
    <!-- <keep-alive> -->
    <component :is="getThemeMode.layout" />
    <!-- </keep-alive> -->

    <FullscreenLoader :visible="isLoading"  />
  </v-app>
</template>

<script>
import FullscreenLoader from '@/layouts/common-drawer/FullscreenLoader'
import { mapGetters, mapActions } from 'vuex'

export default {
  name: "Index",
  components: {
    FullscreenLoader
  },
  computed: {
    ...mapGetters(['getThemeMode', 'isLoading']),
  },
  methods: {
    ...mapActions(['intercept'])
  },
  created() {
    this.intercept()
  }
};
</script>
