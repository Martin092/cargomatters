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
            loader: async () => (await import('./en/pages/home.json')).default,
        },
        {
            locale: 'en',
            key: 'header',
            loader: async () => (await import('./en/components/header.json')).default,
        },
        {
            locale: 'en',
            key: 'footer',
            loader: async () => (await import('./en/components/footer.json')).default,
        },
        {
            locale: 'en',
            key: 'benefits',
            loader: async () => (await import('./en/components/benefits.json')).default,
        },
        {
            locale: 'en',
            key: 'social-proof',
            loader: async () => (await import('./en/components/social-proof.json')).default,
        },
        {
            locale: 'en',
            key: 'faq',
            loader: async () => (await import('./en/components/faq.json')).default,
        },
        {
            locale: 'en',
            key: 'cta',
            loader: async () => (await import('./en/components/cta.json')).default,
        },
        {
            locale: 'en',
            key: 'contact',
            loader: async () => (await import('./en/pages/contact.json')).default,
        },
        {
            locale: 'en',
            key: 'work-process',
            loader: async () => (await import('./en/components/work-process.json')).default,
        },
        {
            locale: 'en',
            key: 'about',
            loader: async () => (await import('./en/pages/about.json')).default,
        },
        {
            locale: 'en',
            key: 'error',
            routes: ['error'],
            loader: async () => (await import('./en/pages/error.json')).default,
        },

        // Bulgarian Localization
        {
            locale: 'bg',
            key: 'home',
            loader: async () => (await import('./bg/pages/home.json')).default,
        },
        {
            locale: 'bg',
            key: 'header',
            loader: async () => (await import('./bg/components/header.json')).default,
        },
        {
            locale: 'bg',
            key: 'footer',
            loader: async () => (await import('./bg/components/footer.json')).default,
        },
        {
            locale: 'bg',
            key: 'benefits',
            loader: async () => (await import('./bg/components/benefits.json')).default,
        },
        {
            locale: 'bg',
            key: 'social-proof',
            loader: async () => (await import('./bg/components/social-proof.json')).default,
        },
        {
            locale: 'bg',
            key: 'faq',
            loader: async () => (await import('./bg/components/faq.json')).default,
        },
        {
            locale: 'bg',
            key: 'cta',
            loader: async () => (await import('./bg/components/cta.json')).default,
        },
        {
            locale: 'bg',
            key: 'contact',
            loader: async () => (await import('./bg/pages/contact.json')).default,
        },
        {
            locale: 'bg',
            key: 'work-process',
            loader: async () => (await import('./bg/components/work-process.json')).default,
        },
        {
            locale: 'bg',
            key: 'about',
            loader: async () => (await import('./bg/pages/about.json')).default,
        },
        {
            locale: 'bg',
            key: 'error',
            routes: ['error'],
            loader: async () => (await import('./bg/pages/error.json')).default,
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