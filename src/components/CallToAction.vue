<template>
	<div id="callToAction">
		<div class="row" >
			<template v-if="!indexStore.isSend">
				<input 
					placeholder="email"
					id="email"
					type="email"
					name="email">&nbsp;
				<button @click="sendForm">Begin gratis</button>
			</template>
			<template v-else>
				<h4>Registratie: 
					<template v-if="indexStore.status == 'success'">succesvol. Bedankt voor je interesse, we nemen zo snel mogelijk contact met je op.</template>
					<template v-else-if="indexStore.status == 'failed'">mislukt. Het inschrijven is helaas niet gelukt. Probeer het later opnieuw</template>
					<template v-else>...</template>
				</h4>
			</template>
		</div>
		<div class="row">
			<p class="disclaimer">(Schrijf je hier als bedrijf in. Je betaalt niets als je de app niet wilt gebruiken. Wij nemen contact met je op om je opweg te helpen)</p>
		</div>
	</div>
</template>

<script setup>
	import {useIndexStore} from '@/pages/index/indexStore';
	const indexStore = useIndexStore();

	function sendForm() {
		if (document.getElementById('email').value !== '') {
			indexStore.register(document.getElementById('email').value);
			indexStore.isSend = true;
		}
	}

</script>

<style>
#callToAction{
	display: flex;
	justify-content: center;
	flex-direction: row;
	flex-wrap: wrap;
	align-items: stretch;
	background-repeat: no-repeat;
	background-size: cover;
	background-attachment: fixed;
	background-color: var(--secundary);
	background-image: linear-gradient(to top right, var(--onPrimary), var(--secundary));
	border-radius: 20px;
	padding: 60px;
	padding-top: 80px;
	min-height: 100px; /* Example minimum height */
}

#callToAction .row{
	display: flex;
	justify-content: center;
	flex-direction: row;
	flex-wrap: nowrap;
	align-items: center;
	min-width: 100%;
}

#callToAction input{
	margin: 0px;
	padding: 8px;
	color: var(--error)
}

#callToAction button{
	background-color: var(--error);
}

#callToAction p{
	margin-top: 10px;
}

</style>