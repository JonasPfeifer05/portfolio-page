<template>
  <div
    id="menubar"
    class="w-100 sticky-top d-flex justify-content-between p-3"
    :class="theme.bgSecondary()"
  >
    <div
      id="home"
      class="d-flex align-items-center"
      :class="theme.textColor()"
    >
      Home
    </div>
    <div
      id="sections"
      class="d-flex justify-content-between align-items-end gap-4"
    >
      <div
        class="section"
        :class="theme.textColor()"
      >
        About Me
      </div>
      <div
        class="section"
        :class="theme.textColor()"
      >
        What I do
      </div>
      <div
        class="section"
        :class="theme.textColor()"
      >
        Contact Me
      </div>
      <div
        class="section"
        :class="theme.textColor()"
      >
        Impress
      </div>
    </div>
  </div>
</template>

<script setup>
import {theme} from "@/store/theme";
</script>

<style scoped lang="scss">
@import "@/assets/style";
#menubar {
  height: $menubarHeight;
}

#home {
  font-size: 40px;

  font-weight: bold;

  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
}

.section {
  font-size: 22px;

  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
}
</style>