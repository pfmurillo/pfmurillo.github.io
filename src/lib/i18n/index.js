import { locales } from './locales';
import { writable, derived } from 'svelte/store';

// get all available locales
export const languages = Object.keys(locales);
// define default language => first key in locales file
export const defaultLanguage = languages[0];
export const language = writable(defaultLanguage);
export const l = derived(language, ($language) => (data, language = null) => {
	if (!data) return;
	if (!language) {
		language = $language;
	}
	if (!locales[language]) return;
	if (!locales[language][data]) return;
	return locales[language][data];
});
