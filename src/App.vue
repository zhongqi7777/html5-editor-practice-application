<template>
  <div class="html5builder">
    <div id="gjs"></div>
  </div>
</template>

<script>
import html5builder from "./components/html5builder/src/index";

export default {
  name: "App",
  components: {},
  mounted() {
    html5builder.init({
      // showOffsets: 1,
      // noticeOnUnload: 0,
      container: "#gjs",
      height: "100%",
      // fromElement: true,
      // storageManager: { autoload: 0 },
    });
  },
};
</script>

<style lang="scss">
@import "./components/html5builder/src/styles/scss/main.scss";
.html5builder {
  height: 100%;
  margin: 0;
}
</style>
