import { onMounted, ref } from "vue";

export function usePageSize() {
	const pageSize = ref(0);

	function update() {
		pageSize.value = window.innerHeight - 80;
	}

	update();

	onMounted(() => window.addEventListener("resize", update));
	onMounted(() => window.removeEventListener("resize", update));

	return pageSize;
}
