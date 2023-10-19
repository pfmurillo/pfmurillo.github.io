<script>
	import { onMount } from 'svelte';
	import { l } from '$lib/i18n';
	import QRCode from 'qrcode';

	const QRData = `BEGIN:VCARD\nVERSION:4.0\nFN:Pierre-Frédéric Murillo\nTITLE:Développeur Web\nORG:Freelance\nTEL;TYPE=work,voice;VALUE=uri:tel:+33 6 50 81 91 55\nEMAIL:pierrefrederic.murillo@gmail.com\nEND:VCARD`;

	const QRParams = {
		color: {
			light: '#0000',
			dark: '#000'
		},
		width: 260
	};

	onMount(() => {
		QRCode.toCanvas(canvas, QRData, QRParams);
	});
</script>

<h1>{$l('contact.h1')}</h1>
<p>{@html $l('contact.p')}</p>

<address>
	<a class="tel" href="tel:+33650819155">+33 6 50 81 91 55</a>
	<a class="mailto" href="mailto:pierrefrederic.murillo@gmail.com"
		>pierrefrederic.murillo@gmail.com</a
	>
</address>

<div id="vCard">
	<h2>👇 {$l('contact.h2')}</h2>
	<a href="/pierre-murillo.vcard">
		<canvas id="canvas" />
	</a>
</div>

<style>
	:root {
		--icon-tel: url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9Im5vbmUiIHZpZXdCb3g9IjAgMCAyNCAyNCIgc3Ryb2tlLXdpZHRoPSIxLjUiIHN0cm9rZT0iY3VycmVudENvbG9yIiBjbGFzcz0idy02IGgtNiI+CiAgPHBhdGggc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBkPSJNMi4yNSA2Ljc1YzAgOC4yODQgNi43MTYgMTUgMTUgMTVoMi4yNWEyLjI1IDIuMjUgMCAwMDIuMjUtMi4yNXYtMS4zNzJjMC0uNTE2LS4zNTEtLjk2Ni0uODUyLTEuMDkxbC00LjQyMy0xLjEwNmMtLjQ0LS4xMS0uOTAyLjA1NS0xLjE3My40MTdsLS45NyAxLjI5M2MtLjI4Mi4zNzYtLjc2OS41NDItMS4yMS4zOGExMi4wMzUgMTIuMDM1IDAgMDEtNy4xNDMtNy4xNDNjLS4xNjItLjQ0MS4wMDQtLjkyOC4zOC0xLjIxbDEuMjkzLS45N2MuMzYzLS4yNzEuNTI3LS43MzQuNDE3LTEuMTczTDYuOTYzIDMuMTAyYTEuMTI1IDEuMTI1IDAgMDAtMS4wOTEtLjg1Mkg0LjVBMi4yNSAyLjI1IDAgMDAyLjI1IDQuNXYyLjI1eiIgLz4KPC9zdmc+Cg==');
		--icon-mailto: url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9Im5vbmUiIHZpZXdCb3g9IjAgMCAyNCAyNCIgc3Ryb2tlLXdpZHRoPSIxLjUiIHN0cm9rZT0iY3VycmVudENvbG9yIiBjbGFzcz0idy02IGgtNiI+CiAgPHBhdGggc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBkPSJNMjEuNzUgNi43NXYxMC41YTIuMjUgMi4yNSAwIDAxLTIuMjUgMi4yNWgtMTVhMi4yNSAyLjI1IDAgMDEtMi4yNS0yLjI1VjYuNzVtMTkuNSAwQTIuMjUgMi4yNSAwIDAwMTkuNSA0LjVoLTE1YTIuMjUgMi4yNSAwIDAwLTIuMjUgMi4yNW0xOS41IDB2LjI0M2EyLjI1IDIuMjUgMCAwMS0xLjA3IDEuOTE2bC03LjUgNC42MTVhMi4yNSAyLjI1IDAgMDEtMi4zNiAwTDMuMzIgOC45MWEyLjI1IDIuMjUgMCAwMS0xLjA3LTEuOTE2VjYuNzUiIC8+Cjwvc3ZnPgo=');
	}
	address {
		width: fit-content;
		margin: 48px auto;
	}
	address > a {
		color: inherit;
		padding: 0px 0px 0px 36px;
		display: block;
		width: fit-content;
		text-decoration: none;
		font-style: normal;
		font-size: 1.2rem;
		background-size: auto 68%;
		background-position: left center;
		background-repeat: no-repeat;
	}
	.tel {
		background-image: var(--icon-tel);
	}
	.mailto {
		background-image: var(--icon-mailto);
	}
	#canvas {
		display: block;
		margin: auto;
	}
	#vCard {
		text-align: right;
		width: fit-content;
		margin: 38px auto 0px auto;
	}
	#vCard > h2 {
		position: relative;
		top: 0px;
		right: -32px;
		transform: rotate(6deg);
	}
</style>
