<template>
	<div class="technology w-100 d-flex justify-content-around">
		<div class="icon w-25 d-flex flex-column align-items-center gap-4">
			<div class="technology-title" :class="theme.textColor()">{{ props.title }}</div>
			<div class="h-100">
				<slot name="img" />
			</div>
		</div>
		<div class="what w-25 d-flex flex-column align-items-center gap-4">
			<div class="technology-title" :class="theme.textColor()">What Is {{ props.title }}?</div>
			<div class="technology-text" :class="theme.textColor()">
				<slot name="what" />
			</div>
		</div>
		<div class="why w-25 d-flex flex-column align-items-center gap-4">
			<div class="technology-title" :class="theme.textColor()">Why use {{ props.title }}?</div>
			<div class="technology-text" :class="theme.textColor()">
				<slot name="why" />
			</div>
		</div>
	</div>
</template>
<script setup lang="ts">
import { theme } from "@/store/theme";

interface Props {
	title: string;
}

const props = defineProps<Props>();
</script>

<style lang="scss">
@import "src/assets/style";
.technology {
	height: calc($pageSize / 2);
}

.icon {
	img {
		width: 250px;
		aspect-ratio: 1;

		border-radius: 50%;
	}
}

.technology-title {
	font-size: 3vh;
	font-weight: 500;
}

.technology-text {
	font-size: 2vh;
	text-align: justify;
}
</style>
