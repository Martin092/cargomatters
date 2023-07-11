/**
 * Data structure used to load information into the IndustrySolution component
 */
export class IndustrySolutionClass{
    image: string;
    alt: string;
    title: string; 
    description: string;
    linkText: string;
    link: string;

    /**
     * @param image image that represents the industry
     * @param alt alternative text of the image for accessibility
     * @param title name of the industry
     * @param description short description of what the industry does
     * @param linkText the message that appears on the link
     * @param link where the link leads to
     */
    constructor(image:string, alt:string, title:string, description:string, linkText:string, link:string){
        this.image = image;
        this.alt = alt;
        this.title = title;
        this.description = description;
        this.linkText = linkText;
        this.link = link;
    }
}