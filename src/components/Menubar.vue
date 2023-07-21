<template>
	<nav id="navbar" class="w-100 fixed-top d-flex justify-content-between p-3" :class="theme.bgSecondary()">
		<a id="home" class="d-flex align-items-center nav-link" :class="theme.textColor()" href="#greetingAnchor">Home</a>
		<div id="sections" class="d-flex justify-content-between align-items-end gap-4">
			<a
				:href="section.anchor"
				:key="section.name"
				v-for="section of sections"
				class="section nav-link"
				:class="[theme.textColor(), scroll_y + pageSize.value * 0.8 > section.start && scroll_y + pageSize.value * 0.8 <= section.end ? 'active' : '']"
			>
				{{ section.name }}</a
			>
		</div>
	</nav>
</template>

<script setup lang="ts">
import { useScroll } from "../composable/scroll";
import { usePageSize } from "../composable/pageSize";
import { onMounted, type Ref, ref, watch } from "vue";
import { theme } from "../store/theme";

const scroll_y = useScroll();

const pageSize = usePageSize();

const sections: Ref<
	{
		name: string;
		anchor: string;
		start: number;
		end: number;
	}[]
> = ref([]);

function calcSections() {
	sections.value = [
		{
			name: "About Me",
			anchor: "#aboutMeAnchor",
			start: pageSize.value * 1,
			end: pageSize.value * 2,
		},
		{
			name: "What I Do",
			anchor: "#whatIDoAnchor",
			start: pageSize.value * 2,
			end: pageSize.value * 5 + pageSize.value * 0.2,
		},
		{
			name: "Contact Me",
			anchor: "#contactMeAnchor",
			start: pageSize.value * 5 + pageSize.value * 0.2,
			end: pageSize.value * 6 + pageSize.value * 0.2,
		},
	];
	console.log(sections);
}

onMounted(() => calcSections());

watch(pageSize, () => {
	calcSections();
});
</script>

<style scoped lang="scss">
@import "@/assets/style";

#navbar {
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

	padding: 5px 15px;

	border-radius: 10px;
	transition-duration: 500ms;

	&:hover {
		text-decoration: underline;
	}
}

.active {
	background: #0066ff;
}
</style>
