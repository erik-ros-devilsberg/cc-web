<template>
	<div class="card">
		<h4>Registreren</h4>
		<p class="intro">
			stap 3/3: Bedrijfsinformatie?
		</p>
		<div class="flex center">
			<input class="wdt90" type="text" id="company_name" placeholder="bedrijfsnaam" v-model="state.email" required><br>
			<label class="switch">
				<input type="checkbox"
					id="voorwaarden"
					name="voorwaarden"
				/>
						<span class="slider round"></span>
					</label>&nbsp;
			<a href="#">voorwaarden geaccepteerd</a> <br>
			<span class="center wdt90">
				<button class="wdt40" type="submit" @click="registrationStore.companyIsRegistered=true">opslaan</button>
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
