/**
 * MetaSnippet class used to load dynamic meta information for a page
 * using the Meta component.
 */
export class MetaSnippet {
    /**
     * Construct a meta snippet used in the Meta component to load meta SEO information about the website
     * @param _localizationKey the localization key used for translations lookup
     * @param _type the type of the page. Usually left as 'website'
     */
    constructor(
        private _localizationKey:string,
        private _type:string
    )
    {}

    /**
     * Get the localization key used for i18n lookup
     */
    get localizationKey(): string {
        return this._localizationKey;
    }

    /**
     * Get the type of the page
     */
    get type(): string {
        return this._type;
    }
}

export class MetaSnippetBuilder {
    private _localizationKey:string = "";
    private _type:string = "";

    setLocalizationKey(key:string):MetaSnippetBuilder {
        this._localizationKey = key;
        return this;
    }

    withType(type:string):MetaSnippetBuilder {
        this._type = type;
        return this;
    }

    build():MetaSnippet {
        return new MetaSnippet(this._localizationKey, this._type);
    }
}