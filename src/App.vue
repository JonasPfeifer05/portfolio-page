<template>
  <div
    id="main"
    class="vw-100 vh-100"
    :class="theme.bgPrimary()"
  />
</template>

<script setup>
import {theme} from "@/store/theme";
</script>

<style scoped lang="scss">
</style>
