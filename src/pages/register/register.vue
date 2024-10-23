<template>
	<Header />
	<main>
		<section class="flex">
			<div class="container5">
				<EmailForm v-if="!registrationStore.emailIsSend" />
				<EmailSend v-else />
			</div>
		</section>
	</main>
	<Footer />
</template>

<script setup>
import { onMounted, reactive } from 'vue';
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';
import EmailForm from './components/emailForm.vue';
import EmailSend from './components/emailSend.vue';
import { useRegistrationStore } from './stores/registrationStore';

const registrationStore = useRegistrationStore();

const state = reactive({
	isSend: false
});

onMounted(() => {
	registrationStore.emailIsSend = false;
});

</script>

<style>
.intro {
	margin: 10px 0;
	padding: 4px;
	font-size: 0.8em;

}
</style>
