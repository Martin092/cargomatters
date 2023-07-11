/**
 * Data structure used to load information into the benefit component
 */
export class BenefitClass {
    subTitle: string;
    mainTitle: string;
    message: string;
    photo: string;
    alt: string;
    linkMessage: string;
    link: string;

    /**
     * constructor
     * @param subTitle the subtitle of the benefit
     * @param mainTitle the main title of the benefit
     * @param message a description of the benefit
     * @param photo an image to support the benefit
     * @param alt alternative text of the image for accessibility
     * @param linkMessage the message that appears on the link
     * @param link where the link leads to
     */
    constructor(subTitle: string, mainTitle: string, message:string, photo:string, alt:string, linkMessage: string, link:string){
        this.subTitle = subTitle;
        this.mainTitle = mainTitle;
        this.message = message;
        this.photo = photo;
        this.alt = alt;
        this.link = link;
        this.linkMessage = linkMessage;
    }
}