<template>
	<section id="hero">
		<div id="leader">
			<h1>Eenvoudig roosteren en tijd schrijven</h1>
			<p id="standFirst">&quot;Eenvoudig werkt vaak toch het best&quot;</p>
			<div v-if="!state.isSend">
				<RouterLink to="register" class="button">Begin gratis</RouterLink><br>
				<p class="disclaimer">inschrijven voor bedrijven eenvoudig in 3 stappen</p>
			</div>
			<div v-else>
				<h4>Registratie:</h4>
				<p v-if="indexStore.status == 'success'">succesvol. Bedankt voor je interesse, we nemen zo snel mogelijk contact met je op.</p>
				<p v-else-if="indexStore.status == 'failed'">mislukt. Het inschrijven is helaas niet gelukt. Probeer het later opnieuw</p>
				<p v-else>...</p>
			</div>
		</div>
		<img src="@/assets/hero-image-800x800.png" id="heroImage" alt="artistic impression of the CREW-CRAFT platform" >
	</section>
</template>
<script setup>

	import { reactive } from 'vue';
	import { useIndexStore } from '@/pages/index/indexStore.js';

	const state = reactive({
		isSend: false
	});

	const indexStore = useIndexStore();
	indexStore.initialize();

	function sendForm() {
		if (document.getElementById('email').value !== '') {
			indexStore.register(document.getElementById('email').value);
			state.isSend = true;
		}
	}
</script>
<style>
	#hero {
		display: flex;
		justify-content: center;
		align-items: stretch;
		height: 50vh;
		background-repeat: no-repeat;
		background-size: cover;
		background-attachment: fixed;
		background-color:  var(--surface);
		background-image: linear-gradient(to top right, var(#FFF), var(--secundary));
		display: flex; /* or inline-flex */
		flex-direction: row;
		border-radius: 40px;
		flex-wrap: nowrap;
		padding: 40px;
		min-height: 500px; /* Example minimum height */

	}

	#leader {
		width: 50%; /* Take up left half */
		align-items: flex-start;
		color: var(--onPrimaryContainer);
		font-family: "Urbanist";
		margin-right: 20px;
	}

	#leader h1 {
		font-size: 2.8em;
		font-weight: 900;
		margin-bottom: 40px;
		text-transform: uppercase;
	}

	#standFirst {
		font-size: 1.2em;
		font-weight: 500;
		margin-bottom: 40px;
		text-transform: none;
		font-family: "SourceCodePro";
	}

	#hero img {
		width: 50%; /* Make the image fill the container width */
		height: auto; /* Adjust the height automatically to maintain aspect ratio */
		object-fit: contain; /* This will make sure the image is scaled to be fully visible */
		margin-left: 20px;
	}

	#hero form {
		display: inline-block;
		flex-direction: row;
	}

	@media only screen and (max-width: 800px) {
		#hero {
			flex-direction: column;
			height: auto;
		}

		#leader {
			width: 100%;
			order: 2;
		}

		#hero img {
			width: 100%;
			margin-left: 0;
			order:1;
			display: none;
		}

		#hero input,
		#hero button{
			width: 90%;
		}
	}

</style>