<template>
	<div class="card">
		<h4>Registreren</h4>
		<p class="intro">
			stap 1/3: wie ben jij?
		</p>
		<div class="flex center">
			<input class="wdt40" type="text" id="given_name" placeholder="voornaam" v-model="state.given_name" required>
			<input class="wdt40" type="text" id="family_name" placeholder="achternaam" v-model="state.family_name" required><br>
			<input class="wdt90" type="email" id="email" placeholder="email" v-model="state.email" required><br>
			<span class="center wdt90">
				<button class="wdt40" type="submit" @click="registrationStore.emailIsSend=true">opslaan</button>
			</span>
		</div>
	</div>
</template>

<script setup>
	import { reactive } from 'vue';
	import { useRegistrationStore } from '../stores/registrationStore';

	const registrationStore = useRegistrationStore();

	// form data goes here
	const state = reactive({
	});

</script>

<style>
</style>