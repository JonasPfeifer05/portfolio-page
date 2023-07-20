<template>
  <div
    id="main"
    class="vw-100"
    :class="theme.bgPrimary()"
  >
    <menubar />
    <greeting />
  </div>
</template>

<script setup>
import {theme} from "@/store/theme";
import Menubar from "@/components/Menubar.vue";
import Greeting from "@/components/Greeting.vue";
</script>

<style scoped lang="scss">
</style>
