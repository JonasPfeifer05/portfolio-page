<template>
	<div id="greetingAnchor" class="anchor"></div>
	<div id="greeting" class="vw-100 d-flex align-items-center justify-content-center">
		<pre id="greetingText" class="text-center" :class="theme.textColor()">
Hi,
Im Jonas!
    </pre
		>
	</div>
</template>

<script setup>
import { theme } from "@/store/theme";
</script>

<style scoped lang="scss">
@import "@/assets/style";

#greeting {
	height: $pageSize;

	background: url("@/assets/wave-haikei.svg#svgView(preserveAspectRatio(none))") center center no-repeat;
	background-size: 100% 100%;
}

#greetingText {
	font-size: 10vh;
}
</style>
