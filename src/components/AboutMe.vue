<template>
	<div id="aboutMeAnchor" class="anchor" />
	<div id="aboutMe" class="w-100" ref="aboutMe">
		<div id="blob-1" class="w-100 h-100">
			<section-header>
				About Me
				<img id="portrait" src="@/assets/portrait.jpg" alt="Portrait of Jonas" />
			</section-header>

			<div id="stories" class="w-100 d-flex justify-content-center gap-5">
				<story>
					<template #title> School Life 🏫</template>
					<template #content>
						Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et
						accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing
						elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita
						kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
					</template>
				</story>
				<story>
					<template #title> Private Life 🔏</template>
					<template #content>
						Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et
						accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing
						elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita
						kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
					</template>
				</story>
			</div>
		</div>
	</div>
</template>

<script setup>
import { theme } from "@/store/theme";
import SectionHeader from "@/components/SectionHeader.vue";
import Story from "@/components/Story.vue";
</script>

<style scoped lang="scss">
@import "@/assets/style";

#aboutMe {
	height: $pageSize;

	background: url("@/assets/blob-0.svg#svgView(preserveAspectRatio(none))") center center no-repeat;
	background-size: 40vw 70vh;
	background-position-x: -20vw;
	background-position-y: 30vh;
}

#blob-1 {
	background: url("@/assets/blob-1.svg#svgView(preserveAspectRatio(none))") center center no-repeat;
	background-size: 30vw 50vh;
	background-position-x: 85vw;
	background-position-y: 0vh;
}

#portrait {
	width: 150px;
	height: 150px;

	border-radius: 50%;
}

#stories {
	height: 80%;
}
</style>
