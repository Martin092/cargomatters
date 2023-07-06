export class MainSolution {
    image: string;
    alt: string;
    type: string;
    description: string;
    bullets: string[];
    link: string;

    constructor(image:string, alt:string, type:string, description:string, bullets:string[], link:string){
        this.image = image;
        this.alt = alt;
        this.type = type;
        this.description = description;
        this.bullets = bullets;
        this.link = link;
    }
}