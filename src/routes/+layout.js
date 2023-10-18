export const prerender = true;

import { redirect } from '@sveltejs/kit';

export function load({ params }) {	
	if (!params.language) {
		throw redirect(301, '/en');
	}
	return {
		language: params.language
	};
}
