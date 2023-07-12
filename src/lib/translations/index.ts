import i18n from 'sveltekit-i18n'
import type {Config} from 'sveltekit-i18n'
import lang from './lang.json';

const config:Config = {
    translations: {
        en: { lang },
        bg: { lang },
    },
    loaders: [
        {
            locale: 'en',
            key: 'home',
            loader: async () => (await import('./en/home.json')).default,
        },
        {
            locale: 'bg',
            key: 'home',
            loader: async () => (await import('./bg/home.json')).default,
        },
        {
            locale: 'en',
            key: 'header',
            loader: async () => (await import('./en/header.json')).default,
        },
        {
            locale: 'bg',
            key: 'header',
            loader: async () => (await import('./bg/header.json')).default,
        },
        {
            locale: 'en',
            key: 'error',
            routes: ['error'],
            loader: async () => (await import('./en/error.json')).default,
        },
        {
            locale: 'bg',
            key: 'error',
            routes: ['error'],
            loader: async () => (await import('./bg/error.json')).default,
        },
    ],
};

export const defaultLocale = 'en';

export const { t, locale, locales, loading, addTranslations, loadTranslations, translations, setRoute, setLocale } = new i18n(config);

// Translations logs
loading.subscribe(async ($loading) => {
    if ($loading) {
        console.log('Loading translations...');

        await loading.toPromise();
        console.log('Updated translations', translations.get());
    }
});