import { defaultLocale, loadTranslations, locales } from '$lib/translations';
import type {Handle, HandleServerError} from "@sveltejs/kit";

export const handle = (async ({ event, resolve }) => {
    const { url, request } = event;
    const { pathname } = url;

    // Get defined locales
    const supportedLocales = locales.get();

    // Try to get locale from `pathname`.
    let locale = supportedLocales.find((l) => l === `${pathname.match(/[^/]+?(?=\/|$)/)}`.toLowerCase());

    // If route locale is not supported
    if (!locale) {
        // Get user preferred locale
        // locale = `${`${request.headers.get('accept-language')}`.match(/[a-zA-Z]+?(?=-|_|,|;)/)}`.toLowerCase();
        locale = "en";

        // Set default locale if user preferred locale does not match
        if (!supportedLocales.includes(locale)) locale = defaultLocale;

        // 301 redirect
        return new Response(undefined, { headers: { 'location': `/${locale}${pathname}` }, status: 301 });
    }

    // Add html `lang` attribute
    return resolve({ ...event, locals: { lang: locale } }, {
        transformPageChunk: ({ html }) => html.replace(/<html.*>/, `<html lang="${locale}">`),
    });
}) satisfies Handle;

export const handleError = (async ({ event }) => {
    const { locals } = event;
    const { lang } = locals;

    await loadTranslations(lang, 'error');
    return locals;
// @ts-ignore
}) satisfies HandleServerError;