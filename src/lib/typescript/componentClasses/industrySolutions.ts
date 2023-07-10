export class IndustrySolutionClass{
    image: string;
    alt: string;
    title: string; 
    description: string;
    linkText: string;
    link: string;

    constructor(image:string, alt:string, title:string, description:string, linkText:string, link:string){
        this.image = image;
        this.alt = alt;
        this.title = title;
        this.description = description;
        this.linkText = linkText;
        this.link = link;
    }
}