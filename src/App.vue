<template>
	<menubar />
	<div id="main" data-bs-target="#navbar" data-bs-spy="scroll" class="vw-100" :class="theme.bgPrimary()">
		<greeting />
		<about-me />
		<contact-me></contact-me>
	</div>
</template>

<script setup>
import { theme } from "@/store/theme";
import Menubar from "@/components/Menubar.vue";
import Greeting from "@/components/Greeting.vue";
import AboutMe from "@/components/AboutMe.vue";
import ContactMe from "@/components/ContactMe.vue";
</script>

<style lang="scss">
@import "@/assets/style";

#main {
	overflow-x: hidden;
	overflow-y: scroll;

	padding-top: $menubarHeight;
}
</style>
