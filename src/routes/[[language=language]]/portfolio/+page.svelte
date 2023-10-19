<script>
	import { l } from '$lib/i18n';

	const imageFolder = '/images/portfolio/';
	const images = [
		{
			name: 'shrks-app.jpg',
			alt: 'Shrks',
			title: 'Shrks',
			href: 'https://web.shrks.app',
			resume:
				'Tournois de billard dans les bars, disponible en application web, sur Google Play et Apple Store '
		},
		{
			name: 'light-cone.jpg',
			alt: 'Light Cone',
			title: 'Light Cone',
			href: 'https://lightcone.org',
			resume: 'Distributeur de films de cinéma expérimental'
		},
		{
			name: 'andre-lhote.jpg',
			alt: 'Le site de André Lhote',
			title: 'André Lhote',
			href: 'https://andre-lhote.org',
			resume: 'Artiste peintre'
		},
		{
			name: 'christian-daninos.jpg',
			alt: 'Christian Daninos',
			title: 'Christian Daninos',
			href: 'https://christiandaninos.com',
			resume: 'Plasticien'
		},
		{
			name: 'maison-dodue.jpg',
			alt: 'Le site de Maison Dodue',
			title: 'Maison Dodue',
			href: 'https://maisondodue.com',
			resume: "Tapissier d'ameublement engagé et responsable à Paris"
		},
		{
			name: 'le-roman-des-voyageuses.jpg',
			alt: 'Le roman des voyageuses',
			title: 'Le roman des voyageuses',
			href: 'https://leromandesvoyageuses.fr',
			resume: 'Autrice'
		}
	];
</script>

<h1>{$l('portfolio.h1')}</h1>
<p>{$l('portfolio.p')}</p>
<div id="gallery">
	{#each images as { name, alt, title, href, resume }}
		<div class="galleryItem">
			<img src={imageFolder + name} {alt} class="illustration" />
			<div class="description">
				<span class="title">{title}</span>
				<p class="resume">{resume}</p>
			</div>
		</div>
	{/each}
</div>

<style>
	#gallery {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		margin-top: 48px;
		gap: 2rem;
	}
	@media (max-width: 1180px) {
		#gallery {
			grid-template-columns: repeat(2, 1fr);
		}
	}
	@media (max-width: 680px) {
		#gallery {
			grid-template-columns: repeat(1, 1fr);
		}
	}
	div.galleryItem {
		box-sizing: content-box;
		border-radius: 8px;
		box-shadow: 0px 1px 3px #acacac70;
		background-color: #fff;
		width: 100%;
	}
	div.description {
		padding: 16px;
		margin: 0;
	}
	span.title {
		margin: 0;
		padding: 0;
		color: #423636;
		font-weight: 400;
	}
	img.illustration {
		width: 100%;
		border-radius: 8px 8px 0px 0px;
	}
	p.resume {
		padding: 4px 0px;
		margin: 0;
		font-size: 1.1rem;
		width: 100%;
		line-height: 24px;
	}
</style>
