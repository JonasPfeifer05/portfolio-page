<template>
  <div
    id="content"
    class="vw-100 d-flex align-items-center justify-content-center"
  >
    <pre
      id="greeting"
      class="text-center"
      :class="theme.textColor()"
    >
Hi,
Im Jonas!
    </pre>
  </div>
</template>

<script setup>

import {theme} from "@/store/theme";
</script>


<style scoped lang="scss">
@import "@/assets/style";

#content {
  height: $pageSize;

  background: url("@/assets/wave-haikei.svg#svgView(preserveAspectRatio(none))") center center no-repeat;
  background-size: 100% 100%;
}

#greeting {
  font-size: 10vh;
}
</style>