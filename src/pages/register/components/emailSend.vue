<template>
	<div class="card">
		<h4>Email verstuurd</h4>

		<p class="intro">
			Dank voor je aanmelding. We hebben je een email gestuurd met instructies voor stap 2.<br>
			
		</p>
		<div class="center">
			<RouterLink to="/" class="button wdt30">home</RouterLink>
		</div>
	</div>
	<RouterLink to="/register2" class="button wdt30">stap 2</RouterLink>

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