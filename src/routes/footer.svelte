<script>
	export let pageName;
	import { l, language, languages } from '$lib/i18n';
</script>

<footer>
	<ul aria-label="Language Selection">
		{#each languages.filter((lang) => lang != $language) as lang}
			<li>
				<a href="/{lang}{pageName != 'home' ? '/' + pageName : ''}" {lang} hreflang={lang}
					>{$l('language.version', lang)}</a
				>
			</li>
		{/each}
	</ul>
	<ul>
		<li><a href="https://github.com/pfmurillo" class="github" target="_blank">/pfmurillo</a></li>
		<li>
			<a href="https://www.linkedin.com/in/pfmurillo" class="linkedin" target="_blank">/pfmurillo</a
			>
		</li>
	</ul>
	2023 - {$l('global.title')}
</footer>

<style>
	footer {
		background-color: var(--accent-color);
		color: aliceblue;
		padding: 96px 0px;
		margin: auto 0px 0px 0px;
		text-align: center;
		font-size: 1.1rem;
		font-weight: 400;
	}

	footer > ul:last-of-type {
		margin-bottom: 14px;
	}

	footer > ul > li {
		display: inline-block;
		list-style-type: none;
		margin: 12px;
	}

	footer > ul > li > a {
		text-decoration: none;
		color: inherit;
		background-repeat: no-repeat;
		background-position: left center;
		background-size: contain;
	}

	footer > ul > li > a.github {
		padding-left: 28px;
		background-image: var(--icon-github);
	}

	footer > ul > li > a.linkedin {
		padding-left: 28px;
		background-image: var(--icon-linkedin);
	}

	@media (max-width: 680px) {
		footer {
			padding: 48px 0px;
		}
	}
</style>
