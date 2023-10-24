<script>
	import { l, language } from '$lib/i18n';
</script>

<div id="introducing">
	<div>
		<img src="/images/home/pierre-murillo.jpg" alt="Pierre Murillo" class="profilePicture" />
	</div>
	<div>
		<h1><span id="salute">👋</span>{$l('home.h1')}</h1>
		<h2>{$l('home.h2')}</h2>
	</div>
</div>
<p>
	{@html $l('home.p_work')}
</p>
<p>
	{@html $l('home.p_front')}
</p>
<p>
	{@html $l('home.p_steps')}
</p>
<p>
	{@html $l('home.p_contact')}
	<a href="/{$language}/contact" class="logo stabilo">{$l('home.contact')}</a>
</p>

<style>
	#introducing {
		display: flex;
		flex-direction: row;
		text-align: left;
		width: fit-content;
		margin: 48px auto;
	}
	#introducing > div {
		margin: 0;
	}
	#introducing > div:first-of-type {
		margin-right: 24px;
	}
	#introducing > div:last-of-type {
		margin-left: 24px;
	}
	@media (max-width: 680px) {
		#introducing {
			margin: 24px auto 48px auto;
			flex-direction: column;
		}
		#introducing > div:first-of-type {
			margin-right: 0px;
		}
		#introducing > div:last-of-type {
			margin-top: 24px;
			margin-left: 0px;
		}
		p {
			margin-top: 18px;
		}
	}
	#salute {
		text-shadow: none;
		display: inline-block;
		margin-right: 18px;
		animation-name: salute;
		animation-duration: 5s;
		animation-timing-function: ease-in-out;
	}
	@keyframes salute {
		0% {
			transform: rotate(0deg);
		}
		52% {
			transform: rotate(0deg);
		}
		55% {
			transform: rotate(27deg);
		}
		58% {
			transform: rotate(-27deg);
		}
		61% {
			transform: rotate(16deg);
		}
		64% {
			transform: rotate(-12deg);
		}
		68% {
			transform: rotate(8deg);
		}
		100% {
			transform: rotate(0deg);
		}
	}
	img.profilePicture {
		transform: rotate(-6deg);
		width: 200px;
		display: block;
		margin: auto;
		border: 6px solid var(--text-shadow);
		border-radius: 50%;
		filter: brightness(1.2);
	}
</style>
