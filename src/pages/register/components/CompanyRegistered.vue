<template>
	<div class="card">
		<h4>Bedrijf geregistreerd</h4>

		<p class="intro">
			Dank voor je aanmelding. We hebben een account aangemaakt.<br>
			je kunt nu inloggen met je email en wachtwoord.
		</p>
		<div class="center">
			<a href="https://planner.crew-craft.cc" class="button wdt30">inloggen</a>
		</div>
	</div>
</template>

<script setup>
	import { useRegistrationStore } from '../stores/registrationStore';	

	const registrationStore = useRegistrationStore();	
</script>

<style>
.email-send {
	font-family: Arial, sans-serif;
	text-align: center;
	margin-top: 50px;
}
</style>