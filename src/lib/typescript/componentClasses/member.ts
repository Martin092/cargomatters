/**
 * Data structure used to load information into the Member component
 */
export class Member {
    image: string;
    alt: string;
    position: string;
    name: string;
    description: string;

    /**
     *
     * @param image an image of the member
     * @param alt alternative text of the image for accessibility
     * @param position position of the member in the company hierarchy
     * @param name name of the member
     * @param description short description of the member
     */
    constructor(image:string, alt:string, position:string, name:string, description:string){
        this.image = image;
        this.alt = alt;
        this.position = position;
        this.name = name;
        this.description = description;
    }
}