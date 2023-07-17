import { addTranslations, setLocale, setRoute } from '$lib/translations';
import type { LayoutLoad } from './$types';

export const load = (async ({ data }) => {
    const { i18n, translations } = data;
    const { lang, route } = i18n;

    addTranslations(translations);

    await setRoute(route);
    await setLocale(lang);

    return i18n;
}) satisfies LayoutLoad;