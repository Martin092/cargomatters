export class BenefitClass {
    subTitle: string;
    mainTitle: string;
    message: string;
    photo: string;
    alt: string;
    linkMessage: string;
    link: string;

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