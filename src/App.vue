
<template>
  <router-view />
</template>

<script>
export default {
  name: "App",
  metaInfo() {
    return {
      // if no subcomponents specify a metaInfo.title, this title will be used
      title: "Arctic Admins",
      // all titles will be injected into this template
      titleTemplate:
        "%s | Arctic Admin - Vuejs & TailwindCSS Admin Dashboard Template Build With VuetifyJs",
    };
  },
  methods: {
    getRouterParams() {},
  },
  created() {
    this.getRouterParams();
  },
};
</script>
