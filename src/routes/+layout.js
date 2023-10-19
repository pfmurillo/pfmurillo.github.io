export const prerender = true;

export function load({ params }) {
	return {
		language: params.language
	};
}
