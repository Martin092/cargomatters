import i18n from 'sveltekit-i18n'
import type {Config} from 'sveltekit-i18n'
import lang from './lang.json';

const config:Config = {
    translations: {
        en: { lang },
        bg: { lang },
    },
    loaders: [
        // English Localization
        {
            locale: 'en',
            key: 'home',
            loader: async () => (await import('./en/home.json')).default,
        },
        {
            locale: 'en',
            key: 'header',
            loader: async () => (await import('./en/header.json')).default,
        },
        {
            locale: 'en',
            key: 'footer',
            loader: async () => (await import('./en/footer.json')).default,
        },
        {
            locale: 'en',
            key: 'benefits',
            loader: async () => (await import('./en/benefits.json')).default,
        },
        {
            locale: 'en',
            key: 'social-proof',
            loader: async () => (await import('./en/social-proof.json')).default,
        },
        {
            locale: 'en',
            key: 'faq',
            loader: async () => (await import('./en/faq.json')).default,
        },
        {
            locale: 'en',
            key: 'cta',
            loader: async () => (await import('./en/cta.json')).default,
        },
        {
            locale: 'en',
            key: 'contact',
            loader: async () => (await import('./en/contact.json')).default,
        },
        {
            locale: 'en',
            key: 'work-process',
            loader: async () => (await import('./en/work-process.json')).default,
        },
        {
            locale: 'en',
            key: 'about',
            loader: async () => (await import('./en/about.json')).default,
        },
        {
            locale: 'en',
            key: 'error',
            routes: ['error'],
            loader: async () => (await import('./en/error.json')).default,
        },

        // Bulgarian Localization
        {
            locale: 'bg',
            key: 'home',
            loader: async () => (await import('./bg/home.json')).default,
        },
        {
            locale: 'bg',
            key: 'header',
            loader: async () => (await import('./bg/header.json')).default,
        },
        {
            locale: 'bg',
            key: 'footer',
            loader: async () => (await import('./bg/footer.json')).default,
        },
        {
            locale: 'bg',
            key: 'benefits',
            loader: async () => (await import('./bg/benefits.json')).default,
        },
        {
            locale: 'bg',
            key: 'social-proof',
            loader: async () => (await import('./bg/social-proof.json')).default,
        },
        {
            locale: 'bg',
            key: 'faq',
            loader: async () => (await import('./bg/faq.json')).default,
        },
        {
            locale: 'bg',
            key: 'cta',
            loader: async () => (await import('./bg/cta.json')).default,
        },
        {
            locale: 'bg',
            key: 'contact',
            loader: async () => (await import('./bg/contact.json')).default,
        },
        {
            locale: 'bg',
            key: 'work-process',
            loader: async () => (await import('./bg/work-process.json')).default,
        },
        {
            locale: 'bg',
            key: 'about',
            loader: async () => (await import('./bg/about.json')).default,
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