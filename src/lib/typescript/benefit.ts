export class BenefitClass {
    message: string;
    photo: string;
    alt: string;
    linkMessage: string;
    link: string;

    constructor(message:string, photo:string, alt:string, linkMessage: string, link:string){
        this.message = message;
        this.photo = photo;
        this.alt = alt;
        this.link = link;
        this.linkMessage = linkMessage;
    }
}