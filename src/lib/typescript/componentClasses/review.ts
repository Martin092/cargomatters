/**
 * Data structure used to load information into the ReviewClass component
 */
export class ReviewClass {
    title: string;
    text: string;
    logo: string;
    alt: string;
    company: string;

    /**
     *
     * @param title title of the review
     * @param text body of the review
     * @param logo logo of the company that gives the review
     * @param alt alternative text of the logo for accessibility
     * @param company the name of the company
     */
    constructor(title:string, text:string, logo:string, alt:string, company:string){
        this.title = title;
        this.text = text;
        this.logo = logo;
        this.alt = alt;
        this.company = company;
    }
}