/**
 * Data structure used to load information into the benefit component
 */
export class BenefitClass {
    localizationKey: string;
    image: string;
    link: string;

    /**
     * Construct a BenefitClass
     * @param localizationKey the key to lookup for translations in the i18n
     * @param image an image to support the benefit
     * @param link where the link leads to
     */
    constructor(localizationKey:string, image:string, link:string){
        this.localizationKey = localizationKey;
        this.image = image;
        this.link = link;
    }
}