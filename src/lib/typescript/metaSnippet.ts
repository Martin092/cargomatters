/**
 * MetaSnippet class used to load dynamic meta information for a page
 * using the Meta component.
 */
export class MetaSnippet {
    /**
     * Construct a meta snippet used in the Meta component
     * to load meta SEO information about the website
     * @param _title the title of the page
     * @param _metaDescription the description of the page
     * @param _type the type of the page. Usually left as
     * 'website'
     */
    constructor(
        private _title:string,
        private _metaDescription:string,
        private _type:string
    )
    {}

    /**
     * Get the meta description of the page
     */
    get metaDescription(): string {
        return this._metaDescription;
    }

    get title(): string {
        return this._title;
    }

    get type(): string {
        return this._type;
    }
}