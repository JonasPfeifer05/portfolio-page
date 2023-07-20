import { onMounted, onUnmounted, ref } from "vue";

export function useScroll() {
	const y = ref(0);

	function update(): void {
		y.value = window.top.scrollY;
	}

	onMounted(() => window.addEventListener("scroll", update));
	onUnmounted(() => window.removeEventListener("scroll", update));

	return y;
}
