<template>
	<Header />
	<main>
		<section class="flex">
			<div class="container5">
				<PasswordForm v-if="!registrationStore.passwordIsSend" />
				<CompanyForm v-else-if="registrationStore.passwordIsSend && !registrationStore.companyIsRegistered" />
				<CompanyRegistered v-else />
			</div>
		</section>
	</main>
	<Footer />
</template>

<script setup>
import { onMounted, reactive } from 'vue';
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';
import PasswordForm from './components/PasswordForm.vue';
import CompanyForm from './components/CompanyForm.vue';
import { useRegistrationStore } from './stores/registrationStore';
import CompanyRegistered from './components/CompanyRegistered.vue';

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
