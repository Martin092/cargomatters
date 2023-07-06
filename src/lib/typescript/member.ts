export class Member {
    image: string;
    alt: string;
    position: string;
    name: string;
    description: string;

    constructor(image:string, alt:string, position:string, name:string, description:string){
        this.image = image;
        this.alt = alt;
        this.position = position;
        this.name = name;
        this.description = description;
    }
}