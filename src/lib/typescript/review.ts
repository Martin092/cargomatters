export class ReviewClass {
    title: string;
    text: string;
    logo: string;
    alt: string;
    company: string;

    constructor(title:string, text:string, logo:string, alt:string, company:string){
        this.title = title;
        this.text = text;
        this.logo = logo;
        this.alt = alt;
        this.company = company;
    }
}