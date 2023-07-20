<template>
	<div class="h-100 story">
		<div class="w-100 d-flex justify-content-center align-items-center story-header" :class="theme.textColor()">
			<slot name="title" />
		</div>
		<div :class="theme.textColor()" class="content">
			<slot name="content" />
		</div>
	</div>
</template>

<script setup>
import { theme } from "@/store/theme";
</script>

<style scoped lang="scss">
.story {
	width: 35%;

	padding-top: 50px;

	.story-header {
		height: 10%;
		font-size: 3vh;
	}
}

.content {
	line-height: 1.8;
	font-size: 2vh;
	text-align: justify;
}
</style>
