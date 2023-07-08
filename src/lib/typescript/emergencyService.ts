import type {Stat} from "$lib/typescript/Stats";

export class EmergencyServiceClass{
    image: string;
    alt: string;
    icon: string;
    subTitle: string;
    title: string;
    description: string;
    stats: Stat[];

    constructor(image:string, alt:string, icon:string, subTitle:string, title:string, description:string, stats:Stat[]){
        this.image = image;
        this.alt = alt;
        this.icon = icon;
        this.subTitle = subTitle;
        this.title = title;
        this.description = description;
        this.stats = stats;
    }

}