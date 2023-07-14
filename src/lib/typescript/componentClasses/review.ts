/**
 * Data structure used to load information into the ReviewClass component
 */
export class ReviewClass {
    localizationKey: string;
    logo: string;

    /**
     * @param localizationKey key for lookup for translations inside the sveltekit-i18n
     * @param logo logo of the company that gives the review
     */
    constructor(localizationKey:string, logo:string){
        this.localizationKey = localizationKey;
        this.logo = logo;
    }
}