<template>
	<div id="contactMeAnchor" class="anchor"></div>
	<div id="contactMe" class="w-100 d-flex flex-column align-items-center gap-4">
		<section-header> Contact Me 📚</section-header>
		<div>
			<div class="text-center idea" :class="theme.textColor()">Have an idea for a software product?</div>
			<div class="text-center writeMe" :class="theme.textColor()">Write me a message! 🥳</div>
		</div>
		<div class="d-flex flex-column align-items-center gap-2 w-100">
			<div class="mail" :class="theme.textColor()">Mail: <a href="mailto:jonas@pfeifer.at">jonas@pfeifer.at</a></div>
			<div class="or" :class="theme.textColor()">Or directly from here:</div>
			<div class="d-flex flex-column gap-1 form">
				<input v-model="email" class="form-control" placeholder="Your Email:" @keydown.enter="sendRequest" />
				<textarea v-model="request" class="form-control" rows="4" placeholder="Your Request:" />
				<button class="btn btn-success mt-2" @click="sendRequest">Send Request ✈</button>
			</div>
		</div>
	</div>
	<div class="w-100 d-flex justify-content-center"></div>
</template>

<script setup lang="ts">
import SectionHeader from "../components/SectionHeader.vue";
import { ref } from "vue";
import { theme } from "../store/theme";

const email = ref("");
const request = ref("");

function sendRequest(): void {
	if (!email.value || !request.value) return;
	email.value = "";
	request.value = "";
}
</script>

<style scoped lang="scss">
@import "@/assets/style";
#contactMe {
	height: $pageSize;
}

.idea {
	font-size: 3vh;
}

.writeMe {
	font-size: 2.2vh;
}

.mail {
	font-size: 2.2vh;
}

.or {
	font-size: 1.7vh;
}

.form {
	width: 15%;
}
</style>
