/**
 * Data structure used to load information into the BusinessReviewClass component
 */
export class BusinessReviewClass {
    localizationKey: string;
    logo: string;
    alt: string;

    /**
     * Construct a Business Review
     * @param logo logo of the company that gives the review
     * @param alt alternative text of the logo for accessibility
     * @param localizationKey the name of the company
     */
    constructor(logo:string, alt:string, localizationKey:string){
        this.logo = logo;
        this.alt = alt;
        this.localizationKey = localizationKey;
    }
}