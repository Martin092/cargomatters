/**
 * Data structure used to load information into the IndustrySolution component
 */
export class IndustrySolutionClass{
    image: string;
    alt: string;
    type: string;
    link: string;
    localizationKey: string;

    /**
     * @param image image that represents the industry
     * @param alt alternative text of the image for accessibility
     * @param type name of the industry
     * @param link where the link leads to
     */
    constructor(image:string, alt:string, type:string, link:string, localizationKey:string){
        this.image = image;
        this.alt = alt;
        this.type = type;
        this.link = link;
        this.localizationKey = localizationKey;
    }
}