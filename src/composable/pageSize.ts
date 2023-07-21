import { onMounted, onUnmounted, reactive } from "vue";

export function usePageSize() {
	const pageSize = reactive({
		value: 0,
	});

	function update() {
		pageSize.value = window.innerHeight - 80;
	}

	update();

	onMounted(() => window.addEventListener("resize", update));
	onUnmounted(() => window.removeEventListener("resize", update));

	return pageSize;
}
