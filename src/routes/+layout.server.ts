import { loadTranslations, translations } from '$lib/translations';
import type { LayoutServerLoad } from './$types';

export const load = (async ({ url, locals }) => {
    const { pathname } = url;
    const { lang } = locals;

    const route = pathname.replace(new RegExp(`^/${lang}`), '');

    await loadTranslations(lang, route);

    return { i18n: { route, lang }, translations: translations.get() };
}) satisfies LayoutServerLoad;