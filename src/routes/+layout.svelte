<script>
	import Nav from './nav.svelte';
	import Footer from './footer.svelte';
	import { onNavigate } from '$app/navigation';
	import { page } from '$app/stores';
	import { l, defaultLanguage, language } from '$lib/i18n';
	$: $language = $page.data.language ?? defaultLanguage;

	let pageName, pageTitle, pageDescription;
	$: {
		let regexp = '^';
		if ($page.data.language) {
			regexp += '/' + $page.data.language;
		}
		regexp += '/*';
		pageName = $page.url.pathname.replace(new RegExp(regexp), '') || 'home';
		pageTitle = $l('global.title') + ' - ' + $l(`${pageName}.title`);
		pageDescription = $l(`${pageName}.description`);
	}

	onNavigate((navigation) => {
		if (!document.startViewTransition) return;
		return new Promise((resolve) => {
			document.startViewTransition(async () => {
				resolve();
				await navigation.complete;
			});
		});
	});
</script>

<svelte:head>
	<title>{pageTitle}</title>
	<meta name="description" content={pageDescription} />
</svelte:head>

<header>
	<Nav {pageName} />
</header>

<main>
	<slot />
</main>

<Footer {pageName} />

<style>
	@import '../css/app.css';
	main {
		width: 100%;
		max-width: 1280px;
		margin: 78px auto 48px auto;
		padding: 76px 48px;
	}
	@media (max-width: 680px) {
		main {
			padding: 24px 18px;
		}
	}
</style>
