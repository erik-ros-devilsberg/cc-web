<template>
	<header>
		<RouterLink to="/" class="wrapper">
			<img alt="CREW-CRAFT logo" id="headerLogo" src="@/assets/crew-craft-logo-2024.svg" width="60" height="60" />
			<h1>CREW-CRAFT</h1>
		</RouterLink>

		<nav>
			<RouterLink to="/about">Over</RouterLink>
			<a @click="toggleMenu">Inloggen</a>
            <div v-if="showMenu" id="appMenu">
                <a href="https://crew.crew-craft.cc" target="_blank">CREW</a>
                <a href="https://planner.crew-craft.cc" target="_blank">PLANNER</a>
            </div>
		</nav>
	</header>
</template>

<script setup>
	import { ref } from 'vue';

	const showMenu = ref(false);

	function toggleMenu() {
		console.log('toggleMenu');
		showMenu.value = !showMenu.value;
	}

</script>

<style>

header {
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 20px 20px;
	border:1pxk solid blue;
	width:100%;
}

header .wrapper{
	display: flex;
	align-items: center;
	justify-content: left;
	text-decoration: none;
	color: var(--onPrimaryContainer);
}

header h1{
	font-size: 1em;
	text-align: left;
	text-transform: uppercase;
	margin-left: 20px;
	text-decoration: none;
}

nav {
	display: flex;
	justify-content: right;
	align-items: center;
}

nav a {
	margin-left: 20px;
	text-decoration: none;
	color: var(--onPrimaryContainer);
	text-transform: uppercase;
	font-family: "Urbanist";
	cursor: pointer; 

}

#appMenu {
    position: absolute;
    background-color: #fff;
    box-shadow: 0 4px 8px rgba(0,0,0,0.1);
    padding: 10px;
    border-radius: 4px;
    top: 80px;
    right: 0;
}

#appMenu a {
    display: block;
    padding: 10px 20px;
    text-decoration: none;
    color: #333;
	border-radius: 4px;
}

#appMenu a:hover {
	background-color: var(--secundary);
}

</style>