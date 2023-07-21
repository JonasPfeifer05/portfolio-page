<template>
	<div id="header" :class="theme.textColor()" class="w-100 d-flex justify-content-center align-items-center gap-3">
		<slot />
	</div>
</template>

<script setup>
import { theme } from "@/store/theme";
</script>

<style scoped lang="scss">
@import "src/assets/style.scss";
#header {
	height: calc($pageSize * 0.2);

	font-size: 4vh;

	font-weight: 500;
}
</style>
