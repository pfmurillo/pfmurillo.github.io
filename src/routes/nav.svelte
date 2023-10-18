<script>
	export let pageName;
	import { l, language } from '$lib/i18n';
	import { slide } from 'svelte/transition';
	let screenSize;
	let shown = false;
	const toggleNav = () => {
		shown = !shown;
	};
	const closeNav = () => {
		shown = false;
	};
</script>

<svelte:window bind:innerWidth={screenSize} />
<nav aria-label="Main Navigation">
	<a
		on:click={closeNav}
		href="/{$language}"
		class="logo stabilo"
		aria-current={pageName === 'home' ? 'page' : false}>{$l('global.title')}</a
	>
	<button on:click|preventDefault={toggleNav} class:shown />
	{#if screenSize > 680 || shown}
		<ul transition:slide>
			<li>
				<a
					on:click={closeNav}
					href="/{$language}/portfolio"
					aria-current={pageName === 'portfolio' ? 'page' : false}>{$l('nav.portfolio')}</a
				>
			</li>
			<li>
				<a
					on:click={closeNav}
					href="/{$language}/contact"
					aria-current={pageName === 'contact' ? 'page' : false}>{$l('nav.contact')}</a
				>
			</li>
		</ul>
	{/if}
</nav>

<style>
	nav {
		padding: 32px 48px 24px 48px;
		max-width: 1280px;
		margin: auto;
	}
	nav > ul {
		float: right;
		display: flex;
		flex-direction: row;
	}
	nav > ul > li {
		list-style-type: none;
		flex-grow: 0;
		margin-left: 24px;
	}
	nav > ul > li > a,
	nav > ul > li > a:visited {
		color: var(--text-color);
		display: block;
		text-decoration: none;
		padding: 5px 15px;
		transition: all 0.4s ease-out;
		width: fit-content;
		font-size: 1.2rem;
		font-weight: 400;
		border-radius: 4px;
	}
	nav > ul > li > a:not(.logo):hover {
		background-color: #cfcfcf60;
	}
	nav > ul > li > a:not(.logo)[aria-current='page'] {
		background: linear-gradient(transparent 0% 92%, var(--text-shadow) 92% 100%);
	}
	button,
	button::before,
	button::after {
		float: right;
		width: 40px;
		height: 40px;
		background: linear-gradient(transparent 47%, #423636 47% 53%, transparent 53%);
		transition: all 260ms ease-in-out;
	}
	button::before,
	button::after {
		position: relative;
		content: '';
	}
	button::before {
		transform: translate(0, -25%);
	}
	button::after {
		transform: translate(0, 25%);
		bottom: 40px;
	}
	button.shown {
		transform: rotate(45deg);
	}
	button.shown::before {
		transform: rotate(-90deg);
	}
	button.shown::after {
		transform: rotate(90deg);
	}
	button {
		display: none;
	}
	@media (max-width: 680px) {
		nav {
			padding: 18px;
		}
		.logo {
			font-size: 1.4rem;
		}
		button {
			display: block;
			margin-right: 8px;
		}
		nav > ul {
			flex-direction: column;
			padding: 0;
			width: 100%;
			margin: 24px 0px 36px 0px;
		}
		nav > ul > li > a {
			margin: 8px 0px 0px 0px;
			font-size: 1.8rem;
		}
	}
</style>
