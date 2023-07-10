/**
 * Data structure used to load information into the MainSolution component
 */
export class MainSolution {
    image: string;
    alt: string;
    type: string;
    description: string;
    bullets: string[];
    link: string;

    /**
     *
     * @param image supporting image
     * @param alt alternative text of the image for accessibility
     * @param type type of the solution
     * @param description short description
     * @param bullets bullet points that appear in the component
     * @param link where the link leads to
     */
    constructor(image:string, alt:string, type:string, description:string, bullets:string[], link:string){
        this.image = image;
        this.alt = alt;
        this.type = type;
        this.description = description;
        this.bullets = bullets;
        this.link = link;
    }
}