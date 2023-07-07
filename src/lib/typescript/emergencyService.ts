export class EmergencyServiceClass{
    image: string;
    alt: string;
    subTitle: string;
    title: string;
    description: string;
    stats: Stat[];

    constructor(image:string, alt:string, subTitle:string, title:string, description:string, stats:Stat[]){
        this.image = image;
        this.alt = alt;
        this.subTitle = subTitle;
        this.title = title;
        this.description = description;
        this.stats = stats;
    }

}