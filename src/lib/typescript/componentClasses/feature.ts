/**
 * Class for information about a Feature. Used in parallel with the Feature reusable component
 * to render a feature usually inside of feature lists or transport solutions
 */
export class FeatureClass {
    localizationKey:string;
    link: string;

    /**
     * Construct a feature
     * @param localizationKey the key for translations using the sveltekit i18n
     * @param link the link to where this feature should lead to. Could be omitted if a transport feature
     */
    constructor(localizationKey:string, link: string) {
        this.localizationKey = localizationKey;
        this.link = link;
    }
}