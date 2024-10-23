<template>
	<div class="card">
		<h4>Registreren</h4>
		<p class="intro">
			stap 2/3: wachtwoord?
		</p>
		<p class="intro">
			je email adres is geverifieerd. Maak nu een wachtwoord aan.
		</p>
		<div class="flex center">
			<input class="wdt90" type="password" id="password" placeholder="wachtwoord" v-model="registrationStore.passwordForm.password" required>
			<span class="center wdt90">
				<button class="wdt40" type="submit" @click="registrationStore.passwordIsSend=true">opslaan</button>
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
