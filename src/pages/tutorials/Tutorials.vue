<template>
	<Header />
	<main>
		<h1>Tutorials</h1>
		<p>Here you will find tutorials on how to use the application.</p>
		<div id="tutorialGrid">
			<div>
				<h4>app installeren</h4>
				<iframe width="460" height="216" src="https://www.youtube.com/embed/ZV4EYQNRgq8?si=Ftcmuzt7ywM1dQAg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
			</div>
			<div>
				<h4>wachtwoord reset</h4>
				<iframe width="460" height="216" src="https://www.youtube.com/embed/--tODLgFl8k?si=0s5P4Ki4ZvYkE7HU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
			</div>
			<div>
				<h4>persoonlijke gegevens invullen</h4>
				<iframe width="460" height="216" src="https://www.youtube.com/embed/R_V3sSHYyOw?si=Fhr8z8pY0lOxY2Gj" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
			</div>
			<div>
				<h4>tijdschrijven (voor captains)</h4>
				<iframe width="460" height="216" src="https://www.youtube.com/embed/y7tLmtDq3hY?si=XBoAgpbAoA18gWos" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
			</div>
		</div>
	</main>	
	<Footer />
</template>
<script setup>
	import Header from '@/components/Header.vue';
	import Footer from '@/components/Footer.vue';
</script>
<style>
	#tutorialGrid {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
		grid-gap: 20px;
	}
	#tutorialGrid div {
		border: 1px solid #ccc;
		padding: 20px;
	}
</style>