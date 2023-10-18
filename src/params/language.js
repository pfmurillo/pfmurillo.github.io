import { languages } from '../lib/i18n';

export function match(value) {
	return languages.includes(value);
}
