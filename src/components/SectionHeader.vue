<template>
	<div id="header" :class="theme.textColor()" class="w-100 d-flex justify-content-center align-items-center gap-3">
		<slot />
	</div>
</template>

<script setup>
import { theme } from "@/store/theme";
</script>

<style scoped lang="scss">
#header {
	height: 20%;

	font-size: 4vh;

	font-weight: 450;
}
</style>
