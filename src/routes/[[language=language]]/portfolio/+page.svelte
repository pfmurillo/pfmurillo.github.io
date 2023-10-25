<script>
	import { l } from '$lib/i18n';

	const imageFolder = '/images/portfolio/';
	const projects = [
		{
			title: 'Shrks',
			image: 'shrks-app.jpg',
			resume:
				'Tournois de billard dans les bars, disponible en application web, sur Google Play et Apple Store'
		},
		{
			title: 'Light Cone',
			image: 'light-cone.jpg',
			resume:
				'Distributeur de films œuvrant pour la conservation et la diffusion du cinéma expérimental'
		},
		{
			title: 'André Lhote',
			image: 'andre-lhote.jpg',
			resume:
				"Association pour la promotion, la sauvegarde de l'œuvre et de la mémoire du peintre André Lhote"
		},
		{
			title: 'Christian Daninos',
			image: 'christian-daninos.jpg',
			resume:
				"Commémoration de l'œuvre de l'artiste et plasticien Christian Daninos pour les 30 ans de sa disparition"
		},
		{
			title: 'Maison Dodue',
			image: 'maison-dodue.jpg',
			resume: "Tapissier d'ameublement engagé et responsable à Paris"
		},
		{
			title: 'Le roman des voyageuses',
			image: 'le-roman-des-voyageuses.jpg',
			resume:
				"L'auteure Françoise Lapeyre ouvre une large fenêtre sur les écrits et les pratiques des voyageuses françaises au XIXe siècle"
		}
	];
</script>

<h1>{$l('portfolio.h1')}</h1>
<p>{$l('portfolio.p')}</p>
<div id="gallery">
	{#each projects as { title, image, resume }}
		<div class="galleryItem">
			<img src={imageFolder + image} alt={title} class="illustration" />
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
